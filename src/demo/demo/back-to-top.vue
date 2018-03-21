<template>
  <div>
    <m-cell v-for="i in list"
            :key="i"
            :title="i">
    </m-cell>
    <m-back-to-top el="tui-warper-content"></m-back-to-top>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: 111,
    }
  },
}
</script>
