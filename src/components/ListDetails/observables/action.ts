import { Service } from "../types/types";

export const ActionTypes = {
  FETCH_SERVICES: 'FETCH_SERVICES',
  FETCH_SERVICES_SUCCESS: 'FETCH_SERVICES_SUCCESS',
  FETCH_SERVICES_FAILURE: 'FETCH_SERVICES_FAILURE',
  FETCH_SERVICE_DETAILS: 'FETCH_SERVICE_DETAILS',
  FETCH_SERVICE_DETAILS_SUCCESS: 'FETCH_SERVICE_DETAILS_SUCCESS',
  FETCH_SERVICE_DETAILS_FAILURE: 'FETCH_SERVICE_DETAILS_FAILURE',
};

export const fetchServices = () => ({
  type: ActionTypes.FETCH_SERVICES,
});

export const fetchServiceDetails = (id: number) => ({
  type: ActionTypes.FETCH_SERVICE_DETAILS,
  payload: id,
});

export const fetchServicesSuccess = (services: Service[]) => ({
  type: ActionTypes.FETCH_SERVICES_SUCCESS,
  payload: services,
});

export const fetchServicesFailure = (error: string) => ({
  type: ActionTypes.FETCH_SERVICES_FAILURE,
  payload: error,
});

export const fetchServiceDetailsSuccess = (service: Service) => ({
  type: ActionTypes.FETCH_SERVICE_DETAILS_SUCCESS,
  payload: service,
});

export const fetchServiceDetailsFailure = (error: string) => ({
  type: ActionTypes.FETCH_SERVICE_DETAILS_FAILURE,
  payload: error,
});