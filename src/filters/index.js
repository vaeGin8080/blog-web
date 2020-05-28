/* 日期转化 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }
  const format = cFormat || "{y}-{m}-{d} {h}:{i}:{s}";
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (("" + time).length === 10) time = parseInt(time) * 1000;
    // 因项目需要当时间错误或者空的时候显示 0000-00-00 00:00
    if (time === 0 || !time) {
      return "0000-00-00 00:00";
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === "a") {
      return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    if (result.length > 0 && value < 10) {
      value = "0" + value;
    }
    return value || 0;
  });
  return time_str;
}

export function getDateDiff(time) {
  let minute = 1000 * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let halfamonth = day * 15;
  let month = day * 30;
  let now = new Date().getTime();
  time = new Date(time).getTime();
  let diffValue = now - time;
  if (diffValue < 0) {
    return;
  }
  let monthC = diffValue / month;
  let weekC = diffValue / (7 * day);
  let dayC = diffValue / day;
  let hourC = diffValue / hour;
  let minC = diffValue / minute;
  if (monthC >= 1) {
    return "" + parseInt(monthC) + "月前";
  } else if (weekC >= 1) {
    return "" + parseInt(weekC) + "周前";
  } else if (dayC >= 1) {
    return "" + parseInt(dayC) + "天前";
  } else if (hourC >= 1) {
    return "" + parseInt(hourC) + "小时前";
  } else if (minC >= 1) {
    return "" + parseInt(minC) + "分钟前";
  } else return "刚刚";
}
