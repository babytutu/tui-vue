# layout

```html
<template>
  <tui-layout :is-scroll="true">
    <template>
      default slot
    </template>
    <template slot="content">
      content slot
    </template>
  </tui-layout>
</template>
```

## Props
| Prop  | Desc       | Type     | Values  | Default  |
| ----- | ------- | ------------- | ---------- | ---- |
| is-scroll | need scroll | Boolean | -          | false    |

## Slots
| Name | Desc       |
| ------- | ------- |
| header  | header |
| content | content |