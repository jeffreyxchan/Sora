var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');
var getCurrentWeather = require('../utilities/api').getCurrentWeather;
var getForcast = require('../utilities/api').getForcast;

var GetCityContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getDefaultProps: function () {
        return {
            dierection: 'column'
        }
    },
    propTypes: {
        direction: PropTypes.string  
    },
    getInitialState: function () {
        return {
            city: ''
        }
    },
    handleSubmitCity: function () {
        getCurrentWeather(this.state.city);
        this.context.router.push('/forcast/' + this.state.city);
    },
    handleUpdateCity: function (e) {
        this.setState({
            city: e.target.value
        })
    },
    render: function (props) {
        return (
            <GetCity 
                direction={this.props.direction} 
                onSubmitCity={this.handleSubmitCity}
                onUpdateCity={this.handleUpdateCity} 
                city={this.state.city} />
        )
    }
});

module.exports = GetCityContainer;       