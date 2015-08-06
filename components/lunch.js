var React  = require('react');
var Menus = require('./menus.js');

var Lunch = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <Menus items={[{path:'/lunch/drinks', name:'Drinks'}, {path:'/lunch/food', name:'Food'}]}/>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Lunch;
