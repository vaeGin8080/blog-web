<template>
  <mavon-editor
    :value="markContent"
    :editable="editable"
    :ishljs="true"
    :toolbarsFlag="tool"
    @change="change"
    :subfield="subfield"
    :boxShadow="false"
    :defaultOpen="defaultOpen"
  />
</template>

<script>
export default {
  name: "MarkDown",
  props: {
    value: String,
    value: {
      type: String,
      default: "",
    },
    editable: {
      type: Boolean,
      default: false,
    },
    subfield: {
      type: Boolean,
      default: false,
    },
    tool: {
      type: Boolean,
      default: false,
    },
    defaultOpen: {
      type: String,
      default: "preview",
    },
  },
  data() {
    return {};
  },
  computed: {
    markContent() {
      return this.value;
    },
  },
  methods: {
    change() {},
  },
};
</script>

<style lang="scss" scoped></style>
