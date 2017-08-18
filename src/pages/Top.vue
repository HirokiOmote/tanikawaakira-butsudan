<template>
  <div class="wrapper">
    <div class="logo">
      <img src="../assets/images/common/logo.svg" alt="谷川彰仏壇店">
    </div>

    <div class="txt">
      <h1><img src="../assets/images/top/txt_001.svg" alt="至宝"></h1>
      <p><img src="../assets/images/top/txt_002.svg" alt="伝統工芸が極めた匠が織りなす唯一無二のモノ"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top'
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/common";

.wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: #fff url("../assets/images/top/bg_top001.jpg") 50% 50% no-repeat;
  background-size: cover;

  @include media( md ) {
    height: 100vh;
  }

  @include media( lg ) {
    padding-left: 150px;
  }
}

.logo {
  @include media( lg ) {
    display: none;
  }
}

.txt {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 28px;

  h1 {
    margin-right: 24px;
    height: 128px;
  }

  img {
    width: auto;
    height: 100%;
  }

  @include media( lg ) {
    flex-direction: column;
    margin-top: 0;
    height: auto;

    h1 {
      margin-right: 0;
      height: auto;
    }

    p {
      margin-top: 42px;
    }

    img {
      width: auto;
      height: auto;
    }
  }
}
</style>
