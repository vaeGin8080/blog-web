<template>
  <el-image
    class="header-img"
    fit="cover"
    :src="userInfo.headerImg"
    :preview-src-list="[userInfo.headerImg]"
  ></el-image>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "UserHeaderImg",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
};
</script>

<style lang="scss" scoped>
.header-img {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-right: 30px;
}
</style>
