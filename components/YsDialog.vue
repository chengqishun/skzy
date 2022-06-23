<template>
  <div v-if="value"
       ref="dialog"
       class="ys-dialog">

    <div class="mask"></div>
    <div class="dialog-content">

      <div class="censorship">
        <svg @click="$emit('show')"
             id="图层_1"
             data-name="图层 1"
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 22 22"
             class="close-svg">
          <defs>
            <style>
            .cls-1 {
              fill: #898989;
              fill-rule: evenodd;
            }
            </style>
          </defs>
          <polygon points="21.88 3.21 19.05 0.38 10.97 8.46 2.88 0.38 0.06 3.21 8.14 11.29 0.06 19.38 2.88 22.21 10.97 14.12 19.05 22.21 21.88 19.38 13.79 11.29 21.88 3.21"
                   class="cls-1"></polygon>
        </svg>
        <div class="title">《深空之眼》适龄提示</div>
        <div class="divide"></div>
        <div class="content">
          <p>
            1.本游戏是一款3D角色扮演类动作游戏，适用于年满16周岁及以上的用户，建议未成年人在家长监护下使用游戏产品。
          </p>
          <p>
            2.本游戏以架空的虚拟世界为故事背景，不与现实世界相关。游戏玩法基于动作角色扮演，游戏内设置了主线剧情，支线剧情，活动挑战等玩法，用户通过收集角色，挑战关卡推进剧情。同时游戏中有基于文字和语音的陌生人社交系统。
          </p>
          <p>
            3.本游戏中有用户实名认证系统，认证为未成年人的用户将接受以下管理：<br>
            ①游戏中部分玩法和道具需要付费。未满 8 周岁的用户不能付费。 <br>
            ②8周岁以上未满 16 周岁的未成年人用户，单次充值金额不得超过
            50元人民币，每月充值金额累计不得超过 200元人民币。 <br>
            ③16 周岁以上的未成年人用户，单次充值金额不得超过 100
            元人民币，每月充值金额累计不得超过 400 元人民币。<br>
            ④未成年用户每周五、周六、周日和法定节假日的20时至21时可使用1小时，其他时间不得使用。
          </p>
          <p>
            4.本游戏讲述一个人类所生存的虚拟世界受到了未知怪物“视骸”的入侵，管理员与修正者们联手对抗“视骸”，守护人类文明的故事。游戏强调人机对战和策略协作，有助于锻炼用户的大脑反应能力和手眼配合。
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: "value",
    event: "show",
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  watch: {
    value(v) {
      if (v) {
        this.$nextTick(() => {
          document.body.append(this.$refs.dialog);
        });
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.ys-dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100001;
  overflow: auto;

  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }

  .dialog-content {
    width: 800px;
    position: relative;
    z-index: 2000;
    margin: 0 auto 50px;
    top: 49%;
    transform: translateY(-50%);

    .censorship {
      padding: 30px 50px;
      border: 1px solid hsla(0, 0%, 100%, 0.25);
      background-color: #333;
      color: #e8e7e7;

      .title {
        font-size: 32px;
        text-align: center;
      }

      .content {
        font-size: 16px;
        margin-bottom: 20px;
        line-height: 1.6;
      }
    }
  }

  .close-svg {
    width: 22px;
    height: 22px;
    fill: #fff;
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
  }
}
</style>