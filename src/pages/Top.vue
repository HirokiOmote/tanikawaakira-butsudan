<template>
  <div class="wrapper">
    <h1><img src="../assets/images/top/txt_001.svg" alt="至宝"></h1>
    <p><img src="../assets/images/top/txt_002.svg" alt="伝統工芸が極めた匠が織りなす唯一無二のモノ"></p>
  </div>
</template>

<script>
export default {
  name: 'top'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/scss/common";

.wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding-left: 150px;
  height: 100vh;
  background: #fff url("../assets/images/top/bg_top001.jpg") 50% 50% no-repeat;
  background-size: cover;

  @include media {
    flex-direction: column;

    p {
      margin-top: 42px;
    }
  }
}
</style>
