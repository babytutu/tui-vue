<template>
  <div>
    <m-slip v-for="(i, index) in list" :key="`slip-${i}`" class="list">
      <m-cell :title="`左滑出现删除${i}`">
      </m-cell>
      <div class="removeBtn" slot="right" @click="del(index)">删除</div>
    </m-slip>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        list: [1, 2, 3, 4, 5],
      }
    },
    methods: {
      /**
       * 删除
       * @param {number} index 索引
       */
      del(index) {
        this.list.splice(index, 1)
      },
    },
  }
</script>
<style lang="stylus" scoped>
.removeBtn{
  width: 120px;
  color: #fff;
  text-align: center;
  font-size: 12px;
}
</style>
