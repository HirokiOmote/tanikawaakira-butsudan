<template>
  <div class="wrapper">
    <div class="container">
      <p><img class="logo" src="../assets/images/about/logo_about.svg" alt="谷川彰">谷川仏壇のおこりは大正時代初期に創業した先代祖父の谷川林太郎まで遡る。大正から昭和、平成と時は流れても脈々と受け継がれてきた職人技は変わらぬ価値を維持し続けている。3代目である「谷川彰」は伝統技術の体現者が少なくなっていく中で、下地から組み立てまでを一括で行える、日本でも数少なくなってきた仏壇職人のひとりである。</p>
      <p>The history of Tanigawa Buddhist altar dates back to the beginning of Taisho Era when his grandfather Rintaro Tanigawa founded the business.  As time went by from Taisho, Showa to Heisei Era, the craftsmanship descended down consistently and maintained its unchanged value. The third generation “Akira Tanigawa”, is one of the few craftsmen of Buddhist altars in Japan, embodying the traditional techniques in starting from the groundwork to assembling to finished altars in one stretch.</p>
      <p>多くの仏壇の素材が外国産木材や合成漆などを使うよう変化しても、谷川は頑なに「国産」「本物」「妥協しない」素材を使うことにこだわり続けてきた。それは、本物の素材を使用することでしか、本物の職人技と共鳴した最高の仏壇は出来上がらないことを知っているからである。本物の素材を使い、丹念に仕上げた谷川の仏壇は、定期的な手入れを施せば最低でも70～80年は使用することができる。独立後、約100本以上の仏壇を手掛けてきたが、品質に関わるクレームは無く、圧倒的な顧客満足度を誇っている。他社の既製品であっても、谷川の手入れにより輝きを取り戻す仏壇も多く、ユーザーから支持されている。</p>
      <p>While the material for many altars have changed to foreign woods and composite lacquer,  Tanigawa persists in dwelling on “domestic”  and “authentic” materials, without “compromising” with alternate materials.  He knows that only authentic materials can complete the utmost altars that correspond to the real craftsmanship.  Tanigawa’s Buddhist altars made of authentic materials and finished with meticulous techniques last at least 70 to 80 years, if used with periodic care.  After starting his own business, he produced more than 100 altars, for which there have been no complaints raised as regards its quality, and he boasts of outstanding customer satisfaction.  Many ready-made alters made by other companies, under Tanigawa’s care and repair, regain original brilliance, thus winning wide customer confidence.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Address'
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/common";

.wrapper {
  display: flex;
  justify-content: center;
  padding: 30px 0 0 150px;
  min-height: 100vh;
  background: rgba(#000, .85) url("../assets/images/about/bg_about.jpg") 50% 50% no-repeat;
  background-size: cover;
  font-size: 1.4rem;
  line-height: 1.45;
}

.container {
  position: relative;
  max-width: 37em;

  &::before {
    position: absolute;
    right: 0;
    top: 0;
    content: url("../assets/images/about/img_about.png");
  }

  @include media( md ) {
    max-width: calc( 37em + 262px );
    padding-right: 262px;
  }
}

.logo {
  margin: 0 22px 27px 0;
  float: left;
}

p {
  position: relative;
  text-align: justify;

  + p {
    margin-top: 1em;
  }
}

</style>
