import { userConstants } from "../_constants";
import { history } from "../_helpers/history";
import { alertActions } from "./alert.actions";
import { userService } from '../_services';


export const userActions = {
  login,
  logout,
  register,
  getAll,
  delete: _delete
};

function login(username, password, from) {
  return dispatch => {
    // dispatch LOGIN_REQUEST
    dispatch(request({ username }));

    // call async task
    userService.login(username, password)
      .then(

        // dispatch LOGIN_SUCCESS
        user => {
          dispatch(success({ user }));
          history.push(from);
          window.location.reload(true);
        },

        // dispatch LOGIN_FAILURE
        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()))
        }
      );
  };

  function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
  function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT }
}

function register(user) {
  return dispatch => {
    dispatch(request({ user }));

    userService.register(user)
      .then(
        user => {
          dispatch(success());
          history.push('/login');
          dispatch(alertActions.success('Registration Successful!'));
          window.location.reload(true);
        },

        error => {
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()))
        }
      );
  };

  function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
  function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
  function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
  return dispatch => {
    dispatch(request());

    userService.getAll()
      .then(
        users => dispatch(success(users)),
        error => dispatch(failure(error.toString()))
      )
  };

  function request() { return { type: userConstants.GET_ALL_REQUEST } }
  function success(users) { return { type: userConstants.GET_ALL_SUCCESS, users } }
  function failure(error) { return { type: userConstants.GET_ALL_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return dispatch => {
    dispatch(request(id));

    userService.delete(id)
      .then(
        user => dispatch(success(id)),
        error => dispatch(failure(id, error.toString()))
      );
  };

  function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
  function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
  function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }

}