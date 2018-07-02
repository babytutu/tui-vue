<template>
  <tui-layout :is-scroll="true">
    <slot name="header">
      <tui-header :title="name">
        <div slot="left"
             @click="goDocs(name === 'demo'? 'index':name)">Docs</div>
        <div slot="right">
          <router-link to="/demo">Home</router-link>
        </div>
      </tui-header>
    </slot>
    <template slot="content">
      <div v-if="name === 'demo'">
        <demo></demo>
      </div>
      <router-view></router-view>
    </template>
  </tui-layout>
</template>
<script>
import demo from './home.vue'

export default {
  components: {
    demo,
  },
  computed: {
    /**
     * 页面信息
     * @returns {object} 页面相关设置
     */
    name() {
      return this.$route.name.replace('demo-', '')
    },
  },
  methods: {
    /**
     * 返回
     */
    goDocs(name) {
      this.$router.push({
        name
      })
    },
  },
}
</script>
