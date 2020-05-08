<template>
  <div class="comment">
    <div class="comment-title">评论</div>
    <div class="comment-form flex">
      <div class="acter-box flex align-start">
        <div
          class="form-avter"
          :style="{
            backgroundImage: `url(${userInfo.headerImg})`,
            backgroundSize: 'cover',
          }"
        ></div>
      </div>
      <commentReply @click="reply"></commentReply>
    </div>
    <commentList :List="comment"></commentList>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import commentList from "./commentList";
import commentReply from "./commentReply";
export default {
  name: "Comment",
  components: { commentList, commentReply },
  props: {
    info: {
      type: Object,
      default() {
        return {};
      },
    },
    comment: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  data() {
    return {};
  },
  methods: {
    reply(value) {
      this.$emit("reply", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.comment {
  //   padding: 0 20px 24px;
  &-title {
    color: #8a9aa9;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    padding: 18px 0 5px;
  }
  &-form {
    background-color: #fafbfc;
    border-radius: 3px;
    padding: 15px;
    margin: 15px 0;
    .acter-box {
      flex: 0 0 auto;
      .form-avter {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-right: 12px;
      }
    }
  }
}
</style>
