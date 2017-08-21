<template>
  <section class="wrapper">
    <div class="txt-headding">匠の技【工程】</div>

    <h1>
      <picture>
        <source media="(min-width: 768px)" srcset="../assets/images/skill/hd_skill_md.svg">
        <source media="(min-width: 320px)" srcset="../assets/images/skill/hd_skill.svg">
        <img src="../assets/images/skill/hd_skill.svg" alt="伝統工芸を極めた匠が織り成す唯一無二の技">
      </picture>
    </h1>

    <ul>
      <li>
        <figure>
          <img src="../assets/images/skill/img_skill001.png" alt="">
          <figcaption>
            <img src="../assets/images/skill/txt_skill001.svg" alt="木地">
          </figcaption>
        </figure>

        <p>木地にはベイマツや合板などは一切使わず、木の曲がりや、変形が少ない国産のクサマキ、イチョウの木のみにこだわる。湿気などにも強いことから、傷みにくく、さらに松と比べても軽量で丈夫なため、谷川仏壇の基礎を支える重要な素材である。</p>
      </li>

      <li>
        <figure>
          <img src="../assets/images/skill/img_skill002.png" alt="">
          <figcaption>
            <img src="../assets/images/skill/txt_skill002.svg" alt="彫刻">
          </figcaption>
        </figure>

        <p>富山高岡仏壇の醍醐味である荘厳華麗なつくりの礎となる木彫りの彫刻は、その道ひとすじ40年余の職人が手がけ、欄間などに繊細な手彫りで厚彫りの仕上げを施し、唯一無二の仏壇の基礎部分を創り上げる。</p>
      </li>

      <li>
        <figure>
          <img src="../assets/images/skill/img_skill003.png" alt="">
          <figcaption>
            <img src="../assets/images/skill/txt_skill003.svg" alt="塗り">
          </figcaption>
        </figure>

        <p>湿気に強く、生花を供えることができるのは本物の漆のみ。塗りあがりの光沢がおちついた雰囲気を醸し出す。漆は「塗りたて仕上げ」に拘る。漆に厚みが出るため、光沢が長持ちする。簡易な手入れを施すだけで20～30年もその艶は維持される。</p>
      </li>

      <li>
        <figure>
          <img src="../assets/images/skill/img_skill004.png" alt="">
          <figcaption>
            <img src="../assets/images/skill/txt_skill004.svg" alt="金箔">
          </figcaption>
        </figure>

        <p>金沢の手打ちの職人が叩いた金箔のみを使用。適量に配合した金を、職人の手で丹念に叩いた金箔は絶妙に漆に馴染み、手仕事ならではの落ち着きのある輝きを放つ。</p>
      </li>

      <li>
        <figure>
          <img src="../assets/images/skill/img_skill005.png" alt="">
          <figcaption>
            <img src="../assets/images/skill/txt_skill005.svg" alt="蒔絵">
          </figcaption>
        </figure>

        <p>蒔絵は漆器や仏具に漆で文様を描き、金、銀などの粉を蒔(ま)きつけて、再び漆を塗り乾燥後研いで光らせる日本独自の漆工芸で、その技法は十数工程にも及び、同じデザインでも色や配色により全く違う作品となり、世界に一つしかない作品が出来上がる。</p>
      </li>

      <li>
        <figure>
          <img src="../assets/images/skill/img_skill006.png" alt="">
          <figcaption>
            <img src="../assets/images/skill/txt_skill006.svg" alt="組立">
          </figcaption>
        </figure>

        <p>職人一人ひとりの手によって、丹念に仕上げられた逸品を、谷川彰自身が最後に魂を吹き込む。それぞれの個性を引き出し、調和させることで宝は完成される。</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Skill'
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

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 100vh;
  background: rgba(#000, .85) url("../assets/images/skill/bg_skill.jpg") 50% 50% no-repeat;
  background-size: cover;

  @include media( lg ) {
    padding: {
      left: 150px;
      bottom: calc( 1.1rem + 30px );
    }
  }
}

h1 {
  padding: 0 15px;
  margin-top: 24px;
  @include media( md ) {
    margin-top: 43px;
  }
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 32px;
  max-width: 743px;
}

li {
  margin: 17.5px;
  max-width: 201px;
  color: #fff;
}

figcaption {
  margin-top: 19px;
}

p {
  margin-top: .7rem;
  font-size: 1.4rem;
  line-height: 1.45;
}

</style>
