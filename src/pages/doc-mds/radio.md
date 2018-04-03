# 单选radio
结合tui-cell

```html
<template>
  <div>
    <tui-radio v-model="radio"
               :alias="alias"
               :options="options"></tui-radio>
    <tui-cell>radio: {{radio}}</tui-cell>
    <tui-radio v-model="radio1"
               :alias="alias"
               :disabled="true"
               :options="options"></tui-radio>
    <tui-cell>radio: {{radio1}}</tui-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: '',
      radio1: 'a',
      options: [{
          key: '选项a',
          val: 'a',
        },
        {
          key: '选项b',
          val: 'b',
        },
      ],
      alias: ['key', 'val']
    }
  },
}
</script>
```

## Props

| 参数        | 说明          | 类型     | 可选值       | 默认值  |
| ---------- | ------------- | ------- | ----------- | ------ |
| v-model    | radio选中的值 | String | -  | - |
| options    | radio可选值 | Array | -  | - |
| alias      | radio值的标签别名 | Array | -  | ['label', 'value'] |