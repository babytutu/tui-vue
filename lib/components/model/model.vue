<template>
  <transition name="fade">
    <div v-if="visible"
        :class="['tui-mask-bg', { 'no-bg': !mask }]"
        @touchmove="(e) => e.preventDefault()"
        @click="doClickMask">
        <div class="tui-model">
          <slot></slot>
        </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'tui-model',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    mask: {
      type: Boolean,
      default: true,
    },
    prevent: {
      type: Boolean,
      default: true,
    },
    onClose: {
      type: Function,
      default: () => {},
    },
  },
  watch: {
    /**
     *监听v-model值变化
     */
    value() {
      if (!this.value) {
        this.doClose()
      } else {
        this.visible = true
      }
    },
  },
  data() {
    return {
      visible: this.value,
    }
  },
  methods: {
    /**
     * 关闭事件
     */
    doClose() {
      this.visible = false
      this.onClose()
    },
    /**
     * 遮罩层click事件
     */
    doClickMask() {
      if (!this.prevent) this.$emit('input', false)
    },
  },
  mounted() {
    const fragment = document.createDocumentFragment()
    fragment.appendChild(this.$el)
    document.body.appendChild(fragment)
  },
}
</script>