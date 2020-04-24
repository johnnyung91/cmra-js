import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      }
    };
  }

  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <ProductList/>
          <ProductDetails/>
        </main>
      </>
    );
  }
}
