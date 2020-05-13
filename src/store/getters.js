const getters = {
  userInfo: (state) => state.user.userInfo,
  isLogin: (state) => state.user.isLogin,
  timeStamp: (state) => state.user.timeStamp,
  theme: (state) => state.setting.theme,
  themeIndex: (state) => state.setting.themeIndex,
};
export default getters;
