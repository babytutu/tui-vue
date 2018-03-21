<template>
  <transition name="fade">
    <div v-if="visible"
         class="tui-mask-bg"
         @touchmove="(e) => e.preventDefault()">
      <div class="tui-popup-warp tui-border">
        <div class="tui-popup-content tui-border"
              v-html="message"></div>
        <div class="tui-popup-button">
          <button class="tui-popup-button-confirm" @click="doConfirm">
            {{confirmText}}
          </button>
          <button class="tui-popup-button-cancel tui-border"
                v-if="type==='confirm'" @click="doClose">
            {{cancelText}}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    message: String,
    onConfirm: {
      type: Function,
      default: () => {},
    },
    onCancel: {
      type: Function,
      default: () => {},
    },
    type: {
      type: String,
      default: 'alert',
    },
    prevent: {
      type: Boolean,
      default: true,
    },
    confirmText: {
      type: String,
      default: '确定',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
  },
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    /**
     * 窗口关闭移除DOM
     * @param {Function} callback 回调
     */
    removeDom(callback) {
      this.value = false
      setTimeout(() => {
        if (callback) callback()
        if (this.$el.parentNode) {
          document.body.removeChild(this.$el)
        }
      }, 200)
    },
    /**
     * 取消事件
     */
    doClose() {
      this.removeDom(this.onCancel)
    },
    /**
     * 确认事件
     */
    doConfirm() {
      this.removeDom(this.onConfirm)
    },
  },
}
</script>