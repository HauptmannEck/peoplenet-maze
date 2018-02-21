import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Cards from './cards';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo"/>
						<h1 className="App-title">Welcome to Josh's Code Challenge</h1>
					</header>
					<Cards/>
				</div>
			</MuiThemeProvider>
		);
	}
}

export default App;
