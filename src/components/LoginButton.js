import React, { Component } from 'react'

// Libs
import { GoogleLogin } from 'react-google-login'

export class LoginButton extends Component {

    // State init
    state = {
        isAuthenticated : false
    }

    _handleLoginOK = (response) => {
        console.log(response);
        this.setState( { isAuthenticated : true })
    }

    _handleLoginKO = (response) => {
        console.log(response);
        this.setState( { isAuthenticated : false })
    }

    render() {
        console.log(process.env)
        if(this.state.isAuthenticated === false){
            return(
                <GoogleLogin
                    buttonText="Login"
                    clientId={process.env.REACT_APP_GOOGLE_API}
                    onFailure={this._handleLoginKO}
                    onSuccess={this._handleLoginOK} />
            );
        } else {
            return(
                <p>Logged!</p>
            )
        }
    }
}

