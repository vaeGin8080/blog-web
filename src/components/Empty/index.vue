<template>
  <div class="empty flex-ali flex-direction">
    <img src="@/assets/img/ku.gif" />
    <p>暂时没有数据啦！</p>
  </div>
</template>

<script>
export default {
  name: "Empty",
};
</script>

<style lang="scss" scoped>
.empty {
  padding: 40px;
  img {
    max-width: 200px;
  }
  p {
    margin-top: 20px;
    color: #71777c;
    font-size: 14px;
  }
}
</style>
