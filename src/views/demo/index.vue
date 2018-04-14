<template>
  <tui-layout :is-scroll="true">
    <slot name="header">
      <tui-header :title="route.name.replace('demo-', '')">
        <div slot="left"
             @click="goDocs">Docs</div>
        <div slot="right">
          <router-link to="/demo/index">Home</router-link>
        </div>
      </tui-header>
    </slot>
    <template slot="content">
      <router-view></router-view>
    </template>
  </tui-layout>
</template>
<script>
export default {
  computed: {
    /**
     * 页面信息，route参数
     * @returns {object} 页面相关设置
     */
    route() {
      return this.$route
    },
  },
  methods: {
    /**
     * 返回
     */
    goDocs() {
      const name = this.route.name.replace('demo-', '')
      this.$router.push({
        name
      })
    },
  },
}
</script>
