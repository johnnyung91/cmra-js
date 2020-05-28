import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class CartSummary extends React.Component {
  render() {
    const { cart, setView, removeFromCart } = this.props;
    const totalPrice = cart.reduce((max, cur) => {
      return max + cur.price;
    }, 0) / 100;

    const empty = <h3>Your Shopping Cart is empty</h3>;
    const items = cart.map(cartItem => {
      return (
        <CartSummaryItem
          key={cartItem.cartItemId}
          cartItem={cartItem}
          removeFromCart={removeFromCart}
        />
      );
    });

    const checkoutButton =
      <div>
        <button type="button" className="btn btn-primary" onClick={() => setView('checkout', {})}>Checkout</button>
      </div>
    ;

    return (
      <div className="container py-5 px-0 fade-in">
        <div className="container">
          <div className="d-inline-block pb-3 pointer" onClick={() => setView('catalog', {})}>
            <p><i className="fas fa-arrow-left pr-2"></i>Back to Catalog</p>
          </div>
          <div className="py-3">
            <h1>My Cart</h1>
          </div>
          <div className="py-3">
            {cart.length === 0 ? empty : items}
          </div>
          <div className="container d-flex justify-content-between align-items-center py-3 px-0">
            <div>
              <h4>
                Cart Total: <span className="text-secondary">${totalPrice.toFixed(2)}</span>
              </h4>
            </div>
            {cart.length === 0 ? null : checkoutButton}
          </div>
        </div>
      </div>
    );
  }
}
