import React from 'react';

export default class EnterModal extends React.Component {

  render() {
    return (
      <div className="enter-modal fade-in">
        <div className="modal-overlay"></div>
        <div className="modal-dialog w-75 slide-in">
          <div className="modal-content">
            <div className="modal-header flex-wrap justify-content-center modal-text pb-0">
              <h5 className="modal-title">Welcome to Wicked Sales!</h5>
              <p>Wicked Sales is a full-stack E-commerce website built using React.js and is to be used <strong>strictly for demonstrative purposes</strong></p>
            </div>
            <div className="modal-body modal-text">
              <p>
              By clicking the button below, I accept that <strong>no real purchases will be made, no payment processing will be done, and personal information such as real names, addresses, and credit card numbers should not be used</strong>.
              </p>
              <button type="button" className="btn btn-danger btn-block close-modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
