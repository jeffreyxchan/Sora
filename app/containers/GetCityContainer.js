var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');

var GetCityContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getDefaultProps: function () {
        return {
            dierection: 'column',
            placeHolder: 'Los Angeles, California'
        }
    },
    propTypes: {
        direction: PropTypes.string,
        placeHolder: PropTypes.string
    },
    getInitialState: function () {
        return {
            city: ''
        }
    },
    handleSubmitCity: function (e) {
        e.preventDefault();
        var city = this.state.city;
        this.setState({
            city: ''
        });
        this.context.router.push('/forecast/' + city);
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
                placeHolder={this.props.placeHolder}
                onSubmitCity={this.handleSubmitCity}
                onUpdateCity={this.handleUpdateCity} 
                city={this.state.city} />
        )
    }
});

module.exports = GetCityContainer;       