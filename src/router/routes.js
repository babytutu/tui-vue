
import demoRoutes from 'src/views/demo/routes' // demo
import mdRoutes from 'src/views/pages/routes'

const routes = [
  mdRoutes,
  demoRoutes,
  {
    path: '*',
    redirect: '/',
  }
]

export default routes
