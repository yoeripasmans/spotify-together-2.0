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

import MainHeader from 'common/MainHeader';
import PrivateRoute from 'common/PrivateRoute';

class App extends React.Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const { isUserSignedIn, userData } = this.props;

    return (
      <main>
        <GlobalStyle />
        <Suspense fallback={<span>loading</span>}>
          {isUserSignedIn && <MainHeader userData={userData} />}
          <Switch>
            <PrivateRoute
              path="/playlists"
              component={PlaylistOverview}
              isUserSignedIn={isUserSignedIn}
              exact />
            <PrivateRoute
              path="/playlist/:id"
              component={Playlist}
              isUserSignedIn={isUserSignedIn}
              exact />
            <Route path="/login" component={Login} exact />
            {isUserSignedIn && <Redirect to="/playlists" />}
          </Switch>
        </Suspense>
      </main>
    );
  }
}

App.propTypes = {
  getUser: PT.func,
  userData: PT.object,
  isUserSignedIn: PT.bool,
};

export default compose(
  withRouter,
  connect((state) => ({
    isUserSignedIn: state.user.isUserSignedIn,
    isUserLoading: state.user.loading,
    userData: state.user.userData,
  }), {
    getUser,
  }),
)(App);
