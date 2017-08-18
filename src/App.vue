<template>
  <div id="app">
    <navigation></navigation>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'app',

  components: {
    Navigation
  }
}
</script>

<style src="reset-css/reset.css"></style>
<style lang="scss">

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
