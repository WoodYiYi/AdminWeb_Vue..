import router from "@/routers/router";
import {GlobalStore} from "@/store";

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

  // const authStore = AuthStore();
})
