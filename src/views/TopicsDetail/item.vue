<template>
  <ul>
    <li class="item" v-for="(item, index) in list" :key="index">
      <div class="">
        <div class="info-box flex">
          <div
            class="avter"
            :style="{
              backgroundImage: `url(${item.user.avatarLarge})`,
              backgroundSize: 'cover',
            }"
          ></div>
          <div class="flex flex-direction">
            <h4 class="title">{{ item.user.username }}</h4>
            <p class="info flex">
              <span>{{ item.user.jobTitle }} 关注</span>
              <span>{{ item.updatedAt | getDateDiff }} 沸点</span>
            </p>
          </div>
        </div>
        <ul class="pic-list flex flex-wrap ">
          <li
            class="flex flex-wrap"
            v-for="(Pitem, Pindex) in item.pictures"
            :key="Pindex"
          >
            <!-- <img class="pic-avter" :src="Pitem" /> -->
            <el-image
              class="pic-avter"
              style="max-width:200px;max-height: 200px"
              :src="Pitem"
              :fit="'cover'"
              lazy
              :preview-src-list="item.pictures"
            >
            </el-image>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
// eslint-disable-line

export default {
  components: {},
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
$box: 45px;

.item {
  padding: 15px 20px;
  background: white;
  margin-bottom: 12px;
  .info-box {
    cursor: pointer;
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
    font-size: 15px;
    &:hover {
      @include font_color();
    }
  }

  .avter {
    width: $box;
    height: $box;
    border-radius: 12px;
    margin-right: 12px;
  }
}
.pic-list {
  margin: 15px 64px 0 54px;
  .pic-avter {
    max-height: 200px;
    border-radius: 12px;
    margin-right: 12px;
    margin-bottom: 10px;
  }
}
</style>
