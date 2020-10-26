import router from "./router";
import store from "./store";
import { Message } from "element-ui";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import getPageTitle from "@/utils/get-page-title";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["/home", "/detail", "/ImgMap", "/Editor"]; // no redirect whitelist
const whiteName = ["Detail"];
router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start();

  // set page title
  document.title = getPageTitle(to.meta.title);

  // determine whether the user has logged in
  const hasToken = store.getters.isLogin;
  console.log(hasToken);
  if (hasToken) {
    next();
  } else {
    console.log(to);

    if (
      whiteList.indexOf(to.path) !== -1 ||
      whiteName.indexOf(to.name) !== -1
    ) {
      // in the free login whitelist, go directly
      next();
    } else {
      console.log("one else");
      // other pages that do not have permission to access are redirected to the login page.
      Message.error("请登录");
      next(`/?redirect=${to.path}`);
      NProgress.done();
    }
  }
});

router.afterEach(() => {
  // finish progress bar
  NProgress.done();
});
