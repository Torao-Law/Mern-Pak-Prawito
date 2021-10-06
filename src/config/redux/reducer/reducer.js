import { combineReducers } from "redux";
import homeReduser from './homeReducer';
import globalReducer from './globalReducer';

const reducer = combineReducers({homeReduser, globalReducer})

export default reducer;