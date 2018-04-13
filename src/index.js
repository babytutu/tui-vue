import Vue from 'vue'
import App from './index.vue'
import router from './router'
import './components'
// 代码高亮样式
import 'highlight.js/styles/github-gist.css'
// 文档样式
import './assets/style/static.styl'
// 引入组件库和样式
import './../lib/assets/style/style.styl'
import tui from './../lib/index'
// import './../dist/style.css'
// import tui from './../dist/index'
Vue.use(tui)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
