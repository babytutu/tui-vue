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
          picUrl: 'http://cms-bucket.nosdn.127.net/4fa465dc5b144e1f8e962cac0059608620170921111259.png',
          id: 11351,
        },
        {
          picUrl: 'http://cms-bucket.nosdn.127.net/f994f0be879d49ecb6cd5df00969b81020170921161034.png',
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