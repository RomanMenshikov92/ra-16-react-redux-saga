import { AnyAction } from "redux-saga";
import { FETCH_NEWS, FETCH_NEWS_FAILURE, FETCH_NEWS_SUCCESS } from "../actions/actions";
import { News, NewsState } from "../../types/types";

const initialState: NewsState = {
  news: [],
  loading: false,
  error: null,
  isEmpty: false,
};

export const newsReducer = (state = initialState, action: AnyAction): NewsState => {
  switch (action.type) {
    case FETCH_NEWS:
      return { ...state, loading: true };
    case FETCH_NEWS_SUCCESS:
      const newNews: News[] = action.payload.news;
      const isEmpty: boolean = newNews.length === 0 || newNews.length < 5;
      return { news: [...state.news, ...newNews], loading: false, error: null, isEmpty };
    case FETCH_NEWS_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
};

export default newsReducer;
