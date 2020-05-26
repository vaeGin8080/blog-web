<template>
  <div class="article">
    <div class="article-header flex-center justify-between">
      <h4>专栏</h4>
      <div>
        <span>最新</span>
      </div>
    </div>
    <ul class="article-ul">
      <Item
        :list="list"
        :isEdit="isCurrent(id)"
        @edit="edit"
        @remove="remove"
      ></Item>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import sLink from "@/components/Link";
import Aside from "@/components/Aside";
import Status from "@/components/Status";
import Item from "./item";
import { getMineList } from "@/api/user";
import { remove } from "@/api/write";
import notify from "@/utils/notify";
export default {
  name: "MyArticle",
  props: ["id"],
  components: { sLink, Aside, Status, Item },
  data() {
    return {
      list: [],
    };
  },
  created() {
    console.log(this.page);
    this.init();
  },
  computed: {
    ...mapGetters(["userInfo", "isCurrent"]),
  },
  methods: {
    init() {
      let obj = {
        id: this.id,
      };
      getMineList(obj).then((res) => {
        if (res.status === 1) {
          this.list = res.data.data;
          console.log(this.list);
        }
      });
    },
    edit(item) {
      this.$router.push({
        path: "/write",
        query: {
          id: item.blog_id,
        },
      });
    },
    remove(item) {
      let obj = {
        blog_id: item.blog_id,
      };
      remove(obj).then((res) => {
        if (res.status == 1) {
          this.init();
          notify.success(res.msg);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.article {
  padding: 0 15px;
}
.article-header {
  height: 50px;
  white-space: nowrap;
  border-bottom: 1px solid rgba(230, 230, 231, 0.5);
  span {
    font-size: 14px;
  }
}
.article-ul {
}
</style>
