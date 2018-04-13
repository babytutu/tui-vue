# 图片预览image-preview

```html
<template>
  <div class="avatars">
    <tui-image-preview :src="url"></tui-image-preview>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: 'https://cn.vuejs.org/images/logo.png',
    }
  }
}
</script>
<style lang="stylus" scoped>
.avatars{
  padding 20px
  width 200px
  height 200px
}
</style>
```

## Props

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| url         | 图片地址   | String  | - | - |
