const fs = require('fs')
const path = require('path')
const template = require('./utils').template
const glob = require('glob')

var OUTPUT_FILE = path.join(__dirname, '../src/views/pages/routes.js')
const INPUT_PATH = path.join(__dirname, '../src/views/pages/doc-mds')
var MD_PATH = './doc-mds'
var generateExports = template`
/* Automatic generated by './bin/build-router.js' */
import entry from './index.vue'

export default {
  path: '/',
  component: entry,
  children: [
    {
      path: '',
      name: 'index',
      component: () => import('./index.md'),
    },
    ${'map'},
  ]
}
`

// 读取文档模块
const componentsFiles = glob.sync('*.md', {
  cwd: INPUT_PATH
})

const map = []

componentsFiles.map(file => {
  const dirname = file.replace(/\//g, '')
  const moduleName = dirname.replace('.md', '')
  map.push(`{
        path: '${moduleName}',
        name: '${moduleName}',
        component: () => import('${MD_PATH}/${dirname}'),
      }`)
    }
)

fs.writeFileSync(OUTPUT_FILE, generateExports({
  map: map.join(',\n      '),
  MD_PATH,
}))

console.log(`build complete component md entry, path:${OUTPUT_FILE}`)
