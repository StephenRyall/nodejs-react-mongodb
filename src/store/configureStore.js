import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import DashboardReducer from './../reducers/dashboard';

export default function configureStore(history, initialState) {

    const middleware = [
        thunk,
        routerMiddleware(history)
    ];

    // In development, use the browser's Redux dev tools extension if installed
    const enhancers = [];
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
        enhancers.push(window.devToolsExtension());
    }

    const appReducer = combineReducers({
        routing: routerReducer,
        dashboard: DashboardReducer
    });

    const rootReducer = (state, action) => {
        if (action.type === 'LOGOUT') {
            state = undefined
        }
        return appReducer(state, action)
    }

    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );
}
