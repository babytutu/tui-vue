# Model


```html
<template>
  <div class="btn-demo">
    <tui-button class="dd-btn tui-border"
                @click="show=true">Open Model</tui-button>
    <tui-model v-model="show"
               :onClose="doClose">
      <tui-button class="dd-btn tui-border"
                  @click="show=false">Close Model</tui-button>
    </tui-model>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    doClose() {
      this.$toast('Closed')
    },
  },
}
</script>
```
## Props

| Prop  | Desc       | Type     | Values  | Default  |
|------------- |---------------- |---------------- |---------------------- |-------- |
| v-model       | value   | Boolean  | true,false | - |
| mask    | need mask   | Boolean  | true,false | true |
| prevent    | prevent outside   | Boolean  | true,false | false |
| onClose    | click close   | Function  | - | - |
