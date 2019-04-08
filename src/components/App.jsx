import React, { Suspense } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import GlobalStyle from 'styles';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/user', { credentials: 'include' })
      .then((res) => res.json())
      .then((res) => { this.setState({ 'user': res }); });
  }

  render() {
    return (
      <main>
        <GlobalStyle />
        <Suspense fallback={<span>loading</span>}>
          <Switch>
            <Route path="/" render={() =>
              <div>
              {this.state.user ? (
                <div>
                  <p>Welkom {this.state.user.displayName}</p>
                  <a href="http://localhost:3001/logout">Logout</a>
                </div>
               ) : (
                  <a href="http://localhost:3001/auth/spotify">Login with Spotify</a>
               )}
              </div>
          } exact />
          </Switch>
        </Suspense>
      </main>
    );
  }
}

export default withRouter(App);
