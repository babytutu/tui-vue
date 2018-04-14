<template>
  <div class="spinner-wrapper">
    <div class="spinner">
      <div class="spinner-blade"></div>
      <div class="spinner-blade"></div>
      <div class="spinner-blade"></div>
      <div class="spinner-blade"></div>
      <div class="spinner-blade"></div>
      <div class="spinner-blade"></div>
      <div class="spinner-blade"></div>
      <div class="spinner-blade"></div>
      <div class="spinner-blade"></div>
      <div class="spinner-blade"></div>
      <div class="spinner-blade"></div>
      <div class="spinner-blade"></div>
    </div>
  </div>
</template>
<style lang="stylus" scoped>
.spinner-wrapper
  .spinner
    position: relative
    width: 20px
    height: 20px
    margin: 0 auto
    font-size: 20px

  .spinner .spinner-blade
    position: absolute
    left: 44.5%
    top: 37%
    width: 0.074em
    height: 0.2777em
    background-color: #ccc
    border-radius: 0.0555em
    animation: spinner-fade 1s linear infinite

  for i in (1..12)
    .spinner .spinner-blade:nth-child({i})
      animation-delay: (1 / 12 * (i - 21)) s
      transform: rotate((360 / 12 * i) deg) translate(0, -150%)

  @keyframes spinner-fade
    0%
      opacity: 1
    100%
      opacity: 0.1
</style>
