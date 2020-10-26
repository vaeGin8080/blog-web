<template>
  <div class="main-screen">
    <div class="item add">
      <div class="add-part">
        <el-button type="primary" icon="el-icon-plus" @click="tap('add', item)"
          >创建项目</el-button
        >
      </div>
      <div class="add-b">空白画板</div>
    </div>
    <div class="item" v-for="(item, index) in list" :key="index">
      <div class="item-img">
        <img :src="item.thumbnail" />
        <div class="item-mask">
          <div class="flex flex-direction">
            <span class="btn" @click="tap('create', item)">创建项目</span>
            <span class="btn" @click="tap('look', item)">预览</span>
          </div>
        </div>
      </div>
      <div class="item-b">
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  methods: {
    tap(type, item) {
      this.$emit("tap", { type, item });
    },
  },
};
</script>

<style lang="scss" scoped>
.main-screen {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: center;
  padding-top: 8px;
  user-select: none;
  padding-bottom: 50px;
  padding-left: 4px;
  &::after {
    content: "";
    display: block;
    transition: 0.2s;
    width: 1160px;
  }
}
.item {
  width: 258px;
  height: 184px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  transition: 0.2s;
  .item-img {
    width: 100%;
    height: 146px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  .item-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    transition: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    opacity: 0;
    font-weight: 400;
    z-index: 6;
    .btn {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 112px;
      height: 32px;
      margin: 0;
      background: #2681ff;
      box-sizing: border-box;
      outline: 0;
      cursor: pointer;
      &:last-child {
        margin-top: 10px;
        background: transparent;
        border: 1px solid #2681ff;
      }
      &:hover {
        background: #409fff;
      }
    }
  }
  .item-b {
    height: 36px;
    line-height: 36px;
    text-align: center;
  }
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px 3px #2681ff;
    .item-mask {
      opacity: 1;
      z-index: 6;
    }
  }
}

.add {
  font-size: 14px;
  color: #dbe8ff;
  border: 1px solid #2681ff;
  background-image: linear-gradient(
    -90deg,
    rgba(0, 161, 255, 0.39) 0,
    rgba(0, 137, 255, 0.19) 100%
  );
  box-shadow: 0 0 10px -8px #000;
  cursor: pointer;

  .add-part {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-origin: center;
    letter-spacing: 2px;
    background: rgba(22, 27, 34, 0.25);
  }
  .add-b {
    height: 36px;
    text-align: center;
    line-height: 36px;
  }
}
</style>
