<template>
  <div>
    <Wrap>
      <div class="root-bg">
        <Item :list="list"></Item>
      </div>
      <template v-slot:aside>
        <Aside :bannerList="bannerList"></Aside>
      </template>
    </Wrap>
  </div>
</template>

<script>
import Item from "./item";
import { getPinList } from "@/api/jy";

export default {
  name: "TopicsDetail",
  components: { Item },
  data() {
    return {
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
      getPinList().then((res) => {
        this.list = res.d.list;
        console.log(this.list);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.root-bg {
  background: #f5f5f5;
  margin: 0 -20px;
}
@media (max-width: 450px) {
  .root-bg {
    margin: 0;
  }
}
</style>
