let echarts = require("echarts");
import { debounce } from "@/utils/utils";

export default {
  data() {
    return {
      resizeTag: true,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.charts = echarts.init(this.$el);
      this.init();
    });
    window.addEventListener("resize", debounce(this.handleWindowResize, 200));
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleWindowResize);
  },
  methods: {
    /**
     * 当窗口缩放时，echart动态调整自身大小
     */
    handleWindowResize() {
      if (!this.charts) return;
      if (this.resizeTag) {
        this.resizeTag = false;
        setTimeout(() => {
          this.resizeTag = true;
          this.charts.resize();
        }, 200);
      }
    },
  },
};
