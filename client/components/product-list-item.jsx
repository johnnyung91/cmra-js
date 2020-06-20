import React from 'react';
import { withRouter } from 'react-router-dom';

function ProductListItem(props) {
  const { product } = props;
  const currency = parseFloat((product.price / 100).toFixed(2));

  return (
    <div className="col-md-6 col-lg-4 mb-4" onClick={() => props.history.push(`/product/${product.productId}`)}>
      <div className="card mb-4 product pointer">
        <img
          className="card-img-top py-3 fit"
          src={product.image}
          alt={product.name}
        />
        <div className="card-body py-0 card-text-section">
          <h5 className="card-title">{product.name}</h5>
          <h6 className="card-text text-muted">${currency.toLocaleString('en')}</h6>
          <p className="card-text">{product.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default withRouter(ProductListItem);
