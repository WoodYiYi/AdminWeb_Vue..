# 构建pinia步骤：

## 一、创建

### 1.引入pinia

``` ts
import {defineStore, createPinia} from 'pinia'
```

### 2.定义一个pinia

``` ts
export const xxx = defineStore({
  id: "xxx"
  state: (): xxx => ({})
  token: "",
})
  getters: {},
  actions: {},
```

## 二、定义数据类型

```` ts
interface index.ts
export interface xxx {
  xxx: type;
  xxx: type;
  ...
}
````

## bugError

### Bug1：实现pinia持久化保存时，pinia-plugin-persistedstate插件版本更新出现报错

````
原因：如果 npm 版本大于 6 则需要 添加 --legacy-peer-deps
解决：npm install pinia-plugin-persistedstate@1.6.1 --legacy-peer-deps
````