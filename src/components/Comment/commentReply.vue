<template>
  <div class="form-box flex-sub">
    <div class="input-box flex-center" :class="{ 'in-fouce': fouce }">
      <input
        type="text"
        class="in"
        v-model="commentValue"
        placeholder="请输入评论"
        @focus="handleFocus"
        @blur="handleBlur"
        @keyup.enter="reply"
      />
    </div>
    <div class="action-box flex-center justify-between" v-show="fouce">
      <i></i>
      <span @click="reply">评论</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "commentReply",
  data() {
    return {
      fouce: false,
      commentValue: "",
    };
  },
  methods: {
    handleFocus() {
      if (!this.$store.getters.isLogin) {
        this.$store.commit("handleTime");
        return false;
      }
      this.fouce = true;
    },
    handleBlur() {
      if (!this.commentValue) {
        this.fouce = false;
      }
    },
    reply() {
      this.$emit("click", this.commentValue);
      this.commentValue = "";
    },
  },
};
</script>

<style lang="scss" scoped>
$height: 36px;

.in-fouce {
  border-color: #007fff !important;
}
.form-box {
  .input-box {
    min-height: $height;
    background: white;
    border: 1px solid #f1f1f1;
    transition: all 0.3s;
    .in {
      border: none;
      width: 100%;
      height: $height;
      padding-left: 10px;
      outline: none;
      color: #17181a;
      font-size: 12px;
    }
  }
  .action-box {
    margin-top: 8px;
    transition: all 0.3s;
    & > span {
      margin-left: auto;
      padding: 6px 14px;
      font-size: 14px;
      color: #fff;
      background-color: #027fff;
      border-radius: 2px;
      cursor: pointer;
    }
  }
}
</style>
