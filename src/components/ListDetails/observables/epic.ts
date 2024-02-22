import { ofType, combineEpics, Epic } from "redux-observable";
import { of, switchMap, map, catchError, tap, timeout } from "rxjs";
import { ajax } from "rxjs/ajax";
import { ActionTypes, fetchServicesSuccess, fetchServiceDetailsSuccess, fetchServicesFailure, fetchServiceDetailsFailure } from "./action";

export const fetchServicesEpic: Epic = (action$, state$) =>
  action$.pipe(
    tap(() => console.log("Start")),
    ofType(ActionTypes.FETCH_SERVICES),
    tap(() => console.log("Starting to fetch services")),
    switchMap(() =>
      ajax.getJSON("http://localhost:7080/api/services").pipe(
        timeout(3000),
        tap((data) => console.log("Received data:", data)),
        map((data) => fetchServicesSuccess(data)),
        catchError((error) => of(fetchServicesFailure(error)))
      )
    ),
    tap(() => console.log("Finished fetching services"))
  );

// export const fetchServiceDetailsEpic: Epic = (action$, state$) =>
//   action$.pipe(
//     ofType(ActionTypes.FETCH_SERVICE_DETAILS),
//     switchMap((action: any) =>
//       ajax.getJSON(`http://localhost:7080/api/services/${action.payload}`).pipe(
//         map((data) => fetchServiceDetailsSuccess(data)),
//         catchError((error) => of(fetchServiceDetailsFailure(error)))
//       )
//     )
//   );

export const rootEpic: Epic = combineEpics(fetchServicesEpic);

export default rootEpic;
