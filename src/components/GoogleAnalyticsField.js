import React, { Component } from 'react'

// Libs
import PropTypes from 'prop-types'

export class GoogleAnalyticsField extends Component {

    state = {
        results : []
    }

    static propTypes = {
        authBearer : PropTypes.string,
        id : PropTypes.string,
        date: PropTypes.string,
    }

    render() {
        return (
            <div key={this.props.id + this.props.date} className="googleAnalyticsField">
                OK
            </div>
        )
    }

    componentDidMount() {
        const url = new URL("https://www.googleapis.com/analytics/v3/data/ga")
        const params = {
            ids:`ga:${this.props.id}`,
            'start-date': this.props.date,
            'end-date': '1daysAgo',
            'metrics': 'ga:sessions',
        }

        Object.keys(params).forEach(
            key => url.searchParams.append(key, params[key])
        )

        this._getGAData(url)
    }

    _getGAData(url) {
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