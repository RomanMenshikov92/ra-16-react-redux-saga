import { News } from "../../types/types";

export const FETCH_NEWS = "FETCH_NEWS";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE";

export const fetchNews = (lastSeenId?: number) => ({
  type: FETCH_NEWS,
  payload: { lastSeenId },
});

export const fetchNewsSuccess = (news: News[]) => ({
  type: FETCH_NEWS_SUCCESS,
  payload: { news },
});

export const fetchNewsFailure = (error: string | null) => ({
  type: FETCH_NEWS_FAILURE,
  payload: { error },
});
