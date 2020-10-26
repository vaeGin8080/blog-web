<template>
  <div class="wrap">
    <div class="header-group">
      <div class="layer">
        <div class="h-100 flex align-center">
          <el-tooltip effect="dark" content="侧边栏" placement="bottom">
            <span @click="togger" :class="{ active: showLeft }">
              <i class="el-icon-s-operation"></i>
            </span>
          </el-tooltip>
        </div>
      </div>
      <div class="preview">
        <div class="p-right h-100 flex justify-end align-center">
          <el-dropdown @command="handlePreview">
            <span class="el-dropdown-link">
              <i
                class="el-icon-s-promotion"
                style="color:white;margin-right:10px"
              ></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>预览</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>

    <div class="editor-main">
      <div class="wrap-left" :class="{ hide: !showLeft }">
        <!-- 公共节点 -->
        <draggable
          class="list-group"
          element="div"
          v-model="listLeft"
          :sort="false"
          :options="optionLeft"
          :move="onMove"
          @start="isDragging = true"
          @end="isDragging = false"
          dragClass="pullDragClass"
          chosenClass="pullChosenClass"
          ghostClass="pullGhostClass"
        >
          <div v-for="(item, key) in listLeft" :key="key" class="o-item">
            <div class="item flex align-center">
              <img :src="item.src" />
              {{ item.name }}
            </div>
          </div>
        </draggable>
      </div>
      <div class="wrap-editor" id="main">
        <div class="screen-editor" :style="option">
          <draggable
            class="editor-group"
            element="div"
            :sort="false"
            v-model="listRight"
            :options="optionEditor"
            :move="onMove"
            ghostClass="e-item"
            @start="rightStart"
            @end="rightEnd"
          >
            <div v-for="(item, key) in listRight" :key="key">
              <sortChart
                :type="item.type"
                :index="key"
                :scale="scale"
                :config="item"
                @activated="handleActivated"
                @deactivated="handleDeactivated"
                @handleResize="handleResize"
              ></sortChart>
            </div>
          </draggable>
        </div>
      </div>
      <div class="wrap-right">
        <configBar :config="currentConfig" @change="configChange"></configBar>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import sortChart from "@/components/Charts";
import configBar from "./configBar";
import { deepClone, debounce } from "@/utils/utils";
import templeteList from "../myScreen/data";
import { messageBox } from "@/utils/utils";
import { mapGetters } from "vuex";
import dataL from "./data";
export default {
  name: "Editor",
  components: { draggable, sortChart, configBar },
  data() {
    return {
      isDragging: false,
      showLeft: true,
      listLeft: dataL,
      listRight: [],
      option: {},
      id: this.$route.query.id,
      scale: 1,
      currentId: null,
      currentConfig: {},
    };
  },
  mounted() {
    this.init();
    // this.handleKeyword();
    window.addEventListener(
      "resize",
      debounce(this.handleWindowResize, 200),
      true
    );
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleWindowResize);
    // window.removeEventListener("resize", this.handleKeyword);
  },
  watch: {
    chartConfig: {
      handler(news) {
        console.log(news);
        let option = {
          backgroundColor: news.bg,
          backgroundImage: `url(${news.bgImg})`,
          backgroundSize: "cover",
        };
        this.option = { ...this.option, ...option };
        this.handleWindowResize();
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters(["chartConfig"]),
    optionLeft() {
      return {
        animation: 0,
        group: {
          name: "description",
          pull: "clone",
          put: false,
        },
        ghostClass: "ghost",
      };
    },
    optionEditor() {
      return {
        animation: 0,
        group: {
          name: "description",
          put: this.listRight.length >= 9 ? false : true,
        },
      };
    },
  },
  methods: {
    init() {
      if (this.id) {
        let id = this.id;
        this.listRight =
          templeteList.filter((item) => id == item.id)[0].list || [];
      }
      let option = {
        backgroundColor: this.chartConfig.bg,
        backgroundImage: `url(${this.chartConfig.bgImg})`,
        backgroundSize: "cover",
      };
      this.option = { ...this.option, ...option };
      this.handleWindowResize();
    },
    togger() {
      this.showLeft = !this.showLeft;
    },

    // 触发组件
    handleActivated(e) {
      // if (e == this.currentId) return;
      this.currentId = e;
      this.currentConfig = this.listRight[this.currentId];
      for (let i = 0, l = this.listRight.length; i < l; i++) {
        if (i == e) {
          this.$set(this.listRight[e], "active", true);
        } else {
          this.$set(this.listRight[i], "active", false);
        }
      }
    },
    // 失去组件
    handleDeactivated(e) {
      this.$set(this.listRight[this.currentId], "active", false);
    },
    submit() {
      console.log(this.listRight);
    },
    // 预览
    handlePreview() {
      console.log(this.listRight);
      /**
       * 获取当前容器百分比的宽高
       *  */
      this.$store.commit("charts/handleChart", {
        type: "chartList",
        value: this.listRight,
      });
      let routeData = this.$router.resolve({
        name: "EditorDetail",
      });
      window.open(routeData.href, "_blank");
    },
    // 键盘
    handleKeyword() {
      let that = this;
      document.onkeydown = function(e) {
        let key = window.event.keyCode;
        if (key == 8) {
          console.log(that.currentId);
          if (that.currentId !== null) {
            messageBox()
              .then((res) => {
                console.log(1);
                that.listRight.splice(that.currentId, 1);
              })
              .catch(() => {});
            console.log(that.listRight);
          }
          window.event.preventDefault(); //关闭浏览器快捷键
        }
      };
    },
    // 改变图表宽高
    handleResize(e) {
      this.listRight[e.index] = { ...this.listRight[e.index], ...e };
    },
    // 窗口变换
    handleWindowResize() {
      let boxWidth = document.getElementById("main").offsetWidth;
      let boxHeight = document.getElementById("main").offsetHeight;
      let scale = boxWidth / this.chartConfig.screenWidth;
      let option = { transform: `scale(${scale}) translate(0px, 0px)` };
      this.option = { ...this.option, ...option };
      this.scale = scale;
      // console.log(this.chartConfig.screenWidth);
      // console.log(boxHeight);
      // console.log(this.option.transform);
    },
    // 配置改成
    configChange(e) {
      console.log(e);
      this.$set(this.listRight, e.index, { ...this.listRight[e.index], ...e });
      console.log(this.listRight[e.index]);
    },
    // 左右拖拽事件
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    },
    rightStart() {
      this.oldleftlist = this.listLeft.concat();
      this.isDragging = true;
    },
    rightEnd() {
      this.isDragging = false;
      this.listLeft = this.oldleftlist.concat();
      console.log(this.listRight);
    },
  },
};
</script>

