import React from 'react';
import ProductListItem from './product-list-item';
import Carousel from './carousel';

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
    window.scrollTo(0, 0);
  }

  render() {
    const { products } = this.state;
    return (
      <>
        <Carousel />
        <div className="container fade-in">
          <div className="row py-5">
            {
              products.map(product => {
                return (
                  <ProductListItem
                    key={product.productId}
                    product={product}
                  />
                );
              })
            }
          </div>
        </div>
      </>
    );
  }

}
