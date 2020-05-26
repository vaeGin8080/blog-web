import { debounce, throttle } from "@/utils/utils";

export default {
  data() {
    return {};
  },
  mounted() {
    // 只监听pc端滚动
    window.addEventListener("scroll", debounce(this.handleScroll, 200), true);
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
      var clientHeight = document.body.clientHeight;
      var scrollHeight = document.body.scrollHeight;
      // console.log(scrollTop, clientHeight, scrollHeight);
      if (scroll < 0) {
        // console.log("up");
        this.$store.commit("setting/changeHeader", true);
      } else {
        // console.log("down");
        this.$store.commit("setting/changeHeader", false);
      }
      if (scrollTop + clientHeight >= scrollHeight) {
        // 加载更多操作
        // console.log("触底了");
        this.$store.commit("setting/changeDown", true);
      } else {
        this.$store.commit("setting/changeDown", false);
      }
    },
  },
};
