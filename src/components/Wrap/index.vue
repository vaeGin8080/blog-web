<template>
  <div :class="[hasNav ? 'has-nav' : '', 'home']">
    <div class="flex">
      <ul class="home-content bg-white">
        <slot></slot>
      </ul>
      <slot name="aside"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hasNav: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  background: #f4f5f5;
  margin-top: 20px;
  margin-bottom: 20px;
  .home-content {
    max-width: 100%;
    min-height: 100px;
    flex: 1;
    padding: 0 20px;
  }
}
.has-nav {
  margin-top: 65px;
}
</style>
