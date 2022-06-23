<template>
  <div class="nav-line">
    <ul>
      <li @click="setPage(item.index)"
          v-for="item in navLines"
          :key="item.index"
          :class="`${item.class}${item.index === page ? ' active' : ''}`"></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NavLine",
  data() {
    return {
      navLines: [
        { index: 0, class: "home" },
        { index: 1, class: "news" },
        { index: 2, class: "character" },
        { index: 3, class: "world" },
        { index: 4, class: "feature" },
        { index: 5, class: "media" },
      ],
    };
  },
  computed: {
    ...mapState(["page"]),
  },
  methods: {
    setPage(index) {
      this.$bus.$emit("mainSwiperGo", index);
    },
  },
};
</script>

<style lang="scss">
.nav-line {
  position: absolute;
  top: 15%;
  right: 5%;
  z-index: 99;
  margin-right: 1.365rem;
  transition: all 0.6s;

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: -12px;
  }

  li {
    position: relative;
    width: 109px;
    height: 39px;
    background-position: 100%;
    background-repeat: no-repeat;
    cursor: pointer;
    transition: all 0.6s;

    + li {
      margin-top: 40px;
    }

    &.active {
      width: 171px;
      height: 63px;
    }

    &:hover {
      width: 171px;
      height: 63px;
    }

    &.home {
      background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/home.4125f30.png);

      &:hover {
        background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/home-active.b3b8694.png);
        background-position: 5px;
      }

      &::after {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        right: -48px;
        top: -44px;
        background: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/circle.b2c56ca.png);
        transition: all 0.3s;
      }
    }
    &.news {
      background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/news.6444e09.png);

      &.active,
      &:hover {
        background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/news-active.1634fa5.png);
        background-position: 5px;
      }
    }
    &.character {
      background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/character.56d9e3f.png);

      &.active,
      &:hover {
        background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/character-active.d0f9778.png);
        background-position: 5px;
      }
    }
    &.world {
      background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/world.388f9db.png);

      &.active,
      &:hover {
        background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/world-active.fc57df1.png);
        background-position: 5px;
      }
    }
    &.feature {
      background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/feature.e5f9718.png);

      &.active,
      &:hover {
        background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/feature-active.4bef524.png);
        background-position: 5px;
      }
    }
    &.media {
      background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/media.fff1eaa.png);

      &.active,
      &:hover {
        background-image: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/media-active.b914acf.png);
        background-position: 5px;
      }
    }
  }
}
</style>