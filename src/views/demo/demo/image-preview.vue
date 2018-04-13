<template>
  <div class="avatars">
    <tui-image-preview :src="url"></tui-image-preview>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: 'https://cn.vuejs.org/images/logo.png',
    }
  },
}
</script>
<style lang="stylus" scoped>
.avatars{
  padding 20px
  width 200px
  height 200px
}
</style>

