<template>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</template>

<script>
export default {
  name: 'Slider'
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/common";

  ul,
  ul:after {
      position: fixed;
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      z-index: 1;
  }

  li {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    color: transparent;
    background: {
      position: 50% 50%;
      repeat: no-repeat;
      size: cover;
    }
    opacity: 0;
    z-index: 0;
    animation: imageAnimation calc(#{$slideCounts} * 6s) linear infinite 0s;
  }

  @for $i from 1 through $slideCounts {
    li:nth-child(#{$i}) {
      background-image: url('../assets/images/top/bg_top00#{$i}.jpg');
    }
  }

  @for $i from 2 through $slideCounts {
    li:nth-child(#{$i}) {
      animation-delay: calc(6s * (#{$i} - 1));
    }
  }

  @keyframes imageAnimation {
    0% { opacity: 0; animation-timing-function: ease-in; }
    15% { opacity: 1; animation-timing-function: ease-out; }
    30% { opacity: 1 }
    45% { opacity: 0 }
    100% { opacity: 0 }
  }
</style>
