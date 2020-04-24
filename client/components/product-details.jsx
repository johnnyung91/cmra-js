import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch('api/products/1')
      .then(res => res.json())
      // eslint-disable-next-line no-console
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }

  render() {
    return (
      null
    );
  }

}
