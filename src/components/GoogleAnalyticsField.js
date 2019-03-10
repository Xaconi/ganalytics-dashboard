import React, { Component } from 'react'

// Libs
import PropTypes from 'prop-types'

export class GoogleAnalyticsField extends Component {

    static propTypes = {
        authBearer : PropTypes.string,
        id : PropTypes.string,
        date: PropTypes.string,
        resultsCalculated: PropTypes.bool
    }

    render() {
        return (
            <div>
                {this.props.resultsCalculated
                    ? <div key={this.props.id + this.props.date} className="googleAnalyticsFieldLoaded">
                            { this.props.children }
                        </div>
                    : <div key={this.props.id + this.props.date} className="textElementNotLoaded">  
                    </div>
                }
            </div>
        )
    }
}