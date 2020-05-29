import React from 'react';

export default class CartSummaryItem extends React.Component {

  render() {
    const { cartItem, removeFromCart } = this.props;
    const currency = (cartItem.price / 100).toFixed(2);
    return (
      <div className="py-3">
        <div className="container px-4 border rounded-lg shadow">
          <div className="row">
            <div className="col-md-4 col-lg-4 p-2 text-center">
              <img
                src={cartItem.image}
                alt={cartItem.name}
                className="fit p-2"/>
            </div>
            <div className="col-md-8 col-lg-8 d-flex align-items-center summary py-4">
              <div>
                <h4 className="cart-item-heading mb-3">{cartItem.name}</h4>
                <p className="text-muted">${currency}</p>
                <p>{cartItem.shortDescription}</p>
                <div className="text-muted remove-item pointer" onClick={() => removeFromCart(cartItem)}>
                  <span>
                    <i className="fas fa-times red"/> Remove Item
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
