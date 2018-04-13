<template>
  <div class="demo">
    <tui-slide>
      <div v-for="item in imgs"
           :key="item.id">
        <div class="banner"
             :style="{ 'background-image': `url(${item.picUrl})`}"></div>
      </div>
    </tui-slide>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [{
          picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001YCZlY3aBifi.jpg',
          id: 11351,
        },
        {
          picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000004ckGfg3zaho0.jpg',
          id: 11372,
        },
      ],
    }
  },
}
</script>
<style lang="stylus" scoped>
  .demo
    background #f8f8f8
    width 100%
    height 150px
    overflow hidden
    .banner
      background-size: cover;
      display: block;
      width: 100%;
      height: 150px;
</style>