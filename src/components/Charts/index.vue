<template>
  <VueDragResize
    :w="config.width || box"
    :h="config.height || box"
    :x="config.left"
    :y="config.top"
    :parentScaleX="scale"
    :parentScaleY="scale"
    :isActive="config.active"
    ref="vdr"
    :parentLimitation="true"
    :parentW="parentW"
    :parentH="parentH"
    :key="index + new Date().getTime()"
    @resizing="onResize"
    @dragging="onDrag"
    @resizestop="onResizstop"
    @dragstop="dragTop"
    @clicked="clicked"
    @activated="activated"
    @deactivated="deactivated"
  >
    <component :is="sw(type)" ref="chart" :config="config.option"></component>
  </VueDragResize>
</template>
<script>
import chart from "./chart";
import Title from "./Title";
import VueDragResize from "vue-drag-resize";
import { sw } from "@/utils/charts";
export default {
  name: "sortChart",
  components: { VueDragResize, chart, Title },
  props: {
    type: {
      type: String,
      default: "",
    },
    index: {
      type: Number,
      default: 0,
    },
    config: {
      type: Object,
      default() {
        return {};
      },
    },
    scale: {
      type: Number,
      default: 1,
    },
    parentW: {
      type: Number,
      default: 1920,
    },
    parentH: {
      type: Number,
      default: 1080,
    },
  },
  data() {
    return {
      box: 500,
      width: 0,
      height: 0,
      x: 0,
      y: 0,
    };
  },
  mounted() {
    this.$emit("handleResize", {
      id: this.id,
      index: this.index,
      width: this.config.width || this.box,
      height: this.config.height || this.box,
      left: this.config.left || 0,
      top: this.config.top || 0,
    });
  },
  watch: {},
  computed: {},
  methods: {
    sw,
    // 缩放ing
    onResize({ left, top, width, height }) {
      this.x = left;
      this.y = top;
      this.width = width;
      this.height = height;
    },
    // 拖拽ing
    onDrag: function({ left, top, width, height }) {
      this.x = left;
      this.y = top;
      this.width = width;
      this.height = height;
    },
    // 缩放完成
    onResizstop() {
      if (this.type == "chart") {
        this.$refs["chart"].handleWindowResize();
      }
      this.resize();
    },
    // 拖拽完成
    dragTop() {
      this.resize();
    },
    // 点击组件
    clicked(e) {},
    // 选取组件
    activated(e) {
      // console.log("activated:" + this.index);
      this.$emit("activated", this.index);
    },
    // 失去组件
    deactivated(e) {
      // console.log("deactivated:" + this.index);
      this.$emit("deactivated", this.index);
    },
    handleDelete() {},
    resize() {
      this.$emit("handleResize", {
        id: this.id,
        index: this.index,
        width: this.width || this.box,
        height: this.height || this.box,
        left: this.x,
        top: this.y,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
