import React from 'react';
import Header from './header';
import ProductListItem from './product-list-item';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <div className="container">
            <div className="row">
              <ProductListItem/>
              <ProductListItem/>
              <ProductListItem/>
              <ProductListItem/>
              <ProductListItem/>
              <ProductListItem/>
            </div>
          </div>
        </main>
      </>
    );
  }
}
