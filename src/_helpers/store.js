import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from "redux-thunk";
import { createLogger } from 'redux-logger';
import rootReducer from "../_reducers";

const loggerMiddleware = createLogger();

// Create the centralized redux state store for the entire react application.
export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware))
);
