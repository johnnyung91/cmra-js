import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch('api/products/3')
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
    if (!product) {
      return null;
    } else {
      const currency = (product.price / 100).toFixed(2);
      return (
        <div className="container py-5">
          <div className="container p-3 border rounded-lg shadow">
            <div className="pb-3">
              <p>
                <i className="fas fa-arrow-left pr-2"></i>Back to Catalog
              </p>
            </div>
            <div className="row pb-3">
              <div className="col-lg-5 pb-3">
                <img src={product.image} alt={product.name} className="fit-detail"/>
              </div>
              <div className="col-lg-7 pb-3">
                <h3>{product.name}</h3>
                <p className="text-muted">${currency}</p>
                <p>{product.shortDescription}</p>
              </div>
            </div>
            <div>
              <p>{product.longDescription}</p>
            </div>
          </div>
        </div>
      );
    }
  }

}