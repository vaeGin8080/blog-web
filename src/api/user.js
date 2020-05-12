import request from "@/utils/request";

export function getUserInfo(data) {
  return request({
    url: "/userInfo",
    method: "post",
    data,
  });
}

export function getUserUpdate(data) {
  return request({
    url: "/userUpdate",
    method: "post",
    data,
  });
}

export function getUserUpdatePass(data) {
  return request({
    url: "/userUpdatePass",
    method: "post",
    data,
  });
}
