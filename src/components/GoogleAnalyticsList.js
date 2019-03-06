import React, { Component } from 'react'

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

    componentWillMount() {
        console.log('componentWillMount')
    }

    render() {
        return(
            <div className="googleAnalyticsList">
            {
                this.state.gaItems.map(
                    gaItem => { return (
                        <div className="googleAnalyticsItem">
                            {gaItem.name}
                        </div>
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
            })
    }
}