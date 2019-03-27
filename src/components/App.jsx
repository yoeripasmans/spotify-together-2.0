import React, { lazy, Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import GlobalStyle from 'styles';

const Login = lazy(() => import('modules/Login'));

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Not signed in',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/user')
      .then((res) => res.text())
      .then((res) => this.setState({ message: res }));
  }

  render() {
    return (
      <main>
        <GlobalStyle />
        <Suspense fallback={<span>loading</span>}>
          <Switch>
            <Route path="/" render={() =>
              <div>
              <p>{this.state.message}</p>
              <Login />
              </div>
          } exact />
          </Switch>
        </Suspense>
      </main>
    );
  }
}

export default withRouter(App);
