import React, { Component } from 'react'

// Libs
import PropTypes from 'prop-types'

export class GoogleAnalyticsField extends Component {

    state = {
        percentageDifference : 0,
        results : null,
        resultsPrevious : null,
        resultsCalculated : false,
    }

    static propTypes = {
        authBearer : PropTypes.string,
        id : PropTypes.string,
        date: PropTypes.string,
    }

    render() {
        return (
            <div>
                {this.state.resultsCalculated
                    ? <div key={this.props.id + this.props.date} className="googleAnalyticsFieldLoaded">
                            { this.state.percentageDifference }
                        </div>
                    : <div key={this.props.id + this.props.date} className="textElementNotLoaded">
                        
                    </div>
                }
            </div>
        )
    }

    componentDidMount() {
        let url = new URL("https://www.googleapis.com/analytics/v3/data/ga")
        const params = {
            ids:`ga:${this.props.id}`,
            'start-date': this.props.date + 'daysAgo',
            'end-date': '1daysAgo',
            'metrics': 'ga:sessions',
        }

        Object.keys(params).forEach(
            key => url.searchParams.append(key, params[key])
        )

        this._getGAData(url)

        url = new URL("https://www.googleapis.com/analytics/v3/data/ga")
        const newDate = parseInt(this.props.date) + (parseInt(this.props.date) - 1)
        const newParams = {
            ids:`ga:${this.props.id}`,
            'start-date': newDate + 'daysAgo',
            'end-date': this.props.date + 'daysAgo',
            'metrics': 'ga:sessions',
        }

        Object.keys(newParams).forEach(
            key => url.searchParams.append(key, newParams[key])
        )

        this._getPreviousGAData(url)
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
                this.setState({ results : results.totalsForAllResults['ga:sessions'] })
                this._showResults()
            }
        )
    }

    _getPreviousGAData(url) {
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
                this.setState({ resultsPrevious : results.totalsForAllResults['ga:sessions'] })
                this._showResults()
            }
        )
    }

    _showResults() {
        let percentageDifference = 0
        if(this.state.previousResults !== null && this.state.results !== null) {

            const currentResults = parseInt(this.state.results)
            const previousResults = parseInt(this.state.previousResults)

            if(!isNaN(previousResults))
                percentageDifference = ((currentResults - previousResults)* 100) / previousResults
            else
                percentageDifference = '♾️'
            this.setState({ percentageDifference, resultsCalculated : true })

        }
    }
}