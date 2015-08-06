var React  = require('react');

var DinnerDesserts = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <ul>
          <li>Ice Cream<span className="price">£3.00</span></li>
          <li>Apple Pie<span className="price">£4.00</span></li>
        </ul>
      </div>
    );
  }
});

module.exports = DinnerDesserts;
