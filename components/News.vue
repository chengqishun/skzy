<template>
  <section class="pc-index-section news-section">
    <div class="session-content">
      <div class="content">
        <NewSwiper></NewSwiper>
        <div class="news-box home-news-box">
          <ul class="tab-bar">
            <li :class="{active:item.title === newActiveTitle}"
                @click="newTypeChange(item)"
                v-for="item,index in news"
                :key="index">{{item.title}}</li>
          </ul>
          <div class="new-list-box">
            <div class="news-item"
                 v-for="item in newList"
                 :key="item.id">
              <a :href="`/article/${item.id}`">
                <span class="date">{{format(item.disDate)}}</span>
                <span class="type">{{typeFormat(item.type)}}</span>
                <span class="title">{{item.title}}</span>
                <span class="more">READ MORE +</span>
              </a>
            </div>
            <div class="list-more">
              <a href=""
                 class="more-btn">查看全部情报</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import tool from "../mixin/tool.js";

export default {
  name: "News",
  mixins: [tool],
  data() {
    return {
      newActiveTitle: "最新",
      news: [
        {
          title: "最新",
          type: "",
        },
        {
          title: "新闻",
          type: "news",
        },
        {
          title: "公告",
          type: "notice",
        },
        {
          title: "活动",
          type: "act",
        },
      ],
      newList: [],
    };
  },
  mounted() {
    this.newTypeChange(this.news[0]);
  },
  methods: {
    newTypeChange(item) {
      this.newActiveTitle = item.title;
      axios
        .get(
          "https://open.ys4fun.com/game-website-server/pass/game/news/list",
          {
            params: {
              size: 3,
              websiteId: 1,
              current: 1,
              type: item.type,
            },
          }
        )
        .then(({ data }) => {
          console.log(data);
          this.newList = data.data.records;
        });
    },
    // format(time) {
    //   return dayjs(time).format("YYYY-MM-DD");
    // },
    // typeFormat(type) {
    //   let data = {
    //     news: "新闻",
    //     notice: "公告",
    //     act: "活动",
    //   };
    //   return data[type];
    // },
  },
};
</script>

<style>
</style>