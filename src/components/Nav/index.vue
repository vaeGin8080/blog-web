<template>
  <div class="menu" :class="{ 'is-auto': !autoHeader }">
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
import { mapGetters } from "vuex";
export default {
  name: "Nav",
  props: ["navList", "type"],
  data() {
    return {
      acitve: 0,
    };
  },
  computed: {
    ...mapGetters(["autoHeader"]),
  },
  methods: {
    tabAct(index, item) {
      if (index === this.active) return;
      this.acitve = index;
      let label = item.label;
      if (index == 0) label = "";
      if (this.type == "index") label = index;
      this.$emit("tab", { label, index });
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
  transition: all 0.1s;
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
.is-auto {
  top: 0;
}
</style>
