import request from "@/utils/request";

// 获取用户信息

export function getUserInfo(data) {
  return request({
    url: "/userInfo",
    method: "post",
    data,
  });
}

// 更新用户信息

export function getUserUpdate(data) {
  return request({
    url: "/userUpdate",
    method: "post",
    data,
  });
}

// 更新密码

export function getUserUpdatePass(data) {
  return request({
    url: "/userUpdatePass",
    method: "post",
    data,
  });
}

// 查询登录用户文章列表
export function getMineList(params) {
  return request({
    url: "/list",
    method: "get",
    params,
  });
}
