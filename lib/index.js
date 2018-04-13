const install = function (Vue) {

  const components = require.context('./components', true, /\.vue$/)
  components.keys().map(key => {
    const component = components(key).default
    const isJsComponents = /toast|popup|loading/
    if (component.name && !isJsComponents.test(component.name)) {
      Vue.component(component.name, component)
    }
  })

  const jsComponents = require.context('./components', true, /\.js$/)
  jsComponents.keys().map(key => {
    const name = `$${key.replace(/(\.\/|\/index\.js)/g, '')}`
    const component = jsComponents(key).default
    Vue.prototype[name] = component
  })
}

export default {
  install,
}

