<template>
  <div v-show="isTop"
       @click="backTop">
    <slot>
      <div class="tui-back-to-top">顶部</div>
    </slot>
  </div>
</template>
<script>
import utils from './../../utils/utils'

export default {
  name: 'tui-back-to-top',
  props: {
    el: {
      type: String,
    },
  },
  data() {
    return {
      isTop: false,
      dom: null,
    }
  },
  methods: {
    /**
     * 回到顶部
     */
    backTop() {
      utils.backToTop(utils.animationFrame, this.dom, this.dom.scrollTop)
    },
    /**
     * 计算是否需要出返回顶部
     */
    countDom() {
      this.isTop = this.dom.scrollTop > 50
    },
  },
  mounted() {
    this.dom = document.getElementById(this.el)
    this.dom.addEventListener('scroll', utils.throttle(this.countDom, 20, 30), true)
  },
}
</script>
