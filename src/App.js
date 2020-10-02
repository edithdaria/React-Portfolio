import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ProjTempVid from './components/ProjTempVid';
import ProjTempGif from './components/ProjTempGif';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProjTempSteps from './components/ProjTempSteps';
import Footer from './components/Footer';
import Resume from './components/Resume';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        <Route exact path={["/", "/React-Portfolio"]} component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/vid/:vid" component={ProjTempVid} />
        <Route exact path="/gif/:gif" component={ProjTempGif} />
        <Route exact path="/steps/:step" component={ProjTempSteps} />
        <Route exact path="/resume" component={Resume} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
