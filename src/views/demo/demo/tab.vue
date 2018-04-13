<template>
  <div>
    <tui-tab v-model="selected"
             :list="list"
             :label="['key', 'value']"></tui-tab>
    <tui-cell :title="`已选择${selected}`"></tui-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: 1,
      list: [{
          key: 1,
          value: 'tab标签1'
        },
        {
          key: 2,
          value: 'tab标签2'
        },
        {
          key: 3,
          value: 'tab标签2'
        },
        {
          key: 4,
          value: 'tab标签2'
        },
      ],
    }
  },
}
</script>