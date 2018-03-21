<template>
  <div class="list-warpper">
    <m-scroll ref="scroll"
    id="scroll"
              :data="items"
              @pullingDown="onPullingDown"
              @pullingUp="onPullingUp">
      <m-cell v-for="i in items" :key="i" :title="i">
      </m-cell>
    </m-scroll>
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
