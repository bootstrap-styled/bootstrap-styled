/**
 * From a transition css value (multipel transition can be declarated with a  comma separated  list)
 * @param transitions
 * @returns {Array} will return an array of transition.
 */
export default function parseTransition(transitions) {
  if (!transitions) {
    return [];
  }
  let sample = transitions;
  const RULE_DELIMITER = ',';
  const PROPERTY_DELIMITER = ' ';
  const MS_UNIT = 'ms';
  const TMP_STR = 'TMP';

  // these are default css value for each property
  const DEFAULT_PROPERTY = 'all';
  const DEFAULT_DURATION = 0;
  const DEFAULT_TIMING_FUNCTION = 'ease';
  const DEFAULT_DELAY = 0;

  // eslint-disable-next-line no-useless-escape
  const BEZIER_REGEX = /cubic-bezier\([^\)]+\)/gi;

  const cubicBezierList = transitions.match(BEZIER_REGEX);
  if (cubicBezierList) {
    sample = sample.replace(BEZIER_REGEX, TMP_STR);
  }

  const transitionList = sample.split(RULE_DELIMITER).map((rule) => {
    const properties = rule.trim().split(PROPERTY_DELIMITER);
    return {
      property: properties[0] || DEFAULT_PROPERTY,
      duration: properties[1] && !properties[1].includes(MS_UNIT) ? parseFloat(properties[1]) * 1000 : parseFloat(properties[1]) || DEFAULT_DURATION,
      timingFunction: properties[2] && properties[2] !== TMP_STR ? properties[2] : cubicBezierList ? cubicBezierList.shift() : DEFAULT_TIMING_FUNCTION, // eslint-disable-line no-nested-ternary
      delay: properties[3] && !properties[3].includes(MS_UNIT) ? parseFloat(properties[3]) * 1000 : parseFloat(properties[3]) || DEFAULT_DELAY,
    };
  });
  return transitionList;
}
