<template>
  <div>
    <m-cell title="左边很多字">
      <template slot="right">
        右边很多字
      </template>
    </m-cell>
    <m-cell :noborder="true" title="左边很多字">
      <template slot="right">
        右边很多字
      </template>
    </m-cell>
  </div>
</template>