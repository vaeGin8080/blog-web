let echarts = require("echarts");
let data = [
  [
    [28604, 77, 17096869, "Australia", 1990],
    [31163, 77.4, 27662440, "Canada", 1990],
    [1516, 68, 1154605773, "China", 1990],
    [13670, 74.7, 10582082, "Cuba", 1990],
    [28599, 75, 4986705, "Finland", 1990],
    [29476, 77.1, 56943299, "France", 1990],
    [31476, 75.4, 78958237, "Germany", 1990],
    [28666, 78.1, 254830, "Iceland", 1990],
    [1777, 57.7, 870601776, "India", 1990],
    [29550, 79.1, 122249285, "Japan", 1990],
    [2076, 67.9, 20194354, "North Korea", 1990],
    [12087, 72, 42972254, "South Korea", 1990],
    [24021, 75.4, 3397534, "New Zealand", 1990],
    [43296, 76.8, 4240375, "Norway", 1990],
    [10088, 70.8, 38195258, "Poland", 1990],
    [19349, 69.6, 147568552, "Russia", 1990],
    [10670, 67.3, 53994605, "Turkey", 1990],
    [26424, 75.7, 57110117, "United Kingdom", 1990],
    [37062, 75.4, 252847810, "United States", 1990],
  ],
  [
    [44056, 81.8, 23968973, "Australia", 2015],
    [43294, 81.7, 35939927, "Canada", 2015],
    [13334, 76.9, 1376048943, "China", 2015],
    [21291, 78.5, 11389562, "Cuba", 2015],
    [38923, 80.8, 5503457, "Finland", 2015],
    [37599, 81.9, 64395345, "France", 2015],
    [44053, 81.1, 80688545, "Germany", 2015],
    [42182, 82.8, 329425, "Iceland", 2015],
    [5903, 66.8, 1311050527, "India", 2015],
    [36162, 83.5, 126573481, "Japan", 2015],
    [1390, 71.4, 25155317, "North Korea", 2015],
    [34644, 80.7, 50293439, "South Korea", 2015],
    [34186, 80.6, 4528526, "New Zealand", 2015],
    [64304, 81.6, 5210967, "Norway", 2015],
    [24787, 77.3, 38611794, "Poland", 2015],
    [23038, 73.13, 143456918, "Russia", 2015],
    [19360, 76.5, 78665830, "Turkey", 2015],
    [38225, 81.4, 64715810, "United Kingdom", 2015],
    [53354, 79.1, 321773631, "United States", 2015],
  ],
];

