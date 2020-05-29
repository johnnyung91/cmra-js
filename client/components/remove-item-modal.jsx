import React from 'react';

export default class RemoveModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleRemove() {
    const { product, removeFromCart, resetState } = this.props;
    removeFromCart(product);
    resetState();
  }

  handleCancel() {
    const { resetState } = this.props;
    const removeModal = document.getElementById('remove-modal');
    const removeDialog = document.getElementById('remove-dialog');
    removeModal.className = 'remove-modal fade-out';
    removeDialog.className = 'modal-dialog w-75 slide-out';
    setTimeout(() => resetState(), 450);
  }

  render() {
    const { product } = this.props;

    return (
      <div className="remove-modal fade-in" id="remove-modal">
        <div className="modal-overlay"></div>
        <div className="modal-dialog w-75 slide-in" id="remove-dialog">
          <div className="modal-content">
            <div className="close-button pointer" onClick={() => this.handleCancel()}>
              <i className="far fa-times-circle text-secondary"></i>
            </div>
            <div className="modal-header flex-wrap modal-text pb-0">
              <h4 className="modal-title w-100 pb-2">{product.name}</h4>
              <p className="w-100">
                Are you sure you want to remove this item?
              </p>
            </div>
            <div className="modal-body d-flex flex-wrap add-body">
              <div className="col-sm-12 col-md-6 col-lg-6 modal-button">
                <button
                  type="button"
                  className="btn btn-secondary btn-block close-modal"
                  onClick={() => this.handleCancel()}>
                  Cancel
                </button>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 modal-button">
                <button
                  type="button"
                  className="btn btn-danger btn-block close-modal"
                  onClick={() => this.handleRemove()}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
