import { Reducer, combineReducers } from 'redux';
import { Service } from '../types/types';
import { ActionTypes } from './action';

const servicesReducer: Reducer<Service[], { type: string, payload: Service[] }> = (state = [], action)  => {
  switch (action.type) {
    case ActionTypes.FETCH_SERVICES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const selectedServiceReducer: Reducer<Service | null, { type: string, payload: Service }> = (state = null, action)  => {
  switch (action.type) {
    case ActionTypes.FETCH_SERVICE_DETAILS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const loadingReducer: Reducer<boolean, { type: string }> = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_SERVICES:
    case ActionTypes.FETCH_SERVICE_DETAILS:
      return true;
    case ActionTypes.FETCH_SERVICES_SUCCESS:
    case ActionTypes.FETCH_SERVICES_FAILURE:
    case ActionTypes.FETCH_SERVICE_DETAILS_SUCCESS:
    case ActionTypes.FETCH_SERVICE_DETAILS_FAILURE:
      return false;
    default:
      return state;
  }
};

const errorReducer: Reducer<string | null, { type: string, payload: string }> = (state = null, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_SERVICES_FAILURE:
    case ActionTypes.FETCH_SERVICE_DETAILS_FAILURE:
      return action.payload;
    case ActionTypes.FETCH_SERVICES:
    case ActionTypes.FETCH_SERVICE_DETAILS:
    case ActionTypes.FETCH_SERVICES_SUCCESS:
    case ActionTypes.FETCH_SERVICE_DETAILS_SUCCESS:
      return null;
    default:
      return state;
  }
};

const rootReducer: Reducer = combineReducers({
  services: servicesReducer,
  selectedService: selectedServiceReducer,
  loading: loadingReducer,
  error: errorReducer,
});

export default rootReducer;