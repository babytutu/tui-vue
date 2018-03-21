<template>
  <div class="tui-slide"
       ref="slide">
    <div class="tui-slide-group"
         ref="slideGroup">
      <slot>
      </slot>
    </div>
    <div v-if="showDot"
         class="tui-slide-dots">
      <span class="tui-slide-dots-dot"
            :class="{active: currentPageIndex === index }"
            v-for="(item, index) in dots"
            :key="index"></span>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import utils from './../../utils/utils'

export default {
  name: 'm-slide',
  props: {
    loop: {
      type: Boolean,
      default: true,
    },
    autoPlay: {
      type: Boolean,
      default: false,
    },
    interval: {
      type: Number,
      default: 1000,
    },
    showDot: {
      type: Boolean,
      default: true,
    },
    click: {
      type: Boolean,
      default: true,
    },
    threshold: {
      type: Number,
      default: 0.3,
    },
    speed: {
      type: Number,
      default: 400,
    },
  },
  data() {
    return {
      dots: [],
      currentPageIndex: 0,
    }
  },
  mounted() {
    this.update()

    window.addEventListener('resize', () => {
      if (!this.slide || !this.slide.enabled) {
        return
      }
      clearTimeout(this.resizeTimer)
      this.resizeTimer = setTimeout(() => {
        if (this.slide.isInTransition) {
          this._onScrollEnd()
        } else if (this.autoPlay) {
          this._play()
        }
        this.refresh()
      }, 60)
    })
  },
  activated() {
    if (!this.slide) {
      return
    }
    this.slide.enable()
    const pageIndex = this.slide.getCurrentPage().pageX
    this.slide.goToPage(pageIndex, 0, 0)
    this.currentPageIndex = pageIndex
    if (this.autoPlay) {
      this._play()
    }
  },
  deactivated() {
    this.slide.disable()
    clearTimeout(this.timer)
  },
  beforeDestroy() {
    this.slide.disable()
    clearTimeout(this.timer)
  },
  methods: {
    /**
     * 更新
     */
    update() {
      if (this.slide) {
        this.slide.destroy()
      }
      this.$nextTick(() => {
        this.init()
      })
    },
    /**
     * 刷新
     */
    refresh() {
      this._setSlideWidth(true)
      this.slide.refresh()
    },
    /**
     * 上一页
     */
    prev() {
      this.slide.prev()
    },
    /**
     * 下一页
     */
    next() {
      this.slide.next()
    },
    /**
     * 初始化
     */
    init() {
      clearTimeout(this.timer)
      this.currentPageIndex = 0
      this._setSlideWidth()
      if (this.showDot) {
        this._initDots()
      }
      this._initSlide()

      if (this.autoPlay) {
        this._play()
      }
    },
    /**
     * 设置宽度
     * @param {boolean} isResize 是否重新设置
     */
    _setSlideWidth(isResize) {
      this.children = this.$refs.slideGroup.children

      let width = 0
      const slideWidth = this.$refs.slide.clientWidth
      for (let i = 0; i < this.children.length; i++) {
        const child = this.children[i]
        utils.addClass(child, 'tui-slide-group-item')

        child.style.width = `${slideWidth}px`
        width += slideWidth
      }
      if (this.loop && !isResize) {
        width += 2 * slideWidth
      }
      this.$refs.slideGroup.style.width = `${width}px`
    },
    /**
     * 初始化
     */
    _initSlide() {
      this.slide = new BScroll(this.$refs.slide, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: this.loop,
          threshold: this.threshold,
          speed: this.speed,
        },
        bounce: false,
        click: this.click,
      })

      this.slide.on('scrollEnd', this._onScrollEnd)

      this.slide.on('touchEnd', () => {
        if (this.autoPlay) {
          this._play()
        }
      })

      this.slide.on('beforeScrollStart', () => {
        if (this.autoPlay) {
          clearTimeout(this.timer)
        }
      })
    },
    /**
     * 滚动结束
     */
    _onScrollEnd() {
      const pageIndex = this.slide.getCurrentPage().pageX
      this.currentPageIndex = pageIndex
      if (this.autoPlay) {
        this._play()
      }
    },
    /**
     * 页数
     */
    _initDots() {
      this.dots = new Array(this.children.length)
    },
    /**
     * 切换
     */
    _play() {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.slide.next()
      }, this.interval)
    },
  },
  watch: {
    /**
     * 循环
     */
    loop() {
      this.update()
    },
    /**
     * 自动播放
     */
    autoPlay() {
      this.update()
    },
    /**
     * 速度
     */
    speed() {
      this.update()
    },
    /**
     * 更新
     */
    threshold() {
      this.update()
    },
  },
}
</script>
