# 开关switch

```html
<template>
  <div>
    <tui-cell title="开关">
      <tui-switch slot="right"
                  v-model="active"></tui-switch>
    </tui-cell>
    <tui-cell title="状态">
      <template slot="right">{{active}}</template>
    </tui-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: true
    }
  },
}
</script>
```

## Props

| 参数        | 说明          | 类型     | 可选值       | 默认值  |
| ---------- | ------------- | ------- | ----------- | ------ |
| v-model    | 开关状态 | Boolean | true/false  |- |