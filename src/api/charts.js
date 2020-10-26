import request from "@/utils/request";

// charts
export function getCharts(query) {
  return request({
    url: "/charts",
    method: "get",
    params: query,
  });
}
