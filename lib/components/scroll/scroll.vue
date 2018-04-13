<template>
  <div ref="wrapper"
       class="tui-scroll-list-wrapper">
    <div class="tui-scroll-content">
      <div ref="listWrapper">
        <slot>
        </slot>
      </div>
      <slot name="pullup"
            :pullUpLoad="pullUpLoad"
            :isPullUpLoad="isPullUpLoad">
        <div class="pullup-wrapper"
             v-if="pullUpLoad">
          <div class="before-trigger"
               v-if="!isPullUpLoad">
            <span>{{pullUpTxt}}</span>
          </div>
          <div class="after-trigger"
               v-else>
            <div class="loading-container">
              <spinner></spinner>
            </div>
          </div>
        </div>
      </slot>
    </div>
    <slot name="pulldown"
          :pullDownRefresh="pullDownRefresh"
          :pullDownStyle="pullDownStyle"
          :beforePullDown="beforePullDown"
          :isPullingDown="isPullingDown"
          :bubbleY="bubbleY">
      <div ref="pulldown"
           class="pulldown-wrapper"
           :style="pullDownStyle"
           v-if="pullDownRefresh">
        <div class="before-trigger"
             v-if="beforePullDown">
          <bubble :y="bubbleY"></bubble>
        </div>
        <div class="after-trigger"
             v-else>
          <div v-if="isPullingDown"
               class="loading">
            <div class="loading-container">
              <spinner></spinner>
            </div>
          </div>
          <div v-else><span>{{refreshTxt}}</span></div>
        </div>
      </div>
    </slot>
    <div class="tui-back-to-top"
         @click="scrollTo(0, 0, 700)"
         v-if="!isTop">顶部
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import bubble from './bubble.vue'
import spinner from './spinner.vue'

