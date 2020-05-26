import { setSession, getSession, removeSession } from "@/utils/session";
import variables from "@/styles/element-variables.scss";

export default {
  name: "setting",
  namespaced: true,
  state: {
    theme: variables.theme,
    themeIndex: getSession("themeIndex") || "",
    autoHeader: true,
    isSole: false,
  },
  mutations: {
    CHANGE_SETTING: (state, data) => {
      let { key, value } = data;
      if (state.hasOwnProperty(key)) {
        state[key] = value;
        setSession(key, state[key] || "");
      }
    },
    setTheme(state, index) {
      if (index || index == 0) {
        let theme = "theme" + (index + 1);
        state.themeIndex = theme;
      }
      setSession("themeIndex", state.themeIndex);
      window.document.documentElement.setAttribute(
        "data-theme",
        state.themeIndex
      );
    },
    // 是否需要改变header位置
    changeHeader(state, data) {
      state.autoHeader = data;
    },
    // 是否触底
    changeDown(state, data) {
      state.isSole = data;
    },
  },
  actions: {
    changeSetting({ commit }, data) {
      commit("CHANGE_SETTING", data);
    },
  },
};
