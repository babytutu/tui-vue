<template>
  <div class="iphone-warpper">
    <div class="iphone">
      <div class="outline">
        <iframe class="demo-page"
                :src="`${baseUrl}#/demo/${name}`"
                frameborder="0">
        </iframe>
      </div>
      <div class="body">
        <div class="sensor hole"></div>
        <div class="camera hole"></div>
        <div class="speaker hole"></div>
      </div>
      <div class="home"></div>
      <div class="nub sleep"></div>
      <div class="nub switch"></div>
      <div class="nub up"></div>
      <div class="nub down"></div>
    </div>
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
<style lang="stylus"
       scoped>
  .iphone-warpper{
    margin-top 20px
  }
  .demo-page {
    width: 100%;
    height: 100%;
    background-color: #fff;
  }

  .iphone {
    position: relative;
    width: 413px;
    height: 833px;
    overflow: visible;
    .outline {
      border: 3px solid #b9c1c7;
      border-radius: 3px;
      width: 381px;
      height: 673px;
      display: block;
      position: absolute;
      z-index: 3;
      top: 80px;
      left: 16px;
      overflow: hidden
    }

    .body {
      width: 413px;
      height: 833px;
      background-color: #fff;
      border: 3px solid #b9c1c7;
      border-radius: 50px;
      position: relative;
      z-index: 2;
      text-align: center;
      font-size: 0;
      .hole {
        display: inline-block;
        background-color: #525558
      }
      .sensor {
        width: 10px;
        height: 10px;
        border-radius: 10px;
        display: block;
        margin: 10px auto
      }
      .speaker {
        width: 60px;
        height: 4px;
        border-radius: 8px
      }
      .camera {
        width: 12px;
        height: 12px;
        border-radius: 12px;
        position: relative;
        top: 4px;
        margin-right: 20px;
        margin-left: -32px
      }
    }

    .nub {
      width: 10px;
      background-color: #fff;
      border: 3px solid #b9c1c7;
      border-radius: 6px;
      position: absolute;
      z-index: 1
    }

    .sleep {
      height: 60px;
      right: -6px;
      top: 153px
    }

    .switch {
      height: 40px;
      left: -6px;
      top: 80px
    }

    .up {
      height: 60px;
      left: -6px;
      top: 153px
    }

    .down {
      height: 60px;
      left: -6px;
      top: 223px
    }

    .home {
      width: 56px;
      height: 56px;
      border-radius: 60px;
      border: 3px solid #b9c1c7;
      bottom: 12px;
      left: 50%;
      margin-left: -28px;
      position: absolute;
      z-index: 7;
    }
  }

</style>