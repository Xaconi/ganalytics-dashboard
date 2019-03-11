import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return(
            <footer>
                <div className="columns">
                    <div className="column is-offset-3 is-6">
                        <p>
                            Made with ❤️ by <a 
                                href="https://twitter.com/xaconi" 
                                ref="noreferrer noopener"
                                target="_blank"
                                title="Made with ❤️ by @Xaconi">
                                @Xaconi
                            </a>.
                            Fork the code on <a 
                                href="https://github.com/Xaconi/ganalytics-dashboard" 
                                ref="noreferrer noopener"
                                target="_blank"
                                title="Fork the code on Github to improve this app!">
                                Github
                            </a> to improve this app!
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}