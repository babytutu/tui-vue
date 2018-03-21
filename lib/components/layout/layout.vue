<template>
  <div class="tui-warper">
    <slot></slot>
    <div :class="['tui-warper-content', { 'is-scroll': isScroll }]"
         id="tui-warper-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'm-layout',
  props: {
    // 是否滚动
    isScroll: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
