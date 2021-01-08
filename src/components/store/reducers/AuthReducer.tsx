/* eslint-disable no-unused-vars */
import React from 'react';
import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SET_CONFPASSWORD, SET_EMAIL, SET_FIRSTNAME, SET_LASTNAME, SET_PASSWORD,
} from '../selectors';

const initialState = {
  email: '',
  password: '',
  firstname: '',
  lastname: '',
  confpassword: '',
  loggedIn: false,
  autherror: '',
};

function AuthReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
        autherror: '',
        loggedIn: false,
      };
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
        autherror: '',
        loggedIn: false,
      };
    case SET_LASTNAME:
      return {
        ...state,
        lastname: action.payload,
        autherror: '',
        loggedIn: false,
      };
    case SET_FIRSTNAME:
      return {
        ...state,
        firstname: action.payload,
        autherror: '',
        loggedIn: false,
      };
    case SET_CONFPASSWORD:
      return {
        ...state,
        confpassword: action.payload,
        autherror: '',
        loggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        autherror: action.payload,
      };
    default: return state;
  }
}

export default AuthReducer;
