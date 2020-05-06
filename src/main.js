import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Element from "element-ui";
import "./styles/element-variables.scss";

import "@/styles/index.scss"; // global css

import mavonEditor from "mavon-editor";
import skeleton from "vue-skeleton-component";
import "mavon-editor/dist/css/index.css";

import * as filters from "./filters"; // global filters
// register global utility filters
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

Vue.use(skeleton);
Vue.use(mavonEditor);
Vue.use(Element);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
