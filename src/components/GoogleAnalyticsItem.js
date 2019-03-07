import React, { Component } from 'react'

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
            </div>
        )
    }

    componentDidMount() {
        const url = new URL("https://www.googleapis.com/analytics/v3/data/ga")
        const params = {
            ids:`ga:${this.props.id}`,
            'start-date': '2019-03-01',
            'end-date': '2019-03-07',
            'metrics': 'ga:sessions',
        }

        Object.keys(params).forEach(
            key => url.searchParams.append(key, params[key])
        )

        fetch(url, 
            {
                method: 'get',
                headers: new Headers({
                    'Authorization' : `Bearer ${this.props.authBearer}`
                })
            })
            .then(response => response.json())
            .then(results => {
                console.log({ results })
                this.setState({ results })
            }
        )
    }
}