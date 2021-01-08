/* eslint-disable import/prefer-default-export */
// import axios from 'axios';
import firebase from '../../firebase/firebase';

import {
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SET_CONFPASSWORD,
  SET_EMAIL,
  SET_FIRSTNAME,
  SET_LASTNAME,
  SET_PASSWORD,
} from '../selectors';

export const SetEmail = (value: string) => ({
  type: SET_EMAIL,
  payload: value,
});

export const SetPassword = (value: string) => ({
  type: SET_PASSWORD,
  payload: value,
});

export const SetFirstName = (value: string) => ({
  type: SET_FIRSTNAME,
  payload: value,
});

export const SetLastName = (value: string) => ({
  type: SET_LASTNAME,
  payload: value,
});

export const SetConfPassword = (value: string) => ({
  type: SET_CONFPASSWORD,
  payload: value,
});

export const PasswordError = () => ({
  type: LOGIN_FAILED,
  payload: 'Password do not match.',
});

export const PasswordLength = () => ({
  type: LOGIN_FAILED,
  payload: 'Password should 8 digit long.',
});

export const CreateUser = (crediential: any) => async (dispatch: any) => {
  try {
    const result = await firebase.auth()
      .createUserWithEmailAndPassword(crediential.email, crediential.password);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: result.user,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILED,
      payload: 'User already registered.',
    });
  }
};

export const LoginUser = (crediential: any) => async (dispatch: any) => {
  console.log('Result check here', crediential);
  try {
    const result = await firebase.auth()
      .signInWithEmailAndPassword(crediential.email, crediential.password);
    console.log('Result check here', result);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: result.user,
    });
  } catch (error) {
    console.log('Result check here', error);
    dispatch({
      type: LOGIN_FAILED,
      payload: 'Credientials are in correct.',
    });
  }
};
