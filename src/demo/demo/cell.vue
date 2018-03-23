<template>
  <div>
    <tui-cell title="左边很多字">
      <template slot="right">
        右边很多字
      </template>
    </tui-cell>
    <tui-cell :noborder="true"
              title="左边很多字">
      <template slot="right">
        右边很多字
      </template>
    </tui-cell>
  </div>
</template>