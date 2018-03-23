<template>
  <main
    class="row main"
    :class="{'slide-in-left': navbarShow}">
    <section
      class="is-scrollable navbar">
      <navbar></navbar>
    </section>
    <section class="is-scrollable content" ref="main" @click="navbarShow = false">
      <div class="navbar-toggle-container">
        <button class="navbar-toggle" @click="toggleNavbar">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <router-view></router-view>
    </section>
    <section class="demo">
      <phone></phone>
    </section>
  </main>
</template>

<script type="text/babel">
import Navbar from './components/navbar.vue'
import Phone from './components/phone.vue'

export default {
  watch: {
    '$route.path': function () {
      this.$refs.main.scrollTop = 0
      setTimeout(() => {
        this.navbarShow = false
      }, 200)
    },
  },

  data() {
    return {
      navbarShow: false,
    }
  },

  components: {
    Navbar,
    Phone,
  },

  methods: {
    toggleNavbar(event) {
      event.stopPropagation()
      this.navbarShow = !this.navbarShow
    },
  },
}
</script>

<style lang="stylus" scoped>
  .main {
    display flex
    height: 100%;
    padding-right: 10px;
    min-width: 960px;
    transition: transform .3s ease-in-out;

    > section {
      height: inherit;
      overflow: hidden;
      padding-right 20px

      &.is-scrollable {
        overflow: auto;
      }

      &.navbar {
        width 12%
      }

      &.content {
        width 45%
      }
    }
  }

  .content {
    padding-bottom: 2em;
  }

  .navbar {
    min-width: 240px;
    padding-left: 0;
  }

  .navbar-toggle-container {
    display: none;
  }

  @media screen and (max-width: 768px) {
    .main {
      min-width: 0;
      box-sizing: border-box;
      width: 100%;
      margin: 0;
      padding: 0;
      > section {
        padding-right 20px

        &.is-scrollable {
          overflow: auto;
        }

        &.navbar {
          width 40%
          padding-right 0
        }

        &.content {
          width 100%
        }
      }
    }

    .demo {
      display: none;
    }

    .content {
      width: 100%;
      padding: 45px 20px 0;
    }

    .navbar {
      left: 0;
      margin-left: -40%;
      margin-right: 0;
      opacity: 1;
      position: absolute;
      top: 0;
      transition: opacity .3s;
      width: 40%;
      z-index: 10;
      min-width: auto;
      padding: 0;
    }

    .slide-in-left {
      transform: translate3d(40%, 0, 0);

      .navbar {
        opacity: 1;
      }
    }

    .navbar-toggle-container {
      box-sizing: border-box;
      display: block;
      position: fixed;
      padding-left: 20px;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #26a2ff;
      z-index: 10;
    }

    .navbar-toggle {
      display: block;
      background-color: #26a2ff;
      border-radius: $border-radius;
      border: 1px solid #fff;
      height: 35px;
      margin: 10px 0;
      padding: 2px 6px;
      outline: none;
      width: 35px;
      z-index: 10;
      span {
        display: block;
        width: 100%;
        height: 2px;
        margin: 4px auto;
        background-color: #fff;
      }
    }
  }
</style>
