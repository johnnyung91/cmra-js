import React from 'react';

export default class AddItemModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true
    };
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    const { closeModal } = this.props;
    this.removeModal();
    setTimeout(() => closeModal(), 450);
  }

  removeModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    const { setView } = this.props;
    const { showModal } = this.state;
    const fade = showModal ? 'fade-in' : 'fade-out';
    const slide = showModal ? 'slide-in' : 'slide-out';

    return (
      <div className={`add-modal ${fade}`} id="add-modal">
        <div className="modal-overlay"></div>
        <div className={`modal-dialog w-75 ${slide}`} id="add-dialog">
          <div className="modal-content">
            <div className="close-button pointer" onClick={this.handleClose}>
              <i className="far fa-times-circle text-secondary"></i>
            </div>
            <div className="modal-header modal-text pb-0">
              <div>
                <h4 className="pb-2">Item Added!</h4>
                <p>
                  <span className="text-muted">{this.props.product.name}</span> has been added to the cart.
                </p>
              </div>
            </div>
            <div className="modal-body d-flex flex-wrap add-body">
              <div className="col-sm-12 col-md-6 col-lg-6 modal-button">
                <button
                  type="button"
                  className="btn btn-secondary btn-block close-modal"
                  onClick={() => setView('catalog', {})}>
                  Continue Shopping
                </button>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 modal-button">
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
