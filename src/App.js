import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import { LoginButton } from './components/LoginButton'
import { GoogleAnalyticsList } from './components/GoogleAnalyticsList'

class App extends Component {

	// State init
	state = {
		login : false,
		authBearer : ''
	}

	_triggerLogin = (authBearer) => {
		this.setState({ 
			login : true,
			authBearer 
		})
	}

  	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<LoginButton onLogin={this._triggerLogin}/>
					{this.state.login 
						? <GoogleAnalyticsList authBearer={this.state.authBearer} />
						: <p>No logged yet...</p>}
				</header>
			</div>
		);
  	}
}

export default App;
