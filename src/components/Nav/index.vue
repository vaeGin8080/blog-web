<template>
  <div class="menu">
    <ul class="nav-list container flex-center">
      <li
        class="nav-item"
        :class="{ active: acitve == index }"
        v-for="(item, index) in navList"
        @click="tabAct(index, item)"
        :key="index"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      acitve: 0,
      navList: [
        {
          label: "推荐",
          path: "/home",
        },
        {
          label: "前端",
          path: "/home",
        },
        {
          label: "后端",
          path: "/home",
        },
        {
          label: "其他",
          path: "/home",
        },
      ],
    };
  },
  methods: {
    tabAct(index, item) {
      if (index === this.active) return;
      this.acitve = index;
      let label = item.label;
      if (index == 0) label = "";
      this.$emit("tab", label);
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: 45px;
  z-index: 100;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  transition: all 0.2s;
  transform: translateZ(0);
  background: white;
  .nav-list {
    height: 100%;
    .nav-item {
      padding: 0 15px;
      color: #71777c;
      font-size: 14px;
      cursor: pointer;
    }
    .active {
      color: #007fff;
    }
  }
}
</style>
