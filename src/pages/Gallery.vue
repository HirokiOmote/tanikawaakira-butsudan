<template>
  <div class="wrapper">
    <div class="txt-headding">ギャラリー</div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>

    <ul>
      <li
        class="image"
        v-for="image, imageIndex in images"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')' }">
      </li>
    </ul>
  </div>
</template>

<script>
import VueGallery from 'vue-gallery'

export default {
  name: 'Garelly',
  components: {
    'gallery': VueGallery
  },
  metaInfo: {
    title: 'ギャラリー',
    meta: [{ name: 'description', content: '富山県富山市にある谷川彰仏壇のギャラリーページです。' }]
  },
  data () {
    return {
      images: [
        '/static/images/gallery/img_gallery001.jpg',
        '/static/images/gallery/img_gallery002.jpg',
        '/static/images/gallery/img_gallery003.jpg',
        '/static/images/gallery/img_gallery004.jpg',
        '/static/images/gallery/img_gallery005.jpg',
        '/static/images/gallery/img_gallery006.jpg',
        '/static/images/gallery/img_gallery007.jpg',
        '/static/images/gallery/img_gallery008.jpg',
        '/static/images/gallery/img_gallery009.jpg',
        '/static/images/gallery/img_gallery010.jpg',
        '/static/images/gallery/img_gallery011.jpg',
        '/static/images/gallery/img_gallery012.jpg',
        '/static/images/gallery/img_gallery013.jpg',
        '/static/images/gallery/img_gallery014.jpg',
        '/static/images/gallery/img_gallery015.jpg',
        '/static/images/gallery/img_gallery016.jpg',
        '/static/images/gallery/img_gallery017.jpg',
        '/static/images/gallery/img_gallery018.jpg',
        '/static/images/gallery/img_gallery019.jpg',
        '/static/images/gallery/img_gallery020.jpg',
        '/static/images/gallery/img_gallery021.jpg',
        '/static/images/gallery/img_gallery022.jpg',
        '/static/images/gallery/img_gallery023.jpg',
        '/static/images/gallery/img_gallery024.jpg',
        '/static/images/gallery/img_gallery025.jpg',
        '/static/images/gallery/img_gallery026.jpg',
        '/static/images/gallery/img_gallery027.jpg',
        '/static/images/gallery/img_gallery028.jpg',
        '/static/images/gallery/img_gallery029.jpg',
        '/static/images/gallery/img_gallery030.jpg',
        '/static/images/gallery/img_gallery031.jpg',
        '/static/images/gallery/img_gallery032.jpg',
        '/static/images/gallery/img_gallery033.jpg',
        '/static/images/gallery/img_gallery034.jpg',
        '/static/images/gallery/img_gallery035.jpg',
        '/static/images/gallery/img_gallery036.jpg',
        '/static/images/gallery/img_gallery037.jpg',
        '/static/images/gallery/img_gallery038.jpg',
        '/static/images/gallery/img_gallery039.jpg',
        '/static/images/gallery/img_gallery040.jpg',
        '/static/images/gallery/img_gallery040.jpg',
        '/static/images/gallery/img_gallery041.jpg',
        '/static/images/gallery/img_gallery042.jpg',
        '/static/images/gallery/img_gallery043.jpg',
        '/static/images/gallery/img_gallery044.jpg',
        '/static/images/gallery/img_gallery045.jpg',
        '/static/images/gallery/img_gallery046.jpg',
        '/static/images/gallery/img_gallery047.jpg',
        '/static/images/gallery/img_gallery048.jpg',
        '/static/images/gallery/img_gallery049.jpg',
        '/static/images/gallery/img_gallery050.jpg',
        '/static/images/gallery/img_gallery051.jpg',
        '/static/images/gallery/img_gallery052.jpg',
        '/static/images/gallery/img_gallery053.jpg',
        '/static/images/gallery/img_gallery054.jpg',
        '/static/images/gallery/img_gallery055.jpg',
        '/static/images/gallery/img_gallery056.jpg',
        '/static/images/gallery/img_gallery057.jpg',
        '/static/images/gallery/img_gallery058.jpg',
        '/static/images/gallery/img_gallery059.jpg',
        '/static/images/gallery/img_gallery060.jpg',
        '/static/images/gallery/img_gallery061.jpg',
        '/static/images/gallery/img_gallery062.jpg',
        '/static/images/gallery/img_gallery063.jpg',
        '/static/images/gallery/img_gallery064.jpg',
        '/static/images/gallery/img_gallery065.jpg',
        '/static/images/gallery/img_gallery066.jpg',
        '/static/images/gallery/img_gallery067.jpg',
        '/static/images/gallery/img_gallery068.jpg',
        '/static/images/gallery/img_gallery069.jpg',
        '/static/images/gallery/img_gallery070.jpg',
        '/static/images/gallery/img_gallery071.jpg',
        '/static/images/gallery/img_gallery072.jpg',
        '/static/images/gallery/img_gallery073.jpg'
      ],
      index: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/common";

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  background: rgba(#000, .85) url("../assets/images/gallery/bg_gallery.jpg") 50% 50% no-repeat;
  background-size: cover;

  @include media( lg ) {
    padding: {
      left: 150px;
      bottom: calc( 1.1rem + 30px );
    }
  }
}

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

ul {
  display: flex;
  flex-wrap: wrap;
  padding: 1.5vw;
  max-width: 601.5px;

  @include media( sm ) {
    max-width: 700.5px;
    padding: 55px 0;
  }

  @include media( md ) {
    padding: 55px 0;
  }

  @include media( lg ) {
    max-width: 875.5px;
  }
}

.image {
  margin: 1.5vw;
  max-width: 160px;
  max-height: 160px;
  width: calc(100vw / 3 - 4vw - 0.01px);
  height: calc(100vw / 3 - 4vw - 0.01px);
  background: {
    position: 50% 50%;
    size: cover;
  }

  @include media( sm ) {
    margin: 7.5px;
  }
}
</style>
