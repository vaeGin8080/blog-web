import request from "@/utils/request";

// export function getList(data) {
//   return request({
//     url: "query",
//     method: "post",
//     data,
//   });
// }

// 查询列表
export function getList(data) {
  return request({
    url: "/weblist",
    method: "post",
    data,
  });
}

// 详情
export function getDetail(params) {
  return request({
    url: "/web/detail",
    method: "get",
    params,
  });
}

// 点赞
export function getLike(data) {
  return request({
    url: "/web/like",
    method: "post",
    data,
  });
}

// 取消点赞
export function getNoLike(data) {
  return request({
    url: "/web/noLike",
    method: "post",
    data,
  });
}

// 评论列表
export function getCommentList(data) {
  return request({
    url: "/web/commentList",
    method: "post",
    data,
  });
}

// 发送评论
export function getSendComment(data) {
  return request({
    url: "/web/sendComment",
    method: "post",
    data,
  });
}
