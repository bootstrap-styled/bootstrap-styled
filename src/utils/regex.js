// this regex will return an array of linear gradient color values when doing $var.match(linearGradientRe)
export const linearGradientRe = /#[0-9a-fA-F]{3,6}|rgb ?\([ 0-9.%,]+?\)/g;
