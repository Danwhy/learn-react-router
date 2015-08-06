var React  = require('react');
var Menus = require('./menus.js');

var Dinner = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <Menus items={[{path:'/dinner/drinks', name:'Drinks'}, {path:'/dinner/mains', name:'Mains'}, {path:'/dinner/desserts', name:'Desserts'}]}/>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Dinner;
