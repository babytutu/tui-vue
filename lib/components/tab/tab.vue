<template>
  <div class="tui-tab tui-border">
    <div v-for="i in list"
         :key="i[alias[0]]"
         :class="['tui-tab-cell tui-border', { 'tui-tab-cell_active': i[alias[0]] === value}]"
         @click="changeTab(i[alias[0]])">{{i[alias[1]]}}</div>
  </div>
</template>
<script>
export default {
  name: 'tui-tab',
  props: {
    value: {
      type: [String, Number]
    },
    alias: {
      type: Array,
      default: () => [
        'label',
        'value'
      ]
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  methods: {
    changeTab(e) {
      this.$emit('input', e)
    }
  },
}
</script>