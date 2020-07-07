<template>
  <div class="article-action">
    <div class="art-wrap flex flex-direction">
      <div class="btn" :class="[item.like ? 'liked' : 'like']" @click="love">
        <span v-if="item.likeCount">{{
          item.likeCount == 0 ? 0 : item.likeCount
        }}</span>
      </div>
      <div class="btn comment">
        <a :href="href">
          <span v-if="item.commentCount">{{
            item.commentCount == 0 ? 0 : item.commentCount
          }}</span>
        </a>
      </div>
      <div class="btn collect"></div>
      <div class="share">
        <span>分享</span>
      </div>
      <div class="btn weibo" @click="share('weibo', item)"></div>
      <div class="btn qq" @click="share('qq', item)"></div>
      <div
        class="btn wechat"
        @click="share('wechat')"
        @mouseenter="wechatHover"
        @mouseleave="wechatLeave"
      ></div>
    </div>
    <qrCode v-show="show" class="code" :url="url"></qrCode>
  </div>
</template>
<script>
import qrCode from "../qrCode";
export default {
  name: "Action",
  components: { qrCode },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
    href: String,
  },
  data() {
    return {
      show: false,
    };
  },
  mounted() {},
  computed: {
    url() {
      return document.location.href;
    },
  },
  methods: {
    love() {
      if (!this.$store.getters.isLogin) {
        this.$store.commit("user/handleTime");
        return false;
      }
      this.$emit("love", this.item.likeCount);
    },
    wechatHover() {
      this.show = true;
    },
    wechatLeave() {
      this.show = false;
    },
    share(type, item) {
      if (type == "qq") {
        window.open(
          "http://connect.qq.com/widget/shareqq/index.html?url=" +
            encodeURIComponent(document.location.href) +
            "&sharesource=qzone&title=" +
            item.blog_title +
            "&pics=" +
            item.blog_cover +
            "&summary= " +
            item.blog_brief +
            "&desc= " +
            item.blog_brief
        );
      } else if (type == "weibo") {
        window.open(
          "http://service.weibo.com/share/share.php?url=" +
            encodeURIComponent(document.location.href) +
            "?sharesource=weibo&title=" +
            item.blog_title +
            " 掘金专栏 &pic=" +
            item.blog_cover +
            "&appkey=818434258"
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.article-action {
  position: fixed;
  top: 190px;
  margin-left: -110px;

  .btn {
    width: 36px;
    height: 36px;
    background: white;
    border-radius: 50%;
    margin-bottom: 12px;
    position: relative;
    cursor: pointer;
    a {
      display: inline-block;
      width: 36px;
      height: 36px;
    }
    span {
      position: absolute;
      top: 0;
      left: 75%;
      background: #b2bac2;
      color: white;
      padding: 3px 4px;
      font-size: 12px;
      transform-origin: left top;
      transform: scale(0.75);
      border-radius: 8px;
      text-align: center;
      line-height: 1;
      white-space: nowrap;
    }
  }
  .like {
    background: white url("../../assets/img/like-big.svg") no-repeat 53% 46%;
  }
  .liked {
    background: white url("../../assets/img/liked-big.svg") no-repeat 53% 46%;
  }
  .comment {
    background: white url("../../assets/img/comment-big.svg") no-repeat 50% 55%;
  }
  .collect {
    background: white url("../../assets/img/collect-big.svg") no-repeat 53% 46%;
  }
  .weibo {
    background: white url("../../assets/img/weibo.svg") no-repeat 50% 46%;
    &:hover {
      background: white url("../../assets/img/weibo-hover.svg") no-repeat 50%
        46%;
    }
  }
  .qq {
    background: white url("../../assets/img/qq.svg") no-repeat 49% 46%;
    &:hover {
      background: white url("../../assets/img/qq-hover.svg") no-repeat 49% 46%;
    }
  }
  .wechat {
    background: white url("../../assets/img/wechat.svg") no-repeat 50% 48%;
    &:hover {
      background: white url("../../assets/img/wechat-hover.svg") no-repeat 50%
        48%;
    }
  }
  .share {
    width: 36px;
    color: #c6c6c6;
    font-size: 12px;
    text-align: center;
    margin-bottom: 15px;
    margin-top: 20px;
  }
}
.code {
  margin-left: -30px;
  margin-top: 10px;
}
@media (max-width: 450px) {
  .article-action {
    top: auto;
    bottom: 0%;
    left: -5px;
    margin-left: 0;
    z-index: 9999;
    width: 100%;
    height: 45px;
    background: white;
    .art-wrap {
      height: 100%;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      .btn {
        margin-right: 10px;
        margin-bottom: 0;
      }
    }
  }
}
</style>
