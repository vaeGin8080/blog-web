<template>
  <div v-infinite-scroll="init" :infinite-scroll-disabled="disabled">
    <Wrap>
      <Nav @tab="tab"></Nav>
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
      <div class="flex-sub">
        <sLink
          v-for="(item, index) in list"
          :path="`/detail?id=${item.blog_id}`"
          :key="index"
        >
          <Item :item="item" @handleLove="handleLove"></Item>
        </sLink>
        <Status :cg="status"></Status>
      </div>
      <template v-slot:aside>
        <Aside :bannerList="bannerList"></Aside>
      </template>
    </Wrap>
  </div>
</template>

<script>
// eslint-disable-line
import { getList } from "@/api/home";
import Wrap from "@/components/Wrap";
import Nav from "@/components/Nav";
import sLink from "@/components/Link";
import Aside from "@/components/Aside";
import Status from "@/components/Status";
import Item from "./item";
export default {
  name: "Home",
  components: { Wrap, Nav, sLink, Item, Aside, Status },
  data() {
    return {
      loading: false,
      bannerList: [
        "https://vaegin.top/img/bg.jpg",
        "https://vaegin.top/img/anxi.jpg",
        "https://vaegin.top/img/qingzi.jpeg",
      ],
      list: [],
      status: "",
      page: 1,
      pageSize: 10,
      hasNext: true,
    };
  },
  created() {
    this.init();
  },
  computed: {
    disabled() {
      return this.loading || !this.hasNext;
    },
  },
  methods: {
    init(tag) {
      this.loading = true;
      this.status = "loading";
      let obj = { page: this.page, pageSize: this.pageSize };
      if (tag) {
        obj.tag = tag;
        this.list = [];
      }
      getList(obj).then((res) => {
        this.list = [...this.list, ...res.data.data];
        this.hasNext = res.data.page.hasNext;
        this.loading = false;
        this.page++;
        if (this.list.length == 0) this.status = "";
        if (!this.hasNext) this.status = "";
      });
    },
    tab(tag) {
      this.page = 1;
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
