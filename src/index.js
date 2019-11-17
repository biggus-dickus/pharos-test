import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {fetchMenu} from './store/actions/get-data';
import rootReducer from './store/reducers';

import App from './components/app';

import './styles/style.scss';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch(fetchMenu());

ReactDOM.render(
    <Provider {...{store}}>
        <App />
    </Provider>, document.getElementById('root')
);
