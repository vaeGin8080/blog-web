<template>
  <div class="home">
    <Nav></Nav>
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
          <Link
            v-for="(item, index) in list"
            :path="`/detail?id=${item.blog_id}`"
            :key="index"
          >
            <Item :item="item"></Item>
          </Link>
        </div>
      </ul>
      <!-- <Aside :bannerList="bannerList"></Aside> -->
    </div>
  </div>
</template>

<script>
// eslint-disable-line
import { getList } from "@/api/home";
import Nav from "@/components/Nav";
import Link from "@/components/Link";
import Aside from "@/components/Aside";
import Item from "./item";
export default {
  name: "Home",
  components: { Nav, Link, Item, Aside },
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
    init() {
      this.loading = true;
      let obj = {
        operationName: "",
        query: "",
        variables: { first: 20, after: "", order: "POPULAR" },
        extensions: { query: { id: "21207e9ddb1de777adeaca7a2fb38030" } },
      };
      getList().then((res) => {
        // this.list = res.data.articleFeed.items.edges;
        this.list = res.data;
        console.log(this.list);
        this.loading = false;
      });
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
