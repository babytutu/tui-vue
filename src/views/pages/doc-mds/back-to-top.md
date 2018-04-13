# back-to-top

```html
<template>
  <div>
    <tui-cell v-for="i in list"
              :key="i"
              :title="i">
    </tui-cell>
    <tui-back-to-top el="tui-warper-content"></tui-back-to-top>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: 111,
    }
  },
}
</script>
```

## Props

| Prop  | Desc       | Type     | Values  | Default  |
| ---- | -------- | ------ | ---- | ---- |
| el   | dom id | string | —    | —    |

## Slots

| Name | Desc       |
| --- | ---------- |
| -   | dom |
