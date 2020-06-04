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
        <div className="carousel-item active slide">
          <div className="carousel-image slide-1"></div>
        </div>
        <div className="carousel-item slide">
          <div className="carousel-image slide-2"></div>
        </div>
        <div className="carousel-item slide">
          <div className="carousel-image slide-3"></div>
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
