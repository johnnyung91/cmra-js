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
    const { setView } = this.props;
    return (
      <div className="container py-5 fade-in">
        <div className="row">
          {
            products.map(product => {
              return (
                <ProductListItem
                  key={product.productId}
                  product={product}
                  setView={setView}
                />
              );
            })
          }
        </div>
      </div>
    );
  }

}
