var React = require('react');
var ListItem = React.createClass({
    render: function(){
        return (
           <li>{this.props.text} <button class="btn btn-danger">x</button></li>
        );
    }
});

module.exports = ListItem;