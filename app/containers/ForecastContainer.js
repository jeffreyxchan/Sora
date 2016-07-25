var React = require('react');
var getForecast = require('../utilities/api').getForecast;
var Forecast = require('../components/Forecast');

var ForecastContainer = React.createClass({
    getInitialState: function () {
        return {
            isLoading: true,
            forecastData: {}
        }
    },
    componentDidMount: function () {
        this.makeRequest(this.props.routeParams.city);
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({
            isLoading: true
        });
        this.makeRequest(nextProps.routeParams.city);
    },
    makeRequest: function (city) {
        getForecast(city)
        .then(function(forecastData) {
            this.setState({
                isLoading: false,
                forecastData: forecastData
            });
        }.bind(this));
    },
    render: function () {
        return (
            <Forecast 
                isLoading={this.state.isLoading}
                forecastData={this.state.forecastData}
                city={this.props.routeParams.city} />
        );
    }
});
        
module.exports = ForecastContainer;