# radio

tui-cell

```html
<template>
  <div>
    <tui-radio v-model="radio"
               :alias="alias"
               :options="options"></tui-radio>
    <tui-cell>radio: {{radio}}</tui-cell>
    <tui-radio v-model="radio1"
               :alias="alias"
               :disabled="true"
               :options="options"></tui-radio>
    <tui-cell>radio: {{radio1}}</tui-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: '',
      radio1: 'a',
      options: [{
          key: 'Option-a',
          val: 'a',
        },
        {
          key: 'Option-b',
          val: 'b',
        },
      ],
      alias: ['key', 'val']
    }
  },
}
</script>
```

## Props

| Prop  | Desc       | Type     | Values  | Default  |
| ---------- | ------------- | ------- | ----------- | ------ |
| v-model    | value | String | -  | - |
| options    | options | Array | -  | - |
| alias      | options alias | Array | -  | ['label', 'value'] |