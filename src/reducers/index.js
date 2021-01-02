import { combineReducers} from 'redux';
// import errorReducer from './errorReducer';
import authReducer from './authReducer';

import statusReducer from './statusReducer';


export default combineReducers({
    // error: errorReducer,
    auth: authReducer,
    status: statusReducer
});