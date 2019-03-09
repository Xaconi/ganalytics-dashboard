import React, { Component } from 'react'

// Assets
import logo from '../assets/img/logo.PNG'

export class Header extends Component {
    render() {
        return(
            <header>
                {/* Logo + Social Network Links */}
                <div className="columns">
                    <div className="column is-offset-3 is-6">
                        <figure className="image logoImage">
                            <img 
                                alt="Ganalytics Dashboard - A simple view for your GA accounts"
                                src={logo}
                                title="Ganalytics Dashboard - A simple view for your GA accounts"  />
                        </figure>
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-offset-4 is-2">
                        <span className="icon is-medium">
                            <a 
                                href="https://twitter.com/xaconi"
                                rel="noopener noreferrer"
                                target="_blank"
                                title="Follow me on Twitter!">
                                <i className="fab fa-twitter-square fa-2x"></i>
                            </a>
                        </span>
                    </div>
                    <div className="column is-2">
                        <span className="icon is-medium">
                            <a 
                                href="https://github.com/Xaconi/ganalytics-dashboard" 
                                rel="noopener noreferrer"
                                target="_blank" 
                                title="Check the source code on Github!">
                                <i className="fab fa-github-square fa-2x"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </header>
        )
    }
}