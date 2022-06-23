<template>
  <nav>
    <div class="container">
      <a href="/"><img src="https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/skzy-logo.083e97d.png"
             alt=""></a>
      <div class="link-box">
        <img v-for="(item,index) in linkBoxData"
             :class="item.class"
             :key="index"
             :src="item.url"
             alt="">
        <span class="weixin">
          <img src="data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI2IDI2Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNMTcuNDUsOC4yN2E3LDcsMCwwLDEsLjguMDVDMTcuNTQsNSwxNCwyLjUsOS44OCwyLjVjLTQuNTcsMC04LjMsMy4xLTguMyw3QTYuODMsNi44MywwLDAsMCw0LjksMTUuMTVsLS44MywyLjVMNywxNi4xOWExNCwxNCwwLDAsMCwyLjkxLjQyLDYuNjgsNi42OCwwLDAsMCwuNzgsMCw1Ljg0LDUuODQsMCwwLDEtLjI2LTEuNzMsNi44LDYuOCwwLDAsMSw3LTYuNTdaTTEzLDZhMSwxLDAsMCwxLDEsMSwxLDEsMCwwLDEtMSwxLDEuMTYsMS4xNiwwLDAsMS0xLjI1LTFBMS4xNywxLjE3LDAsMCwxLDEzLDZaTTcuMTgsOC4wOWExLjE2LDEuMTYsMCwwLDEtMS4yNS0xQTEuMTYsMS4xNiwwLDAsMSw3LjE4LDZhMSwxLDAsMCwxLDEsMUExLDEsMCwwLDEsNy4xOCw4LjA5Wk0yNSwxNC43NGMwLTMuMzItMy4zMi02LTctNi00LDAtNy4wNiwyLjctNy4wNiw2czMuMTEsNiw3LjA2LDZhMTAuNTUsMTAuNTUsMCwwLDAsMi41LS40MmwyLjI4LDEuMjUtLjY0LTIuMDdBNi4yNiw2LjI2LDAsMCwwLDI1LDE0Ljc0Wm0tOS4zNC0xYS44My44MywwLDAsMSwwLTEuNjYuOTQuOTQsMCwwLDEsMSwuODJBLjk0Ljk0LDAsMCwxLDE1LjY5LDEzLjdabTQuNTcsMGEuODMuODMsMCwxLDEsMC0xLjY2LDEsMSwwLDAsMSwxLC44MkExLDEsMCwwLDEsMjAuMjYsMTMuN1oiLz48L3N2Zz4="
               alt=""
               class="svg-icon">
          <div class="weixin-box">
            <img src="https://skzy.ys4fun.com/main/_nuxt/g202206151721/img/weixin-qrcode-pc.f92df2c.png"
                 alt="">
          </div>
        </span>
      </div>
      <div class="auth-box">
        <div>登录</div>
        <span>|</span>
        <div>注册</div>
        <span>|</span>
        <div>账号中心</div>
      </div>
    </div>

  </nav>
</template>

<script>
import linkBoxData from "@/data/linkBoxData.js";
export default {
  name: "Navbar",
  data() {
    return {
      linkBoxData: linkBoxData,
    };
  },
};
</script>

<style lang="scss">
.link-box span.weixin:hover {
  .weixin-box {
    visibility: visible;
    opacity: 1;
  }
}
.link-box > span {
  margin-left: 5px;
  cursor: pointer;
  position: relative;
  font-size: 0;
  .svg-icon {
    height: 26px;
    vertical-align: middle;
  }

  .weixin-box {
    width: 180px;
    padding: 10px;
    background-color: hsla(0, 0%, 100%, 0.8);
    position: absolute;
    top: 48px;
    left: -91px;
    visibility: hidden;
    opacity: 0;

    &::before {
      content: "";
      border-color: transparent transparent hsla(0, 0%, 100%, 0.8);
      border-style: solid;
      border-width: 0 15px 18px;
      position: absolute;
      top: -18px;
      left: 50%;
      margin-left: -9px;
    }

    img {
      max-width: 100%;
      width: 174px;
      height: 210px;
    }
  }
}
</style>