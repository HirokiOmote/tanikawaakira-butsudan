<template>
  <div class="nav-wrap">
    <div class="logo">
      <router-link :to="{ path: '/' }">
        <img src="../assets/images/common/logo.svg" alt="谷川彰仏壇店">
      </router-link>
    </div>
    <nav>
      <ul>
        <li><router-link :to="{ path: 'about' }"><img src="../assets/images/common/btn_nav001.svg" alt="仏壇師 谷川彰"></router-link></li>
        <li><router-link :to="{ path: 'skill' }"><img src="../assets/images/common/btn_nav002.svg" alt="匠の技 工程"></router-link></li>
        <li><router-link :to="{ path: 'address' }"><img src="../assets/images/common/btn_nav003.svg" alt="所在地"></router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: 'Navigation',

    mounted () {
      this.drawer()
    },

    computed: {
      drawer () {
        return () => {
          let isLateralNavAnimating = false
          $('.navi-trigger').on('click', function (event) {
            event.preventDefault()
            if (!isLateralNavAnimating) {
              if ($(this).parents('.csstransitions').length > 0) isLateralNavAnimating = true
              $('body').toggleClass('navigation-is-open')
              $('.navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', () => {
                isLateralNavAnimating = false
              })
            }
          })
        }
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
  position: absolute;
  width: 150px;
  height: 100vh;
}

.logo {
  position: absolute;

  @include media( md ) {
    left: 50px;
    bottom: 3vh;
    z-index: 100;
    width: 39px;
  }
}

nav {
  width: 100vw;
  height: 100vh;
  background-color: rgba(#000, 0.85);

  @include media( md ) {
    position: absolute;
    left: 0;
    top: 0;
    padding: 45px 0 0 14px;
    width: 150px;
    z-index: 10;
    background: rgba(#000, 0.85) url("../assets/images/common/bg_nav.png") left 0 bottom 25% no-repeat;
  }

  li {
    text-align: left;

    &:not(:last-child) {
      margin-bottom: 25px;
    }
  }

  a {
    &::before {
      padding-right: 8px;
      content: image-set(url("../assets/images/common/icon_nav.png") 1x, url("../assets/images/common/icon_nav@2x.png") 2x);
    }
  }
}
</style>
