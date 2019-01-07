import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom";
import MovieList from './cmps/MovieLIst/MovieList';
import MovieDetails from './cmps/MovieDetails//MovieDetails';
import NavBar from './cmps/NavBar/NavBar';



class App extends Component {

  render() {
    return (
      <Router>
        <div>
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


