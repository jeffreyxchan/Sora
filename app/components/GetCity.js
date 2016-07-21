var React = require('react');
var PropTypes = React.PropTypes;

function Button (props) {
    return (
        <button type='button'
            style={{margin: 10}}
            className='btn btn-success'
            onClick={props.onSubmitCity}>
                {props.children}
        </button>
    );
}

function InputField (props) {
    return (
        <input
            className='form-control'
            onChange={props.onUpdateCity}
            type='text'
            placeholder='Hacienda Heights, California'
            value={props.city} />
    );
}

function getStyles (props) {
    return {
        display: 'flex',
        flexDirection: props.direction || 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 300,
        alignSelf: 'right'
    }
}

function GetCity (props) {
    return (
        <form onSubmit={props.onSubmitCity} style={getStyles(props)}>
            <InputField
                onUpdateCity={props.onUpdateCity}
                city={props.city} />
            <Button onSubmitCity={props.onSubmitCity}>
                Get Weather
            </Button>
        </form>
    )
}

module.exports = GetCity;