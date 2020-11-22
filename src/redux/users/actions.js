import * as API from '../../services/API';
import * as types from '../types';

export const getUsers = (per_page) => async dispatch => {
    dispatch({ type: types.GET_USERS_START });
    try {
      const { data, status } = await API.users.list(per_page);
      if (status < 200 && status >= 300) throw new Error('Something went wrong');
      dispatch({ type: types.GET_USERS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: types.GET_USERS_FAILURE });
      if (+error?.response?.status === 401) return;
      console.log(error?.response?.data);
    }
  };

  export const getUserProfile = (user_name) => async dispatch => {
    dispatch({ type: types.GET_USER_PROFILE_START });
    try {
      const { data, status } = await API.users.profile(user_name);
      if (status < 200 && status >= 300) throw new Error('Something went wrong');
      dispatch({ type: types.GET_USER_PROFILE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: types.GET_USER_PROFILE_FAILURE });
      if (+error?.response?.status === 401) return;
      console.log(error?.response?.data);
    }
  };