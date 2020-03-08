import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import  {Provider} from "react-redux";
import  store from "./redux/store";



import  TodoApp from "./TodoApp";

const rootElement = document.getElementById("root");

 ReactDOM.render(
     <Provider store={store}>
    
         
     </Provider>,
     rootElement
 );
 

//ReactDOM.render(<App />, document.getElementById('root'));


