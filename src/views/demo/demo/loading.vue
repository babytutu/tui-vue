<template>
  <div class="btn-demo">
    <tui-button @click="showLoad">Show Loading</tui-button>
  </div>
</template>
<script>
export default {
  methods: {
    showLoad() {
      this.$loading('Loading')
      setTimeout(() => {
        this.$loading.hide()
      }, 2000)
    },
  },
}
</script>

