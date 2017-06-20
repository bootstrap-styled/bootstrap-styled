// jest ignore the coverage of tools.js for unknown reason.
// we export tools from ./fix (see later if this can be removed without decreasing coverage)
export {
  setScrollbarWidth,
  isBodyOverflowing,
  getOriginalBodyPadding,
  conditionallyUpdateScrollbar,
  mapToCssModules,
  getTetherAttachments,
  tetherAttachements,
  getScrollbarWidth,
  toHashCode,
} from './fix';
