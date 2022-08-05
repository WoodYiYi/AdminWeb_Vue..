import {defineStore, createPinia} from 'pinia'
import {GlobalState} from './interface'

export const GlobalStore = defineStore({
  id: 'GlobalState',

  state: (): GlobalState => ({
    token: "",
    userInfo: ""
  }),
  getters: {},
  actions: {}
});


// piniaPersist(持久化)
// const pinia = createPinia();
// pinia.use()

// export default pinia;
