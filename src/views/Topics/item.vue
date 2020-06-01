<template>
  <div class="flex flex-wrap">
    <sLink
      v-for="(item, index) in list"
      :path="item.objectId"
      :key="index"
      :defaultPath="'/Topics/detail'"
    >
      <div class="flex item flex-start justify-between">
        <div
          class="avter"
          :style="{
            backgroundImage: `url(${item.icon})`,
            backgroundSize: 'cover',
          }"
        ></div>
        <div class="info-box">
          <h4 class="title">{{ item.title }}</h4>
          <p class="info flex flex-direction">
            <span>{{ item.hotIndex }} 关注</span>
            <span>{{ item.followersCount }} 沸点</span>
          </p>
        </div>
      </div>
    </sLink>
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
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
$box: 72px;

.item {
  padding: 15px 20px;
  border-bottom: 1px solid rgba(178, 186, 194, 0.15);
  &:hover {
    background-color: rgba(0, 0, 0, 0.01);
  }
  .info-box {
    width: 140px;
  }
  .info {
    color: #b2bac2;
    font-size: 12px;
    span {
      &::before {
        display: inline-block;
        margin: 0 5px;
      }
    }
  }
  .title {
    display: inline-block;
    margin: 5px 0 5px;
    font-size: 18px;
    &:hover {
      @include font_color();
    }
  }
  .desc {
    font-size: 13px;
    line-height: 24px;
    color: #555;
  }
  .avter {
    width: $box;
    height: $box;
    border-radius: 12px;
    margin-right: 12px;
  }
}
</style>
