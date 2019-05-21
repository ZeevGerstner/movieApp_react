import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom";
import MovieList from './cmps/MovieLIst/MovieList';
import MovieDetails from './cmps/MovieDetails//MovieDetails';
import NavBar from './cmps/NavBar/NavBar';
import './cmps/wecCmp/A11yBar.js'
import './cmps/wecCmp/style.css'

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <acc-menu></acc-menu>
          <NavBar />
          <Switch>
            <Route path="/" exact component={MovieList} />
            <Route path="/movie/:id" component={MovieDetails} />
          </Switch>
        </div>
      </Router>
    )
  }

}

export default App;


