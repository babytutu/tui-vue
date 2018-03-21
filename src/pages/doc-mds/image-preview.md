# 图片预览image-preview

```html
<template>
  <div class="avatars">
    <m-image-preview :src="url"></m-image-preview>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: 'https://avatars2.githubusercontent.com/u/14065833?s=460&v=4',
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
