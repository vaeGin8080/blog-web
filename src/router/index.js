import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";
import Index from "@/views/Index";
Vue.use(VueRouter);

const constantRoutes = [
  {
    path: "/",
    name: "Home",
    redirect: "/home",
    component: Layout,
    children: [
      {
        path: "home",
        name: "index",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Home/index.vue"),
      },
    ],
  },
  {
    path: "/index",
    name: "Index",
    component: Index,
  },
  {
    path: "/detail",
    name: "Detail",
    redirect: "/detail",
    component: Layout,
    children: [
      {
        path: "",
        name: "detail",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Detail/index.vue"),
      },
    ],
  },
];

const createRouter = () =>
  new VueRouter({
    mode: "history", // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
