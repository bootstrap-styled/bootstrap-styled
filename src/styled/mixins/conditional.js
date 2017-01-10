export function ifThen(conditions, returnTrue) {
  return ifElse(conditions, returnTrue, '');
}

export function ifElse(conditions, returnTrue, returnFalse) {
  return conditions ? returnTrue : returnFalse;
}

export default {
  ifThen,
  ifElse,
};
