export interface RootState {
  news: NewsState;
}

export interface NewsState {
  news: News[];
  loading: boolean;
  error: string | null;
  isEmpty: boolean;
}

export interface News {
  id: number;
  date: number;
  text: string;
  comments: { count: number };
  likes: { count: number };
  reposts: { count: number };
  views: { count: number };
}

export interface PropsNewsItem {
  newsItem: News;
}
