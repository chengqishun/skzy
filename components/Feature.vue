<template>
  <div class="pc-index-section feature-section">
    <div class="session-content">
      <div class="content">
        <div class="feature-box">
          <div v-swiper="swiperOption"
               class="feature-swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide"
                   v-for="item in features.records"
                   :key="item.id">
                <img :src="item.pcUrl">
              </div>
            </div>
            <div slot="pagination"
                 class="feature-pagination swiper-pagination"></div>
          </div>
          <div class="feature-prev"
               @click="prev"></div>
          <div class="feature-next"
               @click="next"></div>
        </div>
        <div class="small-view">
          <div class="small-img-box"
               :class="{active:current === index}"
               @click="setPage(index)"
               v-for="item,index in features.records"
               :key="item.id">
            <img :src="item.h5Url">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      current: 0,
      swiperOption: {
        pagination: {
          el: ".feature-pagination",
          clickable: true,
          // 分页的类型是自定义的----必填项
          type: "custom",
          // 自定义特殊类型分页器，当分页器类型设置为自定义时可用。
          renderCustom: (swiper, current, total) => {
            this.current = current - 1;
          },
        },
      },
      features: {},
    };
  },
  async mounted() {
    let res = await axios.get(
      "https://open.ys4fun.com/game-website-server/pass/game/image/list",
      {
        params: {
          websiteId: 1,
          current: 1,
          size: 5,
          type: "gameFeature",
        },
      }
    );
    console.log(res);
    this.features = res.data.data;
  },
  methods: {
    prev() {
      this.$swiper.slidePrev();
    },
    next() {
      this.$swiper.slideNext();
    },
    setPage(i) {
      this.$swiper.slideTo(i, 600);
    },
  },
};
</script>

<style lang="scss">
.feature-section {
  background: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/5.4c1d5ce.jpg)
    50% no-repeat;
  background-size: cover;
}

.feature-box {
  position: relative;
  width: 843px;
  height: 472px;
  margin-left: 50px;

  .feature-box .swiper-slide img {
    width: 100%;
    height: 100%;
  }

  .feature-prev,
  .feature-next {
    width: 39px;
    height: 54px;
    position: absolute;
    top: 50%;
    margin-top: -27px;
    cursor: pointer;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .feature-prev {
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTQ2cHgiIGhlaWdodD0iMjAwcHgiIHZpZXdCb3g9IjAgMCAxNDYgMjAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPlVudGl0bGVkIDI8L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeDI9IjEwMCUiIHkyPSI1MCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgb2Zmc2V0PSIzMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwLjEiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i566t5aS0LeW3piIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIHBvaW50cz0iMTQ1LjA5ODAzOSAyMDAgMTQ1LjA5ODAzOSAxNjQuODQxMjcgNTAuOTQzNzYyMSAxMDAgMTQ1LjA5ODAzOSAzNS4xNTg3MzAyIDE0NS4wOTgwMzkgMCAwIDEwMCI+PC9wb2x5Z29uPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+);
    left: -50px;
  }

  .feature-next {
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTQxcHgiIGhlaWdodD0iMjAwcHgiIHZpZXdCb3g9IjAgMCAxNDEgMjAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPlVudGl0bGVkPC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMTAwJSIgeTE9IjUwJSIgeDI9Ii0xLjI0OTMwNTkxZS0xMiUiIHkyPSI1MCUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgb2Zmc2V0PSIzMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwLjEiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i566t5aS0LeWPsyIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlBhdGgiIHBvaW50cz0iMCAwIDAgMzUuMTU4NzMwMiA5MS40OTUwNTQ5IDEwMCAwIDE2NC44NDEyNyAwIDIwMCAxNDEgMTAwIj48L3BvbHlnb24+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=);
    right: -50px;
  }
}
.small-view {
  width: 900px;
  margin-left: -50px;
  margin-top: 28px;
  height: 90px;
  background: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwNDYgNjIiPjxkZWZzPjxzdHlsZT4uY2xzLTEsLmNscy0ye2ZpbGw6I2ZmZjtmaWxsLXJ1bGU6ZXZlbm9kZDt9LmNscy0ye29wYWNpdHk6MC41O308L3N0eWxlPjwvZGVmcz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMDEyLjg3LDExLjE5aDYuOXYzN2gtNi45WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE5Ljc4LDExLjE5aDYuOXYzN2gtNi45WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTI2Ljc4LDMwLjE4di0xaDk4NnYxWiIvPjwvc3ZnPg==)
    50% no-repeat;
  background-size: contain;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px 0 70px;

  .small-img-box {
    width: 158px;
    height: 90px;
    position: relative;
    cursor: pointer;

    img {
      vertical-align: top;
      width: 158px;
      height: 90px;
    }

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: rgba(0, 0, 0, 0.5);
    }

    &.active {
      &::after {
        background: 0 0;
      }
    }
  }
}
</style>