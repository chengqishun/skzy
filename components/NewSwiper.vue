<template>
  <div class="banner-box">
    <div v-swiper="swiperOption"
         class="news-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide"
             v-for="item in gameBannerList"
             :key="item.id">
          <a target="_brank"
             :href="item.targetUrl"><img :src="item.pcUrl"
                 alt=""></a>
        </div>
      </div>
    </div>
    <div slot="pagination"
         class="banner-pagiantion-box">
      <div id="news-banner-pagination"
           class="swiper-pagination-clickable swiper-pagination-bullets">
        <span class="swiper-pagination-bullet"
              :class="{'swiper-pagination-bullet-active': item == current}"
              @click="setPage(item)"
              v-for="item in [1,2,3]"
              :key="item">0{{item}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "NewSwiper",
  data() {
    return {
      current: 1,
      swiperOption: {
        // 配置说明直接看官网
        centeredSlides: true,
        speed: 600,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".banner-pagiantion-box",
          clickable: true,
          type: "custom",
          // 自定义特殊类型分页器，当分页器类型设置为自定义时可用。
          renderCustom: (swiper, current, total) => {
            this.current = current;
          },
        },
      },
      gameBannerList: [],
    };
  },
  beforeMount() {},
  mounted() {
    this.getGameBanner();
  },
  methods: {
    setPage(page) {
      this.$swiper.slideTo(page - 1, 600);
    },
    getGameBanner() {
      axios
        .get(
          "https://open.ys4fun.com/game-website-server/pass/game/image/list",
          {
            params: {
              websiteId: 1,
              current: 1,
              size: 3,
              type: "gameBanner",
            },
          }
        )
        .then(({ data }) => {
          this.gameBannerList = data.data.records;
        });
    },
  },
};
</script>

<style lang="scss">
.news-swiper {
  width: 826px;
  height: 434px;
  margin-left: 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3), 0 12px 20px rgba(38, 38, 38, 0.4),
    -20px -20px 0 hsla(0, 0%, 87.8%, 0.12);
}

.banner-pagiantion-box {
  width: 238px;
  position: absolute;
  left: 683px;
  top: 310px;
  z-index: 99;
}

#news-banner-pagination {
  text-align: right;
  -webkit-transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  font-size: 0;

  span {
    width: 156px;
    height: 16px;
    font-size: 16px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAAAQBAMAAAAR5AvdAAAAIVBMVEVoaGhlZWViYmJfX19VVlZbXFxRUlJOT09YWVlLTExHSUmzYsw/AAABAElEQVQ4y4WTwQ2DMAxFywbACHSDIjZALICQMkAURkC995AVYAMyZbEDNjEk/AGenv3tVyJZsaesfN41ZoDYLb8WYnwmSJSV58WRA4a0pmkCWmc6ggEulkK61cLNIk0DbJwecDnbkRvKyUkD2jdGE4vjvW08pcjNoJxHzVtidnJzHtajmyI5rQHGtPmxh8CNaWJSgKXsQtrn5GbJzWimpXCyhmpvoadJudQzbV1vaSRXUqnolqQti3Mu3UPgBqUOgjYyzUFuR2U5fgaEsVsraM4n3QOXutPU9Xy92ypw4h94c+JCbCsXh24Ju+wi1/TCjWnkFrULehCPeqrB0KiO8geQZiEHx4h7vQAAAABJRU5ErkJggg==)
      100% 0 no-repeat;
    border-radius: 0;
    text-align: right;
    color: #fff;
    display: inline-block;
    opacity: 1;
    margin: 13px 0 0;
    transition: all 0.3s;
    padding-right: 5px;
  }

  .swiper-pagination-bullet {
    width: 156px;
    height: 16px;
    font-size: 16px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAAAQBAMAAAAR5AvdAAAAIVBMVEVoaGhlZWViYmJfX19VVlZbXFxRUlJOT09YWVlLTExHSUmzYsw/AAABAElEQVQ4y4WTwQ2DMAxFywbACHSDIjZALICQMkAURkC995AVYAMyZbEDNjEk/AGenv3tVyJZsaesfN41ZoDYLb8WYnwmSJSV58WRA4a0pmkCWmc6ggEulkK61cLNIk0DbJwecDnbkRvKyUkD2jdGE4vjvW08pcjNoJxHzVtidnJzHtajmyI5rQHGtPmxh8CNaWJSgKXsQtrn5GbJzWimpXCyhmpvoadJudQzbV1vaSRXUqnolqQti3Mu3UPgBqUOgjYyzUFuR2U5fgaEsVsraM4n3QOXutPU9Xy92ypw4h94c+JCbCsXh24Ju+wi1/TCjWnkFrULehCPeqrB0KiO8geQZiEHx4h7vQAAAABJRU5ErkJggg==)
      100% 0 no-repeat;
    border-radius: 0;
    text-align: right;
    color: #fff;
    display: inline-block;
    opacity: 1;
    margin: 13px 0 0;
    transition: all 0.3s;
    padding-right: 5px;
  }

  .swiper-pagination-bullet-active {
    width: 238px;
    background: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/01.3ca183b.png)
      100% 0 no-repeat;
  }
}
</style>