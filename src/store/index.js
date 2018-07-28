import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import itemData from "./itemData";

const reducers = combineReducers({
    itemData
});

const store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk),
);

export default store;