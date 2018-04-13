# 标签tab

```html
<template>
  <div>
    <tui-tab v-model="selected"
              :list="list"
              :label="['key', 'value']"></tui-tab>
    <tui-cell :title="`已选择${selected}`"></tui-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: 1,
      list: [
        {
          key: 1,
          value: 'tab标签1'
        },
        {
          key: 2,
          value: 'tab标签2'
        },
        {
          key: 3,
          value: 'tab标签2'
        },
        {
          key: 4,
          value: 'tab标签2'
        },
      ]
    }
  },
}
</script>

```

## Props

| 参数        | 说明          | 类型     | 可选值       | 默认值  |
| ---------- | ------------- | ------- | ----------- | ------ |
| v-model    | 已选中的tab | String,Number | -  | -  |
| list       | 选项数组     | Array | -  | [] |
| label      | list对应的key和value  | Array | []  | ['id', 'name']  |