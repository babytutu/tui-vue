<template>
  <tui-tab v-model="selected"
             :list="list"
             :label="['id', 'name']"></tui-tab>
</template>
<script>
export default {
  data() {
    return {
      selected: 1,
      list: [
        {
          id: 1,
          name: 1
        },
        {
          id: 2,
          name: 2
        },
      ]
    }
  },
}
</script>
