<template>
  <div class="wrap">
    <Header></Header>
    <div class="container">
      <!-- out-in：当前元素先进行过渡，完成之后新元素过渡进入。 -->
      <transition name="fade" mode="out-in">
        <div>
          <router-view :key="key"></router-view>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
// import Sticky from "@/components/Sticky";
import Header from "./header";
import { debounce, throttle } from "@/utils/utils";

export default {
  components: {
    Header,
  },
  data() {
    return {
      visibleHead: true,
      scrollTop: 0,
    };
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
  mounted() {
    // 只监听pc端滚动
    window.addEventListener("scroll", throttle(this.handleScroll, 500), true);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      var scroll = scrollTop - this.i;
      this.i = scrollTop;
      if (scroll < 0) {
        console.log("up");
        this.$store.commit("setting/changeHeader", false);
      } else {
        console.log("down");
        this.$store.commit("setting/changeHeader", true);
      }
    },
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
