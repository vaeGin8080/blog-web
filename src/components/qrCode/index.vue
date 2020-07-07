<template>
  <div id="qrcode"></div>
</template>

<script>
import QRCode from "qrcodejs2";
export default {
  props: {
    url: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.creatQrCode();
  },
  methods: {
    creatQrCode() {
      let that = this;
      let qrcode = new QRCode("qrcode", {
        width: 108,
        height: 108, // 高度
        text: this.url, // 二维码内容
        render: "canvas", // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
        background: "#f0f", // 背景色
        foreground: "#ff0", // 前景色
      });
    },
  },
};
</script>

<style lang="scss">
#qrcode {
  display: inline-block;
  img {
    width: 108px;
    height: 108px;
    background-color: #fff; //设置白色背景色
    padding: 6px; // 利用padding的特性，挤出白边
    box-sizing: border-box;
  }
}
</style>
