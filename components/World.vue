<template>
  <section class="pc-index-section world-section">
    <div class="session-content">
      <div class="content">
        <div class="world-box">
          <div class="world-nav">
            <div class="nav-item"
                 @click="setWorld(item,index)"
                 :class="{active:item.name === world.name}"
                 v-for="item,index in worlds"
                 :key="index">
              <span class="title">{{item.name}}</span>
            </div>
          </div>
          <div v-swiper="swiperOption"
               class="world-swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide world-view"
                   :class="`level${item}`"
                   v-for="item in [0,1,2,3,4]"
                   :key="item">
              </div>
            </div>
            <div slot="pagination"
                 class="world-pagination swiper-pagination"></div>
          </div>
        </div>
        <div class="world-desc">
          <div class="tip-num">
            <div class="num">{{world.num}}</div>
            <div class="zh">{{world.zh}}</div>
            <div class="en">INFORMATION</div>
          </div>
          <div class="delive"></div>
          <div class="detail">{{world.detail}}</div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  data() {
    return {
      world: {},
      worlds: [
        {
          name: "Gaea系统",
          num: "NO.01",
          zh: "信息",
          en: "INFORMATION",
          detail:
            "灾难发生后，世界政府紧急研制出了可供所有人类上传意识的数据世界Gaea.Zero。因研发时间与稳定性的限制，生成世界的内部法则基本沿用了22世纪的旧世界资料。十个战区的人类被划分到十个文化各异的原质区大陆，遵循着世界政府的引导，开始沿通往乐园的世界线——依托比尔轴前进。",
        },
        {
          name: "表层",

          num: "NO.02",
          zh: "信息",
          en: "INFORMATION",
          detail:
            "Gaea世界展示在外层的结构层，也是可供人类意识体生存的原质区所在的层区，和源层之间存在有通道可以互相往来，当然仅限于修正者和视骸有能力开启。",
        },
        {
          name: "源层",

          num: "NO.03",
          zh: "信息",
          en: "INFORMATION",
          detail:
            "Gaea世界中，与普通人类生活的表层位面相对应的里层位面，储存着世界系统的原始数据，能够修复表层世界出现的错误和破坏。但一旦源层遭到破坏，就会反作用于表层，形成各种严重的灾难。",
        },
        {
          name: "视骸",

          num: "NO.04",
          zh: "信息",
          en: "INFORMATION",
          detail:
            "从源层诞生，对文明具有无差别攻击欲望的怪物。目前产生原因不明，近年来出现了可以打开源层裂口的类型，骸震便是由这种活动产生的附属品。",
        },
        {
          name: "深空之眼",

          num: "NO.04",
          zh: "信息",
          en: "INFORMATION",
          detail:
            "奥丁建立的对战视骸的修正者组织，以及同名的综合投资公司。目前组织人员都并入了深空之眼公司，大多拥有双重身份，一些修正者以公司员工的身份在人类社会活动。",
        },
      ],
      swiperOption: {
        direction: "vertical",
        pagination: {
          el: ".world-pagination",
          clickable: true,
          // 分页的类型是自定义的----必填项
          type: "custom",
          // 自定义特殊类型分页器，当分页器类型设置为自定义时可用。
          renderCustom: (swiper, current, total) => {
            this.world = this.worlds[current - 1];
          },
        },
      },
    };
  },
  mounted() {
    this.world = this.worlds[0];
  },
  methods: {
    setWorld(world, i) {
      this.world = world;
      this.setPage(i);
    },
    setPage(page) {
      this.$swiper.slideTo(page, 600);
    },
  },
};
</script>

<style lang="scss">
.world-section {
  background: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/4.1bd4cac.jpg)
    50% no-repeat;
  background-size: cover;
}
.world-box {
  display: flex;
  align-items: center;

  .world-nav {
    height: 288px;
    width: 310px;
    position: relative;
    padding: 28px 0 39px 60px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    &::before {
      content: "";
      background: url(data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDc2IDM4MCI+PGRlZnM+PHN0eWxlPi5jbHMtMSwuY2xzLTJ7ZmlsbDojZmZmO2ZpbGwtcnVsZTpldmVub2RkO30uY2xzLTF7b3BhY2l0eTowLjQ7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQzLjA4LDY4LjU5aDd2MWgtN1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00My4wOCwxMjkuNTloN3YxaC03WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQzLjA4LDE4Ny41OWg3djFoLTdaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNDMuMDgsMjQ2LjU5aDd2MWgtN1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00My4wOCwzMTAuNTloN3YxaC03WiIvPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTU2LjIsMzY1djFoLTI3VjEzaDI3djFoLTI2VjM2NVoiLz48L3N2Zz4=)
        0 no-repeat;
      background-size: contain;
      height: 350px;
      width: 310px;
      position: absolute;
      top: 0;
      left: 0;
    }

    .nav-item {
      position: relative;
      height: 40px;
      line-height: 40px;
      font-size: 0;

      .title {
        font-size: 26px;
        font-weight: 700;
        filter: drop-shadow(0 3px 3px rgba(0, 0, 0, 0.5));
        color: #fff;
        cursor: pointer;
        line-height: inherit;
      }
    }

    .active {
      .title {
        color: #f9c742;
      }
    }
  }
}

.world-desc {
  max-width: 1109px;
  height: 145px;
  margin-left: 50px;
  background: rgba(66, 66, 66, 0.23);
  background: linear-gradient(90deg, rgba(66, 66, 66, 0.23) 80%, transparent);
  border-left: 14px solid #f9c742;
  display: flex;
  align-items: center;

  .tip-num {
    padding: 0 25px;

    .num {
      font-size: 22px;
      font-weight: 700;
      color: #fff;
    }

    .zh {
      font-size: 34px;
      font-weight: 700;
      color: #fff;
    }

    .en {
      margin-top: 5px;
      font-size: 12px;
      font-weight: 400;
      color: #fff;
      transform: scale(0.8);
      transform-origin: left center;
    }
  }

  .delive {
    width: 5px;
    height: 77px;
    background-color: #b3b3b3;
  }

  .detail {
    font-size: 16px;
    color: #fff;
    line-height: 1.6;
    padding: 0 20px;
  }
}

.world-swiper {
  width: 800px;
  height: 560px;

  .world-view {
    background-position: 50%;
    background-repeat: no-repeat;

    &.level0 {
      background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/1.0a82d19.png);
    }
    &.level1 {
      background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/2.a174f47.png);
    }
    &.level2 {
      background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/3.d4a1eb1.png);
    }
    &.level3 {
      background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/4.79573d5.png);
    }
    &.level4 {
      background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/5.a5e86b1.png);
    }
  }
}
</style>