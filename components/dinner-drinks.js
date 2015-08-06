var React  = require('react');

var DinnerDrinks = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <ul>
          <li>Wine</li>
          <li>Beer</li>
        </ul>
      </div>
    );
  }
});

module.exports = DinnerDrinks;
