import axios from 'axios';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

const signupRequest = () => ({
    type: SIGNUP_REQUEST
});

const signupSuccess = (user) => ({
    type: SIGNUP_SUCCESS,
    payload: user
});

const signupFailure = (error) => ({
    type: SIGNUP_FAILURE,
    payload: error
});

export const signup = (formData) => {
    return (dispatch) => {
        dispatch(signupRequest());
        axios.post('/api/auth/signup', formData)
            .then(response => {
                dispatch(signupSuccess(response.data));
            })
            .catch(error => {
                dispatch(signupFailure(error.response.data.message));
            });
    };
};
