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
        <a class="mob-demo" @click="goDemo">DEMO</a>
      </div>
      <router-view></router-view>
    </section>
    <section class="demo">
      <phone></phone>
    </section>
  </main>
</template>

<script type="text/babel">
export default {
  watch: {
    '$route.path': function () {
      this.$refs.main.scrollTop = 0
      setTimeout(() => {
        this.navbarShow = false
      }, 200)
    },
  },

  computed: {
    /**
     * 页面信息，route参数
     * @returns {object} 页面相关设置
     */
    route() {
      return this.$route
    },
  },

  data() {
    return {
      navbarShow: false,
    }
  },

  methods: {
    toggleNavbar(event) {
      event.stopPropagation()
      this.navbarShow = !this.navbarShow
    },
    goDemo() {
      const name = `demo-${this.route.name}`
      this.$router.push({
        name
      })
    }
  },
}
</script>

<style lang="stylus" scoped>
  .mob-demo{
    line-height 55px
    color #fff
  }
  .main {
    display flex
    height: 100%;
    min-width: 1024px;
    transition: transform .3s ease-in-out;

    > section {
      height: inherit;
      overflow: hidden;

      &.is-scrollable {
        overflow: auto;
      }

      &.navbar {
        width 12%
        min-width: 180px;
      }

      &.content {
        width calc(88% - 370px)
        padding-left 20px
        padding-right 20px
        max-width 60%
      }

      &.demo {
        padding-left 10px
        padding-right 10px
        min-width: 440px
      }
    }
  }

  .navbar-toggle-container {
    display: none;
  }

  @media screen and (max-width: 1024px) {
    .main {
      min-width: 0;
      box-sizing: border-box;
      width: 100%;
      margin: 0;
      padding: 0;
      > section {

        &.is-scrollable {
          overflow: auto;
        }

        &.navbar {
          width 40%
          min-width 100px
        }

        &.content {
          width 100%
          max-width 100%
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
      display: flex;
      justify-content: space-between;
      position: fixed;
      padding-left: 20px;
      padding-right 20px
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
