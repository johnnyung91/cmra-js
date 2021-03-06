import React from 'react';

export default class RemoveModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleRemove() {
    const { product, removeFromCart, resetState } = this.props;
    this.removeModal();
    removeFromCart(product);
    setTimeout(() => {
      resetState();
    }, 450);
  }

  handleCancel() {
    const { resetState } = this.props;
    this.removeModal();
    setTimeout(() => resetState(), 450);
  }

  removeModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    const { product } = this.props;
    const { showModal } = this.state;
    const fade = showModal ? 'fade-in' : 'fade-out';
    const slide = showModal ? 'slide-in' : 'slide-out';

    return (
      <div className={`remove-modal ${fade}`} id="remove-modal">
        <div className="modal-overlay"></div>
        <div className={`modal-dialog ${slide}`} id="remove-dialog">
          <div className="modal-content">
            <div className="close-button pointer" onClick={() => this.handleCancel()}>
              <i className="far fa-times-circle text-secondary"></i>
            </div>
            <div className="modal-header flex-wrap modal-text pb-0 px-4">
              <div className="pb-2">
                <p className="modal-title pb-2">Are you sure you want to remove this item?</p>
                <p className="text-secondary">{product.name}</p>
                <img src={product.image} alt={product.name} className="fit remove-image"/>
              </div>
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
