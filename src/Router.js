import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history } from './controllers/store'

import { routes } from './constants'

import Login from './views/login'
import Home from './views/home'
import Post from './views/post'
import { NavBar } from './containers'

function App() {
  return (
      <ConnectedRouter history={history}>
        <Router history={history}>
          <NavBar history={history}/>
          <div id='app'>
          <Switch>
            <Route exact path={routes.APP.LANDING} component={Home} />
            <Route exact path={routes.LOGIN} component={Login} />
            <Route exact path={routes.POST} component={Post} />
          </Switch>
          </div>
        </Router>
      </ConnectedRouter>
  );
}

export default App
