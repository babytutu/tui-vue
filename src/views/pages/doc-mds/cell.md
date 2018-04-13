# cell

```html
<template>
  <div>
    <tui-cell title="title">
      <template slot="right">
        right slot
      </template>
    </tui-cell>
    <tui-cell :noborder="true">
      <template>
        default slot
      </template>
      <template slot="right">
        right slot
      </template>
    </tui-cell>
  </div>
</template>
```

## Props
| Prop  | Desc       | Type     | Values  | Default  |
| ----- | ------- | ------------- | ---------- | ---- |
| title | title    | String | -          | -    |
| noborder | no border    | Boolean | -          | false    |

## Slots
| Name | Desc       |
| ----- | --------- |
| -  | left   |
| right | right   |
