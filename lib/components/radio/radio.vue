<template>
  <div>
    <tui-cell v-for="i in options"
         :key="i[alias[1]]">
      <label class="tui-radio">
        <input type="radio"
              class="tui-radio tui-border"
              :disabled="disabled"
              :value="i[alias[1]]"
              v-model="key"
              @change="change">
        {{i[alias[0]]}}
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
    disabled: {
      type: Boolean,
      default: false
    },
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
  methods: {
    change(e) {
      if (!this.disabled) {
        this.$emit('input', e.target.value)
      }
    }
  },
}
</script>