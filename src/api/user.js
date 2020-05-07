import request from "@/utils/request";

export function getUserInfo(data) {
  return request({
    url: "/userInfo",
    method: "post",
    data,
  });
}
