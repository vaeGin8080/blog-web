<template>
  <div class="wrap">
    <div
      class="img-map"
      :class="{ 'is-Img': !isImg }"
      :style="{
        backgroundColor: '#666',
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
    <div class="set" @click="setBG">
      <p>设为壁纸</p>
    </div>
    <div class="set s2" @click="removeBG" v-if="rootBG">
      <p>取消壁纸</p>
    </div>
    <div class="set s3" @click="back">
      <i class="el-icon-back"></i>
    </div>
    <Dialog v-if="showDialog" :show.sync="show" title="图库">
      <p>点击右下角风车切换图片</p>
      <br />
      <p>需要的可以保存下载哦</p>
    </Dialog>
  </div>
</template>

<script>
import Dialog from "@/components/Dialog";
import { mapGetters } from "vuex";
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
      isImg: true,
    };
  },
  mounted() {
    this.init();
  },
  computed: {
    ...mapGetters(["rootBG"]),
    showDialog() {
      return this.show && !this.rootBG;
    },
  },
  methods: {
    init() {
      let random = Math.random() * (this.max - this.min) + this.min * 1;
      let url = `https://wallpaper.infinitynewtab.com/wallpaper/${parseInt(
        random
      )}.jpg`;
      this.isImg = false;
      fetch(url).then((res) => {
        // 等待img加载完成在替换
        let img = new Image();
        img.src = res.url;
        let that = this;
        setTimeout(() => {
          that.isImg = true;
          // that.url = res.url;
        }, 500);
        img.onload = function() {
          that.url = this.src;
        };
      });
    },
    run() {
      this.isRun = !this.isRun;
      this.init();
    },
    setBG() {
      this.$store.commit("setting/set_bg", this.url);
      this.$message.success("设置成功");
    },
    removeBG() {
      this.$store.commit("setting/remove_bg");
      this.$message.success("恢复默认");
    },
    back() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  // background: #333;
  width: 100%;
  height: 100vh;
}
.img-map {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  // transition: background cubic-bezier(0.42, 0, 0.38, 0.94) 0.5s;
  transition: background ease 500ms;
}
.is-Img {
  transition: background ease 500ms;
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
.set {
  position: fixed;
  z-index: 120;
  right: 50px;
  top: 20px;
  width: 100px;
  height: 30px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  transition: all 0.1s;
  &:hover {
    box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.4);
    transform: translateY(-2px);
  }
}
.s2 {
  top: 60px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
}
.s3 {
  width: 30px;
  left: 20px;
  border-radius: 50%;
}
.is-run {
  transform: rotate(1420deg);
}
</style>
