# 滚动Scroll
下拉刷新，上拉加载更多
[better-scroll](https://github.com/ustbhuangyi/better-scroll)

```html
<template>
  <div class="list-warpper">
    <tui-scroll ref="scroll"
                id="scroll"
                :data="items"
                @pullingDown="onPullingDown"
                @pullingUp="onPullingUp">
      <tui-cell v-for="i in items"
                :key="i"
                :title="i">
      </tui-cell>
    </tui-scroll>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [],
      itemIndex: 0,
    }
  },
  created() {
    for (let i = 0; i < 7; i++) {
      this.items.push(++this.itemIndex)
    }
  },
  methods: {
    /**
     * 上滑加载更多
     */
    onPullingUp() {
      // 模拟更新数据
      setTimeout(() => {
        if (this.itemIndex < 10) {
          for (let i = -10; i < 0; i++) {
            this.items.push(++this.itemIndex)
          }
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate()
        }
      }, 1000)
    },
    /**
     * 下拉刷新
     */
    onPullingDown() {
      // 模拟更新数据
      setTimeout(() => {
        if (this.itemIndex < 20) {
          for (let i = -10; i < 0; i++) {
            this.items.push(++this.itemIndex)
          }
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate()
        }
      }, 1000)
    },
  },
}
</script>
<style lang="stylus" scoped>
  .list-warpper{
    position: relative;
    height: 100%;
    overflow: hidden;
    background: #fff;
    li{
      height 88px
      line-height 88px
      text-align center
      border-bottom 1px solid #ddd
    }
  }
</style>
```

## Props

| 参数                | 说明          | 类型      | 可选值        | 默认值                  |
| ----------------- | ----------- | ------- | ---------- | -------------------- |
| data           | 数据        | array   | —          | []                   |

## Methods

| 名称         | 说明 |
| ----------- | ----- |
| pullingDown | 下拉刷新方法，加载完成后，通过forceUpdate()方法告知组件 |
| onPullingUp | 上拉加载更多，加载完成后，通过forceUpdate()方法告知组件 |

## 更多参数
[better-scroll](https://github.com/ustbhuangyi/better-scroll)
