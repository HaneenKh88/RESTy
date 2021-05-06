import React from 'react';
import { Route, Switch } from 'react-router-dom';
import home from './home';
import HistoryPage from './HistoryPage';
import Help from './Help';

function Main() {
  return(
      <main>
       <Switch>
          <Route exact path="/" component={home}/>
          <Route path="/history" component={HistoryPage}/>
          <Route path="/help" component={Help}/>
          <Route>
            <div>404</div>
          </Route>
        </Switch>
      </main>
  )
}

export default Main;