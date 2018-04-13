# button

```html
<template>
  <div class="btn-demo">
    <tui-button type="diy">diy</tui-button>
    <tui-button>common</tui-button>
    <tui-button type="primary">primary</tui-button>
    <tui-button type="danger">danger</tui-button>
    <tui-button type="success">success</tui-button>
    <tui-button type="warning">warning</tui-button>
    <tui-button type="link">link</tui-button>
    <tui-button type="small">small</tui-button>
    <tui-button :disabled="true">disabled</tui-button>
  </div>
</template>
<style lang="stylus" scoped>
.diy
  background #000
  border-color #000
  color #fff
</style>
```
## Props
| Prop  | Desc       | Type     | Values  | Default  |
| ----------- | ---- | ------ | ---- | ---- |
| type     | styles    | String | primary,danger,success,warning,link,small | -    |
| disabled | disabled  | Boolean | -    | false    |

## Slots
| Name | Desc       |
| --- | ---------- |
| -   | text |

## Methods
| Name | Desc       |
| ----- | ------- |
| click | click |