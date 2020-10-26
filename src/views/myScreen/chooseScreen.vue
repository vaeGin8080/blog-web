<template>
  <div class="wrap">
    <div class="top-bar">
      <div class="right-bar"></div>
      <div class="left-bar"></div>
      <div class="return-text" @click="back">
        <span>
          <i class="el-icon-arrow-left"></i>
          取消创建
        </span>
      </div>
    </div>
    <div class="main-content">
      <div class="templete-list">
        <templeteItem :list="list" @tap="tap"></templeteItem>
      </div>
    </div>
  </div>
</template>

<script>
import templeteItem from "./templeteItem";
import templeteList from "./data";
export default {
  components: { templeteItem },
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.list = templeteList;
    },
    back() {
      this.$router.go(-1);
    },
    tap({ type, item }) {
      console.log(type, item);
      if (type == "add") {
        let routeData = this.$router.resolve({
          name: "Editor",
        });
        window.open(routeData.href, "_blank");
      } else if (type == "look") {
        let routeData = this.$router.resolve({
          name: "EditorDetail",
          query: {
            id: item.id,
          },
        });
        window.open(routeData.href, "_blank");
      } else {
        let routeData = this.$router.resolve({
          name: "Editor",
          query: {
            id: item.id,
          },
        });
        window.open(routeData.href, "_blank");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100vh;
  background: #191c23;
  display: flex;
  flex-direction: column;
  user-select: none;
  overflow: hidden;
}
.top-bar {
  position: relative;
  height: 50px;
  .right-bar {
    position: absolute;
    left: 150px;
    top: 20px;
    height: 5px;
    width: 100%;
    border-top: 1px solid #2681ff;
    border-left: 2px solid #2681ff;
    background: rgba(55, 126, 255, 0.04);
    border-top-left-radius: 5px;
    transform: skewX(-45deg);
    box-shadow: 0 5px 28px 0 rgba(55, 126, 255, 0.28);
  }
  .left-bar {
    position: absolute;
    left: 0;
    top: 24px;
    height: 25px;
    width: 138px;
    border-right: 2px solid #2681ff;
    border-bottom: 1px solid #2681ff;
    transform: skewX(-45deg);
    border-bottom-right-radius: 5px;
    box-shadow: 0 5px 28px 0 rgba(55, 126, 255, 0.28);
  }
  .return-text {
    position: absolute;
    left: -31px;
    top: 0;
    width: 180px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    background: #151b22;
    cursor: pointer;
    transform: skewX(-45deg);
    border-bottom-right-radius: 5px;
    span {
      display: inline-block;
      color: #fff;
      font-size: 14px;
      margin-left: 10px;
      transform: skewX(45deg);
      transition: 0.2s;
    }
  }
}
.main-content {
  flex: 1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding: 0 30px;
  .templete-list {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow-x: hidden;
    overflow-y: auto;
    color: #fff;
    font-size: 12px;
    margin: 0 -16px;
    padding-bottom: 100px;
    padding-top: 60px;
  }
}
</style>
