<template>
  <div class="btn-demo">
    <tui-button @click="showLoad('top')">消息在上面</tui-button>
    <tui-button @click="showLoad('middle')">消息在中间</tui-button>
    <tui-button @click="showLoad('bottom')">消息在底部</tui-button>
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

