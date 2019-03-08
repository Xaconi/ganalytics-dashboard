import React, { Component } from 'react'

// Components
import { LoginButton } from './LoginButton'
import { GoogleAnalyticsList } from './GoogleAnalyticsList'

export class Body extends Component {
    
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
        return(
            <div className="container is-fluid">
                <div className="notification">
                    <LoginButton onLogin={this._triggerLogin}/>
                    {this.state.login 
                        ? <GoogleAnalyticsList authBearer={this.state.authBearer} />
                        : <p>No logged yet...</p>}
                </div>
            </div>
        )
    }
}