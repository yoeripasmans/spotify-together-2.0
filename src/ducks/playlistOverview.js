import createAction from 'services/createAction';

const GET_ALLPLAYLISTS = 'playlists/GET_ALLPLAYLISTS';
const GET_ALLPLAYLISTS_SUCCESS = 'playlists/GET_ALLPLAYLISTS_SUCCESS';
const GET_ALLPLAYLISTS_FAILED = 'playlists/GET_PLAYLIST_FAILED';

const initialState = {
  playlists: [],
  error: false,
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case GET_ALLPLAYLISTS:
    return {
      ...state,
      error: false,
      loading: true,
    };
  case GET_ALLPLAYLISTS_SUCCESS:
    return {
      ...state,
      playlists: payload,
      error: false,
      loading: false,
    };
  case GET_ALLPLAYLISTS_FAILED:
    return {
      ...state,
      loading: false,
      error: true,
    };
  default:
    return state;
  }
};

export const getAllPlaylistsSuccess = createAction(GET_ALLPLAYLISTS_SUCCESS);
export const getAllPlaylistsFailed = createAction(GET_ALLPLAYLISTS_FAILED);

export const getAllPlaylists = () => (dispatch, getState, api) => {
  dispatch({ type: GET_ALLPLAYLISTS });
  api.get({ path: 'playlists' })
  .then((response) => {
    dispatch(getAllPlaylistsSuccess(response));
  })
  .catch((error) => {
    dispatch(getAllPlaylistsFailed(error));
  });
};
