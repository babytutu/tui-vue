import Vue from 'vue'
import loading from './loading.vue'
import getAnInstance from './../../utils/instance'

let instance = {}

const $loading = (options = {}) => {
  instance = getAnInstance(loading)
  instance.message = typeof options === 'string' ? options : options.message
  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visible = true
  })
  return instance
}

$loading.hide = () => {
  instance.visible = false
}

export default $loading
