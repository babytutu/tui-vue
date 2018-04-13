
/* Automatic generated by './build/build-router-demo.js' */

import entry from './index.vue'

export default {
  path: '/demo',
  component: entry,
  children: [
    {
      path: 'back-to-top',
      name: 'demo-back-to-top',
      component: () => import('./demo/back-to-top.vue'),
    },
    {
      path: 'button',
      name: 'demo-button',
      component: () => import('./demo/button.vue'),
    },
    {
      path: 'card',
      name: 'demo-card',
      component: () => import('./demo/card.vue'),
    },
    {
      path: 'cell',
      name: 'demo-cell',
      component: () => import('./demo/cell.vue'),
    },
    {
      path: 'checkbox',
      name: 'demo-checkbox',
      component: () => import('./demo/checkbox.vue'),
    },
    {
      path: 'header',
      name: 'demo-header',
      component: () => import('./demo/header.vue'),
    },
    {
      path: 'image-preview',
      name: 'demo-image-preview',
      component: () => import('./demo/image-preview.vue'),
    },
    {
      path: 'index',
      name: 'demo-index',
      component: () => import('./demo/index.vue'),
    },
    {
      path: 'layout',
      name: 'demo-layout',
      component: () => import('./demo/layout.vue'),
    },
    {
      path: 'loading',
      name: 'demo-loading',
      component: () => import('./demo/loading.vue'),
    },
    {
      path: 'model',
      name: 'demo-model',
      component: () => import('./demo/model.vue'),
    },
    {
      path: 'popup',
      name: 'demo-popup',
      component: () => import('./demo/popup.vue'),
    },
    {
      path: 'radio',
      name: 'demo-radio',
      component: () => import('./demo/radio.vue'),
    },
    {
      path: 'scroll',
      name: 'demo-scroll',
      component: () => import('./demo/scroll.vue'),
    },
    {
      path: 'select',
      name: 'demo-select',
      component: () => import('./demo/select.vue'),
    },
    {
      path: 'slide',
      name: 'demo-slide',
      component: () => import('./demo/slide.vue'),
    },
    {
      path: 'slip',
      name: 'demo-slip',
      component: () => import('./demo/slip.vue'),
    },
    {
      path: 'switch',
      name: 'demo-switch',
      component: () => import('./demo/switch.vue'),
    },
    {
      path: 'tab',
      name: 'demo-tab',
      component: () => import('./demo/tab.vue'),
    },
    {
      path: 'toast',
      name: 'demo-toast',
      component: () => import('./demo/toast.vue'),
    },
  ]
}
