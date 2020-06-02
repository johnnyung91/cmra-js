import React from 'react';

function ProductListItem(props) {
  const { product, setView } = props;
  const currency = parseFloat((product.price / 100).toFixed(2));

  return (
    <div className="col-md-6 col-lg-4 mb-4" onClick={() => setView('details', product.productId)}>
      <div className="card mb-4 product pointer">
        <img
          className="card-img-top py-3 fit"
          src={product.image}
          alt={product.name}
        />
        <div className="card-body py-0">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text text-muted">${currency.toLocaleString('en')}</p>
          <p className="card-text">{product.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
