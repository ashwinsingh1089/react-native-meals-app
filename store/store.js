import { createStore, combineReducers } from 'redux';
import mealsReducer from './reducers/mealsReducer';

export default store = createStore(combineReducers({ meals: mealsReducer }));
