import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return(
            <header>
                {/* Logo + Social Network Links */}
                <div className="columns">
                    <div className="column is-offset-4 is-2">
                        <span className="icon is-medium">
                            <a href="https://twitter.com/xaconi" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter-square fa-2x"></i>
                            </a>
                        </span>
                    </div>
                    <div className="column is-2">
                        <span className="icon is-medium">
                            <a href="https://github.com/Xaconi/ganalytics-dashboard" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github-square fa-2x"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </header>
        )
    }
}