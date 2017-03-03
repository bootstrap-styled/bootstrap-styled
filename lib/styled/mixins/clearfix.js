export function clearfix() {
  return "\n    &::after {\n      content: \"\";\n      display: table;\n      clear: both;\n    }\n  ";
}

export default {
  clearfix: clearfix
};