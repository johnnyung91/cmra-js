import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  getProducts() {
    fetch('api/products')
      .then(res => res.json())
      .then(data => this.setState({
        products: data
      }))
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    const { products } = this.state;
    return (
      <div className="container pt-5 pb-4">
        <div className="row">
          {
            products.map((product, index) => {
              return (<ProductListItem key={product.productId} product={product} />);
            })
          }
        </div>
      </div>
    );
  }

}
