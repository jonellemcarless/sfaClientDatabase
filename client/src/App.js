import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Provider } from "react-redux";

import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import store from "./config/store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import SideDrawer from "./components/layout/SideDrawer"
import Backdrop from "./components/layout/Backdrop"
// import Register from "./components/auth/Register";
// import Login from "./components/auth/Login";
// import PrivateRoute from "./components/private-route/PrivateRoute";
// import Dashboard from "./components/layout/Dashboard";
import Benefits from "./components/layout/Benefits";
import Notes from "./components/layout/Notes";
import Files from "./components/layout/Files";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let backdrop
    let sideDrawer

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
      sideDrawer = <SideDrawer />
    }

    return (<Provider store={store}>
      <div style={{ height: '100%' }}>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: '64px' }}>
          <p>This is the page content!</p>
        </main>
      </div>
      
      
      {/* <div>
      <Navbar /> 
      <Router /> 
      </div> */}
      
      

      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/benefits" component={Benefits} />
          <Route exact path="/notes" component={Notes} />
          <Route exact path="/files" component={Files} />

          {/* <Route exact path="/register" component={Register} /> */}
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/benefits" component={Benefits} />
              <PrivateRoute exact path="/notes" component={Notes} />
              <PrivateRoute exact path="/files" component={Files} />
            </Switch> */}
        </div>
      </Router>
      </Provider>
    )
  }
}

export default App;