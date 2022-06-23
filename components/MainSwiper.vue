<template>
  <div v-swiper="swiperOption"
       class="index-swiper">
    <div v-if="page !== 0"
         class="right-nav"
         style="background-position-y: -8.84rem;"></div>
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <Home></Home>
      </div>
      <div class="swiper-slide">
        <News></News>
      </div>
      <div class="swiper-slide">
        <Characters></Characters>
      </div>
      <div class="swiper-slide">
        <World></World>
      </div>
      <div class="swiper-slide">
        <Feature></Feature>
      </div>
      <div class="swiper-slide">
        <VideoComic></VideoComic>
      </div>
    </div>
    <div slot="pagination"
         class="index-pagination swiper-pagination"></div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "MainSwiper",
  data() {
    return {
      swiperOption: {
        direction: "vertical",
        slidesPerView: 1,
        mousewheel: true,
        speed: 600,
        pagination: {
          el: ".index-pagination",
          clickable: true,
          // 分页的类型是自定义的----必填项
          type: "custom",
          // 自定义特殊类型分页器，当分页器类型设置为自定义时可用。
          renderCustom: (swiper, current, total) => {
            this.setPage(current - 1);
          },
        },
      },
    };
  },
  computed: {
    ...mapState(["page"]),
  },
  beforeMount() {},
  mounted() {
    this.$bus.$on("mainSwiperGo", (i) => {
      this.$swiper.slideTo(i, 600);
    });
  },
  methods: {
    ...mapMutations(["setPage"]),
  },
};
</script>

<style lang="scss">
.index-swiper {
  height: 100vh;
}

.right-nav {
  position: absolute;
  right: 5%;
  top: 0;
  width: 2.73rem;
  height: 100%;
  background: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/world-tree.5e25d71.png)
    top no-repeat;
  background-size: 100% auto;
  background-position-y: -3.84rem;
  top: auto;
  bottom: 0;
  z-index: 98;
  transition: all 0.6s;
}

.pc-index-section {
  height: 100vh;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    height: 1.1rem;
    width: 100%;
    background: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/light.df96f6c.png)
      50% no-repeat;
    background-size: cover;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
  }

  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .right-nav {
    position: absolute;
    right: 5%;
    width: 2.73rem;
    height: 3.84rem;
    background: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/world-tree.5e25d71.png)
      top no-repeat;
    background-size: 100% auto;
    top: auto;
    bottom: 0;
  }

  .session-content {
    position: relative;
    z-index: 2;
    height: 100%;
    padding-top: 135px;
    margin-left: 10%;
    margin-right: auto;
    max-width: 1310px;
    min-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .content {
      width: 100%;
      height: 100%;
      position: relative;
      .plus {
        width: 0.96rem;
        height: 1.13rem;
        background: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/16plus.8db500a.png)
          no-repeat;
        background-size: contain;
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        cursor: pointer;
      }

      .banner-content {
        position: absolute;
        left: 0;
        bottom: 20%;
        -webkit-transform-style: preserve-3d;
        -webkit-backface-visibility: hidden;
        padding-left: 0.3rem;

        .slogan {
          width: 6.46rem;
          height: 1.48rem;
          background: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/slogan.623db11.png)
            no-repeat;
          background-size: contain;
          margin-left: -0.9rem;
        }

        .dl-box {
          display: flex;
          justify-content: flex-start;
          margin-top: 0.3rem;

          .video-btn {
            width: 1.33rem;
            height: 1.33rem;
            background: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/play-bg.c8767c3.png)
              no-repeat;
            background-size: contain;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            &:hover {
              .play-icon {
                background-position: -0.1rem -4.49rem;
              }
            }

            .play-icon {
              width: 0.44rem;
              height: 0.53rem;
              background: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/dl-btn-sprites.ad5570e.png)
                no-repeat;
              background-size: 1.63rem 10.2rem;
              background-position: -0.1rem -3.76rem;
              position: relative;

              &::before {
                content: "";
                position: absolute;
                top: 50%;
                left: 50%;
                margin-left: -0.43rem;
                margin-top: -0.405rem;
                width: 0.81rem;
                height: 0.81rem;
                background: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/dl-btn-sprites.ad5570e.png)
                  no-repeat;
                background-size: 1.63rem 10.2rem;
                background-position: -0.1rem -5.22rem;
                -webkit-animation: circle 5s linear infinite;
                animation: circle 5s linear infinite;
                animation: 5s rotate infinite linear; //linear 匀速运动
              }
            }
          }

          .cl-dl-box {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-left: 0.1rem;

            .cl-dl-btn {
              display: block;
              width: 1.43rem;
              height: 0.41rem;
              background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/dl-btn-sprites.ad5570e.png);
              background-size: 1.63rem 10.2rem;
              cursor: pointer;
            }

            .dl-appstore {
              background-position: -0.1rem -1.93rem;
            }

            .dl-android {
              background-position: -0.1rem -0.71rem;
            }

            .dl-taptap {
              background-position: -0.1rem -3.15rem;
            }
          }

          .qrcode-dl-box.play-icon {
            height: 1.33rem;
            width: 1.18rem;
            margin-left: 0.1rem;
            background: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/qrcode-dl.db23376.png)
              no-repeat;
            background-size: contain;
          }

          .monitor-dl-btn {
            display: block;
            width: 0.28rem;
            height: 1.33rem;
            background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/dl-btn-sprites.ad5570e.png);
            background-size: 1.63rem 10.2rem;
            background-position: -0.1rem -8.77rem;
            cursor: pointer;
          }
        }
      }
    }
  }
}

.news-section {
  background: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/2.b398f31.jpg)
    50% no-repeat;
  background-size: cover;
  .banner-box {
    &::before {
      content: "";
      position: absolute;
      left: 703px;
      top: 290px;
      width: 232px;
      height: 160px;
      background: rgba(49, 51, 51, 0.61);
      box-shadow: 5px 5px 0 0 rgba(0, 0, 0, 0.16);
      opacity: 0.16;
    }
  }
  .news-box {
    .new-list-box {
      .news-item {
        height: 35px;
        line-height: 35px;
        background: hsla(0, 0%, 100%, 0.5);
        padding: 0 58px 0 76px;
        font-size: 16px;
        font-weight: 700;
        margin-top: 15px;

        &:hover {
          background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/title-active.757910d.png);
          a {
            color: white !important;
          }
        }

        a {
          color: #727272;
          display: block;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .type {
          margin-left: 32px;
        }

        .title {
          margin-left: 18px;
          font-size: 16px;
          font-weight: 700;
          width: 455px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: inline-block;
        }

        .more {
          font-size: 12px;
          font-weight: 700;
          margin-left: auto;
        }
      }

      .list-more {
        position: relative;
        margin-top: 30px;
      }

      .more-btn {
        display: block;
        width: 145px;
        height: 27px;
        line-height: 27px;
        background: #666767;
        color: #fff;
        text-align: center;
        position: relative;
        font-size: 16px;

        &::before {
          content: "";
          position: absolute;
          top: 8px;
          left: 10px;
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-left: 8px solid #fff;
        }
      }
    }
  }
  .home-news-box {
    margin-top: 20px;
    width: 886px;

    .tab-bar {
      display: flex;

      .active {
        color: #333;
      }
      li {
        width: 180px;
        font-size: 26px;
        color: #777;
        position: relative;
        text-align: center;
        font-weight: 700;
        cursor: pointer;

        + li {
          &::before {
            content: "";
            width: 2px;
            height: 18px;
            background: #888;
            position: absolute;
            left: 0;
            top: 8px;
          }
        }
      }
    }
  }
}
</style>