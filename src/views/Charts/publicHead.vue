<template>
  <div class="public-head">
    <img src="../../assets/echarts/directon-right.png" />
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "publicHeaed",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.public-head {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  img {
    width: 28px;
    height: 28px;
    margin-right: 10px;
  }
  span {
    font-size: 24px;
    font-weight: 600;
    font-family: PingFangSC, PingFangSC-Medium;
    letter-spacing: 0.5px;
    text-align: left;
    color: #3199af;
    line-height: 33px;
  }
}
</style>
