import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';

const feedback={
    feeling:'',
    understanding:'',
    support:'',
    comments:'',
}

// Reducer that holds the values of 4 feedback question

const FeedbackReducer= (state= feedback,action)=>{
    switch (action.type) {
        case 'SET_FEEDBACK_FEELING':
            return {...state,feeling: action.payload}
            console.log('state', state);
        case 'SET_FEEDBACK_UNDERSTANDING':
            return { ...state, understanding: action.payload }
        case 'SET_FEEDBACK_SUPPORT':
            return { ...state, support: action.payload }
        case 'SET_FEEDBACK_COMMENTS':
            return { ...state, comments: action.payload }
        default:
            break;
    }
    return state;
    
    
}

// creating redux store
const storeInstance= createStore(
    combineReducers({
        FeedbackReducer
      
        
    }),
    applyMiddleware(logger)
)
ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root'));

