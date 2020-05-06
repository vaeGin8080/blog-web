<template>
  <div class="item flex-center justify-between w-100">
    <div>
      <p class="info">
        <i class="info-act">专栏 </i>
        <span>{{ item.blog_author }}</span>
        {{ parseTime(item.create_date, "{y}-{m}-{d} {h}:{i}:{s}") }}
        <span>{{ item.blog_tag }}</span>
        <!-- <span v-for="(itemTag, indexTag) in item.node.tags" :key="indexTag"
          >A·{{ itemTag.title }}</span
        > -->
      </p>
      <b class="title">{{ item.blog_title }}</b>
      <p class="desc">{{ item.blog_brief }}</p>
      <div class="action-list"></div>
    </div>
    <div
      class="avter xs-hide"
      :style="{
        backgroundImage: `url(${item.blog_cover})`,
        backgroundSize: 'cover',
      }"
    ></div>
  </div>
</template>

<script>
// eslint-disable-line
import { parseTime } from "@/utils/utils";
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      parseTime,
    };
  },
};
</script>

<style lang="scss" scoped>
$box: 60px;

.item {
  padding: 15px 20px;
  border-bottom: 1px solid rgba(178, 186, 194, 0.15);
  .info {
    color: #b2bac2;
    font-size: 12px;
    span {
      &::before {
        content: "·";
        display: inline-block;
        margin: 0 5px;
      }
    }
    &-act {
      color: #b71ed7;
    }
  }
  .title {
    display: inline-block;
    margin: 5px 0 5px;
    font-size: 18px;
  }
  .desc {
    font-size: 13px;
    line-height: 24px;
    color: #555;
  }
  .avter {
    width: $box;
    height: $box;
  }
}
</style>
