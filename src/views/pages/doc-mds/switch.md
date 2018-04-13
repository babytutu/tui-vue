# switch

```html
<template>
  <div>
    <tui-cell title="Switch">
      <tui-switch slot="right"
                  v-model="val1"></tui-switch>
    </tui-cell>
    <tui-cell title="Status">
      <template slot="right">{{val1}}</template>
    </tui-cell>
    <tui-cell title="Open & Disabled">
      <tui-switch slot="right"
                  v-model="val2"
                  :disabled="isDisabled"></tui-switch>
    </tui-cell>
    <tui-cell title="Close & Disabled">
      <tui-switch slot="right"
                  v-model="val3"
                  :disabled="isDisabled"></tui-switch>
    </tui-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      val1: true,
      val2: true,
      val3: false,
      isDisabled: true
    }
  },
}
</script>
```

## Props

| Prop  | Desc       | Type     | Values  | Default  |
| ---------- | ------------- | ------- | ----------- | ------ |
| v-model    | value | Boolean | true,false  |- |
| disabled   | disabled | Boolean | true,false  |false |