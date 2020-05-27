import React from 'react';

export default class Header extends React.Component {
  render() {
    const { cartItemCount, setView } = this.props;

    return (
      <div className="navbar-dark bg-dark shadow py-2">
        <div className="container d-flex justify-content-between py-2">
          <div className="title-heading text-light pointer" onClick={() => setView('catalog', {})}>
            <h5>
              <i className="fas fa-dollar-sign mr-2"></i>Wicked Sales
            </h5>
          </div>
          <div className="cart-heading text-light pointer" onClick={() => setView('cart', {})}>
            <h6>
              {cartItemCount.length} {cartItemCount.length === 1 ? 'Item' : 'Items'}
              <i className="fas fa-shopping-cart ml-2"></i>
            </h6>
          </div>
        </div>
      </div>
    );
  }
}
