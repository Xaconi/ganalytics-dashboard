import React, { Component } from 'react'

// Libs
import { GoogleLogin } from 'react-google-login'

export class LoginButton extends Component {

    // State init
    state = {
        isAuthenticated : false
    }

    _handleLoginOK = (response) => {
        this.setState( { isAuthenticated : true })
        this.props.onLogin(response.accessToken)
    }

    _handleLoginKO = (response) => {
        this.setState( { isAuthenticated : false })
    }

    render() {
        if(this.state.isAuthenticated === false){
            return(
                <GoogleLogin
                    buttonText="Login"
                    clientId={process.env.REACT_APP_GOOGLE_API}
                    onFailure={this._handleLoginKO}
                    onSuccess={this._handleLoginOK}
                    scope="https://www.googleapis.com/auth/analytics" />
            );
        } else {
            return(
                <p>Logged!</p>
            )
        }
    }
}

