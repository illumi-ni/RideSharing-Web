import React from "react"
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom";
import Register from "./register"
import Login from "./login";
import './App.css';
import Header from "./Header";



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path ="/register">
             <Header/>
            <Register/>
          </Route>
          <Route path ="/login">
            <Login/>
          </Route>
      </Switch>
      </div>
    </Router>
   
  );
}

export default App;