export default {
  name: 'tui-scroll',
  components: {
    bubble,
    spinner,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    probeType: {
      type: Number,
      default: 1,
    },
    click: {
      type: Boolean,
      default: true,
    },
    listenScroll: {
      type: Boolean,
      default: true,
    },
    listenBeforeScroll: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String,
      default: 'vertical',
    },
    scrollbar: {
      type: null,
      default: false,
    },
    pullDownRefresh: {
      type: null,
      default: () => ({
        threshold: 90,
        stop: 40,
        txt: '刷新完成'
      }),
    },
    pullUpLoad: {
      type: null,
      default: () => ({
        threshold: 50,
        txt: {
          more: '加载更多',
          noMore: '没有更多了',
        },
      }),
    },
    startY: {
      type: Number,
      default: 0,
    },
    refreshDelay: {
      type: Number,
      default: 20,
    },
    freeScroll: {
      type: Boolean,
      default: false,
    },
    mouseWheel: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      beforePullDown: true,
      isRebounding: false,
      isPullingDown: false,
      isPullUpLoad: false,
      pullUpDirty: true,
      pullDownStyle: '',
      bubbleY: 0,
      scroll: {},
      isTop: true,
    }
  },
  computed: {
    /**
     * 加载更多文案
     * @returns {string} 加载更多文案
     */
    pullUpTxt() {
      const moreTxt = this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.more

      const noMoreTxt = this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.noMore

      return this.pullUpDirty ? moreTxt : noMoreTxt
    },
    /**
     * 下拉刷新文案
     * @returns {string} 下拉刷新文案
     */
    refreshTxt() {
      return this.pullDownRefresh && this.pullDownRefresh.txt
    },
  },
  created() {
    this.pullDownInitTop = -50
  },
  mounted() {
    setTimeout(() => {
      this.initScroll()
    }, 20)
  },
  methods: {
    /**
     * 初始化
     */
    initScroll() {
      if (!this.$refs.wrapper) {
        return
      }
      if (this.$refs.listWrapper && (this.pullDownRefresh || this.pullUpLoad)) {
        this.$refs.listWrapper.style.minHeight = `${this.$refs.wrapper.offsetHeight}px`
      }

      const options = {
        probeType: this.probeType,
        click: this.click,
        scrollY: this.freeScroll || this.direction === 'vertical',
        scrollX: this.freeScroll || this.direction === 'horizontal',
        scrollbar: this.scrollbar,
        pullDownRefresh: this.pullDownRefresh,
        pullUpLoad: this.pullUpLoad,
        startY: this.startY,
        freeScroll: this.freeScroll,
        mouseWheel: this.mouseWheel,
      }

      this.scroll = new BScroll(this.$refs.wrapper, options)

      if (this.listenScroll) {
        this.scroll.on('scroll', (pos) => {
          this.$emit('scroll', pos)
          this.isTop = this.scroll.y > -100
        })
      }

      if (this.listenBeforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScrollStart')
        })
      }

      if (this.pullDownRefresh) {
        this.initPullDownRefresh()
      }

      if (this.pullUpLoad) {
        this.initPullUpLoad()
      }
    },
    /**
     * 禁用
     */
    disable() {
      this.scroll.disable()
    },
    /**
     * 启用
     */
    enable() {
      this.scroll.enable()
    },
    /**
     * 更新
     */
    refresh() {
      this.scroll.refresh()
    },
    /**
     * 滚动到
     */
    scrollTo(...arg) {
      this.scroll.scrollTo(...arg)
    },
    /**
     * 滚动到dom
     */
    scrollToElement(...arg) {
      this.scroll.scrollToElement(...arg)
    },
    /**
     * 销毁
     */
    destroy() {
      this.scroll.destroy()
    },
    /**
     * 结束
     * @param {boolean} dirty dirty
     */
    forceUpdate(dirty) {
      if (this.pullDownRefresh && this.isPullingDown) {
        this.isPullingDown = false
        this.reboundPullDown().then(() => {
          this.afterPullDown()
        })
      } else if (this.pullUpLoad && this.isPullUpLoad) {
        this.isPullUpLoad = false
        this.scroll.finishPullUp()
        this.pullUpDirty = dirty
        this.refresh()
      } else {
        this.refresh()
      }
    },
    /**
     * 下拉刷新
     */
    initPullDownRefresh() {
      this.scroll.on('pullingDown', () => {
        this.beforePullDown = false
        this.isPullingDown = true
        this.$emit('pullingDown')
      })

      this.scroll.on('scroll', (pos) => {
        if (this.beforePullDown) {
          this.bubbleY = Math.max(0, pos.y + this.pullDownInitTop)
          this.pullDownStyle = `top:${Math.min(pos.y + this.pullDownInitTop, 10)}px`
        } else {
          this.bubbleY = 0
        }

        if (this.isRebounding) {
          this.pullDownStyle = `top:${10 - (this.pullDownRefresh.stop - pos.y)}px`
        }
      })
    },
    /**
     * 上拉
     */
    initPullUpLoad() {
      this.scroll.on('pullingUp', () => {
        this.isPullUpLoad = true
        this.$emit('pullingUp')
      })
    },
    /**
     * 下拉更新
     * @returns {Promise} Promiss
     */
    reboundPullDown() {
      const {
        stopTime = 600,
      } = this.pullDownRefresh
      return new Promise((resolve) => {
        setTimeout(() => {
          this.isRebounding = true
          this.scroll.finishPullDown()
          resolve()
        }, stopTime)
      })
    },
    /**
     * 下拉更新结束
     */
    afterPullDown() {
      setTimeout(() => {
        this.pullDownStyle = `top:${this.pullDownInitTop}px`
        this.beforePullDown = true
        this.isRebounding = false
        this.refresh()
      }, this.scroll.options.bounceTime)
    },
  },
  watch: {
    /**
     * 数组
     */
    data() {
      setTimeout(() => {
        this.forceUpdate(true)
      }, this.refreshDelay)
    },
  },
}
</script>
