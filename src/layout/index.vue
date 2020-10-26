<template>
  <div
    class="wrap"
    :style="{
      backgroundImage: `url(${rootBG})`,
      backgroundAttachment: 'scroll',
      backgroundSize: 'cover',
      minHeight: '100vh',
    }"
  >
    <Header></Header>
    <iframe
      class="ifr"
      frameborder="none"
      src="https://vaegin.top/right"
    ></iframe>
    <!--   <iframe
      class="ifr"
      frameborder="none"
      src="https://vaegin.top/left"
    ></iframe>
 -->
    <div class="container">
      <!-- out-in：当前元素先进行过渡，完成之后新元素过渡进入。 -->
      <transition name="fade" mode="out-in">
        <router-view :key="key"></router-view>
      </transition>
    </div>
    <div class="root-bg"></div>
  </div>
</template>

<script>
// import Sticky from "@/components/Sticky";
import Header from "./header";
import scroll from "@/mixin/scroll";
import { mapGetters } from "vuex";

export default {
  components: {
    Header,
  },
  mixins: [scroll],
  data() {
    return {
      visibleHead: true,
      bg: "https://wallpaper.infinitynewtab.com/wallpaper/342.jpg",
    };
  },
  computed: {
    key() {
      return this.$route.path;
    },
    ...mapGetters(["rootBG"]),
  },
  mounted() {},
  methods: {
    init() {},
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  background-attachment: fixed;
  overflow: auto;
  height: 100%;
}
.ifr {
  width: 100%;
  height: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}
.root-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
</style>
