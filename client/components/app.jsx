import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <div className="product-list pt-5 pb-4">
            <ProductList/>
          </div>
          <ProductDetails/>
        </main>
      </>
    );
  }
}
