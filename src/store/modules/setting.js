import { setSession, getSession, removeSession } from "@/utils/session";
import { isMobile } from "@/utils/utils";
import variables from "@/styles/element-variables.scss";

export default {
  state: {
    theme: variables.theme,
    themeIndex: getSession("themeIndex") || "",
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
  },
  actions: {
    changeSetting({ commit }, data) {
      commit("CHANGE_SETTING", data);
    },
  },
};
