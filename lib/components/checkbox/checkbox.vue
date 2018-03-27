<template>
  <div>
    <tui-cell v-for="i in options"
              :key="i.value">
      <label class="tui-checkbox">
        <input type="checkbox"
               class="tui-checkbox tui-border"
               :disabled="i.disabled"
               :value="i.value"
               v-model="key"
               @change="$emit('input', key)"> {{i.label}}
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
  },
  data() {
    return {
      key: this.value
    }
  },
}
</script>