<template>
  <div class="scroll-wrap">
    <li class="li title">
      <span>排名</span>
      <span>到站</span>
      <span>发运量</span>
    </li>
    <ul
      class="tab-wrap"
      :style="{ marginTop: top }"
      :class="{ 'a-active': activeIndex !== 0 }"
    >
      <li
        class="li li-item"
        :class="[index % 2 !== 0 ? 'even' : 'odd']"
        v-for="(item, index) in list"
        :key="index"
      >
        <span class="cir">
          <i :style="{ backgroundColor: getColor(item.count) }">{{
            item.count + 1
          }}</i>
        </span>
        <span>{{ item.title }}</span>
        <span>{{ item.count }}吨</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      activeIndex: 0,
      timer: null,
    };
  },
  mounted() {
    this.init();
  },
  computed: {
    top() {
      return -1 * this.activeIndex * 40 + "px";
    },
  },
  methods: {
    init() {
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.timer = setInterval(() => {
        if (this.activeIndex < this.list.length) {
          this.activeIndex += 1;
          console.log(this.activeIndex);
        } else {
          this.activeIndex = 0;
        }
        if (this.activeIndex > 7) {
          this.activeIndex = 0;
        }
      }, 2000);
    },
    getColor(index) {
      switch (index) {
        case 0:
          return "#F04A4A";
          break;
        case 1:
          return "#F5A623";
          break;
        case 2:
          return "#0FA3E7";
          break;
        default:
          return "#339BB1";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$heihgt: 40px;
.a-active {
  transition: all 0.5s;
}
.scroll-wrap {
  position: relative;
  overflow: hidden;
  padding-top: $heihgt;
  .title {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background: #339bb1;
    z-index: 6;
    span {
      color: #031f1e;
      font-size: 16px;
    }
  }

  .li {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: $heihgt;
    font-size: 14px;
    color: white;
    span {
      display: inline-block;
      width: 33.3%;
      text-align: center;
    }
  }
}

.tab-wrap {
  position: relative;
  .li-item {
    .cir {
      i {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        font-style: normal;
        background: #339bb1;
      }
    }
  }

  .odd {
    background: rgba(51, 155, 177, 0.2);
  }
  .even {
    background: rgba(22, 91, 105, 0.2);
  }
}
</style>
