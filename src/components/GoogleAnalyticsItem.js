import React, { Component } from 'react'

// Components
import { GoogleAnalyticsField } from './GoogleAnalyticsField'

// Libs
import PropTypes from 'prop-types'

export class GoogleAnalyticsItem extends Component {

    static propTypes = {
        authBearer : PropTypes.string,
        id : PropTypes.string,
        name : PropTypes.string,
    }

    render() {
        return (
            <tr className="googleAnalyticsItem">
                <td>
                    {this.props.name}
                </td>

                <td>
                    <GoogleAnalyticsField 
                        authBearer={this.props.authBearer}
                        id={this.props.id}
                        date={'2daysAgo'}/>
                </td>

                <td>
                    <GoogleAnalyticsField 
                        authBearer={this.props.authBearer}
                        id={this.props.id}
                        date={'7daysAgo'}/>
                </td>

                <td>
                    <GoogleAnalyticsField 
                        authBearer={this.props.authBearer}
                        id={this.props.id}
                        date={'30daysAgo'}/>
                </td>
            </tr>
        )
    }

    componentDidMount() {
        
    }
}