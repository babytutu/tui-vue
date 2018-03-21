# 结构layout

公共化顶部导航，提供自定义头部方案

```html
<m-layout :is-scroll="true">
  <template>
    自定义头部
  </template>
  <template slot="content">
    呵呵呵
  </template>
</m-layout>
```

## Props
| 参数    | 说明      | 类型            | 可选值        | 默认值  |
| ----- | ------- | ------------- | ---------- | ---- |
| is-scroll | 是否局部滚动 | Boolean | -          | false    |

## Slot
| 参数     | 说明    |
| ------- | ------- |
| header  | 顶部导航 |
| content | 页面内容 |