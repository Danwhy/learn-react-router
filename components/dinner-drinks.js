var React  = require('react');

var DinnerDrinks = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <ul>
          <li>Wine<span className="price">£4.00</span></li>
          <li>Beer<span className="price">£3.50</span></li>
        </ul>
      </div>
    );
  }
});

module.exports = DinnerDrinks;
