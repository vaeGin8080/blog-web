import typeOption from "./typeOption";
export default [
  {
    chartName: "柱状图",
    value: "1",
    type: "chart",
    id: "001",
    chartImg: require("@/assets/echarts/bar.png"),
    chartOption: typeOption["bar"],
  },
  {
    chartName: "折线图",
    value: "2",
    type: "chart",
    id: "002",
    chartImg: require("@/assets/echarts/lines.png"),
    chartOption: typeOption["lines"],
  },
  {
    chartName: "饼图",
    value: "3",
    type: "chart",
    id: "003",
    chartImg: require("@/assets/echarts/pie.png"),
    chartOption: typeOption["pie"],
  },
  {
    chartName: "散点图",
    value: "3",
    type: "chart",
    id: "004",
    chartImg: require("@/assets/echarts/scatter.png"),
    chartOption: typeOption["scatter"],
  },
  {
    chartName: "地图",
    value: "4",
    type: "chart",
    id: "005",
    chartImg: require("@/assets/echarts/maps.png"),
    chartOption: typeOption["map"],
  },
  {
    chartName: "标题",
    value: "5",
    type: "title",
    id: "006",
    chartImg: require("@/assets/echarts/title.png"),
    chartOption: typeOption["title"],
    width: 300,
    height: 100,
  },
];
