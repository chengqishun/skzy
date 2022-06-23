<template>
  <div class="pc-page-content">
    <div class="pc-container">
      <div class="page-content-container">
        <div class="pc-breadcrumb">
          <a href="/"
             class="breadcrumb-item nuxt-link-active">首页</a>
          <span class="breadcrumb-separator">></span>
          <a href="/news"
             class="breadcrumb-item">新闻情报</a>
          <span class="breadcrumb-separator">&gt;</span>
          <span class="breadcrumb-item">公告</span>
        </div>
        <div class="article">
          <div class="article-content">
            <h1><span class="type">
                【{{ typeFormat(type) }}】
              </span>
              {{title}}
            </h1>
            <div class="pub-date">
              发布时间：{{ format(pubDate) }}
            </div>
            <div class="divide">

            </div>
            <div class="content-box">
              <div class="content"
                   v-html="content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tool from "@/mixin/tool.js";
export default {
  mixins: [tool],
  data() {
    return {};
  },
  validate() {
    console.log();
    return true;
  },
  async asyncData({ $axios, params }) {
    console.log(params);
    const res = await $axios.get(
      "https://open.ys4fun.com/game-website-server/pass/game/news/get_info",
      {
        params: {
          websiteId: 1,
          newsId: params.id,
        },
      }
    );

    return { ...res.data.data };
  },
};
</script>

<style lang="scss">
.pc-page-content {
  background: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/bg-more-page.4204bfd.jpg);
  background-position: top;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  padding-top: 80px;

  .pc-container {
    max-width: 1310px;
    min-width: 1000px;
    position: relative;
    margin-left: auto;
    margin-right: auto;

    .page-content-container {
      width: 1050px;
      margin-right: auto;
      padding-left: 66px;
      padding-bottom: 50px;
      overflow: hidden;
    }

    .pc-breadcrumb {
      text-align: right;
      margin-top: 42px;
      font-size: 16px;

      .breadcrumb-item {
        font-weight: 400;
        text-decoration: none;
        transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        color: #fff;
      }

      .breadcrumb-separator {
        margin: 0 6px;
        font-weight: 400;
        color: #fff;
      }
    }

    .article {
      min-height: 100%;
      margin-top: 37px;

      .article-content {
        h1 {
          font-size: 36px;
          color: #fff;
          font-weight: 700;
          line-height: 1.2;
          text-align: center;
          padding: 0 50px;

          .type {
            color: #ffae4e;
          }
        }

        .pub-date {
          font-size: 16px;
          color: #d9d9d9;
          margin-top: 20px;
        }

        .divide {
          width: 100%;
          border-top: 1px solid #ddd;
          margin: 20px 0;
        }

        .content-box {
          .content {
            font-size: 16px;
            position: relative;
            color: #fff;
            line-height: 1.6;
          }
        }
      }
    }
  }
}
</style>