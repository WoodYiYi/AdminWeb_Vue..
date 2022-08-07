import {defineStore} from 'pinia'
import {AuthState} from '../interface'
import piniaPersistConfig from "@/config/piniaPersist"

export const AuthStore = defineStore({
  id: 'AuthState',
  state: (): AuthState => ({
    authButtons: {}, // 用户按钮权限列表
    authRouter: [] // 路由权限列表
  }),
  getters: {
    // 处理权限按钮数据，用于方便控制按钮
    authButtonObj: state => {
      return state.authButtons;
    },
    // 后台返回的菜单数据，用于方便控制路由跳转时的权限（这里已经处理成一维数组）
    dynamicRouter: state => {
      return state.authRouter;
    }
  },
  actions: {},
  persist: piniaPersistConfig("AuthState")
});