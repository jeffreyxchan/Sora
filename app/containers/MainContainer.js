var React = require('react');
var PropType = React.PropTypes;
var GetCityContainer = require('../containers/GetCityContainer');

var styles = {
    container: {
        width: '100%',
        height: '92%'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#0052cc',
        color: '#fff',
        padding: 5
    }
}

var MainContainer = React.createClass({
    render: function () {
        return (
            <div style={styles.container}>
                <div style={styles.header}>
                    <h1 style={{margin: 0, paddingLeft: 20, paddingRight: 20}}>Sora</h1>
                    <GetCityContainer direction='row' />
                </div>
                {this.props.children}
            </div>
        );
    }
});

module.exports = MainContainer;