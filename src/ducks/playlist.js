import createAction from 'services/createAction';

const GET_PLAYLIST = 'playlist/GET_PLAYLIST';
const GET_PLAYLIST_SUCCESS = 'playlist/GET_PLAYLIST_SUCCESS';
const GET_PLAYLIST_FAILED = 'playlist/GET_PLAYLIST_FAILED';
const RESET_PLAYLIST = 'playlist/RESET_PLAYLIST';
const UPDATE_PLAYLIST = 'playlist/UPDATE_PLAYLIST';

const initialState = {
  playlistData: {},
  error: false,
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case GET_PLAYLIST:
    return {
      ...state,
      error: false,
      loading: true,
    };
  case GET_PLAYLIST_SUCCESS:
    return {
      ...state,
      playlistData: payload,
      error: false,
      loading: false,
    };
  case GET_PLAYLIST_FAILED:
    return {
      ...state,
      loading: false,
      error: true,
    };
  case UPDATE_PLAYLIST:
    return {
      ...state,
      playlistData: payload,
    };
  case RESET_PLAYLIST:
    return initialState;
  default:
    return state;
  }
};

export const resetPlaylistData = createAction(RESET_PLAYLIST);

export const getPlaylistSuccess = createAction(GET_PLAYLIST_SUCCESS);
export const getPlaylistFailed = createAction(GET_PLAYLIST_FAILED);

export const getPlaylist = (id) => (dispatch, getState, api) =>  {
  dispatch({ type: GET_PLAYLIST });
  api.get({ path: 'playlist/' + id })
  .then((response) => {
    dispatch(getPlaylistSuccess(response));
  })
  .catch((error) => {
    dispatch(getPlaylistFailed(error));
  });
};

export const updatePlaylist = createAction(UPDATE_PLAYLIST);
