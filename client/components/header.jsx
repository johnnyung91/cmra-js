import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="navbar-dark bg-dark shadow py-2">
        <div className="container d-flex justify-content-between py-2">
          <div className="title-heading text-light">
            <h5>
              <i className="fas fa-dollar-sign mr-2"></i>Wicked Sales
            </h5>
          </div>
          <div className="cart-heading text-light">
            <h6>
              0 Items
              <i className="fas fa-shopping-cart ml-2"></i>
            </h6>
          </div>
        </div>
      </div>
    );
  }
}
