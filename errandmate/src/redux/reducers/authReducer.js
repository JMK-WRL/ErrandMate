import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions/authActions';

const initialState = {
    loading: false,
    user: null,
    error: ''
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: ''
            };
        case SIGNUP_FAILURE:
            return {
                ...state,
                loading: false,
                user: null,
                error: action.payload
            };
        default:
            return state;
    }
};

export default authReducer;
