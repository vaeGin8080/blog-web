<template>
  <div class="user">
    <Wrap>
      <div class="user-header flex justify-between">
        <el-image
          class="header-img"
          fit="cover"
          :src="user.headerImg"
          :preview-src-list="[user.headerImg]"
        ></el-image>
        <div class="info-box">
          <h1>{{ user.user_name }}</h1>
          <div class="job">
            <span v-if="user.job">{{ user.job }} | </span>
            <span>{{ user.user_compony || "" }}</span>
          </div>
          <div class="desc" v-if="isCurrent(id)">
            <span>{{ descInfo }}</span>
          </div>
          <span class="job" v-else>{{ user.brief }}</span>
        </div>
        <div class="action-box flex align-end">
          <span class="btn flex-ali" @click="goSetting" v-if="isCurrent(id)"
            >编辑个人资料</span
          >
          <div v-else>
            <span
              class="foll follow flex-ali"
              v-if="!isFollow"
              @click="follow(true)"
              >关注</span
            >
            <span class="foll followed flex-ali" v-else @click="follow(false)"
              >已关注</span
            >
          </div>
        </div>
      </div>
      <div class="line bg-gray"></div>
      <Tabs :list="tabList" v-model="tabIndex" @tab-act="tabClick"></Tabs>
      <MyArticle :id="id"></MyArticle>
      <template v-slot:aside>
        <Aside :bannerList="bannerList"></Aside>
      </template>
    </Wrap>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getUserInfo } from "@/api/user";
import Wrap from "@/components/Wrap";
import Tabs from "@/components/Tabs";
import MyArticle from "./MyArticle/index";
import list from "@/mixin/list";

export default {
  name: "User",
  components: { Wrap, Tabs, MyArticle },
  mixins: [list],
  data() {
    return {
      active: 0,
      tabIndex: 0,
      timer: null,
      desc: [
        "你的信仰是什么？",
        "你有哪些武器？",
        "你喜欢吃青椒么？",
        "你喜欢冲浪么？",
      ],
      bannerList: [
        "https://vaegin.top/img/bg.jpg",
        "https://vaegin.top/img/anxi.jpg",
        "https://vaegin.top/img/qingzi.jpeg",
      ],
      tabList: ["专栏"],
      user: {
        headerImg: "",
      },
      id: this.$route.query.id,
      isFollow: false,
    };
  },
  computed: {
    ...mapGetters(["userInfo", "isCurrent"]),
    descInfo() {
      return this.desc[this.active];
    },
  },
  created() {
    this.init();
  },
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
    init() {
      this.require();
      this.changeDesc();
    },
    require() {
      // 获取用户信息
      let id = this.id;
      let obj = { id };
      getUserInfo(obj).then((res) => {
        this.user = res.data;
        console.log(this.user);
      });
    },
    changeDesc() {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        if (this.active >= this.desc.length - 1) {
          this.active = 0;
        }
        this.active++;
      }, 2000);
    },
    goSetting() {
      this.$router.push({
        name: "Setting",
      });
    },
    tabClick({ index, item }) {
      this.tabIndex = index;
    },
    follow(type) {
      this.isFollow = type;
    },
  },
};
</script>

<style lang="scss" scoped>
.line {
  width: 100%;
  height: 12px;
}
.user-header {
  padding: 30px;
  margin-bottom: 10px;
  .header-img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin-right: 30px;
  }
  .info-box {
    flex: 1;
    .job {
      margin-top: 12px;
      margin-bottom: 3px;
      color: #72777b;
      font-size: 14px;
    }
    .desc {
      margin-top: 5px;
      @include font_color();
      cursor: pointer;
      font-size: 14px;
      & > span {
        &::before {
          content: "+";
          margin-right: 4px;
        }
      }
    }
  }
  .action-box {
    .btn {
      max-width: 118px;
      height: 34px;
      border-radius: 4px;
      padding: 5px 10px;
      @include font_color();
      border: 1px solid;
      cursor: pointer;
    }
    .foll {
      max-width: 118px;
      height: 34px;
      padding: 5px 20px;
      font-size: 13px;
      border: 1px solid;
      cursor: pointer;
      user-select: none;
    }
    .follow {
      @include font_color();
      background-color: #fff;
    }
    .followed {
      @include bg_color();
      color: white;
    }
  }
}
@media (max-width: 980px) {
  .user-header {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .info-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .desc {
        margin: 10px 0;
      }
    }
  }
}
</style>
