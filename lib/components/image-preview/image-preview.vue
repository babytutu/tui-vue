<template>
  <div class="ipw-wrapper">
    <m-model v-model="isShow"
             :mask="true"
             :prevent="false">
      <div class="img-wraper">
        <img :src="largeSrc"
             @click="isShow = false"
             @touchmove.prevent="() => {}">
      </div>
    </m-model>
    <div class="image-preview-wrapper">
      <template v-if="!src">-</template>
      <template v-else>
        <img :src="src"
             @click="isShow = true">
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'm-image-preview',
  props: {
    src: {
      type: String,
    },
  },
  data() {
    return {
      isShow: false,
      largeSrc: this.src,
    }
  },
}
</script>
