import React from 'react';

export default class Header extends React.Component {
  render() {
    const { cartItemCount, setView } = this.props;

    return (
      <header>
        <div className="navbar-dark bg-dark shadow py-1">
          <div className="container d-flex justify-content-between align-items-center py-2">
            <div className="title-heading text-light pointer" onClick={() => setView('catalog', {})}>
              <img src="/images/cmra-logo.png" alt="" srcSet="" id='image'/>
              <span className="page-header ml-1">CMRA</span>
            </div>
            <div className="cart-heading text-light pointer" onClick={() => setView('cart', {})}>
              <h6>
                {cartItemCount.length} {cartItemCount.length === 1 ? 'Item' : 'Items'}
                <i className="fas fa-shopping-cart cart ml-2"></i>
              </h6>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
