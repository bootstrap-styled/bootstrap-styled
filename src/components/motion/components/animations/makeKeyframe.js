import { fromJS } from 'immutable';
import { keyframes } from 'styled-components';

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
    keyframeStr += `${step}:{`;
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
 * @param distance
 * @param userKeyframes
 */
export default function makeKeyframe(makeAnimation, distance, userKeyframes = {}) {
  const MAX_KEYFRAMES = 50;

  const merge = fromJS(makeAnimation(distance)).mergeDeep(userKeyframes);
  const hashCode = merge.hashCode();
  const filtered = keyframeRefList.filter((keyframeRef) => keyframeRef.hashCode === hashCode);

  if (filtered.length) {
    return filtered[0].name;
  }

  const keyframeStr = toKeyframeString(merge.toJS());

  const name = keyframes`
    ${keyframeStr}
  `;

  keyframeRefList.push({
    name,
    hashCode,
  });

  if (keyframeRefList.length > MAX_KEYFRAMES) {
    console.warn(`You might have done a mistake because of current keyframes injection count. You currently have ${keyframeRefList.length} keyframes in your page.`); // eslint-disable-line no-console
  }
  return name;
}
