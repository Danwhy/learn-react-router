var React  = require('react');

var DinnerMains = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <ul>
          <li>Steak<span className="price">£8.00</span></li>
          <li>Pasta<span className="price">£7.00</span></li>
        </ul>
      </div>
    );
  }
});

module.exports = DinnerMains;
