<template>
  <div>
    <tui-checkbox v-model="checkbox"
                  :options="options"
                  :alias="['key', 'val']"></tui-checkbox>
    <tui-cell>checkbox: {{checkbox}}</tui-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkbox: ['disabled1'],
      options: [{
          key: 'checked & disabled',
          val: 'disabled1',
          disabled: true
        },
        {
          key: 'disabled',
          val: 'disabled2',
          disabled: true
        },
        {
          key: 'option2',
          val: 'option2',
          disabled: false
        },
        {
          key: 'option3',
          val: 'option3',
          disabled: false
        },
      ]
    }
  },
}
</script>