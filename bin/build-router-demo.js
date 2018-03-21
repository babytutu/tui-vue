const fs = require('fs')
const path = require('path')
const glob = require('glob')
const template = require('./utils').template

const OUTPUT_FILE = path.join(__dirname, '../src/demo/routes.js')
const INPUT_PATH = path.join(__dirname, '../src/demo/demo')
const generateExports = template `
/* Automatic generated by './build/build-router-demo.js' */

import entry from './index.vue'

export default {
  path: '/demo',
  component: entry,
  children: [
    ${'map'},
  ]
}
`

// 读取组件模块
const componentsFiles = glob.sync('*.vue', {
  cwd: INPUT_PATH
})

const map = []

componentsFiles.map(file => {
  const dirname = file.replace(/\//g, '')
  const moduleName = dirname.replace('.vue', '')
  map.push(`{
      path: '${moduleName}',
      name: 'demo-${moduleName}',
      component: () => import('./demo/${dirname}'),
    }`)
})

fs.writeFileSync(OUTPUT_FILE, generateExports({
  map: map.join(',\n    '),
}))

console.log(`build complete component demo entry, path:${OUTPUT_FILE}`)