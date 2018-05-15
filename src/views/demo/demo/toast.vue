<template>
  <div class="btn-demo">
    <tui-button @click="showLoad('top')">Show Msg Top</tui-button>
    <tui-button @click="showLoad('middle')">Show Msg Middle</tui-button>
    <tui-button @click="showLoad('bottom')">Show Msg Bottom</tui-button>
  </div>
</template>
<script>
export default {
  methods: {
    showLoad(place) {
      this.$toast({ message: `Msg ${place}`, place }, () => {
        this.log(place)
      })
    },
  },
}
</script>

