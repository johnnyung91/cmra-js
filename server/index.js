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

// view products back end
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

// View product details by productId
app.get('/api/products/:productId', (req, res, next) => {
  const { productId } = req.params;
  if (!parseInt(productId, 10)) {
    next(new ClientError('"productId" must be a positive integer', 400));
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
