import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "./store/actions/actions";
import NewsCard from "./components/NewsCard";
import { News, RootState } from "./types/types";
import { TbPoint } from "react-icons/tb";
import "./newsfeed.css";
import { Dispatch } from "redux";

export const NewsFeed: React.FC = () => {
  const dispatch: Dispatch = useDispatch();
  const news = useSelector((state: RootState) => state.news.news);
  const loading = useSelector((state: RootState) => state.news.loading);
  const error = useSelector((state: RootState) => state.news.error);
  const isEmpty = useSelector((state: RootState) => state.news.isEmpty);

  useEffect(() => {
    if (!news.length && !loading && !error) {
      dispatch(fetchNews());
    }
  }, [news, loading, error, dispatch]);

  const handleClickPrevPost = (): void => {
    const lastSeenId = news[news.length - 1].id;
    dispatch(fetchNews(lastSeenId));
  };

  return (
    <div className="newsfeed">
      {!news.length && loading && <div className="newsfeed__loading">Идет загрузка...</div>}
      {!news.length && error && <div className="newsfeed__error">Идет загрузка...</div>}
      {news.length > 0 && (
        <ul className="newsfeed__list">
          {news.map((newsItem: News, index: number) => (
            <NewsCard key={index} newsItem={newsItem} />
          ))}
        </ul>
      )}
      {!isEmpty && news.length > 0 && (
        <button
          className={`newsfeed__btn btn-reset ${loading ? "newsfeed__btn-loading" : ""} ${error ? "newsfeed__btn-error" : ""}`}
          onClick={handleClickPrevPost}
        >
          {loading || error ? (
            <span className="newsfeed__btn-point">
              <TbPoint />
              <TbPoint />
              <TbPoint />
            </span>
          ) : (
            "К предыдущим записям"
          )}
        </button>
      )}
    </div>
  );
};

export default NewsFeed;
