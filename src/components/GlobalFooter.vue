<template lang="html">
  <footer>
    <small>© 2017 TANIKAWAAKIRA BUTSUDAN</small>
  </footer>
</template>

<script>
export default {
  name: 'GlobalFooter'
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/common";

  footer {
    width: 100%;
    padding: 15px 0;
    text-align: center;
    font-size: 1.1rem;
    transition: all .2s ease .5s;

    @include media( lg ) {
      position: fixed;
      bottom: 0;
      left: 150px;
      z-index: 5;
      width: calc(100% - 150px);
      background-color: rgba(0, 0, 0, 0.85);
    }
  }
</style>
