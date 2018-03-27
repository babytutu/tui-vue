<template>
  <div>
    <tui-radio v-model="radio"
               :options="options"></tui-radio>
    <tui-cell>radio: {{radio}}</tui-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: '',
      options: [{
          label: '不可选1',
          value: '不可选111',
          disabled: true
        },
        {
          label: '可选2',
          value: '可选222',
          disabled: false
        },
        {
          label: '可选3',
          value: '可选333',
          disabled: false
        },
      ]
    }
  },
}
</script>
