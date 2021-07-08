<template>
  <div class="wrap">
    <div
      class="bg-t"
      :style="{
        backgroundImage: `url(${bgUrl})`,
        backgroundSize: 'cover',
      }"
    >
      <!-- <img class="nav-text" :src="come" /> -->
    </div>
    <div class="templete-content">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane
          :key="item.name"
          v-for="item in navList"
          :label="item.label"
          :name="item.name"
        >
          <span slot="label">
            <span style="padding: 0 40px">{{ item.label }}</span>
          </span>
          <div class="box-shaow"></div>
          <div class="main-content">
            <myProjectItem
              :list="list"
              v-if="item.name == 1"
              @tap="tap"
            ></myProjectItem>
            <myConmonents :list="list" v-if="item.name == 3"></myConmonents>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import myProjectItem from "./myProjectItem";
import myConmonents from "./myComponents.vue";
import {getChartList} from '@/api/charts.js'
export default {
  name: "myScreen",
  components: { myProjectItem, myConmonents },
  data() {
    return {
      bgUrl: require("@/assets/echarts/bg-datav.png"),
      come: require("@/assets/echarts/bg-datav.png"),
      activeName: "1",
      navList: [
        {
          label: "我的可视化",
          name: "1",
        },
        {
          label: "我的数据",
          name: "2",
        },
        {
          label: "我的组件",
          name: "3",
        },
      ],
      list: [],
    };
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      getChartList().then(res=>{
        if(res.status == 1) {
          this.list = res.data.data
        }
      })
    },
    handleClick(e) {
      console.log(e);
    },
    tap(type) {
      if (type == "add") {
        // let routeData = this.$router.resolve({
        //   name: "chooseScreen",
        // });
        // console.log(routeData);
        // window.open(routeData.href, "_blank");
        this.$router.push("/chooseScreen");
      }
    },
  },
};
</script>

<style lang="scss">
.templete-content {
  .el-tabs__item {
    color: #b9c2cc;
  }
  .el-tabs__item.is-active {
    color: white;
  }
  .el-tabs__header {
    margin-bottom: 0;
  }
}
</style>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100vh;
  background: #171b22;
  .bg-t {
    width: 100%;
    height: 290px;
    position: relative;
  }
  .nav-text {
    z-index: 1;
    transform-origin: 0 0;
    transform: scale(0.5);
    top: 80px;
    left: 40px;
    position: absolute;
    user-select: none;
    cursor: pointer;
  }
  .templete-content {
    margin-top: -80px;
    .box-shaow {
      width: 100%;
      height: 50px;
      background: linear-gradient(180deg, transparent, #171b22);
      z-index: 1;
    }
  }
  .main-content {
  }
}
</style>
