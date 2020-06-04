import React from 'react';

export default function Footer(props) {
  return (
    <footer>
      <div className="navbar-dark dark shadow">
        <div className="container d-flex justify-content-center align-items-center py-2">
          <div >
            <div className="footer-center">
              <img src="/images/cmra-logo.png" alt="CMRA" className='footer-logo'/>
              <div className="footer-text pb-2">
                <span className="footer-header"><h3>C M R A</h3></span>
                <span className="footer-sub"><p>Elegance in Everything</p></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
