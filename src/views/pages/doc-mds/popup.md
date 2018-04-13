# 特殊弹窗Popup

弹窗

```html
<template>
  <div class="btn-demo">
    <tui-button @click="showLoad">这是alert</tui-button>
    <tui-button @click="showPop">这是confirm</tui-button>
  </div>
</template>
<script>
export default {
  methods: {
    showLoad() {
      this.$popup({
        message: '这是alert',
        type: 'alert',
        onConfirm: () => {
          this.$toast('点击了确定')
        }
      })
    },
    showPop() {
      this.$popup({
        message: '这是confirm',
        type: 'confirm',
        onConfirm: () => {
          this.$toast('点击了确定')
        },
        onCancel: () => {
          this.$toast('点击了取消')
        }
      })
    },
  },
}
</script>
```
## Props

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| message         | 内容(支持html片段)   | String  | - | - |
| type         | 类型   | String  | alert/confirm  |  alert|
| onConfirm        | 确定事件   | Function  | - |  -|
| onCancel         | 取消事件   | Function  | - | - |
| cancel-text    | 取消按钮文字   | String  | - | 取消 |
| confirm-text    | 确定按钮文字   | String  | - | 确定 |
