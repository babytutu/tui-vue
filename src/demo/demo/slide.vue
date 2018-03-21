<template>
  <div class="demo">
    <m-slide>
      <div v-for="item in imgs" :key="item.id">
        <a :href="item.linkUrl">
          <img :src="item.picUrl">
        </a>
      </div>
    </m-slide>
  </div>
</template>
<script type="text/babel">
  export default {
    data() {
      return {
        imgs: [
          {
            linkUrl: 'http://y.qq.com/w/album.html?albummid=0044K2vN1sT5mE',
            picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001YCZlY3aBifi.jpg',
            id: 11351,
          },
          {
            linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2197820&g_f=shoujijiaodian',
            picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000004ckGfg3zaho0.jpg',
            id: 11372,
          },
        ],
      }
    },
  }
</script>
<style lang="stylus" scoped>
  .demo {
    background #f8f8f8
  }
</style>
