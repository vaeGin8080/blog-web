<template>
  <div style="width:100vw;height:100vh;">
    <div class="wrap-editor" :style="optionBG">
      <div class="screen" :style="option">
        <div v-for="(item, key) in list" :key="key" class="items">
          <Chart :type="item.type" :config="item"></Chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCharts } from "@/api/charts";
import Chart from "./chartDetail";
import templeteList from "../myScreen/data";
import { mapGetters } from "vuex";
import { debounce } from "@/utils/utils";

export default {
  name: "EditorDetail",
  components: { Chart },
  data() {
    return {
      list: [],
      id: this.$route.query.id,
      option: {},
      optionBG: {},
    };
  },
  mounted() {
    this.init();
    window.addEventListener("resize", debounce(this.handleWindowResize, 200));
  },
  computed: {
    ...mapGetters(["chartConfig"]),
  },
  methods: {
    init() {
      if (this.id) {
        let id = this.id;
        this.list = templeteList.filter((item) => id == item.id)[0].list;
      } else {
        this.list = this.chartConfig.chartList;
        this.optionBG = {
          backgroundColor: this.chartConfig.bg,
          backgroundImage: `url(${this.chartConfig.bgImg})`,
          backgroundSize: "cover",
        };
        console.log(this.list);
        this.handleWindowResize();
      }
    },
    handleWindowResize() {
      let boxWidth = document.getElementsByClassName("wrap-editor")[0]
        .offsetWidth;
      let boxHeight = document.getElementsByClassName("wrap-editor")[0]
        .offsetHeight;
      let obj = { transform: `scale(${boxWidth / 1920},${boxHeight / 1080})` };
      // this.option = { ...this.option, ...obj };
      // console.log(boxWidth);
      // console.log(boxHeight);
      console.log(this.option.transform);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap-editor {
  width: 100%;
  height: 100%;
  backgroundcolor: "rgba(14, 14, 14, 1)";
  max-width: 100%;
  max-height: 100%;
  // min-width: 1000px;
  overflow: hidden;
  transition: all 0.2s;
  position: relative;
}
.screen {
}
.items {
  max-width: 100%;
}
</style>
