# 复选框checkbox

结合tui-cell

```html
<template>
  <div>
    <tui-checkbox v-model="checkbox"
                  :options="options"></tui-checkbox>
    <tui-cell>checkbox: {{checkbox}}</tui-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkbox: ['禁用111'],
      options: [{
          label: '禁用选中',
          value: '禁用111',
          disabled: true
        },
        {
          label: '禁用不可选',
          value: '禁用222',
          disabled: true
        },
        {
          label: '可选2',
          value: '可选222',
          disabled: false
        },
        {
          label: '可选3',
          value: '可选333',
          disabled: false
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
| v-model    | checkbox选中的值 | Array | -  | - |
| options    | checkbox可选值 | Array | -  | - |