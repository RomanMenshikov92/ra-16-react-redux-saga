const apiUrl: string = process.env.REACT_APP_API_URL_SEARCH || "";

export const searchSkills = async (search: string): Promise<string> => {
  const params = new URLSearchParams({ q: search });
  const response = await fetch(`${apiUrl}?${params}`);
  console.log(response);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};

export default searchSkills;
