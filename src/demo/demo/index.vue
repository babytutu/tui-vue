<template>
  <div>
    <m-cell v-for="r in router" :key="r.name" v-if="r.name !== 'demo'">
      <router-link :to="{ name: r.name }">{{r.path}}</router-link>
    </m-cell>
  </div>
</template>
<script type="text/babel">
  import router from './../routes'

export default {
    data() {
      return {
        router: router.children,
      }
    },
  }
</script>
