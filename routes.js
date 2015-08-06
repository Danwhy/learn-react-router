var React  = require('react');
var routerModule = require('react-router');
var history = require("react-router/lib/HashHistory").history;

var Router = routerModule.Router;
var Route = routerModule.Route;
var Redirect = routerModule.Redirect;

var App = require('./components/app.js');
var Breakfast = require('./components/breakfast.js');
var Lunch = require('./components/lunch.js');
var Dinner = require('./components/dinner.js');
var Home = require('./components/home.js');
var BreakfastDrinks = require('./components/breakfast-drinks');
var BreakfastFood = require('./components/breakfast-food');
var LunchDrinks = require('./components/lunch-drinks');
var LunchFood = require('./components/lunch-food');
var DinnerDrinks = require('./components/dinner-drinks');
var DinnerMains = require('./components/dinner-mains');
var DinnerDesserts = require('./components/dinner-desserts');

module.exports = (
  <Router history={history}>
    <Route component={App}>
      <Redirect from='/' to='/home' />
      <Route path='home' component={Home} />
      <Route path='breakfast' component={Breakfast}>
        <Route path='drinks' component={BreakfastDrinks} />
        <Route path='food' component={BreakfastFood} />
      </Route>
      <Route path='lunch' component={Lunch}>
        <Route path='drinks' component={LunchDrinks} />
        <Route path='food' component={LunchFood} />
      </Route>
      <Route path='dinner' component={Dinner}>
        <Route path='drinks' component={DinnerDrinks} />
        <Route path='mains' component={DinnerMains} />
        <Route path='desserts' component={DinnerDesserts} />
      </Route>
    </Route>
  </Router>
);
