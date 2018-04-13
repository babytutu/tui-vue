# 下拉菜单select

结合tui-cell使用

```html
<template>
  <div>
    <tui-select :alias="['key', 'val']"
                title="下拉菜单"
                :options="options"
                v-model="select"></tui-select>
    <tui-cell>已选中{{select}}</tui-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [{
          key: '选项1',
          val: 'a'
        },
        {
          key: '选项2',
          val: 'b'
        }
      ],
      select: 'b',
    }
  },
}
</script>
```

## Props

| 参数        | 说明          | 类型     | 可选值       | 默认值  |
| ---------- | ------------- | ------- | ----------- | ------ |
| title      | tui-cell标题 | String | -  | - |
| v-model    | select选中的值 | String | -  | - |
| options    | options可选值 | Array | -  | - |
| alias      | options值的标签别名 | Array | -  | ['label', 'value'] |
| disabled   | 是否禁用状态 | Boolean | true/false | false