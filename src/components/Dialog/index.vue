<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="openCardDialog"
      :close-on-click-modal="false"
      @close="close"
      width="320px"
      style="margin-top:15vh"
    >
      <slot></slot>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Dialog",
  props: {
    title: String,
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    openCardDialog: {
      get() {
        return this.show;
      },
      set(val) {
        this.$emit("update:show", val); // openCardDialog改变的时候通知父组件
      },
    },
  },
  methods: {
    close() {
      this.openCardDialog = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
