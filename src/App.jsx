import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavBar from './Components/NavBar';
import AllBeers from './Views/AllBeers';
import NewBeer from './Views/NewBeer';
import RandomBeer from './Views/RandomBeer';
import Home from './Views/Home';
import SingleBeer from './Views/SingleBeer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar color="dark" />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/AllBeers" exact component={AllBeers} />
            <Route path="/RandomBeer" exact component={RandomBeer} />
            <Route path="/NewBeer" exact component={NewBeer} />
            <Route path="/:_id" exact component={SingleBeer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
