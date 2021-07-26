

import  React from 'react';
import './App.css';
import {BrowserRouter as Router ,Route,Switch} from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    
    <Router>
      <Switch>
        {/* <Route exact path="/" component={IntroPage}/> */}
        <Route path="/parking-slots" component={HomePage}/>
      </Switch>
    </Router>
   
  );
}

export default App;
