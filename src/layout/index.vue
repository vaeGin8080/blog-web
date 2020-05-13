<template>
  <div class="wrap">
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
  mounted() {
    this.$store.commit("setTheme");
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  background-attachment: fixed;
  height: 100%;
  overflow: auto;
}
</style>
