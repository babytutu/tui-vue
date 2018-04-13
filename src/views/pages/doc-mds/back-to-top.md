# 返回顶部back-to-top

```html
<template>
  <div>
    <tui-cell v-for="i in list"
              :key="i"
              :title="i">
    </tui-cell>
    <tui-back-to-top el="tui-warper-content"></tui-back-to-top>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: 111,
    }
  },
}
</script>
```

## Props

| 参数名  | 说明       | 类型     | 可选值  | 默认值  |
| ---- | -------- | ------ | ---- | ---- |
| el   | 外部dom的id | string | —    | —    |

## Slot

| 参数 | 说明       |
| --- | ---------- |
| -   | 返回顶部的dom结构 |
