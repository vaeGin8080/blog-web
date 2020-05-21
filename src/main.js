import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Element from "element-ui";
import "./styles/element-variables.scss";

import "./permission";

import "@/styles/index.scss"; // global css

import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";

import skeleton from "vue-skeleton-component";

import * as filters from "./filters"; // global filters
// register global utility filters
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});
// 全局注册组件
import components from "./utils/components";
Object.keys(components).forEach((key) => {
  Vue.component(key, components[key]);
});

import { isMobile } from "./utils/utils";

Vue.use(skeleton);
Vue.use(mavonEditor);
Vue.prototype.$isMB = isMobile;
// Vue.use(Element);
Vue.use(Element, {
  size: "medium", // set element-ui default size
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
