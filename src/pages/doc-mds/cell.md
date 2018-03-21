# 单行cell

```html
<template>
  <m-cell title="左边很多字">
    <template slot="right">
      右边很多字
    </template>
  </m-cell>
  <m-cell :noborder="true" title="左边很多字">
    <template slot="right">
      右边很多字
    </template>
  </m-cell>
</template>
```

## Props
| 参数    | 说明      | 类型            | 可选值        | 默认值  |
| ----- | ------- | ------------- | ---------- | ---- |
| title | 标题内容    | String,Number | -          | -    |
| titleClass | 标题样式名    | String | gray          | -    |
| noborder | 没有底线    | Boolean | -          | false    |

## Slot
| 参数    | 说明     |
| ----- | --------- |
| -  | 左边内容   |
| right | 右边内容   |
