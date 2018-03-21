import Vue from 'vue'
import toast from './toast.vue'

import getAnInstance from './../../utils/instance'

const $toast = (options = {}) => {
  const instance = getAnInstance(toast)
  const duration = options.duration || 3000
  clearTimeout(instance.timer)
  instance.message = typeof options === 'string' ? options : options.message
  instance.place = options.place || 'middle'
  instance.className = options.className
  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visible = true
    ~duration && (instance.timer = setTimeout(() => {
      instance.visible = false
    }, duration))
  })
  return instance
}

export default $toast
