import { Notification } from "element-ui";
export default {
  success(title, position = "") {
    Notification.success({
      title: "成功",
      message: title,
      duration: 1500,
      offset: 50,
      position: position,
    });
  },
  error(title, position = "") {
    Notification.error({
      title: "错误",
      message: title,
      duration: 1500,
      offset: 50,
      position: position,
    });
  },
};
