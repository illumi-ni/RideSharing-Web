import React from "react"
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom";
import Register from "./register"
import Login from "./login";
import CustomerLogin from "./customerlogin";
import Customer from "./customer";
import './App.css';
import Header from "./Header";
import Driverregister from "./Driverregister";
import Home from "./Home";
import Booking from "./booking";
import Test from "./test";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'





function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path ="/register">
        
            <Register/>
          </Route>
          
          <Route path ="/adminlogin">
          
            <Login/>
          </Route>
          <Route path ="/Driverregister">
          <Header/>
            <Driverregister/>
          </Route>
          <Route path ="/customerlogin">
          
            <CustomerLogin/>
          </Route>
          <Route path ="/customer">
          
            <Customer/>
          </Route>
          <Route path ="/booking">
          <Header/>
          <Booking/>
          </Route>
          <Route path ="/">
          <Header/>
        
          </Route>
          <Route path ="/test">
          
          <Test/>
          </Route>
          
          <Home/>
      </Switch>
      </div>
    </Router>
   
  );
}

export default App;
