# 开关switch

```html
<template>
  <div>
    <tui-cell title="可修改的开关">
      <tui-switch slot="right"
                  v-model="val1"></tui-switch>
    </tui-cell>
    <tui-cell title="开关状态">
      <template slot="right">{{val1}}</template>
    </tui-cell>
    <tui-cell title="启用状态下禁用的开关">
      <tui-switch slot="right"
                  v-model="val2"
                  :disabled="isDisabled"></tui-switch>
    </tui-cell>
    <tui-cell title="关闭状态下禁用的开关">
      <tui-switch slot="right"
                  v-model="val3"
                  :disabled="isDisabled"></tui-switch>
    </tui-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      val1: true,
      val2: true,
      val3: false,
      isDisabled: true
    }
  },
}
</script>
```

## Props

| 参数        | 说明          | 类型     | 可选值       | 默认值  |
| ---------- | ------------- | ------- | ----------- | ------ |
| v-model    | 开关状态 | Boolean | true/false  |- |
| disabled   | 是否禁用 | Boolean | true/false  |false |