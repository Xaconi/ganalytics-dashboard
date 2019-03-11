import React, { Component } from 'react'

// Libs
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

export class GoogleAnalyticsTrack extends Component {

    static propTypes = {
        gaCode : PropTypes.string,
    }

    render() {
        return(
            <Helmet>
                <link rel="preconnect dns-prefetch" href="https://www.google-analytics.com" />
                <script>{`
                    window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
                    ga('create', '${this.props.gaCode}', 'auto');
                    ga('send', 'pageview');
                `}
                </script>
                <script async src='https://www.google-analytics.com/analytics.js' />
            </Helmet>
        )
    }

}