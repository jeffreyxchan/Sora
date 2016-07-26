var React = require('react');
var PropTypes = React.PropTypes;
var utils = require('../utilities/utils');
var DayItem = require('./DayItem');
var convertTemp = utils.convertTemp;

var styles = {
    descriptionContainer: {
        fontSize: 34,
        fontWeight: 100,
        maxWidth: 400,
        margin: '0 auto',
        textAlign: 'center'
    }
}

function Detail (props) {
    return (
        <div style={styles.container} onClick={props.handleClick} >
            <DayItem day={props.weather} />
            <div style={styles.descriptionContainer} >
                <p>{props.city}</p>
                <p>{props.weather.weather[0].description}</p>
                <p>Min Temp: {convertTemp(props.weather.temp.min)} degrees</p>
                <p>Max Temp: {convertTemp(props.weather.temp.max)} degress</p>
                <p>Humidity: {props.weather.humidity}</p>
            </div>
        </div>
    )
};

Detail.propTypes = {
    weather: PropTypes.object.isRequired,
    city: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}

module.exports = Detail;