<style lang="scss" scoped>
$top-bg: #1d1e1f;
$left-bg: #434b55;
$right-bg: #191c21;
.wrap {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: white;
  .header-group {
    width: 100%;
    height: 40px;
    background: $top-bg;
    position: relative;
    .layer {
      position: absolute;
      left: 20px;
      width: 100px;
      height: 40px;
      span {
        color: white;
        display: inline-block;
        width: 40px;
        height: 20px;
        text-align: center;
        cursor: pointer;
      }
      .active {
        background: #2681ff;
      }
    }
    .preview {
      position: absolute;
      right: 20px;
      width: 200px;
      height: 40px;
      .p-right {
        color: white;
      }
    }
  }
  .editor-main {
    flex: 1;
    display: flex;
  }
  .wrap-left {
    width: 250px;
    max-width: 260px;
    background: $right-bg;
    transition: all 0.3s;
  }

  .wrap-right {
    width: 332px;
    background: $right-bg;
    transition: all 0.3s;
  }
  .hide {
    width: 0;
  }
  .list-group {
    padding: 0 20px;
    display: inline-flex;
    flex-wrap: wrap;
    .o-item {
      width: 50%;
      .item {
        display: flex;
        flex-direction: column;
        background: rgba($color: #293750, $alpha: 0.8);
        margin-right: 10px;
        margin-top: 10px;
        color: #90a0b3;
        transform: scale(0.8);
        transition: all 0.2s;
        & > img {
          width: 100%;
          height: 70px;
          object-fit: cover;
          margin-bottom: 5px;
        }
        & > i {
          margin-right: 10px;
        }
        cursor: pointer;
        &:hover {
          transform: scale(1);
          box-shadow: 0 0 10px 3px #2681ff;
        }
      }
    }
  }
  .wrap-editor {
    flex: 1;
    max-height: 100%;
    overflow: hidden;
    background: $left-bg;
    // border-left: 1px solid white;
    // border-right: 1px solid white;
    position: relative;
  }
  .screen-editor {
    position: absolute;
    width: 1920px;
    height: 1080px;
    background: white;
    transform-origin: 0 0;
    top: 60px;
    left: 0px;
    transition: 0.2s all ease-in-out;
    background-size: cover, contain;
    overflow: hidden;
  }
  .editor-group {
    position: absolute;
    width: 100%;
    height: 100%;
    .item-charts {
      width: 100%;
      height: 100%;
    }
    .e-item {
      .item {
        & > img {
          width: 200px;
        }
      }
    }
  }
}
</style>
