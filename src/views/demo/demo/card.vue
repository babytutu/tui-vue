<template>
  <tui-card title="title">
    <template slot="right">
      right slot
    </template>
    <tui-cell :noborder="true"
              title="title">
      <template slot="right">
        right slot
      </template>
    </tui-cell>
    <p>slot</p>
  </tui-card>
</template>