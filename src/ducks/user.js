import createAction from 'services/createAction';

const GET_USER = 'user/GET';
const GET_USER_SUCCESS = 'user/GET_SUCCESS';
const GET_USER_FAILED = 'user/GET_FAILED';

const initialState = {
  userData: {},
  isUserSignedIn: false,
  error: false,
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case GET_USER:
    return {
      ...state,
      error: false,
      loading: true,
    };
  case GET_USER_SUCCESS:
    return {
      ...state,
      userData: payload,
      isUserSignedIn: true,
      error: false,
      loading: false,
    };
  case GET_USER_FAILED:
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

export const getUserSuccess = createAction(GET_USER_SUCCESS);
export const getUserFailed = createAction(GET_USER_FAILED);

export const getUser = () => (dispatch, getState, api) => {
  dispatch({ type: GET_USER });
  api.get({ path: 'user', withAuth: false })
  .then((response) => {
    dispatch(getUserSuccess(response));
  })
  .catch((error) => {
    dispatch(getUserFailed(error));
  });
};
