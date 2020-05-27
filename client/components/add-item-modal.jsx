import React from 'react';

export default class AddItemModal extends React.Component {

  render() {
    return (
      <div className="add-modal fade-in" id="add-modal">
        <div className="modal-overlay"></div>
        <div className="modal-dialog w-75 slide-in" id="add-dialog">
          <div className="modal-content">
            <div className="modal-header flex-wrap justify-content-center modal-text pb-0">
              <h5 className="modal-title">Item Added To Cart!</h5>
              <p>Item has been added to the cart</p>
            </div>
            <div className="modal-body modal-text">
              <button type="button" className="btn btn-danger close-modal">Continue Shopping</button>
              <button type="button" className="btn btn-danger close-modal">View Cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
