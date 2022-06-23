<template>
  <section class="pc-index-section banner-section">
    <video src="https://webstatic.ys4fun.com/skzy/video/banner-bg.mp4"
           poster="/main/pub_images/video/1.jpg"
           autoplay="autoplay"
           muted="muted"
           loop="loop"
           playsinline=""
           class="bg"></video>
    <div class="right-nav"></div>
    <div class="session-content">
      <div class="content">
        <div class="plus"
             @click="showTip"></div>
        <div class="banner-content">
          <div class="slogan"></div>
          <div class="dl-box">
            <div class="video-btn">
              <div class="play-icon"
                   @click="play"></div>
            </div>
            <div class="cl-dl-box">
              <a href=""
                 class="cl-dl-btn dl-appstore"></a>
              <a href=""
                 class="cl-dl-btn dl-android"></a>
              <a href=""
                 class="cl-dl-btn dl-taptap"></a>
            </div>
            <div class="qrcode-dl-box play-icon"></div>
            <div class="monitor-dl-btn"></div>
          </div>
        </div>
      </div>

    </div>

    <YsDialog v-model="show"></YsDialog>
  </section>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showTip() {
      this.show = true;
    },
    play() {
      this.$bus.$emit(
        "video",
        "https://ys4fun-prod-pub.oss-cn-hangzhou.aliyuncs.com/game-site/video/a46ed882-54b1-49fc-8cac-81a1fceb3123.mp4"
      );
    },
  },
};
</script>

<style>
</style>