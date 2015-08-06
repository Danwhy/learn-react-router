var React  = require('react');
var Menus = require('./menus.js');

var Breakfast = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <Menus items={[{path:'/breakfast/drinks', name:'Drinks'}, {path:'/breakfast/food', name:'Food'}]}/>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Breakfast;
