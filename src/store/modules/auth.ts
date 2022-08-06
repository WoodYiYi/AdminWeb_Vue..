import {defineStore} from 'pinia'
import {AuthState} from '../interface'
import piniaPersistConfig from "@/config/piniaPersist"

export const AuthStore = defineStore({
  id: 'AuthState',
  state: (): AuthState => ({
    authButtons: {}, // 用户按钮权限列表
    authRouter: [] // 路由权限列表
  }),
  getters: {},
  actions: {},
  persist: piniaPersistConfig("AuthState")
});