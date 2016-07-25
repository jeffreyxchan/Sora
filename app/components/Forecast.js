var React = require('react');
var PropTypes = React.PropTypes;

function Forecast (props) {
    console.log(props);
    return (
        props.isLoading === true
        ? <p>LOADING</p>
        : <div>Hello from Forecast.js</div>
    );
}

Forecast.propTypes = {
    isLoading: PropTypes.bool.isRequired
}

module.exports = Forecast;