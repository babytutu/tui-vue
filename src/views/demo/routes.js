
import component from './index.vue'

const files = require.context('./', true, /\.vue$/)

const children = []

files.keys().forEach(key => {
  const name = key.replace(/(\.\/|demo\/|\.vue)/g, '')
  const file = files(key).default
  children.push({
    path: name,
    name: `demo-${name}`,
    component: file,
  })
})

export default {
  path: '/demo',
  component,
  children
}
