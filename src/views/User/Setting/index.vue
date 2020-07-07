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
import notify from "@/utils/notify";
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
    tab({ label, index }) {
      this.active = index;
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
            .dispatch("user/getUserInfo")
            .then((res) => {
              notify.success("更新成功");
            })
            .catch((rej) => {
              notify.error("更新失败");
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
