var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute	= Router.IndexRoute;

var Main = require('../components/Main');
var Login = require('../components/Login');
var Quiz = require('../components/Quiz');



module.exports = (

    <Route path='/' component={Main}>

        <Route path='Login' component={Login} />
        <Route path='Quiz' component={Quiz} />



        {/* Route will default to IndexRoute */}
        <IndexRoute component={Login} />

    </Route>


);