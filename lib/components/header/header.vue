<template>
  <div :class="['tui-header tui-border', { 'is-fixed' : fixed }]"
       @touchmove.prevent="() => {}">
    <div class="tui-header-left">
      <slot name="left"></slot>
    </div>
    <div class="tui-header-title text-over">{{title}}</div>
    <div class="tui-header-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tui-header',
  props: {
    title: {
      type: [String, Number],
    },
    // 是否固定在顶部
    fixed: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
