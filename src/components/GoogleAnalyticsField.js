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
                    ? <div 
                        className={
                            "googleAnalyticsFieldLoaded " + 
                            (
                                this._checkFieldValue()
                                ? 'googleAnalyticsFieldGood'
                                : 'googleAnalyticsFieldBad'
                            )
                        }
                        key={this.props.id + this.props.date}
                        >
                            {
                                this._checkFieldValue()
                                ? '+'
                                : ''
                            }
                            { this.props.children } %
                            {
                                this._checkFieldValue()
                                ? ' 📈'
                                : ' 📉'
                            }
                        </div>
                    : <div key={this.props.id + this.props.date} className="textElementNotLoaded">  
                    </div>
                }
            </div>
        )
    }

    _checkFieldValue() {
        return parseFloat(this.props.children) >= 0 || this.props.children === '♾️'
    }
}