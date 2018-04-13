# 简单轮播Slide

使用[better-scroll](https://github.com/ustbhuangyi/better-scroll)做了简单封装
外部容器必须定宽定高

```html
<template>
  <div class="demo">
    <tui-slide>
      <div v-for="item in imgs"
           :key="item.id">
        <div class="banner"
             :style="{ 'background-image': `url(${item.picUrl})`}"></div>
      </div>
    </tui-slide>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgs: [{
          picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001YCZlY3aBifi.jpg',
          id: 11351,
        },
        {
          picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000004ckGfg3zaho0.jpg',
          id: 11372,
        },
      ],
    }
  },
}
</script>
<style lang="stylus" scoped>
  .demo
    background #f8f8f8
    width 100%
    height 150px
    overflow hidden
    .banner
      background-size: cover;
      display: block;
      width: 100%;
      height: 150px;
</style>
```

## Props

| 参数        | 说明          | 类型     | 可选值       | 默认值  |
| ---------- | ------------- | ------- | ----------- | ------ |
| showDot    | 是否需要分页符号 | boolean | true/false  | true  |
| autoPlay   | 是否自动播放     | boolean | true/false  | false |
| loop       | 是否循环        | boolean | true/false  | true  |


## 更多参数
[better-scroll](https://github.com/ustbhuangyi/better-scroll)
