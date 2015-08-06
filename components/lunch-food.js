var React  = require('react');

var LunchFood = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <ul>
          <li>Grilled Cheese Sandwich</li>
          <li>Burger and Fries</li>
        </ul>
      </div>
    );
  }
});

module.exports = LunchFood;
