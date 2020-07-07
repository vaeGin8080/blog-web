<template>
  <router-link
    :to="defaultPath + '/' + path"
    :tag="tag"
    v-slot="{ href, route, navigate, isActive }"
  >
    <!-- target="_blank" -->
    <a target="_blank" :active="isActive" :href="href" rel="noopener">
      <slot></slot>
    </a>
  </router-link>
</template>

<script>
export default {
  name: "Link",
  props: {
    path: {
      type: [String, Number],
      default: "",
    },
    tag: {
      type: String,
      default: "li",
    },
    defaultPath: {
      type: String,
      default: "/detail/index",
    },
  },
  computed: {
    target() {
      return !this.$isMB() ? "_blank" : "";
    },
  },
};
</script>

<style></style>
