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
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    // eslint-disable-next-line no-console
    console.log(name, params);
    // this.setState({
    //   view: {
    //     name: name,
    //     params: params
    //   }
    // });
  }

  render() {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <ProductList setView={this.setView}/>
          <ProductDetails/>
        </main>
      </>
    );
  }
}
