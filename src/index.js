import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';



//ACTION INCREASE
const increment = () => {
	return {
		type:'INCREMENT'

	};

};

const decrement = () => {
	return {
		type:'DECREMENT'
	};
};


//REDUCER

const counter = (state=0, action)=> {

	switch(action.type) {
		case 'INCREMENT':
		return state +1;
		case  'DECREMENT':
		return state -1;
		default:
		return state;
	}
};


//STORE 
let store = createStore(counter)

// display 
store.subscribe(()=> console.log(store.getState()));



//DISPATCH

store.dispatch(increment())


store.dispatch(increment())

store.dispatch(increment())
store.dispatch(decrement())


// function reducer(state, action) {
// 	console.log(action)
// 	if (action.type === 'changeState')
// 	{
// 		return action.payload.newState;
// 	}

// 	return 'State1';
// }

// const store = createStore(reducer);

// console.log(store.getState())

// const action = {
// 	type: `changeState`,
// 	payload: {
// 		newState: 'New state'
// 	}
// };
// store.dispatch(action);
ReactDOM.render(<App />, document.getElementById('root'));


/*function myapp() {

	return {
		<ul>
		<li>1</li>
		<li>2</li>
		</ul>,
		document.getElementById("root")

	}

}
ReactDOM.render( document.getElementById("root")

) */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.

// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
