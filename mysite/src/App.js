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

function App() {
  return (
    // <div className="App">
    //   <AboutMe />
    //   <References />
    //   <Skills />
    //   <WorkHistory />
    // </div>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about-me'>About Me</Link>
            </li>
            <li>
              <Link to='/references'>References</Link>
            </li>
            <li>
              <Link to='/skills'>Skills</Link>
            </li>
            <li>
              <Link to='/work-history'>Work History</Link>
            </li>
          </ul>
        </nav>
        <Switch>
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
