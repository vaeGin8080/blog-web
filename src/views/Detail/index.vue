<template>
  <div>
    <Wrap>
      <template v-slot:default>
        <Action :item="blogDetail" @love="love" :href="'#comment'"></Action>
        <skeleton
          type="listcom"
          active
          v-if="loading"
          :options="{
            row: 3,
            lineHight: 20,
          }"
        />
        <div v-else>
          <div class="blog-head flex-center justify-between">
            <img :src="blogAuthor && blogAuthor.headerImg" />
            <div class="message">
              <a href="">{{ blogAuthor.user_name }}</a>
              <p>
                {{ parseTime(blogDetail.create_date, "{y}-{m}-{d}") }}
              </p>
            </div>
            <span class="follow flex-ali">关注</span>
          </div>
          <MarkDown :value="value"></MarkDown>
          <Comment id="comment" :comment="comment" @reply="reply"></Comment>
        </div>
      </template>

      <template v-slot:aside>
        <!-- <MarkDownMenu :list="navList"></MarkDownMenu> -->
      </template>
    </Wrap>
  </div>
</template>

<script>
/* eslint-disable */
import {
  getList,
  getDetail,
  getLike,
  getNoLike,
  getCommentList,
  getSendComment,
} from "@/api/home";
import { getUserInfo } from "@/api/user";
import { parseTime } from "@/utils/utils";
import Wrap from "@/components/Wrap";
import Link from "@/components/Link";
import Aside from "@/components/Aside";
import Action from "@/components/Action";
import Comment from "@/components/Comment";
import MarkDown from "@/components/MarkDown";
import MarkDownMenu from "@/components/MarkDownMenu";
import getTitle from "@/utils/getNav";
import marked from "marked";
import hljs from "highlight.js";
// 设置高亮
marked.setOptions({
  highlight: function(code) {
    return hljs.highlightAuto(code).value;
  },
});
export default {
  name: "Home",
  components: {
    Link,
    Aside,
    Action,
    Comment,
    Wrap,
    MarkDown,
    MarkDownMenu,
  },
  data() {
    return {
      parseTime,
      value: "",
      loading: false,
      bannerList: [
        "https://vaegin.top/img/bg.jpg",
        "https://vaegin.top/img/anxi.jpg",
        "https://vaegin.top/img/qingzi.jpeg",
      ],
      list: [],
      blogDetail: {},
      blogAuthor: {},
      comment: [],
      navList: [],
      myBackToTopStyle: {
        right: "50px",
        bottom: "50px",
        width: "40px",
        height: "40px",
        "border-radius": "4px",
        "line-height": "45px", // 请保持与高度一致以垂直居中 Please keep consistent with height to center vertically
        background: "#e7eaf1", // 按钮的背景颜色 The background color of the button
      },
    };
  },
  created() {
    this.init();
  },
  methods: {
    // 初始化，获取文章详情
    init() {
      this.loading = true;
      let id = this.$route.query.id;
      let obj = {
        id,
      };
      getDetail(obj).then((res) => {
        if (res.status == 1) {
          this.value = res.data.blog_content;
          this.blogDetail = res.data;
          this.value = marked(this.value);
          // this.navList = getTitle(this.value);
          this.getInfo(this.blogDetail.create_id);
          this.requireComment();
        }
        this.loading = false;
      });
    },
    // 获取用户信息
    getInfo(id) {
      let obj = { id };
      getUserInfo(obj).then((res) => {
        this.blogAuthor = res.data;
      });
    },
    // 点赞、取消赞
    love() {
      let obj = {
        id: this.blogDetail.blog_id,
      };
      if (!this.blogDetail.like) {
        getLike(obj).then((res) => {
          this.blogDetail.like = true;
          this.blogDetail.likeCount++;
        });
      } else {
        getNoLike(obj).then((res) => {
          this.blogDetail.like = false;
          this.blogDetail.likeCount--;
        });
      }
    },
    // 发送评论
    reply(value) {
      let obj = {
        id: this.blogDetail.blog_id,
        comment: value,
      };
      getSendComment(obj).then((res) => {
        if (res.status === 1) {
          this.$message({
            message: "评论成功",
            type: "success",
          });
          this.blogDetail.commentCount++;
          this.requireComment();
        } else {
          this.$message({
            message: "评论失败",
            type: "error",
          });
        }
      });
    },
    requireComment() {
      let obj = {
        id: this.blogDetail.blog_id,
      };
      getCommentList(obj).then((res) => {
        if (res.status === 1) {
          this.comment = res.data;
        }
      });
    },

    change(value) {},
  },
};
</script>

<style lang="scss" scoped>
$box: 60px;
$aside: 240px;
$asideBanner: 200px;
.home {
  background: #f4f5f5;
  margin-top: 20px;
  margin-bottom: 20px;
  .home-content {
    max-width: 100%;
    min-height: 100px;
    flex: 1;
    padding: 0 20px;
  }
  .blog-head {
    padding: 24px 20px 20px 0;
    & > img {
      width: 40px;
      height: 40px;
      margin-right: 12px;
      object-fit: cover;
    }
    .message {
      flex: 1;
      height: 100%;
      & > a {
        font-weight: 700;
        color: #333;
        font-size: 14px;
      }
      & > p {
        color: #909090;
        font-size: 12px;
        margin-top: 4px;
      }
    }
    .follow {
      width: 55px;
      height: 26px;
      font-size: 13px;
      border: 1px solid;
      @include font_color();
      background-color: #fff;
      cursor: pointer;
    }
  }
  .mark-wrap {
    padding: 20px 0;
    img {
      max-width: 700px;
    }
  }
  .item {
    padding: 15px 20px;
    border-bottom: 1px solid rgba(178, 186, 194, 0.15);
    .info {
      color: #b2bac2;
      font-size: 12px;
      &-act {
        color: #b71ed7;
      }
    }
    .title {
      display: inline-block;
      margin: 5px 0 10px;
    }
    .avter {
      width: $box;
      height: $box;
    }
  }
}
.aside {
  max-width: $aside;
  width: $aside;
  margin-left: 20px;
  &-banner {
    height: $asideBanner;
    margin-bottom: 20px;
    & > div {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
