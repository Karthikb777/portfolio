import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Sp from './components/Sp';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './style.css';

function App() {

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/portfolio'>
          <Home />
        </Route>
        <Route exact path='/portfolio/about'>
          <About />
        </Route>
        <Route exact path='/portfolio/skills-projects'>
          <Sp />
        </Route>
        <Route exact path='/portfolio/contact'>
          <Contact />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
