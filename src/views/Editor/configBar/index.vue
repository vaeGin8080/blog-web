<template>
  <div class="option" @mousedown.stop @click.stop>
    <div class="title flex-ali" @click="back">
      <span>{{ !isPage ? "页面设置" : "图表设置" }}</span>
    </div>
    <keep-alive>
      <component
        :is="componentName"
        :config="config"
        @change="change"
        :key="new Date().getTime()"
      ></component>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "configBar",
  components: {},
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
      isPage: true,
      configList: [
        {
          id: "",
          type: "",
          com: () => import("./homeOption"),
        },
        {
          id: "001",
          type: "chart",
          com: () => import("./chartOption"),
          titleName: "图表设置",
        },
        {
          id: "002",
          type: "text",
          com: () => import("./textOption"),
          titleName: "文字设置",
        },
      ],
    };
  },
  computed: {
    // 识别组件
    componentName() {
      // 模板进入
      if (this.config.chartType) {
        if (!this.isPage) {
          return this.configList[0].com;
        }
        switch (this.config.chartType) {
          case "chart":
            return this.configList[1].com;
            break;
          case "text":
            return this.configList[2].com;
            break;
          default:
            return this.configList[2].com;
        }
      } else {
        return this.configList[0].com;
      }
    },
  },
  methods: {
    back() {
      this.isPage = !this.isPage;
    },
    change(form) {
      this.$emit("change", form);
    },
  },
};
</script>

<style lang="scss" scoped>
.option {
  width: 100%;
  height: 100%;
  color: white;
}
.title {
  width: 100%;
  height: 30px;
  background: #2e343c;
  font-size: 14px;
  color: #bcc9d4;
  margin-bottom: 20px;
  cursor: pointer;
}
</style>
