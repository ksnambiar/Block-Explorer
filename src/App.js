import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Main from "./Components/Main/Main";
import Navigation from "./Components/Main/Navigation"
import Blockchain from "./Components/Pages/Blockchain"
import State from "./Components/Pages/State"
import './App.css';
import "tachyons"
function App() {
  return (
    <Router>
    <div className="App">
     <Navigation />
     <div className="container-fluid">
     <Route exact path="/" component={Main} />
     <Route exact path="/blockchain" component={Blockchain}/>
     <Route exact path="/state" component={State} />

     </div>
    </div>
    </Router>
  );
}

export default App;
