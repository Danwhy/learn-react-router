var React  = require('react');
var routerModule = require('react-router');
var Link = routerModule.Link;

var Navbar = React.createClass({
  render: function() {
    return (
      <ul>
        <Link to="/home"><li>Home</li></Link>
        <Link to="/breakfast"><li>Breakfast</li></Link>
        <Link to="/lunch"><li>Lunch</li></Link>
        <Link to="/dinner"><li>Dinner</li></Link>
      </ul>
    );
  }
});

module.exports = Navbar;
