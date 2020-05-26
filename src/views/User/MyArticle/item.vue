<template>
  <div>
    <div class="f-item" v-for="(item, index) in list" :key="index">
      <sLink :path="item.blog_id">
        <li class="article-item">
          <div class="art-top flex-center">
            <img class="header-img" :src="item.headerImg" />
            <span>{{ item.user_name }}</span>
            <span>{{ item.create_date | parseTime("{y}-{m}-{d}") }}</span>
          </div>
          <BGimg :src="item.blog_cover" style="margin-bottom: 15px"></BGimg>

          <div class="art-content">
            <h3>{{ item.blog_title }}</h3>
            <div>
              <p>{{ item.blog_brief }}</p>
            </div>
            <ul class="action-list flex-center">
              <li>
                <img src="@i/like.svg" style="color:red" />
                <span>{{ item.likeCount }}</span>
              </li>
              <li>
                <img src="@i/comment.svg" />
                <span>{{ item.commentCount }}</span>
              </li>
            </ul>
          </div>
        </li>
      </sLink>
      <li class="fix" v-if="isEdit">
        <el-dropdown placement="top" trigger="click" @command="command">
          <span class="el-dropdown-link">
            <i class="el-icon-more"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item :command="composeValue('a', item)"
              >编辑</el-dropdown-item
            >
            <el-dropdown-item :command="composeValue('b', item)"
              >删除</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </li>
    </div>
  </div>
</template>

<script>
// eslint-disable-line
import sLink from "@/components/Link";

export default {
  components: { sLink },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    isEdit: Boolean,
  },
  data() {
    return {};
  },
  methods: {
    command({ type, item }) {
      if (type === "a") {
        this.$emit("edit", item);
      } else {
        this.$emit("remove", item);
      }
    },
    composeValue(type, item) {
      return {
        type,
        item,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.f-item {
  position: relative;
}
.article-item {
  padding: 30px 0;
  border-bottom: 1px solid hsla(0, 0%, 59.2%, 0.1);
  .art-top {
    padding: 5px 0 15px;
    .header-img {
      width: 30px;
      height: 30px;
      object-fit: cover;
      border-radius: 50%;
      margin-right: 10px;
    }
    span {
      color: #8b8b8b;
      font-size: 14px;
      margin-right: 5px;
    }
  }
  .art-content {
    h3 {
      font-size: 24px;
      margin-bottom: 10px;
    }
    p {
      color: #8b8b8b;
      font-size: 16px;
    }
  }

  .banner {
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
  }
  .action-list {
    margin-top: 15px;
    position: relative;
    & > li {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 26px;
      white-space: nowrap;
      color: #b2bac2;
      border-radius: 1px;
      border: 1px solid #edeeef;
      padding: 0 10px;
      font-size: 12px;
      line-height: 1;
      z-index: 66;
      &:last-child {
        // border-left: none;
      }
      span {
        margin-left: 5px;
      }
    }
  }
}
.fix {
  position: absolute;
  right: 0;
  bottom: 30px;
  height: 26px;
  border-radius: 1px;
  padding: 0 10px;
  border: 1px solid #edeeef;
  z-index: 9999;
}
</style>
