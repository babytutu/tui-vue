# Slide 简单轮播

[better-scroll](https://github.com/ustbhuangyi/better-scroll)

```html
<template>
  <m-slide>
    <div v-for="item in data" :key="item.id">
      <a :href="item.linkUrl">
        <img :src="item.picUrl">
      </a>
    </div>
  </m-slide>
</template>
<script>
  export default {
    data() {
      return {
        data: [
          {
            linkUrl: 'http://y.qq.com/w/album.html?albummid=0044K2vN1sT5mE',
            picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001YCZlY3aBifi.jpg',
            id: 11351,
          },
          {
            linkUrl: 'https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2197820&g_f=shoujijiaodian',
            picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000004ckGfg3zaho0.jpg',
            id: 11372,
          },
        ],
      }
    },
  }
</script>

```

## Props

| 参数        | 说明          | 类型     | 可选值       | 默认值  |
| ---------- | ------------- | ------- | ----------- | ------ |
| showDot    | 是否需要分页符号 | boolean | true/false  | true  |
| autoPlay   | 是否自动播放     | boolean | true/false  | false |
| loop       | 是否循环        | boolean | true/false  | true  |


## 更多参数
[better-scroll](https://github.com/ustbhuangyi/better-scroll)
