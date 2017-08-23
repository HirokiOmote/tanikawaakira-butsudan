<template>
  <div id="app">
    <navigation></navigation>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <global-footer></global-footer>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import GlobalFooter from './components/GlobalFooter'

export default {
  name: 'app',
  metaInfo: {
    title: '富山仏壇・仏具 谷川彰仏壇',
    titleTemplate: '%s | 富山県富山市の仏壇師',
    meta: [
      { charset: 'utf-8' },
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1.0' }
    ]
  },

  components: {
    Navigation,
    GlobalFooter
  }
}
</script>

<style src="reset-css/reset.css"></style>
<style lang="scss">

@import "./assets/scss/common";

html {
  font: {
    family: Georgia, "游明朝", "Yu Mincho", YuMincho, "Hiragino Mincho ProN", HGS明朝E, メイリオ, Meiryo, serif;
    size: 62.5%;
    weight: 300;
  }
  font-feature-settings: "palt" 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  line-height: 1;
  letter-spacing: .04em;
}

body {
  background-color: #000;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
