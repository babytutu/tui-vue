# Toast

## Use `this.$toast`

```html
<template>
  <div class="btn-demo">
    <tui-button @click="showLoad('top')">Show Msg Top</tui-button>
    <tui-button @click="showLoad('middle')">Show Msg Middle</tui-button>
    <tui-button @click="showLoad('bottom')">Show Msg Bottom</tui-button>
  </div>
</template>
<script>
export default {
  methods: {
    showLoad(place) {
      this.$toast({ message: `Msg ${place}`, place })
    },
  },
}
</script>

```

## Use `$toast`
```html
<template>
  <div class="btn-demo">
    <tui-button @click="showLoad('top')">Show Msg Top</tui-button>
    <tui-button @click="showLoad('middle')">Show Msg Middle</tui-button>
    <tui-button @click="showLoad('bottom')">Show Msg Bottom</tui-button>
  </div>
</template>
<script>
import { $toast } from 'tui-vue'

export default {
  methods: {
    showLoad(place) {
      $toast({ message: `Msg ${place}`, place })
    },
  },
}
</script>

```

## Props

| Prop  | Desc       | Type     | Values  | Default  |
|------------- |---------------- |---------------- |---------------------- |-------- |
| message      | message   | String  | - | - |
| className    | class name   | String  | - | - |
| place        | position   | String  | top,middle,bottom  | middle |
| duration     | duration(ms)   | Number  | - | 3000 |
