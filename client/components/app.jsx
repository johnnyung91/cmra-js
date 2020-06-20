import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';
import EnterModal from './enter-modal';
import Footer from './footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      modalShowing: true
    };
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.viewModal = this.viewModal.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
    window.scrollTo(0, 0);
  }

  getCartItems() {
    fetch('/api/cart')
      .then(res => res.json())
      .then(data => {
        this.setState({ cart: data });
      })
      .catch(err => console.error(err));
  }

  addToCart(product) {
    const { cart } = this.state;
    const req =
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      };

    fetch('/api/cart', req)
      .then(res => res.json())
      .then(data => this.setState({
        cart: cart.concat(data)
      }))
      .catch(err => console.error(err));
  }

  removeFromCart(cartItem) {
    const { cart } = this.state;
    const req =
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      };

    fetch('/api/cart', req)
      .then(() => {
        const newCart = cart.filter(item => item.cartItemId !== cartItem.cartItemId);
        this.setState({
          cart: newCart
        });
      })
      .catch(err => console.error(err));
  }

  placeOrder(order) {
    const req =
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify(order)
    };
    fetch('/api/orders', req)
      .then(res => res.json())
      .then(data => this.resetState());
  }

  resetState() {
    this.setState({
      cart: []
    });
  }

  viewModal() {
    this.setState({
      modalShowing: !this.state.modalShowing
    });
  }

  render() {
    const { cart, modalShowing } = this.state;

    return (
      <>
        <Router>
          <Header
            cartItemCount={cart}/>
          <main>
            <Switch>
              <Route path="/product/:productId" render={props => <ProductDetails {...props} addToCart={this.addToCart}/> }/>
              <Route path="/cart" render={props => <CartSummary {...props} cart={cart} removeFromCart={this.removeFromCart}/>} />
              <Route path="/checkout" render={props => <CheckoutForm {...props} cart={cart} placeOrder={this.placeOrder} />}/>
              <Route path="/" exact render={props => <ProductList {...props} />}/>
            </Switch>
          </main>
          <Footer />
          {modalShowing ? <EnterModal viewModal={this.viewModal}/> : null}
        </Router>
      </>
    );
  }
}
