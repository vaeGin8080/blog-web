## 晓风残月&博客网站

基于 vue3.0 + element 开发的响应式项目

开发者：晓风残月

[在线地址](https://vaegin.top/blogFront)

[后台链接](https://github.com/vaeGin8080/blog-admin)

[后端链接](https://github.com/vaeGin8080/blog-admin-back)

### 界面

项目中界面参考掘金网站，因为平时经常逛掘金，觉得界面简洁大方，雍容得体。

### 技术栈

核心：vue+element+vuex+vue-router+axios+mavon-editor

### 前序准备

需要在本地安装 node 和 git。本项目技术栈基于 ES2015+、vue、vuex、vue-router 、vue-cli 、axios 和 element-ui，所有的请求数据都使用 Express 进行模拟，也可通过 Mock.js 进行模拟

### 安装&构建

```
# 安装依赖
yarn install

# 开发环境
yarn start

# 打包项目
yarn build
```

### 项目目录

```
├── build                      # 构建相关
├── mock                       # 项目mock 模拟数据
├── public                     # 静态资源
│   │── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 主题 字体等静态资源
│   ├── components             # 全局公用组件
│   ├── directive              # 全局指令
│   ├── filters                # 全局 filter
│   ├── icons                  # 项目所有 svg icons
│   ├── layout                 # 全局 layout
│   ├── router                 # 路由
│   ├── store                  # 全局 store管理
│   ├── styles                 # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── views                  # views 所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
│   └── permission.js          # 权限管理
│   └── setting.js             # 页面配置
├── tests                      # 测试
├── .env.xxx                   # 环境变量配置
├── .eslintrc.js               # eslint 配置项
├── .babelrc                   # babel-loader 配置
├── vue.config.js              # vue-cli 配置
└── package.json               # package.json
└── README.md                  # 项目说明
```

### 功能

```
- 登录 / 注册 / 注销

- 权限验证
  - 页面权限
  - 指令权限
  - 权限配置

- 环境发布
  - dev sit stage prod

- 全局功能
  - 多种动态换肤
  - 动态导航栏（支持多级路由嵌套）
  - 动态面包屑（可选）
  - 快捷导航(标签页)（可选）
  - 本地/后端 mock 数据
  - Screenfull全屏
  - 滚动固定导航

- 编辑器
  - 富文本
  - Markdown

- 表单
  - 动态表单验证

- 文章
  - 点赞
  - 评论
  - 编辑
  - 删除

- 错误页面
  - 401
  - 404

- 組件
  - 头像上传
  - 返回顶部
  - 拖拽Dialog
  - 列表拖拽
  - Sticky（固钉）
  - 弹窗
  - 信息提示
  - 加载提示
  - 空状态显示

- ECharts 图表
- Clipboard(剪贴复制)
```

### 项目截图

首页
![image](https://vaegin.top/img/web-01.png)

话题
![image](https://vaegin.top/img/web-02.png)

随机图库
![image](https://vaegin.top/img/web-03.png)

文章详情
![image](https://vaegin.top/img/web-04.png)

话题详情
![image](https://vaegin.top/img/web-05.png)

写文章
![image](https://vaegin.top/img/web-06.png)

个人详情
![image](https://vaegin.top/img/web-07.png)

个人资料编辑
![image](https://vaegin.top/img/web-08.png)

### 感想

项目都是在业余时间开发，界面参考掘金，前后端一起做，存在很多不完善的地方，仅供参考学习
