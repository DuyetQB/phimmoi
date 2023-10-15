import http from "../services/httpService";

export const getMovieListNowPlaying = async (payload:any) => {
  const result = await http.get("/movie/now_playing", {
    params: {
      api_key: "7c20642cb5c99e5148b8e79cf3f70a4a",
      page: payload.page,
      language: "en-US",
    },
  });
  
  return { data: result.data.results , total_page: result.data.total_pages};
};
export const getMovieListTopRated = async (payload:any) => {
  const result = await http.get("/movie/top_rated", {
    params: {
      api_key: "7c20642cb5c99e5148b8e79cf3f70a4a",
      page: payload.page,
      language: "en-US",
    },
  });
  return { data: result.data.results , total_page: result.data.total_pages};
};
export const onSearchMovie = async (payload: any) => {
  const result = await http.get("/search/movie", {
    params: {
      // api_key: process.env.REACT_APP_TOKEN, Sorry I plan to use .env file but I have less time to config and fix bug with this case
      api_key: "7c20642cb5c99e5148b8e79cf3f70a4a",
      page: 1,
      language: "en-US",
      query: payload,
    },
  });
  return result.data;
};
export const getMovieDetail = async (payload: any) => {
  const result = await http.get(`/movie/${payload}`, {
    params: {
      api_key: "7c20642cb5c99e5148b8e79cf3f70a4a",
    },
  });
  return result.data;
};
