var React = require('react');
var Forcast = require('../components/Forcast');

var ForcastContainer = React.createClass({
    render: function () {
        return (
            <Forcast />
        );
    }
});
        
module.exports = ForcastContainer;