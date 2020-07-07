<template>
  <div class="pie-number">
    <span v-for="(item, index) in piePrice" :key="index">
      <div :style="{ top: -item * 60 + 'px' }">
        <i v-for="(ic, indexc) in 10" :key="indexc">{{ ic - 1 }}</i>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number | String,
      default: 0,
    },
  },
  watch: {
    number(news, old) {
      this.piePrice = news.split("");
    },
  },
  data() {
    return {
      piePrice: [0, 0, 0, 0],
    };
  },
};
</script>

<style lang="scss" scoped>
.pie-number {
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    display: inline-block;
    width: 60px;
    height: 60px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    line-height: 60px;
    background: url("../../assets/echarts/bg-border.png");
    background-size: cover;
    margin-right: 15px;
    position: relative;
    &:last-child {
      margin-right: 0;
    }
    div {
      width: 100%;
      height: 600px;
      position: absolute;
      left: 0;
      top: 0;
      transition: all 0.8s ease-in-out;
      i {
        width: 100%;
        height: 60px;
        color: #ffffff;
        font-style: normal;
        font-size: 36px;
        float: left;
      }
    }
  }
}
</style>
