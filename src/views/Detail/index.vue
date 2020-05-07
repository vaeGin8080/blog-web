<template>
  <div class="home">
    <div class="flex">
      <Action></Action>
      <ul class="home-content bg-white">
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
            <img :src="blogAuthor.headerImg" />
            <div class="message">
              <a href="">{{ blogAuthor.user_name }}</a>
              <p>
                {{ parseTime(blogDetail.create_date, "{y}-{m}-{d}") }}
              </p>
            </div>
            <span class="follow flex-ali">关注</span>
          </div>
          <div class="mark-wrap" v-html="value"></div>
        </div>
        <!-- <mavon-editor
          v-model="value"
          :defaultOpen="'edit'"
          :editable="false"
          :ishljs="true"
          :toolbarsFlag="false"
          @change="change"
        />-->
      </ul>
      <Aside :bannerList="bannerList"></Aside>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { getList, getDetail } from "@/api/home";
import { getUserInfo } from "@/api/user";
import { parseTime } from "@/utils/utils";
import Link from "@/components/Link";
import Aside from "@/components/Aside";
import Action from "@/components/Action";
import marked from "marked";
import hljs from "highlight.js";

export default {
  name: "Home",
  components: { Link, Aside, Action },
  directives: {
    high: {
      // 指令的定义
      bind: function(el) {
        let blocks = el.querySelectorAll("pre code");

        blocks.forEach((block) => {
          hljs.highlightBlock(block);
        });
      },
    },
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
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.loading = true;
      let obj = {
        operationName: "",
        query: "",
        variables: { first: 20, after: "", order: "POPULAR" },
        extensions: { query: { id: "21207e9ddb1de777adeaca7a2fb38030" } },
      };
      let id = this.$route.query.id;
      console.log(id);
      let obj2 = {
        blog_id: id,
      };
      getDetail(obj2).then((res) => {
        this.value = res.data.blog_content;
        this.blogDetail = res.data;
        marked.setOptions({
          highlight: function(code) {
            return hljs.highlightAuto(code).value;
          },
        });
        this.value = marked(this.value);

        this.getInfo(this.blogDetail.create_id);
        this.loading = false;
      });
    },
    getInfo(id) {
      let obj = { id };
      getUserInfo(obj).then((res) => {
        console.log(res);
        this.blogAuthor = res.data;
      });
    },
    change(value) {},
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/github-gist.css";

$box: 60px;
$aside: 240px;
$asideBanner: 200px;
.home {
  background: #f4f5f5;
  margin-top: 20px;
  .home-content {
    max-width: 100%;
    min-height: 100px;
    flex: 1;
  }
  .blog-head {
    padding: 24px 20px 0;
    & > img {
      width: 40px;
      height: 40px;
      margin-right: 12px;
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
      border: 1px solid #6cbd45;
      color: #6cbd45;
      background-color: #fff;
    }
  }
  .mark-wrap {
    padding: 20px;
    overflow-x: scroll;
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
