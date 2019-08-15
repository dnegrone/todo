import React, {Component} from 'react';
import Menu from './Menu';
import Header from './Header';
import Servicos from './Servicos';
import Call from './Call';
import '../assets/css/style.css';
import '../assets/css/Menu.css';
import '../assets/css/Header.css';
import '../assets/css/Servicos.css';

class Home extends Component {
	// constructor() {
		// super();
		// this.state = {
		// 	route: 'page1'
		// }
		// onRouteChange = (route) => {
		// 	this.setState({ route: route });
		// }
	// }
	render() {
		return(
			<div>
				<Menu />
			{/* if(this.state.route === 'page1') { */}
				<div><Header /><Servicos /></div>
			{/* } else if (this.state.route === 'page2') { */}
				<Call />
			{/* } */}
			</div>
		)
		
	}
}

export default Home;