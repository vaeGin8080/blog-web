<template>
  <div class="setting">
    <Wrap :hasNav="true">
      <Nav @tab="tab" :navList="navList" type="index"></Nav>
      <div class="setting-box">
        <settingInfo
          v-if="active == 0"
          @success="success"
          @submit="submit"
          :title="title"
        ></settingInfo>
        <settingPass v-else @submit="updatePass" :title="title"></settingPass>
      </div>
      <template v-slot:aside>
        <Aside></Aside>
      </template>
    </Wrap>
  </div>
</template>

<script>
import { getUserUpdate } from "@/api/user";
import settingInfo from "./settingInfo";
import settingPass from "./settingPass";
export default {
  name: "Setting",
  components: { settingInfo, settingPass },
  data() {
    return {
      active: 0,
      navList: [
        {
          label: "个人资料",
          path: "/home",
        },
        {
          label: "修改密码",
          path: "/home",
        },
      ],
    };
  },
  computed: {
    title() {
      return this.navList[this.active].label;
    },
  },

  methods: {
    tab(tag) {
      this.active = tag;
    },
    success(value) {
      let obj = {
        headerImg: value,
      };
      console.log(obj);
      this.updateInfo(obj);
    },
    // 更改用户信息
    submit(query) {
      this.updateInfo(query);
    },
    // 更改密码
    updatePass(form) {},
    updateInfo(obj) {
      getUserUpdate(obj).then((res) => {
        console.log(res);
        if (res.status == 1) {
          this.$store
            .dispatch("getUserInfo")
            .then((res) => {
              this.$notify.success({
                title: "成功",
                message: "更新成功",
                duration: 1000,
              });
            })
            .catch((rej) => {
              this.$notify.error({
                title: "失败",
                message: "更新失败",
                duration: 1000,
              });
            });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.setting-box {
  padding: 40px 48px 60px;
}
</style>
