<template>
  <div :class="['tui-cell', 'tc-flex', 'align-center', 'tui-border', { noborder }]">
    <div :class="['tui-cell-title', titleClass]">
      <slot>{{title}}</slot>
    </div>
    <div class="tui-cell-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'm-cell',
  props: {
    title: {
      type: [String, Number],
    },
    // 左侧标题颜色样式
    titleClass: {
      type: String,
    },
    // 不需要底部边框
    noborder: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
