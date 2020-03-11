import React, { Component } from 'react';
import { single } from './../Services/Beers';

export default class SingleBeer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const id = this.props.match.params._id;
    console.log('im here', id);
    single(id)
      .then(beer => {
        console.log('im here............', beer);
        this.setState({
          beer
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="single__block">
        <img src={this.state.beer.image_url} alt="name" />
        <div className="geral">
          <div className="seventy">
            <h1>{this.state.beer.name}</h1>
            <h4>{this.state.beer.tagline}</h4>
          </div>
          <div className="thirty">
            <p>{this.state.beer.attenuation_level}</p>
            <p>{this.state.beer.first_brewed}</p>
          </div>
        </div>
        <p className="description">{this.state.beer.description}</p>
        <p>{this.state.beer.contributed_by}</p>
      </div>
    );
  }
}
