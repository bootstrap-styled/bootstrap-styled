export function fadeWithClass() {
  return "\n    &.fade {\n      " + fade() + "\n    }\n  ";
}

export function fade() {
  return "\n    opacity: 0;\n    transition: opacity .15s linear;\n\n    &.in {\n      opacity: 1;\n    }\n  ";
}

export function collapseWithClass() {
  return "\n    &.collapse {\n      " + collapse() + "\n    }\n  ";
}

export function collapse() {
  return "\n    display: none;\n    \n    &.in {\n      display: block;\n    }\n  ";
}

export function collapseTrWithClass() {
  return "\n    tr {\n      &.collapse.in {\n        " + collapseTr() + "\n      }\n    }\n  ";
}

export function collapseTr() {
  return "\n    display: table-row;\n  ";
}

export function collapseTbodyWithClass() {
  return "\n    tr {\n      &.collapse.in {\n        " + collapseTbody() + "\n      }\n    }\n  ";
}

export function collapseTbody() {
  return "\n    display: table-row-group;\n  ";
}

export function collapsingWithClass() {
  return "\n    &.collapsing {\n      " + collapsing() + "\n    }\n  ";
}

export function collapsing() {
  return "\n    position: relative;\n    height: 0;\n    overflow: hidden;\n    transition-timing-function: ease;\n    transition-duration: .35s;\n    transition-property: height;\n  ";
}

export default {
  fadeWithClass: fadeWithClass,
  fade: fade,
  collapseWithClass: collapseWithClass,
  collapse: collapse,
  collapseTrWithClass: collapseTrWithClass,
  collapseTr: collapseTr,
  collapseTbodyWithClass: collapseTbodyWithClass,
  collapseTbody: collapseTbody,
  collapsingWithClass: collapsingWithClass,
  collapsing: collapsing
};