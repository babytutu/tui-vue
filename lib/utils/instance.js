import Vue from 'vue'

export default (template) => {
  const ComponentsConstructor = Vue.extend(template)

  return new ComponentsConstructor({
    el: document.createElement('div'),
  })
}
