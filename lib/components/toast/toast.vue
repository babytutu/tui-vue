<template>
  <transition name="fade">
    <div v-if="visible"
         class="tui-mask-bg no-bg"
         @touchmove="(e) => e.preventDefault()">
      <div :class="['tui-toast', place, className]">{{message}}</div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    message: {
      type: String,
      default: 'test',
    },
    place: {
      type: String,
      default: 'middle',
    },
    duration: {
      type: Number,
    },
    className: {
      type: String,
    },
  },
  data() {
    return {
      visible: false,
    }
  },
}
</script>
