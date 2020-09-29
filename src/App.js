import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ProjTempVid from './components/ProjTempVid'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        <Route exact path="/React-Portfolio" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/:vid" component={ProjTempVid} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
