<template>
  <button :class="['tui-button tui-border', type, { disabled }]"
          :disabled="disabled"
          @click="click">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'm-button',
  props: {
    type: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    /**
     * 触发点击
     */
    click() {
      this.$emit('click')
    },
  },
}
</script>
