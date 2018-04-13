# slip

```html
<template>
  <div>
    <tui-slip v-for="(i, index) in list"
              :key="`slip-${i}`"
              class="list">
      <tui-cell :title="`Slip Left To Delete${i}`">
      </tui-cell>
      <div class="removeBtn"
           slot="right"
           @click="del(index)">Delete</div>
    </tui-slip>
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
     * Del
     * @param {number} index index
     */
    del(index) {
      this.list.splice(index, 1)
    },
  },
}
</script>
<style lang="stylus" scoped>
.removeBtn{
  width: 60px;
  color: #fff;
  text-align: center;
  font-size: 12px;
}
</style>
```

## Slots

| Name  | Desc |
| ----- | --- |
| -     | content |
| right | right |