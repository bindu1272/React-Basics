import React from 'react';
import { BrowserRouter as Router, Route, browserHistory, IndexRoute,Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
       <ul className="App-header">
         <li>
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link to="/about">About Us</Link>
         </li>
         <li>
           <Link to="/contact">Contact Us</Link>
         </li>
       </ul>
       <Switch>
         <Route exact path='/' component={Home}></Route>
         <Route exact path='/about' component={About}></Route>
         <Route exact path='/contact' component={Contact}></Route>
       </Switch>
     </div>
  </Router>
    )
 }
}
export default App;
