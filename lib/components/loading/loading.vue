<template>
  <transition name="fade">
    <div v-if="visible"
         class="tui-mask-bg no-bg"
         @touchmove="(e) => e.preventDefault()">
      <div class="loading-wrapper">
        <div class="spinner">
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
          <div class="spinner-blade"></div>
        </div>
        <span>{{message}}</span>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    message: {
      type: String,
      default: '加载中',
    },
  },
  data() {
    return {
      visible: false,
    }
  },
}
</script>
<style lang="stylus" scoped>
@import './../../assets/style/components/loading.styl'
</style>