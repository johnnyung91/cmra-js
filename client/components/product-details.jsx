import React from 'react';
import AddItemModal from './add-item-modal';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      itemAdded: true
    };
    this.itemAdded = this.itemAdded.bind(this);
  }

  componentDidMount() {
    const { productId } = this.props.params;
    fetch(`api/products/${productId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ product: data });
      })
      .catch(err => console.error(err));
  }

  itemAdded(product) {
    this.props.addToCart(product);
    this.setState({ itemAdded: !this.state.itemAdded });
  }

  render() {
    const { product, itemAdded } = this.state;
    const { setView } = this.props;

    if (!product) {
      return null;
    } else {
      const currency = (product.price / 100).toFixed(2);
      return (
        <>
          {itemAdded ? <AddItemModal product={product} setView={setView}/> : null}
          <div className="container py-5 fade-in">
            <div className="container p-4 border rounded-lg shadow">
              <div className="d-inline-block pb-3 pointer d-" onClick={() => setView('catalog', {})}>
                <p>
                  <i className="fas fa-arrow-left pr-2"></i>
                Back to Catalog
                </p>
              </div>
              <div className="row pb-3">
                <div className="col-lg-5 px-3 pb-3 text-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="fit"/>
                </div>
                <div className="col-lg-7 pb-3 d-flex align-items-center">
                  <div>
                    <h3>{product.name}</h3>
                    <p className="text-muted">${currency}</p>
                    <p>{product.shortDescription}</p>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => this.itemAdded(product)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <p>{product.longDescription}</p>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}
