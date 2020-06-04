import React from 'react';

export default function Carousel(props) {
  return (
    <div id="carousel" className="carousel slide fade-in" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" className="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active slide-1">
          <div className="carousel-caption carousel-text">
            <h5>Elegance in Everything</h5>
            <p>The perfect gear to capture the perfect moments</p>
          </div>
        </div>
        <div className="carousel-item slide-2">
          <div className="carousel-caption carousel-text">
            <h5>Authencity You Can Trust</h5>
            <p>CMRA is an authorized dealer for Nikon and MeFoTo</p>
          </div>
        </div>
        <div className="carousel-item slide-3">
          <div className="overlay"></div>
          <div className="carousel-caption carousel-text">
            <h5>For Photographers, By Photographers</h5>
            <p>Customer service you can depend on, from one photographer to another</p>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
