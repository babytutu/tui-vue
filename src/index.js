import Vue from 'vue'
import App from './index.vue'
import router from './router'
import './config'

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
