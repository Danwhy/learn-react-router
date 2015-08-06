var React  = require('react');

var LunchFood = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <ul>
          <li>Grilled Cheese Sandwich<span className="price">£4.00</span></li>
          <li>Burger and Fries<span className="price">£5.00</span></li>
        </ul>
      </div>
    );
  }
});

module.exports = LunchFood;
