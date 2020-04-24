import React from 'react';
import Header from './header';
import ProductList from './product-list';

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
          <div className="product-list py-5">
            <ProductList/>
          </div>
        </main>
      </>
    );
  }
}
