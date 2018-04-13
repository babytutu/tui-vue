# card

```html
<template>
  <tui-card title="title">
    <template slot="right">
      right slot
    </template>
    <tui-cell :noborder="true"
              title="title">
      <template slot="right">
        right slot
      </template>
    </tui-cell>
    <p>slot</p>
  </tui-card>
</template>
```

## Props
| Prop  | Desc       | Type     | Values  | Default  |
| ---------- | ------- | ------- | ------- | ---- |
| title      | left | String  | -       | -    |
| showHeader | show header | Boolean | true,false       | true |

## Slot
| Name  | Desc     |
| ----- | -------- |
| left  | left     |
| right | right    |
| -     | content  |