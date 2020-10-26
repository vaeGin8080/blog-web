<template>
  <div>
    <Wrap>
      <h2 class="topic-title">全部话题</h2>
      <Item :list="list"></Item>
    </Wrap>
    <div class="root-bg"></div>
  </div>
</template>

<script>
import { getTopicList } from "@/api/jy";
import Item from "./item";
export default {
  name: "Topics",
  components: { Item },
  data() {
    return {
      list: [],
      form: {},
      config: {
        inline: false,
        labelPosition: "left",
        labelWidth: "80px",
        size: "small",
        statusIcon: true,
      },
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      getTopicList().then((res) => {
        this.list = res.d.list;
        console.log(this.list);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.root-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: -1;
  background: white;
}
.topic-title {
  margin: 15px 20px;
}
</style>
