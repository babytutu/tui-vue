<template>
  <div class="btn-demo">
    <m-button @click="showLoad">这是alert</m-button>
    <m-button @click="showPop">这是confirm</m-button>
  </div>
</template>
<script>
export default {
  methods: {
    showLoad() {
      this.$popup({
        message: '这是alert',
        type: 'alert',
        onConfirm: () => {
          this.$toast('点击了确定')
        },
      })
    },
    showPop() {
      this.$popup({
        message: '这是confirm',
        type: 'confirm',
        onConfirm: () => {
          this.$toast('点击了确定')
        },
        onCancel: () => {
          this.$toast('点击了取消')
        },
      })
    },
  },
}
</script>