<template>
  <div class="wrapper">
    <div class="txt-headding">所在地</div>

    <div class="container">
      <div class="map">
        <img src="../assets/images/address/img_map.svg" alt="地図">
      </div>

      <div class="address">
        <p>富山県富山市上二杉216-4</p>
        <p><a href="https://goo.gl/maps/RyT6MKCAn4L2" target="_blank">≫Googlemapで見る</a></p>
      </div>
      <p class="tel">TEL：076-467-3569</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Address',
  metaInfo: {
    title: '所在地',
    meta: [{
      name: 'description', content: '富山県富山市にある谷川彰仏壇の店舗情報ページです。谷川彰仏壇は富山県の富山市上二杉にあります。もし場所がお分かりになられない場合やお問合わせの際はお気軽にお電話下さい。'
    }]
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/common";

.txt-headding {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 46px;
  font-size: 2.0rem;

  @include media( md ) {
    display: none;
  }
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  min-height: calc( 568px - 46px - 1.1rem - 30px);
  height: calc( 100vh - 46px - 1.1rem - 30px);
  background: rgba(#000, .85) url("../assets/images/address/bg_address.jpg") 50% 50% no-repeat;
  background-size: cover;
  font-size: 1.4rem;
  line-height: 1.45;

  @include media( md ) {
    height: calc( 100vh - 1.1rem - 30px );
  }

  @include media( lg ) {
    padding: 0 0 0 150px;
  }
}

.address {
  margin-top: 44px;
}

.tel {
  margin-top: 1em;
}

p {
  text-align: center;
}

a {
  color: #ffad00;
}

</style>
