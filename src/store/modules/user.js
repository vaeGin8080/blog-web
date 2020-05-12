import { setSession, getSession, removeSession } from "@/utils/session";
import { getUserInfo } from "@/api/user";
export default {
  state: {
    userInfo: getSession("userInfo") || {},
    isLogin: getSession("isLogin") || false,
    timeStamp: null,
  },
  mutations: {
    // 获取用户数据
    handleUserInfo(state, data) {
      state.userInfo = data;
      state.isLogin = true;
      console.log(state.userInfo);
      setSession("userInfo", state.userInfo);
      setSession("isLogin", state.isLogin);
    },
    // 退出登录
    removeLogin(state, data) {
      state.userInfo = null;
      state.isLogin = false;
      removeSession("userInfo");
      setSession("isLogin", state.isLogin);
    },
    // 是否需要唤醒登录弹窗
    handleTime(state) {
      state.timeStamp = new Date().getTime();
    },
  },
  actions: {
    getUserInfo({ commit }, data) {
      return new Promise((resolve, reject) => {
        let obj = {};
        if (data) {
          obj = {
            id: data,
          };
        }
        getUserInfo(obj)
          .then((res) => {
            console.log(res);
            if (res.status == 1) {
              commit("handleUserInfo", res.data);
              resolve(res.data);
            }
          })
          .catch((rej) => {
            reject();
          });
      });
    },
  },
};
