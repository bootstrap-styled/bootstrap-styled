// jest ignore the coverage of tools.js for unknown reason.
// we export tools from ./fix (see later if this can be removed without decreasing coverage)
export {
  omit,
  isFunction,
  setScrollbarWidth,
  isBodyOverflowing,
  getOriginalBodyPadding,
  conditionallyUpdateScrollbar,
  mapToCssModules,
  isObject,
  getTetherAttachments,
  getScrollbarWidth,
} from './fix';
