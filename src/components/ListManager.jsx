var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
    getInitialState: function(){
        return {items: [], newItemText: ''};
    },

    handleSubmit: function(e){
        e.preventDefault();

        var currentItems = this.state.items;

        if(this.state.newItemText != ''){
            currentItems.push(this.state.newItemText);
        }

        this.setState({items: currentItems, newItemText: ''});

    },

    onChange: function(e){
        this.setState({newItemText: e.target.value});
    },

    render: function(){
        return (
            <div>
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input className="form-control" onChange={this.onChange} value={this.state.newItemText}/>
                                <input type="submit" className="btn btn-primary" value="Add"/>
                            </div>
                        </form>
                        <List items={this.state.items} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ListManager;