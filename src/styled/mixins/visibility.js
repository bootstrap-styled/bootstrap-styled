import { mediaBreakpointUp, mediaBreakpointDown } from './breakpoints';

export const defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
};

// Visibility

export function invisible() {
  return `
    visibility: hidden !important;
  `;
}

// Responsive visibility utilities
export function hiddenBpUp(gridBreakpoints = defaultProps['$grid-breakpoints']) {
  const hiddenBpList = [];
  Object.keys(gridBreakpoints).forEach((bp) => {
    const hiddenBpUpClass = `
      .hidden-${bp}-up {
        ${mediaBreakpointUp(bp, gridBreakpoints, 'display: none !important')}
      }
    `;
    const hiddenBpDownClass = `
      .hidden-${bp}-down {
        ${mediaBreakpointDown(bp, gridBreakpoints, 'display: none !important')}
      }
    `;
    hiddenBpList.push(hiddenBpUpClass);
    hiddenBpList.push(hiddenBpDownClass);
  });
  return hiddenBpList.join('\n');
}

// Print utilities
//
// Media queries are placed on the inside to be mixin-friendly.

export function visiblePrintBlock() {
  return `
    .visible-print-block {
      display: none !important;
      
      @media print {
        display: block !important;
      }
    }
  `;
}

export function visiblePrintInline() {
  return `
    .visible-print-inline {
      display: none !important;
      
      @media print {
        display: inline !important;
      }
    }
  `;
}

export function visiblePrintInlineBlock() {
  return `
    .visible-print-inline-block {
      display: none !important;
      
      @media print {
        display: inline-block !important;
      }
    }
  `;
}

export function hiddenPrint() {
  return `
    .hidden-print {
      @media print {
        display: none !important;
      }
    }
  `;
}

export default {
  visiblePrintBlock,
  visiblePrintInline,
  visiblePrintInlineBlock,
  hiddenPrint,
};
