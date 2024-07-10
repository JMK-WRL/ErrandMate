import axios from 'axios';

export const FETCH_ERRANDS_REQUEST = 'FETCH_ERRANDS_REQUEST';
export const FETCH_ERRANDS_SUCCESS = 'FETCH_ERRANDS_SUCCESS';
export const FETCH_ERRANDS_FAILURE = 'FETCH_ERRANDS_FAILURE';

export const fetchErrandsRequest = () => ({
    type: FETCH_ERRANDS_REQUEST
});

export const fetchErrandsSuccess = (errands) => ({
    type: FETCH_ERRANDS_SUCCESS,
    payload: errands
});

export const fetchErrandsFailure = (error) => ({
    type: FETCH_ERRANDS_FAILURE,
    payload: error
});

export const fetchErrands = () => {
    return (dispatch) => {
        dispatch(fetchErrandsRequest());
        axios.get('/api/errands')
            .then(response => {
                const errands = response.data;
                dispatch(fetchErrandsSuccess(errands));
            })
            .catch(error => {
                dispatch(fetchErrandsFailure(error.message));
            });
    }
};
