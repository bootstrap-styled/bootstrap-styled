import { keyframes } from 'styled-components';
import { toHashCode } from '../../../../utils/tools';

/**
 * This will store a reference to all the keyframe created with makeKeyFrame
 * @type {*[]}
 */
const keyframeRefList = [];

/**
 * This will convert an object into a valid keyframe string for styled
 * @param obj
 * @returns {string}
 */
export function toKeyframeString(obj) {
  let keyframeStr = '';
  Object.keys(obj).forEach((step) => {
    keyframeStr += `${step}{`;
    Object.keys(obj[step]).forEach((cssAttr) => {
      keyframeStr += `${cssAttr}:${obj[step][cssAttr]};`;
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
export default function makeKeyframe(make, options, userKeyframes = {}) {
  const MAX_KEYFRAMES = 50;

  const merge = make(options);
  Object.keys(userKeyframes).forEach((key) => {
    merge[key] = Object.assign({}, merge[key], userKeyframes[key]);
  });
  const hashCode = toHashCode(JSON.stringify(merge));
  const filtered = keyframeRefList.filter((keyframeRef) => keyframeRef.hashCode === hashCode);

  if (filtered.length) {
    return filtered[0].name;
  }

  const keyframeStr = toKeyframeString(merge);

  const name = keyframes`
    ${keyframeStr}
  `;

  keyframeRefList.push({
    name,
    hashCode,
  });

  /* istanbul ignore if */
  if (keyframeRefList.length > MAX_KEYFRAMES) {
    console.warn(`You might have done a mistake because of current keyframes injection count. You currently have ${keyframeRefList.length} keyframes in your page.`); // eslint-disable-line no-console
  }
  return name;
}
