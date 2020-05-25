<template>
  <div class="menu">
    <ul class="nav-list container flex-center">
      <li
        class="nav-item"
        :class="{ active: active == index }"
        v-for="(item, index) in list"
        @click="tabAct(index, item)"
        :key="index"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      active: 0,
    };
  },
  created() {},
  watch: {},
  methods: {
    tabAct(index, item) {
      this.active = index;
      this.$emit("tab-act", { index, item });
    },
  },
};
</script>

<style lang="scss" scoped>
.menu {
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
      &:hover {
        @include font_color();
      }
    }
    .active {
      @include font_color();
    }
  }
}
</style>
