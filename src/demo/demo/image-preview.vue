<template>
  <div class="avatars">
    <tui-image-preview :src="url"></tui-image-preview>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: 'https://avatars2.githubusercontent.com/u/14065833?s=460&v=4',
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

