<template>
  <div class="btn-demo">
    <m-button @click="changeBtn">普通按钮</m-button>
    <m-button type="dark">黑色的按钮</m-button>
    <m-button type="red">红色的按钮</m-button>
    <m-button type="link">假装是链接的按钮</m-button>
    <m-button :disabled="disabled">禁用的按钮</m-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        disabled: false,
      }
    },
    methods: {
      changeBtn() {
        this.disabled = !this.disabled
      },
    },
  }
</script>

