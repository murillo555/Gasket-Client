const { SET_USER, SET_USER_ERROR, SET_USER_SUCCESS, ADD_USER, ADD_USER_ERROR, ADD_USER_SUCCESS, DELETE_USER, DELETE_USER_ERROR, DELETE_USER_SUCCESS, GET_USERS, GET_USERS_ERROR, GET_USERS_SUCCESS, UPDATE_USER, UPDATE_USER_ERROR, UPDATE_USER_SUCCESS, ADD_USER_ATTACHMENT, ADD_USER_ATTACHMENT_SUCCESS, ADD_USER_ATTACHMENT_ERROR, SET_CURRENT_TAB, DELETE_USER_ATTACHMENT, DELETE_USER_ATTACHMENT_SUCCESS, DELETE_USER_ATTACHMENT_ERROR } = require('../types');

const initialState = {
    users: [],
    currentUser: {},
    total: null,
    error: null,
    loading: false,
    loadingSetUser: false,
}


const reducerSwitch = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                loadingSetUser: action.payload
            }
        case SET_USER_SUCCESS:
            return {
                ...state,
                loadingSetUser: false,
                currentUser: action.payload
            }
        case SET_USER_ERROR:
            return {
                ...state,
                loadingSetUser: false,
                error: action.payload
            }
        default:
            return state;
    }
}

module.exports = reducerSwitch;