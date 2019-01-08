import React, { Component } from 'react';
import './App.css';
import ListContainer from './container/ListContainer';
import HomeContainer from './container/HomeContainer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/list">Todo List</Link>
              </li>
            </ul>
          </div>

          <hr />

          <div>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/list" component={ListContainer} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
