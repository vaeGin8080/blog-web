var echarts = require("echarts");
require("./china.js");
var myChartPie1 = null;
var myChartPie2 = null;
var myChart3 = null;
var myChart4 = null;
var myChartMap = null;
// type区分bar与line
var type = 0;
// 适配窗口
export function resize() {
  myChartPie1.resize();
  myChartPie2.resize();
  myChartMap.resize();
  if (type == 0) {
    myChart3.resize();
  } else {
    myChart4.resize();
  }
}
// 获取饼图左1（2020发运总量）
export function chart1(id) {
  myChartPie1 = echarts.init(document.getElementById(id));
  let bgColor = "transparent";
  let title = "总量";
  let color = ["#0FA3E7", "#F5A623"];
  let echartData = [
    {
      name: "汽运",
      value: "2920",
    },
    {
      name: "火运",
      value: "3720",
    },
  ];

  let option = {
    backgroundColor: bgColor,
    color: color,
    title: [],
    tooltip: {
      trigger: "item",
      formatter: "{b} : {c} ({d}%)",
    },
    series: [
      {
        type: "pie",
        radius: ["45%", "60%"],
        center: ["50%", "50%"],
        data: echartData,
        hoverAnimation: false,
        itemStyle: {
          normal: {
            borderColor: bgColor,
            borderWidth: 2,
          },
        },
        labelLine: {
          normal: {
            length: 30,
            length2: 100,
            lineStyle: {
              color: "#1E4351",
            },
          },
        },
        label: {
          normal: {
            formatter: (params) => {
              return (
                "{icon|●}{name|" +
                params.name +
                "}{value|" +
                params.percent +
                "%}"
              );
            },
            padding: [0, -100, 25, -100],
            rich: {
              icon: {
                fontSize: 16,
              },
              name: {
                fontSize: 14,
                padding: [0, 10, 0, 4],
                color: "#ffffff",
              },
              value: {
                fontSize: 18,
                fontWeight: "bold",
                color: "#ffffff",
              },
            },
          },
        },
      },
    ],
  };
  myChartPie1.setOption(option);
}

export function chart2(id) {
  myChartPie2 = echarts.init(document.getElementById(id));
  let option = {
    backgroundColor: "transparent",
    title: {
      left: "center",
      top: 20,
      textStyle: {
        color: "#ccc",
      },
    },

    tooltip: {
      trigger: "item",
      formatter: "{b} : {c} ({d}%)",
    },

    visualMap: {
      show: false,
      min: 500,
      max: 600,
      inRange: {
        //colorLightness: [0, 1]
      },
    },
    series: [
      {
        type: "pie",
        radius: "50%",
        center: ["50%", "50%"],
        color: ["#5385E2", "#53C29B"], //'#FBFE27','rgb(11,228,96)','#FE5050'
        data: [
          {
            value: 280,
            name: "块煤",
            price: 1234.5,
          },
          {
            value: 410,
            name: "混煤",
            price: 1234.5,
          },
        ],
        roseType: "radius",

        label: {
          distanceToLabelLine: 20,
          normal: {
            formatter: (params) => {
              return (
                "{icon|● }{name|" +
                params.name +
                "}{value|" +
                params.value +
                "顿}\n{price|年平均单价" +
                params.data.price +
                "顿}"
              );
            },
            rich: {
              price: {
                color: "rgba(255,255,255,.6)",
                fontSize: 10,
                lineHeight: 10,
              },
              name: {
                fontSize: 18,
                height: 40,
              },
              value: {
                fontSize: 18,
                height: 40,
              },
            },
          },
        },
        labelLine: {
          normal: {
            lineStyle: {
              color: "rgb(98,137,169)",
            },
            smooth: 0,
            length: 20,
            length2: 20,
          },
        },
        itemStyle: {
          normal: {
            shadowColor: "rgba(0, 0, 0, 0.8)",
            shadowBlur: 50,
          },
        },
      },
    ],
  };
  myChartPie2.setOption(option);
}

