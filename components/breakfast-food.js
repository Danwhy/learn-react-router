var React  = require('react');

var BreakfastFood = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <ul>
          <li>Croissant</li>
          <li>Fried Eggs</li>
        </ul>
      </div>
    );
  }
});

module.exports = BreakfastFood;
