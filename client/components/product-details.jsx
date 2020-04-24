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
      .then(data => {
        // eslint-disable-next-line no-console
        console.log(data);
        this.setState({ product: data });
      })
      .catch(err => console.error(err));
  }

  render() {
    const { product } = this.state;
    if (!product) return null;
    else {
      return <h1>Hello World</h1>;
    }
  }

}
