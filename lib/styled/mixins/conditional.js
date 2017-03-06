'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ifThen = ifThen;
exports.ifElse = ifElse;
function ifThen(conditions, returnTrue) {
  return ifElse(conditions, returnTrue, '');
}

function ifElse(conditions, returnTrue, returnFalse) {
  return conditions ? returnTrue : returnFalse;
}

exports.default = {
  ifThen: ifThen,
  ifElse: ifElse
};