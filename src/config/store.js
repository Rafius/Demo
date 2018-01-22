import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
// import rootReducer from '../reducers';

const Store = createStore(
    // combineReducers({
    //     ...rootReducer
    // }),
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
);

export default Store;
