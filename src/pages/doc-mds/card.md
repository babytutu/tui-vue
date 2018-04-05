# 区块card

```html
<template>
  <tui-card title="左边内容">
    <template slot="right">
      右边内容
    </template>
    <tui-cell :noborder="true"
              title="左边很多字">
      <template slot="right">
        右边很多字
      </template>
    </tui-cell>
    <p>其他文字内容</p>
  </tui-card>
</template>
```

## Props
| 参数        | 说明    | 类型     | 可选值   | 默认值 |
| ---------- | ------- | ------- | ------- | ---- |
| title      | 标题左侧 | String  | -       | -    |
| showHeader | 显示标题 | Boolean | true/false       | true |

## Slot
| 参数    | 说明     |
| ----- | --------- |
| left  | 左边内容   |
| right | 右边内容   |
| -     | 下面内容   |