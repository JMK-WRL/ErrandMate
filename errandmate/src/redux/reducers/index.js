import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import errandReducer from './errandReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    errands: errandReducer
});

export default rootReducer;
