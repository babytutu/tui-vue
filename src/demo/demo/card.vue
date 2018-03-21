<template>
  <m-card>
    <template slot="left">
      左边内容
    </template>
    <template slot="right">
      右边内容
    </template>
    <template slot="content">
      <m-cell :noborder="true" title="左边很多字">
        <template slot="right">
          右边很多字
        </template>
      </m-cell>
      <p>其他文字内容</p>
    </template>
  </m-card>
</template>