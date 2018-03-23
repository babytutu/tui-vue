<template>
  <div>
    <tui-card title="手机扫码预览">
      <div class="qrcode">
        <qrcode :text="qrcodeUrl"></qrcode>
      </div>
    </tui-card>
    <tui-cell v-for="r in router" :key="r.name" v-if="r.name !== 'demo'">
      <router-link :to="{ name: r.name }">{{r.path}}</router-link>
    </tui-cell>
  </div>
</template>
<script type="text/babel">
import router from './../routes'
import qrcode from './../../components/qrcode.vue'

export default {
  data() {
    return {
      router: router.children,
      qrcodeUrl: window.location.href
    }
  },
  components: {
    qrcode
  }
}
</script>
<style lang="stylus" scoped>
.qrcode
  width 200px
  height 200px
  margin 10px auto
</style>

