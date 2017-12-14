var React = require('react')
var PropTypes = React.PropTypes

function Button(props) {
  return (
    <button type="submit" style={{ margin: 10 }} className="btn btn-success">
      {props.children}
    </button>
  )
}

function InputField(props) {
  return (
    <input
      className="form-control"
      onChange={props.onUpdateCity}
      type="text"
      placeholder={props.placeHolder}
      value={props.city}
    />
  )
}

function getStyles(props) {
  return {
    display: 'flex',
    flexDirection: props.direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300
  }
}

function GetCity(props) {
  return (
    <form onSubmit={props.onSubmitCity} style={getStyles(props)}>
      <InputField onUpdateCity={props.onUpdateCity} city={props.city} placeHolder={props.placeHolder} />
      <Button>Get Weather</Button>
    </form>
  )
}

GetCity.propTypes = {
  direction: PropTypes.string,
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = GetCity
