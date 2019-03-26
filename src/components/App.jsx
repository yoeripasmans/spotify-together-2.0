import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import GlobalStyle from 'styles';

const Login = lazy(() => import('modules/Login'));

const App = () => (
  <main>
    <GlobalStyle />
    <Suspense fallback={<span>loading</span>}>
      <Switch>
        <Route path="/" render={() => <Login />} exact />
      </Switch>
    </Suspense>
  </main>
);

export default withRouter(App);
