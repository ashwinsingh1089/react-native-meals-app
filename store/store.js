import { createStore, combineReducers } from 'redux';
import mealsReducer from './reducers/mealsReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
	combineReducers({ meals: mealsReducer }),
	composeWithDevTools()
);

export default store;
