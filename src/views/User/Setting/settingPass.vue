<template>
  <div class="setting-view">
    <h1>{{ title }}</h1>
    <ul class="setting-list">
      <li class="item" v-for="(item, index) in formList" :key="index">
        <span>{{ item.label }}</span>
        <div class="flex-sub">
          <input
            class="in"
            v-model="form[item.key]"
            type="password"
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
import { getUserUpdatePass } from "@/api/user";
import notify from "@/utils/notify";

export default {
  props: {
    title: "",
  },
  data() {
    return {
      defaultImg: require("@/assets/img/default-avatar.svg"),
      form: {
        oldPassword: "",
        newPassword: "",
        repeatPassword: "",
      },
      formList: [
        {
          label: "旧密码",
          key: "oldPassword",
          placeholder: "请输入原密码",
          rule: { require: true, message: "请输入原密码" },
        },
        {
          label: "新密码",
          key: "newPassword",
          placeholder: "请输入新密码",
          rule: { require: true, message: "请输入新密码" },
        },
        {
          label: "确认新密码",
          key: "repeatPassword",
          placeholder: "确认新密码",
          rule: { require: true, message: "请再次输入新密码" },
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
      let formList = this.formList;
      for (let i = 0; i < formList.length; i++) {
        if (formList[i].rule.require && !form[formList[i].key]) {
          notify.error(formList[i].rule.message);
          return;
        }
      }
      if (form.newPassword !== form.repeatPassword) {
        notify.error("两次输入的密码不一致");
        return;
      }
      getUserUpdatePass(form).then((res) => {
        if (res.status == 1) {
          notify.success("更新成功");
          this.form = {};
        } else {
          notify.error(res.msg);
        }
      });
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
