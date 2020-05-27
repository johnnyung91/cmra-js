import React from 'react';

export default class AddItemModal extends React.Component {
  render() {
    const { setView } = this.props;

    return (
      <div className="add-modal fade-in" id="add-modal">
        <div className="modal-overlay"></div>
        <div className="modal-dialog w-75 slide-in" id="add-dialog">
          <div className="modal-content">
            <div className="modal-header flex-wrap modal-text pb-0">
              <h4 className="modal-title w-100 pb-2">Item Added To Cart!</h4>
              <p className="w-100">
                <span className="text-muted">{this.props.product.name}</span> has been added to the cart.
              </p>
            </div>
            <div className="modal-body d-flex">
              <div className="col-6">
                <button
                  type="button"
                  className="btn btn-secondary btn-block close-modal"
                  onClick={() => setView('catalog', {})}>
                  Continue Shopping
                </button>
              </div>
              <div className="col-6">
                <button
                  type="button"
                  className="btn btn-primary btn-block close-modal"
                  onClick={() => setView('cart', {})}>
                  View Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
