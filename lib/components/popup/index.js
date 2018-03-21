import Vue from 'vue'
import popup from './popup.vue'
import getAnInstance from './../../utils/instance'

const $popup = (options = {}) => {
  const instance = getAnInstance(popup)
  Object.assign(instance, options)
  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visible = true
  })
  return instance
}

export default $popup
