import template from './index.vue'

const files = require.context('./', true, /\.md$/)

const children = []

files.keys().forEach(key => {
  const name = key.replace(/(\.\/|doc-mds\/|\.md|index)/g, '')

  const component = files(key).default
  children.push({
    path: name,
    name: name,
    component
  })
})

export default {
  path: '/',
  component: template,
  children
}
