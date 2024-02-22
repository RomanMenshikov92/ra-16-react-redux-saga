import { AnyAction } from "redux-saga";
import { CHANGE_SEARCH_FIELD, SEARCH_SKILLS_REQUEST, SEARCH_SKILLS_FAILURE, SEARCH_SKILLS_SUCCESS } from "./actionTypes";

export const searchSkillsRequest = (search: string): AnyAction => ({
  type: SEARCH_SKILLS_REQUEST,
  payload: { search },
});

export const searchSkillsFailure = (error: string): AnyAction => ({
  type: SEARCH_SKILLS_FAILURE,
  payload: { error },
});

export const searchSkillsSuccess = (items: any): AnyAction => ({
  type: SEARCH_SKILLS_SUCCESS,
  payload: { items },
});

export const changeSearchField = (search: string): AnyAction => ({
  type: CHANGE_SEARCH_FIELD,
  payload: { search },
});