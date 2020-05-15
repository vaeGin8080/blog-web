<template>
  <div>
    <el-color-picker
      v-model="theme"
      v-show="false"
      :predefine="['#409EFF', '#11a983', '#13c2c2', '#6959CD', '#f5222d']"
      class="theme-picker"
      popper-class="theme-picker-dropdown"
    />
    <ul class="theme-list flex flex-wrap">
      <li
        v-for="(item, index) in themeList"
        :key="index"
        :style="{ background: item }"
        @click="setTheme(item, index)"
      ></li>
    </ul>
  </div>
</template>

<script>
const version = require("element-ui/package.json").version; // element-ui version from node_modules
const ORIGINAL_THEME = "#409EFF"; // default color
import { getSession } from "@/utils/session";
import { mapGetters } from "vuex";
import notify from "@/utils/notify";

export default {
  props: {
    defaultTh: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      chalk: "", // content of theme-chalk css
      theme: "",
      form: {
        item: "",
        index: "",
      },
      themeList: [
        "#409EFF",
        "#11a983",
        "#13c2c2",
        "#6959CD",
        "#f5222d",
        "#DE9C0D",
      ],
    };
  },
  computed: {
    ...mapGetters(["themeIndex"]),
    defaultTheme: {
      get() {
        return this.$store.getters.theme;
      },
    },
  },
  mounted() {
    if (this.defaultTh && this.defaultTh !== this.defaultTheme) {
      this.theme = this.defaultTh;
    }
  },
  watch: {
    defaultTheme: {
      handler: function(val, oldVal) {
        this.theme = val;
      },
      immediate: true,
    },
    async theme(val) {
      const oldVal = this.chalk ? this.theme : ORIGINAL_THEME;
      if (typeof val !== "string") return;
      const themeCluster = this.getThemeCluster(val.replace("#", ""));
      const originalCluster = this.getThemeCluster(oldVal.replace("#", ""));
      // console.log(themeCluster, originalCluster);

      // const $message = this.$message({
      //   message: "  Compiling the theme",
      //   customClass: "theme-message",
      //   type: "success",
      //   duration: 0,
      //   iconClass: "el-icon-loading",
      // });

      const getHandler = (variable, id) => {
        return () => {
          const originalCluster = this.getThemeCluster(
            ORIGINAL_THEME.replace("#", "")
          );
          const newStyle = this.updateStyle(
            this[variable],
            originalCluster,
            themeCluster
          );

          let styleTag = document.getElementById(id);
          if (!styleTag) {
            styleTag = document.createElement("style");
            styleTag.setAttribute("id", id);
            document.head.appendChild(styleTag);
          }
          styleTag.innerText = newStyle;
        };
      };

      if (!this.chalk) {
        const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`;
        await this.getCSSString(url, "chalk");
      }

      const chalkHandler = getHandler("chalk", "chalk-style");

      chalkHandler();

      const styles = [].slice
        .call(document.querySelectorAll("style"))
        .filter((style) => {
          const text = style.innerText;
          return (
            new RegExp(oldVal, "i").test(text) && !/Chalk Variables/.test(text)
          );
        });
      styles.forEach((style) => {
        const { innerText } = style;
        if (typeof innerText !== "string") return;
        style.innerText = this.updateStyle(
          innerText,
          originalCluster,
          themeCluster
        );
      });

      this.$emit("change", val);

      // $message.close();
    },
  },

  methods: {
    setTheme(item, index) {
      this.theme = item;
      this.$emit("setTheme", index);
      this.$emit("change", item);
      notify.success("更换成功");
    },

    updateStyle(style, oldCluster, newCluster) {
      let newStyle = style;
      oldCluster.forEach((color, index) => {
        newStyle = newStyle.replace(new RegExp(color, "ig"), newCluster[index]);
      });
      return newStyle;
    },

    getCSSString(url, variable) {
      return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            this[variable] = xhr.responseText.replace(/@font-face{[^}]+}/, "");
            resolve();
          }
        };
        xhr.open("GET", url);
        xhr.send();
      });
    },

    getThemeCluster(theme) {
      const tintColor = (color, tint) => {
        let red = parseInt(color.slice(0, 2), 16);
        let green = parseInt(color.slice(2, 4), 16);
        let blue = parseInt(color.slice(4, 6), 16);

        if (tint === 0) {
          // when primary color is in its rgb space
          return [red, green, blue].join(",");
        } else {
          red += Math.round(tint * (255 - red));
          green += Math.round(tint * (255 - green));
          blue += Math.round(tint * (255 - blue));

          red = red.toString(16);
          green = green.toString(16);
          blue = blue.toString(16);

          return `#${red}${green}${blue}`;
        }
      };

      const shadeColor = (color, shade) => {
        let red = parseInt(color.slice(0, 2), 16);
        let green = parseInt(color.slice(2, 4), 16);
        let blue = parseInt(color.slice(4, 6), 16);

        red = Math.round((1 - shade) * red);
        green = Math.round((1 - shade) * green);
        blue = Math.round((1 - shade) * blue);

        red = red.toString(16);
        green = green.toString(16);
        blue = blue.toString(16);

        return `#${red}${green}${blue}`;
      };

      const clusters = [theme];
      for (let i = 0; i <= 9; i++) {
        clusters.push(tintColor(theme, Number((i / 10).toFixed(2))));
      }
      clusters.push(shadeColor(theme, 0.1));
      return clusters;
    },
  },
};
</script>

<style lang="scss" scoped>
.theme-message,
.theme-picker-dropdown {
  z-index: 99999 !important;
}

.theme-picker .el-color-picker__trigger {
  height: 26px !important;
  width: 26px !important;
  padding: 2px;
}

.theme-picker-dropdown .el-color-dropdown__link-btn {
  display: none;
}
.theme-list {
  li {
    width: 60px;
    height: 60px;
    margin: 0 15px;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
      box-shadow: 5px 5px 10px 4px grey;
    }
  }
  .active {
    box-shadow: 5px 5px 10px 4px grey;
  }
}
.btn {
  margin-top: 10px;
}
</style>
