import React from 'react';

function ProductListItem(props) {
  const { product } = props;
  const currency = (product.price / 100).toFixed(2);
  return (
    <div className="col-md-4 mb-4">
      <div className="card mb-4 shadow-sm product">
        <img
          className="card-img-top py-3"
          src={product.image}
          alt={product.name}
        />
        <div className="card-body py-0">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text text-muted">${currency}</p>
          <p className="card-text">{product.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
