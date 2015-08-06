var React  = require('react');

var BreakfastDrinks = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <ul>
          <li>Coffee<span className="price">£2.00</span></li>
          <li>Orange Juice<span className="price">£1.00</span></li>
        </ul>
      </div>
    );
  }
});

module.exports = BreakfastDrinks;
