import { Reducer, combineReducers } from 'redux';
import { Service } from '../types/types';
import { ActionTypes } from './action';

const servicesReducer = (state: Service[] = [], action: any) => {
  switch (action.type) {
    case ActionTypes.FETCH_SERVICES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const selectedServiceReducer = (state: Service | null = null, action: any) => {
  switch (action.type) {
    case ActionTypes.FETCH_SERVICE_DETAILS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const loadingReducer = (state: boolean = false, action: any) => {
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

const errorReducer = (state: any = null, action: any) => {
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