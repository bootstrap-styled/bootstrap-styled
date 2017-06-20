function fromJS(js) {
  return JSON.parse(js.replace(/([A-z0-9-]+):/g, '"$1":').replace(/'/g, '"'));
}

function toJSString(js) {
  if (js instanceof Array) {
    return JSON.stringify(js).replace(/"/g, '\'').replace(/,/g, ', ');
  }
  return JSON.stringify(js)
    .replace(/"/g, '\'')
    .replace(/,/g, ', ')
    .replace(/:/g, ': ')
    .replace(/{'/g, '{ \'')
    .replace(/'}/g, '\' }')
    .replace(/'([A-z0-9]+)':/g, '$1:');
}

module.exports = {
  fromJS,
  toJSString,
};
