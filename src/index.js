import Vue from 'vue'
// 代码高亮样式
import 'highlight.js/styles/github-gist.css'
import App from './main.vue'
import router from './route'
// 文档样式
import './assets/style/static.styl'
// 引入组件库和样式
import './../lib/assets/style/index.styl'
import tui from './../lib/index'

Vue.use(tui)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