let points = [
  { value: [118.8062, 31.9208], itemStyle: { color: "#4ab2e5" } },
  { value: [127.9688, 45.368], itemStyle: { color: "#4fb6d2" } },
  { value: [110.3467, 41.4899], itemStyle: { color: "#52b9c7" } },
  { value: [125.8154, 44.2584], itemStyle: { color: "#5abead" } },
  { value: [116.4551, 40.2539], itemStyle: { color: "#f34e2b" } },
  { value: [123.1238, 42.1216], itemStyle: { color: "#f56321" } },
  { value: [114.4995, 38.1006], itemStyle: { color: "#f56f1c" } },
  { value: [117.4219, 39.4189], itemStyle: { color: "#f58414" } },
  { value: [112.3352, 37.9413], itemStyle: { color: "#f58f0e" } },
  { value: [109.1162, 34.2004], itemStyle: { color: "#f5a305" } },
  { value: [103.5901, 36.3043], itemStyle: { color: "#e7ab0b" } },
  { value: [106.3586, 38.1775], itemStyle: { color: "#dfae10" } },
  { value: [101.4038, 36.8207], itemStyle: { color: "#d5b314" } },
  { value: [103.9526, 30.7617], itemStyle: { color: "#c1bb1f" } },
  { value: [108.384366, 30.439702], itemStyle: { color: "#b9be23" } },
  { value: [113.0823, 28.2568], itemStyle: { color: "#a6c62c" } },
  { value: [102.9199, 25.46639], itemStyle: { color: "#96cc34" } },
  { value: [119.4543, 25.9222] },
];
export default {
  bar: {
    backgroundColor: "rgba(14, 14, 14, 1)",
    color: ["#2681ff"],
    title: {
      text: "",
      top: 21,
      left: "21",
      textStyle: {
        fontSize: 18,
        color: "#fff",
      },
    },
    animation: false,
    grid: {
      top: "67",
      left: "32",
      bottom: "15",
      right: "39",
      containLabel: true,
    },
    legend: {
      show: true,
      top: 15,
      right: 26,
      data: ["2018年", "2019年", "2020年"],
      textStyle: {
        color: "RGB(193,223,255)",
      },
    },
    xAxis: [
      {
        type: "category",
        data: ["三角函数", "数列", "平面向量", "不等式"],
        axisTick: {
          alignWithLabel: true,
        },
        nameTextStyle: {
          color: "#fff",
        },
        axisLine: {
          lineStyle: {
            color: "RGB(47,68,114)",
          },
        },
        axisLabel: {
          textStyle: {
            color: "white",
          },
          margin: 20,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          textStyle: {
            color: "white",
          },
          formatter: "{value}",
        },
        splitLine: {
          lineStyle: {
            type: "dashed",
            color: "RGB(47,68,114)",
          },
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "RGB(47,68,114)",
          },
        },
      },
    ],
    series: [
      {
        name: "2018年",
        type: "bar",
        //silent: true,
        barWidth: "20",
        //barGap: '-100%', // Make series be overlap
        data: [
          {
            value: 3,
          },
          {
            value: 6,
          },
          {
            value: 10,
          },
          {
            value: 6,
          },
          {
            value: 1,
          },
          {
            value: 6,
          },
        ],
      },
    ],
  },
  lines: {
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
    title: {
        text: '渐变堆叠面积图'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'Line 1',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(128, 255, 165)'
                }, {
                    offset: 1,
                    color: 'rgba(1, 191, 236)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
            data: [140, 232, 101, 264, 90, 340, 250]
        },
        {
            name: 'Line 2',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 221, 255)'
                }, {
                    offset: 1,
                    color: 'rgba(77, 119, 255)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
            data: [120, 282, 111, 234, 220, 340, 310]
        },
        {
            name: 'Line 3',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(55, 162, 255)'
                }, {
                    offset: 1,
                    color: 'rgba(116, 21, 219)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
            data: [320, 132, 201, 334, 190, 130, 220]
        },
        {
            name: 'Line 4',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 0, 135)'
                }, {
                    offset: 1,
                    color: 'rgba(135, 0, 157)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
            data: [220, 402, 231, 134, 190, 230, 120]
        },
        {
            name: 'Line 5',
            type: 'line',
            stack: '总量',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(255, 191, 0)'
                }, {
                    offset: 1,
                    color: 'rgba(224, 62, 76)'
                }])
            },
            emphasis: {
                focus: 'series'
            },
            data: [220, 302, 181, 234, 210, 290, 150]
        }
    ]
},
  pie: {
    backgroundColor: "rgba(14, 14, 14, 1)",
    title: {
      text: "Customized Pie",
      left: "center",
      top: 20,
      textStyle: {
        color: "#ccc",
      },
    },

    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },

    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1],
      },
    },
    series: [
      {
        name: "访问来源",
        type: "pie",
        radius: "55%",
        center: ["50%", "50%"],
        data: [
          { value: 335, name: "直接访问" },
          { value: 310, name: "邮件营销" },
          { value: 274, name: "联盟广告" },
          { value: 235, name: "视频广告" },
          { value: 400, name: "搜索引擎" },
        ].sort(function(a, b) {
          return a.value - b.value;
        }),
        roseType: "radius",
        label: {
          color: "rgba(255, 255, 255, 0.3)",
        },
        labelLine: {
          lineStyle: {
            color: "rgba(255, 255, 255, 0.3)",
          },
          smooth: 0.2,
          length: 10,
          length2: 20,
        },
        itemStyle: {
          color: "#c23531",
          shadowBlur: 200,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },

        animationType: "scale",
        animationEasing: "elasticOut",
        animationDelay: function(idx) {
          return Math.random() * 200;
        },
      },
    ],
  },
  scatter: {
    backgroundColor: "rgba(14, 14, 14, 1)",
    title: {
      text: "0000",
      textStyle: {
        align: "center",
        color: "#fff",
        fontSize: 16,
      },
    },
    legend: {
      right: 10,
      data: ["1990", "2015"],
    },

    xAxis: {
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
      axisLabel: {
        color: "#fff",
      },
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          type: "dashed",
        },
      },
      scale: true,
      axisLabel: {
        color: "#fff",
      },
    },
    series: [
      {
        name: "1990",
        data: data[0],
        type: "scatter",
        symbolSize: function(data) {
          return Math.sqrt(data[2]) / 5e2;
        },
        emphasis: {
          label: {
            show: true,
            formatter: function(param) {
              return param.data[3];
            },
            position: "top",
          },
        },
        itemStyle: {
          shadowBlur: 10,
          shadowColor: "rgba(120, 36, 50, 0.5)",
          shadowOffsetY: 5,
          color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
              offset: 0,
              color: "rgb(251, 118, 123)",
            },
            {
              offset: 1,
              color: "rgb(204, 46, 72)",
            },
          ]),
        },
      },
      {
        name: "2015",
        data: data[1],
        type: "scatter",
        symbolSize: function(data) {
          return Math.sqrt(data[2]) / 5e2;
        },
        emphasis: {
          label: {
            show: true,
            formatter: function(param) {
              return param.data[3];
            },
            position: "top",
          },
        },
        itemStyle: {
          shadowBlur: 10,
          shadowColor: "rgba(25, 100, 150, 0.5)",
          shadowOffsetY: 5,
          color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [
            {
              offset: 0,
              color: "rgb(129, 227, 238)",
            },
            {
              offset: 1,
              color: "rgb(25, 183, 207)",
            },
          ]),
        },
      },
    ],
  },
  map: {
    backgroundColor: "rgba(14, 14, 14, 1)",
    title: {
      text: "",
      top: 21,
      left: "21",
      textStyle: {
        fontSize: 18,
        color: "#fff",
      },
    },
    geo: {
      map: "china",
      aspectScale: 0.75, //长宽比
      zoom: 1.1,
      roam: false,
      itemStyle: {
        normal: {
          areaColor: {
            type: "radial",
            x: 0.5,
            y: 0.5,
            r: 0.8,
            colorStops: [
              {
                offset: 0,
                color: "#09132c", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#274d68", // 100% 处的颜色
              },
            ],
            globalCoord: true, // 缺省为 false
          },
          shadowColor: "rgb(58,115,192)",
          shadowOffsetX: 10,
          shadowOffsetY: 11,
        },
        emphasis: {
          areaColor: "#2AB8FF",
          borderWidth: 0,
          color: "green",
          label: {
            show: false,
          },
        },
      },
      regions: [
        {
          name: "南海诸岛",
          itemStyle: {
            areaColor: "rgba(0, 10, 52, 1)",

            borderColor: "rgba(0, 10, 52, 1)",
            normal: {
              opacity: 0,
              label: {
                show: false,
                color: "#009cc9",
              },
            },
          },
        },
      ],
    },
    series: [
      {
        type: "map",
        roam: false,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: "#1DE9B6",
            },
          },
          emphasis: {
            textStyle: {
              color: "rgb(183,185,14)",
            },
          },
        },

        itemStyle: {
          normal: {
            borderColor: "rgb(147, 235, 248)",
            borderWidth: 1,
            areaColor: {
              type: "radial",
              x: 0.5,
              y: 0.5,
              r: 0.8,
              colorStops: [
                {
                  offset: 0,
                  color: "#09132c", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#274d68", // 100% 处的颜色
                },
              ],
              globalCoord: true, // 缺省为 false
            },
          },
          emphasis: {
            areaColor: "rgb(46,229,206)",
            //    shadowColor: 'rgb(12,25,50)',
            borderWidth: 0.1,
          },
        },
        zoom: 1.1,
        //     roam: false,
        map: "china", //使用
        // data: this.difficultData //热力图数据   不同区域 不同的底色
      },
      {
        type: "effectScatter",
        coordinateSystem: "geo",
        showEffectOn: "render",
        zlevel: 1,
        rippleEffect: {
          period: 15,
          scale: 4,
          brushType: "fill",
        },
        hoverAnimation: true,
        label: {
          normal: {
            formatter: "{b}",
            position: "right",
            offset: [15, 0],
            color: "#1DE9B6",
            show: true,
          },
        },
        itemStyle: {
          normal: {
            color:
              "#1DE9B6" /* function (value){ //随机颜色
return "#"+("00000"+((Math.random()*16777215+0.5)>>0).toString(16)).slice(-6);
}*/,
            shadowBlur: 10,
            shadowColor: "#333",
          },
        },
        symbolSize: 12,
        data: points,
      }, //地图线的动画效果
      {
        type: "lines",
        zlevel: 2,
        effect: {
          show: true,
          period: 4, //箭头指向速度，值越小速度越快
          trailLength: 0.4, //特效尾迹长度[0,1]值越大，尾迹越长重
          symbol: "arrow", //箭头图标
          symbolSize: 7, //图标大小
        },
        lineStyle: {
          normal: {
            color: "#1DE9B6",
            width: 1, //线条宽度
            opacity: 0.1, //尾迹线条透明度
            curveness: 0.3, //尾迹线条曲直度
          },
        },
        data: [
          {
            coords: [
              [118.8062, 31.9208],
              [119.4543, 25.9222],
            ],
            lineStyle: { color: "#4ab2e5" },
          },
          {
            coords: [
              [127.9688, 45.368],
              [119.4543, 25.9222],
            ],
            lineStyle: { color: "#4fb6d2" },
          },
          {
            coords: [
              [110.3467, 41.4899],
              [119.4543, 25.9222],
            ],
            lineStyle: { color: "#52b9c7" },
          },
          {
            coords: [
              [125.8154, 44.2584],
              [119.4543, 25.9222],
            ],
            lineStyle: { color: "#5abead" },
          },
          {
            coords: [
              [116.4551, 40.2539],
              [119.4543, 25.9222],
            ],
            lineStyle: { color: "#f34e2b" },
          },
          {
            coords: [
              [123.1238, 42.1216],
              [119.4543, 25.9222],
            ],
            lineStyle: { color: "#f56321" },
          },
          {
            coords: [
              [114.4995, 38.1006],
              [119.4543, 25.9222],
            ],
            lineStyle: { color: "#f56f1c" },
          },
          {
            coords: [
              [117.4219, 39.4189],
              [119.4543, 25.9222],
            ],
            lineStyle: { color: "#f58414" },
          },
          {
            coords: [
              [112.3352, 37.9413],
              [119.4543, 25.9222],
            ],
            lineStyle: { color: "#f58f0e" },
          },
          {
            coords: [
              [109.1162, 34.2004],
              [119.4543, 25.9222],
            ],
            lineStyle: { color: "#f5a305" },
          },
          {
            coords: [
              [103.5901, 36.3043],
              [119.4543, 25.9222],
            ],
            lineStyle: { color: "#e7ab0b" },
          },
          {
            coords: [
              [106.3586, 38.1775],
              [119.4543, 25.9222],
            ],
            lineStyle: { color: "#dfae10" },
          },
          {
            coords: [
              [101.4038, 36.8207],
              [119.4543, 25.9222],
            ],
            lineStyle: { color: "#d5b314" },
          },
          {
            coords: [
              [103.9526, 30.7617],
              [119.4543, 25.9222],
            ],
            lineStyle: { color: "#c1bb1f" },
          },
          {
            coords: [
              [108.384366, 30.439702],
              [119.4543, 25.9222],
            ],
            lineStyle: { color: "#b9be23" },
          },
          {
            coords: [
              [113.0823, 28.2568],
              [119.4543, 25.9222],
            ],
            lineStyle: { color: "#a6c62c" },
          },
          {
            coords: [
              [102.9199, 25.46639],
              [119.4543, 25.9222],
            ],
            lineStyle: { color: "#96cc34" },
          },
        ],
      },
    ],
  },
  title: {
    backgroundColor: "rgba(14, 14, 14, 1)",
    title: {
      text: "",
      color: "",
      fontSize: "",
    },
  },
};
