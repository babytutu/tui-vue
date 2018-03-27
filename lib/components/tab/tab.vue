<template>
  <div class="tui-tab tui-border">
    <div v-for="i in list"
         :key="i[label[0]]"
         :class="['tui-tab-cell tui-border', { 'tui-tab-cell_active': i[label[0]] === value}]"
         @click="changeTab(i[label[0]])">{{i[label[1]]}}</div>
  </div>
</template>
<script>
export default {
  name: 'tui-tab',
  props: {
    value: {
      type: [String, Number]
    },
    label: {
      type: Array,
      default: () => [
        'key',
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