import './App.css';
import {
  BrowserRouter as Router,
  Switch, 
  Route, 
  Link, 
} from 'react-router-dom';
import AboutMe from './Components/AboutMe';
import References from './Components/References';
import Skills from './Components/Skills';
import WorkHistory from './Components/WorkHistory';
import Welcome from './Components/Welcome'

function App() {
  return (
    <Router>
      <div>
        <div id='nav-div'>
          <Link to='/'>Home</Link>
          <Link to='/about-me'>About Me</Link>
          <Link to='/references'>References</Link>
          <Link to='/skills'>Skills</Link>
          <Link to='/work-history'>Work History</Link>
        </div>
        <Switch>
          <Route exact path='/'>
            <Welcome />
          </Route>
          <Route path='/about-me'>
            <AboutMe />
          </Route>
          <Route path='/references'>
            <References />
          </Route>
          <Route path='/skills'>
            <Skills />
          </Route>
          <Route path='/work-history'>
            <WorkHistory />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
