/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import configureStore from './store/configureStore';
import {loadBooks} from './actions/bookAction';
import {loadWords} from './actions/languageActions';
import {loadUsers} from './actions/userAction';
import {loadCategories} from './actions/categoryAction';
import routes from './routes';
import './styles/styles.css';
import './styles/style.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

const store = configureStore();
store.dispatch(loadBooks());
store.dispatch(loadWords());
store.dispatch(loadUsers());
store.dispatch(loadCategories());


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
);

