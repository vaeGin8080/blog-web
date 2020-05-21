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
// import Sticky from "@/components/Sticky";
import Header from "./header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      visibleHead: false,
    };
  },
  computed: {
    key() {
      return this.$route.path;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.wrap {
  background-attachment: fixed;
  height: 100%;
  overflow: auto;
}
</style>
