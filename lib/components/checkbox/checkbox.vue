<template>
  <div>
    <tui-cell v-for="i in options"
              :key="i[alias[1]]">
      <label class="tui-checkbox">
        <input type="checkbox"
               class="tui-checkbox tui-border"
               :disabled="i.disabled"
               :value="i[alias[1]]"
               v-model="key"
               @change="$emit('input', key)"> {{i[alias[0]]}}
      </label>
    </tui-cell>
  </div>
</template>
<script>
export default {
  name: 'tui-checkbox',
  props: {
    value: Array,
    options: Array,
    alias: {
      type: Array,
      default: () => [
        'label',
        'value'
      ]
    }
  },
  data() {
    return {
      key: this.value
    }
  },
}
</script>