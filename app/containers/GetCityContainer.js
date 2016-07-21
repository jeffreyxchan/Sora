var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');

var GetCityContainer = React.createClass({
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
        console.log(this.state.city);  
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