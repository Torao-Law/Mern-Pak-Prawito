import { combineReducers } from "redux";
import homeReduser from './homeReducer';
import globalReducer from './globalReducer';
import createdBlogPostReducer from './createdBlogPostReducer';

const reducer = combineReducers({homeReduser, globalReducer, createdBlogPostReducer})

export default reducer;