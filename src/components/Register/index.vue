<template>
  <div class="form">
    <div class="title-img">
      <img
        :src="status[active]"
        :class="[active == 0 ? 'img0' : active == 1 ? 'img1' : 'img2']"
      />
    </div>
    <el-form :model="form">
      <div class="form-item">
        <el-input
          v-model="form.userName"
          placeholder="请输入用户名"
          type="text"
          @focus="userFouce"
          @blur="blur"
        ></el-input>
      </div>
      <div class="form-item">
        <el-input
          v-model="form.passWord"
          placeholder="请输入密码"
          show-password
          type="password"
          @focus="passFouce"
          @blur="blur"
        ></el-input>
      </div>
      <div class="form-item">
        <el-input
          v-model="form.veify"
          placeholder="请再次输入密码"
          show-password
          type="password"
        ></el-input>
      </div>
      <el-button type="primary" style="width:100%" @click="submit"
        >注册</el-button
      >
      <div class="msg flex-ali">
        <span @click="onChange">已有账号登录</span>
      </div>
    </el-form>
  </div>
</template>

<script>
import { getRegister } from "@/api/login";

export default {
  name: "Register",
  data() {
    return {
      active: 0,
      status: {
        0: require("@/assets/img/login-default.png"),
        1: require("@/assets/img/login-user.png"),
        2: require("@/assets/img/login-pass.png"),
      },
      form: {
        userName: "",
        passWord: "",
        veify: "",
      },
    };
  },
  created() {},
  methods: {
    userFouce() {
      this.active = 1;
    },
    passFouce() {
      this.active = 2;
    },
    blur() {
      this.active = 0;
    },
    onChange() {
      this.$emit("onChange", 0);
    },
    submit() {
      if (!this.form.userName) {
        this.$notify.error({
          title: "错误",
          message: "请输入用户名",
          duration: 1000,
        });
        return;
      } else if (!this.form.passWord) {
        this.$notify.error({
          title: "错误",
          message: "请输入密码",
          duration: 1000,
        });
        return;
      } else if (this.form.passWord !== this.form.veify) {
        this.$notify.error({
          title: "错误",
          message: "密码前后不一致",
          duration: 1000,
        });
        return;
      }
      let obj = {
        user_name: this.form.userName,
        user_password: this.form.passWord,
      };
      getRegister(obj).then((res) => {
        if (res.status === 1) {
          this.$emit("onChange", 0);
          this.$notify.success({
            title: "成功",
            message: res.msg,
            duration: 1000,
          });
        } else {
          this.$notify.error({
            title: "错误",
            message: res.msg,
            duration: 1000,
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  position: relative;
  .title-img {
    position: absolute;
    top: -55px;
    left: 50%;
    width: 120px;
    transform: translate(-50%, -83%);
    z-index: 1;
    .img0 {
      width: 120px;
      height: 95px;
    }
    .img1 {
      width: 120px;
      height: 113px;
    }
    .img2 {
      width: 103px;
      height: 83px;
    }
  }
  .form-item {
    margin-bottom: 12px;
  }
  .msg {
    color: #767676;
    margin-top: 12px;
    & > span {
      color: #007fff;
      cursor: pointer;
    }
  }
}
</style>
