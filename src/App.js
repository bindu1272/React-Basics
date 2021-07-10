import React,{Component} from 'react';
import Table from './Components/TableInformation/Table.js';
import CheckBox  from './Components/TableInformation/CheckBox.js';
// import FirstPart from './Components/ValidatingData/FirstPart.js';
// import Basics from './Components/MaterialUI/Basics.js';
// import VoteList  from './Components/Votes/VoteList.js';
// import AddandSub  from './Components/Counter/AddandSub.js';
// import Form from './Components/Basics/Form.js';
// import ProfileApi from './Components/Profile/ProfielApi.js';
// import Calculator from './Components/Profile/Calculator.js';
// import TemplateDesign from './Components/Template/TemplateDesign.js';
// import PictureZoominZoomOut from './Components/PictureZoominZoomOut.js';
// import { BrowserRouter as Router, Route, browserHistory, IndexRoute,Switch} from 'react-router-dom';
// import {Link} from 'react-router-dom';
// import Home from './Components/Home.js';
// import About from './Components/About.js';
// import Contact from './Components/Contact.js';
// class App extends React.Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <ul className="App-header">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About Us</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact Us</Link>
//             </li>
//           </ul>
//           <Switch>
//             <Route exact path='/' component={Home}></Route>
//             <Route exact path='/about' component={About}></Route>
//             <Route exact path='/contact' component={Contact}></Route>
//           </Switch>
//         </div>
//       </Router>
//     )
//  }
// }



// class App extends React.Component {
// 	constructor(props)
// 	{
// 		super(props);
// 		this.state = { hello : "World!" };
// 	}

// 	componentWillMount()
// 	{
// 		console.log("componentWillMount()");
// 	}

// 	componentDidMount()
// 	{
// 		console.log("componentDidMount()");
// 	}

// 	changeState()
// 	{
// 		this.setState({ hello : "Geek!" });
// 	}

// 	render()
// 	{
// 		return (
// 			<div>
// 			<h1>GeeksForGeeks.org, Hello{ this.state.hello }</h1>
// 			<h2>
// 			<a onClick={this.changeState.bind(this)}>Press Here!</a>
// 			</h2>
// 			</div>);
// 	}

// 	shouldComponentUpdate(nextProps, nextState)
// 	{
// 		console.log("shouldComponentUpdate()");
// 		return true;
// 	}

// 	componentWillUpdate()
// 	{
// 		console.log("componentWillUpdate()");
// 	}

// 	componentDidUpdate()
// 	{
// 		console.log("componentDidUpdate()");
// 	}
// }



class App extends Component{
	render(){
		return(
			// <PictureZoominZoomOut/>
			// <FirstPart/>
			// <Form/>
			// <ProfileApi/>
			// <Calculator/>
			// <VoteList/>
			// <Basics/>
			<Table/>
			// <CheckBox/>
		)
	}

}
export default App;
