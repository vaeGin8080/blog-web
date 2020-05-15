<template>
  <div class="user">
    <Wrap>
      <div class="user-header flex justify-between">
        <el-image
          class="header-img"
          fit="cover"
          :src="userInfo.headerImg"
          :preview-src-list="[userInfo.headerImg]"
        ></el-image>
        <div class="info-box">
          <h1>{{ userInfo.user_name }}</h1>
          <div class="job">
            <span>{{ userInfo.job }}</span>
          </div>
          <div class="desc">
            <span>{{ descInfo }}</span>
          </div>
        </div>
        <div class="action-box flex align-end">
          <span class="btn flex-ali" @click="goSetting">编辑个人资料</span>
        </div>
      </div>
    </Wrap>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Wrap from "@/components/Wrap";
export default {
  name: "User",
  components: { Wrap },
  data() {
    return {
      active: 0,
      timer: null,
      desc: [
        "你的信仰是什么？",
        "你有哪些武（ji）器（shu）？",
        "你的人生格言是什么？",
        "你有哪些爱好？",
      ],
    };
  },
  computed: {
    ...mapGetters(["userInfo"]),
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
      this.changeDesc();
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
  },
};
</script>

<style lang="scss" scoped>
.user-header {
  padding: 30px;
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
