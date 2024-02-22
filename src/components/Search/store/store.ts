import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import skillsReducer from "../reducers/skills";
import saga from "../sagas/saga";
import { AnyAction } from "redux-saga";
import { RootState } from "../types/types";

const reducer = combineReducers({ skills: skillsReducer });
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export const store: Store<RootState, AnyAction> = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(saga);

export default store;
