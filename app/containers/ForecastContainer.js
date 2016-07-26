var React = require('react');
var getForecast = require('../utilities/api').getForecast;
var Forecast = require('../components/Forecast');

var ForecastContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
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
    handleClick: function (weather) {
        this.context.router.push({
            pathname: '/detail/' + this.props.routeParams.city,
            state: {
                weather: weather
            }
        })
    },
    render: function () {
        return (
            <Forecast 
                isLoading={this.state.isLoading}
                forecastData={this.state.forecastData}
                city={this.props.routeParams.city}
                handleClick={this.handleClick} />
        );
    }
});
        
module.exports = ForecastContainer;