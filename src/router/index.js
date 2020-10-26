import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";
import ImgMap from "@/views/ImgMap";
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
        meta: {
          title: "首页",
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Home/index.vue"),
      },
    ],
  },
  {
    path: "/ImgMap",
    name: "ImgMap",
    component: ImgMap,
  },
  {
    path: "/Topics",
    name: "Topics",
    redirect: "/Topics/index",
    component: Layout,
    children: [
      {
        path: "index",
        name: "index",
        meta: {
          title: "话题",
        },
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Topics/index.vue"),
      },
      {
        path: "detail/:id",
        name: "TopicsDetail",
        meta: {
          title: "话题详情",
        },
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../views/TopicsDetail/index.vue"
          ),
      },
    ],
  },
  {
    path: "/detail",
    redirect: "/detail/index",
    component: Layout,
    children: [
      {
        path: "index/:id",
        name: "Detail",
        meta: {
          title: "博客详情",
        },
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
  {
    path: "/write",
    name: "Write",
    component: () => import("../views/Write/index.vue"),
  },
  {
    path: "/Editor",
    name: "Editor",
    meta: {
      title: "可视化编辑",
    },
    component: () => import("../views/Editor/index.vue"),
  },
  {
    path: "/EditorDetail",
    name: "EditorDetail",
    meta: {
      title: "可视化展示",
    },
    component: () => import("../views/EditorDetail/index.vue"),
  },
  {
    path: "/myScreen",
    name: "myScreen",
    meta: {
      title: "我的项目",
    },
    component: () => import("../views/myScreen/index.vue"),
  },
  {
    path: "/chooseScreen",
    name: "chooseScreen",
    meta: {
      title: "选择项目",
    },
    component: () => import("../views/myScreen/chooseScreen.vue"),
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
