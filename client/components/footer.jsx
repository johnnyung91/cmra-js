import React from 'react';

export default function Footer(props) {
  return (
    <div className="navbar-dark bg-dark shadow">
      <div className="container d-flex justify-content-center align-items-center py-2">
        <div >
          <div className="footer-center">
            <img src="/images/cmra-logo.png" alt="CMRA" className='footer-logo'/>
            <div className="footer-text pb-4">
              <h3>C M R A</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, nihil?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
