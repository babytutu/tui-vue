<template>
  <div class="tui-switch" :class="{'tui-switch-active': value}" @click="change">
    <div class="tui-switch-dot"></div>
  </div>
</template>
<script>
export default {
  name: 'tui-switch',
  props: {
    title: {
      type: [String, Number],
    },
    value: {
      type: Boolean
    }
  },
  methods: {
    change() {
      this.$emit('input', !this.value)
    }
  },
}
</script>