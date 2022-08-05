import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";

// 导入所有router
const metaRouters = import.meta.globEager("")

export const routerArray: RouteRecordRaw[] = [];
Object.keys(metaRouters).forEach(item => {
  Object.keys(metaRouters[item]).forEach((key: any) => {
    routerArray.push(...metaRouters[item][key]);
  });
});

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: {name: "login"}
  },
  {
    path: '/login',
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      requireAuth: false,
      title: "登录页",
      key: "login"
    }
  },
  ...routerArray,
  {
    path: "/：pathMatch(.*)",
    redirect: {name: "404"}
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: false,
  scrollBehavior: () => ({left: 0, top: 0})
})

export default router;
