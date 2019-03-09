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
                    <div className="columns">
                        <div className="column is-offset-1 is-10">
                            <div className="column is-12">
                                <p className="explanation">
                                    <strong>gAnalytics Dashboard</strong> is simple tool to check and review your Google Analytics accounts results. 
                                    The results (at the moment) are the GA sessions from the last day, the last week and the last month, each one with the previous period comparative.
                                    It offers a simple view in order to check if the GA account is going well or not. Also, you can see the percentage of the GA sessions compared with 
                                    the previous period of time.
                                    <br></br><br></br>
                                    You must login with your Google account (the same you use on Google Analytics) and gave access to read-only to your accounts, in order to see
                                    the results on this App.
                                </p>
                            </div>
                            <LoginButton onLogin={this._triggerLogin}/>
                            {this.state.login 
                                ? <GoogleAnalyticsList authBearer={this.state.authBearer} />
                                : <p>No logged yet...</p>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}