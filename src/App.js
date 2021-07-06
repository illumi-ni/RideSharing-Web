import React from "react"
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom";
import Register from "./register"
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path ="/register">
            <Register/>
          </Route>
      </Switch>
      </div>
    </Router>
   
  );
}

export default App;
