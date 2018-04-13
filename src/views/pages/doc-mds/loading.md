# loading

## Use `this.$loading`
```html
<template>
  <div class="btn-demo">
    <tui-button @click="showLoad">Show Loading</tui-button>
  </div>
</template>
<script>
export default {
  methods: {
    showLoad() {
      this.$loading('Loading')
      setTimeout(() => {
        this.$loading.hide()
      }, 2000)
    },
  },
}
</script>
```

## Use `$loading`

```html
<template>
  <div class="btn-demo">
    <tui-button @click="showLoad">Show Loading</tui-button>
  </div>
</template>
<script>
import { $loading } from 'tui-vue'

export default {
  methods: {
    showLoad() {
      $loading('Loading')
      setTimeout(() => {
        $loading.hide()
      }, 2000)
    },
  },
}
</script>
```