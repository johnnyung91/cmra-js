import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';
import EnterModal from './enter-modal';
import Footer from './footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: [],
      modalShowing: true
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.viewModal = this.viewModal.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  setView(name, params) {
    this.setState({
      view: {
        name: name,
        params: { productId: params }
      }
    });
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
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    });
  }

  viewModal() {
    this.setState({
      modalShowing: !this.state.modalShowing
    });
  }

  render() {
    const { name, params } = this.state.view;
    const { cart, modalShowing } = this.state;

    let main;
    if (name === 'catalog') main = <ProductList setView={this.setView}/>;
    if (name === 'details') main = <ProductDetails params={params} setView={this.setView} addToCart={this.addToCart}/>;
    if (name === 'cart') main = <CartSummary cart={cart} setView={this.setView} removeFromCart={this.removeFromCart}/>;
    if (name === 'checkout') main = <CheckoutForm cart={cart} placeOrder={this.placeOrder} setView={this.setView}/>;

    return (
      <>
        <Header
          cartItemCount={cart}
          setView={this.setView}/>
        <main>
          {main}
        </main>
        <Footer />
        {modalShowing ? <EnterModal viewModal={this.viewModal}/> : null}
      </>
    );
  }
}
