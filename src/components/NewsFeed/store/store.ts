import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose, Store } from "redux";
import createSagaMiddleware, { Middleware } from "redux-saga";
import newsReducer from "./reducers/reducer";
import saga from "./sagas/saga";
import { AnyAction } from "redux-saga";
import { RootState } from "../types/types";

const reducer = combineReducers({ news: newsReducer });
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const middleware: Middleware[] = [sagaMiddleware];
export const storeNewsFeed: Store<RootState, AnyAction> = createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));
sagaMiddleware.run(saga);

export default storeNewsFeed;
