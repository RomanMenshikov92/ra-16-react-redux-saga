import { ofType, combineEpics, Epic } from "redux-observable";
import { of } from "rxjs";
import { switchMap, map, catchError, tap } from "rxjs/operators";
import { ajax } from "rxjs/ajax";
import { ActionTypes, fetchServicesSuccess, fetchServiceDetailsSuccess, fetchServicesFailure, fetchServiceDetailsFailure } from "./action";
import { Service } from "../types/types";

const apiUrl: string = process.env.REACT_APP_API_URL_SERVICES || "";

export const fetchServicesEpic: Epic = (action$, state$) =>
  action$.pipe(
    tap(() => console.log("Start")),
    ofType(ActionTypes.FETCH_SERVICES),
    switchMap(() =>
      ajax.getJSON<Service[]>(`${apiUrl}`).pipe(
        // timeout(3000),
        map((data) => fetchServicesSuccess(data)),
        tap((data) => console.log("Data:", data)),
        catchError((error) => of(fetchServicesFailure(error)))
      )
    ),
    tap(() => console.log("Finish"))
  );

export const fetchServiceDetailsEpic: Epic = (action$, state$) =>
  action$.pipe(
    tap(() => console.log("Start details")),
    ofType(ActionTypes.FETCH_SERVICE_DETAILS),
    switchMap((action: any) =>
      ajax.getJSON<Service>(`${apiUrl}/${action.payload}`).pipe(
        map((data) => fetchServiceDetailsSuccess(data)),
        tap((data) => console.log("Data details:", data)),
        catchError((error) => of(fetchServiceDetailsFailure(error)))
      )
    )
  );

export const rootEpic: Epic = combineEpics(fetchServicesEpic, fetchServiceDetailsEpic);

export default rootEpic;
