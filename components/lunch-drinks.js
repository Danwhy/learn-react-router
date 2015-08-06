var React  = require('react');

var LunchDrinks = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <ul>
          <li>Lemonade</li>
          <li>Sparkling Water</li>
        </ul>
      </div>
    );
  }
});

module.exports = LunchDrinks;
