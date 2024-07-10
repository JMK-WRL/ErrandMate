const initialState = {
    loading: false,
    user: {},
    error: ''
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_PROFILE_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'UPDATE_PROFILE_SUCCESS':
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: ''
            };
        case 'UPDATE_PROFILE_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;
