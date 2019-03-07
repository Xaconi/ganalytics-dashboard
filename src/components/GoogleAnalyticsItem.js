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
        const paramsYesterday = {
            ids:`ga:${this.props.id}`,
            'start-date': '2daysAgo',
            'end-date': '1daysAgo',
            'metrics': 'ga:sessions',
        }

        Object.keys(paramsYesterday).forEach(
            key => url.searchParams.append(key, paramsYesterday[key])
        )

        this._getGAData(url, 'resultsYesterday')

        const paramsWeek = {
            ids:`ga:${this.props.id}`,
            'start-date': '7daysAgo',
            'end-date': '1daysAgo',
            'metrics': 'ga:sessions',
        }

        Object.keys(paramsWeek).forEach(
            key => url.searchParams.append(key, paramsWeek[key])
        )

        this._getGAData(url, 'resultsWeek')

        const paramsMonth = {
            ids:`ga:${this.props.id}`,
            'start-date': '30daysAgo',
            'end-date': '1daysAgo',
            'metrics': 'ga:sessions',
        }

        Object.keys(paramsMonth).forEach(
            key => url.searchParams.append(key, paramsMonth[key])
        )
        this._getGAData(url, 'resultsMonth')

        
    }

    _getGAData(url, resultsState) {
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
                this.setState({ resultsState : results })
            }
        )
    }
}