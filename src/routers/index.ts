import {GlobalStore} from "@/store/index";
import router from "@/routers/router";
import { HOME_URL } from "@/config/config";
import { AuthStore } from "@/store/modules/auth";

router.beforeEach((to, from, next) => {

  // * 判断当前如有是否需要访问权限
  if (!to.matched.some(record => record.meta.requiresAuth)) return next();

  // * 判断是否有token
  const globalStore = GlobalStore();
  if (!globalStore.token) {
    next({
      path: './login'
    })
    return;
  }

  const authStore = AuthStore();

  const dynamicRouter = authStore.dynamicRouter;

  const staticRouter = [HOME_URL, "/403"];
  const routerList = dynamicRouter.concat(staticRouter);

  // * 如果访问的地址没有路由表中重定向到403页面
  if (routerList.indexOf(to.path) !== -1) return next();
  next({
    path: '/403'
  });
});

router.afterEach(() => {

});

export default router
