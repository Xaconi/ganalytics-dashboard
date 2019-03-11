import React, { Component } from 'react';
import './assets/css/App.css';

// Components
import { Header } from './components/Header'
import { Body } from './components/Body'
import { Footer } from './components/Footer'
import { GoogleAnalyticsTrack } from './components/GoogleAnalyticsTrack'

// Libs
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.css'

class App extends Component {

  	render() {
		return (
			<div className="App">
				<GoogleAnalyticsTrack gaCode="UA-135636972-1"/>
				<Header />
				<Body />
				<Footer />
			</div>
		);
  	}
}

export default App;
