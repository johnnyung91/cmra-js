import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleChange(event) {
    const input = event.target.name;
    this.setState({
      [input]: event.target.value
    });
  }

  handleSubmit(event) {
    const { name, creditCard, shippingAddress } = this.state;
    const { placeOrder } = this.props;
    event.preventDefault();
    const newOrder = {
      name: name,
      creditCard: creditCard,
      shippingAddress: shippingAddress
    };
    placeOrder(newOrder);
    this.resetState();
  }

  resetState() {
    this.setState({
      name: '',
      creditCard: '',
      shippingAddress: ''
    });
  }

  render() {
    const { cart, setView } = this.props;
    const totalPrice = cart.reduce((max, cur) => {
      return max + cur.price;
    }, 0) / 100;
    const currency = parseFloat(totalPrice).toLocaleString('en', { style: 'currency', currency: 'USD' });

    return (
      <div className="container py-5 px-0 fade-in">
        <div className="container p-4">
          <div className="d-inline-block pb-3 pointer d-" onClick={() => setView('cart', {})}>
            <p>
              <i className="fas fa-arrow-left pr-2"></i>
                Back to Cart
            </p>
          </div>
          <div>
            <h3 className="mb-4">My Cart</h3>
            <h5 className="mb-4">Order Total: <span className="text-secondary">{currency}</span></h5>
          </div>
          <form onSubmit={this.handleSubmit} className="pb-3" id="checkout-form">
            <div className="form-group">
              <label>Name</label>
              <input
                required
                type="text"
                className="form-control"
                name="name"
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label>Credit Card</label>
              <input
                required
                type="text"
                className="form-control"
                name="creditCard"
                onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label>Shipping Address</label>
              <textarea
                required
                className="form-control"
                name="shippingAddress"
                rows="4"
                onChange={this.handleChange}>
              </textarea>
            </div>
            <div className="form-check">
              <input required className="form-check-input" type="checkbox" id="accept-box"/>
              <label className="form-check-label" htmlFor="accept-box">
                I acknowledge that this submission is for demonstrative purposes.  I understand that no real purchases and payment processing will be made.
                <br/>
                By checking this box, I understand that no real personal information such as names, addresses, and credit card numbers should not be used.
              </label>
            </div>
          </form>
          <div className="row align-items-center justify-content-between p-3 submit-row">
            <div className="pointer" onClick={() => setView('catalog', {})}>
              <p><i className="fas fa-arrow-left pr-2"></i>Continue Shopping</p>
            </div>
            <div>
              <button type="submit" className="btn btn-primary" form="checkout-form">
                  Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
