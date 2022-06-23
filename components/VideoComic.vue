<template>
  <section class="pc-index-section news-section video_comic">
    <div class="session-content">
      <div class="content">
        <div class="title">
          <img src="@/static/img/VideoComic.svg"
               alt="">
        </div>
        <div class="media-list">
          <a href="https://skzy.ys4fun.com/main/video/"
             target="_blank"
             class="media-item video">
            <div class="item-link">READ MORE +</div>
          </a>
          <a href="https://skzy.ys4fun.com/main/wallpaper/"
             target="_blank"
             class="media-item wallpaper">
            <span class="item-link">READ MORE +</span>
          </a>
          <a href="https://skzy.ys4fun.com/main/fanart/"
             target="_blank"
             class="media-item tongren">
            <span class="item-link">READ MORE +</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.title {
  img {
    height: 55px;
  }
}
.media-list {
  display: flex;
  justify-content: flex-start;
  margin-top: 38px;

  a {
    color: #7e8c8d;
    text-decoration: none;
    -webkit-backface-visibility: hidden;
  }

  .media-item {
    position: relative;
    width: 291px;
    height: 298px;
    display: block;

    + .media-item {
      margin-left: 30px;
    }
    &.video {
      background: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/video.eb98936.png)
        50% no-repeat;
    }

    &.wallpaper {
      background: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/wallpaper.8fea4e5.png)
        50% no-repeat;
    }

    &.tongren {
      background: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/comics.0c6b653.png)
        50% no-repeat;
    }

    &:hover {
      .item-link {
        background: #303030;
        border-left: 5px solid #ffae4e;
      }
    }

    .item-link {
      position: absolute;
      left: 50%;
      top: 85%;
      transform: translate(-50%, -50%);
      display: block;
      width: 186px;
      height: 31px;
      line-height: 31px;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.2);
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      color: #fff;
      border-left: 5px solid transparent;
      cursor: pointer;
    }
  }
}

.video_comic {
  .session-content {
    padding-top: 200px;
    margin-left: 15%;
  }
}
</style>