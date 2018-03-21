# 按钮button

统一管理按钮样式，颜色不够的可以通过增加样式适配

```html
<template>
  <div class="btn">
    <m-button>普通按钮</m-button>
    <m-button type="dark">黑色的按钮</m-button>
    <m-button type="red">红色的按钮</m-button>
    <m-button type="link">假装是链接的按钮</m-button>
    <m-button :disabled="disabled">禁用的按钮</m-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        disabled: false,
      }
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