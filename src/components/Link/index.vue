<template>
  <router-link
    :to="path"
    :tag="tag"
    v-slot="{ href, route, navigate, isActive }"
  >
    <!-- target="_blank" -->
    <a :active="isActive" :href="href">
      <slot></slot>
    </a>
  </router-link>
</template>

<script>
export default {
  name: "Link",
  props: {
    path: {
      type: String,
      default: "",
    },
    tag: {
      type: String,
      default: "li",
    },
  },
};
</script>

<style></style>
