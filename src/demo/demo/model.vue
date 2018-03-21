<template>
  <div class="btn-demo">
    <m-button class="dd-btn tui-border" @click="show=true">打开弹窗</m-button>
    <m-model v-model="show" :onClose="doClose">
      <m-button class="dd-btn tui-border" @click="show=false">关闭弹窗</m-button>
    </m-model>
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
