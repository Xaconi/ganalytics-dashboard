import React, { Component } from 'react'

// Components
import { GoogleAnalyticsRow } from './GoogleAnalyticsRow'

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
                <table className="table">
                    <thead>
                        <tr>
                            <th>Website</th>
                            <th>1 day data</th>
                            <th>1 week data</th>
                            <th>1 month data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.gaItems.map(
                                gaItem => { return (
                                    <GoogleAnalyticsRow 
                                        authBearer={this.props.authBearer}
                                        id={gaItem.webProperties[0].profiles[0].id} 
                                        key={gaItem.id} 
                                        name={gaItem.name} 
                                        />
                                ) }
                            )
                        }
                    </tbody>
                </table>
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