import React from 'react';

export default class EnterModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { viewModal } = this.props;
    const enterModal = document.getElementById('enter-modal');
    const modalDialog = document.getElementById('enter-dialog');
    enterModal.className = 'enter-modal fade-out';
    modalDialog.className = 'modal-dialog w-75 slide-out';
    setTimeout(() => viewModal(), 450);
  }

  render() {
    return (
      <div className="enter-modal fade-in" id="enter-modal">
        <div className="modal-overlay"></div>
        <div className="modal-dialog w-75 slide-in" id="enter-dialog">
          <div className="modal-content">
            <div className="modal-header flex-wrap justify-content-center modal-text pb-0">
              <h5 className="modal-title">Welcome to Wicked Sales!</h5>
              <p>Wicked Sales is a full-stack E-commerce website built using React.js and Node/Express and is to be used <strong>strictly for demonstrative purposes</strong></p>
            </div>
            <div className="modal-body modal-text">
              <p>
              By clicking the button below, I accept that <strong>no real purchases will be made, no payment processing will be done, and personal information such as real names, addresses, and credit card numbers should not be used</strong>.
              </p>
              <button
                type="button"
                className="btn btn-danger btn-block close-modal"
                onClick={this.handleClick}>I Accept</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