export function chart3(id, data, type) {
  type = type;

  myChart3 = echarts.init(document.getElementById(id));
  let optionBar = {
    backgroundColor: "transparent",
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      top: "15%",
      right: "3%",
      left: "5%",
      bottom: "12%",
    },
    xAxis: [
      {
        type: "category",
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,0.12)",
          },
        },
        axisLabel: {
          margin: 10,
          color: "#e2e9ff",
          textStyle: {
            fontSize: 14,
          },
        },
      },
    ],
    yAxis: [
      {
        axisLabel: {
          formatter: "{value}",
          color: "#e2e9ff",
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,0.12)",
          },
        },
      },
    ],
    series: [
      {
        type: "bar",
        data: [300, 450, 770, 203, 255, 188, 156, 300, 450, 770, 203, 255],
        barWidth: "20px",
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0,244,255,1)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgba(0,77,167,1)", // 100% 处的颜色
                },
              ],
              false
            ),
            barBorderRadius: [30, 30, 30, 30],
            shadowColor: "rgba(0,160,221,1)",
            shadowBlur: 4,
          },
        },
        label: {
          normal: {
            show: true,
            lineHeight: 30,
            position: ["-5", "-30"],
            formatter: [" {a|{c}}", ""].join(","),
            rich: {
              d: {
                color: "#3CDDCF",
              },
              a: {
                color: "#fff",
                align: "center",
              },
              b: {
                width: 1,
                height: 30,
                borderWidth: 1,
                borderColor: "#234e6c",
                align: "left",
              },
            },
          },
        },
      },
    ],
  };

  myChart3.setOption(optionBar, true);
}
export function chart4(id, data, type) {
  type = type;
  myChart4 = echarts.init(document.getElementById(id));

  var fontColor = "#30eee9";
  let optionLine = {
    backgroundColor: "transparent",
    grid: {
      left: "5%",
      right: "10%",
      top: "20%",
      bottom: "15%",
      containLabel: true,
    },
    tooltip: {
      show: true,
      trigger: "item",
    },
    legend: {
      show: true,
      x: "right",
      y: "35",
      padding: [0, 20, 0, 0],
      icon: "stack",
      itemWidth: 24,
      itemHeight: 4,
      textStyle: {
        color: "#1bb4f6",
        fontSize: 14,
      },
      data: ["块煤", "泥煤"],
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          color: fontColor,
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "#397cbc",
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: "#195384",
          },
        },
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        name: "",
        min: 0,
        max: 1000,
        axisLabel: {
          formatter: "{value}",
          textStyle: {
            color: "#2ad1d2",
          },
        },
        axisLine: {
          lineStyle: {
            color: "#27b4c2",
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#11366e",
          },
        },
      },
    ],
    series: [
      {
        name: "块煤",
        type: "line",
        stack: "总量",
        symbol: "circle",
        symbolSize: 8,
        itemStyle: {
          normal: {
            color: "#0092f6",
            lineStyle: {
              color: "#0092f6",
              width: 1,
            },
            // areaStyle: {
            //   //color: '#94C9EC'
            //   color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
            //     {
            //       offset: 0,
            //       color: "rgba(7,44,90,0.3)",
            //     },
            //     {
            //       offset: 1,
            //       color: "rgba(0,146,246,0.9)",
            //     },
            //   ]),
            // },
          },
        },
        markPoint: {
          itemStyle: {
            normal: {
              color: "red",
            },
          },
        },
        data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 290, 330],
      },
      {
        name: "泥煤",
        type: "line",
        stack: "总量",
        symbol: "circle",
        symbolSize: 8,

        itemStyle: {
          normal: {
            color: "#00d4c7",
            lineStyle: {
              color: "#00d4c7",
              width: 1,
            },
          },
        },
        data: [220, 182, 191, 234, 290, 330, 310, 201, 154, 190, 330, 410],
      },
    ],
  };
  myChart4.setOption(optionLine, true);
}

