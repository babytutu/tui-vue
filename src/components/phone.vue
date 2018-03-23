<template>
  <div class="phone">
    <iframe class="demo-page"
            :src="`${baseUrl}#/demo/${name}`"
            frameborder="0">
    </iframe>
  </div>
</template>
<script>
import IS_DEBUG from './../../lib/utils/env'
import {
  outputDir
} from './../../app.config'

export default {
  name: 'phone',
  data() {
    return {
      baseUrl: IS_DEBUG ? '/' : `/${outputDir}/`,
      name: 'index',
    }
  },
  watch: {
    $route(newValue) {
      this.name = newValue.name || 'index'
    },
  },
  created() {
    this.name = this.$route.name || 'index'
  },
}
</script>

<style lang="stylus" scoped>
  .phone {
    margin: 10px;
    background-image: url('../assets/phone.png');
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100%;
    padding: 100px 16px;
    box-sizing: border-box;
    width: 360px;
  }

  .demo-page {
    width: 100%;
    height: 580px;
    background-color: #fff;
  }
</style>
