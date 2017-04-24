'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toKeyframeString = toKeyframeString;
exports.default = makeKeyframe;

var _styledComponents = require('styled-components');

var _tools = require('utils/tools');

/**
 * This will store a reference to all the keyframe created with makeKeyFrame
 * @type {*[]}
 */
var keyframeRefList = [];

/**
 * This will convert an object into a valid keyframe string for styled
 * @param obj
 * @returns {string}
 */
function toKeyframeString(obj) {
  var keyframeStr = '';
  Object.keys(obj).forEach(function (step) {
    keyframeStr += step + '{';
    Object.keys(obj[step]).forEach(function (cssAttr) {
      keyframeStr += cssAttr + ':' + obj[step][cssAttr] + ';';
    });
    keyframeStr += '}';
  });
  return keyframeStr;
}

/**
 * inject a keyframe in body <style> if it doesn't exist already
 * @param makeAnimation
 * @param options set from user through component props
 * @param userKeyframes
 */
function makeKeyframe(make, options) {
  var userKeyframes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var MAX_KEYFRAMES = 50;

  var merge = make(options);
  Object.keys(userKeyframes).forEach(function (key) {
    merge[key] = Object.assign({}, merge[key], userKeyframes[key]);
  });
  var hashCode = (0, _tools.toHashCode)(JSON.stringify(merge));
  var filtered = keyframeRefList.filter(function (keyframeRef) {
    return keyframeRef.hashCode === hashCode;
  });

  if (filtered.length) {
    return filtered[0].name;
  }

  var keyframeStr = toKeyframeString(merge);

  var name = (0, _styledComponents.keyframes)(['', ''], keyframeStr);

  keyframeRefList.push({
    name: name,
    hashCode: hashCode
  });

  /* istanbul ignore if */
  if (keyframeRefList.length > MAX_KEYFRAMES) {
    console.warn('You might have done a mistake because of current keyframes injection count. You currently have ' + keyframeRefList.length + ' keyframes in your page.'); // eslint-disable-line no-console
  }
  return name;
}