<template>
  <section class="pc-index-section faction-section">
    <div class="session-content">
      <div v-if="show"
           class="content">
        <FactionList @enter="enter"></FactionList>
      </div>
      <div v-else
           class="content">
        <FactionList></FactionList>
        <Exhibition ref="Exhibition"
                    :active="active"></Exhibition>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      active: "",
    };
  },
  methods: {
    enter(name) {
      console.log(name);
      this.active = name.toLowerCase();
      this.show = false;
    },
  },
};
</script>

<style lang="scss">
.faction-section {
  background: url(https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/3.4de8516.jpg)
    50% no-repeat;
  background-size: cover;
  .content {
    display: flex;
    align-items: center;
  }
}
.faction-list {
  padding-left: 66px;
  display: flex;
  flex-direction: row;
  margin-bottom: 150px;
  margin-right: 50px;

  .faction {
    cursor: pointer;
    transition: all 0.5s;
    position: relative;

    + .faction {
      margin-left: 66px;
    }

    &.hover {
      filter: blur(5px);
    }

    &.active {
      transform: scale(1.5);
      filter: none;
    }

    .icon {
      fill: #fff;
      width: auto;
    }

    .zh,
    .en {
      color: #fff;
      text-align: center;
      translate: all 0.5s;
      opacity: 1;
    }

    .zh {
      font-size: 38px;
      font-weight: 800;
      margin-top: 20px;
    }

    .en {
      font-size: 16px;
      font-weight: 700;
      margin-top: 10px;
    }
  }
}
.icon-box {
  height: 144px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.icon.yggdrasil {
  height: 139px;
}
</style>