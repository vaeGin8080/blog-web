<template>
  <div v-infinite-scroll="init" :infinite-scroll-disabled="disabled">
    <Wrap :hasNav="true">
      <Nav @tab="tab" :navList="navList"></Nav>
      <!-- <li v-if="loading">
        <skeleton
          type="listcom"
          active
          :options="{
            row: 3,
            lineHight: 20,
          }"
        />
      </li> -->
      <div class="flex-sub">
        <Item :list="list" @handleLove="handleLove"></Item>
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
import Aside from "@/components/Aside";
import Status from "@/components/Status";
import Item from "./item";
import list from "@/mixin/list";
export default {
  name: "Home",
  components: { Item, Aside, Status },
  mixins: [list],
  data() {
    return {
      loading: false,
      navList: [
        {
          label: "推荐",
          path: "/home",
        },
        {
          label: "前端",
          path: "/home",
        },
        {
          label: "后端",
          path: "/home",
        },
        {
          label: "其他",
          path: "/home",
        },
      ],
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
        this.list = [...res.data.data];
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

<style lang="scss" scoped></style>
