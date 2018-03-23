<template>
  <div class="tui-image-preview">
    <template v-if="!src">-</template>
    <template v-else>
      <img :src="src"
            @click="isShow = true">
      <tui-model v-model="isShow"
                  :mask="true"
                  :prevent="false">
        <div class="tui-image-preview_img-wraper">
          <img :src="src"
                @click="isShow = false"
                @touchmove.prevent="() => {}">
        </div>
      </tui-model>
    </template>
  </div>
</template>
<script>
export default {
  name: 'tui-image-preview',
  props: {
    src: {
      type: String,
    },
  },
  data() {
    return {
      isShow: false,
    }
  },
}
</script>