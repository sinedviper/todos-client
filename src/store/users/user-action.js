export const ADD_USERS = "@@users/ADD_USERS";
export const SET_LOADING = "@@users/SET_LOADING";
export const SET_ERROR = "@@users/SET_ERROR";

const addUsers = (users) => ({
  type: ADD_USERS,
  payload: users,
});

const setLoading = () => ({
  type: SET_LOADING,
});

const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

export const loadUsers = () => (dispatch, _, client) => {
  dispatch(setLoading());

  client
    .get("https://jsonplaceholder.typicode.com/user")
    .then((data) => {
      dispatch(addUsers(data));
    })
    .catch((err) => dispatch(setError(err)));
};
