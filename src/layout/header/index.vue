<template>
  <div class="header flex-ali">
    <header class="fix-header">
      <div class="container header-container flex">
        <a class="logo flex-center">
          <img src="https://vaegin.top/img/qingzi.jpeg" />
        </a>
        <nav class="flex-sub">
          <ul class="h-100 flex-center justify-between">
            <li class="xs-hide h-100">
              <ul class="flex-center">
                <li
                  class="nav-item"
                  :class="{ active: acitve == index }"
                  v-for="(item, index) in navList"
                  @click="tabAct(index)"
                  :key="index"
                >
                  <router-link :to="item.path"> {{ item.label }}</router-link>
                </li>
              </ul>
            </li>
            <li class="xs-show">
              <span class="nav-item">首页</span>
            </li>
            <li
              class="user-info flex-center"
              v-if="userInfo && userInfo.user_id"
            >
              <i class="el-icon-message-solid"></i>
              <el-dropdown @command="handleCommand">
                <div class="el-dropdown-link flex-center">
                  <img class="header-img" :src="userInfo.headerImg" />
                </div>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="a">我的主页</el-dropdown-item>
                  <el-dropdown-item command="b">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
            <li class="head-form" v-else>
              <span @click="showDialog(0)">登录</span>
              <i>·</i>
              <span @click="showDialog(1)">注册</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <Dialog v-if="show" :show.sync="show" :title="type == 0 ? '登录' : '注册'">
      <Login v-if="type == 0" @onChange="showDialog" @close="close"></Login>
      <Register v-else @onChange="showDialog" @close="close"></Register>
    </Dialog>
  </div>
</template>

<script>
import Dialog from "@/components/Dialog";
import Login from "@/components/Login";
import Register from "@/components/Register";
import { mapGetters } from "vuex";
export default {
  name: "Header",
  components: { Dialog, Login, Register },
  data() {
    return {
      acitve: 0,
      show: false,
      type: 0,
      navList: [
        {
          label: "首页",
          path: "/home",
        },
        // {
        //   label: "文章",
        //   path: "/home",
        // },
      ],
    };
  },
  computed: {
    ...mapGetters(["userInfo", "isLogin", "timeStamp"]),
  },
  watch: {
    timeStamp(news, olds) {
      console.log(this.isLogin);
      if (!this.isLogin) {
        this.show = true;
      }
    },
  },
  methods: {
    tabAct(index) {
      this.acitve = index;
    },
    showDialog(type) {
      this.type = type;
      this.show = true;
    },
    close() {
      this.show = false;
    },
    handleCommand(command) {
      if (command === "a") {
        this.$router.push({
          path: "/user/index",
          name: "User",
          query: {
            id: this.userInfo.user_id,
          },
        });
      }
      if (command === "b") {
        this.$store.commit("removeLogin");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$height: 60px;
.header {
  height: $height;
  .header-container {
    line-height: $height;
    .nav-item {
      padding: 0 15px;
      color: #71777c;
      font-size: 16px;
    }
    .active {
      color: #007fff;
    }
  }
  .logo {
    max-width: 45px;
    height: $height;
    margin-right: 20px;
    border-radius: 50%;
    img {
      width: 100%;
      height: 38px;
      object-fit: contain;
      border-radius: 50%;
    }
  }
  .user-info {
    cursor: pointer;
    & > i {
      color: #71777c;
      font-size: 24px;
      margin-right: 20px;
    }
    .header-img {
      width: 30px;
      height: 30px;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  .head-form {
    color: #007fff;
    font-size: 16px;
    & > i {
      margin: 0 5px;
    }
    & > span {
      cursor: pointer;
    }
  }
}
.fix-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.2s;
  background: #fff;
  height: 61px;
  color: #909090;
  z-index: 1600;
  padding: 0 10px;
  border-bottom: 1px solid #f1f1f1;
}
</style>
