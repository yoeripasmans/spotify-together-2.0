import createAction from 'services/createAction';

const GET_PLAYLISTS = 'playlists/GET_PLAYLISTS';
const GET_PLAYLISTS_SUCCESS = 'playlists/GET_PLAYLISTS_SUCCESS';
const GET_PLAYLISTS_FAILED = 'playlists/GET__PLAYLIST_FAILED';

const initialState = {
  playlistsData: [],
  isUserSignedIn: false,
  error: false,
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case GET_PLAYLISTS:
    return {
      ...state,
      error: false,
      loading: true,
    };
  case GET_PLAYLISTS_SUCCESS:
    return {
      ...state,
      playlistsData: payload,
      error: false,
      loading: false,
    };
  case GET_PLAYLISTS_FAILED:
    return {
      ...state,
      isUserSignedIn: false,
      loading: false,
      error: true,
    };
  default:
    return state;
  }
};

export const getUserSuccess = createAction(GET_PLAYLISTS_SUCCESS);
export const getUserFailed = createAction(GET_PLAYLISTS_FAILED);

export const getPlaylists = () => (dispatch, getState, api) => {
  dispatch({ type: GET_PLAYLISTS });
  api.get({ path: 'playlists' })
  .then((response) => {
    dispatch(getUserSuccess(response));
  })
  .catch((error) => {
    dispatch(getUserFailed(error));
  });
};
