require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/products', (req, res, next) => {
  const sql = `
    select "productId",
      "name",
      "price",
      "image",
      "shortDescription"
    from "products"
  `;

  db.query(sql)
    .then(result => {
      const products = result.rows;
      res.status(200).json(products);
    })
    .catch(err => next(err));
});

app.get('/api/products/:productId', (req, res, next) => {
  const { productId } = req.params;
  if (!parseInt(productId, 10)) {
    return next(new ClientError('"productId" must be a positive integer', 400));
  }

  const sql = `
  select "productId",
    "name",
    "price",
    "image",
    "shortDescription",
    "longDescription"
  from "products"
  where "productId" = $1
  `;

  db.query(sql, [productId])
    .then(result => {
      const product = result.rows[0];
      if (!product) {
        next(new ClientError(`Cannot find grade with "productId" ${productId}`, 404));
      } else {
        res.json(product);
      }
    })
    .catch(err => next(err));
});

app.get('/api/cart', (req, res, next) => {
  const { cartId } = req.session;
  if (!cartId) {
    res.json([]);
  } else {
    const sql = `
    select "c"."cartItemId",
      "c"."price",
      "p"."productId",
      "p"."image",
      "p"."name",
      "p"."shortDescription"
    from "cartItems" as "c"
    join "products" as "p" using ("productId")
    where "c"."cartId" = $1
    `;
    const values = [cartId];
    db.query(sql, values)
      .then(cartResult => {
        const cartItem = cartResult.rows;
        res.json(cartItem);
      });
  }
});

app.post('/api/cart', (req, res, next) => {
  const { productId } = req.body;
  if (isNaN(productId) || productId <= 0) {
    return next(new ClientError('"productId" must be a positive integer', 400));
  }

  const sql = `
    select "price"
    from "products"
    where "productId" = $1
  `;
  const values = [productId];
  db.query(sql, values)
    .then(getPriceResult => {
      if (!getPriceResult.rows[0]) throw new ClientError('productId does not exist', 400);
      const { price } = getPriceResult.rows[0];
      if (req.session.cartId) {
        const cartResult = {
          cartId: req.session.cartId,
          price: price
        };
        return cartResult;
      } else {
        const sql = `
          insert into "carts" ("cartId", "createdAt")
          values (default, default)
          returning "cartId"
        `;
        return db.query(sql)
          .then(getCartResult => {
            const { cartId } = getCartResult.rows[0];
            const cartResult = {
              cartId: cartId,
              price: price
            };
            return cartResult;
          });
      }
    })
    .then(createCartItemResult => {
      const { cartId, price } = createCartItemResult;
      req.session.cartId = cartId;

      const sql = `
        insert into "cartItems" ("cartId", "productId", "price")
        values ($1, $2, $3)
        returning "cartItemId"
      `;
      const values = [cartId, productId, price];
      return db.query(sql, values);
    })
    .then(getCartItemResult => {
      const { cartItemId } = getCartItemResult.rows[0];
      const sql = `
        select "c"."cartItemId",
          "c"."price",
          "p"."productId",
          "p"."image",
          "p"."name",
          "p"."shortDescription"
        from "cartItems" as "c"
        join "products" as "p" using ("productId")
        where "c"."cartItemId" = $1
      `;
      const values = [cartItemId];
      return db.query(sql, values)
        .then(result => {
          const cartItem = result.rows[0];
          res.status(201).json(cartItem);
        });
    })
    .catch(err => next(err));
});

app.post('/api/orders', (req, res, next) => {
  const { cartId } = req.session;
  const { name, creditCard, shippingAddress } = req.body;
  if (!cartId) {
    return next(new ClientError('"cartId" does not exist', 400));
  }
  if (!name || !creditCard || !shippingAddress) {
    return next(new ClientError('Client has supplied an invalid form: missing fields', 400));
  }

  const sql = `
    insert into "orders" ("cartId", "name", "creditCard", "shippingAddress")
    values ($1, $2, $3, $4)
    returning "orderId",
      "createdAt",
      "name",
      "creditCard",
      "shippingAddress"
  `;
  const values = [cartId, name, creditCard, shippingAddress];

  db.query(sql, values)
    .then(orderResult => {
      delete req.session.cartId;
      const order = orderResult.rows[0];
      res.status(201).json(order);
    })
    .catch(err => next(err));
});

app.delete('/api/cart', (req, res, next) => {
  const { cartId } = req.session;
  const { cartItemId, productId } = req.body;

  if (!cartId) next(new ClientError('"cartId" does not exist', 400));
  if (isNaN(productId) || productId < 0) next(new ClientError('"product" must be a positive integer', 400));

  const sql = `
    delete from "cartItems"
    where "cartId" = $1
    and "productId" = $2
    and "cartItemId" = $3
    returning *;
  `;
  const values = [cartId, productId, cartItemId];
  db.query(sql, values)
    .then(deleteResult => {
      const deletedItem = deleteResult.rows[0];
      if (!deletedItem) next(new ClientError(`Cannot find product with id ${productId}`, 404));
      res.status(204).json(deletedItem);
    });

});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
