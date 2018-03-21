# Model

基础弹层


```html
<template>
  <div class="btn-demo">
    <m-button class="dd-btn tui-border" @click="show=true">打开弹窗</m-button>
    <m-model v-model="show" :onClose="doClose">
      <m-button class="dd-btn tui-border" @click="show=false">关闭弹窗</m-button>
    </m-model>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    doClose() {
      this.$toast('关闭了')
    },
  }
}
</script>
```
Props

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|------------- |---------------- |---------------- |---------------------- |-------- |
| v-model       | 绑定值   | Boolean  | true、false | - |
| mask    | 是否需要遮罩层   | Boolean  | true、false | true |
| prevent    | 点击外层是否关闭   | Boolean  | true、false | false |
| onClose    | 关闭执行事件   | Function  | - | - |
