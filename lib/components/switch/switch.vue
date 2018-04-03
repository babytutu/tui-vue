<template>
  <div class="tui-switch"
       :class="{'tui-switch-active': value, 'tui-switch-disabled': disabled}"
       @click="change">
    <div class="tui-switch-dot"></div>
  </div>
</template>
<script>
export default {
  name: 'tui-switch',
  props: {
    value: {
      type: Boolean
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    change() {
      if (!this.disabled) {
        this.$emit('input', !this.value)
      }
    }
  },
}
</script>