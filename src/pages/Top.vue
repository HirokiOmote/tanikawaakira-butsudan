<template>
  <div class="wrapper">
    <top-slide></top-slide>

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
import TopSlide from '@/components/TopSlide'

export default {
  name: 'top',
  components: {
    TopSlide
  },

  metaInfo: {
    title: '富山仏壇・仏具 谷川彰仏壇 │ 富山県富山市の仏壇師',
    titleTemplate: null,
    meta: [{ name: 'description', content: '富山県富山市にある谷川彰仏壇は大正時代初期に創業し、時は流れても脈々と受け継がれてきた職人技は変わらぬ価値を維持し続けている。下地から組み立てまでを一括で行う仏壇職人 3代目「谷川彰」による本物の職人技と共鳴した最高の仏壇をご提供しております。'
    }]
  }
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
  min-height: 568px;
  height: 100vh;

  @include media( md ) {
    height: 100vh;
  }

  @include media( lg ) {
    padding-left: 150px;
  }
}

.logo,
.txt {
  z-index: 2;
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
