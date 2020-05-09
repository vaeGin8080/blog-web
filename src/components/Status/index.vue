<template>
  <div class="status flex-ali">
    <Loading v-if="cg == 'loading'"></Loading>
    <Empty v-else />
  </div>
</template>

<script>
import Empty from "./Empty";
import Loading from "./Loading";
export default {
  name: "Status",
  components: { Empty, Loading },
  props: {
    cg: {
      type: String,
      default: "loading",
    },
  },
  created() {
    console.log(this.cg);
  },
};
</script>

<style lang="scss" scoped>
.status {
  padding: 40px;
}
</style>
