<template>
  <div class="header flex-ali">
    <header class="fix-header">
      <div class="container header-container flex">
        <a class="logo flex-center">
          <img src="https://vaegin.top/img/qingzi.jpeg" />
        </a>
        <nav class="flex-sub">
          <ul class="h-100">
            <li class="xs-hide h-100">
              <ul class="flex-center">
                <li
                  class="nav-item"
                  :class="{ active: acitve == index }"
                  v-for="(item, index) in navList"
                  @click="tabAct(index)"
                  :key="index"
                >
                  <router-link :to="item.path"> {{ item.label }}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      acitve: 1,
      navList: [
        {
          label: "首页",
          path: "/index",
        },
        {
          label: "文章",
          path: "/home",
        },
        // {
        //   label: "话题",
        //   path: "/home",
        // },
        // {
        //   label: "小册",
        //   path: "/home",
        // },
        // {
        //   label: "活动",
        //   path: "/home",
        // },
      ],
    };
  },
  methods: {
    tabAct(index) {
      this.acitve = index;
    },
  },
};
</script>

<style lang="scss" scoped>
$height: 60px;
.header {
  height: $height;
  .header-container {
    line-height: $height;
    .nav-item {
      padding: 0 15px;
      color: #71777c;
      font-size: 16px;
    }
    .active {
      color: #007fff;
    }
  }
  .logo {
    max-width: 98px;
    height: $height;
    margin-right: 30px;
    border-radius: 50%;

    img {
      width: 100%;
      height: 38px;
      object-fit: contain;
      border-radius: 50%;
    }
  }
}
.fix-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.2s;
  background: #fff;
  height: 61px;
  color: #909090;
  z-index: 1600;
  border-bottom: 1px solid #f1f1f1;
}
</style>
