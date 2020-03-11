import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AllBeers extends Component {
  render() {
    return (
      <div>
        <Link to="/AllBeers">
          <figure>
            <img src="/images/beers.png" alt="name" />
          </figure>
          <div className="beggining__blocks">
            <h1>All Beers</h1>
            <p>
              O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum
              tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500.
            </p>
          </div>
        </Link>
        <Link to="/RandomBeer">
          <figure>
            <img src="/images/random-beer.png" alt="name" />
          </figure>
          <div className="beggining__blocks">
            <h1>Random Beer</h1>
            <p>
              O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum
              tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500.
            </p>
          </div>
        </Link>
        <Link to="/NewBeer">
          <figure>
            <img src="images/new-beer.png" alt="name" />
          </figure>
          <div className="beggining__blocks">
            <h1>New Beer</h1>
            <p>
              O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum
              tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500.
            </p>
          </div>
        </Link>
      </div>
    );
  }
}
