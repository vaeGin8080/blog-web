<template>
  <div class="list">
    <div class="item flex" v-for="(item, index) in List" :key="index">
      <div class="user-avter">
        <img class="avter" :src="item.user && item.user.headerImg" />
      </div>

      <div class="comment">
        <span
          class="close"
          v-show="item.showComment"
          @click="deleteComment(item)"
        >
          <i class="el-icon-close"></i>
        </span>
        <div class="meta">{{ item.user && item.user.user_name }}</div>
        <div class="content">{{ item.comment }}</div>
        <div class="reply">
          {{ item.create_time | getDateDiff }}
        </div>
        <div
          class="sub-comment"
          v-if="item.children && item.children.length > 0"
        >
          <commentList :List="item.children"></commentList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "commentList",
  props: {
    List: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  methods: {
    deleteComment(item) {
      this.$emit("deleteComment", item.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.list {
  margin-left: 58px;
  margin-right: 20px;
  .item {
    margin-bottom: 12px;
    .user-avter {
      flex: 0 0 auto;
      .avter {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
      }
    }
    .comment {
      position: relative;
      flex: 1;
      margin-left: 8px;
      border-bottom: 1px solid #f1f1f1;
      .close {
        position: absolute;
        right: 0;
        top: 10px;
        &:hover {
          font-weight: 600;
          @include font_color();
        }
      }
      .meta {
        font-size: 14px;
        color: #333333;
      }
      .content {
        color: #505050;
        font-size: 14px;
        margin-top: 6px;
        word-wrap: break-word;
        white-space: pre-wrap;
        word-break: break-all;
      }
      .reply {
        margin: 12px 0;
        font-size: 14px;
        color: #8a9aa9;
      }
      .sub-comment {
        padding-top: 12px;
        padding-left: 12px;
        background: #fafbfc;
        .item {
          &:not(:last-child) {
            border-bottom: 1px solid #f1f1f1;
          }
        }
      }
    }
  }
}
</style>
