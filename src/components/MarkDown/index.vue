<template>
  <!-- :value="editable ? value : markContent" -->
  <mavon-editor
    :value="value"
    :editable="editable"
    :ishljs="false"
    :toolbarsFlag="tool"
    :toolbars="toolbars"
    @change="change"
    :subfield="subfield"
    :externalLink="true"
    :boxShadow="false"
    :defaultOpen="defaultOpen"
    :navigation="navigation"
    ref="md"
    @imgAdd="$imgAdd"
    @imgDel="$imgDel"
    @navigationToggle="navigationToggle"
  />
</template>

<script>
import marked from "marked";
// import hljs from "highlight.js";
import { realUpload } from "@/api/common";

// 设置高亮
// marked.setOptions({
//   highlight: function(code) {
//     return hljs.highlightAuto(code).value;
//   },
// });
export default {
  name: "MarkDown",
  props: {
    value: {
      type: String,
      default: "",
    },
    editable: {
      type: Boolean,
      default: false,
    },
    subfield: {
      type: Boolean,
      default: false,
    },
    tool: {
      type: Boolean,
      default: false,
    },
    defaultOpen: {
      type: String,
      default: "preview",
    },
  },
  data() {
    return {
      content: "",
      img_file: [],
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        subfield: true, // 是否需要分栏
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示 html 源码
        help: true, // 帮助
      },
    };
  },
  computed: {
    markContent() {
      return marked(this.value);
    },
    navigation() {
      return !this.$isMB() && false;
    },
  },
  methods: {
    change(res) {
      this.content = res;
      this.$emit("change", this.content);
    },
    // 绑定@imgAdd event
    $imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      this.img_file[pos] = $file;
      let form = new FormData();
      form.append("file", $file);
      realUpload(form)
        .then((res) => {
          console.log(res.status);
          if (res.status == 1) {
            this.$refs.md.$img2Url(pos, res.data.filename);
          } else {
            this.$message.error("上传失败");
          }
        })
        .catch((rej) => {
          this.$message.error("上传失败");
        });
    },
    $imgDel(pos) {
      delete this.img_file[pos];
    },
    navigationToggle(s, t) {},
    htmlcodes(s, t) {
      console.log(s, t);
    },
  },
};
</script>

<style lang="scss" scoped></style>
