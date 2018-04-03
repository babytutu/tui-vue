<template>
  <div>
    <tui-select :alias="['key', 'val']"
                title="下拉菜单"
                :options="options"
                v-model="select"></tui-select>
    <tui-cell>已选中{{select}}</tui-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [{
          key: '选项1',
          val: 'a'
        },
        {
          key: '选项2',
          val: 'b'
        }
      ],
      select: 'b',
    }
  },
}
</script>