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
import './style.css';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/skills-projects'>
          <Sp />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
