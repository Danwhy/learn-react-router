var React  = require('react');
var routerModule = require('react-router');
var Link = routerModule.Link;

var Menus = React.createClass({
  render: function() {
    var items = this.props.items.map(function(element, i) {
      return (
        <Link key={i} to={element.path}><li>{element.name}</li></Link>
      );
    });
    return (
      <ul>
        {items}
      </ul>
    );
  }
});

module.exports = Menus
