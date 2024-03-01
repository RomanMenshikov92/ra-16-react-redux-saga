import { News } from "../types/types";

const apiUrl: string = process.env.REACT_APP_API_URL_NEWS || "";

export const newsApi = async (lastSeenId?: number): Promise<News[]> => {
  const response = await fetch(`${apiUrl}${lastSeenId ? `?lastSeenId=${lastSeenId}` : ""}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  } else {
    console.log(`${response.statusText}`)
  }
  return await response.json();
};

export default newsApi;
