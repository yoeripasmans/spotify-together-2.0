import React, { Suspense } from 'react';
import PT from 'prop-types';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import GlobalStyle from 'styles';

import { getUser } from 'ducks/user';

import Login from 'modules/Login';
import PlaylistOverview from 'modules/PlaylistOverview';
import Playlist from 'modules/Playlist';

class App extends React.Component {

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const { isUserSignedIn } = this.props;

    return (
      <main>
        <GlobalStyle />
        <Suspense fallback={<span>loading</span>}>
          <Switch>
            {isUserSignedIn ? (
              <Redirect from="/login" to="/playlists" exact/>
            ) : (
              <Redirect from="/" to="/login" exact/>
            )}

            <Route path="/playlists" component={PlaylistOverview} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/playlist/:id" component={Playlist} exact />

          </Switch>
        </Suspense>
      </main>
    );
  }
}

App.propTypes = {
  getUser: PT.func,
  isUserSignedIn: PT.bool,
};

export default compose(
  withRouter,
  connect((state) => ({
    isUserSignedIn: state.user.isUserSignedIn,
  }), {
    getUser,
  }),
)(App);
