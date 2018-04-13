# 加载loading

```html
<template>
  <div class="btn-demo">
    <tui-button @click="showLoad">点击加载</tui-button>
  </div>
</template>
<script>
export default {
  methods: {
    showLoad() {
      this.$loading('加载中')
      setTimeout(() => {
        this.$loading.hide()
      }, 2000)
    }
  },
}
</script>
```