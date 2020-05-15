let getTitle = (content) => {
  let nav = [];
  let tempArr = [];

  let str = content.replace(/<h.*?>/g, function(match, m1, m2) {
    console.log(22);
    console.log(match);
    let title = match.replace("\n", "");
    if (title.indexOf("</font>") > -1) {
      return false;
    }
    let level = m1.length;
    tempArr.push({
      name: title.replace(/^#+/, "").replace(/\([^)]*?\)/, ""),
      level: level,
      children: [],
      icon: "icon-dian",
    });
  });
  content.replace(/(#+)[^#][^\n]*?(?:\n)/g, function(match, m1, m2) {
    let title = match.replace("\n", "");
    if (title.indexOf("</font>") > -1) {
      return false;
    }
    let level = m1.length;
    tempArr.push({
      name: title.replace(/^#+/, "").replace(/\([^)]*?\)/, ""),
      level: level,
      children: [],
      icon: "icon-dian",
    });
  });
  console.log(str);
  // 处理菜单，以及添加与id对应的index值
  nav = tempArr.filter((item) => item.level <= 4 && item.level > 1) || [];
  // 设置大标题
  let nameFind = tempArr.find((item) => item.level == 1) || {};
  name = nameFind.name;
  let index = 0;
  // eslint-disable-next-line no-return-assign
  return (nav = nav.map((item) => {
    item.index = index++;
    item.code = item.index;
    item.anchor = `index-${item.index}`;
    return item;
  }));
};
// 将标题数据处理成树结构
let handleNavTree = (content) => {
  let navs = getTitle(content);
  // 设置了4级导航
  let navLevel = [1, 2, 3, 4];
  let retNavs = [];
  let toAppendNavList,
    parentNavList = [];

  navLevel.forEach((level) => {
    // 遍历标题，将同一级的标题组成新数组
    toAppendNavList = find(navs, {
      level: level,
    });
    parentNavList = find(navs, {
      level: level - 1,
    });
    if (retNavs.length === 0) {
      // 处理一级标题
      retNavs = retNavs.concat(toAppendNavList);
    } else {
      // 处理其他标题，并将其他标题添加到对应的父级标题的children中
      toAppendNavList.forEach((item) => {
        item = Object.assign(item);
        let parentNavIndex = getParentIndex(navs, item.index);
        return appendToParentNav(parentNavList, parentNavIndex, item);
      });
    }
  });
  return retNavs;
};
let find = (arr, condition) => {
  return arr.filter((item) => {
    for (let key in condition) {
      if (condition.hasOwnProperty(key) && condition[key] !== item[key]) {
        return false;
      }
    }
    return true;
  });
};
let getParentIndex = (nav, endIndex) => {
  for (var i = endIndex - 1; i >= 0; i--) {
    if (nav[endIndex].level > nav[i].level) {
      return nav[i].index;
    }
  }
};
let appendToParentNav = (nav, parentIndex, newNav) => {
  let index = findIndex(nav, {
    index: parentIndex,
  });
  nav[index].children = nav[index].children.concat(newNav);
};
let findIndex = (arr, condition) => {
  let ret = -1;
  arr.forEach((item, index) => {
    for (var key in condition) {
      if (condition.hasOwnProperty(key) && condition[key] !== item[key]) {
        return false;
      }
    }
    ret = index;
  });
  return ret;
};

export default handleNavTree;
