import request from "@/utils/request";

// export function getList(data) {
//   return request({
//     url: "query",
//     method: "post",
//     data,
//   });
// }

// 查询列表
export function getList(query) {
  return request({
    url: "/list",
    method: "get",
    params: query,
  });
}

// 详情
export function getDetail(params) {
  return request({
    url: "/detail",
    method: "get",
    params,
  });
}
