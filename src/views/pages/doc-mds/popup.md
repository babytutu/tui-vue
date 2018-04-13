# Popup

## Use `this.$popup`

```html
<template>
  <div class="btn-demo">
    <tui-button @click="showLoad">alert</tui-button>
    <tui-button @click="showPop">confirm</tui-button>
  </div>
</template>
<script>
export default {
  methods: {
    showLoad() {
      this.$popup({
        message: 'alert',
        type: 'alert',
        prevent: false,
        onConfirm: () => {
          this.$toast('ok')
        },
      })
    },
    showPop() {
      this.$popup({
        message: 'confirm',
        type: 'confirm',
        onConfirm: () => {
          this.$toast('ok')
        },
        onCancel: () => {
          this.$toast('cancel')
        },
      })
    },
  },
}
</script>
```

## Use `$popup`

```html
<template>
  <div class="btn-demo">
    <tui-button @click="showLoad">alert</tui-button>
    <tui-button @click="showPop">confirm</tui-button>
  </div>
</template>
<script>
import { $popup } from 'tui-vue'

export default {
  methods: {
    showLoad() {
      $popup({
        message: 'alert',
        type: 'alert',
        prevent: false,
        onConfirm: () => {
          this.$toast('ok')
        },
      })
    },
    showPop() {
      $popup({
        message: 'confirm',
        type: 'confirm',
        onConfirm: () => {
          this.$toast('ok')
        },
        onCancel: () => {
          this.$toast('cancel')
        },
      })
    },
  },
}
</script>
```

## Props

| Prop  | Desc       | Type     | Values  | Default  |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| message         | message(html)   | String  | - | - |
| type         | type   | String  | alert,confirm  |  alert|
| prevent      | prevent outside   | Boolean  | true,false | false |
| onConfirm        | click confirm   | Function  | - |  -|
| onCancel         | click cancel   | Function  | - | - |
| cancel-text    | cancel-text   | String  | - | cancel |
| confirm-text    | confirm-text   | String  | - | ok |
