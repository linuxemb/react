
import counterReducer from './counter';
import loggedReducer from './isLoged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
		counter: counterReducer,
		isLgged: loggedReducer

	});

export default allReducers;