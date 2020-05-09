import { setSession, getSession, removeSession } from "@/utils/session";
export default {
  state: {
    userInfo: getSession("userInfo") || {},
  },
  mutations: {
    handleUserInfo(state, data) {
      state.userInfo = data;
      setSession("userInfo", state.userInfo);
    },
    removeLogin(state, data) {
      state.userInfo = null;
      removeSession("userInfo");
    },
  },
  actions: {},
};
