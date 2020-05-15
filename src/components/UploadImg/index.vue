<template>
  <!-- :http-request="upload" -->

  <div>
    <el-upload
      class="upload-demo"
      :show-file-list="false"
      action="http://localhost:3333/upload"
    >
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件
      </div>
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>

<script>
import { getToken, upload, realUpload } from "@/api/common";
export default {
  name: "UploadImg",
  data() {
    return {};
  },
  methods: {
    upload(req) {
      console.log(req);
      const isJPG = req.file.type === "image/jpeg";

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
        return;
      }

      // 获取文件后缀
      let filetype = "";
      let fileName = req.file.name;
      let first = fileName.lastIndexOf(".");
      filetype = fileName.substring(0, first) + new Date().getTime();

      /* realUpload */
      const formdata = new FormData();
      formdata.append("file", req.file);
      formdata.append("key", filetype);
      realUpload(formdata).then((res) => {});

      // getToken().then((res) => {
      //   console.log(res);
      //   const formdata = new FormData();
      //   formdata.append("file", req.file);
      //   formdata.append("token", res.data.key);
      //   formdata.append("key", filetype);
      //   if (res.status == 1) {
      //     upload(formdata)
      //       .then((resI) => {
      //         this.$message.success("上传成功");
      //         let imgurl = res.data.doman + "/" + resI.key;
      //         // this.props.getImgUrl(imgurl);
      //         console.log(imgurl);
      //         this.$emit("success", imgurl);
      //       })
      //       .catch((rej) => {
      //         this.$message.error("上传失败");
      //       });
      //   }
      // });
    },
  },
};
</script>

<style lang="scss" scoped></style>
