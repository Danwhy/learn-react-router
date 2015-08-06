var React  = require('react');

var BreakfastDrinks = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <ul>
          <li>Coffee</li>
          <li>Orange Juice</li>
        </ul>
      </div>
    );
  }
});

module.exports = BreakfastDrinks;
