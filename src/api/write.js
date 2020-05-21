import request from "@/utils/request";

// 新增、

export function articreInsert(query) {
  return request({
    url: "/insert",
    method: "post",
    data: query,
  });
}