export function chartMap(id, data) {
  myChartMap = echarts.init(document.getElementById(id));
  var geoCoordMap = {
    上海: [121.4648, 31.2891],
    东莞: [113.8953, 22.901],
    东营: [118.7073, 37.5513],
    中山: [113.4229, 22.478],
    临汾: [111.4783, 36.1615],
    临沂: [118.3118, 35.2936],
    丹东: [124.541, 40.4242],
    丽水: [119.5642, 28.1854],
    乌鲁木齐: [87.9236, 43.5883],
    佛山: [112.8955, 23.1097],
    保定: [115.0488, 39.0948],
    兰州: [103.5901, 36.3043],
    包头: [110.3467, 41.4899],
    北京: [116.4551, 40.2539],
    北海: [109.314, 21.6211],
    南京: [118.8062, 31.9208],
    南宁: [108.479, 23.1152],
    南昌: [116.0046, 28.6633],
    南通: [121.1023, 32.1625],
    厦门: [118.1689, 24.6478],
    台州: [121.1353, 28.6688],
    合肥: [117.29, 32.0581],
    呼和浩特: [111.4124, 40.4901],
    咸阳: [108.4131, 34.8706],
    哈尔滨: [127.9688, 45.368],
    唐山: [118.4766, 39.6826],
    嘉兴: [120.9155, 30.6354],
    大同: [113.7854, 39.8035],
    大连: [122.2229, 39.4409],
    天津: [117.4219, 39.4189],
    太原: [112.3352, 37.9413],
    威海: [121.9482, 37.1393],
    宁波: [121.5967, 29.6466],
    宝鸡: [107.1826, 34.3433],
    宿迁: [118.5535, 33.7775],
    常州: [119.4543, 31.5582],
    广州: [113.5107, 23.2196],
    廊坊: [116.521, 39.0509],
    延安: [109.1052, 36.4252],
    张家口: [115.1477, 40.8527],
    徐州: [117.5208, 34.3268],
    德州: [116.6858, 37.2107],
    惠州: [114.6204, 23.1647],
    成都: [103.9526, 30.7617],
    扬州: [119.4653, 32.8162],
    承德: [117.5757, 41.4075],
    拉萨: [91.1865, 30.1465],
    无锡: [120.3442, 31.5527],
    日照: [119.2786, 35.5023],
    昆明: [102.9199, 25.4663],
    杭州: [119.5313, 29.8773],
    枣庄: [117.323, 34.8926],
    柳州: [109.3799, 24.9774],
    株洲: [113.5327, 27.0319],
    武汉: [114.3896, 30.6628],
    汕头: [117.1692, 23.3405],
    江门: [112.6318, 22.1484],
    沈阳: [123.1238, 42.1216],
    沧州: [116.8286, 38.2104],
    河源: [114.917, 23.9722],
    泉州: [118.3228, 25.1147],
    泰安: [117.0264, 36.0516],
    泰州: [120.0586, 32.5525],
    济南: [117.1582, 36.8701],
    济宁: [116.8286, 35.3375],
    海口: [110.3893, 19.8516],
    淄博: [118.0371, 36.6064],
    淮安: [118.927, 33.4039],
    深圳: [114.5435, 22.5439],
    清远: [112.9175, 24.3292],
    温州: [120.498, 27.8119],
    渭南: [109.7864, 35.0299],
    湖州: [119.8608, 30.7782],
    湘潭: [112.5439, 27.7075],
    滨州: [117.8174, 37.4963],
    潍坊: [119.0918, 36.524],
    烟台: [120.7397, 37.5128],
    玉溪: [101.9312, 23.8898],
    珠海: [113.7305, 22.1155],
    盐城: [120.2234, 33.5577],
    盘锦: [121.9482, 41.0449],
    石家庄: [114.4995, 38.1006],
    福州: [119.4543, 25.9222],
    秦皇岛: [119.2126, 40.0232],
    绍兴: [120.564, 29.7565],
    聊城: [115.9167, 36.4032],
    肇庆: [112.1265, 23.5822],
    舟山: [122.2559, 30.2234],
    苏州: [120.6519, 31.3989],
    莱芜: [117.6526, 36.2714],
    菏泽: [115.6201, 35.2057],
    营口: [122.4316, 40.4297],
    葫芦岛: [120.1575, 40.578],
    衡水: [115.8838, 37.7161],
    衢州: [118.6853, 28.8666],
    西宁: [101.4038, 36.8207],
    西安: [109.1162, 34.2004],
    贵阳: [106.6992, 26.7682],
    连云港: [119.1248, 34.552],
    邢台: [114.8071, 37.2821],
    邯郸: [114.4775, 36.535],
    郑州: [113.4668, 34.6234],
    鄂尔多斯: [108.9734, 39.2487],
    重庆: [107.7539, 30.1904],
    金华: [120.0037, 29.1028],
    铜川: [109.0393, 35.1947],
    银川: [106.3586, 38.1775],
    镇江: [119.4763, 31.9702],
    长春: [125.8154, 44.2584],
    长沙: [113.0823, 28.2568],
    长治: [112.8625, 36.4746],
    阳泉: [113.4778, 38.0951],
    青岛: [120.4651, 36.3373],
    韶关: [113.7964, 24.7028],
  };

  var BJData = [
    [
      { name: "北京", value: 55 },
      { name: "上海", value: 95 },
    ],
    [{ name: "北京" }, { name: "广州", value: 90 }],
    [{ name: "北京" }, { name: "大连", value: 80 }],
    [{ name: "北京" }, { name: "南宁", value: 70 }],
    [{ name: "北京" }, { name: "南昌", value: 60 }],
    [{ name: "北京" }, { name: "拉萨", value: 50 }],
    [{ name: "北京" }, { name: "长春", value: 40 }],
    [{ name: "北京" }, { name: "包头", value: 30 }],
    [{ name: "北京" }, { name: "重庆", value: 20 }],
    [{ name: "北京" }, { name: "常州", value: 10 }],
  ];
  var planePath =
    "image://data:image/png;base64,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";
  var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];
      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push([
          {
            coord: fromCoord,
          },
          {
            coord: toCoord,
          },
        ]);
      }
    }
    return res;
  };

  var color = ["#00D2FF"];
  var series = [];
  [["北京", BJData]].forEach(function(item, i) {
    series.push(
      {
        name: item[0] + " Top10",
        type: "lines",
        zlevel: 2,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          constantSpeed: 20,
          symbol: planePath,
          symbolSize: 20,
        },

        lineStyle: {
          normal: {
            color: color[i],
            width: 2,
            opacity: 0.4,
            curveness: 0.2,
          },
        },
        data: convertData(item[1]),
      },
      {
        name: item[0] + " Top10",
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          brushType: "stroke",
        },
        label: {
          normal: {
            show: true,
            position: "right",
            formatter: "{b}",
          },
        },
        symbolSize: function(val) {
          return val[2] / 8;
        },
        itemStyle: {
          normal: {
            color: color[i],
          },
        },
        data: item[1].map(function(dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
          };
        }),
      }
    );
  });
  let option = {
    backgroundColor: "transparent",
    title: {
      show: false,
      text: "",
      left: "center",
      textStyle: {
        color: "#fff",
      },
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      show: false,
      orient: "vertical",
      top: "bottom",
      left: "right",
      data: [],
      textStyle: {
        color: "#fff",
      },
      selectedMode: "single",
    },
    geo: {
      map: "china",
      label: {
        emphasis: {
          show: false,
        },
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: "#19546F",
          borderColor: "#00D2FF",
          borderWidth: 2,
        },
        emphasis: {
          areaColor: "#00D1FD",
        },
      },
    },
    series: series,
  };
  myChartMap.setOption(option);
}
