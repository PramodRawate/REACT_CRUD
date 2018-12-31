import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">React CRUD Example</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to={'/'} className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/create'} className="nav-link">Create</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/index'} className="nav-link">Index</Link>
                  </li>
                </ul>
              </div>
              <button className="btn btn-primary">Click Me</button>
            </nav> <br/>
            <h2>Welcome to React CRUD Tutorial</h2>
            <Switch>
              <Route exact path='/create' component={Create} />
              <Route exact path='/edit/:id' component={Edit} />
              <Route exact path='/index' component={Index} />            
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
