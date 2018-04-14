<template>
  <div :class="['tui-cell', 'tui-border', { noborder }]">
    <div class="tui-cell-title">
      <slot>{{title}}</slot>
    </div>
    <div class="tui-cell-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tui-cell',
  props: {
    title: {
      type: [String, Number],
    },
    noborder: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
