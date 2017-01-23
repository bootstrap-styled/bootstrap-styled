export var defaultProps = {
  '$enable-hover-media-query': false
};

export function hover(content) {
  // TODO: re-enable along with mq4-hover-shim
  //  @if $enable-hover-media-query {
  //    // See Media Queries Level 4: https://drafts.csswg.org/mediaqueries/#hover
  //    // Currently shimmed by https://github.com/twbs/mq4-hover-shim
  //    @media (hover: hover) {
  //      &:hover { @content }
  //    }
  //  }
  //  @else {
  return '\n    &:hover { ' + content + ' }\n  ';
}

export function hoverFocus() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-media-query'];
  var content = arguments[1];

  if (enableHoverMediaQuery) {
    return ' \n      &:focus { ' + content + ' }\n      ' + hover(content) + '\n    ';
  }
  return '\n    &:focus,\n    &:hover {\n      ' + content + '\n    }\n  ';
}

export function plainHoverFocus() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-media-query'];
  var content = arguments[1];

  if (enableHoverMediaQuery) {
    return '\n      &, &:focus {\n        ' + content + '\n      }\n      ' + hover(content) + '\n    ';
  }
  return ' \n    &, &:focus, &:hover {\n      ' + content + '\n    }\n  ';
}

export function hoverFocusActive() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-media-query'];
  var content = arguments[1];

  if (enableHoverMediaQuery) {
    return '\n      &:focus,\n      &:active {\n        ' + content + '\n      }\n      ' + hover(content) + '\n    ';
  }
  return '\n    &:focus, &:active, &:hover {\n     ' + content + '\n    }\n  ';
}

export default {
  defaultProps: defaultProps,
  hover: hover,
  hoverFocus: hoverFocus,
  plainHoverFocus: plainHoverFocus,
  hoverFocusActive: hoverFocusActive
};