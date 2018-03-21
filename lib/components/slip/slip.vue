<template>
  <div class="tui-slip"
       ref="slip">
    <div class="tui-slip-content"
         @touchstart="touchStart"
         @touchmove="touchMove"
         @touchend="touchEnd"
         :style="slipStyle">
      <slot></slot>
    </div>
    <div class="tui-slip-right"
         ref="slipRight">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
import utils from './../../utils/utils'

export default {
  name: 'm-slip',
  data() {
    return {
      startX: 0, // 触摸位置
      endX: 0, // 结束位置
      moveX: 0, // 滑动时的位置
      disX: 0, // 移动距离
      slipRightWidth: 0, // 右滑操作区域宽度
      slipStyle: '', // 样式
    }
  },
  mounted() {
    // 获取右侧slot的宽度，此宽度为滑块左滑的最大距离
    this.slipRightWidth = this.$refs.slipRight.offsetWidth
  },
  methods: {
    /**
     * 监听滑动开始
     * @param {*} ev dom
     */
    touchStart(ev) {
      // tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
      if (ev.touches.length === 1) {
        // 记录开始位置
        this.startX = ev.touches[0].clientX
      }
    },
    /**
     * 监听滑动进行
     * @param {*} ev dom
     */
    touchMove(ev) {
      if (ev.touches.length === 1) {
        // 滑动时距离浏览器左侧实时距离
        this.moveX = ev.touches[0].clientX
        // 起始位置减去 实时的滑动的距离，得到手指实时偏移距离
        this.disX = this.startX - this.moveX
        // 大于0左滑,如果是向右滑动或者不滑动，不改变滑块的位置
        if (this.disX > 20) { // 上下滑动手势也会造成x轴偏移，适当加大判断临界值，让滑动更顺滑
          ev.preventDefault()
          this.slipStyle = `transform: translateX(-${this.disX}px)`
        } else {
          this.slipStyle = 'transform: translateX(0px)'
        }
      }
    },
    /**
     * 监听滑动结束
     * @param {*} ev dom
     */
    touchEnd(ev) {
      if (ev.changedTouches.length === 1) {
        this.endX = ev.changedTouches[0].clientX
        this.disX = this.startX - this.endX
        // 如果距离小于删除按钮一半,强行回到起点
        if (this.disX > (this.slipRightWidth / 2)) {
          // 大于一半 滑动到最大值
          ev.preventDefault()
          this.slipStyle = `transform: translateX(-${this.slipRightWidth}px)`
          document.body.addEventListener('touchstart', this.restore, false)
        } else {
          this.slipStyle = 'transform: translateX(0px)'
          document.body.removeEventListener('touchstart', this.restore, false)
        }
      }
    },
    /**
     * 还原
     * @param {*} ev dom
     */
    restore(ev) {
      if (!utils.checkTargetNode(ev.target, this.$el)) {
        this.slipStyle = 'transform: translateX(0px)'
        document.body.removeEventListener('touchstart', this.restore, false)
      }
    },
  },
  destroyed() {
    document.body.removeEventListener('touchstart', this.restore, false)
  },
}
</script>
