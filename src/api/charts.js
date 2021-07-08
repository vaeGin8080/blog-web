import request from "@/utils/request";

// charts
export function getChartList(query) {
  return request({
    url: "/chart/list",
    method: "post",
    data: query,
  });
}
