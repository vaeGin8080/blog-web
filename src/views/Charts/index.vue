<template>
  <div class="wrap">
    <div class="wrap-title">
      <img src="../../assets/echarts/title.png" />
    </div>
    <div class="wrap-content">
      <div class="wrap-left">
        <div class="left-t">
          <div class="pie-wrap">
            <div class="pie pie-1 border">
              <div class="pie1-top">
                <publicHead :title="'2020年发运总量'"></publicHead>
                <numberCount :number="pieNumber"></numberCount>
              </div>
              <div :id="pie1Id" class="charts"></div>
            </div>
            <div class="pie pie-2 border">
              <publicHead :title="'煤种销售占比'"></publicHead>
              <div :id="pie2Id" class="charts"></div>
            </div>
          </div>
        </div>
        <div class="left-b border">
          <publicHead :title="'2020年月发运量统计'"></publicHead>
          <div :id="count == 0 ? chart3Id : chart4Id" class="charts"></div>
        </div>
      </div>
      <div class="wrap-right border">
        <publicHead :title="'到站地统计'"></publicHead>
        <div class="right-wrap">
          <div class="map" :id="chartMapId"></div>
          <div class="tab">
            <Table :list="list"></Table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import publicHead from "./publicHead";
import numberCount from "./numberCount";
import Table from "./table";
import { resize, chart1, chart2, chart3, chart4, chartMap } from "./charts";
export default {
  name: "Charts",
  components: { publicHead, numberCount, Table },
  data() {
    return {
      pie1Id: "pie1",
      pie2Id: "pie2",
      chart3Id: "bar3",
      chart4Id: "line4",
      chartMapId: "map",
      pieNumber: "2568",
      count: 0, // count区分bar与line
      timer: null,
      list: [
        {
          title: "吴忠市",
          count: "241.5",
          count: 0,
        },
        {
          title: "吴忠市",
          count: "241.5",
          count: 1,
        },
        {
          title: "吴忠市",
          count: "241.5",
          count: 2,
        },
        {
          title: "吴忠市",
          count: "241.5",
          count: 3,
        },
        {
          title: "吴忠市",
          count: "241.5",
          count: 4,
        },
        {
          title: "吴忠市",
          count: "241.5",
          count: 5,
        },
        {
          title: "吴忠市",
          count: "241.5",
          count: 6,
        },
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });

    window.addEventListener("resize", () => {
      resize();
    });
  },
  computed: {
    piePrice() {
      return this.pieNumber.split("");
    },
  },
  destroy() {
    clearInterval(this.timer);
  },
  methods: {
    init() {
      this.initChart1();
      this.initChart2();
      this.initChart3();
      this.initChartMap();
      this.initTable();
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.timer = setInterval(() => {
        // clearInterval(timer);
        let num = this.rand(1000, 9999);
        let str = num.toString();
        this.pieNumber = str;
        if (this.count == 0) {
          this.count = 1;
          chart3(this.chart3Id, [], this.count);
        } else {
          this.count = 0;
          chart4(this.chart4Id, [], this.count);
        }
      }, 5000);
    },
    // 2020发运总量
    initChart1() {
      chart1(this.pie1Id);
    },
    // 煤种销售占比
    initChart2() {
      chart2(this.pie2Id);
    },
    // 2020月发运总量
    initChart3() {
      chart3(this.chart3Id);
    },
    // 到站地统计（地图）
    initChartMap() {
      chartMap(this.chartMapId);
    },
    // Table
    initTable() {
      this.list = [...this.list, ...this.list];
    },
    // 随机数
    rand(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
  },
};
</script>

<style lang="scss" scoped>
.border {
  background: radial-gradient(rgba(158, 225, 239, 0.24), rgba(27, 143, 185, 0));
  border: 2px solid rgba(100, 255, 253, 0.3);
  box-shadow: 0px 0px 16px 4px rgba(51, 156, 179, 0.36) inset;
}
.charts {
  flex: 1;
}

.wrap {
  width: 100%;
  height: 100vh;
  min-width: 1200px;
  background: url("../../assets/echarts/bg.png") no-repeat;
  background-size: cover;
  overflow-y: hidden;
  &-title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 66px;
    img {
      height: 36px;
    }
  }
  &-content {
    padding: 22px 90px;
    height: calc(100% - 66px);
    display: flex;
    .wrap-left {
      width: 60%;
      height: 100%;
      margin-right: 20px;
      display: flex;
      flex-direction: column;
      .left-t {
        margin-bottom: 20px;
        .pie-wrap {
          display: flex;
        }
        .pie {
          min-height: 372px;
          display: flex;
          flex-direction: column;
        }
        .pie-1 {
          width: 49%;
          margin-right: 20px;

          .pie1-top {
            height: 160px;
          }
        }
        .pie-2 {
          width: 49%;
        }
      }
      .left-b {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
    }
    .wrap-right {
      width: 39%;
      height: 100%;
      .right-wrap {
        display: flex;
        flex-direction: column;
        height: calc(100% - 60px);
        .map {
          flex: 1;
        }
        .tab {
          height: 320px;
          // max-height: 320px;
          overflow: hidden;
        }
      }
    }
  }
}
@media (max-width: 1919px) {
  // .map {
  //   height: 49% !important;
  // }
}
@media (max-width: 1346px) {
}
</style>
