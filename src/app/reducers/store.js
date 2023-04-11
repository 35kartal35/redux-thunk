import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { chatReducer } from './chatReducer';



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
    chatState: chatReducer,
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;
