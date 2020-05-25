<template>
  <div
    class="back-img"
    :style="{
      backgroundImage: `url(${src})`,
      backgroundPosition: '50% 40%',
      backgroundSize: 'cover',
      minHeight: !$isMB() ? `${minHeight}px` : `220px`,
    }"
  ></div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: "",
    },
    minHeight: {
      type: Number,
      default: 350,
    },
  },
};
</script>

<style lang="scss" scoped>
.back-img {
  width: 100%;
  max-height: 350px;
}
</style>
