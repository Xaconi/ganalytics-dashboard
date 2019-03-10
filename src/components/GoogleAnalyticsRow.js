import React, { Component } from 'react'

// Components
import { GoogleAnalyticsField } from './GoogleAnalyticsField'

// Libs
import PropTypes from 'prop-types'

export class GoogleAnalyticsRow extends Component {

    state = {
        resultsCalculated : false,
        percentageDifferenceDay : 0,
        percentageDifferenceMonth : 0,
        percentageDifferenceWeek : 0,
        resultsDay : 0,
        resultsDayComparative : 0,
        resultsMonth : 0,
        resultsMonthComparative : 0,
        resultsWeek : 0,
        resultsWeekComparative : 0,
    }

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
                        resultsCalculated={this.state.resultsCalculated}>
                        {this.state.percentageDifferenceDay}
                    </GoogleAnalyticsField>
                </td>

                <td>
                    <GoogleAnalyticsField 
                        authBearer={this.props.authBearer}
                        id={this.props.id}
                        resultsCalculated={this.state.resultsCalculated}>
                        {this.state.percentageDifferenceWeek}
                    </GoogleAnalyticsField>
                </td>

                <td>
                    <GoogleAnalyticsField 
                        authBearer={this.props.authBearer}
                        id={this.props.id}
                        resultsCalculated={this.state.resultsCalculated}>
                        {this.state.percentageDifferenceMonth}
                    </GoogleAnalyticsField>
                </td>
            </tr>
        )
    }

    componentDidMount() {
        const url = new URL("https://analyticsreporting.googleapis.com/v4/reports:batchGet")
        const data = {
            'reportRequests' : [
                {
                    viewId:`ga:${this.props.id}`,
                    'dateRanges' : [
                        {
                            'startDate': '60daysAgo',
                            'endDate': 'today',
                        },
                    ],
                    'metrics': [
                        {'expression' : 'ga:sessions'},
                    ],
                    'dimensions': [
                        {'name' : 'ga:nthDay'},
                    ]
                },
            ]
        }

        this._getGAData(url, data)
    }

    _getGAData(url, data) {
        fetch(url, 
            {
                method: 'post',
                headers: new Headers({
                    'Authorization' : `Bearer ${this.props.authBearer}`
                }),
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(results => {
                const resultsConcrete = results.reports
                console.log({ resultsConcrete })

                if(!(typeof results.reports[0].data.rows === 'undefined')) {
                    this.setState({ 
                        results : results.reports[0].data.rows
                    })
                    this._processResults()
                }
            }
        )
    }

    _updateResults() {
        let percentageDifferenceDay = 0
        let percentageDifferenceMonth = 0
        let percentageDifferenceWeek = 0

        if(!isNaN(this.state.resultsDayComparative) && this.state.resultsDayComparative !== 0)
            percentageDifferenceDay = ((this.state.resultsDay - this.state.resultsDayComparative)* 100) / this.state.resultsDayComparative
        else
            percentageDifferenceDay = '♾️'

        if(!isNaN(this.state.resultsMonthComparative) && this.state.resultsMonthComparative !== 0)
            percentageDifferenceMonth = ((this.state.resultsMonth - this.state.resultsMonthComparative)* 100) / this.state.resultsMonthComparative
        else
            percentageDifferenceMonth = '♾️'

         if(!isNaN(this.state.resultsWeekComparative) && this.state.resultsWeekComparative !== 0)
            percentageDifferenceWeek = ((this.state.resultsWeek - this.state.resultsWeekComparative)* 100) / this.state.resultsWeekComparative
        else
            percentageDifferenceWeek = '♾️'

        this.setState({ 
            percentageDifferenceDay,
            percentageDifferenceMonth,
            percentageDifferenceWeek,
            resultsCalculated : true 
        })
    }

    _processResults() {
        this.state.results.forEach((element, index) => {
            const maxDays = 60
            const maxDaysMonth = 30
            const maxDaysWeek = 7
            const maxDaysDay = 1

            let resultsMonth = 0
            let resultsWeek = 0
            let resultsDay = 0
            let resultsMonthComparative = 0
            let resultsWeekComparative = 0
            let resultsDayComparative = 0

            const day = maxDays - parseInt(element.dimensions[0])
            const currentValue = parseInt(element.metrics[0].values[0])

            if(day <= maxDaysMonth)
                resultsMonth += currentValue
            else if(day > maxDaysMonth && day <= (maxDaysMonth*2))
                resultsMonthComparative += currentValue

            if(day <= maxDaysWeek)
                resultsWeek += currentValue
            else if(day > maxDaysWeek && day <= (maxDaysWeek*2))
                resultsWeekComparative += currentValue

            if(day <= maxDaysDay)
                resultsDay += currentValue
            else if(day > maxDaysDay && day <= (maxDaysDay*2))
                resultsDayComparative += currentValue

            // End of loop, update the state with the results
            if(index === (this.state.results.length - 1)){
                this.setState({
                    resultsDay,
                    resultsDayComparative,
                    resultsMonth,
                    resultsMonthComparative,
                    resultsWeek,
                    resultsWeekComparative,
                })
                this._updateResults()
            }
        });
    }
}