var React = require('react')
var PropTypes = React.PropTypes
var Loading = require('../components/Loading')
var utils = require('../utilities/utils')
var getDate = utils.getDate
var convertTemp = utils.convertTemp
var DayItem = require('./DayItem')

var styles = {
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  }
}

function ForecastUI(props) {
  return (
    <div>
      <h1 style={styles.header}>{props.city}</h1>
      <div style={styles.container}>
        {props.forecast.list.map(function(listItem) {
          return <DayItem key={listItem.dt} day={listItem} handleClick={props.handleClick.bind(null, listItem)} />
        })}
      </div>
    </div>
  )
}

function Forecast(props) {
  return props.isLoading === true ? (
    <Loading text={'Getting Weather'} speed={200} />
  ) : (
    <ForecastUI city={props.city} forecast={props.forecastData} handleClick={props.handleClick} />
  )
}

Forecast.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  forecastData: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

module.exports = Forecast
