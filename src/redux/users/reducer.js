import { combineReducers } from 'redux';
import * as types from '../types';

const list = (state = {}, { type, payload }) => {
    switch (type) {
        case types.GET_USERS_START:
            return {
                ...state,
                loading: true,
            };
        case types.GET_USERS_SUCCESS:
            return {
                ...state,
                data: payload,
                loading: false,
            };
        case types.GET_USERS_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

const profile = (state = {}, { type, payload }) => {
    switch (type) {
        case types.GET_USER_PROFILE_START:
            return {
                ...state,
                loading: true,
            };
        case types.GET_USER_PROFILE_SUCCESS:
            return {
                ...state,
                data: payload,
                loading: false,
            };
        case types.GET_USER_PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default combineReducers({
    list,
    profile,
});
