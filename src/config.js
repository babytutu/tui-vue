import Vue from 'vue'
// 引入组件库和样式
import tui from './../lib/index'
import './../lib/assets/style/style.styl'
// import tui from './../dist/index'
// import './../dist/style.css'

import Logger from 'tui-vue-logger'

import './components'
// 代码高亮样式
import 'highlight.js/styles/github-gist.css'
// 文档样式
import './assets/style/static.styl'
Vue.use(tui)

Vue.use(Logger, {
  prefix: 'tui-vue'
})
