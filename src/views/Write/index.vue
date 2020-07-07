<template>
  <div class="wrap flex flex-direction">
    <div class="write-header flex justify-between align-center">
      <div class="header-left">
        <input
          type="text"
          v-model="form.blog_title"
          placeholder="输入文章标题"
        />
      </div>
      <div class="header-right">
        <el-button type="primary" @click="publish">{{
          id ? "更新" : "发布"
        }}</el-button>
        <div class="panel" v-show="isPanel" @blur="publish">
          <h3>发布文章</h3>
          <div class="up">
            <h4>封面图片</h4>
            <div class="flex-center">
              <el-image
                class="header-img"
                fit="cover"
                :src="form.blog_cover || defaultImg"
              ></el-image>
              <UploadImg :isLimit="false" @success="success"></UploadImg>
            </div>
          </div>
          <div class="up">
            <h4>BGM</h4>
            <div class="flex flex-direction">
              <span>{{ form.BGM }}</span>
              <UploadImg
                :isLimit="false"
                :type="'sound'"
                @success="successBGM"
              ></UploadImg>
            </div>
          </div>
          <div>
            <h4>分类</h4>
            <ul class="flex">
              <li
                v-for="(item, index) in tag"
                :key="index"
                @click="tagTab(index)"
                :class="{ active: index === tagIndex }"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <div>
            <h4>标签</h4>
            <ul>
              <div>
                <input
                  class="tag-input"
                  type="text"
                  v-model="form.blog_brief"
                  placeholder="添加一个简介"
                />
              </div>
            </ul>
          </div>
          <div class="flex-ali btn">
            <el-button type="primary" @click="submit">{{
              id ? "确定并更新" : "确定并发布"
            }}</el-button>
          </div>
        </div>
      </div>
    </div>
    <MarkDown
      :value="form.blog_content"
      class="flex-sub"
      :editable="true"
      :subfield="true"
      :tool="true"
      defaultOpen=""
      @change="change"
    ></MarkDown>
  </div>
</template>

<script>
import MarkDown from "@/components/MarkDown";
import UploadImg from "@/components/UploadImg";
import { articreInsert, detail, update } from "@/api/write";
import { mapGetters } from "vuex";
import notify from "@/utils/notify";
export default {
  name: "Write",
  components: { MarkDown, UploadImg },
  data() {
    return {
      form: {
        blog_title: "",
        blog_tag: "前端",
        blog_cover: "",
        blog_brief: "",
        blog_content: "",
        BGM: "",
      },
      tag: ["前端", "后端", "其他"],
      tagIndex: 0,
      defaultImg: require("@/assets/img/default-avatar.svg"),
      isPanel: false,
      id: this.$route.query.id,
    };
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  created() {
    if (this.id) this.init(this.id);
  },
  methods: {
    init(id) {
      detail({
        blog_id: id,
      }).then((res) => {
        if (res.status == 1) {
          this.form = res.data;
          console.log(this.form);
        }
      });
    },
    tagTab(index) {
      this.tagIndex = index;
      this.form.blog_tag = this.tag[index];
    },
    success(value) {
      this.form.blog_cover = value;
    },
    successBGM(value) {
      this.form.BGM = value.realname;
    },
    publish() {
      this.isPanel = !this.isPanel;
    },
    change(value) {
      this.form.blog_content = value;
    },
    submit() {
      if (this.form.blog_title == "") {
        notify.error("请填写标题", "top-left");
        return;
      }
      if (this.form.blog_cover == "") {
        notify.error("请上传封面图", "top-left");
        return;
      }
      let form = {
        blog_id: this.form.blog_id,
        blog_title: this.form.blog_title,
        blog_author: this.userInfo.user_name,
        blog_brief: this.form.blog_brief,
        blog_tag: this.form.blog_tag,
        blog_content: this.form.blog_content,
        blog_cover: this.form.blog_cover,
        likeCount: this.form.likeCount,
        commentCount: this.form.commentCount,
        BGM: this.form.BGM,
      };
      console.log(form);
      if (!this.id) {
        articreInsert(form).then((res) => {
          if (res.status === 1) {
            this.$message.success("发布成功");
            this.$router.replace("/home");
          } else {
            this.$message.error("发布失败");
          }
          this.publish();
        });
      } else {
        update(form).then((res) => {
          if (res.status === 1) {
            this.$message.success("更新成功");
            this.$router.back();
          } else {
            this.$message.error("更新失败");
          }
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$height: 64px;
.wrap {
  width: 100%;
  height: 100vh;
  background: white;
  .write-header {
    width: 100%;
    height: $height;
    padding: 0 16px;
    .header-left {
      width: 60%;
      max-width: 80%;
      height: $height;
      input[type="text"] {
        max-width: 100%;
        height: $height;
        font-size: 24px;
        outline: none;
        border: none;
        font-weight: 700;
      }
    }
    .header-right {
      position: relative;
      .panel {
        position: absolute;
        top: 100%;
        right: 0;
        z-index: 6666;
        width: 336px;
        padding: 24px;
        white-space: nowrap;
        color: #909090;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 2px;
        box-shadow: 0 1px 2px #f1f1f1;
        margin-top: 14px;
        &::before {
          content: "";
          position: absolute;
          margin-left: -0.5rem;
          top: -0.6rem;
          left: 78%;
          width: 1rem;
          height: 1rem;
          background-color: #fff;
          border: 1px solid #ddd;
          border-right: none;
          border-bottom: none;
          transform: rotate(45deg);
        }
        & > h3 {
          opacity: 0.8;
          margin-bottom: 14px;
        }
        h4 {
          font-size: 16px;
          font-weight: normal;
          margin-bottom: 12px;
        }
        .up {
          margin-bottom: 8px;
          span {
            display: inline-block;
            width: 250px;
            @include text-overflow(250px);
            margin-bottom: 5px;
          }
        }
        .header-img {
          width: 72px;
          height: 72px;
          margin-right: 12px;
          object-fit: cover;
        }
        li {
          margin: 0 5px 12px 0;
          font-size: 14px;
          white-space: nowrap;
          border: 1px solid #f1f1f1;
          border-radius: 2px;
          padding: 4px 8px;
          cursor: pointer;
          &:hover {
            @include font_color();
            border-color: rgba(0, 127, 255, 0.15);
            background-color: rgba(0, 127, 255, 0.05);
          }
        }
        .active {
          @include font_color();
          border-color: rgba(0, 127, 255, 0.15);
          background-color: rgba(0, 127, 255, 0.05);
        }
      }
      .tag-input {
        padding: 5px 0;
        width: 100%;
        font-size: 0.9em;
        border: none;
        border-bottom: 1px solid #f1f1f1;
        border-radius: 0;
        outline: none;
        color: #909090;
      }
      .btn {
        margin-top: 10px;
      }
    }
  }
}
</style>
