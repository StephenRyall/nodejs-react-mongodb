import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import AppRouter from './AppRouter';
import './styles/main.scss';

const history = createBrowserHistory();
const initialState = window.initialReduxState;
const store = configureStore(history, initialState);
const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store} history={history}>
        <BrowserRouter >
            <AppRouter />
        </BrowserRouter>
    </Provider>,
    rootElement);