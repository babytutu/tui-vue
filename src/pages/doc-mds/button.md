# 按钮button

统一管理按钮样式，颜色不够的可以通过增加样式适配

```html
<template>
  <div class="btn-demo">
    <tui-button @click="changeBtn">普通按钮</tui-button>
    <tui-button type="primary">蓝色的按钮</tui-button>
    <tui-button type="danger">红色的按钮</tui-button>
    <tui-button type="success">绿色的按钮</tui-button>
    <tui-button type="warning">黄色的按钮</tui-button>
    <tui-button type="link">假装是链接的按钮</tui-button>
    <tui-button :disabled="disabled">禁用的按钮</tui-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        disabled: false,
      }
    },
    methods: {
      changeBtn() {
        this.disabled = !this.disabled
      },
    },
  }
</script>
```
## Props
| 参数          | 说明   | 类型     | 可选值  | 默认值  |
| ----------- | ---- | ------ | ---- | ---- |
| type     | 按钮类型    | String | dark,red,link | -    |
| disabled | 禁用状态  | Boolean | -    | false    |

## Slot
| 参数 | 说明       |
| --- | ---------- |
| -   | 按钮上的文案 |

## Methods
| 方法名 | 说明    |
| ----- | ------- |
| click | 点击按钮 |