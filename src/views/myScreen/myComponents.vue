<template>
  <div class="main-screen">
    <div class="item flex flex-direction justify-center align-center" v-for="(item, index) in list" :key="index">
      <img :src="item.chartImg" />
      <span>{{ item.chartName }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    tap(type) {
      this.$emit("tap", type);
    },
  },
};
</script>

<style lang="scss" scoped>
.main-screen {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  padding-top: 8px;
  user-select: none;
  padding-bottom: 50px;
  padding-left: 4px;
}
.item {
  width: 258px;
  height: 184px;
  margin: 16px;
  color: white;
  padding: 10px 0;
  transition: 0.2s;
  &:hover {
    font-size: 16px;
    box-shadow: 0 0 10px 3px #2681ff;
    transform: scale(1.1);
  }
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
	margin-bottom: 10px;
  }
}
.add {
  font-size: 14px;
  color: #dbe8ff;
  border: 1px solid #2681ff;
  background-image: linear-gradient(
    -90deg,
    rgba(0, 161, 255, 0.39) 0,
    rgba(0, 137, 255, 0.19) 100%
  );
  box-shadow: 0 0 10px -8px #000;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    font-size: 16px;
    box-shadow: 0 0 10px 3px #2681ff;
    transform: scale(1.1);
  }
  .add-part {
    display: block;
    transform-origin: center;
    letter-spacing: 2px;
    height: 98px;
    line-height: 98px;
    text-align: center;
    background: rgba(22, 27, 34, 0.25);
  }
}
</style>
