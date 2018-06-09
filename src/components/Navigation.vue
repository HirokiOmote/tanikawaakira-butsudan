<template>
  <div>
    <transition name="slide">
      <div class="nav-wrap" v-show='menu'>
        <div class="logo">
          <router-link :to="{ path: '/' }" v-on:click.native='menuClick'>
            <img src="../assets/images/common/logo.svg" alt="谷川彰仏壇店">
          </router-link>
        </div>
        <nav>
          <ul>
            <li><router-link :to="{ path: '/' }" v-on:click.native='menuClick' exact>トップ</router-link></li>
            <li><router-link :to="{ path: 'about' }" v-on:click.native='menuClick'>仏壇師 谷川彰</router-link></li>
            <li><router-link :to="{ path: 'skill' }" v-on:click.native='menuClick'>匠の技 工程</router-link></li>
            <li><router-link :to="{ path: 'garelly' }" v-on:click.native='menuClick'>販売・ギャラリー</router-link></li>
            <li><router-link :to="{ path: 'address' }" v-on:click.native='menuClick'>所在地</router-link></li>
          </ul>
        </nav>
      </div>
    </transition>

    <button type="button" v-on:click='menu = !menu' v-bind:class='{active:menu}' v-show='hamburger'>
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'Navigation',

    data () {
      return {
        menu: false,
        hamburger: true
      }
    },

    mounted () {
      this.noScroll()
      this.windowResize()
    },

    methods: {
      noScroll () {
        const scrollOff = (event) => {
          if (this.menu && window.innerWidth < 1140) {
            event.preventDefault()
          }
        }
        document.addEventListener('touchmove', scrollOff, false)
      },
      menuClick () {
        if (window.innerWidth < 1140) {
          this.menu = !this.menu
        }
      },

      windowResize () {
        const interval = Math.floor(1000 / 60 * 10)
        let resizeTimer

        this.menu = false
        this.hamburger = true

        if (window.innerWidth >= 1140) {
          this.menu = true
          this.hamburger = false
        }

        window.addEventListener('resize', (event) => {
          if (window.innerWidth >= 1140) {
            if (resizeTimer !== false) {
              clearTimeout(resizeTimer)
              resizeTimer = setTimeout(() => {
                this.menu = true
                this.hamburger = false
              }, interval)
            }
          } else {
            this.menu = false
            this.hamburger = true
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/common";

a {
  @include hover-effect;
}

.nav-wrap {
  position: fixed;
  z-index: 1000;
  width: 150px;
  height: 100vh;
}

.logo {
  position: absolute;
  bottom: 15vh;
  left: 50px;
  z-index: 1000;
  display: block;
  width: 39px;

  a {
    display: block;

    img {
      width: 100%;
    }
  }

  @include media( lg ) {
    bottom: 5vh;
  }
}

nav {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 48px 0 0 16px;
  width: 100vw;
  height: 100vh;
  background: rgba(#000, 0.85) url("../assets/images/common/bg_nav.png") left 0 top 1% no-repeat;

  @include media( lg ) {
    padding: 45px 0 0 14px;
    width: 150px;
    background-position: left 0 bottom 25%;
  }

  li {
    text-align: left;

    &:not(:last-child) {
      margin-bottom: 25px;
    }
  }

  a {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    text-decoration: none;
    color: #fff;

    &::before {
      padding-right: 8px;
      content: url("../assets/images/common/icon_nav.png");
      content: image-set(url("../assets/images/common/icon_nav.png") 1x, url("../assets/images/common/icon_nav@2x.png") 2x);
    }

    &:visited {
      color: inherit;
    }

    &.router-link-active {
      color: #ffad00;

      &::before {
        content: url("../assets/images/common/icon_nav_active.png");
        content: image-set(url("../assets/images/common/icon_nav_active.png") 1x, url("../assets/images/common/icon_nav_active@2x.png") 2x);
      }
    }
  }
}

button {
  display: block;
  position: fixed;
  z-index: 1000;
  right: 10px;
  top: 10px;
  padding: 0;
  width: 30px;
  height: 26px;
  transition: all .4s;
  border-width: 0;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  span {
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transition: all .4s;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2) {
      top: 12px;
    }

    &:nth-child(3) {
      bottom: 0;
    }
  }

  &.active {
    span {
      &:nth-child(1) {
        transform: translateY(12px) rotate(-45deg);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        transform: translateY(-12px) rotate(45deg);
      }
    }
  }
}

.slide-enter-active,
.slide-leave-active {
  transform: translateX(0vw);
  transition: transform .5s ease;
}

.slide-enter, .slide-leave-to {
  transform: translateX(-100vw);
  transition-delay: .5s;
}
</style>
