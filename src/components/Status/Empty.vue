<template>
  <div class="empty">
    <div class="flex-ali flex-direction">
      <img src="@/assets/img/ku.gif" />
      <p>暂时没有数据啦！</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Empty",
};
</script>

<style lang="scss" scoped>
.empty {
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
