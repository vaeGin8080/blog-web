<template>
  <div class="aside">
    <!-- <div class="info flex-center flex-direction">
      <img :src="url" class="animation-mi" />
      <h2>晓风残月</h2>
    </div> -->
    <!-- <div v-for="(item, index) in bannerList" :key="index" class="aside-banner">
      <div
        :style="{
          backgroundImage: `url(${item})`,
          backgroundSize: 'cover',
        }"
      ></div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    bannerList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      url: "https://vaegin.top/img/qingzi.jpeg",
    };
  },
};
</script>
<style lang="scss" scoped>
@import "~@/styles/animate.scss";
$aside: 240px;
$asideBanner: 200px;
.aside {
  max-width: $aside;
  width: $aside;
  margin-left: 20px;
  background: white;
  &-banner {
    height: $asideBanner;
    margin-bottom: 20px;
    & > div {
      width: 100%;
      height: 100%;
    }
  }
}
.info {
  margin-bottom: 50px;
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 30px;
    object-fit: cover;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
}
</style>
