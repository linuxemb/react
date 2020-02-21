import React from 'react';
import {useSelector, useDispatch} from 'react-redux'

import {increment, decrement} from './action';
function App() {
  const counter =  useSelector (state => state.counter);
  const isLoged = useSelector (state =>state.isLoged);
  const dispatch = useDispatch();

  return (
    <div className="App">
     <h1>counter {counter}</h1>
    <button onClick={()=> dispatch(increment())}>++</button>
    <button onClick= {() => dispatch(decrement())}>--</button>
     {isLoged ?  <h3>Valuable infomantion I should not see if not loged in </h3>: ''}


    </div>
  );
}

export default App;
