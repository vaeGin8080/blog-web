<template>
  <div>
    <div
      class="img-map"
      :style="{
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
      }"
    ></div>
    <div class="random" @click="run">
      <div class="window" :class="{ 'is-run': isRun }">
        <img :src="fc" class="window-img" />
      </div>
      <div class="trunk"></div>
    </div>
    <Dialog :show.sync="show" title="图库">
      <p>点击右下角风车切换图片</p>
      <br />
      <p>需要的可以保存下载哦</p>
    </Dialog>
  </div>
</template>

<script>
import Dialog from "@/components/Dialog";

export default {
  name: "ImgMap",
  components: { Dialog },
  data() {
    return {
      min: 1,
      max: 4050,
      url: "https://vaegin.top/img/bg1.jpg",
      fc: require("@/assets/img/fengche.png"),
      cc: require("@/assets/img/login-pass.png"),
      isRun: false,
      show: true,
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      let random = Math.random() * (this.max - this.min) + this.min * 1;
      let url = `https://wallpaper.infinitynewtab.com/wallpaper/${parseInt(
        random
      )}.jpg`;
      fetch(url).then((res) => {
        // 等待img加载完成在替换
        let img = new Image();
        img.src = res.url;
        let that = this;
        img.onload = function() {
          that.url = this.src;
        };
      });
    },
    run() {
      this.isRun = !this.isRun;
      this.init();
    },
  },
};
</script>

<style lang="scss" scoped>
.img-map {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  transition: background cubic-bezier(0.42, 0, 0.38, 0.94) 0.3s;
}
.random {
  position: fixed;
  z-index: 100;
  right: 50px;
  bottom: 0;
  width: 40px;
  height: 66px;
  .window {
    position: absolute;
    z-index: 20;
    width: 100%;
    cursor: pointer;
    transition: all ease 2s;
    &-img {
      width: 100%;
      transition: all ease 2s;
    }
  }
  .trunk {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 4px;
    height: calc(100% - 20px);
    margin-left: -2px;
    background-color: #fdfdfd;
  }
}
.is-run {
  transform: rotate(1420deg);
}
</style>
