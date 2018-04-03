<template>
  <div class="btn-demo">
    <tui-button type="diy">自定义样式的按钮</tui-button>
    <tui-button @click="changeBtn">普通按钮</tui-button>
    <tui-button type="primary">蓝色的按钮</tui-button>
    <tui-button type="danger">红色的按钮</tui-button>
    <tui-button type="success">绿色的按钮</tui-button>
    <tui-button type="warning">黄色的按钮</tui-button>
    <tui-button type="link">假装是链接的按钮</tui-button>
    <tui-button type="small">小号的按钮</tui-button>
    <tui-button :disabled="disabled">禁用的按钮</tui-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        disabled: false,
      }
    },
    methods: {
      changeBtn() {
        this.disabled = !this.disabled
      },
    },
  }
</script>
<style lang="stylus" scoped>
.diy
  background #000
  border-color #000
  color #fff
</style>
