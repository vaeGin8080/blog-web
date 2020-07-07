import request from "@/utils/request";

// 获取饼图左1（2020发运总量）
export function getToken(query) {
  return request({
    url: "/token",
    method: "get",
    params: query,
  });
}
