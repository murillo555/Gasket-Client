const { SET_USER, SET_USER_SUCCESS, ADD_USER, ADD_USER_SUCCESS, ADD_USER_ERROR, GET_USERS, GET_USERS_ERROR, GET_USERS_SUCCESS, UPDATE_USER, UPDATE_USER_ERROR, UPDATE_USER_SUCCESS, DELETE_USER, DELETE_USER_ERROR, DELETE_USER_SUCCESS, SET_USER_ERROR, ADD_USER_ATTACHMENT, ADD_USER_ATTACHMENT_SUCCESS, ADD_USER_ATTACHMENT_ERROR, DELETE_USER_ATTACHMENT, DELETE_USER_ATTACHMENT_SUCCESS, DELETE_USER_ATTACHMENT_ERROR, SET_CURRENT_TAB } = require('../types');
const { getUserListApi, createUserApi, deleteUserApi, updateUserApi, getUserApi, addUserAttachmentApi, deleteUserAttachmentApi } =  require('../../api/users') ;

function setCurrentUserAction(id = '') {
    return async(dispatch) => {
        dispatch(setUser())
        try {
            if (id) {
                const response = await getUserApi(id);
                dispatch(setUserSuccess(response));
            } else {
                dispatch(setUserSuccess({}))
            }
        } catch (error) {
            console.log(error);
            dispatch(setUserError(true))
        }
    }
}

//Create User
const setUser = () => ({
    type: SET_USER,
    payload: true
})
const setUserSuccess = response => ({
    type: SET_USER_SUCCESS,
    payload: response
})

const setUserError = () => ({
    type: SET_USER,
    payload: false

})

module.exports  = {
    setCurrentUserAction
}
//Create User
