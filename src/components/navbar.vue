<template>
  <nav class="nav">
    <ul>
      <li>
        <router-link class="nav-link"
                     active-class="is-active"
                     exact
                     :to="{ path: '/' }">Overview</router-link>
      </li>
      <div v-for="group in navs"
           :key="group.name">
        <li>
          <a href="#"
             @click.prevent="group.visible = !group.visible"
             class="nav-label"
             v-text="group.title">
          </a>
        </li>
        <ul>
          <li v-for="item in group.components"
              :key="item">
            <router-link class="nav-link"
                         :to="{ path: item }"
                         active-class="is-active"
                         v-text="item">
            </router-link>
          </li>
        </ul>
      </div>
    </ul>
  </nav>
</template>
<script>
import NavsConfig from './../nav.config.json'

export default {
  data() {
    return {
      navs: NavsConfig,
    }
  },
}
</script>
<style lang="stylus" scoped>
  .edit-doc-btn {
    color: red !important;
  }

  .slidedown-transition {
    transition: all .3s ease-in-out;
    overflow: hidden;
    opacity: 1;
  }

  .slidedown-enter,
  .slidedown-leave {
    max-height: 0 !important;
    opacity: 0.3;
  }

  .nav {
    background-color: #f9fafb;
    color: #4c555a;
    font-size: 14px;
    min-height: 100%;
    padding: 40px 0 40px 20px;
  }

  .nav-label {
    color: #9da5b3;
    font-weight: bold;
    padding: 16px 8px;
    display: block;
  }

  .nav-link {
    padding: 8px;
    display: block;
    text-decoration: none;
    color: inherit;
    transition: color .2s;
    &.is-active {
      color: #4078c0;
      border-right: 2px solid;
    }
    &:hover {
      color: #4078c0;
    }
  }
</style>