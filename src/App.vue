<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { debounce, throttle } from "@/utils/utils";

export default {
  data() {
    return {
      screenWidth: "",
    };
  },
  mounted() {
    // 默认主题颜色
    this.$store.commit("setting/setTheme");
  },
  destroyed() {},
  methods: {},
};
</script>

<style lang="scss">
#app {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Helvetica Neue,
    PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  // height: 100%;
}
</style>
