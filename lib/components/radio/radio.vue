<template>
  <div>
    <tui-cell v-for="i in options"
         :key="i.value">
      <label class="tui-radio">
        <input type="radio"
              class="tui-radio tui-border"
              :disabled="i.disabled"
              :value="i.value"
              v-model="key"
              @change="$emit('input', key)">
        {{i.label}}
      </label>
    </tui-cell>
  </div>
</template>
<script>
export default {
  name: 'tui-radio',
  props: {
    value: String,
    options: Array,
  },
  data() {
    return {
      key: this.value
    }
  },
}
</script>