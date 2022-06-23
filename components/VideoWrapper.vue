<template>
  <div v-if="show"
       class="modal video-wrapper">
    <div ref="cover"
         class="cover"></div>
    <div class="modal-content">
      <div class="vc-box"><video autoplay
               preload=""
               controls="controls"
               controlslist="nodownload"
               poster=""
               playsinline="">
          <source :src="src"
                  type="video/mp4">
        </video></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      src: "",
    };
  },
  mounted() {
    this.$bus.$on("video", (src) => {
      this.src = src;
      this.show = true;
      this.$nextTick(() => {
        this.$refs.cover.addEventListener("click", (e) => {
          this.show = false;
        });
      });
    });
  },
};
</script>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10500;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  outline: 0;

  .cover {
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
  }

  .vc-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 95%;
    max-height: 90%;
    padding: 15px 10px;

    video {
      width: auto;
      height: auto;
      width: 90vw;
      max-width: 900px;
      max-height: 80vh;
      cursor: pointer;
      outline: 0;
    }
  }
}
</style>