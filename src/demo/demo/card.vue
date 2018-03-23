<template>
  <tui-card title="左边内容">
    <template slot="right">
      右边内容
    </template>
    <tui-cell :noborder="true"
              title="左边很多字">
      <template slot="right">
        右边很多字
      </template>
    </tui-cell>
    <p>其他文字内容</p>
  </tui-card>
</template>