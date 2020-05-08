import { setSession, getSession } from "@/utils/session";
export default {
  state: {
    uid: 1,
    userInfo: getSession("userInfo") || {},
  },
  mutations: {
    handleUserInfo(state, data) {
      state.userInfo = data;
      setSession("userInfo", state.userInfo);
    },
  },
  actions: {},
};
