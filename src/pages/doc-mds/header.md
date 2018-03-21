# 头部导航header

```html
<template>
  <m-header title="标题示范">
    <div slot="left">返回</div>
    <div slot="right">主页</div>
  </m-header>
</template>
```


## Props
| 参数    | 说明      | 类型            | 可选值        | 默认值  |
| ----- | ------- | ------------- | ---------- | ---- |
| title | 标题内容    | String,Number | -          | -    |
| fixed | 是否固定在顶部 | Boolean | true/false | true |

## Slot
| 参数    | 说明           |
| ----- | --------------- |
| left  | 左边内容 |
| right | 右边内容 |
