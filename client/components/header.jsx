import React from 'react';
import { withRouter } from 'react-router-dom';

class Header extends React.Component {
  render() {
    const { cartItemCount } = this.props;

    return (
      <header>
        <div className="navbar-dark dark py-1">
          <div className="container d-flex justify-content-between align-items-center py-2">
            <div className="title-heading text-light pointer" onClick={() => this.props.history.push('/')}>
              <img src="/images/cmra-logo.png" alt="" srcSet="" id='image'/>
              <span className="page-header ml-1">CMRA</span>
            </div>
            <div className="cart-heading text-light pointer" onClick={() => this.props.history.push('/cart')}>
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

export default withRouter(Header);
