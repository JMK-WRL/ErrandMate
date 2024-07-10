// src/redux/actions/userActions.js
import axios from 'axios';
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILURE } from './actionTypes';

// Example placeholder for the API call
const api = {
    updateUserProfile: async (formData) => {
        // Simulate an API call
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data: formData });
            }, 1000);
        });
    }
};

// Update Profile Action
export const updateProfile = (formData) => async (dispatch) => {
    try {
        dispatch({ type: 'UPDATE_PROFILE_REQUEST' });
        const response = await api.updateUserProfile(formData); //  to be replaced with your actual API call
        dispatch({ type: 'UPDATE_PROFILE_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'UPDATE_PROFILE_FAILURE', payload: error.message });
    }
};

// Signup Action
export const signupUser = (userData) => async (dispatch) => {
    dispatch({ type: USER_SIGNUP_REQUEST });
    try {
        const { data } = await axios.post('/api/users/signup', userData);
        dispatch({ type: USER_SIGNUP_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: USER_SIGNUP_FAILURE, payload: error.response.data.message });
    }
};

// Login Action
export const loginUser = (userData) => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST });
    try {
        const { data } = await axios.post('/api/users/login', userData);
        dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: USER_LOGIN_FAILURE, payload: error.response.data.message });
    }
};
