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

