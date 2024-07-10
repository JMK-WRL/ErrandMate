import { FETCH_ERRANDS_REQUEST, FETCH_ERRANDS_SUCCESS, FETCH_ERRANDS_FAILURE } from '../actions/errandActions';

const initialState = {
    loading: false,
    errands: [],
    error: ''
};

const errandReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ERRANDS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_ERRANDS_SUCCESS:
            return {
                loading: false,
                errands: action.payload,
                error: ''
            };
        case FETCH_ERRANDS_FAILURE:
            return {
                loading: false,
                errands: [],
                error: action.payload
            };
        default:
            return state;
    }
};

export default errandReducer;
