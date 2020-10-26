<template>
  <div class="chart"></div>
</template>

<script>
import chartReszie from "@/mixin/chartResize";
export default {
  name: "lines",
  mixins: [chartReszie],
  props: {
    config: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      charts: null,
      option: {},
    };
  },
  watch: {
    config: {
      handler(news) {
        this.charts.setOption(news);
      },
      deep: true,
    },
  },
  mounted() {},
  computed: {},
  methods: {
    init() {
      this.charts.setOption(this.config);
    },
  },
};
</script>

<style lang="scss" scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
