<template>
  <tui-cell :title="title">
    <select :value="value"
            :disabled="disabled"
            slot="right"
            @change="change">
      <option v-for="o in options"
              :value="o[alias[1]]"
              :key="o[alias[1]]">
        {{o[alias[0]]}}
      </option>
    </select>
  </tui-cell>
</template>
<script>
export default {
  name: 'tui-select',
  props: {
    title: {
      type: String,
      default: ''
    },
    options: Array,
    value: String,
    alias: {
      type: Array,
      default: () => [
        'label',
        'value'
      ]
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    change(e) {
      this.$emit('input', e.target.value)
    }
  },
}
</script>