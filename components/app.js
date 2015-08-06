var React  = require('react');
var Navbar = require('./nav.js');

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <Navbar />
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
