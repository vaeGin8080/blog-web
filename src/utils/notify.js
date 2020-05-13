import { Notification } from "element-ui";
export default {
  success(title) {
    Notification.success({
      title: "成功",
      message: title,
      duration: 1500,
    });
  },
  error(title) {
    Notification.error({
      title: "错误",
      message: title,
      duration: 1500,
    });
  },
};
