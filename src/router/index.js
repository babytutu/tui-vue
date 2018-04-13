import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

const layers = document.getElementsByClassName('tui-mask-bg')

router.beforeEach((to, from, next) => {
  // 删除顽固节点
  Array.from(layers).forEach((vv) => {
    vv.parentNode.removeChild(vv)
  })
  document.title = to.name || document.title
  next()
})

export default router
