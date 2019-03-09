import React, { Component } from 'react'

// Components
import { GoogleAnalyticsField } from './GoogleAnalyticsField'

// Libs
import PropTypes from 'prop-types'

export class GoogleAnalyticsRow extends Component {

    static propTypes = {
        authBearer : PropTypes.string,
        id : PropTypes.string,
        name : PropTypes.string,
    }

    render() {
        return (
            <tr className="googleAnalyticsRow">
                <td>
                    {this.props.name}
                </td>

                <td>
                    <GoogleAnalyticsField 
                        authBearer={this.props.authBearer}
                        id={this.props.id}
                        date={'2'}/>
                </td>

                <td>
                    <GoogleAnalyticsField 
                        authBearer={this.props.authBearer}
                        id={this.props.id}
                        date={'7'}/>
                </td>

                <td>
                    <GoogleAnalyticsField 
                        authBearer={this.props.authBearer}
                        id={this.props.id}
                        date={'30'}/>
                </td>
            </tr>
        )
    }

    componentDidMount() {
        
    }
}