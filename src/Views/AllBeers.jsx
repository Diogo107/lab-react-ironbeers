import React, { Component } from 'react';
import { list, single } from './../Services/Beers';
import { Link } from 'react-router-dom';

export default class AllBeers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    console.log('im here');
    const beers = await list();
    console.log('im here............', beers);
    this.setState({
      beers
    });
  }

  render() {
    return (
      <div>
        <h1>This is AllBeers</h1>
        <div>
          {this.state.beers.map(beer => (
            <Link to={beer._id}>
              <div className="list__block" key={beer._id}>
                <div>
                  <img src={beer.image_url} alt="name" />
                </div>
                <div>
                  <h1>{beer.name}</h1>
                  <p>{beer.tagline}</p>
                  <p>
                    <strong>Created by: </strong>
                    {beer.contributed_by}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
/* 
image
name
tagline
first_brewed
attenuation_level
description
contributed_by 
*/
