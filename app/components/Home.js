var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');

var styles = {
    container: {
        background: "url('app/images/poly.svg') center",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },
    header: {
        fontSize: 45,
        color: '#fff',
        fontWeight: 100
    }
}

var Home = React.createClass({
    render: function () {
        return (
            <div style={styles.container}>
                <h1 style={styles.header}>Enter a City and State</h1>
                <GetCityContainer />
            </div>
        );
    }
});

module.exports = Home;