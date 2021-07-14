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
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'




function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path ="/register">
             <Header/>
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
          <Header/>
            <CustomerLogin/>
          </Route>
          <Route path ="/customer">
          <Header/>
            <Customer/>
          </Route>
          <Route path ="/booking">
          <Header/>
          <Booking/>
          </Route>
          
          <Home/>
      </Switch>
      </div>
    </Router>
   
  );
}

export default App;
