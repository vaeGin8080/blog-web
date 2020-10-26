import axios from "axios";
// create an axios instance http://localhost:3333
const service = axios.create({
  // baseURL:
  //   process.env.NODE_ENV === "development"
  //     ? "http://47.95.229.159:8088/"
  //     : "https://vaegin.top/blog",
  baseURL: "http://47.95.229.159:8088/",
  // baseURL: process.env.VUE_APP_BASIC_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 20000, // request timeout
});
console.log(process.env.VUE_APP_BASIC_API);
// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent

    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data;

    // if the custom code is not 20000, it is judged as an error.
    return res;
  },
  (error) => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
