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
    redirect: "/detail/index",
    component: Layout,
    children: [
      {
        path: "index",
        name: "Detail",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Detail/index.vue"),
      },
    ],
  },
  {
    path: "/user",
    name: "user",
    redirect: "/user/index",
    component: Layout,
    children: [
      {
        path: "index",
        name: "User",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/User/index.vue"),
      },
      {
        path: "setting",
        name: "Setting",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/User/Setting/index.vue"
          ),
      },
    ],
  },
];

const createRouter = () =>
  new VueRouter({
    mode: "hash", // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
