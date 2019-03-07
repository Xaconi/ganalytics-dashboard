import React, { Component } from 'react'

// Components
import { GoogleAnalyticsItem } from './GoogleAnalyticsItem'

// Libs
import PropTypes from 'prop-types'

export class GoogleAnalyticsList extends Component {
    
    // State init
    state = {
        gaItems : []
    }

    static propTypes = {
        authBearer: PropTypes.string
    }

    render() {
        return(
            <div className="googleAnalyticsList">
            {
                this.state.gaItems.map(
                    gaItem => { return (
                        <GoogleAnalyticsItem 
                            authBearer={this.props.authBearer}
                            id={gaItem.webProperties[0].profiles[0].id} 
                            key={gaItem.id} 
                            name={gaItem.name} 
                             />
                    ) }
                )
            }
            </div>
        )
    }

    componentDidMount() {
        fetch(
            `https://www.googleapis.com/analytics/v3/management/accountSummaries`, 
            {
                method: 'get',
                headers: new Headers({
                    'Authorization' : `Bearer ${this.props.authBearer}`
                })
            })
            .then(response => response.json())
            .then(results => {
                console.log({ results })
                this.setState({ gaItems : results.items })
            })
    }
}