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
    const currency = parseFloat(totalPrice.toFixed(2)).toLocaleString('en');

    return (
      <div className="container py-5 px-0">
        <div className="container p-4">
          <div className="d-inline-block pb-3 pointer d-" onClick={() => setView('cart', {})}>
            <p>
              <i className="fas fa-arrow-left pr-2"></i>
                Back to Cart
            </p>
          </div>
          <div>
            <h3 className="mb-4">My Cart</h3>
            <h5 className="mb-4">Order Total: <span className="text-secondary">${currency}</span></h5>
          </div>
          <form onSubmit={this.handleSubmit}>
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
            <div className="row justify-content-between p-3">
              <div className="pb-3 pointer" onClick={() => setView('catalog', {})}>
                <p><i className="fas fa-arrow-left pr-2"></i>Continue Shopping</p>
              </div>
              <div>
                <button type="submit" className="btn btn-primary">
                  Place Order
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
