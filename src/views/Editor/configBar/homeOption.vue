<template>
  <el-form :model="form" size="mini" class="form" ref="form" label-width="70px">
    <el-form-item label="屏幕大小">
      <div class="flex">
        <el-input
          v-model="screenWidth"
          placeholder=""
          type="number"
          disabled
          style="margin-right:10px"
        ></el-input>
        <el-input
          v-model="screenHeight"
          type="number"
          disabled
          placeholder=""
        ></el-input>
      </div>
    </el-form-item>
    <el-form-item label="背景颜色">
      <el-color-picker v-model="bg" show-alpha></el-color-picker>
    </el-form-item>
    <el-form-item label="背景图">
      <UploadImg
        v-if="!chartConfig.bgImg"
        @success="success"
        :isLimit="false"
      ></UploadImg>
      <div v-if="chartConfig.bgImg" class="bg-img">
        <img :src="chartConfig.bgImg" />
        <div class="bg-mask">
          <span @click="success('')">删除</span>
        </div>
      </div>
    </el-form-item>
    <el-form-item label="重置">
      <el-button type="info" @click="restart">恢复默认背景</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import UploadImg from "@/components/UploadImg";
import { mapGetters } from "vuex";
export default {
  name: "homeOption",
  components: { UploadImg },
  data() {
    return {
      form: {},
    };
  },
  computed: {
    ...mapGetters(["chartConfig"]),
    bg: {
      set(val) {
        this.$store.commit("charts/handleChart", {
          type: "bg",
          value: val,
        });
      },
      get() {
        return this.chartConfig.bg;
      },
    },
    screenWidth: {
      set(val) {
        this.$store.commit("charts/handleChart", {
          type: "screenWidth",
          value: val,
        });
      },
      get() {
        return this.chartConfig.screenWidth;
      },
    },
    screenHeight: {
      set(val) {
        this.$store.commit("charts/handleChart", {
          type: "screenHeight",
          value: val,
        });
      },
      get() {
        return this.chartConfig.screenHeight;
      },
    },
  },
  methods: {
    success(value) {
      this.$store.commit("charts/handleChart", {
        type: "bgImg",
        value: value,
      });
    },
    restart() {
      this.$store.commit("charts/handleChart", {
        type: "bgImg",
        value: "",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  padding: 0 16px;
  .bg-img {
    width: 170px;
    height: 120px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .bg-mask {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.5);
      transition: 0.2s;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      opacity: 0;
      cursor: pointer;
    }
    &:hover {
      .bg-mask {
        opacity: 1;
      }
    }
  }
}
</style>
