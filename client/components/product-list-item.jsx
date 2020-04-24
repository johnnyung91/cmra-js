import React from 'react';

function ProductListItem(props) {
  const { product } = props;
  const price = (product.price / 100).toFixed(2);
  return (
    <div className="col-md-4 mb-4">
      <div className="card mb-4 shadow-sm product">
        <img
          className="card-img-top"
          src={product.image}
          alt={product.name}
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">${price}</p>
          <p className="card-text">{product.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;
