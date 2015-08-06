var React  = require('react');

var BreakfastFood = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <ul>
          <li>Croissant<span className="price">£2.00</span></li>
          <li>Fried Eggs<span className="price">£3.00</span></li>
        </ul>
      </div>
    );
  }
});

module.exports = BreakfastFood;
