<template>
  <div>
    <tui-tab v-model="selected"
             :list="list"
             :alias="['key', 'value']"></tui-tab>
    <tui-cell :title="`Checked: ${selected}`"></tui-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: 1,
      list: [{
          key: 1,
          value: 'tab1'
        },
        {
          key: 2,
          value: 'tab2'
        },
        {
          key: 3,
          value: 'tab2'
        },
        {
          key: 4,
          value: 'tab2'
        },
      ],
    }
  },
}
</script>