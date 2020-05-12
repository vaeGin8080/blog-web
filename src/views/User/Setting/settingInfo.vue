<template>
  <div class="setting-view">
    <h1>{{ title }}</h1>
    <ul class="setting-list">
      <li class="item i1">
        <span>头像</span>
        <div class="flex-center">
          <img class="header-img" :src="form.headerImg || defaultImg" />
          <UploadImg @success="success"></UploadImg>
        </div>
      </li>
      <li class="item" v-for="(item, index) in formList" :key="index">
        <span>{{ item.label }}</span>
        <div class="flex-sub">
          <input
            class="in"
            v-model="form[item.key]"
            :placeholder="item.placeholder"
          />
        </div>
      </li>
    </ul>
    <div class="flex-center justify-end">
      <el-button type="primary" @click="submit">保存</el-button>
    </div>
  </div>
</template>

<script>
import UploadImg from "@/components/UploadImg";
import { mapGetters } from "vuex";

export default {
  components: { UploadImg },
  props: {
    title: "",
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  created() {
    this.form = this.userInfo;
  },
  data() {
    return {
      defaultImg: require("@/assets/img/default-avatar.svg"),
      form: {
        user_name: "",
        job: "",
        brief: "",
        headerImg: "",
        user_web: "",
        user_compony: "",
      },
      formList: [
        {
          label: "用户名",
          key: "user_name",
          placeholder: "请填写用户名",
          rule: "",
        },
        {
          label: "职位",
          key: "job",
          placeholder: "请填写职位",
          rule: "",
        },
        {
          label: "公司",
          key: "user_compony",
          placeholder: "请填写公司",
          rule: "",
        },
        {
          label: "个人介绍",
          key: "brief",
          placeholder: "请填写个人介绍",
          rule: "",
        },
        {
          label: "个人主页",
          key: "user_web",
          placeholder: "请填写个人主页",
          rule: "",
        },
      ],
    };
  },
  methods: {
    success(value) {
      this.$emit("success", value);
    },
    submit() {
      let form = this.form;
      if (form.user_name == "") {
        this.$notify.error({
          title: "错误",
          message: "用户名不能为空",
          duration: 1000,
        });
        return;
      }
      let query = {
        user_name: form.user_name,
        job: form.job,
        brief: form.brief,
        headerImg: form.headerImg,
        user_web: form.user_web,
        user_compony: form.user_compony,
      };
      this.$emit("submit", query);
    },
  },
};
</script>

<style lang="scss" scoped>
.setting-view {
  & > h1 {
    font-size: 24px;
    margin: 15px 0;
  }
  .setting-list {
    .item {
      padding: 20px 0;
      display: flex;
      border-top: 1px solid #f1f1f1;
      .header-img {
        width: 72px;
        height: 72px;
        margin-right: 12px;
        object-fit: cover;
      }
      & > span {
        display: inline-flex;
        align-items: center;
        width: 100px;
        font-size: 14px;
        color: #333;
      }
      .in {
        width: 80%;
        height: 30px;
        border: none;
        outline: none;
        color: #909090;
        font-size: 14px;
      }
    }
    .i1 {
      padding: 12px 0;
    }
  }
}
</style>
