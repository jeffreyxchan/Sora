var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('../components/Loading');

function Forecast (props) {
    console.log(props);
    return (
        props.isLoading === true
        ? <Loading />
        : <div>Hello from Forecast.js</div>
    );
}

Forecast.propTypes = {
    isLoading: PropTypes.bool.isRequired
}

module.exports = Forecast;