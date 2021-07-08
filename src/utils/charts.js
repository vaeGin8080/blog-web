export function sw(value) {
  console.log(value);
  switch (value) {
    case "chart":
      return "chart";
      break;
    case "title":
      return "Title";
      break;
    default:
      return "";
  }
}
