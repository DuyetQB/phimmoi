import axios from "axios";
import qs from "qs";

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
  paramsSerializer: function (params) {
    return qs.stringify(params, {
      encode: true,
    });
  },
});

http.interceptors.request.use(
  function (config) {
    // Add request headers if needed
    // config.headers.common["Authorization"] = `Bearer ${process.env.REACT_APP_TOKEN}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    // Introduce a delay before resolving the promise
    const delayTime = 1000; // Adjust the delay time (in milliseconds) as needed

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response);
      }, delayTime);
    });
  },
  (error) => {
    console.log("error:", error);

    if (error?.response === 401) {
      return;
    }

    if (error.response === 404) {
      return;
    }

    if (!!error.response && !!error.response.data.message) {
      alert(error.response?.data.message)
      // Handle error with a message
    
    } else if (!!error.response && !!error.response?.data.message) {
      // Handle error with a different message
      alert(error.response?.data.message)
    } else if (!error.response) {
      // Handle unknown error
      alert(error.response?.data.message)
    }

    return Promise.reject(error);
  }
);

export default http;
