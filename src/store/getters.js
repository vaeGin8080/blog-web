const getters = {
  userInfo: (state) => state.user.userInfo,
  isLogin: (state) => state.user.isLogin,
  timeStamp: (state) => state.user.timeStamp,
  theme: (state) => state.setting.theme,
  themeIndex: (state) => state.setting.themeIndex,
  autoHeader: (state) => state.setting.autoHeader,
  isSole: (state) => state.setting.isSole,
  rootBG: (state) => state.setting.rootBG,
  isCurrent: (state) => (id) => id == state.user.userInfo.user_id,
  chartConfig: (state) => state.charts.chartConfig,
};
export default getters;
