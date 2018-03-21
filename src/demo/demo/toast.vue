<template>
  <div class="btn-demo">
    <m-button @click="showLoad('top')">消息在上面</m-button>
    <m-button @click="showLoad('middle')">消息在中间</m-button>
    <m-button @click="showLoad('bottom')">消息在底部</m-button>
  </div>
</template>
<script>
export default {
  methods: {
    showLoad(place) {
      this.$toast({ message: `消息在${place}`, place })
    },
  },
}
</script>

