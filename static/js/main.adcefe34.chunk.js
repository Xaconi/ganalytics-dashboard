(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/logo.89c5ade6.PNG"},13:function(e,t,a){e.exports=a(32)},18:function(e,t,a){},19:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(10),o=a.n(r),i=(a(18),a(1)),l=a(2),c=a(4),u=a(3),h=a(5),m=(a(19),a(11)),p=a.n(m),d=a(6),f=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("header",null,s.a.createElement(d.Helmet,null,s.a.createElement("title",null,"Ganalytics Dashboard"),s.a.createElement("meta",{name:"description",content:"A simple view for your GA accounts"})),s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-offset-4 is-4"},s.a.createElement("figure",{className:"image logoImage"},s.a.createElement("img",{alt:"Ganalytics Dashboard - A simple view for your GA accounts",src:p.a,title:"Ganalytics Dashboard - A simple view for your GA accounts"})))),s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-offset-4 is-2"},s.a.createElement("span",{className:"icon is-medium"},s.a.createElement("a",{href:"https://twitter.com/xaconi",rel:"noopener noreferrer",target:"_blank",title:"Follow me on Twitter!"},s.a.createElement("i",{className:"fab fa-twitter-square fa-2x"})))),s.a.createElement("div",{className:"column is-2"},s.a.createElement("span",{className:"icon is-medium"},s.a.createElement("a",{href:"https://github.com/Xaconi/ganalytics-dashboard",rel:"noopener noreferrer",target:"_blank",title:"Check the source code on Github!"},s.a.createElement("i",{className:"fab fa-github-square fa-2x"}))))))}}]),t}(n.Component),g=a(12),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={isAuthenticated:!1},a._handleLoginOK=function(e){a.setState({isAuthenticated:!0}),a.props.onLogin(e.accessToken)},a._handleLoginKO=function(e){a.setState({isAuthenticated:!1})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return!1===this.state.isAuthenticated?s.a.createElement(g.GoogleLogin,{buttonText:"Login",clientId:"209193014726-2fa7jcmfki51l6fa6k15lb9fco5bdigo.apps.googleusercontent.com",onFailure:this._handleLoginKO,onSuccess:this._handleLoginOK,scope:"https://www.googleapis.com/auth/analytics.edit"}):null}}]),t}(n.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,this.props.resultsCalculated?s.a.createElement("div",{className:"googleAnalyticsFieldLoaded "+(this._checkFieldValue()?"googleAnalyticsFieldGood":"googleAnalyticsFieldBad"),key:this.props.id+this.props.date},this._checkFieldValue()?"+":"",this.props.children," %",this._checkFieldValue()?" \ud83d\udcc8":" \ud83d\udcc9"):s.a.createElement("div",{key:this.props.id+this.props.date,className:"textElementNotLoaded"}))}},{key:"_checkFieldValue",value:function(){return parseFloat(this.props.children)>=0||"\u267e\ufe0f"===this.props.children}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={resultsCalculated:!1,percentageDifferenceDay:0,percentageDifferenceMonth:0,percentageDifferenceWeek:0,resultsDay:0,resultsDayComparative:0,resultsMonth:0,resultsMonthComparative:0,resultsWeek:0,resultsWeekComparative:0},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("tr",{className:"googleAnalyticsRow"},s.a.createElement("td",null,this.props.name),s.a.createElement("td",null,s.a.createElement(y,{authBearer:this.props.authBearer,id:this.props.id,resultsCalculated:this.state.resultsCalculated},this.state.percentageDifferenceDay)),s.a.createElement("td",null,s.a.createElement(y,{authBearer:this.props.authBearer,id:this.props.id,resultsCalculated:this.state.resultsCalculated},this.state.percentageDifferenceWeek)),s.a.createElement("td",null,s.a.createElement(y,{authBearer:this.props.authBearer,id:this.props.id,resultsCalculated:this.state.resultsCalculated},this.state.percentageDifferenceMonth)))}},{key:"componentDidMount",value:function(){var e=new URL("https://analyticsreporting.googleapis.com/v4/reports:batchGet"),t={reportRequests:[{viewId:"ga:".concat(this.props.id),dateRanges:[{startDate:"60daysAgo",endDate:"today"}],metrics:[{expression:"ga:sessions"}],dimensions:[{name:"ga:nthDay"}]}]};this._getGAData(e,t)}},{key:"_getGAData",value:function(e,t){var a=this;fetch(e,{method:"post",headers:new Headers({Authorization:"Bearer ".concat(this.props.authBearer)}),body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){var t=e.reports;console.log({resultsConcrete:t}),"undefined"!==typeof e.reports[0].data.rows&&(a.setState({results:e.reports[0].data.rows}),a._processResults())})}},{key:"_updateResults",value:function(){var e=0,t=0,a=0;e=isNaN(this.state.resultsDayComparative)||0===this.state.resultsDayComparative?"\u267e\ufe0f":parseFloat(100*(this.state.resultsDay-this.state.resultsDayComparative)/this.state.resultsDayComparative).toFixed(2),t=isNaN(this.state.resultsMonthComparative)||0===this.state.resultsMonthComparative?"\u267e\ufe0f":parseFloat(100*(this.state.resultsMonth-this.state.resultsMonthComparative)/this.state.resultsMonthComparative).toFixed(2),a=isNaN(this.state.resultsWeekComparative)||0===this.state.resultsWeekComparative?"\u267e\ufe0f":parseFloat(100*(this.state.resultsWeek-this.state.resultsWeekComparative)/this.state.resultsWeekComparative).toFixed(2),this.setState({percentageDifferenceDay:e,percentageDifferenceMonth:t,percentageDifferenceWeek:a,resultsCalculated:!0})}},{key:"_processResults",value:function(){var e=this,t=0,a=0,n=0,s=0,r=0,o=0;this.state.results.forEach(function(i,l){var c=60-parseInt(i.dimensions[0]),u=parseInt(i.metrics[0].values[0]);c<=30?t+=u:c>30&&c<=60&&(s+=u),c<=7?a+=u:c>7&&c<=14&&(r+=u),c<=1?n+=u:c>1&&c<=2&&(o+=u),l===e.state.results.length-1&&(e.setState({resultsDay:n,resultsDayComparative:o,resultsMonth:t,resultsMonthComparative:s,resultsWeek:a,resultsWeekComparative:r}),e._updateResults())})}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={gaItems:[]},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"googleAnalyticsList"},s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Website"),s.a.createElement("th",null,"1 day data"),s.a.createElement("th",null,"1 week data"),s.a.createElement("th",null,"1 month data"))),s.a.createElement("tbody",null,this.state.gaItems.map(function(t){return s.a.createElement(b,{authBearer:e.props.authBearer,id:t.webProperties[0].profiles[0].id,key:t.id,name:t.name})}))))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://www.googleapis.com/analytics/v3/management/accountSummaries",{method:"get",headers:new Headers({Authorization:"Bearer ".concat(this.props.authBearer)})}).then(function(e){return e.json()}).then(function(t){console.log({results:t}),e.setState({gaItems:t.items})})}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={login:!1,authBearer:""},a._triggerLogin=function(e){a.setState({login:!0,authBearer:e})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container is-fluid"},s.a.createElement("div",{className:"notification"},s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-offset-1 is-10"},s.a.createElement("div",{className:"column is-12"},s.a.createElement("p",{className:"explanation"},s.a.createElement("strong",null,"gAnalytics Dashboard")," is simple tool to check and review your Google Analytics accounts results. The results (at the moment) are the GA sessions from the last day, the last week and the last month, each one with the previous period comparative. It offers a simple view in order to check if the GA account is going well or not. Also, you can see the percentage of the GA sessions compared with the previous period of time.",s.a.createElement("br",null),s.a.createElement("br",null),"You must login with your Google account (the same you use on Google Analytics) and gave access to read-only to your accounts, in order to see the results on this App.")),s.a.createElement(v,{onLogin:this._triggerLogin}),this.state.login?s.a.createElement(E,{authBearer:this.state.authBearer}):s.a.createElement("p",null)))))}}]),t}(n.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("footer",null,s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-offset-3 is-6"},s.a.createElement("p",null,"Made with \u2764\ufe0f by ",s.a.createElement("a",{href:"https://twitter.com/xaconi",ref:"noreferrer noopener",target:"_blank",title:"Made with \u2764\ufe0f by @Xaconi"},"@Xaconi"),". Fork the code on ",s.a.createElement("a",{href:"https://github.com/Xaconi/ganalytics-dashboard",ref:"noreferrer noopener",target:"_blank",title:"Fork the code on Github to improve this app!"},"Github")," to improve this app!"))))}}]),t}(n.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(d.Helmet,null,s.a.createElement("link",{rel:"preconnect dns-prefetch",href:"https://www.google-analytics.com"}),s.a.createElement("script",null,"\n                    window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;\n                    ga('create', '".concat(this.props.gaCode,"', 'auto');\n                    ga('send', 'pageview');\n                ")),s.a.createElement("script",{async:!0,src:"https://www.google-analytics.com/analytics.js"}))}}]),t}(n.Component),j=(a(30),a(31),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(O,{gaCode:"UA-135636972-1"}),s.a.createElement(f,null),s.a.createElement(w,null),s.a.createElement(k,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.adcefe34.chunk.js.map