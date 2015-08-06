var React  = require('react');

var DinnerMains = React.createClass({
  render: function() {
    return (
      <div className="menu">
        <ul>
          <li>Steak</li>
          <li>Pasta</li>
        </ul>
      </div>
    );
  }
});

module.exports = DinnerMains;
