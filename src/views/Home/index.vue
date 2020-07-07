<template>
  <!-- v-infinite-scroll="init"
    :infinite-scroll-disabled="disabled" -->
  <div>
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
        <Item
          :list="navList[tabCurrentIndex].list"
          @handleLove="handleLove"
        ></Item>
        <Status :cg="status"></Status>
      </div>
      <!-- <template v-slot:aside>
        <Aside :bannerList="bannerList"></Aside>
      </template> -->
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
import { mapGetters } from "vuex";

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
          list: [],
          hasNext: true,
        },
        {
          label: "前端",
          path: "/home",
          list: [],
          hasNext: true,
        },
        {
          label: "后端",
          path: "/home",
          list: [],
          hasNext: true,
        },
        {
          label: "其他",
          path: "/home",
          list: [],
          hasNext: true,
        },
      ],
      bannerList: [
        "https://vaegin.top/img/20180818104651_cGNvT.jpeg",
        "https://vaegin.top/img/20160308193117_nkfKX.jpeg",
        "https://vaegin.top/img/20160308193000_RAcVw.jpeg",
      ],
      list: [],
      tag: "",
      tabCurrentIndex: 0,
    };
  },
  created() {
    this.init();
  },
  computed: {
    ...mapGetters(["isSole"]),
    disabled() {
      return this.loading || !this.hasNext;
    },
  },
  watch: {
    isSole(news) {
      if (news) {
        this.init();
      }
    },
  },
  methods: {
    init() {
      this.loading = true;
      this.status = "loading";
      let index = this.tabCurrentIndex;
      let navItem = this.navList[index];
      let obj = { page: this.page, pageSize: this.pageSize };
      if (this.tag) {
        obj.tag = this.tag;
      }
      if (!navItem.hasNext) {
        this.status = "";
        return;
      }

      getList(obj).then((res) => {
        const data = res.data.data;
        if (data.length == 0) {
          this.status = "";
          // return;
        } else {
          navItem.list = [...navItem.list, ...data];
        }
        let hasNext = res.data.page.hasNext;
        this.$set(navItem, "hasNext", hasNext);

        this.loading = false;
        this.page++;
        if (navItem.list.length == 0) this.status = "";
        if (!hasNext) {
          this.status = "";
          return;
        }
      });
    },
    tab({ label, index }) {
      this.tabCurrentIndex = index;
      this.page = 1;
      this.tag = label;
      let navItem = this.navList[index];
      this.$set(navItem, "hasNext", true);
      navItem.list = [];
      this.init();
    },
    handleLove(item) {
      item.isLike = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
