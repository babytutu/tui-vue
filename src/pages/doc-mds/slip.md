# slip 滑动

左滑出现右侧操作内容，如常见的删除

```html
<template>
  <div>
    <m-slip v-for="(i, index) in list" :key="`slip-${index}`" class="list">
      左滑出现删除${i}
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
  width: 100px;
  color: #fff;
  text-align: center;
  font-size: 24px;
}
</style>
```

## Slot

| name  | 描述 |
| ----- | --- |
| -     | 默认 |
| right | 右侧 |