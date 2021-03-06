import React from 'react';
import CartSummaryItem from './cart-summary-item';
import RemoveModal from './remove-item-modal';
import { withRouter } from 'react-router-dom';

class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmRemove: {
        view: false,
        product: {}
      }
    };
    this.confirmDelete = this.confirmDelete.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (this.props.cart.length !== prevProps.cart.length) window.scrollTo(0, 0);
  }

  confirmDelete(cartItem) {
    const { confirmRemove: { view } } = this.state;
    this.setState({
      confirmRemove: {
        view: !view,
        product: cartItem
      }
    });
  }

  resetState() {
    this.setState({
      confirmRemove: {
        view: false,
        product: {}
      }
    });
  }

  render() {
    const { cart, removeFromCart } = this.props;
    const { confirmRemove: { view, product } } = this.state;
    const totalPrice = cart.reduce((max, cur) => {
      return max + cur.price;
    }, 0) / 100;
    const currency = parseFloat(totalPrice).toLocaleString('en', { style: 'currency', currency: 'USD' });

    const empty = <h4>Your Shopping Cart is empty</h4>;
    const items = cart.map(cartItem => {
      return (
        <CartSummaryItem
          key={cartItem.cartItemId}
          cartItem={cartItem}
          confirmDelete={this.confirmDelete}
        />
      );
    });

    const checkoutButton =
      <div>
        <button type="button" className="btn btn-primary" onClick={() => this.props.history.push('/checkout')}>Checkout</button>
      </div>
    ;

    return (
      <>
        {view ? <RemoveModal product={product} removeFromCart={removeFromCart} resetState={this.resetState}/> : null}
        <div className="container py-5 px-0 fade-in">
          <div className="container">
            <div className="d-inline-block pb-3 pointer" onClick={() => this.props.history.push('/')}>
              <p><i className="fas fa-arrow-left pr-2"></i>Back to Catalog</p>
            </div>
            <div>
              <h3>My Cart</h3>
            </div>
            <div className="py-3">
              {cart.length === 0 ? empty : items}
            </div>
            <div className="container d-flex justify-content-between align-items-center px-0">
              <div>
                <h5>
                Cart Total: <span className="text-secondary">{currency}</span>
                </h5>
              </div>
              {cart.length === 0 ? null : checkoutButton}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(CartSummary);
