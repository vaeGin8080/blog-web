<template>
  <div class="titles" :style="option">
    <span v-if="config.title">{{ config.title.text }}</span>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    config: {
      type: Object,
      default() {
        return {
          option: {},
        };
      },
    },
  },
  watch: {
    config: {
      handler(news) {
        let c = news;
        this.option = {
          background: c.backgroundColor,
          fontSize: c.title.fontSize + "px",
          color: c.title.color,
          justifyContent: c.title.align,
        };
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.titles {
  width: 100%;
  height: 100%;
  background: transparent;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  padding: 0 10px;
}
</style>
