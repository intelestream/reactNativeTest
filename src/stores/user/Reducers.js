import { INITIAL_STATE } from './InitialState'
import { createReducer } from '@reduxjs/toolkit'
import { UserTypes } from './Actions'

export const fetchUserLoading = (state) => ({
    ...state,
    userIsLoading: true,
    userErrorMessage: null,
})

export const fetchUserSuccess = (state, { payload : { user } }) => ({
    ...state,
    user: user,
    userIsLoading: false,
    userErrorMessage: null,
})

export const fetchUserFailure = (state, { payload : { errorMessage } }) => ({
    ...state,
    user: {},
    userIsLoading: false,
    userErrorMessage: errorMessage,
})

export const userLoggingIn = (state) => ({
    ...state,
    userLoggingIn: true,
    userLoginError: null
})

export const userLoginSuccess = (state,  { payload : { user } }) => ({
    ...state,
    user: user,
    userLoggingIn: false,
    userLoginError: null
})

export const userLoginError = (state,  { payload : { errorMessage } }) => ({
    ...state,
    user: {},
    userLoggingIn: false,
    userLoginError: errorMessage
})

export const showLoginPopup = (state) => ({
    ...state,
    userLoggingIn: false,
    showError: true,
})

export const hideLoginPopup = (state) => ({
    ...state,
    userLoggingIn: false,
    showError: false,
})

export const reducer = createReducer(INITIAL_STATE, {
    [UserTypes.FETCH_USER_LOADING]: fetchUserLoading,
    [UserTypes.FETCH_USER_SUCCESS]: fetchUserSuccess,
    [UserTypes.FETCH_USER_FAILURE]: fetchUserFailure,
    [UserTypes.USER_LOGGING_IN]: userLoggingIn,
    [UserTypes.USER_LOGIN_SUCCESS]: userLoginSuccess,
    [UserTypes.USER_LOGIN_FAILURE]: userLoginError,
    [UserTypes.USER_LOGIN_SHOW_POPUP]: userLoginSuccess,
    [UserTypes.USER_LOGIN_HIDE_POPUP]: userLoginError,
})