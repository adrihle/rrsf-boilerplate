import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history } from './controllers/store'

import { routes } from './constants'

import Login from './views/login'
import ToDo from './views/todo'

function App() {
  return (
    <ConnectedRouter history={history}>
      <Router history={history}>
        <Switch>
          <Route exact path={routes.APP.LANDING} component={Login} />
          <Route exact path={routes.APP.TODO} component={ToDo}/>
        </Switch>
      </Router>
    </ConnectedRouter>
  );
}

export default App
