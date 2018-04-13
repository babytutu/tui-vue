<template>
  <div class="btn-demo">
    <tui-button class="dd-btn tui-border"
                @click="show=true">打开弹窗</tui-button>
    <tui-model v-model="show"
               :onClose="doClose">
      <tui-button class="dd-btn tui-border"
                  @click="show=false">关闭弹窗</tui-button>
    </tui-model>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    doClose() {
      this.$toast('关闭了')
    },
  },
}
</script>