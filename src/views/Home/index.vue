<template>
  <div class="home">
    <Nav @tab="tab"></Nav>
    <div class="flex">
      <ul class="home-content bg-white">
        <li v-if="loading">
          <skeleton
            type="listcom"
            active
            :options="{
              row: 3,
              lineHight: 20,
            }"
          />
        </li>

        <div v-else class="flex-sub">
          <sLink
            v-for="(item, index) in list"
            :path="`/detail?id=${item.blog_id}`"
            :key="index"
          >
            <Item :item="item" @handleLove="handleLove"></Item>
          </sLink>
        </div>
        <Empty v-if="!loading && list.length === 0"></Empty>
      </ul>
      <Aside :bannerList="bannerList"></Aside>
    </div>
  </div>
</template>

<script>
// eslint-disable-line
import { getList } from "@/api/home";
import Nav from "@/components/Nav";
import sLink from "@/components/Link";
import Aside from "@/components/Aside";
import Empty from "@/components/Empty";
import Item from "./item";
export default {
  name: "Home",
  components: { Nav, sLink, Item, Aside, Empty },
  data() {
    return {
      loading: false,
      bannerList: [
        "https://vaegin.top/img/bg.jpg",
        "https://vaegin.top/img/anxi.jpg",
        "https://vaegin.top/img/qingzi.jpeg",
      ],
      list: [],
    };
  },
  created() {
    this.init();
  },
  methods: {
    init(tag) {
      this.loading = true;
      let obj = {};
      if (tag) {
        obj = {
          tag,
        };
      }
      getList(obj).then((res) => {
        this.list = res.data;
        this.loading = false;
      });
    },
    tab(tag) {
      this.init(tag);
    },
    handleLove(item) {
      item.isLike = true;
    },
  },
};
</script>

<style lang="scss" scoped>
$box: 60px;

.home {
  background: #f4f5f5;
  margin-top: 60px;
  max-width: 100%;
  .home-content {
    max-width: 100%;
    flex: 1;
  }
}
</style>
