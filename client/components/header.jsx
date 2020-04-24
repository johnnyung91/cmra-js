import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navbar-dark bg-dark shadow py-2">
        <div className="container d-flex justify-content-between">
          <div className="navbar-brand d-flex align-items-center align-middle">
            <h5 className="m-0">
              <i className="fas fa-dollar-sign mr-2"></i>Wicked Sales
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
