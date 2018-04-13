<template>
  <div>
    <tui-select :alias="['key', 'val']"
                title="select"
                :options="options"
                v-model="select"></tui-select>
    <tui-cell>Checked: {{select}}</tui-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [{
          key: 'Option-a',
          val: 'a'
        },
        {
          key: 'Option-b',
          val: 'b'
        }
      ],
      select: 'b',
    }
  },
}
</script>