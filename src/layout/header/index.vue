<template>
  <div class="header flex-ali">
    <header class="fix-header" :class="{ 'is-auto': !autoHeader }">
      <div class="container header-container flex">
        <a class="logo flex-center">
          <img :src="url" alt="晓风残月" />
        </a>
        <nav class="flex-sub">
          <ul class="h-100 flex-center justify-between">
            <li class="h-100 xs-hide">
              <ul class="flex-center">
                <li
                  class="nav-item"
                  :class="{ active: acitve == index }"
                  v-for="(item, index) in navList"
                  @click="tabAct(index, item.type)"
                  :key="index"
                >
                  <router-link :to="item.path" tag="a" :target="item.type">
                    {{ item.label }}</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="xs-show">
              <el-select
                v-model="value"
                placeholder="请选择"
                style="width: 100px"
              >
                <el-option
                  v-for="item in navList"
                  :key="item.type"
                  :label="item.label"
                  :value="item.path"
                >
                  <router-link :to="item.path" tag="a" :target="item.type">
                    {{ item.label }}</router-link
                  >
                </el-option>
              </el-select>
            </li>
            <li
              class="user-info flex-center"
              v-if="userInfo && userInfo.user_id"
            >
              <router-link to="/write" tag="a" target="_blank">
                <el-button class="artice" type="primary">写文章</el-button>
              </router-link>

              <i class="el-icon-message-solid"></i>
              <el-dropdown @command="handleCommand" trigger="click">
                <div class="el-dropdown-link flex-center">
                  <img
                    class="header-img"
                    :src="userInfo.headerImg || defaultImg"
                  />
                </div>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="a">我的主页</el-dropdown-item>
                  <el-dropdown-item command="b">主题切换</el-dropdown-item>
                  <el-dropdown-item command="c">退出登录</el-dropdown-item>
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
    <theme-picker
      v-show="false"
      @change="themeChange"
      @setTheme="setTheme"
      :defaultTh="defaultTh"
    />
    <!-- v-el-drag-dialog -->

    <Dialog v-if="show" :show.sync="show" :title="type == 0 ? '登录' : '注册'">
      <Login v-if="type == 0" @onChange="showDialog" @close="close"></Login>
      <Register v-else @onChange="showDialog" @close="close"></Register>
    </Dialog>
    <Dialog v-el-drag-dialog :show.sync="showTheme" title="主题切换">
      <theme-picker
        @change="themeChange"
        @setTheme="setTheme"
        :defaultTh="defaultTh"
      />
    </Dialog>
  </div>
</template>

<script>
import Dialog from "@/components/Dialog";
import Login from "@/components/Login";
import Register from "@/components/Register";
import ThemePicker from "@/components/ThemePicker";
import { mapGetters } from "vuex";
import { getSession } from "@/utils/session";
import elDragDialog from "@/directive/el-drag-dialog"; // base on element-ui
export default {
  name: "Header",
  components: { Dialog, Login, Register, ThemePicker },
  directives: { elDragDialog },
  data() {
    return {
      acitve: -1,
      show: false,
      isShow: true,
      showTheme: false,
      type: 0,
      defaultImg: require("@/assets/img/default-avatar.svg"),
      navList: [
        {
          label: "首页",
          path: "/home",
        },
        {
          label: "话题",
          path: "/topics",
        },
        {
          label: "图库",
          path: "/ImgMap",
          // type: "_blank",
        },
        {
          label: "可视化",
          path: "/myScreen",
          type: "_blank",
        },
      ],
      value: "/home",
      url: require("@/assets/img/dog.jpg"),
    };
  },
  computed: {
    ...mapGetters(["userInfo", "isLogin", "timeStamp", "autoHeader"]),
    defaultTh() {
      return getSession("theme");
    },
  },
  watch: {
    timeStamp(news, olds) {
      console.log(this.isLogin);
      if (!this.isLogin) {
        this.show = true;
      }
    },
  },
  mounted() {},
  methods: {
    tabAct(index, type) {
      if (!type) this.acitve = index;
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
        this.showTheme = true;
      }
      if (command === "c") {
        this.$router.push({
          path: "/",
        });
        this.$store.commit("user/removeLogin");
      }
    },
    themeChange(val) {
      this.$store.dispatch("setting/changeSetting", {
        key: "theme",
        value: val,
      });
    },
    setTheme(index) {
      // console.log(index);
      this.$store.commit("setting/setTheme", index);
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
      font-weight: 600;
    }
    .active {
      @include font_color();
    }
  }
  .logo {
    max-width: 45px;
    height: $height;
    margin-right: 20px;
    border-radius: 50%;
    img {
      width: 100%;
      height: 60px;
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
      &:hover {
        @include font_color();
      }
    }
    .header-img {
      width: 30px;
      height: 30px;
      object-fit: cover;
      border-radius: 50%;
    }
    .artice {
      margin-right: 20px;
    }
  }
  .head-form {
    @include font_color();
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
  transition: all 0.1s;
  background: #fff;
  height: 61px;
  color: #909090;
  z-index: 1600;
  padding: 0 10px;
  border-bottom: 1px solid #f1f1f1;
}
.is-auto {
  top: -61px;
}
</style>
