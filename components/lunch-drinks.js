var React  = require('react');

var LunchDrinks = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <ul>
          <li>Lemonade<span className="price">£2.00</span></li>
          <li>Sparkling Water<span className="price">£1.50</span></li>
        </ul>
      </div>
    );
  }
});

module.exports = LunchDrinks;
