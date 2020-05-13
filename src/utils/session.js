export const setSession = (name, params) => {
  window.localStorage.setItem(name, JSON.stringify(params));
};
export const getSession = (name) => {
  return JSON.parse(window.localStorage.getItem(name));
};
export const removeSession = (name) => {
  window.localStorage.removeItem(name);
};
export const removeAll = () => {
  window.localStorage.clear();
};
