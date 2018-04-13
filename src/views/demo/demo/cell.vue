<template>
  <div>
    <tui-cell title="title">
      <template slot="right">
        right slot
      </template>
    </tui-cell>
    <tui-cell :noborder="true">
      <template>
        default slot
      </template>
      <template slot="right">
        right slot
      </template>
    </tui-cell>
  </div>
</template>