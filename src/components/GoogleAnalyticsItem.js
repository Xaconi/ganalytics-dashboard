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
            <div className="googleAnalyticsItem">
                {this.props.name}

                <GoogleAnalyticsField 
                    authBearer={this.props.authBearer}
                    id={this.props.id}
                    date={'2daysAgo'}/>

                <GoogleAnalyticsField 
                    authBearer={this.props.authBearer}
                    id={this.props.id}
                    date={'7daysAgo'}/>

                <GoogleAnalyticsField 
                    authBearer={this.props.authBearer}
                    id={this.props.id}
                    date={'30daysAgo'}/>
            </div>
        )
    }

    componentDidMount() {
        
    }
}