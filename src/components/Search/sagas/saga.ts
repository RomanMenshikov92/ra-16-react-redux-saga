import { put, spawn, retry, debounce, takeLatest } from "redux-saga/effects";
import { searchSkillsRequest, searchSkillsSuccess, searchSkillsFailure } from "../actions/actionCreator";
import { CHANGE_SEARCH_FIELD, SEARCH_SKILLS_REQUEST } from "../actions/actionTypes";
import { searchSkills } from "../api/searchSkills";
import { AnyAction } from "redux-saga";

function filterChangeSearchAction({ type, payload }: AnyAction): boolean {
  return type === CHANGE_SEARCH_FIELD && payload.search.trim() !== "";
}
function* handleChangeSearchSaga(action: AnyAction): Generator {
  yield put(searchSkillsRequest(action.payload.search));
}

function* handleSearchSkillsSaga(action: AnyAction): Generator {
  try {
    const retryCount = 3;
    const retryDelay = 1 * 1000;
    const data = yield retry(retryCount, retryDelay, searchSkills, action.payload.search);
    // const data = yield call(searchSkills, action.payload.search);
    yield put(searchSkillsSuccess(data));
  } catch (e) {
    yield put(searchSkillsFailure((e as Error).message));
  }
}
function* watchChangeSearchSaga() {
  yield debounce(300, filterChangeSearchAction, handleChangeSearchSaga);
}
function* watchChangeSkillsSaga() {
  yield takeLatest(SEARCH_SKILLS_REQUEST, handleSearchSkillsSaga);
}
export default function* saga() {
  yield spawn(watchChangeSearchSaga);
  yield spawn(watchChangeSkillsSaga);
  console.log("saga run");
}
