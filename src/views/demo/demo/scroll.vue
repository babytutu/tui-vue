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
     * PullingUp
     */
    onPullingUp() {
      // mock data
      setTimeout(() => {
        if (this.itemIndex < 10) {
          for (let i = -10; i < 0; i++) {
            this.items.push(++this.itemIndex)
          }
        } else {
          // no data
          this.$refs.scroll.forceUpdate()
        }
      }, 1000)
    },
    /**
     * PullingDown
     */
    onPullingDown() {
      // mock data
      setTimeout(() => {
        if (this.itemIndex < 20) {
          for (let i = -10; i < 0; i++) {
            this.items.push(++this.itemIndex)
          }
        } else {
          // no data
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