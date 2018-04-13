<template>
  <div class="btn-demo">
    <tui-button @click="showLoad">alert</tui-button>
    <tui-button @click="showPop">confirm</tui-button>
  </div>
</template>
<script>
export default {
  methods: {
    showLoad() {
      this.$popup({
        message: 'alert',
        type: 'alert',
        prevent: false,
        onConfirm: () => {
          this.$toast('ok')
        },
      })
    },
    showPop() {
      this.$popup({
        message: 'confirm',
        type: 'confirm',
        onConfirm: () => {
          this.$toast('ok')
        },
        onCancel: () => {
          this.$toast('cancel')
        },
      })
    },
  },
}
</script>