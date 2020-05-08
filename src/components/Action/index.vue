<template>
  <div class="article-action">
    <div class="btn" :class="[item.like ? 'liked' : 'like']" @click="love">
      <span v-if="item.likeCount">{{ item.likeCount }}</span>
    </div>
    <div class="btn comment">
      <span v-if="item.commentCount">{{ item.commentCount }}</span>
    </div>
    <div class="btn collect"></div>
  </div>
</template>

<script>
export default {
  name: "Action",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    love() {
      this.$emit("love", this.item.likeCount);
    },
  },
};
</script>

<style lang="scss" scoped>
.article-action {
  position: fixed;
  top: 190px;
  margin-left: -72px;

  .btn {
    width: 36px;
    height: 36px;
    background: white;
    border-radius: 50%;
    margin-bottom: 12px;
    position: relative;
    & > span {
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
    background: white url("../../assets/img/comment-big.svg") no-repeat 53% 46%;
  }
  .collect {
    background: white url("../../assets/img/collect-big.svg") no-repeat 53% 46%;
  }
}
</style>
