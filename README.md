# learn-react-router

React Router is a routing library for React. It makes it easy to synchronize the components of your application with your URL, as well as providing easy nesting of components.

### Getting started

This guide will assume some basic knowledge of React. If you have none, start with the docs: http://facebook.github.io/react/docs/getting-started.html

You can use React Router by installing it via npm and using a module bundler such as browserify or webpack, or by using the [CDN](https://cdnjs.com/libraries/react-router).

In this guide we'll be using the npm module and [webpack](http://webpack.github.io/). If you have no experience using a module bundler, check out [this guide](https://github.com/jrans/React-Webpack-Hotloader) to get started.

To install:
```
npm install react-router
```
### Example

This repo contains the code for a simple restaurant menu written with React, to show how to use nested routing.  
To view the page: clone the repo, run
```
webpack
```
in your terminal, and open index.html in your browser.

The most relevant file to this guide is _routes.js_:
``` html
var routerModule = require('react-router');
var history = require("react-router/lib/HashHistory").history;
var Router = routerModule.Router;
var Route = routerModule.Route;
var App = require('./components/app.js');

<Router history={history}>
  <Route component={App}>
    ...
  </Route>
</Router>
```
To start, we declare the Router component, and pass it the React Router _HashHistory_ module. The history module is what manages the link between the UI and the URL. In your own app, you will probably want to use the _BrowserHistory_ module which is designed for use in modern browsers. It requires configuration in your server though (see: http://rackt.github.io/react-router/tags/v1.0.0-beta3.html#BrowserHistory), so in this simple example, we will use the fallback _HashHistory_.

The next step is to declare the main component of our app. In our case it is the component we have exported from _app.js_:
``` js
var React  = require('react');
var Navbar = require('./nav.js');

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <Navbar />
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
```
Here, when we define the App component, we nest inside it our Navbar component, and {this.props.children}.

{this.props.children}, when using React Router, will refer to whichever component is currently active. That is, which component's path matches the current URL. We'll see exactly what this means by looking further into _routes.js_:
``` html
var Redirect = routerModule.Redirect;

<Route component={App}>
  <Redirect from='/' to='/home' />
  <Route path='home' component={Home} />
  <Route path='breakfast' component={Breakfast}>
    ...
  </Route>
  <Route path='lunch' component={Lunch}>
    ...
  </Route>
  <Route path='dinner' component={Dinner}>
    ...
  </Route>
</Route>
```
So from this, we can see that if the URL ends with "/breakfast", {this.props.children} will be the Breakfast component, if the URL ends with "/lunch", it will be the Lunch component, and so on...

We can also see that we have a Redirect component. This redirects the path to "/home" when the URL is just "/", meaning the Home component is the default.

Another interesting thing to note is that the active component automatically has a className of "active" added to it, so you can easily style an active component differently if you wish:
``` css
.active li{
  color: steelblue;
}
```
