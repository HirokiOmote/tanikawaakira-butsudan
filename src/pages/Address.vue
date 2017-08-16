<template>
  <div class="wrapper">
    <div class="map">
      <img src="../assets/images/address/img_map.svg" alt="地図">
    </div>

    <div class="address">
      <p>富山県富山市上二杉216-4</p>
      <p><a href="https://goo.gl/maps/RyT6MKCAn4L2" target="_blank">≫Googlemapで見る</a></p>
    </div>
    <p class="tel">TEL：076-467-3569</p>
    <p>TEL：076-467-3569</p>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 150px;
  height: 100vh;
  background: rgba(#000, .85) url("../assets/images/address/bg_address.jpg") 50% 50% no-repeat;
  background-size: cover;
  font-size: 1.4rem;
  line-height: 1.45;
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
