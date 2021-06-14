import {makeCreators, makeTypes} from 'src/stores/utils'

const Types = {
    FETCH_USER: null,
    FETCH_USER_LOADING: null,
    FETCH_USER_SUCCESS: (user) => ({payload: {user}}),
    FETCH_USER_FAILURE: (errorMessage) => ({payload: {errorMessage}}),

    USER_REGISTER: (login) => ({payload: {login}}),

    USER_LOGIN: (login) => ({payload: {login}}),
    USER_LOGGING_IN: null,
    USER_LOGIN_SUCCESS: (user) => ({payload: {user}}),
    USER_LOGIN_FAILURE: (errorMessage) => ({payload: {errorMessage}}),
    USER_LOGIN_SHOW_POPUP: null,
    USER_LOGIN_HIDE_POPUP: null,
}

export const UserTypes = makeTypes(Types)

const Creators = makeCreators(Types)
export default Creators