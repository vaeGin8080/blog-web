<template>
  <div class="con">
    <Header></Header>
    <div class="container">
      <!-- out-in：当前元素先进行过渡，完成之后新元素过渡进入。 -->
      <transition name="fade" mode="out-in">
        <router-view :key="key"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "./header";
export default {
  components: {
    Header,
  },
  data() {
    return {};
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="scss" scoped>
.con {
  // background: url(https://vaegin.top/img/bg.jpg) no-repeat center;
  // background-size: cover;
  background-attachment: fixed;
  height: 100%;
  overflow: auto;
}
</style>
