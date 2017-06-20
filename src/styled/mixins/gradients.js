// Gradients

// Horizontal gradient, from left to right
//
// Creates two color stops, start and end, by specifying a color and position for each color stop.
// Color stops are not available in IE9.
export function gradientX(startColor = '#555', endColor = '#333', startPercent = '0%', endPercent = '100%') {
  return `
    background-image: linear-gradient(to right, ${startColor} ${startPercent}, ${endColor} ${endPercent});
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#{ie-hex-str(${startColor})}', endColorstr='#{ie-hex-str(${endColor})}', GradientType=1); // IE9
  `;
}

// Vertical gradient, from top to bottom
//
// Creates two color stops, start and end, by specifying a color and position for each color stop.
// Color stops are not available in IE9.
export function gradientY(startColor = '#555', endColor = '#333', startPercent = '0%', endPercent = '100%') {
  return `
    background-image: linear-gradient(to bottom, ${startColor} ${startPercent}, ${endColor} ${endPercent});
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#{ie-hex-str(${startColor})}', endColorstr='#{ie-hex-str(${endColor})}', GradientType=0); // IE9
  `;
}

export function gradientDirectional(startColor = '#555', endColor = '#333', deg = '45deg') {
  return `
    background-repeat: repeat-x;
    background-image: linear-gradient(${deg}, ${startColor}, ${endColor});
  `;
}

export function gradientXThreeColors(startColor = '#00b3ee', midColor = '#7a43b6', colorStop = '50%', endColor = '#c3325f') {
  return `
    background-image: linear-gradient(to right, ${startColor}, ${midColor} ${colorStop}, ${endColor});
    background-repeat: no-repeat;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#{ie-hex-str(${startColor})}', endColorstr='#{ie-hex-str(${endColor})}', GradientType=1); // IE9 gets no color-stop at all for proper fallback
  `;
}

export function gradientYThreeColors(startColor = '#00b3ee', midColor = '#7a43b6', colorStop = '50%', endColor = '#c3325f') {
  return `
    background-image: linear-gradient(${startColor}, ${midColor} ${colorStop}, ${endColor});
    background-repeat: no-repeat;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#{ie-hex-str(${startColor})}', endColorstr='#{ie-hex-str(${endColor})}', GradientType=0); // IE9 gets no color-stop at all for proper fallback
  `;
}

export function gradientRadial(innerColor = '#555', outerColor = '#333') {
  return `
    background-image: radial-gradient(circle, ${innerColor}, ${outerColor});
    background-repeat: no-repeat;
  `;
}

export function gradientStriped(color = 'rgba(255,255,255,.15)', angle = '45deg') {
  return `
    background-image: linear-gradient(${angle}, ${color} 25%, transparent 25%, transparent 50%, ${color} 50%, ${color} 75%, transparent 75%, transparent);
  `;
}

export default {
  x: gradientX,
  y: gradientY,
  directional: gradientDirectional,
  xThreeColors: gradientXThreeColors,
  yThreeColors: gradientYThreeColors,
  radial: gradientRadial,
  striped: gradientStriped,
};
