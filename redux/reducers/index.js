const { combineReducers } = require('redux') ;
const usersReducer = require('./usersReducer');

const reducerCombined = combineReducers({
    users: usersReducer,
})

module.exports = reducerCombined;