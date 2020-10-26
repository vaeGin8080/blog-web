<template>
  <el-form :model="form" size="mini" class="form" ref="form" label-width="70px">
    <el-form-item label="图表尺寸">
      <div class="flex">
        <el-input
          v-model.number="form.width"
          placeholder=""
          type="number"
          style="margin-right:10px"
          @blur="change"
        ></el-input>
        <el-input
          v-model.number="form.height"
          type="number"
          placeholder=""
          @blur="change"
        ></el-input>
      </div>
    </el-form-item>
    <el-form-item label="图表位置">
      <div class="flex">
        <el-input
          v-model.number="form.left"
          placeholder=""
          type="number"
          @blur="change"
          style="margin-right:10px"
        ></el-input>
        <el-input
          v-model.number="form.top"
          type="number"
          @blur="change"
          placeholder=""
        ></el-input>
      </div>
    </el-form-item>
    <el-form-item label="背景颜色">
      <el-color-picker
        v-model="config.option.backgroundColor"
        show-alpha
        @change="change"
      ></el-color-picker>
    </el-form-item>
    <el-form-item label="标题名称">
      <div class="flex">
        <el-input
          v-model="config.option.title.text"
          placeholder=""
          type="text"
          style="margin-right:10px"
        ></el-input>
      </div>
    </el-form-item>
    <el-form-item label="字体颜色">
      <el-color-picker
        v-model="config.option.title.color"
        @change="change"
      ></el-color-picker>
    </el-form-item>

    <el-form-item label="字体大小">
      <div class="flex">
        <el-input
          v-model.number="config.option.title.fontSize"
          type="number"
          @blur="change"
          placeholder=""
        ></el-input>
      </div>
    </el-form-item>
    <el-form-item label="文字方向">
      <div class="flex">
        <el-radio-group
          v-model="config.option.title.align"
          size="small"
          @change="change"
        >
          <el-radio-button label="flex-start">左对齐</el-radio-button>
          <el-radio-button label="center">居中对齐</el-radio-button>
          <el-radio-button label="flex-end">右对齐</el-radio-button>
        </el-radio-group>
      </div>
    </el-form-item>

    <el-form-item label="重置">
      <el-button type="info" @click="restart">恢复默认设置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: "textOption",
  props: {
    config: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      form: {},
    };
  },
  activated() {
    this.form = { ...this.form, ...this.config };
    console.log(this.config);
  },
  deactivated() {},
  watch: {},
  computed: {},
  methods: {
    restart() {
      this.$refs["form"].resetFields();
    },
    change() {
      console.log(this.form);
      this.$emit("change", this.form);
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
