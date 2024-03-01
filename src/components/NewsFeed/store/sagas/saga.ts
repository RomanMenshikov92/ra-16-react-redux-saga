import { put, spawn, call, takeLatest, delay } from "redux-saga/effects";
import { FETCH_NEWS, fetchNewsSuccess, fetchNewsFailure } from "../actions/actions";
import { AnyAction } from "redux-saga";
import newsApi from "../../api/newsApi";
import { News } from "../../types/types";

function* fetchNewsSaga(action: AnyAction): Generator {
  try {
    const response: unknown = yield call(newsApi, action.payload.lastSeenId);
    const newsData: News[] = response as News[];
    yield put(fetchNewsSuccess(newsData));
  } catch (error) {
    yield put(fetchNewsFailure(error as string));
    yield delay(3000);
    yield call(fetchNewsSaga, action);
  }
}

export function* watchFetchNews(): Generator {
  yield takeLatest(FETCH_NEWS, fetchNewsSaga);
}

export default function* saga(): Generator {
  yield spawn(watchFetchNews);
  console.log("saga run");
}
