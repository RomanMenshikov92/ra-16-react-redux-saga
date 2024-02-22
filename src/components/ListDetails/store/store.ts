import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootReducer from "../observables/reducer";
import rootEpic from "../observables/epic";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware();

export const storeListDetails = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)));

epicMiddleware.run(rootEpic);

export default storeListDetails;
