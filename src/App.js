import React from 'react'
import ManageStudent from './pages/ManageStudent'
import { createBrowserHistory } from 'history';
import { Switch, Router, Route } from 'react-router-dom';
import EditStudent from './pages/EditStudent';
import { _student } from './utils/Settings/configPath';



export const history = createBrowserHistory();
export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={ManageStudent} />
        <Route path={`${_student}/:id`} exact component={EditStudent} />
      </Switch>
    </Router>
  )
}
