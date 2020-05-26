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
          <!-- <el-image
              class="img"
              fit="cover"
              :src="blogDetail.headerImg"
              :preview-src-list="[blogDetail && blogDetail.headerImg]"
            ></el-image> -->
          <div class="blog-head flex-center justify-between">
            <div class="head-jump flex" @click="jumpDetail">
              <img class="img" :src="blogDetail.headerImg" />
              <div class="message">
                <router-link to="">{{ blogDetail.user_name }}</router-link>
                <p>
                  {{ parseTime(blogDetail.create_date, "{y}-{m}-{d}") }}
                </p>
              </div>
            </div>

            <span
              v-if="!isFollow"
              class="foll follow flex-ali"
              @click="follow(true)"
              >关注</span
            >
            <span v-else class="foll followed flex-ali" @click="follow(false)"
              >已关注</span
            >
          </div>
          <BGimg :src="blogDetail.blog_cover"></BGimg>
          <MarkDown :value="value"></MarkDown>
          <Comment
            id="comment"
            :comment="comment"
            @reply="reply"
            @deleteComment="deleteComment"
          ></Comment>
        </div>
      </template>

      <template v-slot:aside>
        <Aside :bannerList="bannerList"></Aside>
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
  deleteComment,
} from "@/api/home";
import { getUserInfo } from "@/api/user";
import { parseTime } from "@/utils/utils";
import Wrap from "@/components/Wrap";
import Link from "@/components/Link";
import Aside from "@/components/Aside";
import Action from "@/components/Action";
import Comment from "@/components/Comment";
import MarkDown from "@/components/MarkDown";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Link,
    Aside,
    Action,
    Comment,
    Wrap,
    MarkDown,
  },
  data() {
    return {
      parseTime,
      value: "",
      loading: false,
      isFollow: false,
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
  computed: {
    ...mapGetters(["userInfo"]),
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
          console.log(this.blogDetail);
          this.requireComment();
        }
        this.loading = false;
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
    follow(type) {
      this.isFollow = type;
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
    // 评论列表
    requireComment() {
      let obj = {
        id: this.blogDetail.blog_id,
      };
      getCommentList(obj).then((res) => {
        if (res.status === 1) {
          this.comment = res.data.map((item) => {
            item.showComment = item.user.user_id == this.userInfo.user_id;
            return item;
          });
        }
      });
    },
    deleteComment(id) {
      deleteComment({ id: id, blog_id: this.blogDetail.blog_id }).then(
        (res) => {
          if (res.status == 1) {
            this.comment = this.comment.filter((item) => item.id !== id);
            this.blogDetail.commentCount--;
            console.log(this.comment);
            this.$message({
              message: "删除成功",
              type: "success",
            });
          } else {
            this.$message({
              message: "删除失败",
              type: "error",
            });
          }
        }
      );
    },
    change(value) {},
    jumpDetail() {
      this.$router.push({
        path: "/user/index",
        query: {
          id: this.blogDetail.user_id,
        },
      });
    },
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
    .head-jump {
      cursor: pointer;
    }
    .img {
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
    .foll {
      width: 55px;
      height: 26px;
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
  .back-img {
    width: 100%;
    min-height: 350px;
    max-height: 350px;
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
@media (max-width: 450px) {
  .home .blog-head {
    padding-left: 20px;
  }
}
</style>
