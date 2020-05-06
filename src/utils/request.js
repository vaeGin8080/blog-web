import axios from "axios";
import { MessageBox, Message } from "element-ui";
import store from "@/store";
// create an axios instance
const service = axios.create({
  // baseURL: "https://web-api.juejin.im/query",
  baseURL: "http://localhost:3333",
  // baseURL: process.env.VUE_APP_BASIC_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
});
console.log(process.env.VUE_APP_BASIC_API);
// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    let uid = store.getters.uid;
    console.log(uid);
    config.headers = {
      "X-Agent": "Juejin/Web",
      uid: uid,
    };
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
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
