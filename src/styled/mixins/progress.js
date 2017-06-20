export function progressVariant(bgColor) {
  return `
    &[value]::-webkit-progress-value {
      background-color: ${bgColor};
    }
    
    &[value]::-moz-progress-bar {
      background-color: ${bgColor};
    }
    
    /* IE10+, Microsoft Edge */
    &[value]::-ms-fill {
      background-color: ${bgColor};
    }
    
    /* IE9 */
    @media screen and (min-width:0\\0) {
    .progress-bar {
        background-color: ${bgColor};
      }
    }
  `;
}

export default {
  progressVariant,
};
