import topic from "@/mock/topic";
import topicDetail from "@/mock/topicDetail";
// 查询话题栏目列表
export function getTopicList(data) {
  return new Promise((res, rej) => {
    res(topic);
  });
}

// 查询话题列表
export function getPinList(data) {
  return new Promise((res, rej) => {
    res(topicDetail);
  });
}
