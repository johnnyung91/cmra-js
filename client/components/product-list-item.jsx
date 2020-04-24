import React from 'react';

export default class ProductListItem extends React.Component {
  render() {
    return (
      <div className="col-md-4">
        <div className="card mb-4 shadow-sm">
          <img
            className="card-img-top"
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
            alt="Bulbasaur"
          />
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">Price</p>
            <p className="card-text">
              Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun&apos;s
              rays, the seed grows progressively larger.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
