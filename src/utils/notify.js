import { Notification } from "element-ui";
export default {
  success(title, position = "top-right") {
    Notification.success({
      title: "成功",
      message: title,
      duration: 1500,
      offset: 50,
      position: position,
    });
  },
  error(title, position = "top-right") {
    Notification.error({
      title: "错误",
      message: title,
      duration: 1500,
      offset: 50,
      position: position,
    });
  },
};
