<template>
  <div class="tui-card">
    <div class="tui-card-header tui-border"
         v-if="showHeader">
      <div class="tui-card-header-left">
        <slot name="left"></slot>
      </div>
      <div class="tui-card-header-right">
        <slot name="right"></slot>
      </div>
    </div>
    <div class="tui-card-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'm-card',
  props: {
    // 是否需要标题
    showHeader: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
