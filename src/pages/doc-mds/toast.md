# Toast

Toast提示

```html
<template>
  <div class="btn-demo">
    <m-button @click="showLoad('top')">消息在上面</m-button>
    <m-button @click="showLoad('middle')">消息在中间</m-button>
    <m-button @click="showLoad('bottom')">消息在底部</m-button>
  </div>
</template>
<script>
export default {
  methods: {
    showLoad(place) {
      this.$toast({ message: `消息在${place}`, place })
    }
  },
}
</script>
```
Props

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| message         | 内容   | String  | - | - |
| className         | 自定义class名称   | String  | - | - |
| place         | 显示位置   | String  | top、middle、bottom  | middle |
| duration         | 显示多久消失(ms)   | Number  | - | 3000 |
