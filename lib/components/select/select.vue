<template>
  <tui-cell :title="title">
    <select v-model="key"
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
  data() {
    return {
      key: this.value
    }
  },
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
      this.$emit('input', this.key)
    }
  },
}
</script>