## tab切换

```html
<template>
  <tui-tab v-model="selected"
             :list="list"
             :label="['id', 'name']"></tui-tab>
</template>
<script>
export default {
  data() {
    return {
      selected: 1,
      list: [
        {
          id: 1,
          name: 1
        },
        {
          id: 2,
          name: 2
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