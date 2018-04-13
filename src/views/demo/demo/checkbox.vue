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
      checkbox: ['禁用111'],
      options: [{
          key: '禁用选中',
          val: '禁用111',
          disabled: true
        },
        {
          key: '禁用不可选',
          val: '禁用222',
          disabled: true
        },
        {
          key: '可选2',
          val: '可选222',
          disabled: false
        },
        {
          key: '可选3',
          val: '可选333',
          disabled: false
        },
      ]
    }
  },
}
</script>