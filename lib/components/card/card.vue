<template>
  <div class="tui-card tui-border">
    <div class="tui-card-header tui-border"
         v-if="showHeader">
      <div class="tui-card-header-left">
        <slot name="left">{{title}}</slot>
      </div>
      <div class="tui-card-header-right">
        <slot name="right"></slot>
      </div>
    </div>
    <div class="tui-card-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tui-card',
  props: {
    title: {
      type: [String, Number],
    },
    showHeader: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
