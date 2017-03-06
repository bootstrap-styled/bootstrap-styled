"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabFocus = tabFocus;
// WebKit-style focus

function tabFocus() {
  return "\n    /* WebKit-specific. Other browsers will keep their default outline style. */\n    /* (Initially tried to also force default via 'outline: initial', */\n    /* but that seems to erroneously remove the outline in Firefox altogether.) */\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n  ";
}

exports.default = {
  tabFocus: tabFocus
};