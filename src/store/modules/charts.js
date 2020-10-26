import { setSession, getSession, removeSession } from "@/utils/session";
import { getUserInfo } from "@/api/user";
export default {
  name: "charts",
  namespaced: true,
  state: {
    chartConfig: getSession("chartConfig") || {
      bg: "rgba(0,0,0,1)",
      bgImg: "",
      screenWidth: 1920,
      screenHeight: 1080,
    },
  },
  mutations: {
    handleChart(state, data) {
      state.chartConfig[data.type] = data.value;
      setSession("chartConfig", state.chartConfig);
    },
  },
  actions: {
    getUserInfo({ commit }, data) {
      return new Promise((resolve, reject) => {
        let obj = {};
      });
    },
  },
};
