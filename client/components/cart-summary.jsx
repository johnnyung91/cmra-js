import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class CartSummary extends React.Component {

  render() {
    const { cart } = this.props;
    const totalPrice = cart.reduce((max, cur) => {
      return max + cur.price;
    }, 0) / 100;

    return (
      <div className="container py-5">
        <div className="container p4">
          <div className="d-inline-block pb-3 pointer">
            <p><i className="fas fa-arrow-left pr-2"></i>Back to Catalog</p>
          </div>
          <h1>My Cart</h1>
          <div>
            {
              cart.map(cartItem => {
                return (
                  <CartSummaryItem
                    key={cartItem.cartItemId}
                    cartItem={cartItem}
                  />
                );
              })
            }
          </div>
          <h2>{totalPrice}</h2>
        </div>
      </div>
    );
  }
}
