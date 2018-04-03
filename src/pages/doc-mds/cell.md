# 单行cell

```html
<template>
  <div>
    <tui-cell title="左边很多字左边很多字左边很多字左边很多字">
      <template slot="right">
        右边
      </template>
    </tui-cell>
    <tui-cell :noborder="true"
              title="左边">
      <template slot="right">
        右边
      </template>
    </tui-cell>
  </div>
</template>
```

## Props
| 参数    | 说明      | 类型            | 可选值        | 默认值  |
| ----- | ------- | ------------- | ---------- | ---- |
| title | 标题内容    | String | -          | -    |
| noborder | 没有底线    | Boolean | -          | false    |

## Slot
| 参数    | 说明     |
| ----- | --------- |
| -  | 左边内容   |
| right | 右边内容   |
