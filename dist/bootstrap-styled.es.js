import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, keyframes, withTheme } from 'styled-components';
import ReactDOM from 'react-dom';

function tabFocus() {
  return "\n    /* WebKit-specific. Other browsers will keep their default outline style. */\n    /* (Initially tried to also force default via 'outline: initial', */\n    /* but that seems to erroneously remove the outline in Firefox altogether.) */\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n  ";
}

var defaultProps$1 = {
  '$enable-hover-media-query': false
};
function hover(content) {
  return '\n    &:hover { ' + content + ' }\n  ';
}
function hoverFocus() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$1['$enable-hover-media-query'];
  var content = arguments[1];
  if (enableHoverMediaQuery) {
    return ' \n      &:focus { ' + content + ' }\n      ' + hover(content) + '\n    ';
  }
  return '\n    &:focus,\n    &:hover {\n      ' + content + '\n    }\n  ';
}
function plainHoverFocus() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$1['$enable-hover-media-query'];
  var content = arguments[1];
  if (enableHoverMediaQuery) {
    return '\n      &, &:focus {\n        ' + content + '\n      }\n      ' + hover(content) + '\n    ';
  }
  return ' \n    &, &:focus, &:hover {\n      ' + content + '\n    }\n  ';
}
function hoverFocusActive() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$1['$enable-hover-media-query'];
  var content = arguments[1];
  if (enableHoverMediaQuery) {
    return '\n      &:focus,\n      &:active {\n        ' + content + '\n      }\n      ' + hover(content) + '\n    ';
  }
  return '\n    &:focus, &:active, &:hover {\n     ' + content + '\n    }\n  ';
}
hover.focus = hoverFocus;
hover.plainFocus = plainHoverFocus;
hover.activeFocus = hoverFocusActive;

var defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  '$link-color': '#0275d8',
  '$link-decoration': 'none',
  '$link-hover-color': '#014C8D',
  '$link-hover-decoration': 'underline',
  '$enable-hover-media-query': false
};
function a() {
  var $linkColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$link-color'];
  var $linkDecoration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$link-decoration'];
  var $linkHoverColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$link-hover-color'];
  var $linkHoverDecoration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$link-hover-decoration'];
  var $enableHoverMediaQuery = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$enable-hover-media-query'];
  return '\n    color: ' + $linkColor + ';\n    text-decoration: ' + $linkDecoration + ';\n    background-color: transparent;\n    -webkit-text-decoration-skip: objects;\n  \n    ' + hoverFocus($enableHoverMediaQuery, '\n        color: ' + $linkHoverColor + ';\n        text-decoration: ' + $linkHoverDecoration + ';\n      ') + '\n    \n    &:focus {\n      ' + tabFocus() + '\n    }\n\n    a:not([href]):not([tabindex]) {\n      color: inherit;\n      text-decoration: none;\n      \n      ' + hoverFocus($enableHoverMediaQuery, '\n          color: inherit;\n          text-decoration: none;\n        ') + '\n\n      &:focus {\n        outline: 0;\n      }\n    }\n  ';
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}

function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

'use strict';
var colorName = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

'use strict';
var isArrayish = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}
	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};

var simpleSwizzle = createCommonjsModule(function (module) {
'use strict';
var concat = Array.prototype.concat;
var slice = Array.prototype.slice;
var swizzle = module.exports = function swizzle(args) {
	var results = [];
	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];
		if (isArrayish(arg)) {
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}
	return results;
};
swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};
});

var colorString = createCommonjsModule(function (module) {
var reverseNames = {};
for (var name in colorName) {
	if (colorName.hasOwnProperty(name)) {
		reverseNames[colorName[name]] = name;
	}
}
var cs = module.exports = {
	to: {}
};
cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}
	if (!val) {
		return null;
	}
	return {model: model, value: val};
};
cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}
	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;
	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;
	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];
		for (i = 0; i < 3; i++) {
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}
		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}
		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}
		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}
		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}
		rgb = colorName[match[1]];
		if (!rgb) {
			return null;
		}
		rgb[3] = 1;
		return rgb;
	} else {
		return null;
	}
	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);
	return rgb;
};
cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}
	var hsl = /^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);
	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, s, l, a];
	}
	return null;
};
cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}
	var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);
	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}
	return null;
};
cs.to.hex = function () {
	var rgba = simpleSwizzle(arguments);
	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};
cs.to.rgb = function () {
	var rgba = simpleSwizzle(arguments);
	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};
cs.to.rgb.percent = function () {
	var rgba = simpleSwizzle(arguments);
	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);
	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};
cs.to.hsl = function () {
	var hsla = simpleSwizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};
cs.to.hwb = function () {
	var hwba = simpleSwizzle(arguments);
	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}
	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};
cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}
function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}
});

var conversions = createCommonjsModule(function (module) {
var reverseKeywords = {};
for (var key in colorName) {
	if (colorName.hasOwnProperty(key)) {
		reverseKeywords[colorName[key]] = key;
	}
}
var convert = module.exports = {
	rgb: {channels: 3, labels: 'rgb'},
	hsl: {channels: 3, labels: 'hsl'},
	hsv: {channels: 3, labels: 'hsv'},
	hwb: {channels: 3, labels: 'hwb'},
	cmyk: {channels: 4, labels: 'cmyk'},
	xyz: {channels: 3, labels: 'xyz'},
	lab: {channels: 3, labels: 'lab'},
	lch: {channels: 3, labels: 'lch'},
	hex: {channels: 1, labels: ['hex']},
	keyword: {channels: 1, labels: ['keyword']},
	ansi16: {channels: 1, labels: ['ansi16']},
	ansi256: {channels: 1, labels: ['ansi256']},
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
	gray: {channels: 1, labels: ['gray']}
};
for (var model in convert) {
	if (convert.hasOwnProperty(model)) {
		if (!('channels' in convert[model])) {
			throw new Error('missing channels property: ' + model);
		}
		if (!('labels' in convert[model])) {
			throw new Error('missing channel labels property: ' + model);
		}
		if (convert[model].labels.length !== convert[model].channels) {
			throw new Error('channel and label counts mismatch: ' + model);
		}
		var channels = convert[model].channels;
		var labels = convert[model].labels;
		delete convert[model].channels;
		delete convert[model].labels;
		Object.defineProperty(convert[model], 'channels', {value: channels});
		Object.defineProperty(convert[model], 'labels', {value: labels});
	}
}
convert.rgb.hsl = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var l;
	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}
	h = Math.min(h * 60, 360);
	if (h < 0) {
		h += 360;
	}
	l = (min + max) / 2;
	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}
	return [h, s * 100, l * 100];
};
convert.rgb.hsv = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var min = Math.min(r, g, b);
	var max = Math.max(r, g, b);
	var delta = max - min;
	var h;
	var s;
	var v;
	if (max === 0) {
		s = 0;
	} else {
		s = (delta / max * 1000) / 10;
	}
	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}
	h = Math.min(h * 60, 360);
	if (h < 0) {
		h += 360;
	}
	v = ((max / 255) * 1000) / 10;
	return [h, s, v];
};
convert.rgb.hwb = function (rgb) {
	var r = rgb[0];
	var g = rgb[1];
	var b = rgb[2];
	var h = convert.rgb.hsl(rgb)[0];
	var w = 1 / 255 * Math.min(r, Math.min(g, b));
	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
	return [h, w * 100, b * 100];
};
convert.rgb.cmyk = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var c;
	var m;
	var y;
	var k;
	k = Math.min(1 - r, 1 - g, 1 - b);
	c = (1 - r - k) / (1 - k) || 0;
	m = (1 - g - k) / (1 - k) || 0;
	y = (1 - b - k) / (1 - k) || 0;
	return [c * 100, m * 100, y * 100, k * 100];
};
function comparativeDistance(x, y) {
	return (
		Math.pow(x[0] - y[0], 2) +
		Math.pow(x[1] - y[1], 2) +
		Math.pow(x[2] - y[2], 2)
	);
}
convert.rgb.keyword = function (rgb) {
	var reversed = reverseKeywords[rgb];
	if (reversed) {
		return reversed;
	}
	var currentClosestDistance = Infinity;
	var currentClosestKeyword;
	for (var keyword in colorName) {
		if (colorName.hasOwnProperty(keyword)) {
			var value = colorName[keyword];
			var distance = comparativeDistance(rgb, value);
			if (distance < currentClosestDistance) {
				currentClosestDistance = distance;
				currentClosestKeyword = keyword;
			}
		}
	}
	return currentClosestKeyword;
};
convert.keyword.rgb = function (keyword) {
	return colorName[keyword];
};
convert.rgb.xyz = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);
	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);
	return [x * 100, y * 100, z * 100];
};
convert.rgb.lab = function (rgb) {
	var xyz = convert.rgb.xyz(rgb);
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;
	x /= 95.047;
	y /= 100;
	z /= 108.883;
	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);
	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);
	return [l, a, b];
};
convert.hsl.rgb = function (hsl) {
	var h = hsl[0] / 360;
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var t1;
	var t2;
	var t3;
	var rgb;
	var val;
	if (s === 0) {
		val = l * 255;
		return [val, val, val];
	}
	if (l < 0.5) {
		t2 = l * (1 + s);
	} else {
		t2 = l + s - l * s;
	}
	t1 = 2 * l - t2;
	rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		t3 = h + 1 / 3 * -(i - 1);
		if (t3 < 0) {
			t3++;
		}
		if (t3 > 1) {
			t3--;
		}
		if (6 * t3 < 1) {
			val = t1 + (t2 - t1) * 6 * t3;
		} else if (2 * t3 < 1) {
			val = t2;
		} else if (3 * t3 < 2) {
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
		} else {
			val = t1;
		}
		rgb[i] = val * 255;
	}
	return rgb;
};
convert.hsl.hsv = function (hsl) {
	var h = hsl[0];
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var smin = s;
	var lmin = Math.max(l, 0.01);
	var sv;
	var v;
	l *= 2;
	s *= (l <= 1) ? l : 2 - l;
	smin *= lmin <= 1 ? lmin : 2 - lmin;
	v = (l + s) / 2;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);
	return [h, sv * 100, v * 100];
};
convert.hsv.rgb = function (hsv) {
	var h = hsv[0] / 60;
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var hi = Math.floor(h) % 6;
	var f = h - Math.floor(h);
	var p = 255 * v * (1 - s);
	var q = 255 * v * (1 - (s * f));
	var t = 255 * v * (1 - (s * (1 - f)));
	v *= 255;
	switch (hi) {
		case 0:
			return [v, t, p];
		case 1:
			return [q, v, p];
		case 2:
			return [p, v, t];
		case 3:
			return [p, q, v];
		case 4:
			return [t, p, v];
		case 5:
			return [v, p, q];
	}
};
convert.hsv.hsl = function (hsv) {
	var h = hsv[0];
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var vmin = Math.max(v, 0.01);
	var lmin;
	var sl;
	var l;
	l = (2 - s) * v;
	lmin = (2 - s) * vmin;
	sl = s * vmin;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
	sl = sl || 0;
	l /= 2;
	return [h, sl * 100, l * 100];
};
convert.hwb.rgb = function (hwb) {
	var h = hwb[0] / 360;
	var wh = hwb[1] / 100;
	var bl = hwb[2] / 100;
	var ratio = wh + bl;
	var i;
	var v;
	var f;
	var n;
	if (ratio > 1) {
		wh /= ratio;
		bl /= ratio;
	}
	i = Math.floor(6 * h);
	v = 1 - bl;
	f = 6 * h - i;
	if ((i & 0x01) !== 0) {
		f = 1 - f;
	}
	n = wh + f * (v - wh);
	var r;
	var g;
	var b;
	switch (i) {
		default:
		case 6:
		case 0: r = v; g = n; b = wh; break;
		case 1: r = n; g = v; b = wh; break;
		case 2: r = wh; g = v; b = n; break;
		case 3: r = wh; g = n; b = v; break;
		case 4: r = n; g = wh; b = v; break;
		case 5: r = v; g = wh; b = n; break;
	}
	return [r * 255, g * 255, b * 255];
};
convert.cmyk.rgb = function (cmyk) {
	var c = cmyk[0] / 100;
	var m = cmyk[1] / 100;
	var y = cmyk[2] / 100;
	var k = cmyk[3] / 100;
	var r;
	var g;
	var b;
	r = 1 - Math.min(1, c * (1 - k) + k);
	g = 1 - Math.min(1, m * (1 - k) + k);
	b = 1 - Math.min(1, y * (1 - k) + k);
	return [r * 255, g * 255, b * 255];
};
convert.xyz.rgb = function (xyz) {
	var x = xyz[0] / 100;
	var y = xyz[1] / 100;
	var z = xyz[2] / 100;
	var r;
	var g;
	var b;
	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);
	r = r > 0.0031308
		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		: r * 12.92;
	g = g > 0.0031308
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
		: g * 12.92;
	b = b > 0.0031308
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
		: b * 12.92;
	r = Math.min(Math.max(0, r), 1);
	g = Math.min(Math.max(0, g), 1);
	b = Math.min(Math.max(0, b), 1);
	return [r * 255, g * 255, b * 255];
};
convert.xyz.lab = function (xyz) {
	var x = xyz[0];
	var y = xyz[1];
	var z = xyz[2];
	var l;
	var a;
	var b;
	x /= 95.047;
	y /= 100;
	z /= 108.883;
	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);
	l = (116 * y) - 16;
	a = 500 * (x - y);
	b = 200 * (y - z);
	return [l, a, b];
};
convert.lab.xyz = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var x;
	var y;
	var z;
	y = (l + 16) / 116;
	x = a / 500 + y;
	z = y - b / 200;
	var y2 = Math.pow(y, 3);
	var x2 = Math.pow(x, 3);
	var z2 = Math.pow(z, 3);
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
	x *= 95.047;
	y *= 100;
	z *= 108.883;
	return [x, y, z];
};
convert.lab.lch = function (lab) {
	var l = lab[0];
	var a = lab[1];
	var b = lab[2];
	var hr;
	var h;
	var c;
	hr = Math.atan2(b, a);
	h = hr * 360 / 2 / Math.PI;
	if (h < 0) {
		h += 360;
	}
	c = Math.sqrt(a * a + b * b);
	return [l, c, h];
};
convert.lch.lab = function (lch) {
	var l = lch[0];
	var c = lch[1];
	var h = lch[2];
	var a;
	var b;
	var hr;
	hr = h / 360 * 2 * Math.PI;
	a = c * Math.cos(hr);
	b = c * Math.sin(hr);
	return [l, a, b];
};
convert.rgb.ansi16 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2];
	value = Math.round(value / 50);
	if (value === 0) {
		return 30;
	}
	var ansi = 30
		+ ((Math.round(b / 255) << 2)
		| (Math.round(g / 255) << 1)
		| Math.round(r / 255));
	if (value === 2) {
		ansi += 60;
	}
	return ansi;
};
convert.hsv.ansi16 = function (args) {
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
};
convert.rgb.ansi256 = function (args) {
	var r = args[0];
	var g = args[1];
	var b = args[2];
	if (r === g && g === b) {
		if (r < 8) {
			return 16;
		}
		if (r > 248) {
			return 231;
		}
		return Math.round(((r - 8) / 247) * 24) + 232;
	}
	var ansi = 16
		+ (36 * Math.round(r / 255 * 5))
		+ (6 * Math.round(g / 255 * 5))
		+ Math.round(b / 255 * 5);
	return ansi;
};
convert.ansi16.rgb = function (args) {
	var color = args % 10;
	if (color === 0 || color === 7) {
		if (args > 50) {
			color += 3.5;
		}
		color = color / 10.5 * 255;
		return [color, color, color];
	}
	var mult = (~~(args > 50) + 1) * 0.5;
	var r = ((color & 1) * mult) * 255;
	var g = (((color >> 1) & 1) * mult) * 255;
	var b = (((color >> 2) & 1) * mult) * 255;
	return [r, g, b];
};
convert.ansi256.rgb = function (args) {
	if (args >= 232) {
		var c = (args - 232) * 10 + 8;
		return [c, c, c];
	}
	args -= 16;
	var rem;
	var r = Math.floor(args / 36) / 5 * 255;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
	var b = (rem % 6) / 5 * 255;
	return [r, g, b];
};
convert.rgb.hex = function (args) {
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		+ ((Math.round(args[1]) & 0xFF) << 8)
		+ (Math.round(args[2]) & 0xFF);
	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};
convert.hex.rgb = function (args) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	if (!match) {
		return [0, 0, 0];
	}
	var colorString = match[0];
	if (match[0].length === 3) {
		colorString = colorString.split('').map(function (char) {
			return char + char;
		}).join('');
	}
	var integer = parseInt(colorString, 16);
	var r = (integer >> 16) & 0xFF;
	var g = (integer >> 8) & 0xFF;
	var b = integer & 0xFF;
	return [r, g, b];
};
convert.rgb.hcg = function (rgb) {
	var r = rgb[0] / 255;
	var g = rgb[1] / 255;
	var b = rgb[2] / 255;
	var max = Math.max(Math.max(r, g), b);
	var min = Math.min(Math.min(r, g), b);
	var chroma = (max - min);
	var grayscale;
	var hue;
	if (chroma < 1) {
		grayscale = min / (1 - chroma);
	} else {
		grayscale = 0;
	}
	if (chroma <= 0) {
		hue = 0;
	} else
	if (max === r) {
		hue = ((g - b) / chroma) % 6;
	} else
	if (max === g) {
		hue = 2 + (b - r) / chroma;
	} else {
		hue = 4 + (r - g) / chroma + 4;
	}
	hue /= 6;
	hue %= 1;
	return [hue * 360, chroma * 100, grayscale * 100];
};
convert.hsl.hcg = function (hsl) {
	var s = hsl[1] / 100;
	var l = hsl[2] / 100;
	var c = 1;
	var f = 0;
	if (l < 0.5) {
		c = 2.0 * s * l;
	} else {
		c = 2.0 * s * (1.0 - l);
	}
	if (c < 1.0) {
		f = (l - 0.5 * c) / (1.0 - c);
	}
	return [hsl[0], c * 100, f * 100];
};
convert.hsv.hcg = function (hsv) {
	var s = hsv[1] / 100;
	var v = hsv[2] / 100;
	var c = s * v;
	var f = 0;
	if (c < 1.0) {
		f = (v - c) / (1 - c);
	}
	return [hsv[0], c * 100, f * 100];
};
convert.hcg.rgb = function (hcg) {
	var h = hcg[0] / 360;
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	if (c === 0.0) {
		return [g * 255, g * 255, g * 255];
	}
	var pure = [0, 0, 0];
	var hi = (h % 1) * 6;
	var v = hi % 1;
	var w = 1 - v;
	var mg = 0;
	switch (Math.floor(hi)) {
		case 0:
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
		case 1:
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
		case 2:
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;
		case 3:
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
		case 4:
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
		default:
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	}
	mg = (1.0 - c) * g;
	return [
		(c * pure[0] + mg) * 255,
		(c * pure[1] + mg) * 255,
		(c * pure[2] + mg) * 255
	];
};
convert.hcg.hsv = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	var f = 0;
	if (v > 0.0) {
		f = c / v;
	}
	return [hcg[0], f * 100, v * 100];
};
convert.hcg.hsl = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var l = g * (1.0 - c) + 0.5 * c;
	var s = 0;
	if (l > 0.0 && l < 0.5) {
		s = c / (2 * l);
	} else
	if (l >= 0.5 && l < 1.0) {
		s = c / (2 * (1 - l));
	}
	return [hcg[0], s * 100, l * 100];
};
convert.hcg.hwb = function (hcg) {
	var c = hcg[1] / 100;
	var g = hcg[2] / 100;
	var v = c + g * (1.0 - c);
	return [hcg[0], (v - c) * 100, (1 - v) * 100];
};
convert.hwb.hcg = function (hwb) {
	var w = hwb[1] / 100;
	var b = hwb[2] / 100;
	var v = 1 - b;
	var c = v - w;
	var g = 0;
	if (c < 1) {
		g = (v - c) / (1 - c);
	}
	return [hwb[0], c * 100, g * 100];
};
convert.apple.rgb = function (apple) {
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];
};
convert.rgb.apple = function (rgb) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
};
convert.gray.rgb = function (args) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
};
convert.gray.hsl = convert.gray.hsv = function (args) {
	return [0, 0, args[0]];
};
convert.gray.hwb = function (gray) {
	return [0, 100, gray[0]];
};
convert.gray.cmyk = function (gray) {
	return [0, 0, 0, gray[0]];
};
convert.gray.lab = function (gray) {
	return [gray[0], 0, 0];
};
convert.gray.hex = function (gray) {
	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
	var integer = (val << 16) + (val << 8) + val;
	var string = integer.toString(16).toUpperCase();
	return '000000'.substring(string.length) + string;
};
convert.rgb.gray = function (rgb) {
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
	return [val / 255 * 100];
};
});

var models$1 = Object.keys(conversions);
function buildGraph() {
	var graph = {};
	for (var len = models$1.length, i = 0; i < len; i++) {
		graph[models$1[i]] = {
			distance: -1,
			parent: null
		};
	}
	return graph;
}
function deriveBFS(fromModel) {
	var graph = buildGraph();
	var queue = [fromModel];
	graph[fromModel].distance = 0;
	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions[current]);
		for (var len = adjacents.length, i = 0; i < len; i++) {
			var adjacent = adjacents[i];
			var node = graph[adjacent];
			if (node.distance === -1) {
				node.distance = graph[current].distance + 1;
				node.parent = current;
				queue.unshift(adjacent);
			}
		}
	}
	return graph;
}
function link(from, to) {
	return function (args) {
		return to(from(args));
	};
}
function wrapConversion(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions[graph[toModel].parent][toModel];
	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link(conversions[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}
	fn.conversion = path;
	return fn;
}
var route = function (fromModel) {
	var graph = deriveBFS(fromModel);
	var conversion = {};
	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];
		if (node.parent === null) {
			continue;
		}
		conversion[toModel] = wrapConversion(toModel, graph);
	}
	return conversion;
};

var convert = {};
var models = Object.keys(conversions);
function wrapRaw(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}
		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}
		return fn(args);
	};
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}
	return wrappedFn;
}
function wrapRounded(fn) {
	var wrappedFn = function (args) {
		if (args === undefined || args === null) {
			return args;
		}
		if (arguments.length > 1) {
			args = Array.prototype.slice.call(arguments);
		}
		var result = fn(args);
		if (typeof result === 'object') {
			for (var len = result.length, i = 0; i < len; i++) {
				result[i] = Math.round(result[i]);
			}
		}
		return result;
	};
	if ('conversion' in fn) {
		wrappedFn.conversion = fn.conversion;
	}
	return wrappedFn;
}
models.forEach(function (fromModel) {
	convert[fromModel] = {};
	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});
	var routes = route(fromModel);
	var routeModels = Object.keys(routes);
	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];
		convert[fromModel][toModel] = wrapRounded(fn);
		convert[fromModel][toModel].raw = wrapRaw(fn);
	});
});
var colorConvert = convert;

'use strict';
var _slice = [].slice;
var skippedModels = [
	'keyword',
	'gray',
	'hex'
];
var hashedModelKeys = {};
Object.keys(colorConvert).forEach(function (model) {
	hashedModelKeys[_slice.call(colorConvert[model].labels).sort().join('')] = model;
});
var limiters = {};
function Color(obj, model) {
	if (!(this instanceof Color)) {
		return new Color(obj, model);
	}
	if (model && model in skippedModels) {
		model = null;
	}
	if (model && !(model in colorConvert)) {
		throw new Error('Unknown model: ' + model);
	}
	var i;
	var channels;
	if (!obj) {
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (obj instanceof Color) {
		this.model = obj.model;
		this.color = obj.color.slice();
		this.valpha = obj.valpha;
	} else if (typeof obj === 'string') {
		var result = colorString.get(obj);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + obj);
		}
		this.model = result.model;
		channels = colorConvert[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (obj.length) {
		this.model = model || 'rgb';
		channels = colorConvert[this.model].channels;
		var newArr = _slice.call(obj, 0, channels);
		this.color = zeroArray(newArr, channels);
		this.valpha = typeof obj[channels] === 'number' ? obj[channels] : 1;
	} else if (typeof obj === 'number') {
		obj &= 0xFFFFFF;
		this.model = 'rgb';
		this.color = [
			(obj >> 16) & 0xFF,
			(obj >> 8) & 0xFF,
			obj & 0xFF
		];
		this.valpha = 1;
	} else {
		this.valpha = 1;
		var keys = Object.keys(obj);
		if ('alpha' in obj) {
			keys.splice(keys.indexOf('alpha'), 1);
			this.valpha = typeof obj.alpha === 'number' ? obj.alpha : 0;
		}
		var hashedKeys = keys.sort().join('');
		if (!(hashedKeys in hashedModelKeys)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
		}
		this.model = hashedModelKeys[hashedKeys];
		var labels = colorConvert[this.model].labels;
		var color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(obj[labels[i]]);
		}
		this.color = zeroArray(color);
	}
	if (limiters[this.model]) {
		channels = colorConvert[this.model].channels;
		for (i = 0; i < channels; i++) {
			var limit = limiters[this.model][i];
			if (limit) {
				this.color[i] = limit(this.color[i]);
			}
		}
	}
	this.valpha = Math.max(0, Math.min(1, this.valpha));
	if (Object.freeze) {
		Object.freeze(this);
	}
}
Color.prototype = {
	toString: function () {
		return this.string();
	},
	toJSON: function () {
		return this[this.model]();
	},
	string: function (places) {
		var self = this.model in colorString.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to[self.model](args);
	},
	percentString: function (places) {
		var self = this.rgb().round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString.to.rgb.percent(args);
	},
	array: function () {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},
	object: function () {
		var result = {};
		var channels = colorConvert[this.model].channels;
		var labels = colorConvert[this.model].labels;
		for (var i = 0; i < channels; i++) {
			result[labels[i]] = this.color[i];
		}
		if (this.valpha !== 1) {
			result.alpha = this.valpha;
		}
		return result;
	},
	unitArray: function () {
		var rgb = this.rgb().color;
		rgb[0] /= 255;
		rgb[1] /= 255;
		rgb[2] /= 255;
		if (this.valpha !== 1) {
			rgb.push(this.valpha);
		}
		return rgb;
	},
	unitObject: function () {
		var rgb = this.rgb().object();
		rgb.r /= 255;
		rgb.g /= 255;
		rgb.b /= 255;
		if (this.valpha !== 1) {
			rgb.alpha = this.valpha;
		}
		return rgb;
	},
	round: function (places) {
		places = Math.max(places || 0, 0);
		return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
	},
	alpha: function (val) {
		if (arguments.length) {
			return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
		}
		return this.valpha;
	},
	red: getset('rgb', 0, maxfn(255)),
	green: getset('rgb', 1, maxfn(255)),
	blue: getset('rgb', 2, maxfn(255)),
	hue: getset(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }),
	saturationl: getset('hsl', 1, maxfn(100)),
	lightness: getset('hsl', 2, maxfn(100)),
	saturationv: getset('hsv', 1, maxfn(100)),
	value: getset('hsv', 2, maxfn(100)),
	chroma: getset('hcg', 1, maxfn(100)),
	gray: getset('hcg', 2, maxfn(100)),
	white: getset('hwb', 1, maxfn(100)),
	wblack: getset('hwb', 2, maxfn(100)),
	cyan: getset('cmyk', 0, maxfn(100)),
	magenta: getset('cmyk', 1, maxfn(100)),
	yellow: getset('cmyk', 2, maxfn(100)),
	black: getset('cmyk', 3, maxfn(100)),
	x: getset('xyz', 0, maxfn(100)),
	y: getset('xyz', 1, maxfn(100)),
	z: getset('xyz', 2, maxfn(100)),
	l: getset('lab', 0, maxfn(100)),
	a: getset('lab', 1),
	b: getset('lab', 2),
	keyword: function (val) {
		if (arguments.length) {
			return new Color(val);
		}
		return colorConvert[this.model].keyword(this.color);
	},
	hex: function (val) {
		if (arguments.length) {
			return new Color(val);
		}
		return colorString.to.hex(this.rgb().round().color);
	},
	rgbNumber: function () {
		var rgb = this.rgb().color;
		return ((rgb[0] & 0xFF) << 16) | ((rgb[1] & 0xFF) << 8) | (rgb[2] & 0xFF);
	},
	luminosity: function () {
		var rgb = this.rgb().color;
		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}
		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},
	contrast: function (color2) {
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();
		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}
		return (lum2 + 0.05) / (lum1 + 0.05);
	},
	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}
		return (contrastRatio >= 4.5) ? 'AA' : '';
	},
	dark: function () {
		var rgb = this.rgb().color;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},
	light: function () {
		return !this.dark();
	},
	negate: function () {
		var rgb = this.rgb();
		for (var i = 0; i < 3; i++) {
			rgb.color[i] = 255 - rgb.color[i];
		}
		return rgb;
	},
	lighten: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] += hsl.color[2] * ratio;
		return hsl;
	},
	darken: function (ratio) {
		var hsl = this.hsl();
		hsl.color[2] -= hsl.color[2] * ratio;
		return hsl;
	},
	saturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] += hsl.color[1] * ratio;
		return hsl;
	},
	desaturate: function (ratio) {
		var hsl = this.hsl();
		hsl.color[1] -= hsl.color[1] * ratio;
		return hsl;
	},
	whiten: function (ratio) {
		var hwb = this.hwb();
		hwb.color[1] += hwb.color[1] * ratio;
		return hwb;
	},
	blacken: function (ratio) {
		var hwb = this.hwb();
		hwb.color[2] += hwb.color[2] * ratio;
		return hwb;
	},
	grayscale: function () {
		var rgb = this.rgb().color;
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		return Color.rgb(val, val, val);
	},
	fade: function (ratio) {
		return this.alpha(this.valpha - (this.valpha * ratio));
	},
	opaquer: function (ratio) {
		return this.alpha(this.valpha + (this.valpha * ratio));
	},
	rotate: function (degrees) {
		var hsl = this.hsl();
		var hue = hsl.color[0];
		hue = (hue + degrees) % 360;
		hue = hue < 0 ? 360 + hue : hue;
		hsl.color[0] = hue;
		return hsl;
	},
	mix: function (mixinColor, weight) {
		var color1 = this.rgb();
		var color2 = mixinColor.rgb();
		var p = weight === undefined ? 0.5 : weight;
		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();
		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;
		return Color.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue(),
				color1.alpha() * p + color2.alpha() * (1 - p));
	}
};
Object.keys(colorConvert).forEach(function (model) {
	if (skippedModels.indexOf(model) !== -1) {
		return;
	}
	var channels = colorConvert[model].channels;
	Color.prototype[model] = function () {
		if (this.model === model) {
			return new Color(this);
		}
		if (arguments.length) {
			return new Color(arguments, model);
		}
		var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color(assertArray(colorConvert[this.model][model].raw(this.color)).concat(newAlpha), model);
	};
	Color[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray(_slice.call(arguments), channels);
		}
		return new Color(color, model);
	};
});
function roundTo(num, places) {
	return Number(num.toFixed(places));
}
function roundToPlace(places) {
	return function (num) {
		return roundTo(num, places);
	};
}
function getset(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];
	model.forEach(function (m) {
		(limiters[m] || (limiters[m] = []))[channel] = modifier;
	});
	model = model[0];
	return function (val) {
		var result;
		if (arguments.length) {
			if (modifier) {
				val = modifier(val);
			}
			result = this[model]();
			result.color[channel] = val;
			return result;
		}
		result = this[model]().color[channel];
		if (modifier) {
			result = modifier(result);
		}
		return result;
	};
}
function maxfn(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}
function assertArray(val) {
	return Array.isArray(val) ? val : [val];
}
function zeroArray(arr, length) {
	for (var i = 0; i < length; i++) {
		if (typeof arr[i] !== 'number') {
			arr[i] = 0;
		}
	}
	return arr;
}
var color = Color;

function alertVariant(background, border, bodyColor) {
  return '\n    background-color: ' + background + ';\n    border-color: ' + border + ';\n    color: ' + bodyColor + ';\n  \n    hr {\n      border-top-color: ' + color(border).darken(0.5).toString() + ';\n    }\n    .alert-link {\n      color: ' + color(bodyColor).darken(0.1).toString() + ';\n    }\n  ';
}

var defaultProps$2 = {
  '$enable-hover-media-query': false
};
function bgVariant() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$2['$enable-hover-media-query'];
  var selector = arguments[1];
  var bgColor = arguments[2];
  return '\n    ' + selector + ' {\n      background-color: ' + bgColor + ' !important;\n    }\n    a' + selector + ' {\n      ' + hoverFocus(enableHoverMediaQuery, 'background-color: ' + color(bgColor).darken(0.2).rgb() + ' !important;') + '\n    }\n  ';
}

var defaultProps$3 = {
  '$enable-hover-mediaQuery': false
};
function badgeVariant() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$3['$enable-hover-mediaQuery'];
  var badgeColor = arguments[1];
  return '\n    background-color: ' + badgeColor + ';\n    \n    &[href] {\n      ' + hoverFocus(enableHoverMediaQuery, 'background-color: ' + color(badgeColor).darken(0.1).toString() + ';') + '\n    }\n  ';
}

var defaultProps$4 = {
  '$border-radius': '.25rem',
  '$enable-rounded': true
};
function borderRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$4['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$4['$border-radius'];
  if (enableRounded) {
    return '\n      border-radius: ' + radius + ';\n    ';
  }
  return '';
}
function borderTopRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$4['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$4['$border-radius'];
  if (enableRounded) {
    return '\n      border-top-right-radius: ' + radius + ';\n      border-top-left-radius: ' + radius + ';\n    ';
  }
  return '';
}
function borderRightRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$4['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$4['$border-radius'];
  if (enableRounded) {
    return '\n      border-bottom-right-radius: ' + radius + ';\n      border-top-right-radius: ' + radius + ';\n    ';
  }
  return '';
}
function borderBottomRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$4['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$4['$border-radius'];
  if (enableRounded) {
    return '\n      border-bottom-right-radius: ' + radius + ';\n      border-bottom-left-radius: ' + radius + ';\n    ';
  }
  return '';
}
function borderLeftRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$4['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$4['$border-radius'];
  if (enableRounded) {
    return '\n      border-bottom-left-radius: ' + radius + ';\n      border-top-left-radius: ' + radius + ';\n    ';
  }
  return '';
}
var borderRadius$1 = {
  defaultProps: defaultProps$4,
  all: borderRadius,
  top: borderTopRadius,
  right: borderRightRadius,
  bottom: borderBottomRadius,
  left: borderLeftRadius
};

var defaultProps$5 = {
  '$enable-shadows': false
};
function boxShadow() {
  var enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$5['$enable-shadows'];
  if (enableShadows) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return '\n      box-shadow: ' + args.join(' ') + ';\n    ';
  }
  return '';
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var RangeUtils = function () {
  function RangeUtils() {
    classCallCheck(this, RangeUtils);
  }
  createClass(RangeUtils, [{
    key: "mapBetween",
    value: function mapBetween(valueNow, valueMin, valueMax) {
      var rangeMin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var rangeMax = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 100;
      return (rangeMax - rangeMin) * (valueNow - valueMin) / (valueMax - valueMin) + rangeMin;
    }
  }]);
  return RangeUtils;
}();
var index = new RangeUtils();
var UnitUtils = function UnitUtils() {
  var _this = this;
  classCallCheck(this, UnitUtils);
  this.UNIT = {
    EM: 'em',
    REM: 'rem',
    PX: 'px',
    PERCENT: '%'
  };
  this.math = {
    addition: function addition(a, b) {
      var unit = this.detectUnit(a) || this.detectUnit(b);
      return this.rmUnit(a) + this.rmUnit(b) + unit;
    }.bind(this),
    subtract: function subtract(a, b) {
      var unit = this.detectUnit(a) || this.detectUnit(b);
      return this.rmUnit(a) - this.rmUnit(b) + unit;
    }.bind(this),
    multiply: function multiply(a, b) {
      var unit = this.detectUnit(a) || this.detectUnit(b);
      return this.rmUnit(a) * this.rmUnit(b) + unit;
    }.bind(this),
    divide: function divide(a, b) {
      var unit = this.detectUnit(a) || this.detectUnit(b);
      return this.rmUnit(a) / this.rmUnit(b) + unit;
    }.bind(this)
  };
  this.detectUnit = function (value) {
    var ext = void 0;
    var valueStr = value.toString();
    if (valueStr.match(_this.UNIT.PX)) {
      ext = _this.UNIT.PX;
    } else if (valueStr.match(_this.UNIT.REM)) {
      ext = _this.UNIT.REM;
    } else if (valueStr.match(_this.UNIT.EM)) {
      ext = _this.UNIT.EM;
    } else if (valueStr.match(_this.UNIT.PERCENT)) {
      ext = _this.UNIT.PERCENT;
    } else if (!isNaN(value)) {
      return null;
    } else {
      throw new Error('detectUnit can\'t find unit for ' + value);
    }
    return ext;
  };
  this.rmUnit = function (value, unit) {
    var valueStr = value.toString();
    var ext = unit || _this.detectUnit(valueStr);
    var number = valueStr.replace(ext, '');
    return parseFloat(number);
  };
  this.toPercent = function (value) {
    var total = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
    var decimal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
    return '' + Math.floor(value / total * 100 * Math.pow(10, decimal)) / Math.pow(10, decimal) + _this.UNIT.PERCENT;
  };
};
var index$1 = new UnitUtils();

var defaultProps$6 = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};
function breakpointNext(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$6['$grid-breakpoints'];
  var breakpointNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.keys(breakpoints);
  var n = breakpointNames.indexOf(name);
  if (n !== -1 && n + 1 < breakpointNames.length) {
    return breakpointNames[n + 1];
  }
  return null;
}
function breakpointMin(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$6['$grid-breakpoints'];
  var min = breakpoints[name];
  return min !== '0' ? min : null;
}
function breakpointMax(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$6['$grid-breakpoints'];
  var next = breakpointNext(name, breakpoints);
  if (next) {
    var min = index$1.rmUnit(breakpointMin(next, breakpoints), index$1.UNIT.PX);
    return (min - 1).toString() + index$1.UNIT.PX;
  }
  return null;
}
function breakpointInfix(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$6['$grid-breakpoints'];
  return breakpointMin(name, breakpoints) == null ? '' : '-' + name;
}
function mediaBreakpointUp(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$6['$grid-breakpoints'];
  var content = arguments[2];
  var min = breakpointMin(name, breakpoints);
  if (min) {
    return '\n      @media (min-width: ' + min + ') {\n        ' + content + '\n      }\n    ';
  }
  return '\n    ' + content + '\n  ';
}
function mediaBreakpointDown(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$6['$grid-breakpoints'];
  var content = arguments[2];
  var max = breakpointMax(name, breakpoints);
  if (max) {
    return '\n      @media (max-width: ' + max + ') {\n        ' + content + '\n      }\n    ';
  }
  return '\n    ' + content + '\n  ';
}
function mediaBreakpointBetween(lower, upper) {
  var breakpoints = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$6['$grid-breakpoints'];
  var content = arguments[3];
  var min = breakpointMin(lower, breakpoints);
  var max = breakpointMax(upper, breakpoints);
  if (min && max) {
    return '\n      @media (min-width: ' + min + ') and (max-width: ' + max + ') {\n        ' + content + '\n      }\n    ';
  } else if (min) {
    return '\n      @media (min-width: ' + min + ') {\n        ' + content + '\n      }\n    ';
  } else if (max) {
    return '\n      @media (max-width: ' + max + ') {\n        ' + content + '\n      }\n    ';
  }
  return '\n    ' + content + '\n  ';
}
function mediaBreakpointOnly(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$6['$grid-breakpoints'];
  var content = arguments[2];
  return mediaBreakpointBetween(name, name, breakpoints, content);
}
var breakpoints = {
  defaultProps: defaultProps$6,
  up: mediaBreakpointUp,
  down: mediaBreakpointDown,
  between: mediaBreakpointBetween,
  only: mediaBreakpointOnly
};

var process = { argv: [], env: {} };

function assertAscending(map, mapName) {
  var prevKey = void 0;
  var prevNum = void 0;
  var asserted = true;
  Object.keys(map).forEach(function (key) {
    var num = map[key];
    if (prevNum == null) {
    } else if (!comparable(index$1.rmUnit(prevNum), index$1.rmUnit(num))) {
      if (process.env.NODE !== 'test') {
        console.warn('Potentially invalid value for ' + mapName + ': This map must be in ascending order, but key \'' + key + '\' has value ' + num + ' whose unit makes it incomparable to ' + prevNum + ', the value of the previous key \'' + prevKey + '\' !');
      }
      asserted = false;
    } else if (index$1.rmUnit(prevNum) >= index$1.rmUnit(num)) {
      if (process.env.NODE !== 'test') {
        console.warn('Invalid value for ' + mapName + ': This map must be in ascending order, but key \'' + key + '\' has value ' + num + ' which isn\'t greater than ' + prevNum + ', the value of the previous key \'' + prevKey + '\' !');
      }
      asserted = false;
    }
    prevKey = key;
    prevNum = num;
  });
  return asserted;
}
function assertStartAtZero(map) {
  var values = Object.keys(map).map(function (key) {
    return map[key];
  });
  var firstValue = index$1.rmUnit(values[0]);
  var asserted = true;
  if (firstValue !== 0) {
    if (process.env.NODE !== 'test') {
      console.warn('First breakpoint in $grid-breakpoints must start at 0, but starts at ' + firstValue + '.');
    }
    asserted = false;
  }
  return asserted;
}
function comparable(a, b) {
  return !isNaN(a + b);
}

function allowFalseValue(userValue, defaultValue) {
  return userValue === false ? userValue : userValue || defaultValue;
}

var detectUnit = index$1.detectUnit;
var rmUnit = index$1.rmUnit;
var UNIT = index$1.UNIT;
function makeOriginal() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';
  v['$red'] = u['$red'] || '#d9534f';
  v['$orange'] = u['$orange'] || '#f0ad4e';
  v['$yellow'] = u['$yellow'] || '#ffd500';
  v['$green'] = u['$green'] || '#5cb85c';
  v['$blue'] = u['$blue'] || '#0275d8';
  v['$teal'] = u['$teal'] || '#5bc0de';
  v['$pink'] = u['$pink'] || '#ff5b77';
  v['$purple'] = u['$purple'] || '#613d7c';
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$gray'] = u['$gray'] || '#464a4c';
  v['$gray-light'] = u['$gray-light'] || '#636c72';
  v['$gray-lighter'] = u['$gray-lighter'] || '#eceeef';
  v['$gray-lightest'] = u['$gray-lightest'] || '#f7f7f9';
  v['$brand-primary'] = u['$brand-primary'] || v['$blue'];
  v['$brand-success'] = u['$brand-success'] || v['$green'];
  v['$brand-info'] = u['$brand-info'] || v['$teal'];
  v['$brand-warning'] = u['$brand-warning'] || v['$orange'];
  v['$brand-danger'] = u['$brand-danger'] || v['$red'];
  v['$brand-inverse'] = u['$brand-inverse'] || v['$gray-dark'];
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$enable-shadows'] = allowFalseValue(u['$enable-shadows'], false);
  v['$enable-gradients'] = allowFalseValue(u['$enable-gradients'], false);
  v['$enable-transitions'] = allowFalseValue(u['$enable-transitions'], true);
  v['$enable-hover-media-query'] = allowFalseValue(u['$enable-hover-media-query'], false);
  v['$enable-grid-classes'] = allowFalseValue(u['$enable-grid-classes'], true);
  v['$enable-print-styles'] = allowFalseValue(u['$enable-print-styles'], true);
  v['$spacer'] = u['$spacer'] || '1rem';
  v['$spacer-halved'] = u['$spacer-halved'] || rmUnit(v['$spacer'], UNIT.REM) / 2 + UNIT.REM;
  v['$spacer-x'] = u['$spacer-x'] || v['$spacer'];
  v['$spacer-y'] = u['$spacer-y'] || v['$spacer'];
  var detectedUnit = detectUnit(v['$spacer']);
  v['$spacers'] = u['$spacers'] || {
    0: {
      x: 0,
      y: 0
    },
    1: {
      x: rmUnit(v['$spacer-x']) * 0.25 + detectedUnit,
      y: rmUnit(v['$spacer-y']) * 0.25 + detectedUnit
    },
    2: {
      x: rmUnit(v['$spacer-x']) * 0.5 + detectedUnit,
      y: rmUnit(v['$spacer-y']) * 0.5 + detectedUnit
    },
    3: {
      x: v['$spacer-x'],
      y: v['$spacer-y']
    },
    4: {
      x: rmUnit(v['$spacer-x']) * 1.5 + detectedUnit,
      y: rmUnit(v['$spacer-y']) * 1.5 + detectedUnit
    },
    5: {
      x: rmUnit(v['$spacer-x']) * 3 + detectedUnit,
      y: rmUnit(v['$spacer-y']) * 3 + detectedUnit
    }
  };
  v['$border-width'] = u['$border-width'] || '1px';
  v['$sizes'] = u['$sizes'] || {
    25: '25%',
    50: '50%',
    75: '75%',
    100: '100%'
  };
  v['$body-bg'] = u['$body-bg'] || v['$white'];
  v['$body-color'] = u['$body-color'] || v['$gray-dark'];
  v['$link-color'] = u['$link-color'] || v['$brand-primary'];
  v['$link-decoration'] = u['$link-decoration'] || 'none';
  v['$link-hover-color'] = u['$link-hover-color'] || color(v['$link-color']).darken(0.35).toString();
  v['$link-hover-decoration'] = u['$link-hover-decoration'] || 'underline';
  v['$grid-breakpoints'] = u['$grid-breakpoints'] || {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  };
  assertAscending(v['$grid-breakpoints'], '$grid-breakpoints');
  assertStartAtZero(v['$grid-breakpoints']);
  v['$container-max-widths'] = u['$container-max-widths'] || {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px'
  };
  assertAscending(v['$container-max-widths'], '$container-max-widths');
  v['$grid-columns'] = u['$grid-columns'] || '12';
  v['$grid-gutter-width-base'] = u['$grid-gutter-width-base'] || '30px';
  v['$grid-gutter-widths'] = u['$grid-gutter-widths'] || {
    xs: v['$grid-gutter-width-base'],
    sm: v['$grid-gutter-width-base'],
    md: v['$grid-gutter-width-base'],
    lg: v['$grid-gutter-width-base'],
    xl: v['$grid-gutter-width-base']
  };
  v['$font-family-sans-serif'] = u['$font-family-sans-serif'] || '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
  v['$font-family-monospace'] = u['$font-family-monospace'] || 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
  v['$font-family-base'] = u['$font-family-base'] || v['$font-family-sans-serif'];
  v['$font-size-base'] = u['$font-size-base'] || '1rem';
  v['$font-size-lg'] = u['$font-size-lg'] || '1.25rem';
  v['$font-size-sm'] = u['$font-size-sm'] || '.875rem';
  v['$font-size-xs'] = u['$font-size-xs'] || '.75rem';
  v['$font-weight-normal'] = u['$font-weight-normal'] || 'normal';
  v['$font-weight-bold'] = u['$font-weight-bold'] || 'bold';
  v['$font-weight-base'] = u['$font-weight-base'] || v['$font-weight-normal'];
  v['$line-height-base'] = u['$line-height-base'] || '1.5';
  v['$font-size-h1'] = '2.5rem';
  v['$font-size-h2'] = '2rem';
  v['$font-size-h3'] = '1.75rem';
  v['$font-size-h4'] = '1.5rem';
  v['$font-size-h5'] = '1.25rem';
  v['$font-size-h6'] = '1rem';
  v['$headings-margin-bottom'] = u['$headings-margin-bottom'] || rmUnit(v['$spacer'], UNIT.REM) / 2 + UNIT.REM;
  v['$headings-font-family'] = u['$headings-font-family'] || 'inherit';
  v['$headings-font-weight'] = u['$headings-font-weight'] || '500';
  v['$headings-line-height'] = u['$headings-line-height'] || '1.1';
  v['$headings-color'] = u['$headings-color'] || 'inherit';
  v['$display1-size'] = '6rem';
  v['$display2-size'] = '5.5rem';
  v['$display3-size'] = '4.5rem';
  v['$display4-size'] = '3.5rem';
  v['$display1-weight'] = '300';
  v['$display2-weight'] = '300';
  v['$display3-weight'] = '300';
  v['$display4-weight'] = '300';
  v['$display-line-height'] = u['$display-line-height'] || v['$headings-line-height'];
  v['$lead-font-size'] = u['$lead-font-size'] || '1.25rem';
  v['$lead-font-weight'] = u['$lead-font-weight'] || '300';
  v['$small-font-size'] = u['$small-font-size'] || '80%';
  v['$text-muted'] = u['$text-muted'] || v['$gray-light'];
  v['$blockquote-small-color'] = u['$blockquote-small-color'] || v['$gray-light'];
  v['$blockquote-font-size'] = u['$blockquote-font-size'] || rmUnit(v['$font-size-base'], UNIT.REM) * 1.25 + UNIT.REM;
  v['$blockquote-border-color'] = u['$blockquote-border-color'] || v['$gray-lighter'];
  v['$blockquote-border-width'] = u['$blockquote-border-width'] || '.25rem';
  v['$hr-border-color'] = u['$hr-border-color'] || color(v['$black']).alpha(0.1).toString();
  v['$hr-border-width'] = u['$hr-border-width'] || v['$border-width'];
  v['$mark-padding'] = u['$mark-padding'] || '.2em';
  v['$dt-font-weight'] = u['$dt-font-weight'] || v['$font-weight-bold'];
  v['$kbd-box-shadow'] = u['$kbd-box-shadow'] || 'inset 0 -.1rem 0 ' + color(v['$black']).alpha(0.25).toString();
  v['$nested-kbd-font-weight'] = u['$nested-kbd-font-weight'] || v['$font-weight-bold'];
  v['$list-inline-padding'] = u['$list-inline-padding'] || '5px';
  v['$line-height-lg'] = u['$line-height-lg'] || '1.3';
  v['$line-height-sm'] = u['$line-height-sm'] || '1.5';
  v['$border-radius'] = u['$border-radius'] || '.25rem';
  v['$border-radius-lg'] = u['$border-radius-lg'] || '.3rem';
  v['$border-radius-sm'] = u['$border-radius-sm'] || '.2rem';
  v['$component-active-color'] = u['$component-active-color'] || v['$white'];
  v['$component-active-bg'] = u['$component-active-bg'] || v['$brand-primary'];
  v['$caret-width'] = u['$caret-width'] || '.3em';
  v['$transition-base'] = u['$transition-base'] || 'all .2s ease-in-out';
  v['$transition-fade'] = u['$transition-fade'] || 'opacity .15s linear';
  v['$transition-collapse'] = u['$transition-collapse'] || 'height .35s ease';
  v['$table-cell-padding'] = u['$table-cell-padding'] || '.75rem';
  v['$table-sm-cell-padding'] = u['$table-sm-cell-padding'] || '.3rem';
  v['$table-bg'] = u['$table-bg'] || 'transparent';
  v['$table-inverse-bg'] = u['$table-inverse-bg'] || v['$gray-dark'];
  v['$table-inverse-bg-accent'] = u['$table-inverse-bg-accent'] || color(v['$white']).alpha(0.05).toString();
  v['$table-inverse-bg-hover'] = u['$table-inverse-bg-hover'] || color(v['$white']).alpha(0.075).toString();
  v['$table-inverse-color'] = u['$table-inverse-color'] || v['$body-bg'];
  v['$table-inverse-border'] = u['$table-inverse-border'] || color(v['$gray-dark']).lighten(0.075).toString();
  v['$table-bg-accent'] = u['$table-bg-accent'] || color(v['$black']).alpha(0.05).toString();
  v['$table-bg-hover'] = u['$table-bg-hover'] || color(v['$black']).alpha(0.075).toString();
  v['$table-bg-active'] = u['$table-bg-active'] || v['$table-bg-hover'];
  v['$table-head-bg'] = u['$table-head-bg'] || v['$gray-lighter'];
  v['$table-head-color'] = u['$table-head-color'] || v['$gray'];
  v['$table-border-width'] = u['$table-border-width'] || v['$border-width'];
  v['$table-border-color'] = u['$table-border-color'] || v['$gray-lighter'];
  v['$btn-padding-x'] = u['$btn-padding-x'] || '1rem';
  v['$btn-padding-y'] = u['$btn-padding-y'] || '.5rem';
  v['$btn-line-height'] = u['$btn-line-height'] || '1.25';
  v['$btn-font-weight'] = u['$btn-font-weight'] || v['$font-weight-normal'];
  v['$btn-box-shadow'] = u['$btn-box-shadow'] || 'inset 0 1px 0 ' + color(v['$white']).alpha(0.15).toString() + ', 0 1px 1px ' + color(v['$black']).alpha(0.075).toString();
  v['$btn-focus-box-shadow'] = u['$btn-focus-box-shadow'] || '0 0 0 2px ' + color(v['$brand-primary']).alpha(0.25).toString();
  v['$btn-active-box-shadow'] = u['$btn-active-box-shadow'] || 'inset 0 3px 5px ' + color(v['$black']).alpha(0.125).toString();
  v['$btn-primary-color'] = u['$btn-primary-color'] || v['$white'];
  v['$btn-primary-bg'] = u['$btn-primary-bg'] || v['$brand-primary'];
  v['$btn-primary-border'] = u['$btn-primary-border'] || v['$btn-primary-bg'];
  v['$btn-secondary-color'] = u['$btn-secondary-color'] || v['$gray-dark'];
  v['$btn-secondary-bg'] = u['$btn-secondary-bg'] || v['$white'];
  v['$btn-secondary-border'] = u['$btn-secondary-border'] || '#ccc';
  v['$btn-info-color'] = u['$btn-info-color'] || v['$white'];
  v['$btn-info-bg'] = u['$btn-info-bg'] || v['$brand-info'];
  v['$btn-info-border'] = u['$btn-info-border'] || v['$btn-info-bg'];
  v['$btn-success-color'] = u['$btn-success-color'] || v['$white'];
  v['$btn-success-bg'] = u['$btn-success-bg'] || v['$brand-success'];
  v['$btn-success-border'] = u['$btn-success-border'] || v['$btn-success-bg'];
  v['$btn-warning-color'] = u['$btn-warning-color'] || v['$white'];
  v['$btn-warning-bg'] = u['$btn-warning-bg'] || v['$brand-warning'];
  v['$btn-warning-border'] = u['$btn-warning-border'] || v['$btn-warning-bg'];
  v['$btn-danger-color'] = u['$btn-danger-color'] || v['$white'];
  v['$btn-danger-bg'] = u['$btn-danger-bg'] || v['$brand-danger'];
  v['$btn-danger-border'] = u['$btn-danger-border'] || v['$btn-danger-bg'];
  v['$btn-link-disabled-color'] = u['$btn-link-disabled-color'] || v['$gray-light'];
  v['$btn-padding-x-sm'] = u['$btn-padding-x-sm'] || '.5rem';
  v['$btn-padding-y-sm'] = u['$btn-padding-y-sm'] || '.25rem';
  v['$btn-padding-x-lg'] = u['$btn-padding-x-lg'] || '1.5rem';
  v['$btn-padding-y-lg'] = u['$btn-padding-y-lg'] || '.75rem';
  v['$btn-block-spacing-y'] = u['$btn-block-spacing-y'] || '.5rem';
  v['$btn-border-radius'] = u['$btn-border-radius'] || v['$border-radius'];
  v['$btn-border-radius-lg'] = u['$btn-border-radius-lg'] || v['$border-radius-lg'];
  v['$btn-border-radius-sm'] = u['$btn-border-radius-sm'] || v['$border-radius-sm'];
  v['$btn-transition'] = u['$btn-transition'] || 'all .2s ease-in-out';
  v['$input-padding-x'] = u['$input-padding-x'] || '.75rem';
  v['$input-padding-y'] = u['$input-padding-y'] || '.5rem';
  v['$input-line-height'] = u['$input-line-height'] || '1.25';
  v['$input-bg'] = u['$input-bg'] || v['$white'];
  v['$input-bg-disabled'] = u['$input-bg-disabled'] || v['$gray-lighter'];
  v['$input-color'] = u['$input-color'] || v['$gray'];
  v['$input-border-color'] = u['$input-border-color'] || color(v['$black']).alpha(0.15).toString();
  v['$input-btn-border-width'] = u['$input-btn-border-width'] || v['$border-width'];
  v['$input-box-shadow'] = u['$input-box-shadow'] || 'inset 0 1px 1px ' + color(v['$black']).alpha(0.075).toString();
  v['$input-border-radius'] = u['$input-border-radius'] || v['$border-radius'];
  v['$input-border-radius-lg'] = u['$input-border-radius-lg'] || v['$border-radius-lg'];
  v['$input-border-radius-sm'] = u['$input-border-radius-sm'] || v['$border-radius-sm'];
  v['$input-bg-focus'] = u['$input-bg-focus'] || v['$input-bg'];
  v['$input-border-focus'] = u['$input-border-focus'] || color(v['$brand-primary']).lighten(0.25).toString();
  v['$input-box-shadow-focus'] = u['$input-box-shadow-focus'] || v['$input-box-shadow'] + ', 0 0 8px rgba(' + v['$input-border-focus'] + ',.6)';
  v['$input-color-focus'] = u['$input-color-focus'] || v['$input-color'];
  v['$input-color-placeholder'] = u['$input-color-placeholder'] || v['$gray-light'];
  v['$input-padding-x-sm'] = u['$input-padding-x-sm'] || '.5rem';
  v['$input-padding-y-sm'] = u['$input-padding-y-sm'] || '.25rem';
  v['$input-padding-x-lg'] = u['$input-padding-x-lg'] || '1.5rem';
  v['$input-padding-y-lg'] = u['$input-padding-y-lg'] || '.75rem';
  v['$input-height'] = u['$input-height'] || rmUnit(v['$font-size-base'], UNIT.REM) * v['$line-height-base'] + rmUnit(v['$input-padding-y'], UNIT.REM) * 2 + UNIT.REM;
  v['$input-height-sm'] = u['$input-height-sm'] || rmUnit(v['$font-size-sm'], UNIT.REM) * v['$line-height-sm'] + rmUnit(v['$input-padding-y-sm'], UNIT.REM) * 2 + UNIT.REM;
  v['$input-height-lg'] = u['$input-height-lg'] || rmUnit(v['$font-size-lg'], UNIT.REM) * v['$line-height-lg'] + rmUnit(v['$input-padding-y-lg'], UNIT.REM) * 2 + UNIT.REM;
  v['$input-transition'] = u['$input-transition'] || 'border-color ease-in-out .15s, box-shadow ease-in-out .15s';
  v['$form-text-margin-top'] = u['$form-text-margin-top'] || '.25rem';
  v['$form-feedback-margin-top'] = u['$form-feedback-margin-top'] || v['$form-text-margin-top'];
  v['$form-check-margin-bottom'] = u['$form-check-margin-bottom'] || '.5rem';
  v['$form-check-input-gutter'] = u['$form-check-input-gutter'] || '1.25rem';
  v['$form-check-input-margin-y'] = u['$form-check-input-margin-y'] || '.25rem';
  v['$form-check-input-margin-x'] = u['$form-check-input-margin-x'] || '.25rem';
  v['$form-check-inline-margin-x'] = u['$form-check-inline-margin-x'] || '.75rem';
  v['$form-group-margin-bottom'] = u['$form-group-margin-bottom'] || v['$spacer-y'];
  v['$input-group-addon-bg'] = u['$input-group-addon-bg'] || v['$gray-lighter'];
  v['$input-group-addon-border-color'] = u['$input-group-addon-border-color'] || v['$input-border-color'];
  v['$cursor-disabled'] = u['$cursor-disabled'] || 'not-allowed';
  v['$custom-control-gutter'] = u['$custom-control-gutter'] || '1.5rem';
  v['$custom-control-spacer-x'] = u['$custom-control-spacer-x'] || '1rem';
  v['$custom-control-spacer-y'] = u['$custom-control-spacer-y'] || '.25rem';
  v['$custom-control-indicator-size'] = u['$custom-control-indicator-size'] || '1rem';
  v['$custom-control-indicator-bg'] = u['$custom-control-indicator-bg'] || '#ddd';
  v['$custom-control-indicator-bg-size'] = u['$custom-control-indicator-bg-size'] || '50% 50%';
  v['$custom-control-indicator-box-shadow'] = u['$custom-control-indicator-box-shadow'] || 'inset 0 .25rem .25rem ' + color(v['$black']).alpha(0.1).toString();
  v['$custom-control-disabled-cursor'] = u['$custom-control-disabled-cursor'] || v['$cursor-disabled'];
  v['$custom-control-disabled-indicator-bg'] = u['$custom-control-disabled-indicator-bg'] || v['$gray-lighter'];
  v['$custom-control-disabled-description-color'] = u['$custom-control-disabled-description-color'] || v['$gray-light'];
  v['$custom-control-checked-indicator-color'] = u['$custom-control-checked-indicator-color'] || v['$white'];
  v['$custom-control-checked-indicator-bg'] = u['$custom-control-checked-indicator-bg'] || v['$brand-primary'];
  v['$custom-control-checked-indicator-box-shadow'] = u['$custom-control-checked-indicator-box-shadow'] || 'none';
  v['$custom-control-focus-indicator-box-shadow'] = u['$custom-control-focus-indicator-box-shadow'] || '0 0 0 1px ' + v['$body-bg'] + ', 0 0 0 3px ' + v['$brand-primary'];
  v['$custom-control-active-indicator-color'] = u['$custom-control-active-indicator-color'] || v['$white'];
  v['$custom-control-active-indicator-bg'] = u['$custom-control-active-indicator-bg'] || color(v['$brand-primary']).lighten(0.35).toString();
  v['$custom-control-active-indicator-box-shadow'] = u['$custom-control-active-indicator-box-shadow'] || 'none';
  v['$custom-checkbox-radius'] = u['$custom-checkbox-radius'] || v['$border-radius'];
  v['$custom-checkbox-checked-icon'] = u['$custom-checkbox-checked-icon'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="' + v['$custom-control-checked-indicator-color'] + '" d="M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z"/%3E%3C/svg%3E\')';
  v['$custom-checkbox-indeterminate-bg'] = u['$custom-checkbox-indeterminate-bg'] || v['$brand-primary'];
  v['$custom-checkbox-indeterminate-indicator-color'] = u['$custom-checkbox-indeterminate-indicator-color'] || v['$custom-control-checked-indicator-color'];
  v['$custom-checkbox-indeterminate-icon'] = u['$custom-checkbox-indeterminate-icon'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 4"%3E%3Cpath stroke="' + v['$custom-checkbox-indeterminate-indicator-color'] + '" d="M0 2h4"/%3E%3C/svg%3E\')';
  v['$custom-checkbox-indeterminate-box-shadow'] = u['$custom-checkbox-indeterminate-box-shadow'] || 'none';
  v['$custom-radio-radius'] = u['$custom-radio-radius'] || '50%';
  v['$custom-radio-checked-icon'] = u['$custom-radio-checked-icon'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 8 8"%3E%3Ccircle r="3" fill="' + v['$custom-control-checked-indicator-color'] + '"/%3E%3C/svg%3E\')';
  v['$custom-select-padding-x'] = u['$custom-select-padding-x'] || '.75rem ';
  v['$custom-select-padding-y'] = u['$custom-select-padding-y'] || '.375rem';
  v['$custom-select-indicator-padding'] = u['$custom-select-indicator-padding'] || '1rem';
  v['$custom-select-line-height'] = u['$custom-select-line-height'] || v['$input-line-height'];
  v['$custom-select-color'] = u['$custom-select-color'] || v['$input-color'];
  v['$custom-select-disabled-color'] = u['$custom-select-disabled-color'] || v['$gray-light'];
  v['$custom-select-bg'] = u['$custom-select-bg'] || v['$white'];
  v['$custom-select-disabled-bg'] = u['$custom-select-disabled-bg'] || v['$gray-lighter'];
  v['$custom-select-bg-size'] = u['$custom-select-bg-size'] || '8px 10px';
  v['$custom-select-indicator-color'] = u['$custom-select-indicator-color'] || '#333';
  v['$custom-select-indicator'] = u['$custom-select-indicator'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"%3E%3Cpath fill="' + v['$custom-select-indicator-color'] + '" d="M2 0L0 2h4zm0 5L0 3h4z"/%3E%3C/svg%3E\')';
  v['$custom-select-border-width'] = u['$custom-select-border-width'] || v['$input-btn-border-width'];
  v['$custom-select-border-color'] = u['$custom-select-border-color'] || v['$input-border-color'];
  v['$custom-select-border-radius'] = u['$custom-select-border-radius'] || v['$border-radius'];
  v['$custom-select-focus-border-color'] = u['$custom-select-focus-border-color'] || color(v['$brand-primary']).lighten(0.25).toString();
  v['$custom-select-focus-box-shadow'] = u['$custom-select-focus-box-shadow'] || 'inset 0 1px 2px ' + color(v['$black']).alpha(0.75).toString() + ', 0 0 5px rgba(' + v['$custom-select-focus-border-color'] + ', .5)';
  v['$custom-select-sm-font-size'] = u['$custom-select-sm-font-size'] || '75%';
  v['$custom-file-height'] = u['$custom-file-height'] || '2.5rem';
  v['$custom-file-width'] = u['$custom-file-width'] || '14rem';
  v['$custom-file-focus-box-shadow'] = u['$custom-file-focus-box-shadow'] || '0 0 0 .075rem ' + v['$white'] + ', 0 0 0 .2rem ' + v['$brand-primary'];
  v['$custom-file-padding-x'] = u['$custom-file-padding-x'] || '.5rem';
  v['$custom-file-padding-y'] = u['$custom-file-padding-y'] || '1rem';
  v['$custom-file-line-height'] = u['$custom-file-line-height'] || '1.5';
  v['$custom-file-color'] = u['$custom-file-color'] || v['$gray'];
  v['$custom-file-bg'] = u['$custom-file-bg'] || v['$white'];
  v['$custom-file-border-width'] = u['$custom-file-border-width'] || v['$border-width'];
  v['$custom-file-border-color'] = u['$custom-file-border-color'] || v['$input-border-color'];
  v['$custom-file-border-radius'] = u['$custom-file-border-radius'] || v['$border-radius'];
  v['$custom-file-box-shadow'] = u['$custom-file-box-shadow'] || 'inset 0 .2rem .4rem ' + color(v['$black']).alpha(0.05).toString();
  v['$custom-file-button-color'] = u['$custom-file-button-color'] || v['$custom-file-color'];
  v['$custom-file-button-bg'] = u['$custom-file-button-bg'] || v['$gray-lighter'];
  v['$custom-file-text'] = u['$custom-file-text'] || {
    placeholder: {
      en: 'Choose file...'
    },
    'button-label': {
      en: 'Browse'
    }
  };
  v['$form-icon-success-color'] = u['$form-icon-success-color'] || v['$brand-success'];
  v['$form-icon-success'] = u['$form-icon-success'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="' + v['$form-icon-success-color'] + '" d="M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z"/%3E%3C/svg%3E\')';
  v['$form-icon-warning-color'] = u['$form-icon-warning-color'] || v['$brand-warning'];
  v['$form-icon-warning'] = u['$form-icon-warning'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="' + v['$form-icon-warning-color'] + '" d="M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z"/%3E%3C/svg%3E\')';
  v['$form-icon-danger-color'] = u['$form-icon-danger-color'] || v['$brand-danger'];
  v['$form-icon-danger'] = u['$form-icon-danger'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="' + v['$form-icon-danger-color'] + '" viewBox="-2 -2 7 7"%3E%3Cpath stroke="%23d9534f" d="M0 0l3 3m0-3L0 3"/%3E%3Ccircle r=".5"/%3E%3Ccircle cx="3" r=".5"/%3E%3Ccircle cy="3" r=".5"/%3E%3Ccircle cx="3" cy="3" r=".5"/%3E%3C/svg%3E\')';
  v['$dropdown-min-width'] = u['$dropdown-min-width'] || '10rem';
  v['$dropdown-padding-y'] = u['$dropdown-padding-y'] || '.5rem';
  v['$dropdown-margin-top'] = u['$dropdown-margin-top'] || '.125rem';
  v['$dropdown-bg'] = u['$dropdown-bg'] || v['$white'];
  v['$dropdown-border-color'] = u['$dropdown-border-color'] || color(v['$black']).alpha(0.15).toString();
  v['$dropdown-border-width'] = u['$dropdown-border-width'] || v['$border-width'];
  v['$dropdown-divider-bg'] = u['$dropdown-divider-bg'] || v['$gray-lighter'];
  v['$dropdown-box-shadow'] = u['$dropdown-box-shadow'] || '0 .5rem 1rem rgba(' + v['$black'] + ',.175)';
  v['$dropdown-link-color'] = u['$dropdown-link-color'] || v['$gray-dark'];
  v['$dropdown-link-hover-color'] = u['$dropdown-link-hover-color'] || color(v['$gray-dark']).darken(0.05).toString();
  v['$dropdown-link-hover-bg'] = u['$dropdown-link-hover-bg'] || v['$gray-lightest'];
  v['$dropdown-link-active-color'] = u['$dropdown-link-active-color'] || v['$component-active-color'];
  v['$dropdown-link-active-bg'] = u['$dropdown-link-active-bg'] || v['$component-active-bg'];
  v['$dropdown-link-disabled-color'] = u['$dropdown-link-disabled-color'] || v['$gray-light'];
  v['$dropdown-item-padding-x'] = u['$dropdown-item-padding-x'] || '1.5rem';
  v['$dropdown-header-color'] = u['$dropdown-header-color'] || v['$gray-light'];
  v['$zindex-dropdown-backdrop'] = u['$zindex-dropdown-backdrop'] || '990';
  v['$zindex-dropdown'] = u['$zindex-dropdown'] || '1000';
  v['$zindex-fixed'] = u['$zindex-fixed'] || '1030';
  v['$zindex-sticky'] = u['$zindex-sticky'] || '1030';
  v['$zindex-modal-backdrop'] = u['$zindex-modal-backdrop'] || '1040';
  v['$zindex-modal'] = u['$zindex-modal'] || '1050';
  v['$zindex-popover'] = u['$zindex-popover'] || '1060';
  v['$zindex-tooltip'] = u['$zindex-tooltip'] || '1070';
  v['$navbar-padding-x'] = u['$navbar-padding-x'] || v['$spacer'];
  v['$navbar-padding-y'] = u['$navbar-padding-y'] || v['$spacer-halved'];
  v['$navbar-toggler-padding-x'] = u['$navbar-toggler-padding-x'] || '.75rem';
  v['$navbar-toggler-padding-y'] = u['$navbar-toggler-padding-y'] || '.25rem';
  v['$navbar-toggler-font-size'] = u['$navbar-toggler-font-size'] || v['$font-size-lg'];
  v['$navbar-toggler-border-radius'] = u['$navbar-toggler-border-radius'] || v['$btn-border-radius'];
  v['$navbar-inverse-color'] = u['$navbar-inverse-color'] || color(v['$white']).alpha(0.5).toString();
  v['$navbar-inverse-hover-color'] = u['$navbar-inverse-hover-color'] || color(v['$white']).alpha(0.75).toString();
  v['$navbar-inverse-active-color'] = u['$navbar-inverse-active-color'] || color(v['$white']).alpha(1).toString();
  v['$navbar-inverse-disabled-color'] = u['$navbar-inverse-disabled-color'] || color(v['$white']).alpha(0.25).toString();
  v['$navbar-inverse-toggler-bg'] = u['$navbar-inverse-toggler-bg'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="' + v['$navbar-inverse-color'] + '" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')';
  v['$navbar-inverse-toggler-border'] = u['$navbar-inverse-toggler-border'] || color(v['$white']).alpha(0.1).toString();
  v['$navbar-light-color'] = u['$navbar-light-color'] || color(v['$black']).alpha(0.5).toString();
  v['$navbar-light-hover-color'] = u['$navbar-light-hover-color'] || color(v['$black']).alpha(0.7).toString();
  v['$navbar-light-active-color'] = u['$navbar-light-active-color'] || color(v['$black']).alpha(0.9).toString();
  v['$navbar-light-disabled-color'] = u['$navbar-light-disabled-color'] || color(v['$black']).alpha(0.3).toString();
  v['$navbar-light-toggler-bg'] = u['$navbar-light-toggler-bg'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="' + v['$navbar-light-color'] + '" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')';
  v['$navbar-light-toggler-border'] = u['$navbar-light-toggler-border'] || color(v['$black']).alpha(0.1).toString();
  v['$nav-link-padding'] = u['$nav-link-padding'] || '.5em 1em';
  v['$nav-disabled-link-color'] = u['$nav-disabled-link-color'] || v['$gray-light'];
  v['$nav-tabs-border-color'] = u['$nav-tabs-border-color'] || '#ddd';
  v['$nav-tabs-border-width'] = u['$nav-tabs-border-width'] || v['$border-width'];
  v['$nav-tabs-border-radius'] = u['$nav-tabs-border-radius'] || v['$border-radius'];
  v['$nav-tabs-link-hover-border-color'] = u['$nav-tabs-link-hover-border-color'] || v['$gray-lighter'];
  v['$nav-tabs-active-link-hover-color'] = u['$nav-tabs-active-link-hover-color'] || v['$gray'];
  v['$nav-tabs-active-link-hover-bg'] = u['$nav-tabs-active-link-hover-bg'] || v['$body-bg'];
  v['$nav-tabs-active-link-hover-border-color'] = u['$nav-tabs-active-link-hover-border-color'] || '#ddd';
  v['$nav-pills-border-radius'] = u['$nav-pills-border-radius'] || v['$border-radius'];
  v['$nav-pills-active-link-color'] = u['$nav-pills-active-link-color'] || v['$component-active-color'];
  v['$nav-pills-active-link-bg'] = u['$nav-pills-active-link-bg'] || v['$component-active-bg'];
  v['$pagination-padding-x'] = u['$pagination-padding-x'] || '.75rem';
  v['$pagination-padding-y'] = u['$pagination-padding-y'] || '.5rem';
  v['$pagination-padding-x-sm'] = u['$pagination-padding-x-sm'] || '.5rem';
  v['$pagination-padding-y-sm'] = u['$pagination-padding-y-sm'] || '.25rem';
  v['$pagination-padding-x-lg'] = u['$pagination-padding-x-lg'] || '1.5rem';
  v['$pagination-padding-y-lg'] = u['$pagination-padding-y-lg'] || '.75rem';
  v['$pagination-line-height'] = u['$pagination-line-height'] || '1.25';
  v['$pagination-color'] = u['$pagination-color'] || v['$link-color'];
  v['$pagination-bg'] = u['$pagination-bg'] || v['$white'];
  v['$pagination-border-width'] = u['$pagination-border-width'] || v['$border-width'];
  v['$pagination-border-color'] = u['$pagination-border-color'] || '#ddd';
  v['$pagination-hover-color'] = u['$pagination-hover-color'] || v['$link-hover-color'];
  v['$pagination-hover-bg'] = u['$pagination-hover-bg'] || v['$gray-lighter'];
  v['$pagination-hover-border'] = u['$pagination-hover-border'] || '#ddd';
  v['$pagination-active-color'] = u['$pagination-active-color'] || v['$white'];
  v['$pagination-active-bg'] = u['$pagination-active-bg'] || v['$brand-primary'];
  v['$pagination-active-border'] = u['$pagination-active-border'] || v['$brand-primary'];
  v['$pagination-disabled-color'] = u['$pagination-disabled-color'] || v['$gray-light'];
  v['$pagination-disabled-bg'] = u['$pagination-disabled-bg'] || v['$white'];
  v['$pagination-disabled-border'] = u['$pagination-disabled-border'] || '#ddd';
  v['$jumbotron-padding'] = u['$jumbotron-padding'] || '2rem';
  v['$jumbotron-bg'] = u['$jumbotron-bg'] || v['$gray-lighter'];
  v['$state-success-text'] = u['$state-success-text'] || '#3c763d';
  v['$state-success-bg'] = u['$state-success-bg'] || '#dff0d8';
  v['$state-success-border'] = u['$state-success-border'] || color(v['$state-success-bg']).darken(0.05).toString();
  v['$state-info-text'] = u['$state-info-text'] || '#31708f';
  v['$state-info-bg'] = u['$state-info-bg'] || '#d9edf7';
  v['$state-info-border'] = u['$state-info-border'] || color(v['$state-info-bg']).darken(0.07).toString();
  v['$state-warning-text'] = u['$state-warning-text'] || '#8a6d3b';
  v['$state-warning-bg'] = u['$state-warning-bg'] || '#fcf8e3';
  v['$mark-bg'] = u['$mark-bg'] || v['$state-warning-bg'];
  v['$state-warning-border'] = u['$state-warning-border'] || color(v['$state-warning-bg']).darken(0.05).toString();
  v['$state-danger-text'] = u['$state-danger-text'] || '#a94442';
  v['$state-danger-bg'] = u['$state-danger-bg'] || '#f2dede';
  v['$state-danger-border'] = u['$state-danger-border'] || color(v['$state-danger-bg']).darken(0.05).toString();
  v['$card-spacer-x'] = u['$card-spacer-x'] || '1.25rem';
  v['$card-spacer-y'] = u['$card-spacer-y'] || '.75rem';
  v['$card-border-width'] = u['$card-border-width'] || '1px';
  v['$card-border-radius'] = u['$card-border-radius'] || v['$border-radius'];
  v['$card-border-color'] = u['$card-border-color'] || color(v['$black']).alpha(0.125).toString();
  v['$card-border-radius-inner'] = u['$card-border-radius-inner'] || 'calc(' + v['$card-border-radius'] + ' - ' + v['$card-border-width'] + ')';
  v['$card-cap-bg'] = u['$card-cap-bg'] || v['$gray-lightest'];
  v['$card-bg'] = u['$card-bg'] || v['$white'];
  v['$card-link-hover-color'] = u['$card-link-hover-color'] || v['$white'];
  v['$card-img-overlay-padding'] = u['$card-img-overlay-padding'] || '1.25rem';
  detectedUnit = detectUnit(v['$grid-gutter-width-base']);
  v['$card-deck-margin'] = u['$card-deck-margin'] || rmUnit(v['$grid-gutter-width-base'], detectedUnit) / 2 + detectedUnit;
  v['$card-columns-count'] = u['$card-columns-count'] || '3';
  v['$card-columns-gap'] = u['$card-columns-gap'] || '1.25rem';
  v['$card-columns-margin'] = u['$card-columns-margin'] || v['$card-spacer-y'];
  v['$tooltip-max-width'] = u['$tooltip-max-width'] || '200px';
  v['$tooltip-color'] = u['$tooltip-color'] || v['$white'];
  v['$tooltip-bg'] = u['$tooltip-bg'] || v['$black'];
  v['$tooltip-opacity'] = u['$tooltip-opacity'] || '.9';
  v['$tooltip-padding-y'] = u['$tooltip-padding-y'] || '3px';
  v['$tooltip-padding-x'] = u['$tooltip-padding-x'] || '8px';
  v['$tooltip-margin'] = u['$tooltip-margin'] || '3px';
  v['$tooltip-arrow-width'] = u['$tooltip-arrow-width'] || '5px';
  v['$tooltip-arrow-color'] = u['$tooltip-arrow-color'] || v['$tooltip-bg'];
  v['$popover-inner-padding'] = u['$popover-inner-padding'] || '1px';
  v['$popover-bg'] = u['$popover-bg'] || v['$white'];
  v['$popover-max-width'] = u['$popover-max-width'] || '276px';
  v['$popover-border-width'] = u['$popover-border-width'] || v['$border-width'];
  v['$popover-border-color'] = u['$popover-border-color'] || color(v['$black']).alpha(0.2).toString();
  v['$popover-box-shadow'] = u['$popover-box-shadow'] || '0 5px 10px ' + color(v['$black']).alpha(0.2).toString();
  v['$popover-title-bg'] = u['$popover-title-bg'] || color(v['$popover-bg']).darken(0.03).toString();
  v['$popover-title-padding-x'] = u['$popover-title-padding-x'] || '14px';
  v['$popover-title-padding-y'] = u['$popover-title-padding-y'] || '8px';
  v['$popover-content-padding-x'] = u['$popover-content-padding-x'] || '14px';
  v['$popover-content-padding-y'] = u['$popover-content-padding-y'] || '9px';
  v['$popover-arrow-width'] = u['$popover-arrow-width'] || '10px';
  v['$popover-arrow-color'] = u['$popover-arrow-color'] || v['$popover-bg'];
  v['$popover-arrow-outer-width'] = u['$popover-arrow-outer-width'] || rmUnit(v['$popover-arrow-width'], UNIT.PX) + 1 + UNIT.PX;
  v['$popover-arrow-outer-color'] = u['$popover-arrow-outer-color'] || color(v['$popover-border-color']).fade(0.5).toString();
  v['$badge-default-bg'] = u['$badge-default-bg'] || v['$gray-light'];
  v['$badge-primary-bg'] = u['$badge-primary-bg'] || v['$brand-primary'];
  v['$badge-success-bg'] = u['$badge-success-bg'] || v['$brand-success'];
  v['$badge-info-bg'] = u['$badge-info-bg'] || v['$brand-info'];
  v['$badge-warning-bg'] = u['$badge-warning-bg'] || v['$brand-warning'];
  v['$badge-danger-bg'] = u['$badge-danger-bg'] || v['$brand-danger'];
  v['$badge-color'] = u['$badge-color'] || v['$white'];
  v['$badge-link-hover-color'] = u['$badge-link-hover-color'] || v['$white'];
  v['$badge-font-size'] = u['$badge-font-size'] || '75%';
  v['$badge-font-weight'] = u['$badge-font-weight'] || v['$font-weight-bold'];
  v['$badge-padding-x'] = u['$badge-padding-x'] || '.4em';
  v['$badge-padding-y'] = u['$badge-padding-y'] || '.25em';
  v['$badge-pill-padding-x'] = u['$badge-pill-padding-x'] || '.6em';
  v['$badge-pill-border-radius'] = u['$badge-pill-border-radius'] || '10rem';
  v['$modal-inner-padding'] = u['$modal-inner-padding'] || '15px';
  v['$modal-dialog-margin'] = u['$modal-dialog-margin'] || '10px';
  v['$modal-dialog-sm-up-margin-y'] = u['$modal-dialog-sm-up-margin-y'] || '30px';
  v['$modal-title-line-height'] = u['$modal-title-line-height'] || v['$line-height-base'];
  v['$modal-content-bg'] = u['$modal-content-bg'] || v['$white'];
  v['$modal-content-border-color'] = u['$modal-content-border-color'] || color(v['$black']).alpha(0.2).toString();
  v['$modal-content-border-width'] = u['$modal-content-border-width'] || v['$border-width'];
  v['$modal-content-xs-box-shadow'] = u['$modal-content-xs-box-shadow'] || '0 3px 9px ' + color(v['$black']).alpha(0.5).toString();
  v['$modal-content-sm-up-box-shadow'] = u['$modal-content-sm-up-box-shadow'] || '0 5px 15px ' + color(v['$black']).alpha(0.5).toString();
  v['$modal-backdrop-bg'] = u['$modal-backdrop-bg'] || v['$black'];
  v['$modal-backdrop-opacity'] = u['$modal-backdrop-opacity'] || '.5';
  v['$modal-header-border-color'] = u['$modal-header-border-color'] || v['$gray-lighter'];
  v['$modal-footer-border-color'] = u['$modal-footer-border-color'] || v['$modal-header-border-color'];
  v['$modal-header-border-width'] = u['$modal-header-border-width'] || v['$modal-content-border-width'];
  v['$modal-footer-border-width'] = u['$modal-footer-border-width'] || v['$modal-header-border-width'];
  v['$modal-header-padding'] = u['$modal-header-padding'] || '15px';
  v['$modal-lg'] = u['$modal-lg'] || '800px';
  v['$modal-md'] = u['$modal-md'] || '500px';
  v['$modal-sm'] = u['$modal-sm'] || '300px';
  v['$modal-transition'] = u['$modal-transition'] || 'transform .3s ease-out';
  v['$alert-padding-x'] = u['$alert-padding-x'] || '1.25rem';
  v['$alert-padding-y'] = u['$alert-padding-y'] || '.75rem';
  v['$alert-margin-bottom'] = u['$alert-margin-bottom'] || v['$spacer-y'];
  v['$alert-border-radius'] = u['$alert-border-radius'] || v['$border-radius'];
  v['$alert-link-font-weight'] = u['$alert-link-font-weight'] || v['$font-weight-bold'];
  v['$alert-border-width'] = u['$alert-border-width'] || v['$border-width'];
  v['$alert-success-bg'] = u['$alert-success-bg'] || v['$state-success-bg'];
  v['$alert-success-text'] = u['$alert-success-text'] || v['$state-success-text'];
  v['$alert-success-border'] = u['$alert-success-border'] || v['$state-success-border'];
  v['$alert-info-bg'] = u['$alert-info-bg'] || v['$state-info-bg'];
  v['$alert-info-text'] = u['$alert-info-text'] || v['$state-info-text'];
  v['$alert-info-border'] = u['$alert-info-border'] || v['$state-info-border'];
  v['$alert-warning-bg'] = u['$alert-warning-bg'] || v['$state-warning-bg'];
  v['$alert-warning-text'] = u['$alert-warning-text'] || v['$state-warning-text'];
  v['$alert-warning-border'] = u['$alert-warning-border'] || v['$state-warning-border'];
  v['$alert-danger-bg'] = u['$alert-danger-bg'] || v['$state-danger-bg'];
  v['$alert-danger-text'] = u['$alert-danger-text'] || v['$state-danger-text'];
  v['$alert-danger-border'] = u['$alert-danger-border'] || v['$state-danger-border'];
  v['$progress-height'] = u['$progress-height'] || '1rem';
  v['$progress-font-size'] = u['$progress-font-size'] || '.75rem';
  v['$progress-bg'] = u['$progress-bg'] || v['$gray-lighter'];
  v['$progress-border-radius'] = u['$progress-border-radius'] || v['$border-radius'];
  v['$progress-box-shadow'] = u['$progress-box-shadow'] || 'inset 0 .1rem .1rem ' + color(v['$black']).alpha(0.1).toString();
  v['$progress-bar-color'] = u['$progress-bar-color'] || v['$white'];
  v['$progress-bar-bg'] = u['$progress-bar-bg'] || v['$brand-primary'];
  v['$progress-bar-animation-timing'] = u['$progress-bar-animation-timing'] || '1s linear infinite';
  v['$list-group-color'] = u['$list-group-color'] || v['$body-color'];
  v['$list-group-bg'] = u['$list-group-bg'] || v['$white'];
  v['$list-group-border-color'] = u['$list-group-border-color'] || color(v['$black']).alpha(0.125).toString();
  v['$list-group-border-width'] = u['$list-group-border-width'] || v['$border-width'];
  v['$list-group-border-radius'] = u['$list-group-border-radius'] || v['$border-radius'];
  v['$list-group-item-padding-x'] = u['$list-group-item-padding-x'] || '1.25rem';
  v['$list-group-item-padding-y'] = u['$list-group-item-padding-y'] || '.75rem';
  v['$list-group-hover-bg'] = u['$list-group-hover-bg'] || v['$gray-lightest'];
  v['$list-group-active-color'] = u['$list-group-active-color'] || v['$component-active-color'];
  v['$list-group-active-bg'] = u['$list-group-active-bg'] || v['$component-active-bg'];
  v['$list-group-active-border'] = u['$list-group-active-border'] || v['$list-group-active-bg'];
  v['$list-group-disabled-color'] = u['$list-group-disabled-color'] || v['$gray-light'];
  v['$list-group-disabled-bg'] = u['$list-group-disabled-bg'] || v['$list-group-bg'];
  v['$list-group-link-color'] = u['$list-group-link-color'] || v['$gray'];
  v['$list-group-link-hover-color'] = u['$list-group-link-hover-color'] || v['$list-group-link-color'];
  v['$list-group-link-active-color'] = u['$list-group-link-active-color'] || v['$list-group-color'];
  v['$list-group-link-active-bg'] = u['$list-group-link-active-bg'] || v['$gray-lighter'];
  v['$thumbnail-padding'] = u['$thumbnail-padding'] || '.25rem';
  v['$thumbnail-bg'] = u['$thumbnail-bg'] || v['$body-bg'];
  v['$thumbnail-border-width'] = u['$thumbnail-border-width'] || v['$border-width'];
  v['$thumbnail-border-color'] = u['$thumbnail-border-color'] || '#ddd';
  v['$thumbnail-border-radius'] = u['$thumbnail-border-radius'] || v['$border-radius'];
  v['$thumbnail-box-shadow'] = u['$thumbnail-box-shadow'] || '0 1px 2px ' + color(v['$black']).alpha(0.75).toString();
  v['$thumbnail-transition'] = u['$thumbnail-transition'] || 'all .2s ease-in-out';
  v['$figure-caption-font-size'] = u['$figure-caption-font-size'] || '90%';
  v['$figure-caption-color'] = u['$figure-caption-color'] || v['$gray-light'];
  v['$breadcrumb-padding-y'] = u['$breadcrumb-padding-y'] || '.75rem';
  v['$breadcrumb-padding-x'] = u['$breadcrumb-padding-x'] || '1rem';
  v['$breadcrumb-item-padding'] = u['$breadcrumb-item-padding'] || '.5rem';
  v['$breadcrumb-bg'] = u['$breadcrumb-bg'] || v['$gray-lighter'];
  v['$breadcrumb-divider-color'] = u['$breadcrumb-divider-color'] || v['$gray-light'];
  v['$breadcrumb-active-color'] = u['$breadcrumb-active-color'] || v['$gray-light'];
  v['$breadcrumb-divider'] = u['$breadcrumb-divider'] || '"/"';
  v['$close-font-size'] = u['$close-font-size'] || rmUnit(v['$font-size-base']) * 1.5 + detectUnit(v['$font-size-base']);
  v['$close-font-weight'] = u['$close-font-weight'] || v['$font-weight-bold'];
  v['$close-color'] = u['$close-color'] || v['$black'];
  v['$close-text-shadow'] = u['$close-text-shadow'] || '0 1px 0 ' + v['$white'];
  v['$code-font-size'] = u['$code-font-size'] || '90%';
  v['$code-padding-x'] = u['$code-padding-x'] || '.4rem';
  v['$code-padding-y'] = u['$code-padding-y'] || '.2rem';
  v['$code-color'] = u['$code-color'] || '#bd4147';
  v['$code-bg'] = u['$code-bg'] || v['$gray-lightest'];
  v['$kbd-color'] = u['$kbd-color'] || v['$white'];
  v['$kbd-bg'] = u['$kbd-bg'] || v['$gray-dark'];
  v['$pre-color'] = u['$pre-color'] || v['$gray-dark'];
  v['$pre-scrollable-max-height'] = u['$pre-scrollable-max-height'] || '340px';
  return Object.assign({}, u, v);
}

var rmUnit$1 = index$1.rmUnit;
var UNIT$1 = index$1.UNIT;
function makeExtend() {
  var original = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : makeOriginal();
  var userTheme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var v = original;
  var u = userTheme;
  v['$header-navbar-border-color'] = u['$header-navbar-border-color'] || v['$gray-lighter'];
  v['$header-navbar-border-width'] = u['$header-navbar-border-width'] || v['$border-width'];
  v['$card-margin-y-halved'] = u['$card-margin-y-halved'] || rmUnit$1(v['$card-spacer-y'], UNIT$1.REM) / 2 + UNIT$1.REM;
  v['$card-margin-x-halved'] = u['$card-margin-x-halved'] || rmUnit$1(v['$card-spacer-x'], UNIT$1.REM) / 2 + UNIT$1.REM;
  v['$nav-link-hover-bg'] = u['$nav-link-hover-bg'] || color(v['$brand-inverse']).darken(0.03).toString();
  v['$navbar-max-height'] = u['$navbar-max-height'] || '400px';
  v['$navbar-height'] = u['$navbar-height'] || '70px';
  v['$menu-push-bg'] = u['$menu-push-bg'] || v['$brand-inverse'];
  v['$menu-push-mini-width'] = u['$menu-push-mini-width'] || '75px';
  v['$menu-push-width'] = u['$menu-push-width'] || '220px';
  v['$menu-transition-duration'] = u['$menu-transition-duration'] || '.6s';
  v['$menu-offset-nav-transition'] = u['$menu-offset-nav-transition'] || 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms';
  v['$menu-offset-nav-box-shadow'] = u['$menu-offset-nav-box-shadow'] || 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px';
  v['$zindex-menu-push'] = u['$zindex-menu-push'] || '2000';
  v['$motion-duration'] = u['$motion-duration'] || {
    xs: '200ms',
    sm: '300ms',
    md: '500ms',
    lg: '750ms',
    xl: '1000ms'
  };
  v['$motion-timing-function'] = u['$motion-timing-function'] || {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out'
  };
  v['$motion-delay'] = u['$motion-delay'] || {
    xs: '0ms',
    sm: '100ms',
    md: '200ms',
    lg: '500ms',
    xl: '1000ms'
  };
  v['$motion-direction'] = u['$motion-direction'] || {
    normal: 'normal',
    reverse: 'reverse',
    alternate: 'alternate',
    alternateReverse: 'alternate-reverse'
  };
  v['$motion-iterations'] = u['$motion-iterations'] || {
    xs: '1',
    sm: '3',
    md: '6',
    lg: '10',
    xl: 'infinite'
  };
  v['$motion-fill-mode'] = u['$motion-fill-mode'] || {
    none: 'none',
    forwards: 'forwards',
    backwards: 'backwards',
    both: 'both'
  };
  v['$motion-play-state'] = u['$motion-play-state'] || {
    running: 'running',
    paused: 'paused'
  };
  v['$motion-filter'] = u['$motion-filter'] || {
    blur: '30px',
    brightness: '100%',
    contrast: '100%',
    grayscale: '100%)',
    hueRotate: '360deg',
    invert: '100%',
    opacity: '100%',
    saturate: '100%',
    sepia: '100%'
  };
  v['$motion-distance'] = u['$motion-distance'] || {
    xs: '0%',
    sm: '25%',
    md: '50%',
    lg: '75%',
    xl: '100%'
  };
  v['$motion-amplification'] = u['$motion-amplification'] || {
    xxs: 0.1,
    xs: 0.4,
    sm: 0.8,
    md: 1,
    lg: 1.4,
    xl: 1.8,
    xxl: 2
  };
  assertAscending(v['$motion-amplification'], '$motion-amplification');
  v['$motion-degree'] = u['$motion-degree'] || {
    xs: '45deg',
    sm: '90deg',
    md: '180deg',
    lg: '270deg',
    xl: '360deg'
  };
  v['$motion-perspective'] = u['$motion-perspective'] || {
    xs: '64px',
    sm: '128px',
    md: '256px',
    lg: '512px',
    xl: '1024px'
  };
  v['$motion-backface-visibility'] = u['$motion-backface-visibility'] || {
    hidden: 'hidden',
    visible: 'visible'
  };
  v['$motion-flip-perspective'] = u['$motion-flip-perspective'] || v['$motion-perspective']['lg'];
  v['$motion-hatch-amplification'] = u['$motion-hatch-amplification'] || v['$motion-amplification']['md'];
  v['$motion-entrance-amplification'] = u['$motion-entrance-amplification'] || v['$motion-amplification']['md'];
  v['$motion-expand-up-amplification'] = u['$motion-expand-up-amplification'] || v['$motion-amplification']['md'];
  v['$motion-pulse-amplification'] = u['$motion-pulse-amplification'] || v['$motion-amplification']['md'];
  v['$motion-hinge-amplification'] = u['$motion-hinge-amplification'] || v['$motion-amplification']['md'];
  v['$motion-zoom-amplification'] = u['$motion-zoom-amplification'] || v['$motion-amplification']['md'];
  v['$motion-rubber-amplification'] = u['$motion-rubber-amplification'] || v['$motion-amplification']['md'];
  v['$motion-swing-amplification'] = u['$motion-swing-amplification'] || v['$motion-amplification']['md'];
  v['$motion-roll-in-amplification'] = u['$motion-roll-in-amplification'] || v['$motion-amplification']['md'];
  v['$motion-roll-out-amplification'] = u['$motion-roll-out-amplification'] || v['$motion-amplification']['md'];
  v['$motion-roll-out-distance'] = u['$motion-roll-out-distance'] || '100%';
  v['$motion-roll-in-distance'] = u['$motion-roll-in-distance'] || '100%';
  v['$motion-slide-left-distance'] = u['$motion-slide-left-distance'] || '100%';
  v['$motion-slide-right-distance'] = u['$motion-slide-right-distance'] || '100%';
  v['$motion-slide-up-distance'] = u['$motion-slide-up-distance'] || '100%';
  v['$motion-slide-down-distance'] = u['$motion-slide-down-distance'] || '100%';
  v['$motion-slide-right-left-distance'] = u['$motion-slide-right-left-distance'] || '100%';
  v['$motion-rotate-in-rotation'] = u['$motion-rotate-in-rotation'] || v['$motion-degree']['lg'];
  v['$motion-rotate-left-rotation'] = u['$motion-rotate-left-rotation'] || v['$motion-degree']['xs'];
  v['$motion-rotate-right-rotation'] = u['$motion-rotate-right-rotation'] || v['$motion-degree']['xs'];
  v['$motion-rotate-up-left-rotation'] = u['$motion-rotate-up-left-rotation'] || v['$motion-degree']['xs'];
  v['$motion-rotate-up-right-rotation'] = u['$motion-rotate-up-right-rotation'] || v['$motion-degree']['xs'];
  v['$motion-light-in-distance'] = u['$motion-light-in-distance'] || '100%';
  v['$motion-light-in-rotation'] = u['$motion-light-in-rotation'] || v['$motion-degree']['xs'];
  v['$motion-light-out-distance'] = u['$motion-light-out-distance'] || '100%';
  v['$motion-light-out-rotation'] = u['$motion-light-out-rotation'] || v['$motion-degree']['xs'];
  v['$motion-blur-distance'] = u['$motion-blur-distance'] || '5px';
  v['$motion-opacity-amplification'] = u['$motion-opacity-amplification'] || v['$motion-amplification']['md'];
  v['$motion-contrast-amplification'] = u['$motion-contrast-amplification'] || v['$motion-amplification']['md'];
  v['$motion-brightness-amplification'] = u['$motion-brightness-amplification'] || v['$motion-amplification']['md'];
  v['$motion-grayscale-amplification'] = u['$motion-grayscale-amplification'] || v['$motion-amplification']['md'];
  v['$motion-hue-rotate-rotation'] = u['$motion-hue-rotate-rotation'] || v['$motion-degree']['xl'];
  v['$motion-invert-amplification'] = u['$motion-invert-amplification'] || v['$motion-amplification']['md'];
  v['$motion-saturate-amplification'] = u['$motion-saturate-amplification'] || v['$motion-amplification']['md'];
  v['$motion-sepia-amplification'] = u['$motion-sepia-amplification'] || v['$motion-amplification']['md'];
  v['$motion-drop-shadow-amplification'] = u['$motion-drop-shadow-amplification'] || v['$motion-amplification']['md'];
  v['$motion-fade-in-down-distance'] = u['$motion-fade-in-down-distance'] || '100%';
  v['$motion-fade-in-up-distance'] = u['$motion-fade-in-up-distance'] || '100%';
  v['$motion-fade-in-left-distance'] = u['$motion-fade-in-left-distance'] || '100%';
  v['$motion-fade-in-right-distance'] = u['$motion-fade-in-right-distance'] || '100%';
  v['$motion-bounce-amplification'] = u['$motion-bounce-amplification'] || '100%';
  v['$motion-bounce-down-distance'] = u['$motion-bounce-down-distance'] || '100%';
  v['$motion-bounce-up-distance'] = u['$motion-bounce-up-distance'] || '100%';
  v['$motion-bounce-left-distance'] = u['$motion-bounce-left-distance'] || '100%';
  v['$motion-bounce-right-distance'] = u['$motion-bounce-right-distance'] || '100%';
  return Object.assign({}, u, v);
}

function makeTheme$1() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return makeExtend(makeOriginal(userTheme), userTheme);
}

var bsTheme = makeTheme$1();
var makeTheme$$1 = makeTheme$1;

var defaultProps$8 = bsTheme;
function transition() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$8['$enable-transitions'];
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (enableTransitions && args.length) {
    return '\n      transition: ' + args.join(' ') + ';\n    ';
  }
  return '';
}

function ifThen(conditions, returnTrue) {
  return ifElse(conditions, returnTrue, '');
}
function ifElse(conditions, returnTrue, returnFalse) {
  return conditions ? returnTrue : returnFalse;
}

var defaultProps$7 = bsTheme;
function buttonVariant() {
  var enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$7['$enable-shadows'];
  var buttonColor = arguments[1];
  var background = arguments[2];
  var border = arguments[3];
  var btnActiveBoxShadow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps$7['$btn-active-box-shadow'];
  var btnBoxShadow = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps$7['$btn-box-shadow'];
  var activeBackground = color(background).darken(0.2).toString();
  var activeBorder = color(border).darken(0.12).toString();
  return '\n    color: ' + buttonColor + ';\n    background-color: ' + background + ';\n    border-color: ' + border + ';\n    ' + boxShadow(enableShadows, btnBoxShadow) + '\n  \n    ' + hover('\n      color: ' + buttonColor + ';\n      background-color: ' + activeBackground + ';\n      border-color: ' + activeBorder + ';\n    ') + '\n  \n    &:focus,\n    &.focus {\n      ' + ifElse('box-shadow: ' + btnBoxShadow + ', 0 0 0 2px ' + color(border).alpha(0.5).toString() + ';', 'box-shadow: 0 0 0 2px ' + color(border).alpha(0.5).toString() + ';') + '\n    }\n  \n    /* Disabled comes first so active can properly restyle */\n    &.disabled,\n    &:disabled {\n      background-color: ' + background + ';\n      border-color: ' + border + ';\n    }\n    \n    &:active,\n    &.active,\n    .show > &.dropdown-toggle {\n      color: ' + buttonColor + ';\n      background-color: ' + activeBackground + ';\n      background-image: none;\n      border-color: ' + activeBorder + ';\n      ' + boxShadow(enableShadows, btnActiveBoxShadow) + '\n    }\n  ';
}
function buttonOutlineVariant(buttonColor) {
  var buttonColorHover = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#fff';
  return '\n    color: ' + buttonColor + ';\n    background-image: none;\n    background-color: transparent;\n    border-color: ' + buttonColor + ';\n  \n    ' + hover('\n      color: ' + buttonColorHover + ';\n      background-color: ' + buttonColor + ';\n      border-color: ' + buttonColor + ';\n    ') + '\n  \n    &:focus,\n    &.focus {\n      box-shadow: 0 0 0 2px ' + color(buttonColor).alpha(0.5).toString() + ';\n    }\n  \n    &.disabled,\n    &:disabled {\n      color: ' + buttonColor + ';\n      border-color: transparent;\n    }\n    \n    &:active,\n    &.active,\n    & .open > &.dropdown-toggle {\n      color: ' + buttonColorHover + ';\n      background-color: ' + buttonColor + ';\n      border-color: ' + buttonColor + ';\n    }\n  ';
}
function buttonSize() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$7['$enable-rounded'];
  var paddingY = arguments[1];
  var paddingX = arguments[2];
  var fontSize = arguments[3];
  var btnBorderRadius = arguments[4];
  return '\n    padding: ' + paddingY + ' ' + paddingX + ';\n    font-size: ' + fontSize + ';\n    ' + borderRadius(enableRounded, btnBorderRadius) + '\n  ';
}
function button() {
  var $enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$7['$enable-shadows'];
  var $enableHoverMediaQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$7['$enable-hover-media-query'];
  var $enableTransitions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$7['$enable-transitions'];
  var $enableRounded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps$7['$enable-rounded'];
  var $fontWeightNormal = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps$7['$font-weight-normal'];
  var $btnFontWeight = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps$7['$btn-font-weight'];
  var $btnLineHeight = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps$7['$btn-line-height'];
  var $btnTransition = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps$7['$btn-transition'];
  var $inputBtnBorderWidth = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps$7['$input-btn-border-width'];
  var $btnPaddingX = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps$7['$btn-padding-x'];
  var $btnPaddingY = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps$7['$btn-padding-y'];
  var $fontSizeBase = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps$7['$font-size-base'];
  var $btnBorderRadius = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps$7['$btn-border-radius'];
  var $btnBoxShadow = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps$7['$btn-box-shadow'];
  var $btnFocusBoxShadow = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps$7['$btn-focus-box-shadow'];
  var $btnActiveBoxShadow = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps$7['$btn-active-box-shadow'];
  var $cursorDisabled = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps$7['$cursor-disabled'];
  var $linkColor = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps$7['$link-color'];
  var $linkHoverColor = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps$7['$link-hover-color'];
  var $linkHoverDecoration = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps$7['$link-hover-decoration'];
  var $btnLinkDisabledColor = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps$7['$btn-link-disabled-color'];
  var $btnPaddingXLg = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps$7['$btn-padding-x-lg'];
  var $btnPaddingYLg = arguments.length > 22 && arguments[22] !== undefined ? arguments[22] : defaultProps$7['$btn-padding-y-lg'];
  var $fontSizeLg = arguments.length > 23 && arguments[23] !== undefined ? arguments[23] : defaultProps$7['$font-size-lg'];
  var $btnBorderRadiusLg = arguments.length > 24 && arguments[24] !== undefined ? arguments[24] : defaultProps$7['$btn-border-radius-lg'];
  var $btnPaddingXSm = arguments.length > 25 && arguments[25] !== undefined ? arguments[25] : defaultProps$7['$btn-padding-x-sm'];
  var $btnPaddingYSm = arguments.length > 26 && arguments[26] !== undefined ? arguments[26] : defaultProps$7['$btn-padding-y-sm'];
  var $fontSizeSm = arguments.length > 27 && arguments[27] !== undefined ? arguments[27] : defaultProps$7['$font-size-sm'];
  var $btnBorderRadiusSm = arguments.length > 28 && arguments[28] !== undefined ? arguments[28] : defaultProps$7['$btn-border-radius-sm'];
  var $btnBlockSpacingY = arguments.length > 29 && arguments[29] !== undefined ? arguments[29] : defaultProps$7['$btn-block-spacing-y'];
  var $btnPrimaryColor = arguments.length > 30 && arguments[30] !== undefined ? arguments[30] : defaultProps$7['$btn-primary-color'];
  var $btnPrimaryBg = arguments.length > 31 && arguments[31] !== undefined ? arguments[31] : defaultProps$7['$btn-primary-bg'];
  var $btnPrimaryBorder = arguments.length > 32 && arguments[32] !== undefined ? arguments[32] : defaultProps$7['$btn-primary-border'];
  var $btnSecondaryColor = arguments.length > 33 && arguments[33] !== undefined ? arguments[33] : defaultProps$7['$btn-secondary-color'];
  var $btnSecondaryBg = arguments.length > 34 && arguments[34] !== undefined ? arguments[34] : defaultProps$7['$btn-secondary-bg'];
  var $btnSecondaryBorder = arguments.length > 35 && arguments[35] !== undefined ? arguments[35] : defaultProps$7['$btn-secondary-border'];
  var $btnInfoColor = arguments.length > 36 && arguments[36] !== undefined ? arguments[36] : defaultProps$7['$btn-info-color'];
  var $btnInfoBg = arguments.length > 37 && arguments[37] !== undefined ? arguments[37] : defaultProps$7['$btn-info-bg'];
  var $btnInfoBorder = arguments.length > 38 && arguments[38] !== undefined ? arguments[38] : defaultProps$7['$btn-info-border'];
  var $btnSuccessColor = arguments.length > 39 && arguments[39] !== undefined ? arguments[39] : defaultProps$7['$btn-success-color'];
  var $btnSuccessBg = arguments.length > 40 && arguments[40] !== undefined ? arguments[40] : defaultProps$7['$btn-success-bg'];
  var $btnSuccessBorder = arguments.length > 41 && arguments[41] !== undefined ? arguments[41] : defaultProps$7['$btn-success-border'];
  var $btnWarningColor = arguments.length > 42 && arguments[42] !== undefined ? arguments[42] : defaultProps$7['$btn-warning-color'];
  var $btnWarningBg = arguments.length > 43 && arguments[43] !== undefined ? arguments[43] : defaultProps$7['$btn-warning-bg'];
  var $btnWarningBorder = arguments.length > 44 && arguments[44] !== undefined ? arguments[44] : defaultProps$7['$btn-warning-border'];
  var $btnDangerColor = arguments.length > 45 && arguments[45] !== undefined ? arguments[45] : defaultProps$7['$btn-danger-color'];
  var $btnDangerBg = arguments.length > 46 && arguments[46] !== undefined ? arguments[46] : defaultProps$7['$btn-danger-bg'];
  var $btnDangerBorder = arguments.length > 47 && arguments[47] !== undefined ? arguments[47] : defaultProps$7['$btn-danger-border'];
  return '\n  \n    font-family: inherit;\n    \n    &.btn {\n      display: inline-block;\n      font-weight: ' + $btnFontWeight + ';\n      line-height: ' + $btnLineHeight + ';\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: middle;\n      user-select: none;\n      border: ' + $inputBtnBorderWidth + ' solid transparent;\n      ' + buttonSize($enableRounded, $btnPaddingY, $btnPaddingX, $fontSizeBase, $btnBorderRadius) + '\n      ' + transition($enableTransitions, $btnTransition) + '\n     \n      ' + hoverFocus($enableHoverMediaQuery, 'text-decoration: none;') + '\n\n      &:focus,\n      &.focus {\n        outline: 0;\n        box-shadow: ' + $btnFocusBoxShadow + ';\n      }\n\n      &.disabled,\n      &:disabled {\n        cursor: ' + $cursorDisabled + ';\n        opacity: .65;\n        ' + boxShadow($enableShadows, 'none') + '\n      }  \n\n      &:active,\n      &.active {\n        background-image: none;\n        ' + boxShadow($enableShadows, $btnFocusBoxShadow, $btnActiveBoxShadow) + '\n      }\n    }\n    \n    a.btn.disabled,\n    fieldset[disabled] a.btn {\n      pointer-events: none;\n    }\n   \n   \n    /* Alternate buttons */\n   \n    &.btn-primary {\n      ' + buttonVariant($enableShadows, $btnPrimaryColor, $btnPrimaryBg, $btnPrimaryBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-secondary {\n      ' + buttonVariant($enableShadows, $btnSecondaryColor, $btnSecondaryBg, $btnSecondaryBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-info {\n      ' + buttonVariant($enableShadows, $btnInfoColor, $btnInfoBg, $btnInfoBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-success {\n      ' + buttonVariant($enableShadows, $btnSuccessColor, $btnSuccessBg, $btnSuccessBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-warning {\n      ' + buttonVariant($enableShadows, $btnWarningColor, $btnWarningBg, $btnWarningBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-danger {\n      ' + buttonVariant($enableShadows, $btnDangerColor, $btnDangerBg, $btnDangerBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n   \n    &.btn-outline-primary {\n      ' + buttonOutlineVariant($btnPrimaryBg, $btnPrimaryColor) + '\n    }    \n    &.btn-outline-secondary {\n      ' + buttonOutlineVariant($btnSecondaryBorder, $btnSecondaryColor) + '\n    }    \n    &.btn-outline-info {\n      ' + buttonOutlineVariant($btnInfoBg, $btnInfoColor) + '\n    }    \n    &.btn-outline-success {\n      ' + buttonOutlineVariant($btnSuccessBg, $btnSuccessColor) + '\n    }\n    &.btn-outline-warning {\n      ' + buttonOutlineVariant($btnWarningBg, $btnWarningColor) + '\n    }\n    &.btn-outline-danger {\n      ' + buttonOutlineVariant($btnDangerBg, $btnDangerColor) + '\n    }\n   \n    /*\n     Link buttons\n    */\n   \n    &.btn-link {\n      font-weight: ' + $fontWeightNormal + ';\n      color: ' + $linkColor + ';\n      border-radius: 0;\n   \n      &,\n      &:active,\n      &.active,\n      &:disabled {\n        background-color: transparent;\n        ' + boxShadow($enableShadows, 'none') + '\n      }\n     \n      &,\n      &:focus,\n      &:active {\n        border-color: transparent;\n      }\n     \n      ' + hover('\n        border-color: transparent;\n      ') + '\n     \n      ' + hoverFocus($enableHoverMediaQuery, '\n          color: ' + $linkHoverColor + ';\n          text-decoration: ' + $linkHoverDecoration + ';\n          background-color: transparent;\n        ') + '\n     \n      &:disabled {\n        color: ' + $btnLinkDisabledColor + ';\n        ' + hoverFocus($enableHoverMediaQuery, '\n            text-decoration: none;\n          ') + '\n      }\n    }\n  \n  \n    /*\n     Button Sizes\n    */\n   \n    &.btn-lg {\n      /* line-height: ensure even-numbered height of button next to large input */\n      ' + buttonSize($enableRounded, $btnPaddingYLg, $btnPaddingXLg, $fontSizeLg, $btnBorderRadiusLg) + '\n    }\n   \n    &.btn-sm {\n      /* line-height: ensure proper height of button next to small input */\n      ' + buttonSize($enableRounded, $btnPaddingYSm, $btnPaddingXSm, $fontSizeSm, $btnBorderRadiusSm) + '\n    }\n   \n   \n    /*\n     Block button\n    */\n   \n    &.btn-block {\n      display: block;\n      width: 100%;\n    }\n   \n    /* Vertically space out multiple block buttons */\n    &.btn-block + .btn-block {\n      margin-top: ' + $btnBlockSpacingY + ';\n    }\n   \n    /* Specificity overrides */\n    input[type="submit"],\n    input[type="reset"],\n    input[type="button"] {\n      &.btn-block {\n        width: 100%;\n      }\n    }\n   \n    /* Reboot Scss */\n    touch-action: manipulation;\n    line-height: inherit;\n    &:focus{\n      outline: 1px dotted;\n      outline: 5px auto -webkit-focus-ring-color;\n    }\n    \n    &[type="button"],\n    &[type="reset"],\n    &[type="submit"] {\n      -webkit-appearance: button;\n    }\n    \n    &::-moz-focus-inner,\n    &[type="button"]::-moz-focus-inner,\n    &[type="reset"]::-moz-focus-inner,\n    &[type="submit"]::-moz-focus-inner {\n      padding: 0;\n      border-style: none;\n    }\n\n  ';
}

var defaultProps$9 = {
  '$enable-shadows': true,
  '$enable-rounded': true,
  '$input-btn-border-width': '1px',
  '$btn-toolbar-margin': '.5rem',
  '$btn-padding-x': '1rem',
  '$btn-active-box-shadow': 'inset 0 3px 5px rgba(0,0,0,.125)',
  '$btn-padding-x-lg': '1.5rem',
  '$btn-padding-y-lg': '.75rem',
  '$font-size-lg': '1.25rem',
  '$btn-border-radius-lg': '.3rem',
  '$btn-padding-y-sm': '.25rem',
  '$btn-padding-x-sm': '.5rem',
  '$font-size-sm': '.875rem',
  '$btn-border-radius-sm': '.2rem',
  '$btn-border-width': '1px'
};
function buttonGroup() {
  var $enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$9['$enable-shadows'];
  var $enableRounded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$9['$enable-rounded'];
  var $inputBtnBorderWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$9['$input-btn-border-width'];
  var $btnPaddingX = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps$9['$btn-padding-x'];
  var $btnActiveBoxShadow = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps$9['$btn-active-box-shadow'];
  var $btnPaddingXLg = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps$9['$btn-padding-x-lg'];
  var $btnPaddingYLg = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps$9['$btn-padding-y-lg'];
  var $fontSizeLg = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps$9['$font-size-lg'];
  var $btnBorderRadiusLg = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps$9['$btn-border-radius-lg'];
  var $btnPaddingXSm = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps$9['$btn-padding-x-sm'];
  var $btnPaddingYSm = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps$9['$btn-padding-y-sm'];
  var $fontSizeSm = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps$9['$font-size-sm'];
  var $btnBorderRadiusSm = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps$9['$btn-border-radius-sm'];
  return ' \n    /*  Make the div behave like a button */\n    &.btn-group,\n    & .btn-group,\n    &.btn-group-vertical,\n    & .btn-group-vertical {\n      position: relative;\n      display: inline-flex;\n      vertical-align: middle; /* match .btn alignment given font-size hack above */\n    \n      > .btn {\n        position: relative;\n        flex: 0 1 auto;\n        margin-bottom: 0;\n    \n        /* Bring the "active" button to the front */\n        &:focus,\n        &:active,\n        &.active {\n          z-index: 2;\n        }\n        ' + hover('\n          z-index: 2;\n        ') + '\n      }\n    }\n    \n    /*  Prevent double borders when buttons are next to each other */\n    &.btn-group,\n    & .btn-group {\n      .btn + .btn,\n      .btn + .btn-group,\n      .btn-group + .btn,\n      .btn-group + .btn-group {\n        margin-left: -' + $inputBtnBorderWidth + ';\n      }\n    }\n    \n    /* Optional: Group multiple button groups together for a toolbar */\n    &.btn-toolbar,\n    & .btn-toolbar {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: flex-start;\n    \n      .input-group {\n        width: auto;\n      }\n    }\n     \n    &.btn-group,\n    & .btn-group {\n      > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n        border-radius: 0;\n      }\n    }\n    \n    /* Set corners individual because sometimes a single button can be in a .btn-group and we need :first-child and :last-child to both match */\n    &.btn-group,\n    & .btn-group {\n      > .btn:first-child {\n        margin-left: 0;\n    \n        &:not(:last-child):not(.dropdown-toggle) {\n          ' + borderRightRadius($enableRounded, '0') + '\n        }\n      }\n    }\n    /* Need .dropdown-toggle since :last-child does not apply given a .dropdown-menu immediately after it */\n    &.btn-group > .btn:last-child:not(:first-child),\n    & .btn-group > .btn:last-child:not(:first-child),\n    &.btn-group > .dropdown-toggle:not(:first-child),\n    & .btn-group > .dropdown-toggle:not(:first-child) {\n      ' + borderLeftRadius($enableRounded, '0') + '\n    }\n    \n    /* Custom edits for including btn-groups within btn-groups (useful for including dropdown buttons within a btn-group) */\n    &.btn-group > .btn-group,\n    & .btn-group > .btn-group {\n      float: left;\n    }\n    &.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn,\n    & .btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n      border-radius: 0;\n    }\n    &.btn-group > .btn-group:first-child:not(:last-child),\n    & .btn-group > .btn-group:first-child:not(:last-child) {\n      > .btn:last-child,\n      > .dropdown-toggle {\n        ' + borderRightRadius($enableRounded, '0') + '\n      }\n    }\n    &.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child,\n    & .btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n      ' + borderLeftRadius($enableRounded, '0') + '\n    }\n    \n    /* On active and open, do not show outline */\n    &.btn-group .dropdown-toggle:active,\n    & .btn-group .dropdown-toggle:active,\n    &.btn-group.open .dropdown-toggle,\n    & .btn-group.open .dropdown-toggle {\n      outline: 0;\n    }\n    \n    \n    /* \n    Sizing Remix the default button sizing classes into new ones for easier manipulation.\n    */\n    \n    &.btn-group-sm > .btn,\n    & .btn-group-sm > .btn { \n      ' + buttonSize($enableRounded, $btnPaddingYSm, $btnPaddingXSm, $fontSizeSm, $btnBorderRadiusSm) + '\n    }\n    &.btn-group-lg > .btn,\n    & .btn-group-lg > .btn {\n      ' + buttonSize($enableRounded, $btnPaddingYLg, $btnPaddingXLg, $fontSizeLg, $btnBorderRadiusLg) + '\n    }\n    \n    \n    /*\n     Split button dropdowns\n    */\n    \n    & .btn + .dropdown-toggle-split {\n      padding-right: ' + index$1.math.multiply($btnPaddingX, 0.75) + ';\n      padding-left: ' + index$1.math.multiply($btnPaddingX, 0.75) + ';\n    \n      &::after {\n        margin-left: 0;\n      }\n    }\n    \n    & .btn-sm + .dropdown-toggle-split {\n      padding-right: ' + index$1.math.multiply($btnPaddingXSm, 0.75) + ';\n      padding-left: ' + index$1.math.multiply($btnPaddingXSm, 0.75) + ';\n    }\n    \n    & .btn-lg + .dropdown-toggle-split {\n      padding-right: ' + index$1.math.multiply($btnPaddingXLg, 0.75) + ';\n      padding-left: ' + index$1.math.multiply($btnPaddingXLg, 0.75) + ';\n    }\n    \n    \n    /* The clickable button for toggling the menu */\n    /* Remove the gradient and set the same inset shadow as the :active state */\n    &.btn-group.open .dropdown-toggle {\n      ' + boxShadow($enableShadows, $btnActiveBoxShadow) + '\n    \n      /* Show no shadow for .btn-link since it has no other button styles. */\n      &.btn-link {\n        ' + boxShadow($enableShadows, 'none') + '\n      }\n    }\n\n    /*\n     Vertical button groups\n    */\n    \n    &.btn-group-vertical,\n    & .btn-group-vertical {\n      display: inline-flex;\n      flex-direction: column;\n      align-items: flex-start;\n      justify-content: center;\n    \n      .btn,\n      .btn-group {\n        width: 100%;\n      }\n      \n      > .btn + .btn,\n      > .btn + .btn-group,\n      > .btn-group + .btn,\n      > .btn-group + .btn-group {\n        margin-top: -' + $inputBtnBorderWidth + ';\n        margin-left: 0;\n      }\n    }\n    \n    &.btn-group-vertical > .btn,\n    & .btn-group-vertical > .btn {\n      &:not(:first-child):not(:last-child) {\n        border-radius: 0;\n      }\n      &:first-child:not(:last-child) {\n        ' + borderBottomRadius($enableRounded, '0') + '\n      }\n      &:last-child:not(:first-child) {\n        ' + borderTopRadius($enableRounded, '0') + '\n      }\n    }\n    \n    &.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn,\n    & .btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n      border-radius: 0;\n    }\n    \n    &.btn-group-vertical > .btn-group:first-child:not(:last-child),\n    & .btn-group-vertical > .btn-group:first-child:not(:last-child) {\n      > .btn:last-child,\n      > .dropdown-toggle {\n        ' + borderBottomRadius($enableRounded, '0') + '      \n      }\n    }\n    &.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child,\n    & .btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n      ' + borderTopRadius($enableRounded, '0') + '\n    }\n    \n    &.btn-group {\n      > .btn,\n      > .btn-group > .btn {\n        input[type="radio"],\n        input[type="checkbox"] {\n          position: absolute;\n          clip: rect(0,0,0,0);\n          pointer-events: none;\n        }\n      }\n    }\n  ';
}

var defaultProps$10 = bsTheme;
function cardVariant(cardBackground, cardBorder) {
  return '\n    background-color: ' + cardBackground + ';\n    border-color: ' + cardBorder + ';\n  \n    & .card-header,\n    & .card-footer {\n      background-color: transparent;\n    }\n  ';
}
function cardOutlineVariant(cardColor) {
  return '\n    background-color: transparent;\n    border-color: ' + cardColor + ';\n  ';
}
function cardInverse() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$10['$enable-hover-media-query'];
  var cardLinkHoverColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$10['$card-link-hover-color'];
  return '\n    color: rgba(255,255,255,.65);\n    & .card-header,\n    & .card-footer {\n      background-color: transparent;\n      border-color: rgba(255,255,255,.2);\n    }\n    & .card-header,\n    & .card-footer,\n    & .card-title,\n    & .card-blockquote {\n      color: #fff;\n    }\n    & .card-link,\n    & .card-text,\n    & .card-subtitle,\n    & .card-blockquote .blockquote-footer {\n      color: rgba(255,255,255,.65);\n    }\n    \n    & .card-link {\n      ' + hoverFocus(enableHoverMediaQuery, 'color: ' + cardLinkHoverColor + ';') + '\n    }\n  ';
}
function card($enableRounded, $enableHoverMediaQuery, $cardSpacerY, $cardSpacerX, $cardBg, $cardBorderWidth, $cardBorderColor, $cardBorderRadius, $cardMarginYHalved, $cardMarginXHalved, $cardCapBg, $cardBorderRadiusInner, $brandPrimary, $brandSuccess, $brandInfo, $brandWarning, $brandDanger, $btnPrimaryBg, $btnSecondaryBorder, $btnInfoBg, $btnSuccessBg, $btnWarningBg, $btnDangerBg, $cardLinkHoverColor, $cardImgOverlayPadding) {
  return '\n    & .card {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      background-color: ' + $cardBg + ';\n      border: ' + $cardBorderWidth + ' solid ' + $cardBorderColor + ';\n      ' + borderRadius($enableRounded, $cardBorderRadius) + '\n    }\n    \n    & .card-block {\n      flex: 1 1 auto;\n\n      padding: ' + $cardSpacerX + ';\n    }\n    \n    & .card-title {\n      margin-bottom: ' + $cardSpacerY + ';\n    }\n    \n    & .card-subtitle {\n      margin-top: -' + $cardMarginYHalved + ';\n      margin-bottom: 0;\n    }\n    \n    & .card-text:last-child {\n      margin-bottom: 0;\n    }\n   \n    & .card-link {\n      ' + hover('\n        text-decoration: none;\n      ') + '\n    \n      + .card-link {\n        margin-left: ' + $cardSpacerX + ';\n      }\n    }\n    \n    & .card{\n      > .list-group:first-child {\n        .list-group-item:first-child {\n          ' + borderTopRadius($enableRounded, $cardBorderRadius) + '\n        }\n      }\n    \n      > .list-group:last-child {\n        .list-group-item:last-child {\n          ' + borderBottomRadius($enableRounded, $cardBorderRadius) + '\n        }\n      }\n    }\n    \n    & .card-header {\n      padding: ' + $cardSpacerY + ' ' + $cardSpacerX + ';\n      margin-bottom: 0;\n      background-color: ' + $cardCapBg + ';\n      border-bottom: ' + $cardBorderWidth + ' solid ' + $cardBorderColor + ';\n    \n      &:first-child {\n        ' + borderRadius($enableRounded, $cardBorderRadiusInner, $cardBorderRadiusInner, '0', '0') + '\n      }\n    }\n    \n    & .card-footer {\n      padding: ' + $cardSpacerY + ' ' + $cardSpacerX + ';\n      background-color: ' + $cardCapBg + ';\n      border-top: ' + $cardBorderWidth + ' solid ' + $cardBorderColor + ';\n    \n      &:last-child {\n        ' + borderRadius($enableRounded, '0', '0', $cardBorderRadiusInner, $cardBorderRadiusInner) + '\n      }\n    }\n\n    & .card-header-tabs {\n      margin-right: -' + $cardMarginXHalved + ';\n      margin-bottom: -' + $cardSpacerY + ';\n      margin-left: -' + $cardMarginXHalved + ';\n      border-bottom: 0;\n    }\n    \n    & .card-header-pills {\n      margin-right: -' + $cardMarginXHalved + ';\n      margin-left: -' + $cardMarginXHalved + ';\n    }\n    \n    & .card-primary {\n      ' + cardVariant($brandPrimary, $brandPrimary) + '\n    }\n    & .card-success {\n      ' + cardVariant($brandSuccess, $brandSuccess) + '\n    }\n    & .card-info {\n      ' + cardVariant($brandInfo, $brandInfo) + '\n    }\n    & .card-warning {\n      ' + cardVariant($brandWarning, $brandWarning) + '\n    }\n    & .card-danger {\n      ' + cardVariant($brandDanger, $brandDanger) + '\n    }\n    \n    & .card-outline-primary {\n      ' + cardOutlineVariant($btnPrimaryBg) + '\n    }\n    & .card-outline-secondary {\n      ' + cardOutlineVariant($btnSecondaryBorder) + '\n    }\n    & .card-outline-info {\n      ' + cardOutlineVariant($btnInfoBg) + '\n    }\n    & .card-outline-success {\n      ' + cardOutlineVariant($btnSuccessBg) + '\n    }\n    & .card-outline-warning {\n      ' + cardOutlineVariant($btnWarningBg) + '\n    }\n    & .card-outline-danger {\n      ' + cardOutlineVariant($btnDangerBg) + '\n    }\n        \n    & .card-inverse {\n      ' + cardInverse($enableHoverMediaQuery, $cardLinkHoverColor) + '\n    }\n\n    & .card-blockquote {\n      padding: 0;\n      margin-bottom: 0;\n      border-left: 0;\n    }\n    \n    & .card-img {\n      ' + borderRadius($enableRounded, $cardBorderRadiusInner) + '\n    }\n    \n    & .card-img-overlay {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      padding: ' + $cardImgOverlayPadding + ';\n    }\n\n    & .card-img-top {\n      ' + borderTopRadius($enableRounded, $cardBorderRadiusInner) + '\n    }\n    \n    & .card-img-bottom {\n      ' + borderBottomRadius($enableRounded, $cardBorderRadiusInner) + '\n    }\n  ';
}

function clearfix() {
  return "\n    &::after {\n      content: \"\";\n      display: table;\n      clear: both;\n    }\n  ";
}

function floatLeft() {
  return "\n    float: left !important;\n  ";
}
function floatRight() {
  return "\n    float: right !important;\n  ";
}
function floatNone() {
  return "\n    float: none !important;\n  ";
}

var defaultProps$11 = bsTheme;
function formControl() {
  var $enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$11['$enable-rounded'];
  var $enableTransitions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$11['$enable-transitions'];
  var $enableShadows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$11['$enable-shadows'];
  var $inputHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps$11['$input-height'];
  var $inputPaddingY = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps$11['$input-padding-y'];
  var $inputPaddingX = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps$11['$input-padding-x'];
  var $fontSizeBase = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps$11['$font-size-base'];
  var $inputLineHeight = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps$11['$input-line-height'];
  var $inputColor = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps$11['$input-color'];
  var $inputBg = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps$11['$input-bg'];
  var $inputBorderRadius = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps$11['$input-border-radius'];
  var $inputBtnBorderWidth = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps$11['$input-btn-border-width'];
  var $inputBorderColor = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps$11['$input-border-color'];
  var $inputTransition = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps$11['$input-transition'];
  var $inputBoxShadow = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps$11['$input-box-shadow'];
  var $inputColorFocus = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps$11['$input-color-focus'];
  var $inputBgFocus = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps$11['$input-bg-focus'];
  var $inputBorderFocus = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps$11['$input-border-focus'];
  var $inputBoxShadowFocus = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps$11['$input-box-shadow-focus'];
  var $inputColorPlaceholder = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps$11['$input-color-placeholder'];
  var $inputBgDisabled = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps$11['$input-bg-disabled'];
  var $cursorDisabled = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps$11['$cursor-disabled'];
  return '\n      & .form-control {\n        display: block;\n        width: 100%;\n  \n        /* Make inputs at least the height of their button counterpart (base line-height + padding + border) */\n        /* height: ' + $inputHeight + '; */\n  \n        padding: ' + $inputPaddingY + ' ' + $inputPaddingX + ';\n        font-size: ' + $fontSizeBase + ';\n        line-height: ' + $inputLineHeight + ';\n        color: ' + $inputColor + ';\n        background-color: ' + $inputBg + ';\n  \n        /* Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214. */\n        background-image: none;\n        background-clip: padding-box;\n        /* Note: This has no effect on selects in some browsers, due to the limited stylability of selects in CSS. */\n        ' + ($enableRounded ? 'border-radius: ' + $inputBorderRadius + ';' : 'border-radius: 0;') + ' /* Manually use the if/else instead of the mixin to account for iOS override */\n        border: ' + $inputBtnBorderWidth + ' solid ' + $inputBorderColor + ';\n        ' + transition($enableTransitions, $inputTransition) + '\n        ' + boxShadow($enableShadows, $inputBoxShadow) + '\n  \n        /* Unstyle the caret on selects in IE10+. */\n        &::-ms-expand {\n          background-color: transparent;\n          border: 0;\n        }\n  \n        /* Customize the :focus state to imitate native WebKit styles. */\n        ' + formControlFocus($enableShadows, $inputColorFocus, $inputBgFocus, $inputBorderFocus, $inputBoxShadowFocus) + '\n  \n        /* Placeholder */\n        &::placeholder {\n          color: ' + $inputColorPlaceholder + ';\n          /* Override Firefox unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526. */\n          opacity: 1;\n        }\n  \n        /* Disabled and read-only inputs\n         HTML5 says that controls under a fieldset > legend:first-child will not be\n         disabled if the fieldset is disabled. Due to implementation difficulty, we\n         do not honor that edge case; we style them as disabled anyway.\n         */\n  \n        &:disabled,\n        &[readonly] {\n          background-color:' + $inputBgDisabled + ';\n          /* iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655. */\n          opacity: 1;\n        }\n  \n        &:disabled {\n          cursor: ' + $cursorDisabled + ';\n        }\n      }\n  ';
}
function formControlValidation() {
  var enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$11['$enable-shadows'];
  var formColor = arguments[1];
  var inputBoxShadow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$11['$input-box-shadow'];
  return '\n    /* Color the label and help text */\n    & .form-control-feedback,\n    & .form-control-label,\n    & .col-form-label,\n    & .form-check-label,\n    & .custom-control {\n      color: ' + formColor + ';\n    }\n  \n    /* Set the border and box shadow on specific inputs to match */\n      \n    & .form-control,\n    & .custom-select,\n    & .custom-file-control {\n      border-color: ' + formColor + ';\n  \n      &:focus {\n        ' + boxShadow(enableShadows, inputBoxShadow + ', 0 0 6px ' + color(formColor).lighten(0.2).toString()) + '\n      }\n    }\n  \n    /* Set validation states also for addons */\n    .input-group-addon {\n      color: ' + formColor + ';\n      border-color: ' + formColor + ';\n      background-color: ' + color(formColor).lighten(0.40).toString() + ';\n    }\n  ';
}
function formControlFocus() {
  var enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$11['$enable-shadows'];
  var inputColorFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$11['$input-color-focus'];
  var inputBgFocus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$11['$input-bg-focus'];
  var inputBorderFocus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps$11['$input-border-focus'];
  var inputBoxShadowFocus = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps$11['$input-box-shadow-focus'];
  return '\n    &:focus {\n      color: ' + inputColorFocus + ';\n      background-color: ' + inputBgFocus + ';\n      border-color: ' + inputBorderFocus + ';\n      outline: none;\n      ' + boxShadow(enableShadows, inputBoxShadowFocus) + '\n    }\n  ';
}

var defaultProps$12 = {
  '$enable-rounded': true,
  '$enable-shadows': false,
  '$custom-control-checked-indicator-box-shadow': 'none',
  '$custom-control-active-indicator-box-shadow': 'none',
  '$custom-control-indicator-box-shadow': 'inset 0 .25rem .25rem rgba(0, 0, 0, 0.1)',
  '$custom-checkbox-indeterminate-box-shadow': 'none',
  '$custom-select-focus-box-shadow': 'inset 0 1px 2px rgba(0, 0, 0, 0.75), 0 0 5px rgba(hsl(207.79999999999995, 98.2%, 53.4%), .5)',
  '$custom-file-focus-box-shadow': '0 0 0 .075rem #fff, 0 0 0 .2rem #0275d8',
  '$custom-file-box-shadow': 'inset 0 .2rem .4rem rgba(0, 0, 0, 0.05)',
  '$custom-select-border-radius': '.25rem',
  '$custom-file-border-radius': '.25rem',
  '$input-bg': '#fff',
  '$custom-select-line-height': '1.25px',
  '$line-height-base': '1.5',
  '$custom-control-gutter': '1.5rem',
  '$custom-control-spacer-x': '1rem',
  '$custom-control-checked-indicator-color': '#fff',
  '$custom-control-checked-indicator-bg': '#0275d8',
  '$custom-control-focus-indicator-box-shadow': '0 0 0 1px #fff, 0 0 0 3px #0275d8',
  '$custom-control-active-indicator-color': '#fff',
  '$custom-control-active-indicator-bg': 'hsl(207.79999999999995, 98.2%, 57.7%)',
  '$custom-control-disabled-cursor': 'not-allowed',
  '$custom-control-disabled-indicator-bg': '#eceeef',
  '$custom-control-disabled-description-color': '#636c72',
  '$custom-control-indicator-size': '1rem',
  '$custom-control-indicator-bg': '#ddd',
  '$custom-control-indicator-bg-size': '50% 50%',
  '$custom-checkbox-checked-icon': 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 8 8\'%3E%3Cpath fill=\'#fff\' d=\'M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z\'/%3E%3C/svg%3E")',
  '$custom-checkbox-indeterminate-bg': '#0275d8',
  '$custom-checkbox-indeterminate-icon': 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 4\'%3E%3Cpath stroke=\'#fff\' d=\'M0 2h4\'/%3E%3C/svg%3E")',
  '$custom-radio-radius': '50%',
  '$custom-radio-checked-icon': 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'-4 -4 8 8\'%3E%3Ccircle r=\'3\' fill=\'#fff\'/%3E%3C/svg%3E")',
  '$custom-control-spacer-y': '.25rem',
  '$border-width': '1px',
  '$input-height': '2.5rem',
  '$custom-select-padding-y': '.375rem',
  '$custom-select-padding-x': '.75rem ',
  '$custom-select-indicator-padding': '1rem',
  '$custom-select-color': '#464a4c',
  '$custom-select-bg': '#fff',
  '$custom-select-indicator': 'url("data:image/svg+xml;charset=utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 4 5\'%3E%3Cpath fill=\'#333\' d=\'M2 0L0 2h4zm0 5L0 3h4z\'/%3E%3C/svg%3E")',
  '$custom-select-bg-size': '8px 10px',
  '$custom-select-border-width': '1px',
  '$custom-select-border-color': 'rgba(0, 0, 0, 0.15)',
  '$custom-select-focus-border-color': 'hsl(207.79999999999995, 98.2%, 53.4%)',
  '$input-color': '#464a4c',
  '$custom-select-disabled-color': '#636c72',
  '$cursor-disabled': 'not-allowed',
  '$custom-select-disabled-bg': '#eceeef',
  '$custom-select-sm-font-size': '75%',
  '$custom-file-width': '14rem',
  '$custom-file-height': '2.5rem',
  '$custom-file-padding-x': '.5rem',
  '$custom-file-padding-y': '1rem',
  '$custom-file-line-height': '1.5',
  '$custom-file-color': '#464a4c',
  '$custom-file-bg': '#fff',
  '$custom-file-border-width': '1px',
  '$custom-file-border-color': 'rgba(0, 0, 0, 0.15)',
  '$custom-file-button-color': '#464a4c',
  '$custom-file-button-bg': '#eceeef',
  '$custom-checkbox-radius': '.25rem',
  '$custom-file-text': {
    'placeholder': {
      'en': 'Choose file...'
    },
    'button-label': {
      'en': 'Browse'
    }
  }
};
function customForms() {
  var $enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$12['$enable-rounded'];
  var $enableShadows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$12['$enable-shadows'];
  var $customControlCheckedIndicatorBoxShadow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$12['$custom-control-checked-indicator-box-shadow'];
  var $customControlActiveIndicatorBoxShadow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps$12['$custom-control-active-indicator-box-shadow'];
  var $customControlIndicatorBoxShadow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps$12['$custom-control-indicator-box-shadow'];
  var $customCheckboxIndeterminateBoxShadow = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps$12['$custom-checkbox-indeterminate-box-shadow'];
  var $customSelectFocusBoxShadow = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps$12['$custom-select-focus-box-shadow'];
  var $customFileFocusBoxShadow = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps$12['$custom-file-focus-box-shadow'];
  var $customFileBoxShadow = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps$12['$custom-file-box-shadow'];
  var $customSelectBorderRadius = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps$12['$custom-select-border-radius'];
  var $customFileBorderRadius = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps$12['$custom-file-border-radius'];
  var $customCheckboxRadius = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps$12['$custom-checkbox-radius'];
  var $inputBg = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps$12['$input-bg'];
  var $customSelectLineHeight = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps$12['$custom-select-line-height'];
  var $lineHeightBase = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps$12['$line-height-base'];
  var $customControlGutter = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps$12['$custom-control-gutter'];
  var $customControlSpacerX = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps$12['$custom-control-spacer-x'];
  var $customControlCheckedIndicatorColor = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps$12['$custom-control-checked-indicator-color'];
  var $customControlCheckedIndicatorBg = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps$12['$custom-control-checked-indicator-bg'];
  var $customControlFocusIndicatorBoxShadow = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps$12['$custom-control-focus-indicator-box-shadow'];
  var $customControlActiveIndicatorColor = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps$12['$custom-control-active-indicator-color'];
  var $customControlActiveIndicatorBg = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps$12['$custom-control-active-indicator-bg'];
  var $customControlDisabledCursor = arguments.length > 22 && arguments[22] !== undefined ? arguments[22] : defaultProps$12['$custom-control-disabled-cursor'];
  var $customControlDisabledIndicatorBg = arguments.length > 23 && arguments[23] !== undefined ? arguments[23] : defaultProps$12['$custom-control-disabled-indicator-bg'];
  var $customControlDisabledDescriptionColor = arguments.length > 24 && arguments[24] !== undefined ? arguments[24] : defaultProps$12['$custom-control-disabled-description-color'];
  var $customControlIndicatorSize = arguments.length > 25 && arguments[25] !== undefined ? arguments[25] : defaultProps$12['$custom-control-indicator-size'];
  var $customControlIndicatorBg = arguments.length > 26 && arguments[26] !== undefined ? arguments[26] : defaultProps$12['$custom-control-indicator-bg'];
  var $customControlIndicatorBgSize = arguments.length > 27 && arguments[27] !== undefined ? arguments[27] : defaultProps$12['$custom-control-indicator-bg-size'];
  var $customCheckboxCheckedIcon = arguments.length > 28 && arguments[28] !== undefined ? arguments[28] : defaultProps$12['$custom-checkbox-checked-icon'];
  var $customCheckboxIndeterminateBg = arguments.length > 29 && arguments[29] !== undefined ? arguments[29] : defaultProps$12['$custom-checkbox-indeterminate-bg'];
  var $customCheckboxIndeterminateIcon = arguments.length > 30 && arguments[30] !== undefined ? arguments[30] : defaultProps$12['$custom-checkbox-indeterminate-icon'];
  var $customRadioRadius = arguments.length > 31 && arguments[31] !== undefined ? arguments[31] : defaultProps$12['$custom-radio-radius'];
  var $customRadioCheckedIcon = arguments.length > 32 && arguments[32] !== undefined ? arguments[32] : defaultProps$12['$custom-radio-checked-icon'];
  var $customControlSpacerY = arguments.length > 33 && arguments[33] !== undefined ? arguments[33] : defaultProps$12['$custom-control-spacer-y'];
  var $borderWidth = arguments.length > 34 && arguments[34] !== undefined ? arguments[34] : defaultProps$12['$border-width'];
  var $inputHeight = arguments.length > 35 && arguments[35] !== undefined ? arguments[35] : defaultProps$12['$input-height'];
  var $customSelectPaddingY = arguments.length > 36 && arguments[36] !== undefined ? arguments[36] : defaultProps$12['$custom-select-padding-y'];
  var $customSelectPaddingX = arguments.length > 37 && arguments[37] !== undefined ? arguments[37] : defaultProps$12['$custom-select-padding-x'];
  var $customSelectIndicatorPadding = arguments.length > 38 && arguments[38] !== undefined ? arguments[38] : defaultProps$12['$custom-select-indicator-padding'];
  var $customSelectColor = arguments.length > 39 && arguments[39] !== undefined ? arguments[39] : defaultProps$12['$custom-select-color'];
  var $customSelectBg = arguments.length > 40 && arguments[40] !== undefined ? arguments[40] : defaultProps$12['$custom-select-bg'];
  var $customSelectIndicator = arguments.length > 41 && arguments[41] !== undefined ? arguments[41] : defaultProps$12['$custom-select-indicator'];
  var $customSelectBgSize = arguments.length > 42 && arguments[42] !== undefined ? arguments[42] : defaultProps$12['$custom-select-bg-size'];
  var $customSelectBorderWidth = arguments.length > 43 && arguments[43] !== undefined ? arguments[43] : defaultProps$12['$custom-select-border-width'];
  var $customSelectBorderColor = arguments.length > 44 && arguments[44] !== undefined ? arguments[44] : defaultProps$12['$custom-select-border-color'];
  var $customSelectFocusBorderColor = arguments.length > 45 && arguments[45] !== undefined ? arguments[45] : defaultProps$12['$custom-select-focus-border-color'];
  var $inputColor = arguments.length > 46 && arguments[46] !== undefined ? arguments[46] : defaultProps$12['$input-color'];
  var $customSelectDisabledColor = arguments.length > 47 && arguments[47] !== undefined ? arguments[47] : defaultProps$12['$custom-select-disabled-color'];
  var $cursorDisabled = arguments.length > 48 && arguments[48] !== undefined ? arguments[48] : defaultProps$12['$cursor-disabled'];
  var $customSelectDisabledBg = arguments.length > 49 && arguments[49] !== undefined ? arguments[49] : defaultProps$12['$custom-select-disabled-bg'];
  var $customSelectSmFontSize = arguments.length > 50 && arguments[50] !== undefined ? arguments[50] : defaultProps$12['$custom-select-sm-font-size'];
  var $customFileWidth = arguments.length > 51 && arguments[51] !== undefined ? arguments[51] : defaultProps$12['$custom-file-width'];
  var $customFileHeight = arguments.length > 52 && arguments[52] !== undefined ? arguments[52] : defaultProps$12['$custom-file-height'];
  var $customFilePaddingX = arguments.length > 53 && arguments[53] !== undefined ? arguments[53] : defaultProps$12['$custom-file-padding-x'];
  var $customFilePaddingY = arguments.length > 54 && arguments[54] !== undefined ? arguments[54] : defaultProps$12['$custom-file-padding-y'];
  var $customFileLineHeight = arguments.length > 55 && arguments[55] !== undefined ? arguments[55] : defaultProps$12['$custom-file-line-height'];
  var $customFileColor = arguments.length > 56 && arguments[56] !== undefined ? arguments[56] : defaultProps$12['$custom-file-color'];
  var $customFileBg = arguments.length > 57 && arguments[57] !== undefined ? arguments[57] : defaultProps$12['$custom-file-bg'];
  var $customFileBorderWidth = arguments.length > 58 && arguments[58] !== undefined ? arguments[58] : defaultProps$12['$custom-file-border-width'];
  var $customFileBorderColor = arguments.length > 59 && arguments[59] !== undefined ? arguments[59] : defaultProps$12['$custom-file-border-color'];
  var $customFileButtonColor = arguments.length > 60 && arguments[60] !== undefined ? arguments[60] : defaultProps$12['$custom-file-button-color'];
  var $customFileButtonBg = arguments.length > 61 && arguments[61] !== undefined ? arguments[61] : defaultProps$12['$custom-file-button-bg'];
  var $customFileText = arguments.length > 62 && arguments[62] !== undefined ? arguments[62] : defaultProps$12['$custom-file-text'];
  var customFileControlBeforeList = [];
  Object.keys($customFileText.placeholder).forEach(function ($lang) {
    customFileControlBeforeList.push('\n      &:lang(' + $lang + ')::after {\n        content: "' + $customFileText.placeholder[$lang] + '";\n      }   \n    ');
  });
  var customFileControlAfterList = [];
  Object.keys($customFileText['button-label']).forEach(function ($lang) {
    customFileControlAfterList.push('\n      &:lang(' + $lang + ')::before {\n        content: "' + $customFileText['button-label'][$lang] + '";\n      }\n    ');
  });
  var selectBorderWidth = index$1.math.multiply($borderWidth, 2);
  var customSelectPaddingRight = index$1.math.addition($customSelectPaddingY, $customSelectIndicatorPadding);
  var lineHeightBaseMinusCustomControlIndicatorSize = index$1.math.subtract($lineHeightBase, $customControlIndicatorSize);
  return '\n    /* Embedded icons from Open Iconic. */\n    /* Released under MIT and copyright 2014 Waybury. */\n    /* https://useiconic.com/open */\n    \n    \n    /* Checkboxes and radios */\n    /* Base class takes care of all the key behavioral aspects. */\n    \n    & .custom-control {\n      position: relative;\n      display: inline-flex;\n      min-height: calc(1rem * ' + $lineHeightBase + ');\n      padding-left: ' + $customControlGutter + ';\n      margin-right: ' + $customControlSpacerX + ';\n    }\n    \n    & .custom-control-input {\n      position: absolute;\n      z-index: -1; /* Put the input behind the label so it does not overlay text */\n      opacity: 0;\n    \n      &:checked ~ .custom-control-indicator {\n        color: ' + $customControlCheckedIndicatorColor + ';\n        background-color: ' + $customControlCheckedIndicatorBg + ';\n        ' + boxShadow($enableShadows, $customControlCheckedIndicatorBoxShadow) + '\n      }\n    \n      &:focus ~ .custom-control-indicator {\n        /* the mixin is not used here to make sure there is feedback */\n        box-shadow: ' + $customControlFocusIndicatorBoxShadow + ';\n      }\n    \n      &:active ~ .custom-control-indicator {\n        color: ' + $customControlActiveIndicatorColor + ';\n        background-color: ' + $customControlActiveIndicatorBg + ';\n        ' + boxShadow($enableShadows, $customControlActiveIndicatorBoxShadow) + '\n      }\n    \n      &:disabled {\n        ~ .custom-control-indicator {\n          cursor: ' + $customControlDisabledCursor + ';\n          background-color: ' + $customControlDisabledIndicatorBg + ';\n        }\n    \n        ~ .custom-control-description {\n          color: ' + $customControlDisabledDescriptionColor + ';\n          cursor: ' + $customControlDisabledCursor + ';\n        }\n      }\n    }\n    \n    /* Custom indicator */\n    /* Generates a shadow element to create our makeshift checkbox/radio background. */\n    \n    & .custom-control-indicator {\n      position: absolute;\n      top: calc(' + lineHeightBaseMinusCustomControlIndicatorSize + ' / 2);\n      left: 0;\n      display: block;\n      width: ' + $customControlIndicatorSize + ';\n      height: ' + $customControlIndicatorSize + ';\n      pointer-events: none;\n      user-select: none;\n      background-color: ' + $customControlIndicatorBg + ';\n      background-repeat: no-repeat;\n      background-position: center center;\n      background-size: ' + $customControlIndicatorBgSize + ';\n      ' + boxShadow($enableShadows, $customControlIndicatorBoxShadow) + '\n    }\n    \n    /* Checkboxes */\n    /* Tweak just a few things for checkboxes.  */\n    \n    & .custom-checkbox {\n      & .custom-control-indicator {\n        ' + borderRadius($enableRounded, $customCheckboxRadius) + '\n      }\n    \n      & .custom-control-input:checked ~ .custom-control-indicator {\n        background-image: ' + $customCheckboxCheckedIcon + ';\n      }\n    \n      & .custom-control-input.indeterminate ~ .custom-control-indicator {\n        background-color: ' + $customCheckboxIndeterminateBg + ';\n        background-image: ' + $customCheckboxIndeterminateIcon + ';\n        ' + boxShadow($enableShadows, $customCheckboxIndeterminateBoxShadow) + '\n      }\n    }\n    \n    /* Radios */\n    /* Tweak just a few things for radios. */\n    \n    & .custom-radio {\n      & .custom-control-indicator {\n        border-radius: ' + $customRadioRadius + ';\n      }\n    \n      & .custom-control-input:checked ~ .custom-control-indicator {\n        background-image: ' + $customRadioCheckedIcon + ';\n      }\n    }\n    \n    \n    /* Layout options */\n    /* By default radios and checkboxes are inline-block with no additional spacing */\n    /* set. Use these optional classes to tweak the layout. */\n    \n    & .custom-controls-stacked {\n      display: flex;\n      flex-direction: column;\n    \n      & .custom-control {\n        margin-bottom: ' + $customControlSpacerY + ';\n    \n        + & .custom-control {\n          margin-left: 0;\n        }\n      }\n    }\n    \n    \n    /* Select */\n    /* Replaces the browser default select with a custom one, mostly pulled from */\n    /* http://primercss.io. */\n    \n    & .custom-select {\n      display: inline-block;\n      max-width: 100%;\n      height: calc(' + $inputHeight + ' + ' + selectBorderWidth + ');\n      padding: ' + $customSelectPaddingY + ' ' + customSelectPaddingRight + ' ' + $customSelectPaddingY + ' ' + $customSelectPaddingX + ';\n      line-height: ' + $customSelectLineHeight + ';\n      color: ' + $customSelectColor + ';\n      vertical-align: middle;\n      background: ' + $customSelectBg + ' ' + $customSelectIndicator + ' no-repeat right ' + $customSelectPaddingX + ' center;\n      background-size: ' + $customSelectBgSize + ';\n      border: ' + $customSelectBorderWidth + ' solid ' + $customSelectBorderColor + ';\n      ' + borderRadius($enableRounded, $customSelectBorderRadius) + '\n      /* Use vendor prefixes as appearance is not part of the CSS spec.  */\n      -moz-appearance: none;\n      -webkit-appearance: none;\n    \n      &:focus {\n        border-color: ' + $customSelectFocusBorderColor + ';\n        outline: none;\n        ' + boxShadow($enableShadows, $customSelectFocusBoxShadow) + '\n    \n        ::-ms-value {\n          /* For visual consistency with other platforms/browsers, */\n          /* supress the default white text on blue background highlight given to */\n          /* the selected option text when the (still closed) <select> receives focus */\n          /* in IE and (under certain conditions) Edge. */\n          /* See https://github.com/twbs/bootstrap/issues/19398. */\n          color: ' + $inputColor + ';\n          background-color: ' + $inputBg + ';\n        }\n      }\n    \n      &:disabled {\n        color: ' + $customSelectDisabledColor + ';\n        cursor: ' + $cursorDisabled + ';\n        background-color: ' + $customSelectDisabledBg + ';\n      }\n    \n      /* Hides the default caret in IE11 */\n      ::-ms-expand {\n        opacity: 0;\n      }\n    }\n    \n    & .custom-select-sm {\n      padding-top: ' + $customSelectPaddingY + ';\n      padding-bottom: ' + $customSelectPaddingY + ';\n      font-size: ' + $customSelectSmFontSize + ';\n    \n      /* &:not([multiple]) { */\n      /*   height: 26px; */\n      /*   min-height: 26px; */\n      /* } */\n    }\n    \n    \n    /* File */\n    /* Custom file input. */\n    \n    & .custom-file {\n      position: relative;\n      display: inline-block;\n      max-width: 100%;\n      height: ' + $customFileHeight + ';\n      margin-bottom: 0;\n    }\n    \n    & .custom-file-input {\n      min-width: ' + $customFileWidth + ';\n      max-width: 100%;\n      height: ' + $customFileHeight + ';\n      margin: 0;\n      opacity: 0;\n    \n      &:focus ~ .custom-file-control {\n        ' + boxShadow($enableShadows, $customFileFocusBoxShadow) + '\n      }\n    }\n    \n    & .custom-file-control {\n      position: absolute;\n      top: 0;\n      right: 0;\n      left: 0;\n      z-index: 5;\n      height: ' + $customFileHeight + ';\n      padding: ' + $customFilePaddingX + ' ' + $customFilePaddingY + ';\n      line-height: ' + $customFileLineHeight + ';\n      color: ' + $customFileColor + ';\n      pointer-events: none;\n      user-select: none;\n      background-color: ' + $customFileBg + ';\n      border: ' + $customFileBorderWidth + ' solid ' + $customFileBorderColor + ';\n      ' + borderRadius($enableRounded, $customFileBorderRadius) + '\n      ' + boxShadow($enableShadows, $customFileBoxShadow) + '\n      \n      ' + customFileControlBeforeList.join('\n') + '\n    \n      &::before {\n        position: absolute;\n        top: ' + $customFileBorderWidth + ';\n        right: ' + $customFileBorderWidth + ';\n        bottom: ' + $customFileBorderWidth + ';\n        z-index: 6;\n        display: block;\n        height: ' + $customFileHeight + ';\n        padding: ' + $customFilePaddingX + ' ' + $customFilePaddingY + ';\n        line-height: ' + $customFileLineHeight + ';\n        color: ' + $customFileButtonColor + ';\n        background-color: ' + $customFileButtonBg + ';\n        border: ' + $customFileBorderWidth + ' solid ' + $customFileBorderColor + ';\n        ' + borderRadius(0, $enableRounded, $customFileBorderRadius, $customFileBorderRadius, 0) + '\n      }\n\n      ' + customFileControlAfterList.join('\n') + '\n    }\n  ';
}

function gradientX() {
  var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#555';
  var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#333';
  var startPercent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0%';
  var endPercent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '100%';
  return '\n    background-image: linear-gradient(to right, ' + startColor + ' ' + startPercent + ', ' + endColor + ' ' + endPercent + ');\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#{ie-hex-str(' + startColor + ')}\', endColorstr=\'#{ie-hex-str(' + endColor + ')}\', GradientType=1); // IE9\n  ';
}
function gradientY() {
  var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#555';
  var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#333';
  var startPercent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0%';
  var endPercent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '100%';
  return '\n    background-image: linear-gradient(to bottom, ' + startColor + ' ' + startPercent + ', ' + endColor + ' ' + endPercent + ');\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#{ie-hex-str(' + startColor + ')}\', endColorstr=\'#{ie-hex-str(' + endColor + ')}\', GradientType=0); // IE9\n  ';
}
function gradientDirectional() {
  var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#555';
  var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#333';
  var deg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '45deg';
  return '\n    background-repeat: repeat-x;\n    background-image: linear-gradient(' + deg + ', ' + startColor + ', ' + endColor + ');\n  ';
}
function gradientXThreeColors() {
  var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#00b3ee';
  var midColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#7a43b6';
  var colorStop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '50%';
  var endColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#c3325f';
  return '\n    background-image: linear-gradient(to right, ' + startColor + ', ' + midColor + ' ' + colorStop + ', ' + endColor + ');\n    background-repeat: no-repeat;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#{ie-hex-str(' + startColor + ')}\', endColorstr=\'#{ie-hex-str(' + endColor + ')}\', GradientType=1); // IE9 gets no color-stop at all for proper fallback\n  ';
}
function gradientYThreeColors() {
  var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#00b3ee';
  var midColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#7a43b6';
  var colorStop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '50%';
  var endColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#c3325f';
  return '\n    background-image: linear-gradient(' + startColor + ', ' + midColor + ' ' + colorStop + ', ' + endColor + ');\n    background-repeat: no-repeat;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\'#{ie-hex-str(' + startColor + ')}\', endColorstr=\'#{ie-hex-str(' + endColor + ')}\', GradientType=0); // IE9 gets no color-stop at all for proper fallback\n  ';
}
function gradientRadial() {
  var innerColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#555';
  var outerColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#333';
  return '\n    background-image: radial-gradient(circle, ' + innerColor + ', ' + outerColor + ');\n    background-repeat: no-repeat;\n  ';
}
function gradientStriped() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgba(255,255,255,.15)';
  var angle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '45deg';
  return '\n    background-image: linear-gradient(' + angle + ', ' + color + ' 25%, transparent 25%, transparent 50%, ' + color + ' 50%, ' + color + ' 75%, transparent 75%, transparent);\n  ';
}
var gradients = {
  x: gradientX,
  y: gradientY,
  directional: gradientDirectional,
  xThreeColors: gradientXThreeColors,
  yThreeColors: gradientYThreeColors,
  radial: gradientRadial,
  striped: gradientStriped
};

var defaultProps$13 = {
  '$grid-gutter-widths': {
    xs: '30px',
    sm: '30px',
    md: '30px',
    lg: '30px',
    xl: '30px'
  },
  '$container-max-widths': {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px'
  },
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  '$grid-columns': 12,
  '$enable-grid-classes': true
};
function makeContainer() {
  var enableGridClasses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$13['$enable-grid-classes'];
  var gridGutterWidths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$13['$grid-gutter-widths'];
  if (enableGridClasses) {
    var columns = [];
    Object.keys(gridGutterWidths).forEach(function (breakpoint) {
      var gutter = gridGutterWidths[breakpoint];
      var column = mediaBreakpointUp(breakpoint, gutter, '\n        padding-right: ' + index$1.rmUnit(gutter) / 2 + index$1.detectUnit(gutter) + ';\n        padding-left:  ' + index$1.rmUnit(gutter) / 2 + index$1.detectUnit(gutter) + ';\n      ');
      columns.push(column);
    });
    return '\n      position: relative;\n      margin-left: auto;\n      margin-right: auto;    \n      ' + columns.join('\n') + '\n    ';
  }
  return '';
}
function makeContainerMaxWidths() {
  var enableGridClasses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$13['$enable-grid-classes'];
  var containerMaxWidths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$13['$container-max-widths'];
  var gridBreakpoints = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$13['$grid-breakpoints'];
  if (enableGridClasses) {
    var maximumWidthList = [];
    Object.keys(containerMaxWidths).forEach(function (breakpoint) {
      var maximumWidth = mediaBreakpointUp(breakpoint, gridBreakpoints, '\n        width: ' + containerMaxWidths[breakpoint] + ';\n        max-width: 100%;\n      ');
      maximumWidthList.push(maximumWidth);
    });
    return '\n      ' + maximumWidthList.join('\n') + '\n    ';
  }
  return '';
}
function makeGutters() {
  var gridGutterWidths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$13['$grid-gutter-widths'];
  var breakpoints$$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$13['$grid-breakpoints'];
  var gutterList = [];
  Object.keys(gridGutterWidths).forEach(function (breakpoint) {
    var gutterValue = gridGutterWidths[breakpoint];
    gutterValue = '' + index$1.rmUnit(gutterValue) / 2 + index$1.detectUnit(gutterValue);
    var gutter = mediaBreakpointUp(breakpoint, breakpoints$$1, '\n      padding-right: ' + gutterValue + ';\n      padding-left:  ' + gutterValue + ';\n    ');
    gutterList.push(gutter);
  });
  return '\n    ' + gutterList.join('\n') + '\n  ';
}
function makeRow() {
  var enableGridClasses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$13['$enable-grid-classes'];
  var gridGutterWidths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$13['$grid-gutter-widths'];
  if (enableGridClasses) {
    var rowList = [];
    Object.keys(gridGutterWidths).forEach(function (breakpoint) {
      var gutter = gridGutterWidths[breakpoint];
      gutter = '' + index$1.rmUnit(gutter) / -2 + index$1.detectUnit(gutter);
      var row = '\n        margin-right: ' + gutter + ';\n        margin-left:  ' + gutter + ';\n      ';
      rowList.push(row);
    });
    return '\n      display: flex;\n      flex-wrap: wrap;\n      ' + rowList.join('\n') + '\n    ';
  }
  return '';
}

function makeCol(size) {
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$13['$grid-columns'];
  return '\n    flex: 0 0 ' + index$1.toPercent(size, columns) + ';\n    /* Add a \'max-width\' to ensure content within each column does not blow out */\n    /* the width of the column. Applies to IE10+ and Firefox. Chrome and Safari */\n    /* do not appear to require this. */\n    max-width: ' + index$1.toPercent(size, columns) + ';\n  ';
}
function makeColOffset($size) {
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$13['$grid-columns'];
  return '\n    margin-left: ' + index$1.toPercent($size, columns) + ';\n  ';
}
function makeColPush(size) {
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$13['$grid-columns'];
  return '\n    left: ' + (size > 0 ? index$1.toPercent(size, columns) : 'auto') + ';\n  ';
}
function makeColPull(size) {
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$13['$grid-columns'];
  return '\n    right: ' + (size > 0 ? index$1.toPercent(size, columns) : 'auto') + ';\n  ';
}
function makeColModifier(type, size, columns) {
  var TYPE = {
    PUSH: 'push',
    PULL: 'pull',
    OFFSET: 'offset'
  };
  var modifier = '';
  if (type === TYPE.PUSH) {
    modifier = makeColPush(size, columns);
  } else if (type === TYPE.PULL) {
    modifier = makeColPull(size, columns);
  } else if (type === TYPE.OFFSET) {
    modifier = makeColOffset(size, columns);
  }
  return '\n    ' + modifier + '\n  ';
}

var defaultProps$14 = {
  '$grid-gutter-widths': {
    xs: '30px',
    sm: '30px',
    md: '30px',
    lg: '30px',
    xl: '30px'
  },
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  '$grid-columns': 12,
  '$enable-grid-classes': true
};
function getGridColumn() {
  var gridGutterWidths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$14['$grid-gutter-widths'];
  var breakpoints$$1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$14['$grid-breakpoints'];
  return '\n    position: relative;\n    width: 100%;\n    min-height: 1px; /* Prevent columns from collapsing when empty */\n    ' + makeGutters(gridGutterWidths, breakpoints$$1) + '\n  ';
}
function getColumnGridColumn() {
  var gridColumns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$14['$grid-columns'];
  var gridBreakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$14['$grid-breakpoints'];
  var gridGutterWidths = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$14['$grid-gutter-widths'];
  var breakpoint = arguments[3];
  var columnList = [];
  var infix = breakpointInfix(breakpoint, gridBreakpoints);
  for (var i = 1; i <= gridColumns; i += 1) {
    var column = '\n      &.col' + infix + '-' + i + ',\n       & .col' + infix + '-' + i + '{\n        ' + getGridColumn(gridColumns, gridGutterWidths, gridBreakpoints) + '\n      }\n    ';
    columnList.push(column);
  }
  return '\n    /* Allow columns to stretch full width below their breakpoints */\n    &.col' + infix + ',\n     & .col' + infix + '{\n      ' + getGridColumn(gridColumns, gridGutterWidths, gridBreakpoints) + '\n    }\n\n    ' + columnList.join('\n') + '\n  ';
}
function getMediaBreakpointUp() {
  var gridColumns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$14['$grid-columns'];
  var gridBreakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$14['$grid-breakpoints'];
  var breakpoint = arguments[2];
  var infix = breakpointInfix(breakpoint, gridBreakpoints);
  var basic = '\n    &.col' + infix + ',\n     & .col' + infix + '{\n      flex-basis: 0;\n      flex-grow: 1;\n      max-width: 100%;\n    }\n    &.col' + infix + '-auto,\n     & .col' + infix + '-auto{\n      flex: 0 0 auto;\n      width: auto;\n    }\n  ';
  var columnList = [];
  for (var i = 1; i <= gridColumns; i += 1) {
    var column = '\n      &.col' + infix + '-' + i + ',\n       & .col' + infix + '-' + i + '{\n        ' + makeCol(i, gridColumns) + '\n      }\n    ';
    columnList.push(column);
  }
  var modifierList = ['pull', 'push'];
  var columnModifierList = [];
  modifierList.forEach(function (modifier) {
    for (var _i = 0; _i <= gridColumns; _i += 1) {
      var columnModifier = '\n        &.' + modifier + infix + '-' + _i + ',\n         & .' + modifier + infix + '-' + _i + '{\n          ' + makeColModifier(modifier, _i, gridColumns) + '\n        }\n      ';
      columnModifierList.push(columnModifier);
    }
  });
  var offsetColumnList = [];
  for (var _i2 = 0; _i2 <= gridColumns - 1; _i2 += 1) {
    if (infix !== 1 || _i2 !== 0) {
      var offsetColumn = '\n        &.offset' + infix + '-' + _i2 + ',\n         & .offset' + infix + '-' + _i2 + '{\n          ' + makeColModifier('offset', _i2, gridColumns) + '\n        }\n      ';
      offsetColumnList.push(offsetColumn);
    }
  }
  return mediaBreakpointUp(breakpoint, gridBreakpoints, '\n    ' + basic + '\n    ' + columnList.join('\n') + '\n    ' + columnModifierList.join('\n') + '\n    ' + offsetColumnList.join('\n') + '\n  ');
}
function makeGridColumns() {
  var enableGridClasses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$14['$enable-grid-classes'];
  var gridColumns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$14['$grid-columns'];
  var gridGutterWidths = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$14['$grid-gutter-widths'];
  var gridBreakpoints = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps$14['$grid-breakpoints'];
  if (enableGridClasses) {
    var gridColumnList = [];
    Object.keys(gridBreakpoints).forEach(function (breakpoint) {
      var gridColumn = '\n        ' + getColumnGridColumn(gridColumns, gridBreakpoints, gridGutterWidths, breakpoint) + '\n        ' + getMediaBreakpointUp(gridColumns, gridBreakpoints, breakpoint) + '\n      ';
      gridColumnList.push(gridColumn);
    });
    return '\n      ' + gridColumnList.join('\n') + '\n    ';
  }
  return '';
}

var defaultProps$15 = {
  '$enable-hover-media-query': false
};
function listGroupItemVariant() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$15['$enable-hover-media-query'];
  var state = arguments[1];
  var background = arguments[2];
  var listColor = arguments[3];
  return '\n    & .list-group-item-' + state + ' {\n      color: ' + listColor + ';\n      background-color: ' + background + ';\n    }\n  \n    & a.list-group-item-' + state + ',\n    button.list-group-item-' + state + ' {\n      color: ' + listColor + ';\n  \n      .list-group-item-heading {\n        color: inherit;\n      }\n  \n      ' + hoverFocus(enableHoverMediaQuery, 'color: ' + listColor + ';\n        background-color: ' + color(background).darken(0.05).toString() + ';') + '\n  \n      &.active {\n        ' + plainHoverFocus(enableHoverMediaQuery, 'color: #fff;\n          background-color: ' + listColor + ';\n          border-color: ' + listColor + ';') + '\n      }\n    }\n  ';
}

function listUnstyled() {
  return '\n    padding-left: 0;\n    list-style: none;\n  ';
}
function listInline() {
  return listUnstyled();
}
function listInlineItem() {
  var listInlinePadding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : bsTheme['$list-inline-padding'];
  return '\n    display: inline-block;\n  \n    &:not(:last-child) {\n      margin-right: ' + listInlinePadding + ';\n    }\n  ';
}

var defaultProps$17 = {
  '$enable-rounded': true,
  '$enable-hover-media-query': false,
  '$nav-link-padding': '.5em 1em',
  '$nav-disabled-link-color': '#636c72',
  '$cursor-disabled': 'not-allowed',
  '$nav-tabs-border-width': '1px',
  '$nav-tabs-border-color': '#ddd',
  '$nav-tabs-border-radius': '.25rem',
  '$nav-tabs-link-hover-border-color': '#eceeef',
  '$nav-tabs-active-link-hover-color': '#464a4c',
  '$nav-tabs-active-link-hover-bg': '#fff',
  '$nav-tabs-active-link-hover-border-color': '#ddd',
  '$nav-pills-border-radius': '.25rem',
  '$nav-pills-active-link-color': '#fff',
  '$nav-pills-active-link-bg': '#0275d8'
};
function nav() {
  var $enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$17['$enable-rounded'];
  var $enableHoverMediaQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$17['$enable-hover-media-query'];
  var $navLinkPadding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$17['$nav-link-padding'];
  var $navDisabledLinkColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps$17['$nav-disabled-link-color'];
  var $cursorDisabled = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps$17['$cursor-disabled'];
  var $navTabBorderWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps$17['$nav-tabs-border-width'];
  var $navTabsBorderColor = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps$17['$nav-tabs-border-color'];
  var $navTabsBorderRadius = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps$17['$nav-tabs-border-radius'];
  var $navTabsLinkHoverBorderColor = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps$17['$nav-tabs-link-hover-border-color'];
  var $navTabsActiveLinkHoverColor = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps$17['$nav-tabs-active-link-hover-color'];
  var $navTabsActiveLinkHoverBg = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps$17['$nav-tabs-active-link-hover-bg'];
  var $navTabsActiveLinkHoverBorderColor = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps$17['$nav-tabs-active-link-hover-border-color'];
  var $navPillsBorderRadius = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps$17['$nav-pills-border-radius'];
  var $navPillsActiveLinkColor = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps$17['$nav-pills-active-link-color'];
  var $navPillsActiveLinkBg = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps$17['$nav-pills-active-link-bg'];
  return '\n    &.nav {\n      display: flex;\n      padding-left: 0;\n      margin-bottom: 0;\n      list-style: none;\n    }\n    \n    & .nav-link {\n      display: block;\n      padding: ' + $navLinkPadding + ';\n      \n      ' + hoverFocus($enableHoverMediaQuery, 'text-decoration: none;') + '\n\n      /* Disabled state lightens text and removes hover tab effects */\n      &.disabled {\n        color: ' + $navDisabledLinkColor + ';\n        cursor: ' + $cursorDisabled + '; \n      }\n    }\n        \n    /*\n     Tabs\n    */\n    \n    &.nav-tabs {\n      border-bottom: ' + $navTabBorderWidth + ' solid ' + $navTabsBorderColor + ';\n      & .nav-item {\n        margin-bottom: -' + $navTabBorderWidth + ';\n      }\n   \n      & .nav-link {\n        border: ' + $navTabBorderWidth + ' solid transparent;\n        ' + borderTopRadius($enableRounded, $navTabsBorderRadius) + '\n      \n        ' + hoverFocus($enableHoverMediaQuery, '\n            border-color: ' + $navTabsLinkHoverBorderColor + ' ' + $navTabsLinkHoverBorderColor + ' ' + $navTabsBorderColor + ';\n          ') + '\n      \n        &.disabled {\n          color: ' + $navDisabledLinkColor + ';\n          background-color: transparent;\n          border-color: transparent;\n        }\n      }\n      \n      & .nav-link.active,\n      .nav-item.open .nav-link {\n        color: ' + $navTabsActiveLinkHoverColor + ';\n        background-color: ' + $navTabsActiveLinkHoverBg + ';\n        border-color: ' + $navTabsActiveLinkHoverBorderColor + ' ' + $navTabsActiveLinkHoverBorderColor + ' transparent;\n      }\n      \n      & .dropdown-menu {\n        /* Make dropdown border overlap tab border */\n        margin-top: -' + $navTabBorderWidth + ';\n        /* Remove the top rounded corners here since there is a hard edge above the menu */\n        ' + borderTopRadius($enableRounded, '0') + '\n      }\n    }\n    \n    /*\n     Pills\n    */\n    \n    &.nav-pills {\n      .nav-link {\n        ' + borderRadius($enableRounded, $navPillsBorderRadius) + '\n      }\n\n      .nav-link.active,\n      .nav-item.show .nav-link {\n        color: ' + $navPillsActiveLinkColor + ';\n        background-color: ' + $navPillsActiveLinkBg + ';\n      }\n    }\n\n    /*\n      Justified variants\n    */\n    \n    &.nav-fill {\n      .nav-item {\n        flex: 1 1 auto;\n        text-align: center;\n      }\n    }\n    \n    &.nav-justified {\n      .nav-item {\n        flex: 1 1 100%;\n        text-align: center;\n      }\n    }\n    \n    /* Hide tabbable panes to start, show them when .active */\n    &.tab-content {\n      > .tab-pane {\n        display: none;\n      }\n      > .active {\n        display: block;\n      }\n    }\n  ';
}

var defaultProps$19 = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};
function navbarToggleable() {
  var gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$19['$grid-breakpoints'];
  var navbarBreakpointList = [];
  Object.keys(gridBreakpoints).forEach(function (breakpoint) {
    var next = breakpointNext(breakpoint, gridBreakpoints);
    var infix = breakpointInfix(breakpoint, gridBreakpoints);
    var navbarBreakpoint = '\n      &.navbar-toggleable' + infix + ' {\n        ' + mediaBreakpointDown(breakpoint, gridBreakpoints, '\n          .navbar-nav {\n            .dropdown-menu {\n              position: static;\n              float: none;\n            }\n          }\n\n          > .container {\n            padding-right: 0;\n            padding-left: 0;\n          }\n        ') + '\n        ' + mediaBreakpointUp(next, gridBreakpoints, '\n          flex-direction: row;\n          flex-wrap: nowrap;\n          align-items: center;\n  \n          .navbar-nav {\n            flex-direction: row;\n  \n            .nav-link {\n              padding-right: .5rem;\n              padding-left: .5rem;\n            }\n          }\n  \n          /* For nesting containers, have to redeclare for alignment purposes */\n          > .container {\n            display: flex;\n            flex-wrap: nowrap;\n            align-items: center;\n          }\n  \n          .navbar-collapse {\n            display: flex !important;\n            width: 100%;\n\n           }\n           \n          .navbar-toggler {\n            display: none;\n          }\n        ') + '\n      }\n    ';
    navbarBreakpointList.push(navbarBreakpoint);
  });
  return '\n    ' + navbarBreakpointList.join('\n') + '\n  ';
}

var defaultProps$18 = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  '$enable-rounded': true,
  '$enable-hover-media-query': false,
  '$navbar-padding-y': '0.5rem',
  '$navbar-padding-x': '1rem',
  '$zindex-navbar': '1000',
  '$zindex-navbar-fixed': '1030',
  '$zindex-navbar-sticky': '1030',
  '$navbar-brand-padding-y': '.25rem',
  '$font-size-lg': '1.25rem',
  '$navbar-divider-padding-y': '.425rem',
  '$navbar-toggler-padding-y': '.5rem',
  '$navbar-toggler-padding-x': '.75rem',
  '$navbar-toggler-font-size': '1.25rem',
  '$border-width': '1px',
  '$navbar-toggler-border-radius': '.25rem',
  '$navbar-light-active-color': 'rgba(0,0,0,.9)',
  '$navbar-light-color': 'rgba(0,0,0,.5)',
  '$navbar-light-hover-color': 'rgba(0,0,0,.7)',
  '$navbar-light-toggler-border': 'rgba(0,0,0,.1)',
  '$navbar-light-toggler-bg': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(0,0,0,.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')',
  '$navbar-light-disabled-color': 'rgba(0, 0, 0, 0.3)',
  '$navbar-inverse-active-color': 'rgba(255,255,255,1)',
  '$navbar-inverse-color': 'rgba(255,255,255,.5)',
  '$navbar-inverse-hover-color': 'rgba(255,255,255,.75)',
  '$navbar-inverse-toggler-border': 'rgba(255,255,255,.1)',
  '$navbar-inverse-toggler-bg': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(255,255,255,.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')',
  '$navbar-inverse-disabled-color': 'rgba(255, 255, 255, 0.25)'
};
function navbar() {
  var $gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$18['$grid-breakpoints'];
  var $enableRounded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$18['$enable-rounded'];
  var $enableHoverMediaQuery = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$18['$enable-hover-media-query'];
  var $navbarPaddingY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps$18['$navbar-padding-y'];
  var $navbarPaddingX = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps$18['$navbar-padding-x'];
  var $zindexNavbar = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps$18['$zindex-navbar'];
  var $zindexNavbarFixed = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps$18['$zindex-navbar-fixed'];
  var $zindexNavbarSticky = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps$18['$zindex-navbar-sticky'];
  var $navbarBrandPaddingY = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps$18['$navbar-brand-padding-y'];
  var $fontSizeLg = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps$18['$font-size-lg'];
  var $navbarDividerPaddingY = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps$18['$navbar-divider-padding-y'];
  var $navbarTogglerPaddingY = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps$18['$navbar-toggler-padding-y'];
  var $navbarTogglerPaddingX = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps$18['$navbar-toggler-padding-x'];
  var $navbarTogglerFontSize = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps$18['$navbar-toggler-font-size'];
  var $borderWidth = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps$18['$border-width'];
  var $navbarTogglerBorderRadius = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps$18['$navbar-toggler-border-radius'];
  var $navbarLightActiveColor = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps$18['$navbar-light-active-color'];
  var $navbarLightColor = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps$18['$navbar-light-color'];
  var $navbarLightHoverColor = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps$18['$navbar-light-hover-color'];
  var $navbarLightTogglerBorder = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps$18['$navbar-light-toggler-border'];
  var $navbarLightDisabledColor = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps$18['$navbar-light-disabled-color'];
  var $navbarLightTogglerBg = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps$18['$navbar-light-toggler-bg'];
  var $navbarInverseActiveColor = arguments.length > 22 && arguments[22] !== undefined ? arguments[22] : defaultProps$18['$navbar-inverse-active-color'];
  var $navbarInverseColor = arguments.length > 23 && arguments[23] !== undefined ? arguments[23] : defaultProps$18['$navbar-inverse-color'];
  var $navbarInverseHoverColor = arguments.length > 24 && arguments[24] !== undefined ? arguments[24] : defaultProps$18['$navbar-inverse-hover-color'];
  var $navbarInverseTogglerBorder = arguments.length > 25 && arguments[25] !== undefined ? arguments[25] : defaultProps$18['$navbar-inverse-toggler-border'];
  var $navbarInverseTogglerBg = arguments.length > 26 && arguments[26] !== undefined ? arguments[26] : defaultProps$18['$navbar-inverse-toggler-bg'];
  var $navbarInverseDisabledColor = arguments.length > 27 && arguments[27] !== undefined ? arguments[27] : defaultProps$18['$navbar-inverse-disabled-color'];
  return '\n    /* Wrapper and base class\n\n     Provide a static navbar from which we expand to create full-width, fixed, and\n     other navbar variations.\n    */\n\n    &.navbar {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      padding: ' + $navbarPaddingY + ' ' + $navbarPaddingX + ';\n    }\n    \n    /*\n     Brand/project name\n    */\n\n    & .navbar-brand {\n      display: inline-block;\n      padding-top: ' + $navbarBrandPaddingY + ';\n      padding-bottom: ' + $navbarBrandPaddingY + ';\n      margin-right: ' + $navbarPaddingX + ';\n      font-size: ' + $fontSizeLg + ';\n      line-height: inherit;\n      white-space: nowrap;\n\n      ' + hoverFocus($enableHoverMediaQuery, 'text-decoration: none;') + '\n    }\n    \n    /* Navigation\n\n     Custom navbar navigation built on the base .nav styles.\n    */\n\n    &.navbar-nav,\n    & .navbar-nav {\n      display: flex;\n      flex-direction: column; /* cannot use inherit to get the .navbars value */\n      padding-left: 0;\n      margin-bottom: 0;\n      list-style: none;\n    \n      .nav-link {\n        padding-right: 0;\n        padding-left: 0;\n      }\n    }\n    \n    /* Navbar text  */\n\n    & .navbar-text {\n      display: inline-block;\n      padding-top:    .425rem;\n      padding-bottom: .425rem;\n    }\n\n\n    /* Navbar toggle\n\n     Custom button for toggling the .navbar-collapse, powered by the collapse\n     Bootstrap JavaScript plugin.\n    */\n\n    & .navbar-toggler {\n      align-self: flex-start; \n      padding: ' + $navbarTogglerPaddingY + ' ' + $navbarTogglerPaddingX + ';\n      font-size: ' + $navbarTogglerFontSize + ';\n      line-height: 1;\n      background: transparent;\n      border: ' + $borderWidth + ' solid transparent;\n      ' + borderRadius($enableRounded, $navbarTogglerBorderRadius) + '\n\n      ' + hoverFocus($enableHoverMediaQuery, 'text-decoration: none;') + '\n    }\n    \n    /* Keep as a separate element so folks can easily override it with another icon or image file as needed. */\n    & .navbar-toggler-icon {\n      display: inline-block;\n      width: 1.5em;\n      height: 1.5em;\n      vertical-align: middle;\n      content: "";\n      background: no-repeat center center;\n      background-size: 100% 100%;\n    }\n    \n    /* Use position on the toggler to prevent it from being auto placed as a flex item and allow easy placement. */\n    & .navbar-toggler-left {\n      position: absolute;\n      left: ' + $navbarPaddingX + ';\n    }\n    & .navbar-toggler-right {\n      position: absolute;\n      right: ' + $navbarPaddingX + ';\n    }\n\n    /* Dark links against a light background */\n    &.navbar-light {\n      .navbar-brand,\n      .navbar-toggler {\n        color: ' + $navbarLightActiveColor + ';\n\n        ' + hoverFocus($enableHoverMediaQuery, 'color: ' + $navbarLightActiveColor + ';') + '\n      }\n\n      .navbar-nav {\n        .nav-link {\n          color: ' + $navbarLightColor + ';\n\n\n          ' + hoverFocus($enableHoverMediaQuery, 'color: ' + $navbarLightHoverColor + ';') + '\n\n          &.disabled {\n            color: ' + $navbarLightDisabledColor + ';\n          }\n        }\n\n\n        .open > .nav-link,\n        .active > .nav-link,\n        .nav-link.open,\n        .nav-link.active {\n          color: ' + $navbarLightActiveColor + ';\n        }\n      }\n\n      .navbar-toggler {\n        border-color: ' + $navbarLightTogglerBorder + ';\n      }\n      .navbar-toggler-icon {\n        background-image: ' + $navbarLightTogglerBg + ';\n      }\n  \n      .navbar-text {\n        color: ' + $navbarLightColor + ';\n      }\n    }\n      \n\n    /* White links against a dark background */\n    &.navbar-inverse {\n      .navbar-brand,\n      .navbar-toggler {\n        color: ' + $navbarInverseActiveColor + ';\n\n        ' + hoverFocus($enableHoverMediaQuery, 'color: ' + $navbarInverseActiveColor + ';') + '\n      }\n\n      .navbar-nav {\n        .nav-link {\n          color: ' + $navbarInverseColor + ';\n\n          ' + hoverFocus($enableHoverMediaQuery, 'color: ' + $navbarInverseHoverColor + ';') + '\n          \n          &.disabled {\n            color: ' + $navbarInverseDisabledColor + ';\n          }\n        }\n\n        .open > .nav-link,\n        .active > .nav-link,\n        .nav-link.open,\n        .nav-link.active {\n          color: ' + $navbarInverseActiveColor + ';\n        }\n      }\n\n      .navbar-toggler {\n        border-color: ' + $navbarInverseTogglerBorder + ';\n      }\n      \n      .navbar-toggler-icon {\n        background-image: ' + $navbarInverseTogglerBg + ';\n      }\n    \n      .navbar-text {\n        color: ' + $navbarInverseColor + ';\n      }\n    }\n    \n\n    ' + navbarToggleable($gridBreakpoints) + '\n    \n    /* DELETED IN LATEST BOOTSTRAP VERSINO */\n    \n    /* Navbar alignment options\n\n     Display the navbar across the entirety of the page or fixed it to the top or\n     bottom of the page.\n    */\n\n    /* A static, full width modifier with no rounded corners. */\n    &.navbar-full {\n      z-index: ' + $zindexNavbar + ';\n\n      ' + mediaBreakpointUp('sm', $gridBreakpoints, borderRadius($enableRounded, '0')) + '\n    }\n\n      /* Fix the top/bottom navbars when screen real estate supports it */\n    &.navbar-fixed-top,\n    &.navbar-fixed-bottom {\n      position: fixed;\n      right: 0;\n      left: 0;\n      z-index: ' + $zindexNavbarFixed + ';\n\n      /*  Undo the rounded corners */\n      ' + mediaBreakpointUp('sm', $gridBreakpoints, borderRadius($enableRounded, '0')) + '\n    }\n\n    &.navbar-fixed-top {\n      top: 0;\n    }\n\n    &.navbar-fixed-bottom {\n      bottom: 0;\n    }\n\n    /* position sticky does not seem to be working AJT*/\n\n    &.navbar-sticky-top {\n      position: sticky;\n      top: 0;\n      z-index: ' + $zindexNavbarSticky + ';\n      width: 100%;\n\n        /*  Undo the rounded corners */\n      ' + mediaBreakpointUp('sm', $gridBreakpoints, borderRadius($enableRounded, '0')) + '\n    }\n\n    & .navbar-divider {\n      float: left;\n      width: ' + $borderWidth + ';\n      padding-top: ' + $navbarDividerPaddingY + ';\n      padding-bottom: ' + $navbarDividerPaddingY + ';\n      margin-right: ' + $navbarPaddingX + ';\n      margin-left:  ' + $navbarPaddingX + ';\n      overflow: hidden;\n\n      &::before {\n        content: \'\0a0\';\n      }\n    }\n  ';
}

var defaultProps$20 = {
  '$spacer-y': '1rem'
};
function navDivider() {
  var spacerY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$20['$spacer-y'];
  var dividerColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#e5e5e5';
  var marginY = '' + index$1.rmUnit(spacerY, index$1.UNIT.REM) / 2 + index$1.UNIT.REM;
  return '\n    height: 1px;\n    margin: calc(' + marginY + ' / 2) 0;\n    overflow: hidden;\n    background-color: ' + dividerColor + ';\n  ';
}

var defaultProps$22 = bsTheme;
function paginationSize() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$22['$enable-rounded'];
  var paddingY = arguments[1];
  var paddingX = arguments[2];
  var fontSize = arguments[3];
  var borderRadiusPagination = arguments[4];
  return paginationSizeBootstrap(enableRounded, paddingY, paddingX, fontSize, null, borderRadiusPagination);
}
function paginationSizeBootstrap() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$22['$enable-rounded'];
  var paddingY = arguments[1];
  var paddingX = arguments[2];
  var fontSize = arguments[3];
  var borderRadiusPagination = arguments[5];
  return '\n    .page-link {\n      padding: ' + paddingY + ' ' + paddingX + ';\n      font-size: ' + fontSize + ';\n    }\n  \n    .page-item {\n      &:first-child {\n        .page-link {\n          ' + borderLeftRadius(enableRounded, borderRadiusPagination) + '\n        }\n      }\n      &:last-child {\n        .page-link {\n          ' + borderRightRadius(enableRounded, borderRadiusPagination) + '\n        }\n      }\n    }\n  ';
}
function pagination($enableRounded, $enableHoverMediaQuery, $borderRadius, $paginationActiveColor, $paginationActiveBg, $paginationActiveBorder, $paginationDisabledColor, $cursorDisabled, $paginationDisabledBg, $paginationDisabledBorder, $paginationPaddingY, $paginationPaddingX, $paginationLineHeight, $paginationColor, $paginationBg, $paginationBorderWidth, $paginationBorderColor, $paginationHoverColor, $paginationHoverBg, $paginationHoverBorder, $paginationPaddingYLg, $paginationPaddingXLg, $fontSizeLg, $lineHeightLg, $borderRadiusLg, $paginationPaddingYSm, $paginationPaddingXSm, $fontSizeSm, $lineHeightSm, $borderRadiusSm) {
  return '\n  &.pagination {\n    display: flex;\n    padding-left: 0;\n    list-style: none; \n    ' + borderRadius($enableRounded) + '\n  }\n  \n  & .page-item {\n    &:first-child {\n      .page-link {\n        margin-left: 0;\n        ' + borderLeftRadius($enableRounded, $borderRadius) + '\n      }\n    }\n    &:last-child {\n      .page-link {\n      ' + borderRightRadius($enableRounded, $borderRadius) + '\n      }\n    }\n  \n    &.active .page-link {\n      z-index: 2;\n      color: ' + $paginationActiveColor + ';\n      background-color: ' + $paginationActiveBg + ';\n      border-color: ' + $paginationActiveBorder + ';\n    }\n  \n    &.disabled .page-link {\n      color: ' + $paginationDisabledColor + ';\n      pointer-events: none;\n      cursor: ' + $cursorDisabled + ';\n      background-color: ' + $paginationDisabledBg + ';\n      border-color: ' + $paginationDisabledBorder + ';\n    }\n  }\n  \n  & .page-link {\n    position: relative;\n    display: block;\n    padding: ' + $paginationPaddingY + ' ' + $paginationPaddingX + ';\n    margin-left: -1px;\n    line-height: ' + $paginationLineHeight + ';\n    color: ' + $paginationColor + ';\n    background-color: ' + $paginationBg + ';\n    border: ' + $paginationBorderWidth + ' solid ' + $paginationBorderColor + ';\n    \n    ' + hoverFocus($enableHoverMediaQuery, '\n        color: ' + $paginationHoverColor + ';\n        text-decoration: none;\n        background-color: ' + $paginationHoverBg + ';\n        border-color: ' + $paginationHoverBorder + ';\n      ') + '\n  }\n  \n  /* Sizing */\n  &.pagination-lg {\n    ' + paginationSize($enableRounded, $paginationPaddingYLg, $paginationPaddingXLg, $fontSizeLg, $lineHeightLg, $borderRadiusLg) + '\n  }\n  \n  &.pagination-sm {\n    ' + paginationSize($enableRounded, $paginationPaddingYSm, $paginationPaddingXSm, $fontSizeSm, $lineHeightSm, $borderRadiusSm) + '\n  }\n  ';
}

function srOnly() {
  return "\n    position: absolute !important;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0,0,0,0);\n    border: 0;\n  ";
}
function srOnlyFocusable() {
  return "\n    &:active,\n    &:focus {\n      position: static;\n      width: auto;\n      height: auto;\n      margin: 0;\n      overflow: visible;\n      clip: auto;\n    }\n  ";
}

function size(width) {
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
  return "\n    width: " + width + ";\n    height: " + height + ";\n  ";
}

function tableRowVariant(state, background) {
  var hoverBackground = color(background).darken(0.05).toString();
  return '\n  /* Exact selectors below required to override \'.table-striped\' and prevent */\n  /* inheritance to nested tables. */\n  & .table-' + state + ' {\n    &,\n    > th,\n    > td {\n      background-color: ' + background + ';\n    }\n  }\n\n  /* Hover states for \'.table-hover\' */\n  /* Note: this is not available for cells or rows within \'thead\' or \'tfoot\'. */\n  &.table-hover {\n\n    .table-' + state + ' {\n      ' + hover('\n        background-color: ' + hoverBackground + ';\n\n        > td,\n        > th {\n          background-color: ' + hoverBackground + ';\n        }\n      ') + '\n    }\n  }\n  ';
}

var defaultProps$24 = {
  '$enable-hover-media-query': false
};
function textEmphasisVariant() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$24['$enable-hover-media-query'];
  var parent = arguments[1];
  var textColor = arguments[2];
  return '\n    ' + parent + ' {\n      color: ' + textColor + ' !important;\n    }\n    a' + parent + ' {\n      ' + hoverFocus(enableHoverMediaQuery, 'color: ' + color(textColor).darken(0.20).rgb() + ' !important;') + '\n    }\n  ';
}

function textHide() {
  return "\n    font: 0/0 a;\n    color: transparent;\n    text-shadow: none;\n    background-color: transparent;\n    border: 0;\n  ";
}

function textTruncate() {
  return "\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  ";
}

var defaultProps$25 = {
  '$headings-margin-bottom': '0.5rem',
  '$headings-font-family': 'inherit',
  '$headings-font-weight': '500',
  '$headings-line-height': '1.1',
  '$headings-color': 'inherit',
  '$display1-size': '6rem',
  '$display2-size': '5.5rem',
  '$display3-size': '4.5rem',
  '$display4-size': '3.5rem',
  '$display1-weight': '300',
  '$display2-weight': '300',
  '$display3-weight': '300',
  '$display4-weight': '300'
};
function typography() {
  var $headingsMarginBottom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$25['$headings-margin-bottom'];
  var $headingsFontFamily = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$25['$headings-font-family'];
  var $headingsFontWeight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$25['$headings-font-weight'];
  var $headingsLineHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps$25['$headings-line-height'];
  var $headingsColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps$25['$headings-color'];
  var $display1Size = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps$25['$display1-size'];
  var $display2Size = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps$25['$display2-size'];
  var $display3Size = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps$25['$display3-size'];
  var $display4Size = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps$25['$display4-size'];
  var $display1Weight = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps$25['$display1-weight'];
  var $display2Weight = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps$25['$display2-weight'];
  var $display3Weight = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps$25['$display3-weight'];
  var $display4Weight = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps$25['$display4-weight'];
  return '\n    margin-bottom: ' + $headingsMarginBottom + ';\n    font-family: ' + $headingsFontFamily + ';\n    font-weight: ' + $headingsFontWeight + ';\n    line-height: ' + $headingsLineHeight + ';\n    color: ' + $headingsColor + ';\n    \n    /* Type Scss */\n\n    &.display-1 {\n      font-size: ' + $display1Size + ';\n      font-weight: ' + $display1Weight + ';\n      line-height: ' + $headingsLineHeight + ';\n\n    }\n    \n    &.display-2 {\n      font-size: ' + $display2Size + ';\n      font-weight: ' + $display2Weight + ';\n      line-height: ' + $headingsLineHeight + ';\n    }\n    \n    &.display-3 {\n      font-size: ' + $display3Size + ';\n      font-weight: ' + $display3Weight + ';\n      line-height: ' + $headingsLineHeight + ';\n    }\n    \n    &.display-4 {\n      font-size: ' + $display4Size + ';\n      font-weight: ' + $display4Weight + ';\n        line-height: ' + $headingsLineHeight + ';\n    }\n  ';
}

function invisible(visibility) {
  return "\n    visibility: " + visibility + " !important;\n  ";
}

function getAlignUtilities() {
  return "\n   " + alignBaseline() + "\n   " + alignTop() + "\n   " + alignMiddle() + "\n   " + alignBottom() + "\n   " + alignTextBottom() + "\n   " + alignTextTop() + "\n  ";
}
function alignBaseline() {
  return "\n    .align-baseline { vertical-align: baseline !important; } /* Browser default */\n  ";
}
function alignTop() {
  return "\n    .align-top { vertical-align: top !important; }\n  ";
}
function alignMiddle() {
  return "\n    .align-middle { vertical-align: middle !important; }\n  ";
}
function alignBottom() {
  return "\n    .align-bottom { vertical-align: bottom !important; }\n  ";
}
function alignTextBottom() {
  return "\n    .align-text-bottom { vertical-align: text-bottom !important; }\n  ";
}
function alignTextTop() {
  return "\n    .align-text-top { vertical-align: text-top !important; }\n  ";
}
var alignUtils = {
  getAlignUtilities: getAlignUtilities,
  alignBaseline: alignBaseline,
  alignTop: alignTop,
  alignMiddle: alignMiddle,
  alignBottom: alignBottom,
  alignTextBottom: alignTextBottom,
  alignTextTop: alignTextTop
};

var defaultProps$26 = {
  '$enable-hover-media-query': false,
  '$brand-primary': '#0275d8',
  '$brand-success': '#5cb85c',
  '$brand-info': '#5bc0de',
  '$brand-warning': '#f0ad4e',
  '$brand-danger': '#d9543f',
  '$brand-inverse': '#373a3c',
  '$gray-lightest': '#f7f7f9'
};
function getBackgroundUtilities() {
  var $enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$26['$enable-hover-media-query'];
  var $brandPrimary = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$26['$brand-primary'];
  var $brandSuccess = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$26['$brand-success'];
  var $brandInfo = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps$26['$brand-info'];
  var $brandWarning = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps$26['$brand-warning'];
  var $brandDanger = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps$26['$brand-danger'];
  var $brandInverse = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps$26['$brand-inverse'];
  var $grayLightest = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps$26['$gray-lightest'];
  return '\n    ' + bgVariant($enableHoverMediaQuery, '.bg-primary', $brandPrimary) + '\n    ' + bgVariant($enableHoverMediaQuery, '.bg-success', $brandSuccess) + '\n    ' + bgVariant($enableHoverMediaQuery, '.bg-info', $brandInfo) + '\n    ' + bgVariant($enableHoverMediaQuery, '.bg-warning', $brandWarning) + '\n    ' + bgVariant($enableHoverMediaQuery, '.bg-danger', $brandDanger) + '\n    ' + bgVariant($enableHoverMediaQuery, '.bg-inverse', $brandInverse) + '\n    ' + bgVariant($enableHoverMediaQuery, '.bg-faded', $grayLightest) + '\n  ';
}
var bgPrimary = function bgPrimary($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$26['$brand-primary'];
  return bgVariant($enableHoverMediaQuery, '.bg-primary', bgColor);
};
var bgSuccess = function bgSuccess($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$26['$brand-success'];
  return bgVariant($enableHoverMediaQuery, '.bg-success', bgColor);
};
var bgInfo = function bgInfo($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$26['$brand-info'];
  return bgVariant($enableHoverMediaQuery, '.bg-info', bgColor);
};
var bgWarning = function bgWarning($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$26['$brand-warning'];
  return bgVariant($enableHoverMediaQuery, '.bg-warning', bgColor);
};
var bgDanger = function bgDanger($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$26['$brand-danger'];
  return bgVariant($enableHoverMediaQuery, '.bg-danger', bgColor);
};
var bgInverse = function bgInverse($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$26['$brand-inverse'];
  return bgVariant($enableHoverMediaQuery, '.bg-inverse', bgColor);
};
var bgFaded = function bgFaded($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$26['$gray-lightest'];
  return bgVariant($enableHoverMediaQuery, '.bg-faded', bgColor);
};
var backgroundUtils = {
  defaultProps: defaultProps$26,
  getBackgroundUtilities: getBackgroundUtilities,
  bgFaded: bgFaded,
  bgPrimary: bgPrimary,
  bgSuccess: bgSuccess,
  bgInfo: bgInfo,
  bgWarning: bgWarning,
  bgDanger: bgDanger,
  bgInverse: bgInverse
};

var defaultProps$27 = {
  '$border-radius': '.25rem',
  '$enable-rounded': true
};
function getBordersUtilities() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$27['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$27['$border-radius'];
  return '\n    ' + rounded(enableRounded, radius) + '\n    ' + roundedTop(enableRounded, radius) + '\n    ' + roundedRight(enableRounded, radius) + '\n    ' + roundedBottom(enableRounded, radius) + '\n    ' + roundedLeft(enableRounded, radius) + '\n    ' + roundedCircle() + '\n    ' + resetRounded() + '\n    ' + resetRoundedTop() + '\n    ' + resetRoundedRight() + '\n    ' + resetRoundedLeft() + '\n    ' + resetRoundedBottom() + '\n    ' + resetBorder() + '\n    ' + resetBorderTop() + '\n    ' + resetBorderRight() + '\n    ' + resetBorderLeft() + '\n    ' + resetBorderBottom() + '\n  ';
}
function rounded() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$27['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$27['$border-radius'];
  return '\n    .rounded {\n      ' + borderRadius(enableRounded, radius) + '\n    }\n  ';
}
function roundedTop() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$27['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$27['$border-radius'];
  return '\n    .rounded-top {\n      ' + borderTopRadius(enableRounded, radius) + '\n    }\n  ';
}
function roundedRight() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$27['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$27['$border-radius'];
  return '\n    .rounded-right {\n      ' + borderRightRadius(enableRounded, radius) + '\n    }\n  ';
}
function roundedBottom() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$27['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$27['$border-radius'];
  return '\n    .rounded-bottom {\n      ' + borderBottomRadius(enableRounded, radius) + '\n    }\n  ';
}
function roundedLeft() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$27['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$27['$border-radius'];
  return '\n    .rounded-left {\n      ' + borderLeftRadius(enableRounded, radius) + '\n    }\n  ';
}
function roundedCircle() {
  return '\n    .rounded-circle {\n      border-radius: 50%;\n    }\n  ';
}
function resetBorder() {
  return '\n    .border-0 {\n      border: 0 !important;\n    }\n  ';
}
function resetBorderTop() {
  return '\n    .border-top-0 {\n      border-top: 0 !important;\n    }\n  ';
}
function resetBorderRight() {
  return '\n    .border-right-0 {\n      border-right: 0 !important;\n    }\n  ';
}
function resetBorderBottom() {
  return '\n    .border-bottom-0 {\n      border-bottom: 0 !important;\n    }\n  ';
}
function resetBorderLeft() {
  return '\n    .border-left-0 {\n      border-left: 0 !important;\n    }\n  ';
}
function resetRounded() {
  return '\n    .rounded-0 {\n      border-radius: 0 !important;\n    }\n  ';
}
function resetRoundedTop() {
  return '\n    .rounded-top-0 {\n      border-top-left-radius: 0 !important;\n      border-top-right-radius: 0 !important;\n    }\n  ';
}
function resetRoundedBottom() {
  return '\n    .rounded-bottom-0 {\n      border-bottom-left-radius: 0 !important;\n      border-bottom-right-radius: 0 !important;\n    }\n  ';
}
function resetRoundedLeft() {
  return '\n    .rounded-left-0 {\n      border-bottom-left-radius: 0 !important;\n      border-top-left-radius: 0 !important;\n    }\n  ';
}
function resetRoundedRight() {
  return '\n    .rounded-right-0 {\n      border-bottom-right-radius: 0 !important;\n      border-top-right-radius: 0 !important;\n    }\n  ';
}
var bordersUtils = {
  defaultProps: defaultProps$27,
  getBordersUtilities: getBordersUtilities,
  rounded: rounded,
  roundedTop: roundedTop,
  roundedRight: roundedRight,
  roundedBottom: roundedBottom,
  roundedLeft: roundedLeft,
  roundedCircle: roundedCircle
};

function getClearfixUtilities() {
  return '\n   ' + getClearfix() + '\n  ';
}
function getClearfix() {
  return '\n    .clearfix {\n      ' + clearfix() + '\n    }\n  ';
}
var clearfixUtils = {
  getClearfixUtilities: getClearfixUtilities,
  getClearfix: getClearfix
};

function getCursorUtilities() {
  return "\n    .cursor-alias {\n      cursor: alias;\n    }\n    \n    .cursor-all-scroll {\n      cursor: all-scroll;\n    }\n    \n    .cursor-auto {\n      cursor: auto;\n    }\n    \n    .cursor-cell {\n      cursor: cell;\n    }\n    \n    .cursor-context-menu {\n      cursor: context-menu;\n    }\n    \n    .cursor-col-resize {\n      cursor: col-resize;\n    }\n    \n    .cursor-copy {\n      cursor: copy;\n    }\n    \n    .cursor-crosshair {\n      cursor: crosshair;\n    }\n    \n    .cursor-default {\n      cursor: default;\n    }\n    \n    .cursor-e-resize {\n      cursor: e-resize;\n    }\n    \n    .cursor-ew-resize {\n      cursor: ew-resize;\n    }\n    \n    .cursor-grab {\n      cursor: grab;\n    }\n    \n    .cursor-grabbing {\n      cursor: grabbing;\n    }\n    \n    .cursor-help {\n      cursor: help;\n    }\n    \n    .cursor-move {\n      cursor: move;\n    }\n    \n    .cursor-n-resize {\n      cursor: n-resize;\n    }\n    \n    .cursor-ne-resize {\n      cursor: ne-resize;\n    }\n    \n    .cursor-nesw-resize {\n      cursor: nesw-resize;\n    }\n    \n    .cursor-ns-resize {\n      cursor: ns-resize;\n    }\n    \n    .cursor-nw-resize {\n      cursor: nw-resize;\n    }\n    \n    .cursor-nwse-resize {\n      cursor: nwse-resize;\n    }\n    \n    .cursor-no-drop {\n      cursor: no-drop;\n    }\n    \n    .cursor-none {\n      cursor: none;\n    }\n    \n    .cursor-not-allowed {\n      cursor: not-allowed;\n    }\n    \n    .cursor-pointer {\n      cursor: pointer;\n    }\n    \n    .cursor-progress {\n      cursor: progress;\n    }\n    \n    .cursor-row-resize {\n      cursor: row-resize;\n    }\n    \n    .cursor-s-resize {\n      cursor: s-resize;\n    }\n    \n    .cursor-se-resize {\n      cursor: se-resize;\n    }\n    \n    .cursor-sw-resize {\n      cursor: sw-resize;\n    }\n    \n    .cursor-text {\n      cursor: text;\n    }\n    \n    .cursor-vertical-text {\n      cursor: vertical-text;\n    }\n    \n    .cursor-w-resize {\n      cursor: w-resize;\n    }\n    \n    .cursor-wait {\n      cursor: wait;\n    }\n    \n    .cursor-zoom-in {\n      cursor: zoom-in;\n    }\n    \n    .cursor-zoom-out {\n      cursor: zoom-out;\n    }\n    \n    .cursor-initial {\n      cursor: initial;\n    }\n  ";
}
var cursorUtils = {
  getCursorUtilities: getCursorUtilities
};

var defaultProps$28 = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};
function getDisplayUtilities() {
  var gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$28['$grid-breakpoints'];
  var utilityList = [];
  Object.keys(gridBreakpoints).forEach(function (breakpoint) {
    var infix = breakpointInfix(breakpoint, gridBreakpoints);
    utilityList.push('\n      ' + mediaBreakpointUp(breakpoint, gridBreakpoints, '\n        .d' + infix + '-none { display: none !important; }\n        .d' + infix + '-inline { display: inline !important; }\n        .d' + infix + '-inline-block { display: inline-block !important; }\n        .d' + infix + '-block { display: block !important; }\n        .d' + infix + '-table { display: table !important; }\n        .d' + infix + '-table-cell { display: table-cell !important; }\n        .d' + infix + '-flex { display: flex !important; }\n        .d' + infix + '-inline-flex { display: inline-flex !important; }\n      ') + '\n    ');
  });
  utilityList.push('\n    .d-print-block {\n      display: none !important;\n    \n      @media print {\n        display: block !important;\n      }\n    }\n    \n    .d-print-inline {\n      display: none !important;\n    \n      @media print {\n        display: inline !important;\n      }\n    }\n    \n    .d-print-inline-block {\n      display: none !important;\n    \n      @media print {\n        display: inline-block !important;\n      }\n    }\n    \n    .d-print-none {\n      @media print {\n        display: none !important;\n      }\n    }\n  ');
  return utilityList.join('\n');
}
var displayUtils = {
  defaultProps: defaultProps$28,
  getDisplayUtilities: getDisplayUtilities
};

var defaultProps$29 = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};
function getFlexUtilities() {
  var gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$29['$grid-breakpoints'];
  var flexUtilityList = [];
  Object.keys(gridBreakpoints).forEach(function (breakpoint) {
    var infix = breakpointInfix(breakpoint, gridBreakpoints);
    flexUtilityList.push('\n      /* Flex column reordering */\n      ' + mediaBreakpointUp(breakpoint, gridBreakpoints, '\n        .flex' + infix + '-first { order: -1; }\n        .flex' + infix + '-last { order: 1; }\n        .flex' + infix + '-unordered { order: 0; }\n      ') + '\n  \n      /* Flex direction */ \n      ' + mediaBreakpointUp(breakpoint, gridBreakpoints, '\n        .flex' + infix + '-row            { flex-direction: row !important; }\n        .flex' + infix + '-column         { flex-direction: column !important; }\n        .flex' + infix + '-row-reverse    { flex-direction: row-reverse !important; }\n        .flex' + infix + '-column-reverse { flex-direction: column-reverse !important; }\n      ') + '\n      \n      /* Flex wrap */ \n      ' + mediaBreakpointUp(breakpoint, gridBreakpoints, '\n        .flex' + infix + '-wrap         { flex-wrap: wrap !important; }\n        .flex' + infix + '-nowrap       { flex-wrap: nowrap !important; }\n        .flex' + infix + '-wrap-reverse { flex-wrap: wrap-reverse !important; }\n      ') + '\n      /* Flex justify-content */ \n      ' + mediaBreakpointUp(breakpoint, gridBreakpoints, '\n        .justify-content' + infix + '-start   { justify-content: flex-start !important; }\n        .justify-content' + infix + '-end     { justify-content: flex-end !important; }\n        .justify-content' + infix + '-center  { justify-content: center !important; }\n        .justify-content' + infix + '-between { justify-content: space-between !important; }\n        .justify-content' + infix + '-around  { justify-content: space-around !important; }\n      ') + '\n      /* Flex align-items */ \n      ' + mediaBreakpointUp(breakpoint, gridBreakpoints, '\n        .align-items' + infix + '-start    { align-items: flex-start !important; }\n        .align-items' + infix + '-end      { align-items: flex-end !important; }\n        .align-items' + infix + '-center   { align-items: center !important; }\n        .align-items' + infix + '-baseline { align-items: baseline !important; }\n        .align-items' + infix + '-stretch  { align-items: stretch !important; }\n      ') + '\n      /* Flex align-content */ \n      ' + mediaBreakpointUp(breakpoint, gridBreakpoints, '\n        .align-content' + infix + '-start   { align-content: flex-start !important; }\n        .align-content' + infix + '-end     { align-content: flex-end !important; }\n        .align-content' + infix + '-center  { align-content: center !important; }\n        .align-content' + infix + '-between { align-content: space-between !important; }\n        .align-content' + infix + '-around  { align-content: space-around !important; }\n        .align-content' + infix + '-stretch { align-content: stretch !important; }\n      ') + '\n      /* Flex align-self */ \n      ' + mediaBreakpointUp(breakpoint, gridBreakpoints, '\n        .align-self' + infix + '-auto     { align-self: auto !important; }\n        .align-self' + infix + '-start    { align-self: flex-start !important; }\n        .align-self' + infix + '-end      { align-self: flex-end !important; }\n        .align-self' + infix + '-center   { align-self: center !important; }\n        .align-self' + infix + '-baseline { align-self: baseline !important; }\n        .align-self' + infix + '-stretch  { align-self: stretch !important; }\n      ') + ' \n    ');
  });
  return flexUtilityList.join('\n');
}
var flexUtils = {
  defaultProps: defaultProps$29,
  getFlexUtilities: getFlexUtilities
};

var defaultProps$30 = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};
function getFloatUtilities() {
  var gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$30['$grid-breakpoints'];
  var floatUtilityList = [];
  Object.keys(gridBreakpoints).forEach(function (breakpoint) {
    var infix = breakpointInfix(breakpoint, gridBreakpoints);
    var floatUtility = mediaBreakpointUp(breakpoint, gridBreakpoints, '\n      .float' + infix + '-left {\n        ' + floatLeft() + '\n      }\n      .float' + infix + '-right {\n        ' + floatRight() + '\n      }\n      .float' + infix + '-none {\n        ' + floatNone() + '\n      }\n    ');
    floatUtilityList.push(floatUtility);
  });
  return floatUtilityList.join('\n');
}
var floatUtils = {
  defaultProps: defaultProps$30,
  getFloatUtilities: getFloatUtilities
};

var defaultProps$31 = {
  '$zindex-fixed': '1030',
  '$zindex-sticky': '1030'
};
function getPositionUtilities() {
  var zindexFixed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$31['$zindex-fixed'];
  var zindexSticky = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$31['$zindex-sticky'];
  return '\n    ' + fixedTop(zindexFixed) + '\n    ' + fixedBottom(zindexFixed) + '\n    ' + stickTop(zindexSticky) + '\n  ';
}
function fixedTop() {
  var zindexFixed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$31['$zindex-fixed'];
  return '\n  .fixed-top {\n    position: fixed !important;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: ' + zindexFixed + ';\n  }\n  ';
}
function fixedBottom() {
  var zindexFixed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$31['$zindex-fixed'];
  return '\n    .fixed-bottom {\n      position: fixed !important;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: ' + zindexFixed + ';\n    }\n  ';
}
function stickTop() {
  var zindexSticky = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$31['$zindex-sticky'];
  return '\n    .sticky-top {\n      position: sticky !important;\n      top: 0;\n      z-index: ' + zindexSticky + ';\n    }\n  ';
}
var positionUtils = {
  defaultProps: defaultProps$31,
  getPositionUtilities: getPositionUtilities,
  fixedTop: fixedTop,
  fixedBottom: fixedBottom,
  stickTop: stickTop
};

function getGlobalStyles() {
  var fontFamilyBase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : bsTheme['$font-family-base'];
  var fontSizeBase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : bsTheme['$font-size-base'];
  var fontWeightBase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : bsTheme['$font-weight-base'];
  var lineHeightBase = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : bsTheme['$line-height-base'];
  var bodyColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : bsTheme['$body-color'];
  var bodyBg = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : bsTheme['$body-bg'];
  return '\n    html {\n      ' + html() + '\n    }\n    *,\n    *::before,\n    *::after {\n      ' + boxSizing() + '\n    }\n    @-ms-viewport { \n      ' + ie10FixViewport() + ' \n    }\n    body {\n      ' + body(fontFamilyBase, fontSizeBase, fontWeightBase, lineHeightBase, bodyColor, bodyBg) + ' \n      ' + bodyUtils() + '\n    }\n    [tabindex="-1"]:focus {\n      ' + tabIndex() + '\n    }\n    svg:not(:root) {\n      ' + svg() + '\n    }\n    [hidden] {\n      ' + ie10FixHidden() + '\n    }\n    ::-webkit-file-upload-button {\n      ' + webkitFileUploadButton() + '\n    }\n  ';
}
function html() {
  return '\n    box-sizing: border-box;\n    font-family: sans-serif;\n    line-height: 1.15;\n    -ms-text-size-adjust: 100%;\n    -webkit-text-size-adjust: 100%;\n    -ms-overflow-style: scrollbar;\n    -webkit-tap-highlight-color: rgba(0,0,0,0);\n  ';
}
function boxSizing() {
  return '\n    box-sizing: inherit;\n  ';
}
function ie10FixViewport() {
  return '\n    width: device-width;\n  ';
}
function body() {
  var fontFamilyBase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : bsTheme['$font-family-base'];
  var fontSizeBase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : bsTheme['$font-size-base'];
  var fontWeightBase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : bsTheme['$font-weight-base'];
  var lineHeightBase = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : bsTheme['$line-height-base'];
  var bodyColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : bsTheme['$body-color'];
  var bodyBg = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : bsTheme['$body-bg'];
  return '\n    margin: 0;\n    font-family: ' + fontFamilyBase + ';\n    font-size: ' + fontSizeBase + ';\n    font-weight: ' + fontWeightBase + ';\n    line-height: ' + lineHeightBase + ';\n    color: ' + bodyColor + ';\n    background-color: ' + bodyBg + ';\n  ';
}
function bodyUtils() {
  return '\n    &.overflow {\n      overflow: hidden;\n    }\n  ';
}
function tabIndex() {
  return '\n    outline: none !important;\n  ';
}
function svg() {
  return '\n    overflow: hidden;\n  ';
}
function ie10FixHidden() {
  return '\n    display: none !important;\n  ';
}
function webkitFileUploadButton() {
  return '\n    font: inherit;\n    -webkit-appearance: button;\n  ';
}
var rebootUtils = {
  html: html,
  boxSizing: boxSizing,
  ie10FixViewport: ie10FixViewport,
  body: body,
  bodyUtils: bodyUtils,
  tabIndex: tabIndex,
  svg: svg,
  ie10FixHidden: ie10FixHidden,
  getGlobalStyles: getGlobalStyles,
  webkitFileUploadButton: webkitFileUploadButton
};

function getScreenReadersUtilities() {
  return '\n    .sr-only {\n      ' + srOnly() + '\n    }\n    \n    .sr-only-focusable {\n      ' + srOnlyFocusable() + '\n    }\n  ';
}
var screenreadersUtils = {
  getScreenReadersUtilities: getScreenReadersUtilities
};

var defaultProps$32 = {
  $sizes: {
    25: '25%',
    50: '50%',
    75: '75%',
    100: '100%'
  }
};
function getSizingUtilities() {
  var sizes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$32['$sizes'];
  var abbrev = {
    width: 'w',
    height: 'h'
  };
  var sizingList = [];
  Object.keys(abbrev).forEach(function (cssProp) {
    Object.keys(sizes).forEach(function (size) {
      sizingList.push('\n        .' + abbrev[cssProp] + '-' + size + ' { ' + cssProp + ': ' + sizes[size] + ' !important; }\n      ');
    });
  });
  return '\n    ' + sizingList.join('\n') + '\n    .mw-100 { max-width: 100% !important; }\n    .mh-100 { max-height: 100% !important; }\n  ';
}
var sizingUtils = {
  defaultProps: defaultProps$32,
  getSizingUtilities: getSizingUtilities
};

var defaultProps$33 = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  '$zindex-navbar-fixed': '1030',
  '$spacers': {
    0: {
      x: 0,
      y: 0
    },
    1: {
      x: '0.25rem',
      y: '0.25rem'
    },
    2: {
      x: '0.5rem',
      y: '0.5rem'
    },
    3: {
      x: '1rem',
      y: '1rem'
    },
    4: {
      x: '1.5rem',
      y: '1.5rem'
    },
    5: {
      x: '3rem',
      y: '3rem'
    }
  }
};
function getSpacingUtilities()
{
  var gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$33['$grid-breakpoints'];
  var spacers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$33['$spacers'];
  var abbrevs = {
    margin: 'm',
    padding: 'p'
  };
  var spacingUtilityList = [];
  var infixList = [];
  Object.keys(gridBreakpoints).forEach(function (breakpoint) {
    var infix = breakpointInfix(breakpoint, gridBreakpoints);
    infixList.push(infix);
    Object.keys(abbrevs).forEach(function (prop) {
      var abbrev = abbrevs[prop];
      Object.keys(spacers).forEach(function (size) {
        var lengths = spacers[size];
        spacingUtilityList.push(mediaBreakpointUp(breakpoint, gridBreakpoints, '\n          .' + abbrev + infix + '-' + size + ' { ' + prop + ':        ' + lengths.y + ' ' + lengths.x + ' !important; } /* a = All sides */\n          .' + abbrev + 't' + infix + '-' + size + ' { ' + prop + '-top:    ' + lengths.y + ' !important; }\n          .' + abbrev + 'r' + infix + '-' + size + ' { ' + prop + '-right:  ' + lengths.x + ' !important; }\n          .' + abbrev + 'b' + infix + '-' + size + ' { ' + prop + '-bottom: ' + lengths.y + ' !important; }\n          .' + abbrev + 'l' + infix + '-' + size + ' { ' + prop + '-left:   ' + lengths.x + ' !important; }\n          .' + abbrev + 'x' + infix + '-' + size + ' {\n            ' + prop + '-right:  ' + lengths.x + ' !important;\n            ' + prop + '-left:   ' + lengths.x + ' !important;\n          }\n          .' + abbrev + 'y' + infix + '-' + size + ' {\n            ' + prop + '-top:    ' + lengths.y + ' !important;\n            ' + prop + '-bottom: ' + lengths.y + ' !important;\n          }\n        '));
      });
    });
  });
  var infixUtilityList = infixList.map(function (infix) {
    return '\n    .m' + infix + '-auto  { margin:        auto !important; }\n    .mt' + infix + '-auto { margin-top:    auto !important; }\n    .mr' + infix + '-auto { margin-right:  auto !important; }\n    .mb' + infix + '-auto { margin-bottom: auto !important; }\n    .ml' + infix + '-auto { margin-left:   auto !important; }\n    .mx' + infix + '-auto {\n      margin-right: auto !important;\n      margin-left:  auto !important;\n    }\n    .my' + infix + '-auto {\n      margin-top:    auto !important;\n      margin-bottom: auto !important;\n    }\n  ';
  });
  return '\n    ' + infixUtilityList.join('\n') + '\n    ' + spacingUtilityList.join('\n') + '\n  ';
}
var spacingUtils = {
  defaultProps: defaultProps$33,
  getSpacingUtilities: getSpacingUtilities
};

function parseTransition(transitions) {
  if (!transitions) {
    return [];
  }
  var sample = transitions;
  var RULE_DELIMITER = ',';
  var PROPERTY_DELIMITER = ' ';
  var MS_UNIT = 'ms';
  var TMP_STR = 'TMP';
  var DEFAULT_PROPERTY = 'all';
  var DEFAULT_DURATION = 0;
  var DEFAULT_TIMING_FUNCTION = 'ease';
  var DEFAULT_DELAY = 0;
  var BEZIER_REGEX = /cubic-bezier\([^\)]+\)/gi;
  var cubicBezierList = transitions.match(BEZIER_REGEX);
  if (cubicBezierList) {
    sample = sample.replace(BEZIER_REGEX, TMP_STR);
  }
  var transitionList = sample.split(RULE_DELIMITER).map(function (rule) {
    var properties = rule.trim().split(PROPERTY_DELIMITER);
    return {
      property: properties[0] || DEFAULT_PROPERTY,
      duration: properties[1] && !(properties[1].indexOf(MS_UNIT) !== -1) ? parseFloat(properties[1]) * 1000 : parseFloat(properties[1]) || DEFAULT_DURATION,
      timingFunction: properties[2] && properties[2] !== TMP_STR ? properties[2] : cubicBezierList ? cubicBezierList.shift() : DEFAULT_TIMING_FUNCTION,
      delay: properties[3] && !(properties[3].indexOf(MS_UNIT) !== -1) ? parseFloat(properties[3]) * 1000 : parseFloat(properties[3]) || DEFAULT_DELAY
    };
  });
  return transitionList;
}

var defaultProps$34 = bsTheme;
function getTransitionUtilities() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$34['$enable-transitions'];
  var transitionFade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$34['$transition-fade'];
  var transitionCollapse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$34['$transition-collapse'];
  return '\n    ' + fade(enableTransitions, transitionFade) + '\n    ' + collapse(enableTransitions, transitionCollapse) + '\n  ';
}
function fade() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$34['$enable-transitions'];
  var transitionFade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$34['$transition-fade'];
  return '\n    .fade,\n     &.fade {\n      opacity: 0;\n      ' + transition(enableTransitions, transitionFade) + '\n    \n      &.show {\n        opacity: 1;\n      }\n    }\n  ';
}
function collapse() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$34['$enable-transitions'];
  var transitionCollapse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$34['$transition-collapse'];
  return '\n    .collapse {\n      display: none;\n      &.show {\n        display: block;\n      }\n    }\n    \n    tr {\n      &.collapse.show {\n        display: table-row;\n      }\n    }\n    \n    tbody {\n      &.collapse.show {\n        display: table-row-group;\n      }\n    }\n    \n    .collapsing {\n      position: relative;\n      height: 0;\n      overflow: hidden;\n      ' + transition(enableTransitions, transitionCollapse) + '\n    }\n  ';
}

var transitionUtils = {
  defaultProps: defaultProps$34,
  getTransitionUtilities: getTransitionUtilities,
  fade: fade,
  collapse: collapse
};

var defaultProps$35 = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  '$enable-hover-media-query': false,
  '$font-weight-normal': 'normal',
  '$font-weight-bold': 'bold',
  '$text-muted': '#818a91',
  '$brand-primary': '#0275d8',
  '$brand-success': '#5cb85c',
  '$brand-info': '#5bc0de',
  '$brand-warning': '#f0ad4e',
  '$brand-danger': '#d9534f',
  '$gray-dark': '#373a3c'
};
function getTextUtilities() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps$35['$enable-hover-media-query'];
  var gridBreakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps$35['$grid-breakpoints'];
  var fontWeightNormal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps$35['$font-weight-normal'];
  var fontWeightBold = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps$35['$font-weight-bold'];
  var textMuted = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps$35['$text-muted'];
  var brandPrimary = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps$35['$brand-primary'];
  var brandSuccess = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps$35['$brand-success'];
  var brandInfo = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps$35['$brand-info'];
  var brandWarning = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps$35['$brand-warning'];
  var brandDanger = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps$35['$brand-danger'];
  var grayDark = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps$35['$gray-dark'];
  var responseAlignmentList = [];
  Object.keys(gridBreakpoints).forEach(function (bp) {
    var infix = breakpointInfix(bp, gridBreakpoints);
    var responsiveAlignement = mediaBreakpointUp(bp, gridBreakpoints, '\n      .text' + infix + '-left { text-align: left !important; }\n      .text' + infix + '-right  { text-align: right !important; }\n      .text' + infix + '-center { text-align: center !important; }\n    ');
    responseAlignmentList.push(responsiveAlignement);
  });
  return '\n    /* Text */\n\n    /* Alignment */\n\n    .text-justify        { text-align: justify !important; }\n    .text-nowrap         { white-space: nowrap !important; }\n    .text-truncate       { ' + textTruncate() + ' }\n\n    /* Responsive alignment */\n\n    ' + responseAlignmentList.join('\n') + '\n\n    /* Transformation */\n\n    .text-lowercase      { text-transform: lowercase !important; }\n    .text-uppercase      { text-transform: uppercase !important; }\n    .text-capitalize     { text-transform: capitalize !important; }\n\n    /* Weight and italics */\n\n    .font-weight-normal  { font-weight: ' + fontWeightNormal + '; }\n    .font-weight-bold    { font-weight: ' + fontWeightBold + '; }\n    .font-italic         { font-style: italic; }\n\n    /* Contextual colors */\n\n    .text-white {\n      color: #fff !important;\n    }\n\n    ' + textEmphasisVariant(enableHoverMediaQuery, '.text-muted', textMuted) + '\n\n    ' + textEmphasisVariant(enableHoverMediaQuery, '.text-primary', brandPrimary) + '\n\n    ' + textEmphasisVariant(enableHoverMediaQuery, '.text-success', brandSuccess) + '\n\n    ' + textEmphasisVariant(enableHoverMediaQuery, '.text-info', brandInfo) + '\n\n    ' + textEmphasisVariant(enableHoverMediaQuery, '.text-warning', brandWarning) + '\n\n    ' + textEmphasisVariant(enableHoverMediaQuery, '.text-danger', brandDanger) + '\n\n    /* Font color */\n\n    ' + textEmphasisVariant(enableHoverMediaQuery, '.text-gray-dark', grayDark) + '\n\n    /* Misc */\n\n    .text-hide {\n      ' + textHide() + '\n    }\n\n  ';
}
var textUtils = {
  defaultProps: defaultProps$35,
  getTextUtilities: getTextUtilities
};

function getVisibilityUtilities() {
  return '\n    .visible {\n      ' + invisible('visible') + '\n    }\n    \n    .invisible {\n      ' + invisible('hidden') + '\n    }\n   \n  ';
}
var visibilityUtils = {
  getVisibilityUtilities: getVisibilityUtilities
};

function mapToCssModules(className, cssModule) {
  if (!cssModule) return className;
  return className.split(' ').map(function (c) {
    return cssModule[c] || c;
  }).join(' ');
}

function getTetherAttachments(placement) {
  switch (placement) {
    case 'top':
    case 'top center':
      return {
        attachment: 'bottom center',
        targetAttachment: 'top center'
      };
    case 'bottom':
    case 'bottom center':
      return {
        attachment: 'top center',
        targetAttachment: 'bottom center'
      };
    case 'left':
    case 'left center':
      return {
        attachment: 'middle right',
        targetAttachment: 'middle left'
      };
    case 'right':
    case 'right center':
      return {
        attachment: 'middle left',
        targetAttachment: 'middle right'
      };
    case 'top left':
      return {
        attachment: 'bottom left',
        targetAttachment: 'top left'
      };
    case 'top right':
      return {
        attachment: 'bottom right',
        targetAttachment: 'top right'
      };
    case 'bottom left':
      return {
        attachment: 'top left',
        targetAttachment: 'bottom left'
      };
    case 'bottom right':
      return {
        attachment: 'top right',
        targetAttachment: 'bottom right'
      };
    case 'right top':
      return {
        attachment: 'top left',
        targetAttachment: 'top right'
      };
    case 'right bottom':
      return {
        attachment: 'bottom left',
        targetAttachment: 'bottom right'
      };
    case 'left top':
      return {
        attachment: 'top right',
        targetAttachment: 'top left'
      };
    case 'left bottom':
      return {
        attachment: 'bottom right',
        targetAttachment: 'bottom left'
      };
    default:
      return {
        attachment: 'top center',
        targetAttachment: 'bottom center'
      };
  }
}
var tetherAttachements = ['top', 'bottom', 'left', 'right', 'top left', 'top center', 'top right', 'right top', 'right middle', 'right bottom', 'bottom right', 'bottom center', 'bottom left', 'left top', 'left middle', 'left bottom'];
function getScrollbarWidth() {
  var scrollDiv = document.createElement('div');
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? padding + 'px' : null;
}
function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth;
}
function getOriginalBodyPadding() {
  return parseInt(window.getComputedStyle(document.body, null).getPropertyValue('padding-right') || 0, 10);
}
function conditionallyUpdateScrollbar() {
  var scrollbarWidth = getScrollbarWidth();
  var fixedContent = document.querySelectorAll('.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed')[0];
  var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;
  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth);
  }
}
function toHashCode(str) {
  var hash = 0;
  if (str.length === 0) {
    return hash;
  }
  for (var i = 0; i < str.length; i += 1) {
    var char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash;
}

var classnames$1 = createCommonjsModule(function (module) {
(function () {
	'use strict';
	var hasOwn = {}.hasOwnProperty;
	function classNames () {
		var classes = [];
		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;
			var argType = typeof arg;
			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}
		return classes.join(' ');
	}
	if ('object' !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof undefined === 'function' && typeof undefined.amd === 'object' && undefined.amd) {
		undefined('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());
});

var LARGE_ARRAY_SIZE = 200;
var HASH_UNDEFINED = '__lodash_hash_undefined__';
var INFINITY = 1 / 0;
var MAX_SAFE_INTEGER = 9007199254740991;
var argsTag = '[object Arguments]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var symbolTag = '[object Symbol]';
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var reIsUint = /^(?:0|[1-9]\d*)$/;
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function('return this')();
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;
  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;
  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);
  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;
  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}
function baseIsNaN(value) {
  return value !== value;
}
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
function cacheHas(cache, key) {
  return cache.has(key);
}
function getValue(object, key) {
  return object == null ? undefined : object[key];
}
function isHostObject(value) {
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var arrayProto = Array.prototype;
var funcProto = Function.prototype;
var objectProto = Object.prototype;
var coreJsData = root['__core-js_shared__'];
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectToString = objectProto.toString;
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);
var Symbol$1 = root.Symbol;
var getPrototype = overArg(Object.getPrototypeOf, Object);
var propertyIsEnumerable = objectProto.propertyIsEnumerable;
var splice = arrayProto.splice;
var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : undefined;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var nativeMax = Math.max;
var Map$1 = getNative(root, 'Map');
var nativeCreate = getNative(Object, 'create');
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
function listCacheClear() {
  this.__data__ = [];
}
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$1 || ListCache),
    'string': new Hash
  };
}
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;
  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
function setCacheHas(value) {
  return this.__data__.has(value);
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
function arrayLikeKeys(value, inherited) {
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];
  var length = result.length,
      skipIndexes = !!length;
  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
function baseDifference(array, values, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      isCommon = true,
      length = array.length,
      result = [],
      valuesLength = values.length;
  if (!length) {
    return result;
  }
  if (iteratee) {
    values = arrayMap(values, baseUnary(iteratee));
  }
  if (comparator) {
    includes = arrayIncludesWith;
    isCommon = false;
  }
  else if (values.length >= LARGE_ARRAY_SIZE) {
    includes = cacheHas;
    isCommon = false;
    values = new SetCache(values);
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;
    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var valuesIndex = valuesLength;
      while (valuesIndex--) {
        if (values[valuesIndex] === computed) {
          continue outer;
        }
      }
      result.push(value);
    }
    else if (!includes(values, computed, comparator)) {
      result.push(value);
    }
  }
  return result;
}
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;
  predicate || (predicate = isFlattenable);
  result || (result = []);
  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];
  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function basePick(object, props) {
  object = Object(object);
  return basePickBy(object, props, function(value, key) {
    return key in object;
  });
}
function basePickBy(object, props, predicate) {
  var index = -1,
      length = props.length,
      result = {};
  while (++index < length) {
    var key = props[index],
        value = object[key];
    if (predicate(value, key)) {
      result[key] = value;
    }
  }
  return result;
}
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);
    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;
  return value === proto;
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}
function isArguments(value) {
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}
var isArray = Array.isArray;
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
function isFunction(value) {
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var omit = baseRest(function(object, props) {
  if (object == null) {
    return {};
  }
  props = arrayMap(baseFlatten(props, 1), toKey);
  return basePick(object, baseDifference(getAllKeysIn(object), props));
});
function stubArray() {
  return [];
}
var lodash_omit$1 = omit;

var babelHelpers = {};
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck$1 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





















babelHelpers;

var defaultProps$37 = {
  theme: bsTheme
};
function composeLink(RouterLink) {
  var Link = function (_React$Component) {
    inherits(Link, _React$Component);
    function Link() {
      classCallCheck$1(this, Link);
      return possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
    }
    createClass$1(Link, [{
      key: 'render',
      value: function render() {
        var _omit = lodash_omit$1(this.props, ['theme']),
            className = _omit.className,
            to = _omit.to,
            attributes = objectWithoutProperties(_omit, ['className', 'to']);
        return React.createElement(RouterLink, _extends({ className: className, to: to }, attributes));
      }
    }]);
    return Link;
  }(React.Component);
  Link.propTypes = {
    className: PropTypes.string,
    to: PropTypes.string.isRequired,
    theme: PropTypes.object
  };
  Link = styled(Link).withConfig({
    displayName: 'composeLink__Link'
  })(['', ''], function (props) {
    return '\n      ' + a(props.theme['$link-color'], props.theme['$link-decoration'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$enable-hover-media-query']) + '\n    \n      ' + button(props.theme['$enable-shadows'], props.theme['$enable-hover-media-query'], props.theme['$enable-transitions'], props.theme['$enable-rounded'], props.theme['$font-weight-normal'], props.theme['$btn-font-weight'], props.theme['$btn-line-height'], props.theme['$btn-transition'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-padding-y'], props.theme['$font-size-base'], props.theme['$btn-border-radius'], props.theme['$btn-box-shadow'], props.theme['$btn-focus-box-shadow'], props.theme['$btn-active-box-shadow'], props.theme['$cursor-disabled'], props.theme['$link-color'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$btn-link-disabled-color'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm'], props.theme['$btn-block-spacing-y'], props.theme['$btn-primary-color'], props.theme['$btn-primary-bg'], props.theme['$btn-primary-border'], props.theme['$btn-secondary-color'], props.theme['$btn-secondary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-color'], props.theme['$btn-info-bg'], props.theme['$btn-info-border'], props.theme['$btn-success-color'], props.theme['$btn-success-bg'], props.theme['$btn-success-border'], props.theme['$btn-warning-color'], props.theme['$btn-warning-bg'], props.theme['$btn-warning-border'], props.theme['$btn-danger-color'], props.theme['$btn-danger-bg'], props.theme['$btn-danger-border']) + '\n    ';
  });
  Link.defaultProps = defaultProps$37;
  return Link;
}

var defaultProps$36 = {
  tag: 'a',
  theme: bsTheme
};
var AUnstyled = function (_React$Component) {
  inherits(AUnstyled, _React$Component);
  function AUnstyled() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck$1(this, AUnstyled);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = AUnstyled.__proto__ || Object.getPrototypeOf(AUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focus: false
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  createClass$1(AUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          active = _omit.active,
          disabled = _omit.disabled,
          cssModule = _omit.cssModule,
          color = _omit.color,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['className', 'active', 'disabled', 'cssModule', 'color', 'tag']);
      var focus = this.state.focus;
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames$1(className, defineProperty({
          focus: focus,
          active: active,
          disabled: disabled
        }, 'text-' + color, color)), cssModule)
      }, attributes));
    }
  }]);
  return AUnstyled;
}(React.Component);
AUnstyled.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  tag: PropTypes.string,
  disabled: PropTypes.bool,
  theme: PropTypes.object,
  color: PropTypes.string,
  cssModule: PropTypes.object
};
var A = styled(AUnstyled).withConfig({
  displayName: 'A'
})(['', ''], function (props) {
  return '\n    ' + a(props.theme['$link-color'], props.theme['$link-decoration'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$enable-hover-media-query']) + '\n  ';
});
A.defaultProps = defaultProps$36;

var defaultProps$38 = {
  tag: 'abbr',
  theme: bsTheme
};
var AbbrUnstyled = function (_React$Component) {
  inherits(AbbrUnstyled, _React$Component);
  function AbbrUnstyled() {
    classCallCheck$1(this, AbbrUnstyled);
    return possibleConstructorReturn(this, (AbbrUnstyled.__proto__ || Object.getPrototypeOf(AbbrUnstyled)).apply(this, arguments));
  }
  createClass$1(AbbrUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          initialism = _omit.initialism,
          title = _omit.title,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['className', 'initialism', 'title', 'tag']);
      return React.createElement(Tag, _extends({
        className: classnames$1(className, {
          initialism: initialism
        }),
        title: title
      }, attributes));
    }
  }]);
  return AbbrUnstyled;
}(React.Component);
AbbrUnstyled.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  theme: PropTypes.object,
  tag: PropTypes.string,
  initialism: PropTypes.bool
};
var Abbr = styled(AbbrUnstyled).withConfig({
  displayName: 'Abbr'
})(['&[title]{text-decoration:underline;text-decoration:underline dotted;cursor:help;border-bottom:0;}&.initialism{font-size:90%;text-transform:uppercase;}']);
Abbr.defaultProps = defaultProps$38;

var Address = styled.address.withConfig({
  displayName: 'Address'
})(['margin-bottom:1rem;font-style:normal;line-height:inherit;']);

var hasClass_1 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasClass;
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + element.className + " ").indexOf(" " + className + " ") !== -1;
}
module.exports = exports["default"];
});
unwrapExports(hasClass_1);

var addClass_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addClass;
var _hasClass2 = _interopRequireDefault(hasClass_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element)) element.className = element.className + ' ' + className;
}
module.exports = exports['default'];
});
unwrapExports(addClass_1);

'use strict';
var removeClass = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
};

var PropTypes$1 = createCommonjsModule(function (module, exports) {
'use strict';
exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = undefined;
exports.transitionTimeout = transitionTimeout;
var _propTypes2 = _interopRequireDefault(PropTypes);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;
  return function (props) {
    if (props[enabledPropName]) {
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }
    return null;
  };
}
var timeoutsShape = exports.timeoutsShape = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
  enter: _propTypes2.default.number,
  exit: _propTypes2.default.number
}).isRequired]);
var classNamesShape = exports.classNamesShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  exit: _propTypes2.default.string,
  active: _propTypes2.default.string
}), _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  enterActive: _propTypes2.default.string,
  exit: _propTypes2.default.string,
  exitActive: _propTypes2.default.string
})]);
});
unwrapExports(PropTypes$1);

var Transition_1 = createCommonjsModule(function (module, exports) {
'use strict';
exports.__esModule = true;
exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;
var PropTypes$$1 = _interopRequireWildcard(PropTypes);
var _react2 = _interopRequireDefault(React);
var _reactDom2 = _interopRequireDefault(ReactDOM);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var UNMOUNTED = exports.UNMOUNTED = 'unmounted';
var EXITED = exports.EXITED = 'exited';
var ENTERING = exports.ENTERING = 'entering';
var ENTERED = exports.ENTERED = 'entered';
var EXITING = exports.EXITING = 'exiting';
var Transition = function (_React$Component) {
  _inherits(Transition, _React$Component);
  function Transition(props, context) {
    _classCallCheck(this, Transition);
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
    var parentGroup = context.transitionGroup;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus = void 0;
    _this.nextStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.nextStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = { status: initialStatus };
    _this.nextCallback = null;
    return _this;
  }
  Transition.prototype.getChildContext = function getChildContext() {
    return { transitionGroup: null };
  };
  Transition.prototype.componentDidMount = function componentDidMount() {
    this.updateStatus(true);
  };
  Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var status = this.state.status;
    if (nextProps.in) {
      if (status === UNMOUNTED) {
        this.setState({ status: EXITED });
      }
      if (status !== ENTERING && status !== ENTERED) {
        this.nextStatus = ENTERING;
      }
    } else {
      if (status === ENTERING || status === ENTERED) {
        this.nextStatus = EXITING;
      }
    }
  };
  Transition.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updateStatus();
  };
  Transition.prototype.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  Transition.prototype.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit = void 0,
        enter = void 0,
        appear = void 0;
    exit = enter = appear = timeout;
    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear;
    }
    return { exit: exit, enter: enter, appear: appear };
  };
  Transition.prototype.updateStatus = function updateStatus() {
    var mounting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (this.nextStatus !== null) {
      this.cancelNextCallback();
      var node = _reactDom2.default.findDOMNode(this);
      if (this.nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
      this.nextStatus = null;
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({ status: UNMOUNTED });
    }
  };
  Transition.prototype.performEnter = function performEnter(node, mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts();
    if (!mounting && !enter) {
      this.safeSetState({ status: ENTERED }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }
    this.props.onEnter(node, appearing);
    this.safeSetState({ status: ENTERING }, function () {
      _this2.props.onEntering(node, appearing);
      _this2.onTransitionEnd(node, timeouts.enter, function () {
        _this2.safeSetState({ status: ENTERED }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };
  Transition.prototype.performExit = function performExit(node) {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    if (!exit) {
      this.safeSetState({ status: EXITED }, function () {
        _this3.props.onExited(node);
      });
      return;
    }
    this.props.onExit(node);
    this.safeSetState({ status: EXITING }, function () {
      _this3.props.onExiting(node);
      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({ status: EXITED }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };
  Transition.prototype.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
    this.setState(nextState, this.setNextCallback(callback));
  };
  Transition.prototype.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function () {
      active = false;
    };
    return this.nextCallback;
  };
  Transition.prototype.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    if (node) {
      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }
      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    } else {
      setTimeout(this.nextCallback, 0);
    }
  };
  Transition.prototype.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _props = this.props,
        children = _props.children,
        childProps = _objectWithoutProperties(_props, ['children']);
    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;
    if (typeof children === 'function') {
      return children(status, childProps);
    }
    var child = _react2.default.Children.only(children);
    return _react2.default.cloneElement(child, childProps);
  };
  return Transition;
}(_react2.default.Component);
Transition.contextTypes = {
  transitionGroup: PropTypes$$1.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes = {
  children: PropTypes$$1.oneOfType([PropTypes$$1.func.isRequired, PropTypes$$1.element.isRequired]).isRequired,
  in: PropTypes$$1.bool,
  mountOnEnter: PropTypes$$1.bool,
  unmountOnExit: PropTypes$$1.bool,
  appear: PropTypes$$1.bool,
  enter: PropTypes$$1.bool,
  exit: PropTypes$$1.bool,
  timeout: function timeout(props) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    var pt = PropTypes$1.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;
    return pt.apply(undefined, [props].concat(args));
  },
  addEndListener: PropTypes$$1.func,
  onEnter: PropTypes$$1.func,
  onEntering: PropTypes$$1.func,
  onEntered: PropTypes$$1.func,
  onExit: PropTypes$$1.func,
  onExiting: PropTypes$$1.func,
  onExited: PropTypes$$1.func
};
function noop() {}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;
exports.default = Transition;
});
unwrapExports(Transition_1);

var CSSTransition_1 = createCommonjsModule(function (module, exports) {
'use strict';
exports.__esModule = true;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var PropTypes$$1 = _interopRequireWildcard(PropTypes);
var _addClass2 = _interopRequireDefault(addClass_1);
var _removeClass2 = _interopRequireDefault(removeClass);
var _react2 = _interopRequireDefault(React);
var _Transition2 = _interopRequireDefault(Transition_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var addClass = function addClass(node, classes) {
  return classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass2.default)(node, c);
  });
};
var removeClass$$1 = function removeClass$$1(node, classes) {
  return classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass2.default)(node, c);
  });
};
var propTypes = _extends({}, _Transition2.default.propTypes, {
  classNames: PropTypes$1.classNamesShape,
  onEnter: PropTypes$$1.func,
  onEntering: PropTypes$$1.func,
  onEntered: PropTypes$$1.func,
  onExit: PropTypes$$1.func,
  onExiting: PropTypes$$1.func,
  onExited: PropTypes$$1.func
});
var CSSTransition = function (_React$Component) {
  _inherits(CSSTransition, _React$Component);
  function CSSTransition() {
    var _temp, _this, _ret;
    _classCallCheck(this, CSSTransition);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;
      _this.removeClasses(node, 'exit');
      addClass(node, className);
      if (_this.props.onEnter) {
        _this.props.onEnter(node);
      }
    }, _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;
      _this.reflowAndAddClass(node, activeClassName);
      if (_this.props.onEntering) {
        _this.props.onEntering(node);
      }
    }, _this.onEntered = function (node, appearing) {
      _this.removeClasses(node, appearing ? 'appear' : 'enter');
      if (_this.props.onEntered) {
        _this.props.onEntered(node);
      }
    }, _this.onExit = function (node) {
      var _this$getClassNames3 = _this.getClassNames('exit'),
          className = _this$getClassNames3.className;
      _this.removeClasses(node, 'appear');
      _this.removeClasses(node, 'enter');
      addClass(node, className);
      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    }, _this.onExiting = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames4.activeClassName;
      _this.reflowAndAddClass(node, activeClassName);
      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    }, _this.onExited = function (node) {
      _this.removeClasses(node, 'exit');
      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    }, _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var className = typeof classNames !== 'string' ? classNames[type] : classNames + '-' + type;
      var activeClassName = typeof classNames !== 'string' ? classNames[type + 'Active'] : className + '-active';
      return { className: className, activeClassName: activeClassName };
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  CSSTransition.prototype.removeClasses = function removeClasses(node, type) {
    var _getClassNames = this.getClassNames(type),
        className = _getClassNames.className,
        activeClassName = _getClassNames.activeClassName;
    className && removeClass$$1(node, className);
    activeClassName && removeClass$$1(node, activeClassName);
  };
  CSSTransition.prototype.reflowAndAddClass = function reflowAndAddClass(node, className) {
    node.scrollTop;
    addClass(node, className);
  };
  CSSTransition.prototype.render = function render() {
    var props = _extends({}, this.props);
    delete props.classNames;
    return _react2.default.createElement(_Transition2.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };
  return CSSTransition;
}(_react2.default.Component);
CSSTransition.propTypes = propTypes;
exports.default = CSSTransition;
module.exports = exports['default'];
});
unwrapExports(CSSTransition_1);

var ChildMapping = createCommonjsModule(function (module, exports) {
'use strict';
exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, React.isValidElement)(child) ? mapFn(child) : child;
  };
  var result = Object.create(null);
  if (children) React.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    result[child.key] = mapper(child);
  });
  return result;
}
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};
  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  }
  var nextKeysPending = Object.create(null);
  var pendingKeys = [];
  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }
  return childMapping;
}
});
unwrapExports(ChildMapping);

var TransitionGroup_1 = createCommonjsModule(function (module, exports) {
'use strict';
exports.__esModule = true;
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
var _propTypes2 = _interopRequireDefault(PropTypes);
var _react2 = _interopRequireDefault(React);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};
var propTypes = {
  component: _propTypes2.default.any,
  children: _propTypes2.default.node,
  appear: _propTypes2.default.bool,
  enter: _propTypes2.default.bool,
  exit: _propTypes2.default.bool,
  childFactory: _propTypes2.default.func
};
var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);
  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
    _this.handleExited = function (key, node, originalHandler) {
      var currentChildMapping = (0, ChildMapping.getChildMapping)(_this.props.children);
      if (key in currentChildMapping) return;
      if (originalHandler) originalHandler(node);
      _this.setState(function (state) {
        var children = _extends({}, state.children);
        delete children[key];
        return { children: children };
      });
    };
    _this.state = {
      children: (0, ChildMapping.getChildMapping)(props.children, function (child) {
        var onExited = function onExited(node) {
          _this.handleExited(child.key, node, child.props.onExited);
        };
        return (0, React.cloneElement)(child, {
          onExited: onExited,
          in: true,
          appear: _this.getProp(child, 'appear'),
          enter: _this.getProp(child, 'enter'),
          exit: _this.getProp(child, 'exit')
        });
      })
    };
    return _this;
  }
  TransitionGroup.prototype.getChildContext = function getChildContext() {
    return {
      transitionGroup: { isMounting: !this.appeared }
    };
  };
  TransitionGroup.prototype.getProp = function getProp(child, prop) {
    var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.props;
    return props[prop] != null ? props[prop] : child.props[prop];
  };
  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };
  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;
    var prevChildMapping = this.state.children;
    var nextChildMapping = (0, ChildMapping.getChildMapping)(nextProps.children);
    var children = (0, ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping);
    Object.keys(children).forEach(function (key) {
      var child = children[key];
      if (!(0, React.isValidElement)(child)) return;
      var onExited = function onExited(node) {
        _this2.handleExited(child.key, node, child.props.onExited);
      };
      var hasPrev = key in prevChildMapping;
      var hasNext = key in nextChildMapping;
      var prevChild = prevChildMapping[key];
      var isLeaving = (0, React.isValidElement)(prevChild) && !prevChild.props.in;
      if (hasNext && (!hasPrev || isLeaving)) {
        children[key] = (0, React.cloneElement)(child, {
          onExited: onExited,
          in: true,
          exit: _this2.getProp(child, 'exit', nextProps),
          enter: _this2.getProp(child, 'enter', nextProps)
        });
      }
      else if (!hasNext && hasPrev && !isLeaving) {
          children[key] = (0, React.cloneElement)(child, { in: false });
        }
        else if (hasNext && hasPrev && (0, React.isValidElement)(prevChild)) {
            children[key] = (0, React.cloneElement)(child, {
              onExited: onExited,
              in: prevChild.props.in,
              exit: _this2.getProp(child, 'exit', nextProps),
              enter: _this2.getProp(child, 'enter', nextProps)
            });
          }
    });
    this.setState({ children: children });
  };
  TransitionGroup.prototype.render = function render() {
    var _props = this.props,
        Component$$1 = _props.component,
        childFactory = _props.childFactory,
        props = _objectWithoutProperties(_props, ['component', 'childFactory']);
    var children = this.state.children;
    delete props.appear;
    delete props.enter;
    delete props.exit;
    return _react2.default.createElement(
      Component$$1,
      props,
      values(children).map(childFactory)
    );
  };
  return TransitionGroup;
}(_react2.default.Component);
TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes2.default.object.isRequired
};
TransitionGroup.propTypes = propTypes;
TransitionGroup.defaultProps = defaultProps;
exports.default = TransitionGroup;
module.exports = exports['default'];
});
var TransitionGroup = unwrapExports(TransitionGroup_1);

var reactTransitionGroup = createCommonjsModule(function (module) {
'use strict';
var _CSSTransition2 = _interopRequireDefault(CSSTransition_1);
var _TransitionGroup2 = _interopRequireDefault(TransitionGroup_1);
var _Transition2 = _interopRequireDefault(Transition_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
module.exports = {
  Transition: _Transition2.default,
  TransitionGroup: _TransitionGroup2.default,
  CSSTransition: _CSSTransition2.default
};
});
unwrapExports(reactTransitionGroup);
var reactTransitionGroup_2 = reactTransitionGroup.TransitionGroup;
var reactTransitionGroup_3 = reactTransitionGroup.CSSTransition;

var defaultProps$40 = {
  isOpen: true,
  appear: true,
  theme: bsTheme
};
var Fade = function (_React$Component) {
  inherits(Fade, _React$Component);
  function Fade() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck$1(this, Fade);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Fade.__proto__ || Object.getPrototypeOf(Fade)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      timeout: null
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  createClass$1(Fade, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          theme = _props.theme,
          timeout = _props.timeout;
      this.setState({
        timeout: timeout || parseTransition(theme['$transition-fade'])[0].duration
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme', 'innerRef', 'timeout']),
          children = _omit.children,
          appear = _omit.appear,
          isOpen = _omit.isOpen,
          rest = objectWithoutProperties(_omit, ['children', 'appear', 'isOpen']);
      return React.createElement(
        reactTransitionGroup_3,
        _extends({
          'in': isOpen,
          appear: appear,
          timeout: this.state.timeout,
          classNames: {
            enter: 'fade',
            enterActive: 'show',
            exit: 'fade'
          }
        }, rest),
        children
      );
    }
  }]);
  return Fade;
}(React.Component);
Fade.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object,
  isOpen: PropTypes.bool,
  appear: PropTypes.bool,
  timeout: PropTypes.oneOfType([PropTypes.shape({
    enter: PropTypes.number,
    exit: PropTypes.number
  }), PropTypes.number])
};
Fade.defaultProps = defaultProps$40;
var Fade$1 = withTheme(Fade);

var defaultProps$41 = { theme: bsTheme };
var CloseUnstyled = function (_React$Component) {
  inherits(CloseUnstyled, _React$Component);
  function CloseUnstyled() {
    classCallCheck$1(this, CloseUnstyled);
    return possibleConstructorReturn(this, (CloseUnstyled.__proto__ || Object.getPrototypeOf(CloseUnstyled)).apply(this, arguments));
  }
  createClass$1(CloseUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          srOnly = _omit['sr-only'],
          onDismiss = _omit.onDismiss,
          closeLabel = _omit.closeLabel,
          cssModule = _omit.cssModule,
          attributes = objectWithoutProperties(_omit, ['className', 'sr-only', 'onDismiss', 'closeLabel', 'cssModule']);
      return React.createElement(
        'button',
        _extends({
          className: mapToCssModules(classnames$1(className, 'close', {
            'sr-only': srOnly
          }), cssModule),
          type: 'button',
          onClick: onDismiss
        }, attributes),
        closeLabel,
        React.createElement(
          'span',
          null,
          '\xD7'
        )
      );
    }
  }]);
  return CloseUnstyled;
}(React.Component);
CloseUnstyled.propTypes = {
  theme: PropTypes.object,
  'sr-only': PropTypes.bool,
  className: PropTypes.string,
  closeLabel: PropTypes.string,
  cssModule: PropTypes.object,
  onDismiss: PropTypes.func.isRequired
};
var Close = styled(CloseUnstyled).withConfig({
  displayName: 'Close'
})(['', ''], function (props) {
  return '\n    float: right;\n    font-size: ' + props.theme['$close-font-size'] + ';\n    font-weight: ' + props.theme['$close-font-weight'] + ';\n    line-height: 1;\n    color: ' + props.theme['$close-color'] + ';\n    text-shadow: ' + props.theme['$close-text-shadow'] + ';\n    opacity: .2;\n    \n    &:focus {outline:0;}\n    \n    ' + hoverFocus(props.theme['$enable-hover-media-query'], '\n        color: ' + props.theme['$close-color'] + ';\n        text-decoration: none;\n        cursor: pointer;\n        opacity: .5;\n      ') + '\n    \n    /* Additional properties for button version\n     iOS requires the button element instead of an anchor tag.\n     If you want the anchor version, it requires \'href="#"\'.\n     See https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile\n     */\n    \n    /* scss-lint:disable QualifyingElement */\n    &button.close {\n      padding: 0;\n      cursor: pointer;\n      background: transparent;\n      border: 0;\n      -webkit-appearance: none;\n    }\n    /* scss-lint:enable QualifyingElement */\n  ';
});
Close.defaultProps = defaultProps$41;

var defaultProps$39 = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  theme: bsTheme
};
var FirstChild = function FirstChild(_ref) {
  var children = _ref.children;
  return React.Children.toArray(children)[0] || null;
};
var AlertUnstyled = function (_React$Component) {
  inherits(AlertUnstyled, _React$Component);
  function AlertUnstyled() {
    classCallCheck$1(this, AlertUnstyled);
    return possibleConstructorReturn(this, (AlertUnstyled.__proto__ || Object.getPrototypeOf(AlertUnstyled)).apply(this, arguments));
  }
  createClass$1(AlertUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          color = _omit.color,
          isOpen = _omit.isOpen,
          timeout = _omit.timeout,
          toggle = _omit.toggle,
          children = _omit.children,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'tag', 'color', 'isOpen', 'timeout', 'toggle', 'children']);
      var classes = mapToCssModules(classnames$1(className, 'alert', 'alert-' + color, { 'alert-dismissible': toggle }), cssModule);
      var alert$$1 = React.createElement(
        Fade$1,
        { isOpen: isOpen, timeout: timeout },
        React.createElement(
          Tag,
          _extends({}, attributes, { className: classes, role: 'alert' }),
          toggle && React.createElement(Close, { onDismiss: toggle }),
          children
        )
      );
      return React.createElement(
        reactTransitionGroup_2,
        {
          component: FirstChild
        },
        isOpen ? alert$$1 : null
      );
    }
  }]);
  return AlertUnstyled;
}(React.Component);
AlertUnstyled.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  color: PropTypes.string,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  timeout: PropTypes.oneOfType([PropTypes.shape({
    enter: PropTypes.number,
    exit: PropTypes.number
  }), PropTypes.number]),
  theme: PropTypes.object
};
var Alert = styled(AlertUnstyled).withConfig({
  displayName: 'Alert'
})(['', ''], function (props) {
  return '\n    /*\n    Base styles\n    */\n    \n    &.alert {\n      padding: ' + props.theme['$alert-padding-y'] + ' ' + props.theme['$alert-padding-x'] + ';\n      margin-bottom: ' + props.theme['$alert-margin-bottom'] + ';\n      border: ' + props.theme['$alert-border-width'] + ' solid transparent;\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$alert-border-radius']) + '\n    }\n    \n    /* Headings for larger alerts */\n    &.alert-heading {\n      /* Specified to prevent conflicts of changing $headings-color */\n      color: inherit;\n    }\n    \n    /* Provide class for links that match alerts */\n    & .alert-link { \n      font-weight: ' + props.theme['$alert-link-font-weight'] + ';\n    }\n    \n    /* Dismissible alerts Expand the right padding and account for the close buttons positioning. */\n    \n    &.alert-dismissible {    \n      /* Adjust close link position */\n      & .close {\n        position: relative;\n        top: -' + props.theme['$alert-padding-y'] + ';\n        right: -' + props.theme['$alert-padding-x'] + ';\n        padding: ' + props.theme['$alert-padding-y'] + ' ' + props.theme['$alert-padding-x'] + ';\n        color: inherit;\n      }\n    }\n    /* Alternate styles Generate contextual modifier classes for colorizing the alert. */\n\n    &.alert-success {\n      ' + alertVariant(props.theme['$alert-success-bg'], props.theme['$alert-success-border'], props.theme['$alert-success-text']) + '    \n    }\n    &.alert-info {\n      ' + alertVariant(props.theme['$alert-info-bg'], props.theme['$alert-info-border'], props.theme['$alert-info-text']) + '\n    } \n    &.alert-warning {\n      ' + alertVariant(props.theme['$alert-warning-bg'], props.theme['$alert-warning-border'], props.theme['$alert-warning-text']) + ' \n    }\n    &.alert-danger {\n      ' + alertVariant(props.theme['$alert-danger-bg'], props.theme['$alert-danger-border'], props.theme['$alert-danger-text']) + ' \n    }\n  ';
});
Alert.defaultProps = defaultProps$39;
var index$1$1 = withTheme(Alert);

var Area = styled.area.withConfig({
  displayName: 'Area'
})(['display:inline;cursor:pointer;']);

var Article = styled.article.withConfig({
  displayName: 'Article'
})(['']);

var defaultProps$42 = {
  tag: 'blockquote',
  theme: bsTheme
};
var BlockquoteUnstyled = function (_React$Component) {
  inherits(BlockquoteUnstyled, _React$Component);
  function BlockquoteUnstyled() {
    classCallCheck$1(this, BlockquoteUnstyled);
    return possibleConstructorReturn(this, (BlockquoteUnstyled.__proto__ || Object.getPrototypeOf(BlockquoteUnstyled)).apply(this, arguments));
  }
  createClass$1(BlockquoteUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          reverse = _omit.reverse,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['className', 'reverse', 'tag']);
      return React.createElement(Tag, _extends({
        className: classnames$1(className, 'blockquote', {
          'blockquote-reverse': reverse
        })
      }, attributes));
    }
  }]);
  return BlockquoteUnstyled;
}(React.Component);
BlockquoteUnstyled.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.object,
  tag: PropTypes.string,
  reverse: PropTypes.bool
};
var Blockquote = styled(BlockquoteUnstyled).withConfig({
  displayName: 'Blockquote'
})(['  ', ' '], function (props) {
  return '\n    &.blockquote {\n      padding: ' + props.theme['$spacer-halved'] + ' ' + props.theme['$spacer'] + ';\n      margin-bottom: ' + props.theme['$spacer'] + ';\n      font-size: ' + props.theme['$blockquote-font-size'] + ';\n      border-left: ' + props.theme['$blockquote-border-width'] + ' solid ' + props.theme['$blockquote-border-color'] + ';\n      \n      .blockquote-footer {\n        display: block;\n        font-size: 80%; \n        color: ' + props.theme['$blockquote-small-color'] + ';\n        &::before {\n          content: \'\\2014 \\00A0\';\n        }\n      }\n    }\n\n    &.blockquote-reverse {\n      padding-right: ' + props.theme['$spacer'] + ';\n      padding-left: 0;\n      text-align: right;\n      border-right: ' + props.theme['$blockquote-border-width'] + ' solid ' + props.theme['$blockquote-border-color'] + ';\n      border-left: 0;\n      \n      .blockquote-footer {\n        display: block;\n        font-size: 80%; \n        color: ' + props.theme['$blockquote-small-color'] + ';\n        &::before {\n          content: "";\n        }\n        &::after {\n          content: \'\\00A0 \\2014\';\n        }\n      }\n    }\n    \n    /* Reboot from bootstrap v4 */\n    margin: 0 0 1rem;\n ';
});
Blockquote.defaultProps = defaultProps$42;

var defaultProps$43 = {
  theme: bsTheme,
  utils: {
    align: true,
    background: true,
    border: true,
    clearfix: true,
    cursor: true,
    display: true,
    flex: true,
    float: true,
    position: true,
    screenreaders: true,
    sizing: true,
    spacing: true,
    text: true,
    transition: true,
    visibility: true
  }
};
var UtilityProvider = styled.div.withConfig({
  displayName: 'UtilityProvider'
})(['', ''], function (props) {
  return '\n    ' + rebootUtils.body(props.theme['$font-family-base'], props.theme['$font-size-base'], props.theme['$font-weight-base'], props.theme['$line-height-base'], props.theme['$body-color'], props.theme['$body-bg']) + '\n    ' + ifThen(props.utils.align, alignUtils.getAlignUtilities()) + '\n    ' + ifThen(props.utils.background, backgroundUtils.getBackgroundUtilities(props.theme['$enable-hover-media-query'], props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$brand-inverse'], props.theme['$gray-lightest'])) + '\n    ' + ifThen(props.utils.border, bordersUtils.getBordersUtilities(props.theme['$enable-rounded'], props.theme['$border-radius'])) + '\n    ' + ifThen(props.utils.clearfix, clearfixUtils.getClearfixUtilities()) + '\n    ' + ifThen(props.utils.cursor, cursorUtils.getCursorUtilities()) + '\n    ' + ifThen(props.utils.display, displayUtils.getDisplayUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + ifThen(props.utils.flex, flexUtils.getFlexUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + ifThen(props.utils.float, floatUtils.getFloatUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + ifThen(props.utils.screenreaders, screenreadersUtils.getScreenReadersUtilities()) + '\n    ' + ifThen(props.utils.spacing, spacingUtils.getSpacingUtilities(props.theme['$grid-breakpoints'], props.theme['$zindex-navbar-fixed'], props.theme['$spacers']
  )) + '\n    ' + ifThen(props.utils.text, textUtils.getTextUtilities(props.theme['$enable-hover-media-query'], props.theme['$grid-breakpoints'], props.theme['$font-weight-normal'], props.theme['$font-weight-bold'], props.theme['$text-muted'], props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$gray-dark'])) + '\n    ' + ifThen(props.utils.transition, transitionUtils.getTransitionUtilities(props.theme['$enable-transitions'], props.theme['$transition-fade'], props.theme['$transition-collapse'])) + '\n    ' + ifThen(props.utils.visibility, visibilityUtils.getVisibilityUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + ifThen(props.utils.position, positionUtils.getPositionUtilities(props.theme['$zindex-fixed'], props.theme['$zindex-sticky'])) + '\n    ' + ifThen(props.utils.sizing, sizingUtils.getSizingUtilities(props.theme['$sizes']
  )) + '\n  ';
});
UtilityProvider.defaultProps = defaultProps$43;

var BootstrapProvider = function (_React$Component) {
  inherits(BootstrapProvider, _React$Component);
  function BootstrapProvider() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck$1(this, BootstrapProvider);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = BootstrapProvider.__proto__ || Object.getPrototypeOf(BootstrapProvider)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isWindowPhone8Fixed: null
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  createClass$1(BootstrapProvider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.windowPhone8Fix();
    }
  }, {
    key: 'windowPhone8Fix',
    value: function windowPhone8Fix() {
      if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
        document.head.appendChild(msViewportStyle);
        this.setState({
          isWindowPhone8Fixed: true
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          theme = _props.theme,
          utils = _props.utils;
      return React.createElement(
        ThemeProvider,
        { theme: makeTheme$$1(theme) },
        React.createElement(
          UtilityProvider,
          { utils: utils },
          children
        )
      );
    }
  }]);
  return BootstrapProvider;
}(React.Component);
BootstrapProvider.defaultProps = {
  theme: bsTheme
};
BootstrapProvider.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
  utils: PropTypes.shape({
    align: PropTypes.bool,
    background: PropTypes.bool,
    a: PropTypes.bool,
    border: PropTypes.bool,
    clearfix: PropTypes.bool,
    display: PropTypes.bool,
    flex: PropTypes.bool,
    float: PropTypes.bool,
    position: PropTypes.bool,
    screenreaders: PropTypes.bool,
    sizing: PropTypes.bool,
    spacing: PropTypes.bool,
    text: PropTypes.bool,
    transition: PropTypes.bool,
    visibility: PropTypes.bool
  })
};

var defaultProps$44 = {
  theme: bsTheme,
  tag: 'ol'
};
var BreadcrumbUnstyled = function (_React$Component) {
  inherits(BreadcrumbUnstyled, _React$Component);
  function BreadcrumbUnstyled() {
    classCallCheck$1(this, BreadcrumbUnstyled);
    return possibleConstructorReturn(this, (BreadcrumbUnstyled.__proto__ || Object.getPrototypeOf(BreadcrumbUnstyled)).apply(this, arguments));
  }
  createClass$1(BreadcrumbUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames$1(className, 'breadcrumb'), cssModule)
      }, attributes));
    }
  }]);
  return BreadcrumbUnstyled;
}(React.Component);
BreadcrumbUnstyled.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  theme: PropTypes.object
};
var Breadcrumb = styled(BreadcrumbUnstyled).withConfig({
  displayName: 'Breadcrumb'
})(['', ''], function (props) {
  return '\n    &.breadcrumb {\n      padding: ' + props.theme['$breadcrumb-padding-y'] + ' ' + props.theme['$breadcrumb-padding-x'] + ';\n      margin-bottom: ' + props.theme['$spacer-y'] + ';\n      list-style: none;\n      background-color: ' + props.theme['$breadcrumb-bg'] + ';\n \n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$border-radius']) + '\n            \n      ' + clearfix() + '\n    }\n\n    & .breadcrumb-item {\n      float: left;\n    \n      /* The separator between breadcrumbs (by default, a forward-slash: "/") */\n      + .breadcrumb-item::before {\n        display: inline-block; /* Suppress underlining of the separator in modern browsers */\n        padding-right: ' + props.theme['$breadcrumb-item-padding'] + ';\n        padding-left: ' + props.theme['$breadcrumb-item-padding'] + ';\n        color: ' + props.theme['$breadcrumb-divider-color'] + ';\n        content: ' + props.theme['$breadcrumb-divider'] + ';\n      }\n  \n      /* IE9-11 hack to properly handle hyperlink underlines for breadcrumbs built\n       without \'ul\'s. The \'::before\' pseudo-element generates an element\n       *within* the .breadcrumb-item and thereby inherits the \'text-decoration\'.\n      \n       To trick IE into suppressing the underline, we give the pseudo-element an\n       underline and then immediately remove it.\n      */\n      \n      + .breadcrumb-item:hover::before {\n        text-decoration: underline;\n      }\n      + .breadcrumb-item:hover::before {\n        text-decoration: none;\n      }\n    \n      &.active {\n        color: ' + props.theme['$breadcrumb-active-color'] + ';\n      }\n    }\n  ';
});
Breadcrumb.defaultProps = defaultProps$44;

var defaultProps$45 = {
  tag: 'li'
};
var BreadcrumbItem = function (_React$Component) {
  inherits(BreadcrumbItem, _React$Component);
  function BreadcrumbItem() {
    classCallCheck$1(this, BreadcrumbItem);
    return possibleConstructorReturn(this, (BreadcrumbItem.__proto__ || Object.getPrototypeOf(BreadcrumbItem)).apply(this, arguments));
  }
  createClass$1(BreadcrumbItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          active = _props.active,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'active', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames$1(className, 'breadcrumb-item', {
          active: active
        }), cssModule)
      }, attributes));
    }
  }]);
  return BreadcrumbItem;
}(React.Component);
BreadcrumbItem.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
BreadcrumbItem.defaultProps = defaultProps$45;

var defaultProps$46 = {
  theme: bsTheme,
  tag: 'button',
  color: 'secondary'
};
var ButtonUnstyled = function (_React$Component) {
  inherits(ButtonUnstyled, _React$Component);
  function ButtonUnstyled() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck$1(this, ButtonUnstyled);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ButtonUnstyled.__proto__ || Object.getPrototypeOf(ButtonUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
      if (_this.props.disabled) {
        e.preventDefault();
        return;
      }
      if (_this.props.onClick) {
        _this.props.onClick(e);
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  createClass$1(ButtonUnstyled, [{
    key: 'render',
    value: function render() {
      var _cn;
      var _omit = lodash_omit$1(this.props, ['theme']),
          active = _omit.active,
          disabled = _omit.disabled,
          block = _omit.block,
          className = _omit.className,
          cssModule = _omit.cssModule,
          dropup = _omit.dropup,
          color = _omit.color,
          outline = _omit.outline,
          size = _omit.size,
          getRef = _omit.getRef,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['active', 'disabled', 'block', 'className', 'cssModule', 'dropup', 'color', 'outline', 'size', 'getRef', 'tag']);
      var classes = mapToCssModules(classnames$1(className, 'btn', (_cn = {
        dropup: dropup,
        active: active,
        disabled: disabled
      }, defineProperty(_cn, 'btn-' + size, size), defineProperty(_cn, 'btn-block', block), _cn), 'btn' + (outline ? '-outline' : '') + '-' + color), cssModule);
      if (attributes.href && Tag === 'button') {
        Tag = 'a';
      }
      return React.createElement(Tag, _extends({
        type: Tag === 'button' && attributes.onClick ? 'button' : undefined,
        className: classes,
        ref: getRef
      }, attributes, {
        onClick: this.onClick
      }));
    }
  }]);
  return ButtonUnstyled;
}(React.Component);
ButtonUnstyled.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  size: PropTypes.string,
  dropup: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  theme: PropTypes.object
};
var Button = styled(ButtonUnstyled).withConfig({
  displayName: 'Button'
})(['', ' '], function (props) {
  return '\n    ' + button(props.theme['$enable-shadows'], props.theme['$enable-hover-media-query'], props.theme['$enable-transitions'], props.theme['$enable-rounded'], props.theme['$font-weight-normal'], props.theme['$btn-font-weight'], props.theme['$btn-line-height'], props.theme['$btn-transition'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-padding-y'], props.theme['$font-size-base'], props.theme['$btn-border-radius'], props.theme['$btn-box-shadow'], props.theme['$btn-focus-box-shadow'], props.theme['$btn-active-box-shadow'], props.theme['$cursor-disabled'], props.theme['$link-color'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$btn-link-disabled-color'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm'], props.theme['$btn-block-spacing-y'], props.theme['$btn-primary-color'], props.theme['$btn-primary-bg'], props.theme['$btn-primary-border'], props.theme['$btn-secondary-color'], props.theme['$btn-secondary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-color'], props.theme['$btn-info-bg'], props.theme['$btn-info-border'], props.theme['$btn-success-color'], props.theme['$btn-success-bg'], props.theme['$btn-success-border'], props.theme['$btn-warning-color'], props.theme['$btn-warning-bg'], props.theme['$btn-warning-border'], props.theme['$btn-danger-color'], props.theme['$btn-danger-bg'], props.theme['$btn-danger-border']) + '\n ';
});
Button.defaultProps = defaultProps$46;

var propTypes$1 = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var defaultProps$48 = {
  tag: 'div'
};
var contextTypes = {
  isOpen: PropTypes.bool.isRequired
};
var DropdownMenu = function DropdownMenu(props, context) {
  var className = props.className,
      cssModule = props.cssModule,
      right = props.right,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'right', 'tag']);
  var classes = mapToCssModules(classnames$1(className, 'dropdown-menu', { 'dropdown-menu-right': right }), cssModule);
  return React.createElement(Tag, _extends({}, attributes, { tabIndex: '-1', 'aria-hidden': !context.isOpen, role: 'menu', className: classes }));
};
DropdownMenu.propTypes = propTypes$1;
DropdownMenu.defaultProps = defaultProps$48;
DropdownMenu.contextTypes = contextTypes;

var tether$1 = createCommonjsModule(function (module, exports) {
(function(root, factory) {
  if (typeof undefined === 'function' && undefined.amd) {
    undefined(factory);
  } else {
    module.exports = factory(commonjsRequire, exports, module);
  }
}(commonjsGlobal, function(require, exports, module) {
'use strict';
var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
var _get = function get(_x8, _x9, _x10) { var _again = true; _function: while (_again) { var object = _x8, property = _x9, receiver = _x10; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x8 = parent; _x9 = property; _x10 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
var TetherBase = { modules: [] };
var zeroElement = null;
var deferred = [];
var defer = function defer(fn) {
  deferred.push(fn);
};
var flush = function flush() {
  var fn = undefined;
  while (fn = deferred.pop()) {
    fn();
  }
};
function extend() {
  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  args.forEach(function (obj) {
    if (obj) {
      for (var key in obj) {
        if (({}).hasOwnProperty.call(obj, key)) {
          out[key] = obj[key];
        }
      }
    }
  });
  return out;
}
function getClassName(el) {
  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
    return el.className.baseVal;
  }
  return el.className;
}
function setClassName(el, className) {
  el.setAttribute('class', className);
}
function getActualBoundingClientRect(node) {
  var boundingRect = node.getBoundingClientRect();
  var rect = {};
  for (var k in boundingRect) {
    rect[k] = boundingRect[k];
  }
  if (node.ownerDocument !== document) {
    var _frameElement = node.ownerDocument.defaultView.frameElement;
    if (_frameElement) {
      var frameRect = getActualBoundingClientRect(_frameElement);
      rect.top += frameRect.top;
      rect.bottom += frameRect.top;
      rect.left += frameRect.left;
      rect.right += frameRect.left;
    }
  }
  return rect;
}
function getScrollParents(el) {
  var computedStyle = getComputedStyle(el) || {};
  var position = computedStyle.position;
  var parents = [];
  if (position === 'fixed') {
    return [el];
  }
  var parent = el;
  while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
    var style = undefined;
    try {
      style = getComputedStyle(parent);
    } catch (err) {}
    if (typeof style === 'undefined' || style === null) {
      parents.push(parent);
      return parents;
    }
    var _style = style;
    var overflow = _style.overflow;
    var overflowX = _style.overflowX;
    var overflowY = _style.overflowY;
    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
        parents.push(parent);
      }
    }
  }
  parents.push(el.ownerDocument.body);
  if (el.ownerDocument !== document) {
    parents.push(el.ownerDocument.defaultView);
  }
  return parents;
}
var uniqueId = (function () {
  var id = 0;
  return function () {
    return ++id;
  };
})();
var zeroPosCache = {};
var getOrigin = function getOrigin() {
  var node = zeroElement;
  if (!node || !document.body.contains(node)) {
    node = document.createElement('div');
    node.setAttribute('data-tether-id', uniqueId());
    extend(node.style, {
      top: 0,
      left: 0,
      position: 'absolute'
    });
    document.body.appendChild(node);
    zeroElement = node;
  }
  var id = node.getAttribute('data-tether-id');
  if (typeof zeroPosCache[id] === 'undefined') {
    zeroPosCache[id] = getActualBoundingClientRect(node);
    defer(function () {
      delete zeroPosCache[id];
    });
  }
  return zeroPosCache[id];
};
function removeUtilElements() {
  if (zeroElement) {
    document.body.removeChild(zeroElement);
  }
  zeroElement = null;
}
function getBounds(el) {
  var doc = undefined;
  if (el === document) {
    doc = document;
    el = document.documentElement;
  } else {
    doc = el.ownerDocument;
  }
  var docEl = doc.documentElement;
  var box = getActualBoundingClientRect(el);
  var origin = getOrigin();
  box.top -= origin.top;
  box.left -= origin.left;
  if (typeof box.width === 'undefined') {
    box.width = document.body.scrollWidth - box.left - box.right;
  }
  if (typeof box.height === 'undefined') {
    box.height = document.body.scrollHeight - box.top - box.bottom;
  }
  box.top -= docEl.clientTop;
  box.left -= docEl.clientLeft;
  box.right = doc.body.clientWidth - box.width - box.left;
  box.bottom = doc.body.clientHeight - box.height - box.top;
  return box;
}
function getOffsetParent(el) {
  return el.offsetParent || document.documentElement;
}
var _scrollBarSize = null;
function getScrollBarSize() {
  if (_scrollBarSize) {
    return _scrollBarSize;
  }
  var inner = document.createElement('div');
  inner.style.width = '100%';
  inner.style.height = '200px';
  var outer = document.createElement('div');
  extend(outer.style, {
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    visibility: 'hidden',
    width: '200px',
    height: '150px',
    overflow: 'hidden'
  });
  outer.appendChild(inner);
  document.body.appendChild(outer);
  var widthContained = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var widthScroll = inner.offsetWidth;
  if (widthContained === widthScroll) {
    widthScroll = outer.clientWidth;
  }
  document.body.removeChild(outer);
  var width = widthContained - widthScroll;
  _scrollBarSize = { width: width, height: width };
  return _scrollBarSize;
}
function removeClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.remove(cls);
      }
    });
  } else {
    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
    var className = getClassName(el).replace(regex, ' ');
    setClassName(el, className);
  }
}
function addClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.add(cls);
      }
    });
  } else {
    removeClass(el, name);
    var cls = getClassName(el) + (' ' + name);
    setClassName(el, cls);
  }
}
function hasClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    return el.classList.contains(name);
  }
  var className = getClassName(el);
  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
}
function updateClasses(el, add, all) {
  all.forEach(function (cls) {
    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
      removeClass(el, cls);
    }
  });
  add.forEach(function (cls) {
    if (!hasClass(el, cls)) {
      addClass(el, cls);
    }
  });
}
var Evented = (function () {
  function Evented() {
    _classCallCheck(this, Evented);
  }
  _createClass(Evented, [{
    key: 'on',
    value: function on(event, handler, ctx) {
      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
      if (typeof this.bindings === 'undefined') {
        this.bindings = {};
      }
      if (typeof this.bindings[event] === 'undefined') {
        this.bindings[event] = [];
      }
      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
    }
  }, {
    key: 'once',
    value: function once(event, handler, ctx) {
      this.on(event, handler, ctx, true);
    }
  }, {
    key: 'off',
    value: function off(event, handler) {
      if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
        return;
      }
      if (typeof handler === 'undefined') {
        delete this.bindings[event];
      } else {
        var i = 0;
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }, {
    key: 'trigger',
    value: function trigger(event) {
      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
        var i = 0;
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }
        while (i < this.bindings[event].length) {
          var _bindings$event$i = this.bindings[event][i];
          var handler = _bindings$event$i.handler;
          var ctx = _bindings$event$i.ctx;
          var once = _bindings$event$i.once;
          var context = ctx;
          if (typeof context === 'undefined') {
            context = this;
          }
          handler.apply(context, args);
          if (once) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }]);
  return Evented;
})();
function within(a, b) {
  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
  return a + diff >= b && b >= a - diff;
}
var transformKey = (function () {
  if (typeof document === 'undefined') {
    return '';
  }
  var el = document.createElement('div');
  var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
  for (var i = 0; i < transforms.length; ++i) {
    var key = transforms[i];
    if (el.style[key] !== undefined) {
      return key;
    }
  }
  return '';
})();
var tethers = [];
var position = function position() {
  tethers.forEach(function (tether) {
    tether.position(false);
  });
  flush();
};
function now() {
  if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
    return performance.now();
  }
  return +new Date();
}
(function () {
  var lastCall = null;
  var lastDuration = null;
  var pendingTimeout = null;
  var tick = function tick() {
    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
      lastDuration = Math.min(lastDuration - 16, 250);
      pendingTimeout = setTimeout(tick, 250);
      return;
    }
    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
      return;
    }
    if (pendingTimeout != null) {
      clearTimeout(pendingTimeout);
      pendingTimeout = null;
    }
    lastCall = now();
    position();
    lastDuration = now() - lastCall;
  };
  if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
      window.addEventListener(event, tick);
    });
  }
})();
var MIRROR_LR = {
  center: 'center',
  left: 'right',
  right: 'left'
};
var MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top'
};
var OFFSET_MAP = {
  top: 0,
  left: 0,
  middle: '50%',
  center: '50%',
  bottom: '100%',
  right: '100%'
};
var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
  var left = attachment.left;
  var top = attachment.top;
  if (left === 'auto') {
    left = MIRROR_LR[relativeToAttachment.left];
  }
  if (top === 'auto') {
    top = MIRROR_TB[relativeToAttachment.top];
  }
  return { left: left, top: top };
};
var attachmentToOffset = function attachmentToOffset(attachment) {
  var left = attachment.left;
  var top = attachment.top;
  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
    left = OFFSET_MAP[attachment.left];
  }
  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
    top = OFFSET_MAP[attachment.top];
  }
  return { left: left, top: top };
};
function addOffset() {
  var out = { top: 0, left: 0 };
  for (var _len3 = arguments.length, offsets = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    offsets[_key3] = arguments[_key3];
  }
  offsets.forEach(function (_ref) {
    var top = _ref.top;
    var left = _ref.left;
    if (typeof top === 'string') {
      top = parseFloat(top, 10);
    }
    if (typeof left === 'string') {
      left = parseFloat(left, 10);
    }
    out.top += top;
    out.left += left;
  });
  return out;
}
function offsetToPx(offset, size) {
  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
  }
  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
  }
  return offset;
}
var parseOffset = function parseOffset(value) {
  var _value$split = value.split(' ');
  var _value$split2 = _slicedToArray(_value$split, 2);
  var top = _value$split2[0];
  var left = _value$split2[1];
  return { top: top, left: left };
};
var parseAttachment = parseOffset;
var TetherClass = (function (_Evented) {
  _inherits(TetherClass, _Evented);
  function TetherClass(options) {
    var _this = this;
    _classCallCheck(this, TetherClass);
    _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
    this.position = this.position.bind(this);
    tethers.push(this);
    this.history = [];
    this.setOptions(options, false);
    TetherBase.modules.forEach(function (module) {
      if (typeof module.initialize !== 'undefined') {
        module.initialize.call(_this);
      }
    });
    this.position();
  }
  _createClass(TetherClass, [{
    key: 'getClass',
    value: function getClass() {
      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      var classes = this.options.classes;
      if (typeof classes !== 'undefined' && classes[key]) {
        return this.options.classes[key];
      }
      if (this.options.classPrefix) {
        return this.options.classPrefix + '-' + key;
      }
      return key;
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      var _this2 = this;
      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
      var defaults = {
        offset: '0 0',
        targetOffset: '0 0',
        targetAttachment: 'auto auto',
        classPrefix: 'tether'
      };
      this.options = extend(defaults, options);
      var _options = this.options;
      var element = _options.element;
      var target = _options.target;
      var targetModifier = _options.targetModifier;
      this.element = element;
      this.target = target;
      this.targetModifier = targetModifier;
      if (this.target === 'viewport') {
        this.target = document.body;
        this.targetModifier = 'visible';
      } else if (this.target === 'scroll-handle') {
        this.target = document.body;
        this.targetModifier = 'scroll-handle';
      }
      ['element', 'target'].forEach(function (key) {
        if (typeof _this2[key] === 'undefined') {
          throw new Error('Tether Error: Both element and target must be defined');
        }
        if (typeof _this2[key].jquery !== 'undefined') {
          _this2[key] = _this2[key][0];
        } else if (typeof _this2[key] === 'string') {
          _this2[key] = document.querySelector(_this2[key]);
        }
      });
      addClass(this.element, this.getClass('element'));
      if (this.options.addTargetClasses !== false) {
        addClass(this.target, this.getClass('target'));
      }
      if (!this.options.attachment) {
        throw new Error('Tether Error: You must provide an attachment');
      }
      this.targetAttachment = parseAttachment(this.options.targetAttachment);
      this.attachment = parseAttachment(this.options.attachment);
      this.offset = parseOffset(this.options.offset);
      this.targetOffset = parseOffset(this.options.targetOffset);
      if (typeof this.scrollParents !== 'undefined') {
        this.disable();
      }
      if (this.targetModifier === 'scroll-handle') {
        this.scrollParents = [this.target];
      } else {
        this.scrollParents = getScrollParents(this.target);
      }
      if (this.options.enabled !== false) {
        this.enable(pos);
      }
    }
  }, {
    key: 'getTargetBounds',
    value: function getTargetBounds() {
      if (typeof this.targetModifier !== 'undefined') {
        if (this.targetModifier === 'visible') {
          if (this.target === document.body) {
            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
          }
          var bounds = getBounds(this.target);
          var out = {
            height: bounds.height,
            width: bounds.width,
            top: bounds.top,
            left: bounds.left
          };
          out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
          out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
          out.height = Math.min(innerHeight, out.height);
          out.height -= 2;
          out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
          out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
          out.width = Math.min(innerWidth, out.width);
          out.width -= 2;
          if (out.top < pageYOffset) {
            out.top = pageYOffset;
          }
          if (out.left < pageXOffset) {
            out.left = pageXOffset;
          }
          return out;
        }
        if (this.targetModifier === 'scroll-handle') {
          var bounds = undefined;
          var target = this.target;
          if (target === document.body) {
            target = document.documentElement;
            bounds = {
              left: pageXOffset,
              top: pageYOffset,
              height: innerHeight,
              width: innerWidth
            };
          } else {
            bounds = getBounds(target);
          }
          var style = getComputedStyle(target);
          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;
          var scrollBottom = 0;
          if (hasBottomScroll) {
            scrollBottom = 15;
          }
          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;
          var out = {
            width: 15,
            height: height * 0.975 * (height / target.scrollHeight),
            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
          };
          var fitAdj = 0;
          if (height < 408 && this.target === document.body) {
            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
          }
          if (this.target !== document.body) {
            out.height = Math.max(out.height, 24);
          }
          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);
          if (this.target === document.body) {
            out.height = Math.max(out.height, 24);
          }
          return out;
        }
      }
      return getBounds(this.target);
    }
  }, {
    key: 'clearCache',
    value: function clearCache() {
      this._cache = {};
    }
  }, {
    key: 'cache',
    value: function cache(k, getter) {
      if (typeof this._cache === 'undefined') {
        this._cache = {};
      }
      if (typeof this._cache[k] === 'undefined') {
        this._cache[k] = getter.call(this);
      }
      return this._cache[k];
    }
  }, {
    key: 'enable',
    value: function enable() {
      var _this3 = this;
      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
      if (this.options.addTargetClasses !== false) {
        addClass(this.target, this.getClass('enabled'));
      }
      addClass(this.element, this.getClass('enabled'));
      this.enabled = true;
      this.scrollParents.forEach(function (parent) {
        if (parent !== _this3.target.ownerDocument) {
          parent.addEventListener('scroll', _this3.position);
        }
      });
      if (pos) {
        this.position();
      }
    }
  }, {
    key: 'disable',
    value: function disable() {
      var _this4 = this;
      removeClass(this.target, this.getClass('enabled'));
      removeClass(this.element, this.getClass('enabled'));
      this.enabled = false;
      if (typeof this.scrollParents !== 'undefined') {
        this.scrollParents.forEach(function (parent) {
          parent.removeEventListener('scroll', _this4.position);
        });
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this5 = this;
      this.disable();
      tethers.forEach(function (tether, i) {
        if (tether === _this5) {
          tethers.splice(i, 1);
        }
      });
      if (tethers.length === 0) {
        removeUtilElements();
      }
    }
  }, {
    key: 'updateAttachClasses',
    value: function updateAttachClasses(elementAttach, targetAttach) {
      var _this6 = this;
      elementAttach = elementAttach || this.attachment;
      targetAttach = targetAttach || this.targetAttachment;
      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];
      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
        this._addAttachClasses.splice(0, this._addAttachClasses.length);
      }
      if (typeof this._addAttachClasses === 'undefined') {
        this._addAttachClasses = [];
      }
      var add = this._addAttachClasses;
      if (elementAttach.top) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
      }
      if (elementAttach.left) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
      }
      if (targetAttach.top) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
      }
      if (targetAttach.left) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
      }
      var all = [];
      sides.forEach(function (side) {
        all.push(_this6.getClass('element-attached') + '-' + side);
        all.push(_this6.getClass('target-attached') + '-' + side);
      });
      defer(function () {
        if (typeof _this6._addAttachClasses === 'undefined') {
          return;
        }
        updateClasses(_this6.element, _this6._addAttachClasses, all);
        if (_this6.options.addTargetClasses !== false) {
          updateClasses(_this6.target, _this6._addAttachClasses, all);
        }
        delete _this6._addAttachClasses;
      });
    }
  }, {
    key: 'position',
    value: function position() {
      var _this7 = this;
      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
      if (!this.enabled) {
        return undefined;
      }
      this.clearCache();
      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);
      this.updateAttachClasses(this.attachment, targetAttachment);
      var elementPos = this.cache('element-bounds', function () {
        return getBounds(_this7.element);
      });
      var width = elementPos.width;
      var height = elementPos.height;
      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
        var _lastSize = this.lastSize;
        width = _lastSize.width;
        height = _lastSize.height;
      } else {
        this.lastSize = { width: width, height: height };
      }
      var targetPos = this.cache('target-bounds', function () {
        return _this7.getTargetBounds();
      });
      var targetSize = targetPos;
      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);
      var scrollbarSize = undefined;
      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);
      offset = addOffset(offset, manualOffset);
      targetOffset = addOffset(targetOffset, manualTargetOffset);
      var left = targetPos.left + targetOffset.left - offset.left;
      var top = targetPos.top + targetOffset.top - offset.top;
      for (var i = 0; i < TetherBase.modules.length; ++i) {
        var _module2 = TetherBase.modules[i];
        var ret = _module2.position.call(this, {
          left: left,
          top: top,
          targetAttachment: targetAttachment,
          targetPos: targetPos,
          elementPos: elementPos,
          offset: offset,
          targetOffset: targetOffset,
          manualOffset: manualOffset,
          manualTargetOffset: manualTargetOffset,
          scrollbarSize: scrollbarSize,
          attachment: this.attachment
        });
        if (ret === false) {
          return false;
        }
        if (typeof ret === 'undefined' || typeof ret !== 'object') {
          continue;
        }
        top = ret.top;
        left = ret.left;
      }
      var next = {
        page: { top: top, left: left },
        viewport: {
          top: top - pageYOffset,
          bottom: pageYOffset - top - height + innerHeight,
          left: left - pageXOffset,
          right: pageXOffset - left - width + innerWidth
        }
      };
      var doc = this.target.ownerDocument;
      var win = doc.defaultView;
      if (win.innerHeight > doc.documentElement.clientHeight) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.bottom -= scrollbarSize.height;
      }
      if (win.innerWidth > doc.documentElement.clientWidth) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.right -= scrollbarSize.width;
      }
      if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
        next.page.bottom = doc.body.scrollHeight - top - height;
        next.page.right = doc.body.scrollWidth - left - width;
      }
      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
        (function () {
          var offsetParent = _this7.cache('target-offsetparent', function () {
            return getOffsetParent(_this7.target);
          });
          var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
            return getBounds(offsetParent);
          });
          var offsetParentStyle = getComputedStyle(offsetParent);
          var offsetParentSize = offsetPosition;
          var offsetBorder = {};
          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
          });
          offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
          offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;
          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
              var scrollTop = offsetParent.scrollTop;
              var scrollLeft = offsetParent.scrollLeft;
              next.offset = {
                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
              };
            }
          }
        })();
      }
      this.move(next);
      this.history.unshift(next);
      if (this.history.length > 3) {
        this.history.pop();
      }
      if (flushChanges) {
        flush();
      }
      return true;
    }
  }, {
    key: 'move',
    value: function move(pos) {
      var _this8 = this;
      if (typeof this.element.parentNode === 'undefined') {
        return;
      }
      var same = {};
      for (var type in pos) {
        same[type] = {};
        for (var key in pos[type]) {
          var found = false;
          for (var i = 0; i < this.history.length; ++i) {
            var point = this.history[i];
            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
              found = true;
              break;
            }
          }
          if (!found) {
            same[type][key] = true;
          }
        }
      }
      var css = { top: '', left: '', right: '', bottom: '' };
      var transcribe = function transcribe(_same, _pos) {
        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
        if (gpu !== false) {
          var yPos = undefined,
              xPos = undefined;
          if (_same.top) {
            css.top = 0;
            yPos = _pos.top;
          } else {
            css.bottom = 0;
            yPos = -_pos.bottom;
          }
          if (_same.left) {
            css.left = 0;
            xPos = _pos.left;
          } else {
            css.right = 0;
            xPos = -_pos.right;
          }
          if (window.matchMedia) {
            var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
            if (!retina) {
              xPos = Math.round(xPos);
              yPos = Math.round(yPos);
            }
          }
          css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';
          if (transformKey !== 'msTransform') {
            css[transformKey] += ' translateZ(0)';
          }
        } else {
          if (_same.top) {
            css.top = _pos.top + 'px';
          } else {
            css.bottom = _pos.bottom + 'px';
          }
          if (_same.left) {
            css.left = _pos.left + 'px';
          } else {
            css.right = _pos.right + 'px';
          }
        }
      };
      var moved = false;
      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
        css.position = 'absolute';
        transcribe(same.page, pos.page);
      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
        css.position = 'fixed';
        transcribe(same.viewport, pos.viewport);
      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
        (function () {
          css.position = 'absolute';
          var offsetParent = _this8.cache('target-offsetparent', function () {
            return getOffsetParent(_this8.target);
          });
          if (getOffsetParent(_this8.element) !== offsetParent) {
            defer(function () {
              _this8.element.parentNode.removeChild(_this8.element);
              offsetParent.appendChild(_this8.element);
            });
          }
          transcribe(same.offset, pos.offset);
          moved = true;
        })();
      } else {
        css.position = 'absolute';
        transcribe({ top: true, left: true }, pos.page);
      }
      if (!moved) {
        if (this.options.bodyElement) {
          this.options.bodyElement.appendChild(this.element);
        } else {
          var offsetParentIsBody = true;
          var currentNode = this.element.parentNode;
          while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
            if (getComputedStyle(currentNode).position !== 'static') {
              offsetParentIsBody = false;
              break;
            }
            currentNode = currentNode.parentNode;
          }
          if (!offsetParentIsBody) {
            this.element.parentNode.removeChild(this.element);
            this.element.ownerDocument.body.appendChild(this.element);
          }
        }
      }
      var writeCSS = {};
      var write = false;
      for (var key in css) {
        var val = css[key];
        var elVal = this.element.style[key];
        if (elVal !== val) {
          write = true;
          writeCSS[key] = val;
        }
      }
      if (write) {
        defer(function () {
          extend(_this8.element.style, writeCSS);
          _this8.trigger('repositioned');
        });
      }
    }
  }]);
  return TetherClass;
})(Evented);
TetherClass.modules = [];
TetherBase.position = position;
var Tether = extend(TetherClass, TetherBase);
var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];
function getBoundingRect(tether, to) {
  if (to === 'scrollParent') {
    to = tether.scrollParents[0];
  } else if (to === 'window') {
    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
  }
  if (to === document) {
    to = to.documentElement;
  }
  if (typeof to.nodeType !== 'undefined') {
    (function () {
      var node = to;
      var size = getBounds(to);
      var pos = size;
      var style = getComputedStyle(to);
      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];
      if (node.ownerDocument !== document) {
        var win = node.ownerDocument.defaultView;
        to[0] += win.pageXOffset;
        to[1] += win.pageYOffset;
        to[2] += win.pageXOffset;
        to[3] += win.pageYOffset;
      }
      BOUNDS_FORMAT.forEach(function (side, i) {
        side = side[0].toUpperCase() + side.substr(1);
        if (side === 'Top' || side === 'Left') {
          to[i] += parseFloat(style['border' + side + 'Width']);
        } else {
          to[i] -= parseFloat(style['border' + side + 'Width']);
        }
      });
    })();
  }
  return to;
}
TetherBase.modules.push({
  position: function position(_ref2) {
    var _this9 = this;
    var top = _ref2.top;
    var left = _ref2.left;
    var targetAttachment = _ref2.targetAttachment;
    if (!this.options.constraints) {
      return true;
    }
    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this9.element);
    });
    var height = _cache.height;
    var width = _cache.width;
    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
      var _lastSize2 = this.lastSize;
      width = _lastSize2.width;
      height = _lastSize2.height;
    }
    var targetSize = this.cache('target-bounds', function () {
      return _this9.getTargetBounds();
    });
    var targetHeight = targetSize.height;
    var targetWidth = targetSize.width;
    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];
    this.options.constraints.forEach(function (constraint) {
      var outOfBoundsClass = constraint.outOfBoundsClass;
      var pinnedClass = constraint.pinnedClass;
      if (outOfBoundsClass) {
        allClasses.push(outOfBoundsClass);
      }
      if (pinnedClass) {
        allClasses.push(pinnedClass);
      }
    });
    allClasses.forEach(function (cls) {
      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
        allClasses.push(cls + '-' + side);
      });
    });
    var addClasses = [];
    var tAttachment = extend({}, targetAttachment);
    var eAttachment = extend({}, this.attachment);
    this.options.constraints.forEach(function (constraint) {
      var to = constraint.to;
      var attachment = constraint.attachment;
      var pin = constraint.pin;
      if (typeof attachment === 'undefined') {
        attachment = '';
      }
      var changeAttachX = undefined,
          changeAttachY = undefined;
      if (attachment.indexOf(' ') >= 0) {
        var _attachment$split = attachment.split(' ');
        var _attachment$split2 = _slicedToArray(_attachment$split, 2);
        changeAttachY = _attachment$split2[0];
        changeAttachX = _attachment$split2[1];
      } else {
        changeAttachX = changeAttachY = attachment;
      }
      var bounds = getBoundingRect(_this9, to);
      if (changeAttachY === 'target' || changeAttachY === 'both') {
        if (top < bounds[1] && tAttachment.top === 'top') {
          top += targetHeight;
          tAttachment.top = 'bottom';
        }
        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
          top -= targetHeight;
          tAttachment.top = 'top';
        }
      }
      if (changeAttachY === 'together') {
        if (tAttachment.top === 'top') {
          if (eAttachment.top === 'bottom' && top < bounds[1]) {
            top += targetHeight;
            tAttachment.top = 'bottom';
            top += height;
            eAttachment.top = 'top';
          } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
            top -= height - targetHeight;
            tAttachment.top = 'bottom';
            eAttachment.top = 'bottom';
          }
        }
        if (tAttachment.top === 'bottom') {
          if (eAttachment.top === 'top' && top + height > bounds[3]) {
            top -= targetHeight;
            tAttachment.top = 'top';
            top -= height;
            eAttachment.top = 'bottom';
          } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
            top += height - targetHeight;
            tAttachment.top = 'top';
            eAttachment.top = 'top';
          }
        }
        if (tAttachment.top === 'middle') {
          if (top + height > bounds[3] && eAttachment.top === 'top') {
            top -= height;
            eAttachment.top = 'bottom';
          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
            top += height;
            eAttachment.top = 'top';
          }
        }
      }
      if (changeAttachX === 'target' || changeAttachX === 'both') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          left += targetWidth;
          tAttachment.left = 'right';
        }
        if (left + width > bounds[2] && tAttachment.left === 'right') {
          left -= targetWidth;
          tAttachment.left = 'left';
        }
      }
      if (changeAttachX === 'together') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          if (eAttachment.left === 'right') {
            left += targetWidth;
            tAttachment.left = 'right';
            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'left') {
            left += targetWidth;
            tAttachment.left = 'right';
            left -= width;
            eAttachment.left = 'right';
          }
        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
          if (eAttachment.left === 'left') {
            left -= targetWidth;
            tAttachment.left = 'left';
            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'right') {
            left -= targetWidth;
            tAttachment.left = 'left';
            left += width;
            eAttachment.left = 'left';
          }
        } else if (tAttachment.left === 'center') {
          if (left + width > bounds[2] && eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (left < bounds[0] && eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          }
        }
      }
      if (changeAttachY === 'element' || changeAttachY === 'both') {
        if (top < bounds[1] && eAttachment.top === 'bottom') {
          top += height;
          eAttachment.top = 'top';
        }
        if (top + height > bounds[3] && eAttachment.top === 'top') {
          top -= height;
          eAttachment.top = 'bottom';
        }
      }
      if (changeAttachX === 'element' || changeAttachX === 'both') {
        if (left < bounds[0]) {
          if (eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'center') {
            left += width / 2;
            eAttachment.left = 'left';
          }
        }
        if (left + width > bounds[2]) {
          if (eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'center') {
            left -= width / 2;
            eAttachment.left = 'right';
          }
        }
      }
      if (typeof pin === 'string') {
        pin = pin.split(',').map(function (p) {
          return p.trim();
        });
      } else if (pin === true) {
        pin = ['top', 'left', 'right', 'bottom'];
      }
      pin = pin || [];
      var pinned = [];
      var oob = [];
      if (top < bounds[1]) {
        if (pin.indexOf('top') >= 0) {
          top = bounds[1];
          pinned.push('top');
        } else {
          oob.push('top');
        }
      }
      if (top + height > bounds[3]) {
        if (pin.indexOf('bottom') >= 0) {
          top = bounds[3] - height;
          pinned.push('bottom');
        } else {
          oob.push('bottom');
        }
      }
      if (left < bounds[0]) {
        if (pin.indexOf('left') >= 0) {
          left = bounds[0];
          pinned.push('left');
        } else {
          oob.push('left');
        }
      }
      if (left + width > bounds[2]) {
        if (pin.indexOf('right') >= 0) {
          left = bounds[2] - width;
          pinned.push('right');
        } else {
          oob.push('right');
        }
      }
      if (pinned.length) {
        (function () {
          var pinnedClass = undefined;
          if (typeof _this9.options.pinnedClass !== 'undefined') {
            pinnedClass = _this9.options.pinnedClass;
          } else {
            pinnedClass = _this9.getClass('pinned');
          }
          addClasses.push(pinnedClass);
          pinned.forEach(function (side) {
            addClasses.push(pinnedClass + '-' + side);
          });
        })();
      }
      if (oob.length) {
        (function () {
          var oobClass = undefined;
          if (typeof _this9.options.outOfBoundsClass !== 'undefined') {
            oobClass = _this9.options.outOfBoundsClass;
          } else {
            oobClass = _this9.getClass('out-of-bounds');
          }
          addClasses.push(oobClass);
          oob.forEach(function (side) {
            addClasses.push(oobClass + '-' + side);
          });
        })();
      }
      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
        eAttachment.left = tAttachment.left = false;
      }
      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
        eAttachment.top = tAttachment.top = false;
      }
      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this9.attachment.top || eAttachment.left !== _this9.attachment.left) {
        _this9.updateAttachClasses(eAttachment, tAttachment);
        _this9.trigger('update', {
          attachment: eAttachment,
          targetAttachment: tAttachment
        });
      }
    });
    defer(function () {
      if (_this9.options.addTargetClasses !== false) {
        updateClasses(_this9.target, addClasses, allClasses);
      }
      updateClasses(_this9.element, addClasses, allClasses);
    });
    return { top: top, left: left };
  }
});
TetherBase.modules.push({
  position: function position(_ref3) {
    var _this10 = this;
    var top = _ref3.top;
    var left = _ref3.left;
    var _cache2 = this.cache('element-bounds', function () {
      return getBounds(_this10.element);
    });
    var height = _cache2.height;
    var width = _cache2.width;
    var targetPos = this.getTargetBounds();
    var bottom = top + height;
    var right = left + width;
    var abutted = [];
    if (top <= targetPos.bottom && bottom >= targetPos.top) {
      ['left', 'right'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === left || targetPosSide === right) {
          abutted.push(side);
        }
      });
    }
    if (left <= targetPos.right && right >= targetPos.left) {
      ['top', 'bottom'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === top || targetPosSide === bottom) {
          abutted.push(side);
        }
      });
    }
    var allClasses = [];
    var addClasses = [];
    var sides = ['left', 'top', 'right', 'bottom'];
    allClasses.push(this.getClass('abutted'));
    sides.forEach(function (side) {
      allClasses.push(_this10.getClass('abutted') + '-' + side);
    });
    if (abutted.length) {
      addClasses.push(this.getClass('abutted'));
    }
    abutted.forEach(function (side) {
      addClasses.push(_this10.getClass('abutted') + '-' + side);
    });
    defer(function () {
      if (_this10.options.addTargetClasses !== false) {
        updateClasses(_this10.target, addClasses, allClasses);
      }
      updateClasses(_this10.element, addClasses, allClasses);
    });
    return true;
  }
});
TetherBase.modules.push({
  position: function position(_ref4) {
    var top = _ref4.top;
    var left = _ref4.left;
    if (!this.options.shift) {
      return undefined;
    }
    var shift = this.options.shift;
    if (typeof this.options.shift === 'function') {
      shift = this.options.shift.call(this, { top: top, left: left });
    }
    var shiftTop = undefined,
        shiftLeft = undefined;
    if (typeof shift === 'string') {
      shift = shift.split(' ');
      shift[1] = shift[1] || shift[0];
      var _shift = shift;
      var _shift2 = _slicedToArray(_shift, 2);
      shiftTop = _shift2[0];
      shiftLeft = _shift2[1];
      shiftTop = parseFloat(shiftTop, 10);
      shiftLeft = parseFloat(shiftLeft, 10);
    } else {
      shiftTop = shift.top;
      shiftLeft = shift.left;
    }
    top += shiftTop;
    left += shiftLeft;
    return { top: top, left: left };
  }
});
return Tether;
}));
});

var defaultProps$49 = {
  isOpen: false,
  tetherRef: function tetherRef() {}
};
var TetherContent = function (_React$Component) {
  inherits(TetherContent, _React$Component);
  function TetherContent() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck$1(this, TetherContent);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TetherContent.__proto__ || Object.getPrototypeOf(TetherContent)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
      _this.handleProps();
    }, _this.componentDidUpdate = function (prevProps) {
      if (_this.props.isOpen !== prevProps.isOpen) {
        _this.handleProps();
      } else if (_this.element) {
        _this.renderIntoSubtree();
      }
    }, _this.componentWillUnmount = function () {
      _this.hide();
    }, _this.getTarget = function () {
      var target = _this.props.tether.target;
      if (lodash_omit$1(target)) {
        return target();
      }
      return target;
    }, _this.getTetherConfig = function () {
      var config = _extends({}, _this.props.tether);
      config.element = _this.element;
      config.target = _this.getTarget();
      return config;
    }, _this.handleDocumentClick = function (e) {
      var container = _this.element;
      if (e.target === container || !container.contains(e.target)) {
        _this.toggle();
      }
    }, _this.handleProps = function () {
      if (_this.props.isOpen) {
        _this.show();
      } else {
        _this.hide();
      }
    }, _this.hide = function () {
      document.removeEventListener('click', _this.handleDocumentClick, true);
      if (_this.element) {
        document.body.removeChild(_this.element);
        ReactDOM.unmountComponentAtNode(_this.element);
        _this.element = null;
      }
      if (_this.tether) {
        _this.tether.destroy();
        _this.tether = null;
        _this.props.tetherRef(_this.tether);
      }
    }, _this.show = function () {
      document.addEventListener('click', _this.handleDocumentClick, true);
      _this.element = document.createElement('div');
      _this.element.className = _this.props.className;
      document.body.appendChild(_this.element);
      _this.renderIntoSubtree();
      _this.tether = new tether$1(_this.getTetherConfig());
      _this.props.tetherRef(_this.tether);
      _this.tether.position();
      _this.element.childNodes[0].focus();
    }, _this.toggle = function (e) {
      if (_this.props.disabled) {
        return e && e.preventDefault();
      }
      return _this.props.toggle();
    }, _this.renderIntoSubtree = function () {
      ReactDOM.unstable_renderSubtreeIntoContainer(_this, _this.renderChildren(), _this.element);
    }, _this.renderChildren = function () {
      var _this$props = _this.props,
          children = _this$props.children,
          style = _this$props.style;
      return React.cloneElement(children, { style: style });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  createClass$1(TetherContent, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return TetherContent;
}(React.Component);
TetherContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  toggle: PropTypes.func.isRequired,
  tether: PropTypes.object.isRequired,
  tetherRef: PropTypes.func,
  style: PropTypes.node
};
TetherContent.defaultProps = defaultProps$49;

var defaultProps$47 = {
  isOpen: false,
  tag: 'div',
  theme: bsTheme
};
var defaultTetherConfig = {
  classPrefix: 'bs-tether',
  classes: { element: 'dropdown', enabled: 'show' },
  constraints: [{ to: 'scrollParent', attachment: 'together none' }, { to: 'window', attachment: 'together none' }]
};
var DropdownUnstyled = function (_React$Component) {
  inherits(DropdownUnstyled, _React$Component);
  function DropdownUnstyled() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck$1(this, DropdownUnstyled);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = DropdownUnstyled.__proto__ || Object.getPrototypeOf(DropdownUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.getTetherConfig = function (childProps) {
      var target = function target() {
        return _this.getTetherTarget();
      };
      var vElementAttach = 'top';
      var hElementAttach = 'left';
      var vTargetAttach = 'bottom';
      var hTargetAttach = 'left';
      if (childProps.right) {
        hElementAttach = 'right';
        hTargetAttach = 'right';
      }
      if (_this.props.dropup) {
        vElementAttach = 'bottom';
        vTargetAttach = 'top';
      }
      return _extends({}, defaultTetherConfig, {
        attachment: vElementAttach + ' ' + hElementAttach,
        targetAttachment: vTargetAttach + ' ' + hTargetAttach,
        target: target
      }, _this.props.tether);
    }, _this.addEvents = function () {
      document.addEventListener('click', _this.handleDocumentClick, true);
    }, _this.removeEvents = function () {
      document.removeEventListener('click', _this.handleDocumentClick, true);
    }, _this.handleDocumentClick = function (e) {
      var container = ReactDOM.findDOMNode(_this);
      if (container.contains(e.target) && container !== e.target) {
        return;
      }
      _this.toggle();
    }, _this.toggle = function (e) {
      if (_this.props.disabled) {
        return e && e.preventDefault();
      }
      return _this.props.toggle();
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  createClass$1(DropdownUnstyled, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        toggle: this.props.toggle,
        isOpen: this.props.isOpen
      };
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.handleProps();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen) {
        this.handleProps();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeEvents();
    }
  }, {
    key: 'getTetherTarget',
    value: function getTetherTarget() {
      var container = ReactDOM.findDOMNode(this);
      return container.querySelector('[data-toggle="dropdown"]');
    }
  }, {
    key: 'handleProps',
    value: function handleProps() {
      if (this.props.tether) {
        return;
      }
      if (this.props.isOpen) {
        this.addEvents();
      } else {
        this.removeEvents();
      }
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _this2 = this;
      var _props = this.props,
          tether = _props.tether,
          children = _props.children,
          attrs = objectWithoutProperties(_props, ['tether', 'children']);
      attrs.toggle = this.toggle;
      return React.Children.map(React.Children.toArray(children), function (child) {
        if (tether && child.type === DropdownMenu) {
          var tetherConfig = _this2.getTetherConfig(child.props);
          return React.createElement(
            TetherContent,
            _extends({}, attrs, { tether: tetherConfig }),
            child
          );
        }
        return child;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _cn;
      var _omit = lodash_omit$1(this.props, ['toggle', 'tether', 'theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          dropup = _omit.dropup,
          group = _omit.group,
          size = _omit.size,
          Tag = _omit.tag,
          isOpen = _omit.isOpen,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'dropup', 'group', 'size', 'tag', 'isOpen']);
      var classes = mapToCssModules(classnames$1(className, (_cn = {
        'btn-group': group
      }, defineProperty(_cn, 'btn-group-' + size, !!size), defineProperty(_cn, 'dropdown', !group), defineProperty(_cn, 'show', isOpen), defineProperty(_cn, 'dropup', dropup), _cn)), cssModule);
      return React.createElement(
        Tag,
        _extends({}, attributes, {
          className: classes
        }),
        this.renderChildren()
      );
    }
  }]);
  return DropdownUnstyled;
}(React.Component);
DropdownUnstyled.propTypes = {
  disabled: PropTypes.bool,
  dropup: PropTypes.bool,
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  size: PropTypes.string,
  tag: PropTypes.string,
  tether: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  toggle: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  theme: PropTypes.object
};
DropdownUnstyled.childContextTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};
var Dropdown = styled(DropdownUnstyled).withConfig({
  displayName: 'Dropdown'
})(['', ''], function (props) {
  return '\n    &.dropup,\n    &.dropdown {\n      position: relative;\n    }\n\n    & .dropdown-hide {\n      display: none;\n    }\n    \n    & .dropdown-toggle {\n      /* Generate the caret automatically */\n      &::after {\n        display: inline-block;\n        width: 0;\n        height: 0;\n        margin-left: ' + props.theme['$caret-width'] + ';\n        vertical-align: middle;\n        content: \'\';\n        border-top: ' + props.theme['$caret-width'] + ' solid;\n        border-right: ' + props.theme['$caret-width'] + ' solid transparent;\n        border-left: ' + props.theme['$caret-width'] + ' solid transparent;\n      }\n\n      /* Prevent the focus on the dropdown toggle when closing dropdowns */\n      &:focus {\n        outline: 0;\n      }\n    }\n\n    &.dropup {\n      .dropdown-toggle {\n        &::after {\n          border-top: 0;\n          border-bottom: ' + props.theme['$caret-width'] + ' solid;\n        }\n      }\n    }\n\n    & .dropdown-menu {\n      clear: left;\n      position: absolute;\n      top: 100%;\n      left: 0;\n      z-index: ' + props.theme['$zindex-dropdown'] + ';\n      display: none; // none by default, but block on "open" of the menu\n      float: left;\n      min-width: ' + props.theme['$dropdown-min-width'] + ';\n      padding: ' + props.theme['$dropdown-padding-y'] + ' 0;\n      margin: ' + props.theme['$dropdown-margin-top'] + ' 0; /* override default ul */\n      font-size: ' + props.theme['$font-size-base'] + ';\n      color: ' + props.theme['$body-color'] + ';\n      text-align: left; /* Ensures proper alignment if parent has it changed (e.g., modal footer) */\n      list-style: none;\n      background-color: ' + props.theme['$dropdown-bg'] + ';\n      background-clip: padding-box;\n      border: ' + props.theme['$dropdown-border-width'] + ' solid ' + props.theme['$dropdown-border-color'] + ';\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$border-radius']) + '\n      ' + boxShadow(props.theme['$enable-shadows'], props.theme['$dropdown-box-shadow']) + '\n    }\n\n    /* mixin from bootstrap 4, see : scss/mixins/_nav-divider.css */\n    & .dropdown-divider {\n      ' + navDivider(props.theme['$spacer-y'], props.theme['$dropdown-divider-bg']) + '\n    }\n\n    & .dropdown-item {\n      display: block;\n      width: 100%; /* For <button>s */\n      padding: 3px ' + props.theme['$dropdown-item-padding-x'] + ';\n      clear: both;\n      font-weight: ' + props.theme['$font-weight-normal'] + ';\n      color: ' + props.theme['$dropdown-link-color'] + ';\n      text-align: inherit; /* For <button>s */\n      white-space: nowrap; /* prevent links from randomly breaking onto new lines */\n      background: none; /* For <button>s */\n      border: 0; /* For <button>s */\n\n      ' + hoverFocus(props.theme['$enable-hover-media-query'], '\n        color: ' + props.theme['$dropdown-link-hover-color'] + ';\n        text-decoration: none;\n        background-color: ' + props.theme['$dropdown-link-hover-bg'] + '\n      ') + '\n\n      &.active,\n      &:active {\n        color: ' + props.theme['$dropdown-link-active-color'] + ';\n        text-decoration: none;\n        background-color: ' + props.theme['$dropdown-link-active-bg'] + '\n      }\n\n      &.disabled,\n      &:disabled{\n        color: ' + props.theme['$dropdown-link-disabled-color'] + ';\n        cursor: ' + props.theme['$cursor-disabled'] + ';\n        background-color: transparent;\n        ' + ifThen(props.theme['$enabled-gradients'], 'background-image: none; /* Remove CSS gradient */') + '\n      }\n    }\n\n    &.show {\n      /* show the menu */\n      &>.dropdown-menu {\n        display: block;\n      }\n\n      & > a {\n        outline: 0;\n      }\n    }\n\n\n    /* Menu positioning */\n\n    /* Add extra class to .dropdown-menu to flip the alignment of the dropdown*\n    /* menu with the parent. */\n    & .dropdown-menu-right {\n      right: 0;\n      left: auto; /* Reset the default from .dropdown-menu */\n    }\n\n    & .dropdown-menu-left {\n      right: auto;\n      left: 0;\n    }\n\n    /* Dropdown section headers */\n    & .dropdown-header {\n      display: block;\n      padding: ' + props.theme['$dropdown-padding-y'] + ' ' + props.theme['$dropdown-item-padding-x'] + ';\n      margin-bottom: 0; /* for use with heading elements */\n      font-size: ' + props.theme['$font-size-sm'] + ';\n      color: ' + props.theme['$dropdown-header-color'] + ';\n      white-space: nowrap; /* as with > li > a */\n    }\n    /* Dropdown section footers */\n    & .dropdown-footer {\n      display: block;\n      padding: ' + props.theme['$dropdown-padding-y'] + ' ' + props.theme['$dropdown-item-padding-x'] + ';\n      margin-bottom: 0; /* for use with heading elements */\n      font-size: ' + props.theme['$font-size-sm'] + ';\n      color: ' + props.theme['$dropdown-header-color'] + ';\n      white-space: nowrap; /* as with > li > a */\n    }\n    \n\n    /* Backdrop to catch body clicks on mobile, etc. */\n    & .dropdown-backdrop {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: ' + props.theme['$zindex-dropdown-backdrop'] + ';\n    }\n\n    /* Allow for dropdowns to go bottom up (aka, dropup-menu) */\n\n    /* Just add .dropup after the standard .dropdown class and you\'re set. */\n    /* TODO: abstract this so that the navbar fixed styles are not placed here? */\n\n    &.dropup {\n      .dropdown-menu {\n        top: auto;\n        bottom: 100%;\n        margin-bottom: ' + props.theme['$dropdown-margin-top'] + ';\n      }\n    }\n        \n    /* Added Mixin boutonGroup to enable dropdown to beneficiate from buttonGroup classes */\n    ' + buttonGroup(props.theme['$enable-shadows'], props.theme['$enable-rounded'], props.theme['$input-btn-border-width'], props.theme['$btn-toolbar-margin'], props.theme['$btn-padding-x'], props.theme['$btn-active-box-shadow'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm']) + '\n  ';
});
Dropdown.defaultProps = defaultProps$47;

var defaultProps$51 = { theme: bsTheme };
var H6Unstyled = function (_React$Component) {
  inherits(H6Unstyled, _React$Component);
  function H6Unstyled() {
    classCallCheck$1(this, H6Unstyled);
    return possibleConstructorReturn(this, (H6Unstyled.__proto__ || Object.getPrototypeOf(H6Unstyled)).apply(this, arguments));
  }
  createClass$1(H6Unstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          color = _omit.color,
          children = _omit.children,
          cssModule = _omit.cssModule,
          lead = _omit.lead,
          attributes = objectWithoutProperties(_omit, ['className', 'color', 'children', 'cssModule', 'lead']);
      var classes = mapToCssModules(classnames$1(className, lead ? 'lead' : false, color ? 'text-' + color : false), cssModule);
      return React.createElement(
        'h6',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return H6Unstyled;
}(React.Component);
H6Unstyled.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  lead: PropTypes.bool,
  theme: PropTypes.object,
  color: PropTypes.string,
  cssModule: PropTypes.object
};
var H6 = styled(H6Unstyled).withConfig({
  displayName: 'H6'
})(['', ''], function (props) {
  return '\n    font-size: ' + props.theme['$font-size-h6'] + ';\n    ' + typography(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n    \n    &.lead {\n     font-size: ' + props.theme['$lead-font-size'] + ';\n     font-weight: ' + props.theme['$lead-font-weight'] + ';\n    }\n    \n    /* Reboot Scss */\n    margin-top: 0;\n  ';
});
H6.defaultProps = defaultProps$51;

var defaultProps$50 = {
  tag: 'button'
};
var DropdownItem = function (_React$Component) {
  inherits(DropdownItem, _React$Component);
  function DropdownItem() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck$1(this, DropdownItem);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
      if (_this.props.disabled || _this.props.header || _this.props.divider) {
        e.preventDefault();
        return;
      }
      if (_this.props.onClick) {
        _this.props.onClick(e);
      }
      _this.context.toggle();
    }, _this.getTabIndex = function () {
      if (_this.props.disabled || _this.props.header || _this.props.divider) {
        return '-1';
      }
      return '0';
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  createClass$1(DropdownItem, [{
    key: 'render',
    value: function render() {
      var tabIndex = this.getTabIndex();
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          divider = _props.divider,
          disabled = _props.disabled,
          Tag = _props.tag,
          header = _props.header,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'divider', 'disabled', 'tag', 'header']);
      var classes = mapToCssModules(classnames$1(className, {
        disabled: disabled,
        'dropdown-item': !divider && !header,
        'dropdown-header': header,
        'dropdown-divider': divider
      }), cssModule);
      if (Tag === 'button') {
        if (header) {
          Tag = H6;
        } else if (divider) {
          Tag = 'div';
        }
      }
      return React.createElement(Tag, _extends({
        tabIndex: tabIndex,
        className: classes,
        onClick: this.onClick
      }, attributes));
    }
  }]);
  return DropdownItem;
}(React.Component);
DropdownItem.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  header: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
DropdownItem.contextTypes = {
  toggle: PropTypes.func
};
DropdownItem.defaultProps = defaultProps$50;

var defaultProps$52 = {
  'data-toggle': 'dropdown',
  'aria-haspopup': true,
  color: 'secondary'
};
var DropdownToggle = function (_React$Component) {
  inherits(DropdownToggle, _React$Component);
  function DropdownToggle() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck$1(this, DropdownToggle);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = DropdownToggle.__proto__ || Object.getPrototypeOf(DropdownToggle)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
      if (_this.props.disabled) {
        e.preventDefault();
        return;
      }
      if (_this.props.nav && !_this.props.tag) {
        e.preventDefault();
      }
      if (_this.props.onClick) {
        _this.props.onClick(e);
      }
      _this.context.toggle();
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  createClass$1(DropdownToggle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          caret = _props.caret,
          split = _props.split,
          nav = _props.nav,
          tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'caret', 'split', 'nav', 'tag']);
      var ariaLabel = attributes['aria-label'] || 'Toggle Dropdown';
      var classes = mapToCssModules(classnames$1(className, {
        'dropdown-toggle': caret || split,
        'dropdown-toggle-split': split,
        active: this.context.isOpen,
        'nav-link': nav
      }), cssModule);
      var children = attributes.children || React.createElement(
        'span',
        { className: 'sr-only' },
        ariaLabel
      );
      var Tag = void 0;
      if (nav && !tag) {
        Tag = A;
        attributes.href = '#';
      } else if (!tag) {
        Tag = Button;
      } else {
        Tag = tag;
      }
      return React.createElement(
        Tag,
        _extends({
          className: classes,
          onClick: this.onClick,
          'aria-haspopup': 'true',
          'aria-expanded': this.context.isOpen
        }, attributes),
        children
      );
    }
  }]);
  return DropdownToggle;
}(React.Component);
DropdownToggle.propTypes = {
  caret: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'data-toggle': PropTypes.string,
  'aria-haspopup': PropTypes.bool,
  split: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  nav: PropTypes.bool
};
DropdownToggle.contextTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};
DropdownToggle.defaultProps = defaultProps$52;

var propTypes = {
  children: PropTypes.node,
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};
var ButtonDropdown = function ButtonDropdown(props) {
  return React.createElement(Dropdown, _extends({}, props, { group: true }));
};
ButtonDropdown.propTypes = propTypes;

var defaultProps$53 = {
  theme: bsTheme,
  tag: 'div',
  role: 'group'
};
var ButtonGroupUnstyled = function (_React$Component) {
  inherits(ButtonGroupUnstyled, _React$Component);
  function ButtonGroupUnstyled() {
    classCallCheck$1(this, ButtonGroupUnstyled);
    return possibleConstructorReturn(this, (ButtonGroupUnstyled.__proto__ || Object.getPrototypeOf(ButtonGroupUnstyled)).apply(this, arguments));
  }
  createClass$1(ButtonGroupUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          size = _omit.size,
          vertical = _omit.vertical,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'size', 'vertical', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames$1(className, vertical ? 'btn-group-vertical' : 'btn-group', defineProperty({}, 'btn-group-' + size, size)), cssModule)
      }, attributes));
    }
  }]);
  return ButtonGroupUnstyled;
}(React.Component);
ButtonGroupUnstyled.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  vertical: PropTypes.bool,
  theme: PropTypes.object
};
var ButtonGroup = styled(ButtonGroupUnstyled).withConfig({
  displayName: 'ButtonGroup'
})(['', '  '], function (props) {
  return '\n    ' + buttonGroup(props.theme['$enable-shadows'], props.theme['$enable-rounded'], props.theme['$input-btn-border-width'], props.theme['$btn-toolbar-margin'], props.theme['$btn-padding-x'], props.theme['$btn-active-box-shadow'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm']) + '\n  ';
});
ButtonGroup.defaultProps = defaultProps$53;

var defaultProps$54 = {
  tag: 'div',
  role: 'toolbar',
  theme: bsTheme
};
var ButtonToolbarUnstyled = function (_React$Component) {
  inherits(ButtonToolbarUnstyled, _React$Component);
  function ButtonToolbarUnstyled() {
    classCallCheck$1(this, ButtonToolbarUnstyled);
    return possibleConstructorReturn(this, (ButtonToolbarUnstyled.__proto__ || Object.getPrototypeOf(ButtonToolbarUnstyled)).apply(this, arguments));
  }
  createClass$1(ButtonToolbarUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames$1(className, 'btn-toolbar'), cssModule)
      }, attributes));
    }
  }]);
  return ButtonToolbarUnstyled;
}(React.Component);
ButtonToolbarUnstyled.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  theme: PropTypes.object
};
var ButtonToolbar = styled(ButtonToolbarUnstyled).withConfig({
  displayName: 'ButtonToolbar'
})(['', '  '], function (props) {
  return '\n    ' + buttonGroup(props.theme['$enable-shadows'], props.theme['$enable-rounded'], props.theme['$input-btn-border-width'], props.theme['$btn-toolbar-margin'], props.theme['$btn-padding-x'], props.theme['$btn-active-box-shadow'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm']) + '\n  ';
});
ButtonToolbar.defaultProps = defaultProps$54;

var defaultProps$55 = { theme: bsTheme };
var Caption = styled.caption.withConfig({
  displayName: 'Caption'
})(['', ''], function (props) {
  return '\n    padding-top: ' + props.theme['$table-cell-padding'] + ';\n    padding-bottom: ' + props.theme['$table-cell-padding'] + ';\n    color: ' + props.theme['$text-muted'] + ';\n    text-align: left;\n    caption-side: top;\n  ';
});
Caption.defaultProps = defaultProps$55;

var defaultProps$56 = {
  tag: 'code',
  theme: bsTheme
};
var CodeUnstyled = function (_React$Component) {
  inherits(CodeUnstyled, _React$Component);
  function CodeUnstyled() {
    classCallCheck$1(this, CodeUnstyled);
    return possibleConstructorReturn(this, (CodeUnstyled.__proto__ || Object.getPrototypeOf(CodeUnstyled)).apply(this, arguments));
  }
  createClass$1(CodeUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          children = _omit.children,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['className', 'children', 'tag']);
      return React.createElement(
        Tag,
        _extends({ className: className }, attributes),
        children
      );
    }
  }]);
  return CodeUnstyled;
}(React.Component);
CodeUnstyled.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.object,
  tag: PropTypes.string
};
var Code = styled(CodeUnstyled).withConfig({
  displayName: 'Code'
})(['', ''], function (props) {
  return '\n    /* Inline code */\n    padding: ' + props.theme['$code-padding-y'] + ' ' + props.theme['$code-padding-x'] + ';\n    font-size: ' + props.theme['$code-font-size'] + ';\n    color: ' + props.theme['$code-color'] + ';\n    background-color: ' + props.theme['$code-bg'] + ';\n    ' + borderRadius(props.theme['$enable-rounded'], props.theme['$border-radius']) + ';\n    \n    /* Streamline the style when inside anchors to avoid broken underline and more */\n    a > & {\n      padding: 0;\n      color: inherit;\n      background-color: inherit;\n    }\n    \n    /* Bootstrap 4 does not place this css rule straight into Code tag see: bootstrap/scss/code.scss */\n    font-family: ' + props.theme['$font-family-monospace'] + ';\n  ';
});
Code.defaultProps = defaultProps$56;

var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
var stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
var columnProps = PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string, PropTypes.shape({
  size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
  push: stringOrNumberProp,
  pull: stringOrNumberProp,
  offset: stringOrNumberProp
})]);
var defaultProps$57 = {
  theme: bsTheme,
  tag: 'div',
  widths: colWidths
};
var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? '' : 'col-' + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : 'col-' + colWidth + '-auto';
  }
  return isXs ? 'col-' + colSize : 'col-' + colWidth + '-' + colSize;
};
var ColUnstyled = function (_React$Component) {
  inherits(ColUnstyled, _React$Component);
  function ColUnstyled() {
    classCallCheck$1(this, ColUnstyled);
    return possibleConstructorReturn(this, (ColUnstyled.__proto__ || Object.getPrototypeOf(ColUnstyled)).apply(this, arguments));
  }
  createClass$1(ColUnstyled, [{
    key: 'render',
    value: function render() {
      var _this2 = this;
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          widths = _omit.widths,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'widths', 'tag']);
      var colClasses = [];
      widths.forEach(function (colWidth, i) {
        var columnProp = _this2.props[colWidth];
        if (!i && columnProp === undefined) {
          columnProp = true;
        }
        delete attributes[colWidth];
        if (!columnProp) {
          return;
        }
        var isXs = !i;
        var colClass = void 0;
        if ((typeof columnProp === 'undefined' ? 'undefined' : _typeof(columnProp)) === 'object') {
          var _cn;
          var colSizeInterfix = isXs ? '-' : '-' + colWidth + '-';
          colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
          colClasses.push(mapToCssModules(classnames$1((_cn = {}, defineProperty(_cn, colClass, columnProp.size || columnProp.size === ''), defineProperty(_cn, 'push' + colSizeInterfix + columnProp.push, columnProp.push), defineProperty(_cn, 'pull' + colSizeInterfix + columnProp.pull, columnProp.pull), defineProperty(_cn, 'offset' + colSizeInterfix + columnProp.offset, columnProp.offset), _cn))), cssModule);
        } else {
          colClass = getColumnSizeClass(isXs, colWidth, columnProp);
          colClasses.push(colClass);
        }
      });
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames$1(className, colClasses), cssModule)
      }, attributes));
    }
  }]);
  return ColUnstyled;
}(React.Component);
ColUnstyled.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  widths: PropTypes.array,
  theme: PropTypes.object
};
var Col = styled(ColUnstyled).withConfig({
  displayName: 'Col'
})(['', ''], function (props) {
  return '\n    ' + makeGridColumns(props.theme['$enable-grid-classes'], props.theme['$grid-columns'], props.theme['$grid-gutter-widths'], props.theme['$grid-breakpoints']) + '\n  ';
});
Col.defaultProps = defaultProps$57;

var SHOW = 'SHOW';
var SHOWN = 'SHOWN';
var HIDE = 'HIDE';
var HIDDEN = 'HIDDEN';
var Collapse = function (_Component) {
  inherits(Collapse, _Component);
  function Collapse(props) {
    classCallCheck$1(this, Collapse);
    var _this = possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props));
    _this.state = {
      collapse: props.isOpen ? SHOWN : HIDDEN,
      height: null
    };
    _this.element = null;
    return _this;
  }
  createClass$1(Collapse, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;
      var willOpen = nextProps.isOpen;
      var collapse = this.state.collapse;
      if (willOpen && collapse === HIDDEN) {
        this.setState({ collapse: SHOW }, function () {
          _this2.setState({ height: _this2.getHeight() });
          _this2.transitionTag = setTimeout(function () {
            _this2.setState({
              collapse: SHOWN,
              height: null
            });
          }, _this2.getDelay('show'));
        });
      } else if (!willOpen && collapse === SHOWN) {
        this.setState({ height: this.getHeight() }, function () {
          _this2.setState({
            collapse: HIDE,
            height: _this2.getHeight()
          }, function () {
            _this2.setState({ height: 0 });
          });
        });
        this.transitionTag = setTimeout(function () {
          _this2.setState({
            collapse: HIDDEN,
            height: null
          });
        }, this.getDelay('hide'));
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.collapse === SHOWN && prevState && prevState.collapse !== SHOWN) {
        this.props.onOpened();
      }
      if (this.state.collapse === HIDDEN && prevState && prevState.collapse !== HIDDEN) {
        this.props.onClosed();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.transitionTag);
    }
  }, {
    key: 'getDelay',
    value: function getDelay(key) {
      var delay = this.props.delay;
      if ((typeof delay === 'undefined' ? 'undefined' : _typeof(delay)) === 'object') {
        return delay[key];
      }
      return delay;
    }
  }, {
    key: 'getHeight',
    value: function getHeight() {
      return this.element.scrollHeight;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;
      var _omit = lodash_omit$1(this.props, ['isOpen', 'theme', 'delay', 'onOpened', 'onClosed']),
          navbar = _omit.navbar,
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['navbar', 'className', 'cssModule', 'tag']);
      var _state = this.state,
          collapse = _state.collapse,
          height = _state.height;
      var collapseClass = void 0;
      if (collapse === SHOW || collapse === HIDE) {
        collapseClass = 'collapsing';
      } else if (collapse === SHOWN) {
        collapseClass = 'collapse show';
      } else if (collapse === HIDDEN) {
        collapseClass = 'collapse';
      }
      var classes = mapToCssModules(classnames$1(className, collapseClass, navbar && 'navbar-collapse'), cssModule);
      var style = height === null ? null : { height: height };
      return React.createElement(Tag, _extends({}, attributes, {
        style: _extends({}, attributes.style, style),
        className: classes,
        ref: function ref(c) {
          _this3.element = c;
        }
      }));
    }
  }]);
  return Collapse;
}(Component);
Collapse.propTypes = {
  className: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  cssModule: PropTypes.object,
  navbar: PropTypes.bool,
  isOpen: PropTypes.bool,
  delay: PropTypes.oneOfType([PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }), PropTypes.number]),
  onOpened: PropTypes.func,
  onClosed: PropTypes.func
};
Collapse.defaultProps = {
  isOpen: false,
  theme: bsTheme,
  tag: 'div',
  delay: {
    show: 350,
    hide: 350
  },
  onOpened: function onOpened() {},
  onClosed: function onClosed() {}
};

var DdUnstyled = function (_React$Component) {
  inherits(DdUnstyled, _React$Component);
  function DdUnstyled() {
    classCallCheck$1(this, DdUnstyled);
    return possibleConstructorReturn(this, (DdUnstyled.__proto__ || Object.getPrototypeOf(DdUnstyled)).apply(this, arguments));
  }
  createClass$1(DdUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          attributes = objectWithoutProperties(_omit, ['className']);
      return React.createElement('dd', _extends({ className: className }, attributes));
    }
  }]);
  return DdUnstyled;
}(React.Component);
DdUnstyled.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.object
};
var Dd = styled(DdUnstyled).withConfig({
  displayName: 'Dd'
})(['  margin-bottom:.5rem;margin-left:0;', ''], function (props) {
  return '\n    ' + makeGridColumns(props.theme['$enable-grid-classes'], props.theme['$grid-columns'], props.theme['$grid-gutter-widths'], props.theme['$grid-breakpoints']) + '\n  ';
});

var DfnUnstyled = function (_React$Component) {
  inherits(DfnUnstyled, _React$Component);
  function DfnUnstyled() {
    classCallCheck$1(this, DfnUnstyled);
    return possibleConstructorReturn(this, (DfnUnstyled.__proto__ || Object.getPrototypeOf(DfnUnstyled)).apply(this, arguments));
  }
  createClass$1(DfnUnstyled, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          attributes = objectWithoutProperties(_props, ['className']);
      return React.createElement('dfn', _extends({
        className: className
      }, attributes));
    }
  }]);
  return DfnUnstyled;
}(React.Component);
DfnUnstyled.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
var Dfn = styled(DfnUnstyled).withConfig({
  displayName: 'Dfn'
})(['font-style:italic;']);

var Details = function (_React$Component) {
  inherits(Details, _React$Component);
  function Details() {
    classCallCheck$1(this, Details);
    return possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).apply(this, arguments));
  }
  createClass$1(Details, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          attributes = objectWithoutProperties(_props, ['className']);
      return React.createElement('details', _extends({ className: className }, attributes));
    }
  }]);
  return Details;
}(React.Component);
Details.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

var defaultProps$58 = { theme: bsTheme };
var DlUnstyled = function (_React$Component) {
  inherits(DlUnstyled, _React$Component);
  function DlUnstyled() {
    classCallCheck$1(this, DlUnstyled);
    return possibleConstructorReturn(this, (DlUnstyled.__proto__ || Object.getPrototypeOf(DlUnstyled)).apply(this, arguments));
  }
  createClass$1(DlUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          attributes = objectWithoutProperties(_omit, ['className']);
      return React.createElement('dl', _extends({ className: className }, attributes));
    }
  }]);
  return DlUnstyled;
}(React.Component);
DlUnstyled.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.object
};
var Dl = styled(DlUnstyled).withConfig({
  displayName: 'Dl'
})(['  margin-top:0;margin-bottom:1rem;', ''], function (props) {
  return '\n    ' + makeRow(props.theme['$enable-grid-classes'], props.theme['$grid-gutter-widths']) + '\n  ';
});
Dl.defaultProps = defaultProps$58;

var defaultProps$59 = { theme: bsTheme };
var DtUnstyled = function (_React$Component) {
  inherits(DtUnstyled, _React$Component);
  function DtUnstyled() {
    classCallCheck$1(this, DtUnstyled);
    return possibleConstructorReturn(this, (DtUnstyled.__proto__ || Object.getPrototypeOf(DtUnstyled)).apply(this, arguments));
  }
  createClass$1(DtUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          attributes = objectWithoutProperties(_omit, ['className']);
      return React.createElement('dt', _extends({ className: className }, attributes));
    }
  }]);
  return DtUnstyled;
}(React.Component);
DtUnstyled.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.object
};
var Dt = styled(DtUnstyled).withConfig({
  displayName: 'Dt'
})(['  ', ''], function (props) {
  return '\n    /* Reboot Scss */\n    font-weight: ' + props.theme['$dt-font-weight'] + ';\n    ' + makeGridColumns(props.theme['$enable-grid-classes'], props.theme['$grid-columns'], props.theme['$grid-gutter-widths'], props.theme['$grid-breakpoints']) + '\n  ';
});
Dt.defaultProps = defaultProps$59;

var FaUnstyled = function (_React$Component) {
  inherits(FaUnstyled, _React$Component);
  function FaUnstyled() {
    classCallCheck$1(this, FaUnstyled);
    return possibleConstructorReturn(this, (FaUnstyled.__proto__ || Object.getPrototypeOf(FaUnstyled)).apply(this, arguments));
  }
  createClass$1(FaUnstyled, [{
    key: 'render',
    value: function render() {
      var _cn;
      var _props = this.props,
          className = _props.className,
          size = _props.size,
          color = _props.color,
          attributes = objectWithoutProperties(_props, ['className', 'size', 'color']);
      var classes = classnames$1(className, 'fa', (_cn = {}, defineProperty(_cn, 'text-' + color, color), defineProperty(_cn, 'fa-' + size, size), _cn));
      return React.createElement('i', {
        className: classnames$1(classes, Object.keys(attributes).map(function (key) {
          return 'fa-' + key;
        }))
      });
    }
  }]);
  return FaUnstyled;
}(React.Component);
FaUnstyled.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string
};
var Fa = styled(FaUnstyled).withConfig({
  displayName: 'Fa'
})(['&.fa-lg{vertical-align:-2%;}']);

var FaStacked = function (_React$Component) {
  inherits(FaStacked, _React$Component);
  function FaStacked() {
    classCallCheck$1(this, FaStacked);
    return possibleConstructorReturn(this, (FaStacked.__proto__ || Object.getPrototypeOf(FaStacked)).apply(this, arguments));
  }
  createClass$1(FaStacked, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          size = _props.size,
          attributes = objectWithoutProperties(_props, ['className', 'size']);
      return React.createElement('span', _extends({
        className: classnames$1(className, 'fa-stack', defineProperty({}, 'fa-' + size, size))
      }, attributes));
    }
  }]);
  return FaStacked;
}(React.Component);
FaStacked.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string
};

var defaultProps$60 = { theme: bsTheme };
var FieldsetUnstyled = function (_React$Component) {
  inherits(FieldsetUnstyled, _React$Component);
  function FieldsetUnstyled() {
    classCallCheck$1(this, FieldsetUnstyled);
    return possibleConstructorReturn(this, (FieldsetUnstyled.__proto__ || Object.getPrototypeOf(FieldsetUnstyled)).apply(this, arguments));
  }
  createClass$1(FieldsetUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          children = _omit.children,
          rest = objectWithoutProperties(_omit, ['className', 'children']);
      return React.createElement(
        'fieldset',
        _extends({
          className: className
        }, rest),
        children
      );
    }
  }]);
  return FieldsetUnstyled;
}(React.Component);
FieldsetUnstyled.propTypes = {
  theme: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
var Fieldset = styled(FieldsetUnstyled).withConfig({
  displayName: 'Fieldset'
})(['', ''], function (props) {
  return '\n    min-width: 0;\n    padding: 0;\n    margin: 0;\n    border: 0;\n\n    & .row {\n      ' + makeRow(props.theme['$enable-grid-classes'], props.theme['$grid-gutter-widths']) + '\n    }\n\n  ';
});
Fieldset.defaultProps = defaultProps$60;

var Footer = styled.footer.withConfig({
  displayName: 'Footer'
})(['']);

var defaultProps$61 = { theme: bsTheme };
var H1Unstyled = function (_React$Component) {
  inherits(H1Unstyled, _React$Component);
  function H1Unstyled() {
    classCallCheck$1(this, H1Unstyled);
    return possibleConstructorReturn(this, (H1Unstyled.__proto__ || Object.getPrototypeOf(H1Unstyled)).apply(this, arguments));
  }
  createClass$1(H1Unstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          color = _omit.color,
          children = _omit.children,
          cssModule = _omit.cssModule,
          lead = _omit.lead,
          attributes = objectWithoutProperties(_omit, ['className', 'color', 'children', 'cssModule', 'lead']);
      var classes = mapToCssModules(classnames$1(className, lead ? 'lead' : false, color ? 'text-' + color : false), cssModule);
      return React.createElement(
        'h1',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return H1Unstyled;
}(React.Component);
H1Unstyled.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  lead: PropTypes.bool,
  theme: PropTypes.object,
  color: PropTypes.string,
  cssModule: PropTypes.object
};
var H1 = styled(H1Unstyled).withConfig({
  displayName: 'H1'
})(['', ''], function (props) {
  return '\n    font-size: ' + props.theme['$font-size-h1'] + ';\n    ' + typography(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n\n    &.lead {\n      font-size: ' + props.theme['$lead-font-size'] + ';\n      font-weight: ' + props.theme['$lead-font-weight'] + ';\n    }\n\n    /* Reboot Scss */\n    margin-top: 0;\n  ';
});
H1.defaultProps = defaultProps$61;

var defaultProps$62 = { theme: bsTheme };
var H2Unstyled = function (_React$Component) {
  inherits(H2Unstyled, _React$Component);
  function H2Unstyled() {
    classCallCheck$1(this, H2Unstyled);
    return possibleConstructorReturn(this, (H2Unstyled.__proto__ || Object.getPrototypeOf(H2Unstyled)).apply(this, arguments));
  }
  createClass$1(H2Unstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          color = _omit.color,
          children = _omit.children,
          cssModule = _omit.cssModule,
          lead = _omit.lead,
          attributes = objectWithoutProperties(_omit, ['className', 'color', 'children', 'cssModule', 'lead']);
      var classes = mapToCssModules(classnames$1(className, lead ? 'lead' : false, color ? 'text-' + color : false), cssModule);
      return React.createElement(
        'h2',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return H2Unstyled;
}(React.Component);
H2Unstyled.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  lead: PropTypes.bool,
  theme: PropTypes.object,
  color: PropTypes.string,
  cssModule: PropTypes.object
};
var H2 = styled(H2Unstyled).withConfig({
  displayName: 'H2'
})(['', ''], function (props) {
  return '\n\n    font-size: ' + props.theme['$font-size-h2'] + ';\n    ' + typography(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n\n    &.lead {\n      font-size: ' + props.theme['$lead-font-size'] + ';\n      font-weight: ' + props.theme['$lead-font-weight'] + ';\n    }\n\n    /* Reboot Scss */\n    margin-top: 0;\n  ';
});
H2.defaultProps = defaultProps$62;

var defaultProps$63 = { theme: bsTheme };
var H3Unstyled = function (_React$Component) {
  inherits(H3Unstyled, _React$Component);
  function H3Unstyled() {
    classCallCheck$1(this, H3Unstyled);
    return possibleConstructorReturn(this, (H3Unstyled.__proto__ || Object.getPrototypeOf(H3Unstyled)).apply(this, arguments));
  }
  createClass$1(H3Unstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          color = _omit.color,
          children = _omit.children,
          cssModule = _omit.cssModule,
          lead = _omit.lead,
          attributes = objectWithoutProperties(_omit, ['className', 'color', 'children', 'cssModule', 'lead']);
      var classes = mapToCssModules(classnames$1(className, lead ? 'lead' : false, color ? 'text-' + color : false), cssModule);
      return React.createElement(
        'h3',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return H3Unstyled;
}(React.Component);
H3Unstyled.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  lead: PropTypes.bool,
  theme: PropTypes.object,
  color: PropTypes.string,
  cssModule: PropTypes.object
};
var H3 = styled(H3Unstyled).withConfig({
  displayName: 'H3'
})(['', ''], function (props) {
  return '\n    font-size: ' + props.theme['$font-size-h3'] + ';\n    ' + typography(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n\n    &.lead {\n      font-size: ' + props.theme['$lead-font-size'] + ';\n      font-weight: ' + props.theme['$lead-font-weight'] + ';\n    }\n\n    /* Reboot Scss */\n    margin-top: 0;\n  ';
});
H3.defaultProps = defaultProps$63;

var defaultProps$64 = { theme: bsTheme };
var H4Unstyled = function (_React$Component) {
  inherits(H4Unstyled, _React$Component);
  function H4Unstyled() {
    classCallCheck$1(this, H4Unstyled);
    return possibleConstructorReturn(this, (H4Unstyled.__proto__ || Object.getPrototypeOf(H4Unstyled)).apply(this, arguments));
  }
  createClass$1(H4Unstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          color = _omit.color,
          children = _omit.children,
          cssModule = _omit.cssModule,
          lead = _omit.lead,
          attributes = objectWithoutProperties(_omit, ['className', 'color', 'children', 'cssModule', 'lead']);
      var classes = mapToCssModules(classnames$1(className, lead ? 'lead' : false, color ? 'text-' + color : false), cssModule);
      return React.createElement(
        'h4',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return H4Unstyled;
}(React.Component);
H4Unstyled.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  lead: PropTypes.bool,
  theme: PropTypes.object,
  color: PropTypes.string,
  cssModule: PropTypes.object
};
var H4 = styled(H4Unstyled).withConfig({
  displayName: 'H4'
})(['', ''], function (props) {
  return '\n    font-size: ' + props.theme['$font-size-h4'] + ';\n    ' + typography(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n\n    &.lead {\n      font-size: ' + props.theme['$lead-font-size'] + ';\n      font-weight: ' + props.theme['$lead-font-weight'] + ';\n    }\n\n    /* Reboot Scss */\n    margin-top: 0;\n  ';
});
H4.defaultProps = defaultProps$64;

var defaultProps$65 = { theme: bsTheme };
var H5Unstyled = function (_React$Component) {
  inherits(H5Unstyled, _React$Component);
  function H5Unstyled() {
    classCallCheck$1(this, H5Unstyled);
    return possibleConstructorReturn(this, (H5Unstyled.__proto__ || Object.getPrototypeOf(H5Unstyled)).apply(this, arguments));
  }
  createClass$1(H5Unstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          color = _omit.color,
          children = _omit.children,
          cssModule = _omit.cssModule,
          lead = _omit.lead,
          attributes = objectWithoutProperties(_omit, ['className', 'color', 'children', 'cssModule', 'lead']);
      var classes = mapToCssModules(classnames$1(className, lead ? 'lead' : false, color ? 'text-' + color : false), cssModule);
      return React.createElement(
        'h5',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return H5Unstyled;
}(React.Component);
H5Unstyled.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  lead: PropTypes.bool,
  theme: PropTypes.object,
  color: PropTypes.string,
  cssModule: PropTypes.object
};
var H5 = styled(H5Unstyled).withConfig({
  displayName: 'H5'
})(['', ''], function (props) {
  return '\n    font-size: ' + props.theme['$font-size-h5'] + ';\n    ' + typography(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n \n    &.lead {\n     font-size: ' + props.theme['$lead-font-size'] + ';\n     font-weight: ' + props.theme['$lead-font-weight'] + ';\n    }\n\n    /* Reboot Scss */\n    margin-top: 0;\n  ';
});
H5.defaultProps = defaultProps$65;

var defaultProps$66 = { theme: bsTheme };
var Header = styled.header.withConfig({
  displayName: 'Header'
})(['', '  '], function (props) {
  return '\n    ' + navbar(props.theme['$grid-breakpoints'], props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$navbar-padding-y'], props.theme['$navbar-padding-x'], props.theme['$zindex-navbar'], props.theme['$zindex-navbar-fixed'], props.theme['$zindex-navbar-sticky'], props.theme['$navbar-brand-padding-y'], props.theme['$font-size-lg'], props.theme['$navbar-divider-padding-y'], props.theme['$navbar-toggler-padding-y'], props.theme['$navbar-toggler-padding-x'], props.theme['$navbar-toggler-font-size'], props.theme['$border-width'], props.theme['$navbar-toggler-border-radius'], props.theme['$navbar-light-active-color'], props.theme['$navbar-light-color'], props.theme['$navbar-light-hover-color'], props.theme['$navbar-light-toggler-border'], props.theme['$navbar-light-disabled-color'], props.theme['$navbar-light-toggler-bg'], props.theme['$navbar-inverse-active-color'], props.theme['$navbar-inverse-color'], props.theme['$navbar-inverse-hover-color'], props.theme['$navbar-inverse-toggler-border'], props.theme['$navbar-inverse-toggler-bg'], props.theme['$navbar-inverse-disabled-color']) + '\n    ' + ifThen(props.shadowHeader, 'box-shadow: 0 1px 4px 0 rgba(0,0,0,.37);') + '\n  ';
});
Header.defaultProps = defaultProps$66;

var defaultProps$67 = {
  theme: bsTheme
};
var Hr = styled.hr.withConfig({
  displayName: 'Hr'
})(['', ''], function (props) {
  return '\n    margin-top: ' + props.theme['$spacer-y'] + ';\n    margin-bottom: ' + props.theme['$spacer-y'] + ';\n    border: 0;\n    border-top: ' + props.theme['$hr-border-width'] + ' solid ' + props.theme['$hr-border-color'] + ';\n  ';
});
Hr.defaultProps = defaultProps$67;

function imgFluid() {
  return "\n    /* Part 1: Set a maximum relative to the parent */\n    max-width: 100%;\n    /* Part 2: Override the height to auto, otherwise images will be stretched */\n    /* when setting a width and height attribute on the img element. */\n    height: auto;\n  ";
}

var defaultProps$68 = {
  theme: bsTheme,
  tag: 'img'
};
var ImgUnstyled = function (_React$Component) {
  inherits(ImgUnstyled, _React$Component);
  function ImgUnstyled() {
    classCallCheck$1(this, ImgUnstyled);
    return possibleConstructorReturn(this, (ImgUnstyled.__proto__ || Object.getPrototypeOf(ImgUnstyled)).apply(this, arguments));
  }
  createClass$1(ImgUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          src = _omit.src,
          alt = _omit.alt,
          fluid = _omit.fluid,
          figure = _omit.figure,
          thumbnail = _omit.thumbnail,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['className', 'src', 'alt', 'fluid', 'figure', 'thumbnail', 'cssModule', 'tag']);
      var classes = mapToCssModules(classnames$1(className, fluid ? 'img-fluid' : false, thumbnail ? 'img-thumbnail' : false, figure ? 'figure-img' : false), cssModule);
      return React.createElement(Tag, _extends({
        className: classes,
        src: src,
        alt: alt
      }, attributes));
    }
  }]);
  return ImgUnstyled;
}(React.Component);
ImgUnstyled.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  fluid: PropTypes.bool,
  figure: PropTypes.bool,
  thumbnail: PropTypes.bool,
  className: PropTypes.string,
  theme: PropTypes.object,
  cssModule: PropTypes.object,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
var Img = styled(ImgUnstyled).withConfig({
  displayName: 'Img'
})(['', ''], function (props) {
  return '\n    \n    /* \n      Responsive images (ensure images does not scale beyond their parents)\n      This is purposefully opt-in via an explicit class rather than being the default for all <img>.\n      We previously tried the "images are responsive by default" approach in Bootstrap v2,\n      and abandoned it in Bootstrap v3 because it breaks lots of third-party widgets (including Google Maps)\n      which we are not expecting the images within themselves to be involuntarily resized.\n      See also https://github.com/twbs/bootstrap/issues/18178\n    */\n    \n    &.img-fluid {\n      ' + imgFluid() + '\n    }\n    \n    \n     /* Image thumbnails */ \n    &.img-thumbnail {\n      padding: ' + props.theme['$thumbnail-padding'] + ';\n      background-color: ' + props.theme['$thumbnail-bg'] + ';\n      border: ' + props.theme['$thumbnail-border-width'] + ' solid ' + props.theme['$thumbnail-border-color'] + ';\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$thumbnail-border-radius']) + '\n      ' + transition(props.theme['$enable-transitions'], props.theme['$thumbnail-transition']) + '\n      ' + boxShadow(props.theme['$enable-shadows'], props.theme['$thumbnail-box-shadow']) + '\n      /* Keep them at most 100% wide */\n      ' + imgFluid() + '\n    }\n   \n    &.figure-img {\n      margin-bottom: ' + props.theme['$spacer-halved'] + ';\n      line-height: 1;\n    }\n    \n    /* Reboot Scss */\n    \n    /*\n     By default, <img> are inline-block. This assumes that, and vertically\n     centers them. This will not apply should you reset them to block level.\n    */\n    vertical-align: middle;\n    /*\n     Note: <img> are deliberately not made responsive by default.\n     For the rationale behind this, see the comments on the .img-fluid class.\n    */\n  ';
});
Img.defaultProps = defaultProps$68;

var FigureUnstyled = function (_React$Component) {
  inherits(FigureUnstyled, _React$Component);
  function FigureUnstyled() {
    classCallCheck$1(this, FigureUnstyled);
    return possibleConstructorReturn(this, (FigureUnstyled.__proto__ || Object.getPrototypeOf(FigureUnstyled)).apply(this, arguments));
  }
  createClass$1(FigureUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          children = _omit.children,
          rest = objectWithoutProperties(_omit, ['className', 'children']);
      return React.createElement(
        'figure',
        _extends({ className: classnames$1('figure', className) }, rest),
        children
      );
    }
  }]);
  return FigureUnstyled;
}(React.Component);
FigureUnstyled.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  theme: PropTypes.object
};
var Figure = styled(FigureUnstyled).withConfig({
  displayName: 'Figure'
})(['&.figure{display:inline-block;}margin:0 0 1rem;']);

var defaultProps$69 = {
  theme: bsTheme
};
var FigCaptionUnstyled = function (_React$Component) {
  inherits(FigCaptionUnstyled, _React$Component);
  function FigCaptionUnstyled() {
    classCallCheck$1(this, FigCaptionUnstyled);
    return possibleConstructorReturn(this, (FigCaptionUnstyled.__proto__ || Object.getPrototypeOf(FigCaptionUnstyled)).apply(this, arguments));
  }
  createClass$1(FigCaptionUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          children = _omit.children,
          right = _omit.right,
          rest = objectWithoutProperties(_omit, ['className', 'children', 'right']);
      var classes = classnames$1('figure-caption', className, right ? 'text-right' : null);
      return React.createElement(
        'figcaption',
        _extends({
          className: classes
        }, rest),
        children
      );
    }
  }]);
  return FigCaptionUnstyled;
}(React.Component);
FigCaptionUnstyled.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.object,
  right: PropTypes.bool
};
var FigCaption = styled(FigCaptionUnstyled).withConfig({
  displayName: 'FigCaption'
})(['', ''], function (props) {
  return '\n    &.figure-caption {\n      font-size: ' + props.theme['$figure-caption-font-size'] + ';\n      color: ' + props.theme['$figure-caption-color'] + ';\n    }\n  ';
});
FigCaption.defaultProps = defaultProps$69;

var defaultProps$70 = {
  theme: bsTheme,
  type: 'text',
  tag: 'p'
};
var InputUnstyled = function (_React$Component) {
  inherits(InputUnstyled, _React$Component);
  function InputUnstyled() {
    classCallCheck$1(this, InputUnstyled);
    return possibleConstructorReturn(this, (InputUnstyled.__proto__ || Object.getPrototypeOf(InputUnstyled)).apply(this, arguments));
  }
  createClass$1(InputUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          type = _omit.type,
          size = _omit.size,
          state = _omit.state,
          tag = _omit.tag,
          addon = _omit.addon,
          staticInput = _omit.static,
          getRef = _omit.getRef,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'type', 'size', 'state', 'tag', 'addon', 'static', 'getRef']);
      var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
      var fileInput = type === 'file';
      var textareaInput = type === 'textarea';
      var selectInput = type === 'select';
      var Tag = selectInput || textareaInput ? type : 'input';
      var formControlClass = 'form-control';
      if (staticInput) {
        formControlClass = formControlClass + '-static';
        Tag = tag;
      } else if (fileInput) {
        formControlClass = formControlClass + '-file';
      } else if (checkInput) {
        if (addon) {
          formControlClass = null;
        } else {
          formControlClass = 'form-check-input';
        }
      }
      var classes = mapToCssModules(classnames$1(className, state ? 'form-control-' + state : false, size ? 'form-control-' + size : false, formControlClass), cssModule);
      if (Tag === 'input') {
        attributes.type = type;
      }
      return React.createElement(Tag, _extends({}, attributes, { ref: getRef, className: classes }));
    }
  }]);
  return InputUnstyled;
}(React.Component);
InputUnstyled.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.string,
  state: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  static: PropTypes.bool,
  addon: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  theme: PropTypes.object,
  onChange: PropTypes.func,
  indeterminate: PropTypes.bool
};
var Input = styled(InputUnstyled).withConfig({
  displayName: 'Input'
})(['', ''], function (props) {
  return '\n    /* Reboot Scss */\n    touch-action: manipulation;\n    \n    &[type="radio"],\n    &[type="checkbox"] {\n      box-sizing: border-box; /* 1. Add the correct box sizing in IE 10- */\n      padding: 0; /* 2. Remove the padding in IE 10- */\n      /*\n       Apply a disabled cursor for radios and checkboxes.\n       Note: Neither radios nor checkboxes can be readonly.\n      */\n   \n      &:disabled {\n        cursor: ' + props.theme['$cursor-disabled'] + ';\n      }\n    }\n    \n    /* Normalize includes font: inherit;, so font-family. font-size, etc are */\n    /* properly inherited. However, line-height is not inherited there. */\n    line-height: inherit;\n   \n    &.disabled {\n      cursor: ' + props.theme['$cursor-disabled'] + ';\n    }\n   \n    &[type="date"],\n    &[type="time"],\n    &[type="datetime-local"],\n    &[type="month"] {\n    /* Remove the default appearance of temporal inputs to avoid a Mobile Safari\n       bug where setting a custom line-height prevents text from being vertically\n       centered within the input.\n       Bug report: https://github.com/twbs/bootstrap/issues/11266\n     */\n      -webkit-appearance: listbox;\n    }\n      \n    /* Correct the cursor style of increment and decrement buttons in Chrome. */\n    &[type="number"]::-webkit-inner-spin-button,\n    &[type="number"]::-webkit-outer-spin-button {\n      height: auto;\n    }\n    \n    &[type="search"] {\n      /* This overrides the extra rounded corners on search inputs in iOS so that our\n      .form-control class can properly style them. Note that this cannot simply\n       be added to .form-control as it is not specific enough. For details, see\n       https://github.com/twbs/bootstrap/issues/11586.\n       */\n      outline-offset: -2px; /* 2. Correct the outline style in Safari. */\n      -webkit-appearance: none;\n    }\n    \n    /* Remove the inner padding and cancel buttons in Chrome and Safari on macOS. */\n    &[type="search"]::-webkit-search-cancel-button,\n    &[type="search"]::-webkit-search-decoration {\n      -webkit-appearance: none;\n    }\n    \n    ' + button(props.theme['$enable-shadows'], props.theme['$enable-hover-media-query'], props.theme['$enable-transitions'], props.theme['$enable-rounded'], props.theme['$font-weight-normal'], props.theme['$btn-font-weight'], props.theme['$btn-line-height'], props.theme['$btn-transition'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-padding-y'], props.theme['$font-size-base'], props.theme['$btn-border-radius'], props.theme['$btn-box-shadow'], props.theme['$btn-focus-box-shadow'], props.theme['$btn-active-box-shadow'], props.theme['$cursor-disabled'], props.theme['$link-color'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$btn-link-disabled-color'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm'], props.theme['$btn-block-spacing-y'], props.theme['$btn-primary-color'], props.theme['$btn-primary-bg'], props.theme['$btn-primary-border'], props.theme['$btn-secondary-color'], props.theme['$btn-secondary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-color'], props.theme['$btn-info-bg'], props.theme['$btn-info-border'], props.theme['$btn-success-color'], props.theme['$btn-success-bg'], props.theme['$btn-success-border'], props.theme['$btn-warning-color'], props.theme['$btn-warning-bg'], props.theme['$btn-warning-border'], props.theme['$btn-danger-color'], props.theme['$btn-danger-bg'], props.theme['$btn-danger-border']) + '\n ';
});
Input.defaultProps = defaultProps$70;

var defaultProps$71 = {
  theme: bsTheme,
  tag: 'div'
};
var InputGroupUnstyled = function (_React$Component) {
  inherits(InputGroupUnstyled, _React$Component);
  function InputGroupUnstyled() {
    classCallCheck$1(this, InputGroupUnstyled);
    return possibleConstructorReturn(this, (InputGroupUnstyled.__proto__ || Object.getPrototypeOf(InputGroupUnstyled)).apply(this, arguments));
  }
  createClass$1(InputGroupUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          size = _omit.size,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'tag', 'size']);
      var classes = mapToCssModules(classnames$1(className, 'input-group', size ? 'input-group-' + size : null), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return InputGroupUnstyled;
}(React.Component);
InputGroupUnstyled.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  size: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  theme: PropTypes.object
};
var InputGroup = styled(InputGroupUnstyled).withConfig({
  displayName: 'InputGroup'
})(['', ''], function (props) {
  return '\n    /*\n     Base styles\n    */\n   \n    &.input-group {\n      position: relative;\n      display: flex;\n      width: 100%;\n\n      .form-control {\n        /* \n          Ensure that the input is always above the *appended* addon button for\n          proper border colors.\n        */\n        \n        position: relative;\n        z-index: 2;\n        flex: 1 1 auto;\n        /* Add width 1% and flex-basis auto to ensure that button will not wrap out */\n        /* the column. Applies to IE Edge+ and Firefox. Chrome does not require this. */\n        width: 1%;\n        margin-bottom: 0;\n        \n        ' + hoverFocusActive(props.theme['$enable-hover-media-query'], 'z-index: 3;') + '\n      }\n    }\n    \n    & .input-group-addon,\n    & .input-group-btn,\n    &.input-group .form-control {\n      /* Vertically centers the content of the addons within the input group */\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n\n\n      &:not(:first-child):not(:last-child) {\n        ' + borderRadius(props.theme['$enable-rounded'], '0') + '\n      }\n    }\n   \n    & .input-group-addon,\n    & .input-group-btn {\n\n      white-space: nowrap;\n      vertical-align: middle; /* Match the inputs */\n    }\n   \n   \n    /* Sizing options\n    Remix the default form control sizing classes into new ones for easier\n    manipulation.\n    */\n   \n    &.input-group-lg > .form-control,\n    &.input-group-lg > .input-group-addon,\n    &.input-group-lg > .input-group-btn > .btn {\n      padding: ' + props.theme['$input-padding-y-lg'] + ' ' + props.theme['$input-padding-x-lg'] + ';\n      font-size: ' + props.theme['$font-size-lg'] + ';\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$input-border-radius-lg']) + '\n    }\n    \n    &.input-group-sm > .form-control,\n    &.input-group-sm > .input-group-addon,\n    &.input-group-sm > .input-group-btn > .btn {\n      padding: ' + props.theme['$input-padding-y-sm'] + ' ' + props.theme['$input-padding-x-sm'] + ';\n      font-size: ' + props.theme['$font-size-sm'] + ';\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$input-border-radius-sm']) + '\n    }\n   \n   \n    /*\n    Text input groups\n    */\n   \n    & .input-group-addon {\n      padding: ' + props.theme['$input-padding-y'] + ' ' + props.theme['$input-padding-x'] + ';\n      margin-bottom: 0; /* Allow use of <label> elements by overriding our default margin-bottom */\n      font-size: ' + props.theme['$font-size-base'] + ';\n      font-weight: normal;\n      line-height: ' + props.theme['$input-line-height'] + ';\n      color: ' + props.theme['$input-color'] + ';\n      text-align: center;\n      background-color: ' + props.theme['$input-group-addon-bg'] + ';\n      border: ' + props.theme['$input-btn-border-width'] + ' solid ' + props.theme['$input-group-addon-border-color'] + ';\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$input-border-radius']) + '\n   \n      /* \n      Nuke default margins from checkboxes and radios to vertically center within.\n      */\n      input[type="radio"],\n      input[type="checkbox"] {\n        margin-top: 0;\n      }\n    }\n   \n   \n    /*\n     Reset rounded corners\n    */\n   \n    &.input-group .form-control:not(:last-child),\n    & .input-group-addon:not(:last-child),\n    & .input-group-btn:not(:last-child) > .btn,\n    & .input-group-btn:not(:last-child) > .btn-group > .btn,\n    & .input-group-btn:not(:last-child) > .dropdown-toggle,\n    & .input-group-btn:not(:first-child) > .btn:not(:last-child):not(.dropdown-toggle),\n    & .input-group-btn:not(:first-child) > .btn-group:not(:last-child) > .btn {\n      ' + borderRightRadius(props.theme['$enable-rounded'], '0') + '\n    }\n    & .input-group-addon:not(:last-child) {\n      border-right: 0;\n    }\n    &.input-group .form-control:not(:first-child),\n    & .input-group-addon:not(:first-child),\n    & .input-group-btn:not(:first-child) > .btn,\n    & .input-group-btn:not(:first-child) > .btn-group > .btn,\n    & .input-group-btn:not(:first-child) > .dropdown-toggle,\n    & .input-group-btn:not(:last-child) > .btn:not(:first-child),\n    & .input-group-btn:not(:last-child) > .btn-group:not(:first-child) > .btn {\n      ' + borderLeftRadius(props.theme['$enable-rounded'], '0') + '\n    }\n    & .form-control + .input-group-addon:not(:first-child) {\n      border-left: 0;\n    }\n   \n    /*\n     Button input groups\n    */\n   \n    & .input-group-btn {\n      position: relative;\n      /* Jankily prevent input button groups from wrapping with white-space and\n      font-size in combination with inline-block on buttons.\n      */\n      font-size: 0;\n      white-space: nowrap;\n   \n      /* Negative margin for spacing, position for bringing hovered/focused/actived\n      element above the siblings.\n      */\n      > .btn {\n        position: relative;\n        /* Vertically stretch the button and center its content */\n        flex: 1;\n        \n        + .btn {\n          margin-left: -' + props.theme['$input-btn-border-width'] + ';\n        }\n        \n        /* Bring the active button to the front */\n        ' + hoverFocusActive(props.theme['$enable-hover-media-query'], 'z-index: 3;') + '\n      }\n   \n      /* Negative margin to only have a single, shared border between the two */\n      &:not(:last-child) {\n        > .btn,\n        > .btn-group {\n          margin-right: -' + props.theme['$input-btn-border-width'] + ';\n        }\n      }\n      &:not(:first-child) {\n        > .btn,\n        > .btn-group {\n          z-index: 2;\n          margin-left: -' + props.theme['$input-btn-border-width'] + ';\n          /* Because specificity */\n          ' + hoverFocusActive(props.theme['$enable-hover-media-query'], 'z-index: 3;') + '\n        }\n      }\n    }\n    \n   /* Added So that Inputs in InputGroup grab the same .form-control class as in Component Form Not Bs4 */\n   ' + formControl(props.theme['$enable-rounded'], props.theme['$enable-transitions'], props.theme['$enable-shadows'], props.theme['$input-height'], props.theme['$input-padding-y'], props.theme['$input-padding-x'], props.theme['$font-size-base'], props.theme['$input-line-height'], props.theme['$input-color'], props.theme['$input-bg'], props.theme['$input-border-radius'], props.theme['$input-btn-border-width'], props.theme['$input-border-color'], props.theme['$input-transition'], props.theme['$input-box-shadow'], props.theme['$input-color-focus'], props.theme['$input-bg-focus'], props.theme['$input-border-focus'], props.theme['$input-box-shadow-focus'], props.theme['$input-color-placeholder'], props.theme['$input-bg-disabled'], props.theme['$cursor-disabled']) + '\n    \n  ';
});
InputGroup.defaultProps = defaultProps$71;

var defaultProps$72 = {
  tag: 'div'
};
var InputGroupAddon = function (_React$Component) {
  inherits(InputGroupAddon, _React$Component);
  function InputGroupAddon() {
    classCallCheck$1(this, InputGroupAddon);
    return possibleConstructorReturn(this, (InputGroupAddon.__proto__ || Object.getPrototypeOf(InputGroupAddon)).apply(this, arguments));
  }
  createClass$1(InputGroupAddon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'tag']);
      var classes = mapToCssModules(classnames$1(className, 'input-group-addon'), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return InputGroupAddon;
}(React.Component);
InputGroupAddon.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};
InputGroupAddon.defaultProps = defaultProps$72;

var defaultProps$73 = {
  tag: 'div'
};
var InputGroupButton = function (_React$Component) {
  inherits(InputGroupButton, _React$Component);
  function InputGroupButton() {
    classCallCheck$1(this, InputGroupButton);
    return possibleConstructorReturn(this, (InputGroupButton.__proto__ || Object.getPrototypeOf(InputGroupButton)).apply(this, arguments));
  }
  createClass$1(InputGroupButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          children = _props.children,
          groupClassName = _props.groupClassName,
          groupAttributes = _props.groupAttributes,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'tag', 'children', 'groupClassName', 'groupAttributes']);
      if (typeof children === 'string') {
        var groupClasses = mapToCssModules(classnames$1(groupClassName, 'input-group-btn'), cssModule);
        return React.createElement(
          Tag,
          _extends({}, groupAttributes, { className: groupClasses }),
          React.createElement(
            Button,
            _extends({}, attributes, { className: className }),
            children
          )
        );
      }
      var classes = mapToCssModules(classnames$1(className, 'input-group-btn'), cssModule);
      return React.createElement(
        Tag,
        _extends({}, attributes, { className: classes }),
        children
      );
    }
  }]);
  return InputGroupButton;
}(React.Component);
InputGroupButton.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  groupClassName: PropTypes.string,
  groupAttributes: PropTypes.object,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
InputGroupButton.defaultProps = defaultProps$73;

function IssueIcon(props) {
  return React.createElement(
    'svg',
    {
      height: '1em',
      width: '0.875em',
      className: props.className
    },
    React.createElement('path', { d: 'M7 2.3c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z m1 3H6v5h2V4z m0 6H6v2h2V10z' })
  );
}
IssueIcon.propTypes = {
  className: PropTypes.string
};

var defaultProps$74 = { theme: bsTheme };
var KbdUnstyled = function (_React$Component) {
  inherits(KbdUnstyled, _React$Component);
  function KbdUnstyled() {
    classCallCheck$1(this, KbdUnstyled);
    return possibleConstructorReturn(this, (KbdUnstyled.__proto__ || Object.getPrototypeOf(KbdUnstyled)).apply(this, arguments));
  }
  createClass$1(KbdUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          children = _omit.children,
          rest = objectWithoutProperties(_omit, ['className', 'children']);
      return React.createElement(
        'kbd',
        _extends({ className: className }, rest),
        children
      );
    }
  }]);
  return KbdUnstyled;
}(React.Component);
KbdUnstyled.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.object
};
var Kbd = styled(KbdUnstyled).withConfig({
  displayName: 'Kbd'
})(['', ''], function (props) {
  return '\n    /* User input typically entered via keyboard */\n    padding: ' + props.theme['$code-padding-y'] + ' ' + props.theme['$code-padding-x'] + ';\n    font-size: ' + props.theme['$code-font-size'] + ';\n    color: ' + props.theme['$kbd-color'] + ';\n    background-color: ' + props.theme['$kbd-bg'] + ';\n    ' + borderRadius(props.theme['$enable-rounded'], props.theme['$border-radius-sm']) + '\n    ' + boxShadow(props.theme['$enable-shadows'], props.theme['$kbd-box-shadow']) + '\n    \n    & kbd {\n      padding: 0;\n      font-size: 100%;\n      font-weight: ' + props.theme['$nested-kbd-font-weight'] + ';\n      ' + boxShadow(props.theme['$enable-shadows'], 'none') + '\n    }\n    \n    /* Bootstrap 4 does not place this css rule straight into Kbd tag see: bootstrap/scss/code.scss */\n    font-family: ' + props.theme['$font-family-monospace'] + ';\n  ';
});
Kbd.defaultProps = defaultProps$74;

var defaultProps$75 = {
  theme: bsTheme,
  tag: 'div'
};
var JumbotronUnstyled = function (_React$Component) {
  inherits(JumbotronUnstyled, _React$Component);
  function JumbotronUnstyled() {
    classCallCheck$1(this, JumbotronUnstyled);
    return possibleConstructorReturn(this, (JumbotronUnstyled.__proto__ || Object.getPrototypeOf(JumbotronUnstyled)).apply(this, arguments));
  }
  createClass$1(JumbotronUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          fluid = _omit.fluid,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'tag', 'fluid']);
      var classes = mapToCssModules(classnames$1(className, 'jumbotron', fluid ? 'jumbotron-fluid' : false), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return JumbotronUnstyled;
}(React.Component);
JumbotronUnstyled.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  theme: PropTypes.object
};
var Jumbotron = styled(JumbotronUnstyled).withConfig({
  displayName: 'Jumbotron'
})(['', ''], function (props) {
  return '\n    &.jumbotron {\n      padding: ' + props.theme['$jumbotron-padding'] + ' calc(' + props.theme['$jumbotron-padding'] + ' / 2);\n      margin-bottom: ' + props.theme['$jumbotron-padding'] + ';\n      background-color: ' + props.theme['$jumbotron-bg'] + ';\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$border-radius-lg']) + '\n    \n      ' + mediaBreakpointUp('sm', props.theme['$grid-breakpoints'], 'padding: calc(' + props.theme['$jumbotron-padding'] + ' * 2) ' + props.theme['$jumbotron-padding'] + ';') + '  \n    }\n\n    & .jumbotron-hr {\n      border-top-color: ' + color(props.theme['$jumbotron-bg']).darken(0.1).toString() + ';\n    }\n    \n    &.jumbotron-fluid {\n      padding-right: 0;\n      padding-left: 0;\n      ' + borderRadius(props.theme['$enable-rounded'], '0') + '\n    }\n  ';
});
Jumbotron.defaultProps = defaultProps$75;

var colSizes = ['xs', 'sm', 'md', 'lg', 'xl'];
var stringOrNumberProp$1 = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
var columnProps$1 = PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.shape({
  size: stringOrNumberProp$1,
  push: stringOrNumberProp$1,
  pull: stringOrNumberProp$1,
  offset: stringOrNumberProp$1
})]);
var propTypes$2 = {
  children: PropTypes.node,
  hidden: PropTypes.bool,
  check: PropTypes.bool,
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  for: PropTypes.string,
  tag: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  xs: columnProps$1,
  sm: columnProps$1,
  md: columnProps$1,
  lg: columnProps$1,
  xl: columnProps$1,
  theme: PropTypes.object
};
var defaultProps$76 = {
  tag: 'label',
  theme: bsTheme
};
var LabelUnstyled = function LabelUnstyled(props) {
  var _omit = lodash_omit$1(props, ['theme']),
      className = _omit.className,
      cssModule = _omit.cssModule,
      hidden = _omit.hidden,
      Tag = _omit.tag,
      check = _omit.check,
      inline = _omit.inline,
      disabled = _omit.disabled,
      size = _omit.size,
      htmlFor = _omit.for,
      attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'hidden', 'tag', 'check', 'inline', 'disabled', 'size', 'for']);
  var colClasses = [];
  colSizes.forEach(function (colSize) {
    var columnProp = props[colSize];
    delete attributes[colSize];
    if (columnProp && columnProp.size) {
      var _cn;
      colClasses.push(mapToCssModules(classnames$1((_cn = {}, defineProperty(_cn, 'col-' + colSize + '-' + columnProp.size, columnProp.size), defineProperty(_cn, 'push-' + colSize + '-' + columnProp.push, columnProp.push), defineProperty(_cn, 'pull-' + colSize + '-' + columnProp.pull, columnProp.pull), defineProperty(_cn, 'offset-' + colSize + '-' + columnProp.offset, columnProp.offset), _cn))), cssModule);
    } else if (columnProp) {
      colClasses.push('col-' + colSize + '-' + columnProp);
    }
  });
  var classes = mapToCssModules(classnames$1(className, hidden ? 'sr-only' : false, check ? 'form-check-' + (inline ? 'inline' : 'label') : false, check && inline && disabled ? 'disabled' : false, size ? 'col-form-label-' + size : false, colClasses, colClasses.length ? 'col-form-label' : false), cssModule);
  return React.createElement(Tag, _extends({ htmlFor: htmlFor }, attributes, { className: classes }));
};
var Label = styled(LabelUnstyled).withConfig({
  displayName: 'Label'
})(['', ''], function (props) {
  return '\n    /* Reboot Scss */\n    touch-action: manipulation;\n    /* Allow labels to use margin for spacing. */\n    display: inline-block;\n    margin-bottom: .5rem;\n\n    ' + button(props.theme['$enable-shadows'], props.theme['$enable-hover-media-query'], props.theme['$enable-transitions'], props.theme['$enable-rounded'], props.theme['$font-weight-normal'], props.theme['$btn-font-weight'], props.theme['$btn-line-height'], props.theme['$btn-transition'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-padding-y'], props.theme['$font-size-base'], props.theme['$btn-border-radius'], props.theme['$btn-box-shadow'], props.theme['$btn-focus-box-shadow'], props.theme['$btn-active-box-shadow'], props.theme['$cursor-disabled'], props.theme['$link-color'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$btn-link-disabled-color'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm'], props.theme['$btn-block-spacing-y'], props.theme['$btn-primary-color'], props.theme['$btn-primary-bg'], props.theme['$btn-primary-border'], props.theme['$btn-secondary-color'], props.theme['$btn-secondary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-color'], props.theme['$btn-info-bg'], props.theme['$btn-info-border'], props.theme['$btn-success-color'], props.theme['$btn-success-bg'], props.theme['$btn-success-border'], props.theme['$btn-warning-color'], props.theme['$btn-warning-bg'], props.theme['$btn-warning-border'], props.theme['$btn-danger-color'], props.theme['$btn-danger-bg'], props.theme['$btn-danger-border']) + '\n ';
});
Label.propTypes = propTypes$2;
Label.defaultProps = defaultProps$76;

var Legend = styled.legend.withConfig({
  displayName: 'Legend'
})(['display:block;width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;']);

function media() {
  return "\n   &.media {\n    display: flex;\n    align-items: flex-start;\n  }\n  \n  & .media-body {\n    flex: 1;\n  }\n  ";
}

var defaultProps$77 = { theme: bsTheme };
var LiUnstyled = function (_React$Component) {
  inherits(LiUnstyled, _React$Component);
  function LiUnstyled() {
    classCallCheck$1(this, LiUnstyled);
    return possibleConstructorReturn(this, (LiUnstyled.__proto__ || Object.getPrototypeOf(LiUnstyled)).apply(this, arguments));
  }
  createClass$1(LiUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          children = _omit.children,
          inline = _omit.inline,
          separator = _omit.separator,
          media$$1 = _omit.media,
          dropdownItem = _omit['dropdown-item'],
          dropdownHeader = _omit['dropdown-header'],
          dropdownFooter = _omit['dropdown-footer'],
          attributes = objectWithoutProperties(_omit, ['className', 'children', 'inline', 'separator', 'media', 'dropdown-item', 'dropdown-header', 'dropdown-footer']);
      var classes = classnames$1(className, separator ? 'dropdown-divider' : false, dropdownItem ? 'dropdown-item' : false, dropdownItem ? 'dropdown-item' : false, dropdownHeader ? 'dropdown-header' : false, dropdownFooter ? 'dropdown-footer' : false, inline ? 'list-inline-item' : false, media$$1 ? 'media' : false);
      return React.createElement(
        'li',
        _extends({
          className: classes
        }, attributes),
        children
      );
    }
  }]);
  return LiUnstyled;
}(React.Component);
LiUnstyled.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  separator: PropTypes.bool,
  active: PropTypes.bool,
  inline: PropTypes.bool,
  media: PropTypes.bool,
  'dropdown-item': PropTypes.bool,
  'dropdown-header': PropTypes.bool,
  'dropdown-footer': PropTypes.bool,
  theme: PropTypes.object
};
var Li = styled(LiUnstyled).withConfig({
  displayName: 'Li'
})(['', ''], function (props) {
  return '\n    &.list-inline-item {\n      display: inline-block;\n    \n      &:not(:last-child) {\n        margin-right: ' + props.theme['$list-inline-padding'] + ';\n      }\n    }\n    \n    ' + media() + '\n  ';
});
Li.defaultProps = defaultProps$77;

var defaultProps$79 = { theme: bsTheme };
var UlUnstyled = function (_React$Component) {
  inherits(UlUnstyled, _React$Component);
  function UlUnstyled() {
    classCallCheck$1(this, UlUnstyled);
    return possibleConstructorReturn(this, (UlUnstyled.__proto__ || Object.getPrototypeOf(UlUnstyled)).apply(this, arguments));
  }
  createClass$1(UlUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          inline = _omit.inline,
          unstyled = _omit.unstyled,
          children = _omit.children,
          rest = objectWithoutProperties(_omit, ['className', 'inline', 'unstyled', 'children']);
      var classes = classnames$1(className, inline ? 'list-inline' : false, unstyled ? 'list-unstyled' : false);
      return React.createElement(
        'ul',
        _extends({ className: classes }, rest),
        children
      );
    }
  }]);
  return UlUnstyled;
}(React.Component);
UlUnstyled.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  theme: PropTypes.object,
  inline: PropTypes.bool,
  unstyled: PropTypes.bool
};
var Ul = styled(UlUnstyled).withConfig({
  displayName: 'Ul'
})(['', ''], function (props) {
  return '\n    ' + nav(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$nav-link-padding'], props.theme['$nav-disabled-link-color'], props.theme['$cursor-disabled'], props.theme['$nav-tabs-border-width'], props.theme['$nav-tabs-border-color'], props.theme['$nav-tabs-border-radius'], props.theme['$nav-tabs-link-hover-border-color'], props.theme['$nav-tabs-active-link-hover-color'], props.theme['$nav-tabs-active-link-hover-bg'], props.theme['$nav-tabs-active-link-hover-border-color'], props.theme['$nav-pills-border-radius'], props.theme['$nav-pills-active-link-color'], props.theme['$nav-pills-active-link-bg']) + '\n    ' + navbar(props.theme['$grid-breakpoints'], props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$navbar-padding-y'], props.theme['$navbar-padding-x'], props.theme['$zindex-navbar'], props.theme['$zindex-navbar-fixed'], props.theme['$zindex-navbar-sticky'], props.theme['$navbar-brand-padding-y'], props.theme['$font-size-lg'], props.theme['$navbar-divider-padding-y'], props.theme['$navbar-toggler-padding-y'], props.theme['$navbar-toggler-padding-x'], props.theme['$navbar-toggler-font-size'], props.theme['$border-width'], props.theme['$navbar-toggler-border-radius'], props.theme['$navbar-light-active-color'], props.theme['$navbar-light-color'], props.theme['$navbar-light-hover-color'], props.theme['$navbar-light-toggler-border'], props.theme['$navbar-light-disabled-color'], props.theme['$navbar-light-toggler-bg'], props.theme['$navbar-inverse-active-color'], props.theme['$navbar-inverse-color'], props.theme['$navbar-inverse-hover-color'], props.theme['$navbar-inverse-toggler-border'], props.theme['$navbar-inverse-toggler-bg'], props.theme['$navbar-inverse-disabled-color']) + '\n\n    /* Type Scss */\n    &.list-unstyled {\n      ' + listUnstyled() + '\n    }\n\n    &.list-inline {\n      ' + listInline() + '\n    }\n    \n    /* Reboot Scss */\n    margin-top: 0;\n    margin-bottom: 1rem;\n  \n    & ol,\n    & ul {\n      margin-bottom: 0;\n    }\n  ';
});
Ul.defaultProps = defaultProps$79;

var defaultProps$78 = {
  theme: bsTheme,
  tag: Ul
};
var ListGroupUnstyled = function (_React$Component) {
  inherits(ListGroupUnstyled, _React$Component);
  function ListGroupUnstyled() {
    classCallCheck$1(this, ListGroupUnstyled);
    return possibleConstructorReturn(this, (ListGroupUnstyled.__proto__ || Object.getPrototypeOf(ListGroupUnstyled)).apply(this, arguments));
  }
  createClass$1(ListGroupUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          flush = _omit.flush,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'tag', 'flush']);
      var classes = mapToCssModules(classnames$1(className, 'list-group', flush ? 'list-group-flush' : false), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return ListGroupUnstyled;
}(React.Component);
ListGroupUnstyled.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  flush: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  theme: PropTypes.object
};
var ListGroup = styled(ListGroupUnstyled).withConfig({
  displayName: 'ListGroup'
})(['', ''], function (props) {
  return '\n    /* \n      Base class\n      Easily usable on ul, ol, or div.\n    */\n    \n    &.list-group {\n      display: flex;\n      flex-direction: column;\n      /* No need to set list-style: none; since .list-group-item is block level */\n      padding-left: 0;  /* reset padding because ul and ol */\n      margin-bottom: 0;\n    }\n    \n    \n    /* \n      Interactive list items\n      Use anchor or button elements instead of \'li\'s or \'div\'s to create interactive\n      list items. Includes an extra \'.active\' modifier class for selected items.\n    */\n    \n    & .list-group-item-action {\n      width: 100%; /* For \'button\'s (anchors become 100% by default though) */\n      color: ' + props.theme['$list-group-link-color'] + ';\n      text-align: inherit; /* For \'button\'s (anchors inherit) */\n    \n      /* Hover state */\n      ' + hoverFocus(props.theme['$enable-hover-media-query'], '\n          color: ' + props.theme['$list-group-link-hover-color'] + ';\n          text-decoration: none;\n          background-color: ' + props.theme['$list-group-hover-bg'] + ';\n        ') + ';\n      \n      &:active {\n        color: ' + props.theme['$list-group-link-active-color'] + ';\n        background-color: ' + props.theme['$list-group-link-active-bg'] + ';\n      }\n    }\n    \n    /* \n      Individual list items\n      Use on \'li\'s or \'div\'s within the \'.list-group\' parent.\n    */\n    \n    & .list-group-item {\n      position: relative;\n      display: flex;\n      flex-flow: row wrap;\n      align-items: center;\n      padding: ' + props.theme['$list-group-item-padding-y'] + ' ' + props.theme['$list-group-item-padding-x'] + ';\n      /* Place the border on the list items and negative margin up for better styling */\n      margin-bottom: -' + props.theme['$list-group-border-width'] + ';\n      background-color: ' + props.theme['$list-group-bg'] + ';\n      border: ' + props.theme['$list-group-border-width'] + ' solid ' + props.theme['$list-group-border-color'] + ';\n    \n      &:first-child {\n        ' + borderTopRadius(props.theme['$enable-rounded'], props.theme['$list-group-border-radius']) + '\n      }\n\n      &:last-child {\n        margin-bottom: 0;\n        ' + borderBottomRadius(props.theme['$enable-rounded'], props.theme['$list-group-border-radius']) + '\n      }\n      \n      ' + hoverFocus(props.theme['$enable-hover-media-query'], 'text-decoration: none;') + '\n        \n      &.disabled,\n      &:disabled {   \n        color: ' + props.theme['$list-group-disabled-color'] + ';\n        cursor: ' + props.theme['$cursor-disabled'] + ';\n        background-color: ' + props.theme['$list-group-disabled-bg'] + ';\n      }\n    \n    \n      &.active {\n        z-index: 2; /* Place active items above their siblings for proper border styling */\n        color: ' + props.theme['$list-group-active-color'] + ';\n        background-color: ' + props.theme['$list-group-active-bg'] + ';\n        border-color: ' + props.theme['$list-group-active-border'] + ';     \n      }\n    }\n    \n    /* \n      Flush list items\n      Remove borders and border-radius to keep list group items edge-to-edge. Most\n      useful within other components (e.g., cards).\n    */\n\n    &.list-group-flush {\n      .list-group-item {\n        border-right: 0;\n        border-left: 0;\n        border-radius: 0;\n      }\n      \n      &:first-child {\n        .list-group-item:first-child {\n          border-top: 0;\n        }\n      }\n\n      &:last-child {\n        .list-group-item:last-child {\n          border-bottom: 0;\n        }\n      }\n    }\n    \n    \n    \n    /* Contextual variants\n    \n     Add modifier classes to change text and background color on individual items.\n     Organizationally, this must come after the \':hover\' states.\n    */\n    \n    ' + listGroupItemVariant(props.theme['$enable-hover-media-query'], 'success', props.theme['$state-success-bg'], props.theme['$state-success-text']) + '\n    ' + listGroupItemVariant(props.theme['$enable-hover-media-query'], 'info', props.theme['$state-info-bg'], props.theme['$state-info-text']) + '\n    ' + listGroupItemVariant(props.theme['$enable-hover-media-query'], 'warning', props.theme['$state-warning-bg'], props.theme['$state-warning-text']) + '\n    ' + listGroupItemVariant(props.theme['$enable-hover-media-query'], 'danger', props.theme['$state-danger-bg'], props.theme['$state-danger-text']) + '    \n  ';
});
ListGroup.defaultProps = defaultProps$78;

var defaultProps$80 = {
  tag: 'li'
};
var handleDisabledOnClick = function handleDisabledOnClick(e) {
  e.preventDefault();
};
var ListGroupItem = function (_React$Component) {
  inherits(ListGroupItem, _React$Component);
  function ListGroupItem() {
    classCallCheck$1(this, ListGroupItem);
    return possibleConstructorReturn(this, (ListGroupItem.__proto__ || Object.getPrototypeOf(ListGroupItem)).apply(this, arguments));
  }
  createClass$1(ListGroupItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          Tag = _props.tag,
          active = _props.active,
          disabled = _props.disabled,
          action = _props.action,
          color = _props.color,
          attributes = objectWithoutProperties(_props, ['className', 'tag', 'active', 'disabled', 'action', 'color']);
      var classes = classnames$1(className, active ? 'active' : false, disabled ? 'disabled' : false, action ? 'list-group-item-action' : false, color ? 'list-group-item-' + color : false, 'list-group-item');
      if (disabled) {
        attributes.onClick = handleDisabledOnClick;
      }
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return ListGroupItem;
}(React.Component);
ListGroupItem.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  action: PropTypes.bool,
  className: PropTypes.any
};
ListGroupItem.defaultProps = defaultProps$80;

var defaultProps$81 = {
  tag: H5
};
var ListGroupItemHeading = function (_React$Component) {
  inherits(ListGroupItemHeading, _React$Component);
  function ListGroupItemHeading() {
    classCallCheck$1(this, ListGroupItemHeading);
    return possibleConstructorReturn(this, (ListGroupItemHeading.__proto__ || Object.getPrototypeOf(ListGroupItemHeading)).apply(this, arguments));
  }
  createClass$1(ListGroupItemHeading, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'tag']);
      var classes = classnames$1(className, 'list-group-item-heading');
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return ListGroupItemHeading;
}(React.Component);
ListGroupItemHeading.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any
};
ListGroupItemHeading.defaultProps = defaultProps$81;

var defaultProps$82 = {
  tag: 'p'
};
var ListGroupItemHeading$2 = function (_React$Component) {
  inherits(ListGroupItemHeading, _React$Component);
  function ListGroupItemHeading() {
    classCallCheck$1(this, ListGroupItemHeading);
    return possibleConstructorReturn(this, (ListGroupItemHeading.__proto__ || Object.getPrototypeOf(ListGroupItemHeading)).apply(this, arguments));
  }
  createClass$1(ListGroupItemHeading, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'tag']);
      var classes = classnames$1(className, 'list-group-item-text');
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return ListGroupItemHeading;
}(React.Component);
ListGroupItemHeading$2.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.any
};
ListGroupItemHeading$2.defaultProps = defaultProps$82;

var Map$2 = styled.map.withConfig({
  displayName: 'Map'
})(['display:inline;']);

var defaultProps$83 = { theme: bsTheme };
var Mark = styled.mark.withConfig({
  displayName: 'Mark'
})(['', ''], function (props) {
  return '\n    /* Reboot Scss */\n    padding: ' + props.theme['$mark-padding'] + ';\n    background-color: ' + props.theme['$mark-bg'] + ';\n  ';
});
Mark.defaultProps = defaultProps$83;

var defaultProps$84 = {
  theme: bsTheme
};
var MediaUnstyled = function (_React$Component) {
  inherits(MediaUnstyled, _React$Component);
  function MediaUnstyled() {
    classCallCheck$1(this, MediaUnstyled);
    return possibleConstructorReturn(this, (MediaUnstyled.__proto__ || Object.getPrototypeOf(MediaUnstyled)).apply(this, arguments));
  }
  createClass$1(MediaUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          body = _omit.body,
          bottom = _omit.bottom,
          className = _omit.className,
          cssModule = _omit.cssModule,
          heading = _omit.heading,
          left = _omit.left,
          list = _omit.list,
          middle = _omit.middle,
          object = _omit.object,
          right = _omit.right,
          tag = _omit.tag,
          top = _omit.top,
          attributes = objectWithoutProperties(_omit, ['body', 'bottom', 'className', 'cssModule', 'heading', 'left', 'list', 'middle', 'object', 'right', 'tag', 'top']);
      var defaultTag = void 0;
      if (heading) {
        defaultTag = H4;
      } else if (left || right) {
        defaultTag = A;
      } else if (object) {
        defaultTag = Img;
      } else if (list) {
        defaultTag = Ul;
      } else {
        defaultTag = 'div';
      }
      var Tag = tag || defaultTag;
      var classes = mapToCssModules(classnames$1(className, {
        'media-body': body,
        'media-heading': heading,
        'media-left': left,
        'media-right': right,
        'media-top': top,
        'media-bottom': bottom,
        'media-middle': middle,
        'media-object': object,
        'media-list': list,
        media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list
      }), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return MediaUnstyled;
}(React.Component);
MediaUnstyled.propTypes = {
  theme: PropTypes.object,
  body: PropTypes.bool,
  bottom: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  heading: PropTypes.bool,
  left: PropTypes.bool,
  list: PropTypes.bool,
  middle: PropTypes.bool,
  object: PropTypes.bool,
  right: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  top: PropTypes.bool
};
var Media = styled(MediaUnstyled).withConfig({
  displayName: 'Media'
})(['&.media,& .media{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;}& .media-body{-webkit-box-flex:1;-ms-flex:1 1 0%;flex:1 1 0%}', ''], media());
Media.defaultProps = defaultProps$84;

var propTypes$3 = {
  baseClass: PropTypes.string,
  baseClassIn: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  timeout: PropTypes.oneOfType([PropTypes.shape({
    enter: PropTypes.number,
    exit: PropTypes.number
  }), PropTypes.number]),
  appear: PropTypes.bool,
  enter: PropTypes.bool,
  exit: PropTypes.bool,
  onExit: PropTypes.func,
  onEnter: PropTypes.func
};
var defaultProps$86 = {
  tag: 'div',
  baseClass: 'fade',
  baseClassIn: 'show',
  timeout: 0,
  appear: true,
  enter: true,
  exit: true
};
var Fade$2 = function (_React$Component) {
  inherits(Fade, _React$Component);
  function Fade(props) {
    classCallCheck$1(this, Fade);
    var _this = possibleConstructorReturn(this, (Fade.__proto__ || Object.getPrototypeOf(Fade)).call(this, props));
    _this.onEnter = function (cb) {
      return function () {
        cb();
        if (_this.props.onEnter) {
          _this.props.onEnter();
        }
      };
    };
    _this.onExit = function (cb) {
      return function () {
        cb();
        if (_this.props.onExit) {
          _this.props.onExit();
        }
      };
    };
    _this.state = {
      mounted: !props.appear
    };
    _this.timers = [];
    return _this;
  }
  createClass$1(Fade, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.timers.forEach(function (timer) {
        return clearTimeout(timer);
      });
    }
  }, {
    key: 'componentWillAppear',
    value: function componentWillAppear(cb) {
      if (!this.props.appear) {
        this.onEnter(cb)();
      }
      this.timers.push(setTimeout(this.onEnter(cb), this.props.timeout.enter || this.props.timeout));
    }
  }, {
    key: 'componentDidAppear',
    value: function componentDidAppear() {
      this.setState({
        mounted: true
      });
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(cb) {
      if (!this.props.enter) {
        this.onEnter(cb)();
      }
      this.timers.push(setTimeout(this.onEnter(cb), this.props.timeout.enter || this.props.timeout));
    }
  }, {
    key: 'componentDidEnter',
    value: function componentDidEnter() {
      this.setState({
        mounted: true
      });
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(cb) {
      this.setState({
        mounted: false
      });
      if (!this.props.exit) {
        this.onExit(cb)();
      }
      this.timers.push(setTimeout(this.onExit(cb), this.props.timeout.exit || this.props.timeout));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          baseClass = _props.baseClass,
          baseClassIn = _props.baseClassIn,
          className = _props.className,
          Tag = _props.tag;
      var attributes = lodash_omit$1(this.props, Object.keys(propTypes$3));
      var classes = classnames$1(className, baseClass, this.state.mounted ? baseClassIn : false);
      return React.createElement(
        Tag,
        _extends({}, attributes, { className: classes }),
        this.props.children
      );
    }
  }]);
  return Fade;
}(React.Component);
Fade$2.propTypes = propTypes$3;
Fade$2.defaultProps = defaultProps$86;

var defaultProps$85 = {
  isOpen: false,
  isLocked: false,
  backdrop: true,
  keyboard: true,
  zIndex: 1000
};
var ModalUnstyled = function (_React$Component) {
  inherits(ModalUnstyled, _React$Component);
  function ModalUnstyled(props) {
    classCallCheck$1(this, ModalUnstyled);
    var _this = possibleConstructorReturn(this, (ModalUnstyled.__proto__ || Object.getPrototypeOf(ModalUnstyled)).call(this, props));
    _this.isTransitioning = false;
    _this.onEnter = function () {
      _this.isTransitioning = true;
      if (_this.props.isLocked && _this.props.onUnlock) {
        _this.props.onUnlock();
      }
      if (_this.props.onEnter) {
        _this.props.onEnter();
      }
    };
    _this.onExit = function () {
      _this.destroy();
      _this.isTransitioning = false;
      if (_this.props.isLocked && _this.props.onUnlock) {
        _this.props.onUnlock();
      }
      if (_this.props.onExit) {
        _this.props.onExit();
      }
    };
    _this.handleEscape = function (e) {
      if (_this.props.backdrop !== true) return;
      _this.isTransitioning = false;
      if (!_this.isTransitioning && _this.props.keyboard && e.keyCode === 27 && _this.props.onBackdrop) {
        _this.props.onBackdrop();
      }
    };
    _this.handleBackdropClick = function (e) {
      if (_this.props.backdrop !== true) return;
      _this.isTransitioning = false;
      if (!_this.isTransitioning && _this.props.backdrop && e.target && !_this._dialog.contains(e.target) && _this.props.onBackdrop) {
        _this.props.onBackdrop();
      }
    };
    _this.togglePortal = function () {
      if (_this.props.isOpen) {
        _this._focus = true;
        _this.show();
      } else {
        _this.hide();
      }
    };
    _this.destroy = function () {
      if (_this._element) {
        ReactDOM.unmountComponentAtNode(_this._element);
        document.body.removeChild(_this._element);
        _this._element = null;
      }
      var classes = document.body.className.replace('overflow', '');
      document.body.className = mapToCssModules(classnames$1(classes).trim(), _this.props.cssModule);
      setScrollbarWidth(_this.originalBodyPadding);
    };
    _this.originalBodyPadding = null;
    _this.isBodyOverflowing = false;
    return _this;
  }
  createClass$1(ModalUnstyled, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.isOpen) {
        this.togglePortal();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen) {
        this.togglePortal();
      } else if (this._element) {
        this.renderIntoSubtree();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.onExit();
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.renderIntoSubtree();
    }
  }, {
    key: 'show',
    value: function show() {
      var classes = document.body.className;
      this._element = document.createElement('div');
      this._element.setAttribute('tabindex', '-1');
      this._element.style.position = 'relative';
      this._element.style.zIndex = this.props.zIndex;
      this.originalBodyPadding = getOriginalBodyPadding();
      conditionallyUpdateScrollbar();
      document.body.appendChild(this._element);
      document.body.className = mapToCssModules(classnames$1(classes, 'overflow'), this.props.cssModule);
      this.renderIntoSubtree();
    }
  }, {
    key: 'renderIntoSubtree',
    value: function renderIntoSubtree() {
      ReactDOM.unstable_renderSubtreeIntoContainer(this, this.renderChildren(), this._element
      );
      if (this._focus) {
        this._dialog.parentNode.focus();
        this._focus = false;
      }
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren() {
      var _classNames,
          _this2 = this;
      var _omit = lodash_omit$1(this.props, ['isLocked', 'onUnlock', 'onBackdrop', 'keyboard', 'onEnter', 'onExit', 'zIndex']),
          className = _omit.className,
          wrapClassName = _omit.wrapClassName,
          modalClassName = _omit.modalClassName,
          backdropClassName = _omit.backdropClassName,
          contentClassName = _omit.contentClassName,
          cssModule = _omit.cssModule,
          isOpen = _omit.isOpen,
          size = _omit.size,
          backdrop = _omit.backdrop,
          children = _omit.children,
          attributes = objectWithoutProperties(_omit, ['className', 'wrapClassName', 'modalClassName', 'backdropClassName', 'contentClassName', 'cssModule', 'isOpen', 'size', 'backdrop', 'children']);
      return React.createElement(
        TransitionGroup,
        { component: 'div', className: mapToCssModules(classnames$1(wrapClassName, className)) },
        isOpen && React.createElement(
          Fade$2,
          {
            key: 'modal-dialog',
            onEnter: this.onEnter,
            onLeave: this.onExit,
            timeout: '',
            transitionAppearTimeout: 300,
            transitionEnterTimeout: 300,
            transitionLeaveTimeout: 300,
            onClickCapture: this.handleBackdropClick,
            onKeyUp: this.handleEscape,
            className: mapToCssModules(classnames$1('modal', modalClassName), cssModule),
            style: { display: 'block' },
            tabIndex: '-1'
          },
          React.createElement(
            'div',
            _extends({
              className: mapToCssModules(classnames$1('modal-dialog', (_classNames = {}, defineProperty(_classNames, 'modal-' + size, size), defineProperty(_classNames, 'show', isOpen), _classNames))),
              role: 'document',
              ref: function ref(c) {
                return _this2._dialog = c;
              }
            }, attributes),
            React.createElement(
              'div',
              { className: mapToCssModules(classnames$1('modal-content', contentClassName), cssModule) },
              children
            )
          )
        ),
        isOpen && backdrop && React.createElement(Fade$2, {
          key: 'modal-backdrop',
          timeout: 150,
          className: mapToCssModules(classnames$1('modal-backdrop', backdropClassName), cssModule)
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return ModalUnstyled;
}(React.Component);
ModalUnstyled.propTypes = {
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  isOpen: PropTypes.bool,
  isLocked: PropTypes.bool,
  onUnlock: PropTypes.func,
  onBackdrop: PropTypes.func,
  keyboard: PropTypes.bool,
  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['static'])]),
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
  cssModule: PropTypes.object,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
var Modal = styled(ModalUnstyled).withConfig({
  displayName: 'Modal'
})(['', ''], function (props) {
  return '\n    ' + rebootUtils.body(props.theme['$font-family-base'], props.theme['$font-size-base'], props.theme['$font-weight-base'], props.theme['$line-height-base'], props.theme['$body-color'], props.theme['$body-bg']) + '\n    & .modal {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: ' + props.theme['$zindex-modal'] + ';\n      display: none;\n      outline: 0;\n      overflow-x: hidden;\n      overflow-y: auto;\n      \n      ' + fade(props.theme['$enable-transitions'], props.theme['$transition-fade']) + '\n      &.fade {\n        .modal-dialog {\n          ' + transition(props.theme['$enable-transitions'], props.theme['$modal-transition']) + '\n          transform: translate(0, -25%);\n        }\n      }\n      &.show {\n        .modal-dialog {\n          transform: translate(0, 0);\n        }\n      }\n    }\n    \n    & .modal-dialog {\n      position: relative;\n      width: auto;\n      margin: ' + props.theme['$modal-dialog-margin'] + ';\n    }\n    \n    \n    & .modal-content {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      background-color: ' + props.theme['$modal-content-bg'] + ';\n      background-clip: padding-box;\n      border: ' + props.theme['$modal-content-border-width'] + ' solid ' + props.theme['$modal-content-border-color'] + ';\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$border-radius-lg']) + '\n      ' + boxShadow(props.theme['$enable-shadows'], props.theme['$modal-content-xs-box-shadow']) + '\n      outline: 0;\n    }\n    \n    & .modal-backdrop {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: ' + props.theme['$zindex-modal-backdrop'] + ';\n      background-color: ' + props.theme['$modal-backdrop-bg'] + ';\n      &.fade {\n        opacity: 0\n      }\n      &.show {\n        opacity: ' + props.theme['$modal-backdrop-opacity'] + ';\n      }\n    }\n      \n        \n    & .modal-header {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: ' + props.theme['$modal-header-padding'] + ';\n      border-bottom: ' + props.theme['$modal-header-border-width'] + ' solid ' + props.theme['$modal-header-border-color'] + ';\n    }\n    \n    & .modal-title {\n      margin-bottom: 0;\n      line-height: ' + props.theme['$modal-title-line-height'] + ';\n    }\n    \n    & .modal-body {\n      position: relative;\n      flex: 1 1 auto;\n      padding: ' + props.theme['$modal-inner-padding'] + ';\n    }\n    \n    & .modal-footer {\n      display: flex;\n      align-items: center;\n      justify-content: flex-end;\n      padding: ' + props.theme['$modal-inner-padding'] + ';\n      border-top: ' + props.theme['$modal-footer-border-width'] + ' solid ' + props.theme['$modal-footer-border-color'] + ';\n      // Easily place margin between footer elements\n      > :not(:first-child) { margin-left: .25rem; }\n      > :not(:last-child) { margin-right: .25rem; }\n    }\n    \n\n  \n    // Scale up the modal\n    ' + mediaBreakpointUp('sm', props.theme['$grid-breakpoints'], '\n        & .modal-dialog {\n          max-width: ' + props.theme['$modal-md'] + ';\n          margin: ' + props.theme['$modal-dialog-sm-up-margin-y'] + ' auto;\n        }\n      \n        & .modal-content {\n          ' + boxShadow(props.theme['$enable-shadows'], props.theme['$modal-content-sm-up-box-shadow']) + '\n        }\n      \n        & .modal-sm {\n          max-width: ' + props.theme['$modal-sm'] + ';\n        }\n      ') + '\n  \n\n    ' + mediaBreakpointUp('lg', props.theme['$grid-breakpoints'], '\n        & .modal-lg {\n           max-width:  ' + props.theme['$modal-lg'] + '; \n         }\n      ') + '\n  ';
});
Modal.defaultProps = defaultProps$85;

var propTypes$4 = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  wrapTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  toggle: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node
};
var defaultProps$87 = {
  tag: H4,
  wrapTag: 'div'
};
var ModalHeader = function ModalHeader(props) {
  var closeButton = void 0;
  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      WrapTag = props.wrapTag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'children', 'toggle', 'tag', 'wrapTag']);
  var classes = mapToCssModules(classnames$1(className, 'modal-header'), cssModule);
  if (toggle) {
    closeButton = React.createElement(
      'button',
      { type: 'button', onClick: toggle, className: 'close', 'aria-label': 'Close' },
      React.createElement(
        'span',
        { 'aria-hidden': 'true' },
        String.fromCharCode(215)
      )
    );
  }
  return React.createElement(
    WrapTag,
    _extends({}, attributes, { className: classes }),
    React.createElement(
      Tag,
      { className: mapToCssModules('modal-title', cssModule) },
      children
    ),
    closeButton
  );
};
ModalHeader.propTypes = propTypes$4;
ModalHeader.defaultProps = defaultProps$87;

var propTypes$5 = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var defaultProps$88 = {
  tag: 'div'
};
var ModalFooter = function ModalFooter(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  return React.createElement(Tag, _extends({}, attributes, {
    className: mapToCssModules(classnames$1(className, 'modal-footer'), cssModule)
  }));
};
ModalFooter.propTypes = propTypes$5;
ModalFooter.defaultProps = defaultProps$88;

var propTypes$6 = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var defaultProps$89 = {
  tag: 'div'
};
var ModalBody = function ModalBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  return React.createElement(Tag, _extends({}, attributes, {
    className: mapToCssModules(classnames$1(className, 'modal-body'), cssModule)
  }));
};
ModalBody.propTypes = propTypes$6;
ModalBody.defaultProps = defaultProps$89;

var defaultProps$90 = {
  theme: bsTheme,
  tag: Ul
};
var NavUnstyled = function (_React$Component) {
  inherits(NavUnstyled, _React$Component);
  function NavUnstyled() {
    classCallCheck$1(this, NavUnstyled);
    return possibleConstructorReturn(this, (NavUnstyled.__proto__ || Object.getPrototypeOf(NavUnstyled)).apply(this, arguments));
  }
  createClass$1(NavUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          tabs = _omit.tabs,
          pills = _omit.pills,
          fill = _omit.fill,
          inline = _omit.inline,
          stacked = _omit.stacked,
          vertical = _omit.vertical,
          justified = _omit.justified,
          navbar$$1 = _omit.navbar,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'tabs', 'pills', 'fill', 'inline', 'stacked', 'vertical', 'justified', 'navbar', 'tag']);
      var classes = mapToCssModules(classnames$1(className, navbar$$1 ? 'navbar-nav' : 'nav', {
        'nav-tabs': tabs,
        'nav-pills': pills,
        'nav-fill': fill,
        'nav-inline': inline,
        'nav-stacked': stacked,
        'nav-justified': justified,
        'flex-column': vertical
      }), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return NavUnstyled;
}(React.Component);
NavUnstyled.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  theme: PropTypes.object,
  inline: PropTypes.bool,
  vertical: PropTypes.bool,
  justified: PropTypes.bool,
  fill: PropTypes.bool,
  tabs: PropTypes.bool,
  pills: PropTypes.bool,
  stacked: PropTypes.bool,
  navbar: PropTypes.bool
};
var Nav = styled(NavUnstyled).withConfig({
  displayName: 'Nav'
})(['', ''], function (props) {
  return '\n    ' + nav(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$nav-link-padding'], props.theme['$nav-disabled-link-color'], props.theme['$cursor-disabled'], props.theme['$nav-tabs-border-width'], props.theme['$nav-tabs-border-color'], props.theme['$nav-tabs-border-radius'], props.theme['$nav-tabs-link-hover-border-color'], props.theme['$nav-tabs-active-link-hover-color'], props.theme['$nav-tabs-active-link-hover-bg'], props.theme['$nav-tabs-active-link-hover-border-color'], props.theme['$nav-pills-border-radius'], props.theme['$nav-pills-active-link-color'], props.theme['$nav-pills-active-link-bg']) + '\n    \n    ' + navbar(props.theme['$grid-breakpoints'], props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$navbar-padding-y'], props.theme['$navbar-padding-x'], props.theme['$zindex-navbar'], props.theme['$zindex-navbar-fixed'], props.theme['$zindex-navbar-sticky'], props.theme['$navbar-brand-padding-y'], props.theme['$font-size-lg'], props.theme['$navbar-divider-padding-y'], props.theme['$navbar-toggler-padding-y'], props.theme['$navbar-toggler-padding-x'], props.theme['$navbar-toggler-font-size'], props.theme['$border-width'], props.theme['$navbar-toggler-border-radius'], props.theme['$navbar-light-active-color'], props.theme['$navbar-light-color'], props.theme['$navbar-light-hover-color'], props.theme['$navbar-light-toggler-border'], props.theme['$navbar-light-disabled-color'], props.theme['$navbar-light-toggler-bg'], props.theme['$navbar-inverse-active-color'], props.theme['$navbar-inverse-color'], props.theme['$navbar-inverse-hover-color'], props.theme['$navbar-inverse-toggler-border'], props.theme['$navbar-inverse-toggler-bg'], props.theme['$navbar-inverse-disabled-color']) + '\n  ';
});
Nav.defaultProps = defaultProps$90;

var defaultProps$91 = {
  tag: 'li'
};
var NavItem = function (_React$Component) {
  inherits(NavItem, _React$Component);
  function NavItem() {
    classCallCheck$1(this, NavItem);
    return possibleConstructorReturn(this, (NavItem.__proto__ || Object.getPrototypeOf(NavItem)).apply(this, arguments));
  }
  createClass$1(NavItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'tag']);
      var classes = mapToCssModules(classnames$1(className, 'nav-item'), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return NavItem;
}(React.Component);
NavItem.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};
NavItem.defaultProps = defaultProps$91;

var defaultProps$92 = {
  tag: A
};
var NavLink = function (_React$Component) {
  inherits(NavLink, _React$Component);
  function NavLink(props) {
    classCallCheck$1(this, NavLink);
    var _this = possibleConstructorReturn(this, (NavLink.__proto__ || Object.getPrototypeOf(NavLink)).call(this, props));
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }
  createClass$1(NavLink, [{
    key: 'onClick',
    value: function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }
      if (this.props.href === '#') {
        e.preventDefault();
      }
      if (this.props.onClick) {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          active = _props.active,
          Tag = _props.tag,
          getRef = _props.getRef,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'active', 'tag', 'getRef']);
      var classes = mapToCssModules(classnames$1(className, 'nav-link', {
        disabled: attributes.disabled,
        active: active
      }), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { ref: getRef, onClick: this.onClick, className: classes }));
    }
  }]);
  return NavLink;
}(React.Component);
NavLink.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  onClick: PropTypes.func,
  href: PropTypes.any
};
NavLink.defaultProps = defaultProps$92;

var defaultProps$93 = { theme: bsTheme };
var Ol = styled.ol.withConfig({
  displayName: 'Ol'
})(['  ', ''], function (props) {
  return '\n    /* Type Scss */\n    &.list-unstyled {\n      ' + listUnstyled() + '\n    }\n\n    &.list-inline {\n      ' + listInline() + '\n    }\n\n    &.list-inline-item {\n      ' + listInlineItem(props.theme['$list-inline-padding']) + '\n    }\n\n    /* Reboot Scss */\n    margin-top: 0;\n    margin-bottom: 1rem;\n\n    & ol,\n    & ul {\n      margin-bottom: 0;\n    }\n  ';
});
Ol.defaultProps = defaultProps$93;

var Option = styled.option.withConfig({
  displayName: 'Option'
})(['']);

var OutputUnstyled = function (_React$Component) {
  inherits(OutputUnstyled, _React$Component);
  function OutputUnstyled() {
    classCallCheck$1(this, OutputUnstyled);
    return possibleConstructorReturn(this, (OutputUnstyled.__proto__ || Object.getPrototypeOf(OutputUnstyled)).apply(this, arguments));
  }
  createClass$1(OutputUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          rest = objectWithoutProperties(_omit, ['className']);
      return React.createElement('output', _extends({
        className: classnames$1(className, 'output')
      }, rest));
    }
  }]);
  return OutputUnstyled;
}(React.Component);
OutputUnstyled.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.object
};
var Output = styled(OutputUnstyled).withConfig({
  displayName: 'Output'
})(['&.output{display:inline-block;}']);

var defaultProps$94 = { theme: bsTheme };
var PUnstyled = function (_React$Component) {
  inherits(PUnstyled, _React$Component);
  function PUnstyled() {
    classCallCheck$1(this, PUnstyled);
    return possibleConstructorReturn(this, (PUnstyled.__proto__ || Object.getPrototypeOf(PUnstyled)).apply(this, arguments));
  }
  createClass$1(PUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          color = _omit.color,
          children = _omit.children,
          cssModule = _omit.cssModule,
          lead = _omit.lead,
          attributes = objectWithoutProperties(_omit, ['className', 'color', 'children', 'cssModule', 'lead']);
      var classes = mapToCssModules(classnames$1(className, lead ? 'lead' : false, color ? 'text-' + color : false), cssModule);
      return React.createElement(
        'p',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return PUnstyled;
}(React.Component);
PUnstyled.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.object,
  color: PropTypes.string,
  lead: PropTypes.bool,
  cssModule: PropTypes.object
};
var P = styled(PUnstyled).withConfig({
  displayName: 'P'
})(['', ''], function (props) {
  return '\n    /* Type Scss */\n\n    &.lead {\n      font-size: ' + props.theme['$lead-font-size'] + ';\n      font-weight: ' + props.theme['$lead-font-weight'] + ';\n    }\n    \n    &.h1{\n      font-size: ' + props.theme['$font-size-h1'] + ';\n      ' + typography(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n    }\n    \n    &.h2{\n      font-size: ' + props.theme['$font-size-h2'] + ';\n      ' + typography(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n    }\n    \n    &.h3{\n      font-size: ' + props.theme['$font-size-h3'] + ';\n      ' + typography(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n    }\n    \n    &.h4{\n      font-size: ' + props.theme['$font-size-h4'] + ';\n      ' + typography(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n    }\n    \n    &.h5{\n      font-size: ' + props.theme['$font-size-h5'] + ';\n      ' + typography(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n    }\n    \n    &.h6{\n      font-size: ' + props.theme['$font-size-h6'] + ';\n      ' + typography(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n    }\n    \n    /* Reboot Scss */\n    margin-top: 0;   \n    margin-bottom: 1rem;\n  ';
});
P.defaultProps = defaultProps$94;

var defaultProps$95 = {
  theme: bsTheme,
  tag: 'ul'
};
var PaginationUnstyled = function (_React$Component) {
  inherits(PaginationUnstyled, _React$Component);
  function PaginationUnstyled() {
    classCallCheck$1(this, PaginationUnstyled);
    return possibleConstructorReturn(this, (PaginationUnstyled.__proto__ || Object.getPrototypeOf(PaginationUnstyled)).apply(this, arguments));
  }
  createClass$1(PaginationUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          size = _omit.size,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'tag', 'size']);
      var classes = mapToCssModules(classnames$1(className, 'pagination', defineProperty({}, 'pagination-' + size, !!size)), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return PaginationUnstyled;
}(React.Component);
PaginationUnstyled.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  theme: PropTypes.object
};
var Pagination = styled(PaginationUnstyled).withConfig({
  displayName: 'Pagination'
})(['', ''], function (props) {
  return '\n    ' + pagination(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$border-radius'], props.theme['$pagination-active-color'], props.theme['$pagination-active-bg'], props.theme['$pagination-active-border'], props.theme['$pagination-disabled-color'], props.theme['$cursor-disabled'], props.theme['$pagination-disabled-bg'], props.theme['$pagination-disabled-border'], props.theme['$pagination-padding-y'], props.theme['$pagination-padding-x'], props.theme['$pagination-line-height'], props.theme['$pagination-color'], props.theme['$pagination-bg'], props.theme['$pagination-border-width'], props.theme['$pagination-border-color'], props.theme['$pagination-hover-color'], props.theme['$pagination-hover-bg'], props.theme['$pagination-hover-border'], props.theme['$pagination-padding-y-lg'], props.theme['$pagination-padding-x-lg'], props.theme['$font-size-lg'], props.theme['$line-height-lg'], props.theme['$border-radius-lg'], props.theme['$pagination-padding-y-sm'], props.theme['$pagination-padding-x-sm'], props.theme['$font-size-sm'], props.theme['$line-height-sm'], props.theme['$border-radius-sm']) + '\n  ';
});
Pagination.defaultProps = defaultProps$95;

var defaultProps$96 = {
  tag: 'li'
};
var PaginationItem = function (_React$Component) {
  inherits(PaginationItem, _React$Component);
  function PaginationItem() {
    classCallCheck$1(this, PaginationItem);
    return possibleConstructorReturn(this, (PaginationItem.__proto__ || Object.getPrototypeOf(PaginationItem)).apply(this, arguments));
  }
  createClass$1(PaginationItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          className = _props.className,
          cssModule = _props.cssModule,
          disabled = _props.disabled,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['active', 'className', 'cssModule', 'disabled', 'tag']);
      var classes = mapToCssModules(classnames$1(className, 'page-item', {
        active: active,
        disabled: disabled
      }), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return PaginationItem;
}(React.Component);
PaginationItem.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
PaginationItem.defaultProps = defaultProps$96;

var defaultProps$97 = {
  tag: A
};
var PaginationLink = function (_React$Component) {
  inherits(PaginationLink, _React$Component);
  function PaginationLink() {
    classCallCheck$1(this, PaginationLink);
    return possibleConstructorReturn(this, (PaginationLink.__proto__ || Object.getPrototypeOf(PaginationLink)).apply(this, arguments));
  }
  createClass$1(PaginationLink, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          next = _props.next,
          previous = _props.previous,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'next', 'previous', 'tag']);
      var classes = mapToCssModules(classnames$1(className, 'page-link'), cssModule);
      var defaultAriaLabel = void 0;
      if (previous) {
        defaultAriaLabel = 'Previous';
      } else if (next) {
        defaultAriaLabel = 'Next';
      }
      var ariaLabel = this.props['aria-label'] || defaultAriaLabel;
      var defaultCaret = void 0;
      if (previous) {
        defaultCaret = '\xAB';
      } else if (next) {
        defaultCaret = '\xBB';
      }
      var children = this.props.children;
      if (previous || next) {
        children = [React.createElement(
          'span',
          {
            'aria-hidden': 'true',
            key: 'caret'
          },
          children || defaultCaret
        ), React.createElement(
          'span',
          {
            className: 'sr-only',
            key: 'sr'
          },
          ariaLabel
        )];
      }
      return React.createElement(
        Tag,
        _extends({}, attributes, {
          className: classes,
          'aria-label': ariaLabel
        }),
        children
      );
    }
  }]);
  return PaginationLink;
}(React.Component);
PaginationLink.propTypes = {
  'aria-label': PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  cssModule: PropTypes.object,
  next: PropTypes.bool,
  previous: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
PaginationLink.defaultProps = defaultProps$97;

var defaultProps$98 = { theme: bsTheme };
var Pre = styled.pre.withConfig({
  displayName: 'Pre'
})(['', ''], function (props) {
  return '\n    /* Blocks of code */\n    display: block;\n    margin-top: 0;\n    margin-bottom: 1rem;\n    font-size: ' + props.theme['$code-font-size'] + ';\n    color: ' + props.theme['$pre-color'] + ';\n    \n    /* Enable scrollable blocks of code */\n    /* AJT This class was present in bootstrap/scss/code.scss  We must decide if this class should be a mixin or not! */\n    &.pre-scrollable {\n      max-height: ' + props.theme['$pre-scrollable-max-height'] + ';\n      overflow-y: scroll;\n    }\n\n  \n    /* Account for some code outputs that place code tags in pre tags */\n    code {\n      padding: 0;\n      font-size: inherit;\n      color: inherit;\n      background-color: transparent;\n      border-radius: 0;\n    }\n    \n    /* Reboot Scss */\n\n    /* Remove browser default top margin */\n    margin-top: 0;\n    /* Reset browser default of \'1em\' to use \'rem\'s */\n    margin-bottom: 1rem;\n    /* Normalize v4 removed this property, causing \'pre\' content to break out of wrapping code snippets */\n    overflow: auto;\n    \n    /* Bootstrap 4 does not place this css rule straight into Kbd tag see: bootstrap/scss/code.scss */\n    font-family: ' + props.theme['$font-family-monospace'] + ';\n  ';
});
Pre.defaultProps = defaultProps$98;

var defaultProps$99 = {
  theme: bsTheme
};
var ProgressUnstyled = function (_React$Component) {
  inherits(ProgressUnstyled, _React$Component);
  function ProgressUnstyled() {
    classCallCheck$1(this, ProgressUnstyled);
    return possibleConstructorReturn(this, (ProgressUnstyled.__proto__ || Object.getPrototypeOf(ProgressUnstyled)).apply(this, arguments));
  }
  createClass$1(ProgressUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          children = _omit.children,
          className = _omit.className,
          rest = objectWithoutProperties(_omit, ['children', 'className']);
      return React.createElement(
        'div',
        _extends({ className: classnames$1('progress', className) }, rest),
        children
      );
    }
  }]);
  return ProgressUnstyled;
}(React.Component);
ProgressUnstyled.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.object
};
var backgroundPositionKeyFrame = function backgroundPositionKeyFrame(props) {
  return keyframes(['from{background-position:', ' 0;}to{background-position:0 0;}'], props.theme['$progress-height']);
};
var Progress = styled(ProgressUnstyled).withConfig({
  displayName: 'Progress'
})(['', ''], function (props) {
  return '\n    \n    &.progress {\n      display: flex;\n      overflow: hidden; // force rounded corners by cropping it\n      font-size: ' + props.theme['$progress-font-size'] + ';\n      line-height: ' + props.theme['$progress-height'] + ';\n      text-align: center;\n      background-color: ' + props.theme['$progress-bg'] + ';\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$progress-border-radius']) + '\n      ' + getBackgroundUtilities(props.theme['$enable-hover-media-query'], props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$brand-inverse'], props.theme['$gray-lightest']) + '\n    }\n    \n    .progress-bar {\n      height: ' + props.theme['$progress-height'] + ';\n      line-height: ' + props.theme['$progress-height'] + ';\n      color: ' + props.theme['$progress-bar-color'] + ';\n      background-color: ' + props.theme['$progress-bar-bg'] + ';\n    }\n    \n    .progress-bar-striped {\n      ' + gradientStriped() + '\n      background-size: ' + props.theme['$progress-height'] + ' ' + props.theme['$progress-height'] + ';\n      background-repeat: repeat; /* Not present in bootstrap original but required to repeat the background */\n    }\n    \n    .progress-bar-animated {\n      animation: ' + backgroundPositionKeyFrame(props) + ' ' + props.theme['$progress-bar-animation-timing'] + ';\n    }\n\n  ';
});
Progress.defaultProps = defaultProps$99;

var ProgressBar = function (_React$Component) {
  inherits(ProgressBar, _React$Component);
  function ProgressBar() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck$1(this, ProgressBar);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      classNameProgress: '',
      classNameProgressBar: ''
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  createClass$1(ProgressBar, [{
    key: 'getWidth',
    value: function getWidth(valueNow, valueMin, valueMax) {
      return index.mapBetween(valueNow, valueMin, valueMax) + '%';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          color = _props.color,
          className = _props.className,
          cssModule = _props.cssModule,
          valueNow = _props.valueNow,
          valueMin = _props.valueMin,
          valueMax = _props.valueMax,
          height = _props.height,
          striped = _props.striped,
          animated = _props.animated,
          rest = objectWithoutProperties(_props, ['children', 'color', 'className', 'cssModule', 'valueNow', 'valueMin', 'valueMax', 'height', 'striped', 'animated']);
      var progressBarClasses = mapToCssModules(classnames$1(className, 'progress-bar', animated ? 'progress-bar-animated' : null, color ? 'bg-' + color : null, striped || animated ? 'progress-bar-striped' : null), cssModule);
      return React.createElement(
        'div',
        _extends({
          className: progressBarClasses,
          style: Object.assign({ width: this.getWidth(valueNow, valueMin, valueMax) }, { height: height })
        }, rest),
        children
      );
    }
  }]);
  return ProgressBar;
}(React.Component);
ProgressBar.defaultProps = {
  valueMin: 0,
  valueMax: 100,
  valueNow: 0,
  striped: false,
  animated: false
};
ProgressBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  valueMin: PropTypes.number,
  valueNow: PropTypes.number,
  valueMax: PropTypes.number,
  height: PropTypes.string,
  striped: PropTypes.bool,
  animated: PropTypes.bool,
  cssModule: PropTypes.object,
  color: PropTypes.string
};

var defaultProps$100 = { theme: bsTheme };
var RowUnstyled = function (_React$Component) {
  inherits(RowUnstyled, _React$Component);
  function RowUnstyled() {
    classCallCheck$1(this, RowUnstyled);
    return possibleConstructorReturn(this, (RowUnstyled.__proto__ || Object.getPrototypeOf(RowUnstyled)).apply(this, arguments));
  }
  createClass$1(RowUnstyled, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children;
      return React.createElement(
        'div',
        { className: classnames$1(className, 'row') },
        children
      );
    }
  }]);
  return RowUnstyled;
}(React.Component);
RowUnstyled.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
var Row = styled(RowUnstyled).withConfig({
  displayName: 'Row'
})(['', ''], function (props) {
  return '\n    &.row {\n      ' + makeRow(props.theme['$enable-grid-classes'], props.theme['$grid-gutter-widths']) + '\n    }\n    /*\n      Remove the negative margin from default .row, then the horizontal padding\n      from all immediate children columns (to prevent runaway style inheritance).\n    */\n\n    &.no-gutters {\n      margin-right: 0;\n      margin-left: 0;\n\n      > .col,\n      > [class*="col-"] {\n        padding-right: 0;\n        padding-left: 0;\n      }\n    }\n ';
});
Row.defaultProps = defaultProps$100;

var Samp = styled.samp.withConfig({
  displayName: 'Samp'
})(['font-family:monospace,monospace;font-size:1em;']);

var Section = styled.section.withConfig({
  displayName: 'Section'
})(['']);

var SelectUnstyled = function (_React$Component) {
  inherits(SelectUnstyled, _React$Component);
  function SelectUnstyled() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck$1(this, SelectUnstyled);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = SelectUnstyled.__proto__ || Object.getPrototypeOf(SelectUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      className: null
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  createClass$1(SelectUnstyled, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var nua = navigator.userAgent;
      var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
      if (isAndroid) {
        this.setState({
          className: this.props.className.replace(/\bform-control\b/, '')
        });
      } else {
        this.setState({
          className: this.props.className
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme', 'className']),
          children = _omit.children,
          rest = objectWithoutProperties(_omit, ['children']);
      return React.createElement(
        'select',
        _extends({
          className: classnames$1(this.state.className, 'select')
        }, rest),
        children
      );
    }
  }]);
  return SelectUnstyled;
}(React.Component);
SelectUnstyled.propTypes = {
  theme: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
var Select = styled(SelectUnstyled).withConfig({
  displayName: 'Select'
})(['&.select{touch-action:manipulation;line-height:inherit;}&:disabled{color:graytext;}']);

var defaultProps$101 = { theme: bsTheme };
var SmallUnstyled = function (_React$Component) {
  inherits(SmallUnstyled, _React$Component);
  function SmallUnstyled() {
    classCallCheck$1(this, SmallUnstyled);
    return possibleConstructorReturn(this, (SmallUnstyled.__proto__ || Object.getPrototypeOf(SmallUnstyled)).apply(this, arguments));
  }
  createClass$1(SmallUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          color = _omit.color,
          children = _omit.children,
          cssModule = _omit.cssModule,
          attributes = objectWithoutProperties(_omit, ['className', 'color', 'children', 'cssModule']);
      var classes = mapToCssModules(classnames$1(className, color ? 'text-' + color : false), cssModule);
      return React.createElement(
        'small',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return SmallUnstyled;
}(React.Component);
SmallUnstyled.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.object,
  color: PropTypes.string,
  cssModule: PropTypes.object
};
var Small = styled(SmallUnstyled).withConfig({
  displayName: 'Small'
})(['', ''], function (props) {
  return '\n    /* Reboot Scss */\n    font-size: ' + props.theme['$small-font-size'] + ';\n    font-weight: normal;\n  ';
});
Small.defaultProps = defaultProps$101;

var defaultProps$102 = { theme: bsTheme };
var StrongUnstyled = function (_React$Component) {
  inherits(StrongUnstyled, _React$Component);
  function StrongUnstyled() {
    classCallCheck$1(this, StrongUnstyled);
    return possibleConstructorReturn(this, (StrongUnstyled.__proto__ || Object.getPrototypeOf(StrongUnstyled)).apply(this, arguments));
  }
  createClass$1(StrongUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          color = _omit.color,
          children = _omit.children,
          cssModule = _omit.cssModule,
          attributes = objectWithoutProperties(_omit, ['className', 'color', 'children', 'cssModule']);
      var classes = mapToCssModules(classnames$1(className, color ? 'text-' + color : false), cssModule);
      return React.createElement(
        'strong',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return StrongUnstyled;
}(React.Component);
StrongUnstyled.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.object,
  color: PropTypes.string,
  cssModule: PropTypes.object
};
var Strong = styled(StrongUnstyled).withConfig({
  displayName: 'Strong'
})(['font-weight:bolder;']);
Strong.defaultProps = defaultProps$102;

var Summary = styled.summary.withConfig({
  displayName: 'Summary'
})(['touch-action:manipulation;']);

var Sub = styled.sub.withConfig({
  displayName: 'Sub'
})(['position:relative;font-size:75%;line-height:0;vertical-align:baseline;bottom:-.25em;']);

var Sup = styled.sup.withConfig({
  displayName: 'Sup'
})(['position:relative;font-size:75%;line-height:0;vertical-align:baseline;top:-.5em;']);

var defaultProps$103 = {
  tag: 'table',
  responsiveTag: 'div',
  theme: bsTheme
};
var TableUnstyled = function (_React$Component) {
  inherits(TableUnstyled, _React$Component);
  function TableUnstyled() {
    classCallCheck$1(this, TableUnstyled);
    return possibleConstructorReturn(this, (TableUnstyled.__proto__ || Object.getPrototypeOf(TableUnstyled)).apply(this, arguments));
  }
  createClass$1(TableUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          size = _omit.size,
          bordered = _omit.bordered,
          striped = _omit.striped,
          inverse = _omit.inverse,
          hover$$1 = _omit.hover,
          reflow = _omit.reflow,
          responsive = _omit.responsive,
          Tag = _omit.tag,
          ResponsiveTag = _omit.responsiveTag,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'size', 'bordered', 'striped', 'inverse', 'hover', 'reflow', 'responsive', 'tag', 'responsiveTag']);
      var classes = mapToCssModules(classnames$1(className, 'table', size ? 'table-' + size : false,
      bordered ? 'table-bordered' : false, striped ? 'table-striped' : false, inverse ? 'table-inverse' : false, hover$$1 ? 'table-hover' : false, reflow ? 'table-reflow' : false), cssModule);
      var table = React.createElement(Tag, _extends({}, attributes, { className: classes }));
      if (responsive) {
        return React.createElement(
          ResponsiveTag,
          { className: 'table-responsive' },
          table
        );
      }
      return table;
    }
  }]);
  return TableUnstyled;
}(React.Component);
TableUnstyled.propTypes = {
  theme: PropTypes.object,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  bordered: PropTypes.bool,
  striped: PropTypes.bool,
  inverse: PropTypes.bool,
  hover: PropTypes.bool,
  reflow: PropTypes.bool,
  responsive: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  responsiveTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
var Table = styled(TableUnstyled).withConfig({
  displayName: 'Table'
})(['', ''], function (props) {
  return '\n    /*\n     Basic Bootstrap table\n    */\n    \n    &.table {\n      width: 100%;\n      max-width: 100%;\n      margin-bottom: ' + props.theme['$spacer'] + ';\n      background-color: ' + props.theme['$table-bg'] + ';\n\n      th,\n      td {\n        padding: ' + props.theme['$table-cell-padding'] + ';\n        vertical-align: top;\n        border-top: ' + props.theme['$table-border-width'] + ' solid ' + props.theme['$table-border-color'] + ';\n      }\n    \n      thead th {\n        vertical-align: bottom;\n        border-bottom: ' + index$1.math.multiply(2, props.theme['$table-border-width']) + ' solid ' + props.theme['$table-border-color'] + ';\n      }\n    \n      tbody + tbody {\n        border-top: ' + index$1.math.multiply(2, props.theme['$table-border-width']) + ' solid ' + props.theme['$table-border-color'] + ';\n      }\n    \n      .table {\n        background-color: ' + props.theme['$body-bg'] + ';\n      }\n    }\n    \n    \n    /*\n     Condensed table w/ half padding\n    */\n    \n    &.table-sm {\n      th,\n      td {\n        padding: ' + props.theme['$table-sm-cell-padding'] + ';\n      }\n    }\n    \n    \n    /* Bordered version\n     Add borders all around the table and between all the columns.\n    */\n    &.table-bordered {\n      border: ' + props.theme['$table-border-width'] + ' solid ' + props.theme['$table-border-color'] + ';\n    \n      th,\n      td {\n        border: ' + props.theme['$table-border-width'] + ' solid ' + props.theme['$table-border-color'] + ';\n      }\n    \n      thead {\n        th,\n        td {\n          border-bottom-width: ' + index$1.math.multiply(2, props.theme['$table-border-width']) + ';\n        }\n      }\n    }\n    \n    \n    /* Zebra-striping\n     Default zebra-stripe styles (alternating gray and transparent backgrounds)\n    */\n    \n    &.table-striped {\n      tbody tr:nth-of-type(odd) {\n        background-color: ' + props.theme['$table-bg-accent'] + ';\n      }\n    }\n    \n    \n    /* \n    Hover effect Placed here since it has to come after the potential zebra striping\n    */\n\n    \n    &.table-hover {\n      tbody tr {\n        ' + hover('\n          background-color: ' + props.theme['$table-bg-hover'] + ';\n        ') + '\n      }\n    }\n    \n    /* Table backgrounds\n    Exact selectors below required to override \'.table-striped\' and prevent\n    inheritance to nested tables.\n    */\n        \n    /* Generate the contextual variants */\n    ' + tableRowVariant('active', props.theme['$table-bg-active']) + '\n    ' + tableRowVariant('success', props.theme['$state-success-bg']) + '\n    ' + tableRowVariant('info', props.theme['$state-info-bg']) + '\n    ' + tableRowVariant('warning', props.theme['$state-warning-bg']) + '\n    ' + tableRowVariant('danger', props.theme['$state-danger-bg']) + '\n     \n    \n    /* Inverse styles\n    Same table markup, but inverted color scheme: dark background and light text.\n    */ \n    \n    & thead.thead-inverse {\n      th {\n        color: ' + props.theme['$table-inverse-color'] + ';\n        background-color: ' + props.theme['$table-inverse-bg'] + ';\n      }\n    }\n    \n    \n    & thead.thead-default {\n      th {\n        color: ' + props.theme['$table-head-color'] + ';\n        background-color: ' + props.theme['$table-head-bg'] + ';\n      }\n    }\n    \n    &.table-inverse {\n      color: ' + props.theme['$table-inverse-color'] + ';\n      background-color: ' + props.theme['$table-inverse-bg'] + ';\n    \n      th,\n      td,\n      thead th {\n        border-color: ' + props.theme['$table-inverse-border'] + ';\n      }\n    \n      &.table-bordered {\n        border: 0;\n      }\n      \n      &.table-striped {\n        tbody tr:nth-of-type(odd) {\n        background-color: ' + props.theme['$table-inverse-bg-accent'] + ';\n        }\n      }\n      \n      &.table-hover {\n        tbody tr {\n          ' + hover('\n            background-color: ' + props.theme['$table-inverse-bg-hover'] + ';\n          ') + '\n        }\n      }\n    }\n    \n    \n    \n    /* Responsive tables\n     Wrap your tables in \'.table-responsive\' and we\'ll make them mobile friendly\n     by enabling horizontal scrolling. Only applies <768px. Everything above that\n     will display normally.\n     */\n    \n    &.table-responsive {\n      display: block;\n      width: 100%;\n      overflow-x: auto;\n      -ms-overflow-style: -ms-autohiding-scrollbar; /* See https://github.com/twbs/bootstrap/pull/10057 */\n      &.table-bordered {\n        border: 0;\n      }\n    }\n    \n    \n    &.table-reflow {\n    \n      /* added bs4 missing tfoot rule */\n      thead, tfoot {\n        float: left;\n      }\n    \n      tbody {\n        display: block;\n        white-space: nowrap;\n      }\n    \n      th,\n      td {\n        border-top: ' + props.theme['$table-border-width'] + ' solid ' + props.theme['$table-border-color'] + ';\n        border-left: ' + props.theme['$table-border-width'] + ' solid ' + props.theme['$table-border-color'] + ';\n    \n        &:last-child {\n          border-right: ' + props.theme['$table-border-width'] + ' solid ' + props.theme['$table-border-color'] + ';\n        }\n      }\n    \n      thead,\n      tbody,\n      tfoot {\n        &:last-child {\n          tr:last-child th,\n          tr:last-child td {\n            border-bottom: ' + props.theme['$table-border-width'] + ' solid ' + props.theme['$table-border-color'] + ';\n          }\n        }\n      }\n    \n      tr {\n        float: left;\n    \n        th,\n        td {\n          display: block !important;\n          border: ' + props.theme['$table-border-width'] + ' solid ' + props.theme['$table-border-color'] + ';\n        }\n      }\n    }\n    \n      /* from reboot.scss */\n      th {\n        /* Centered by default, but left-align-ed to match the tds below. */\n        text-align: left;\n      }\n        \n\n      \n    /* Reboot Scss */\n    /* No longer part of Normalize since v4 */\n    border-collapse: collapse;\n    /*  Reset for nesting within parents with \'background-color\'. */\n    background-color: ' + props.theme['$table-bg'] + ';    \n    \n  ';
});
Table.defaultProps = defaultProps$103;

var Tbody = styled.tbody.withConfig({
  displayName: 'Tbody'
})(['']);

var Thead = function (_React$Component) {
  inherits(Thead, _React$Component);
  function Thead() {
    classCallCheck$1(this, Thead);
    return possibleConstructorReturn(this, (Thead.__proto__ || Object.getPrototypeOf(Thead)).apply(this, arguments));
  }
  createClass$1(Thead, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          inverse = _props.inverse,
          children = _props.children,
          defaultBg = _props.defaultBg,
          attributes = objectWithoutProperties(_props, ['className', 'inverse', 'children', 'defaultBg']);
      var classes = classnames$1(className, inverse ? 'thead-inverse' : false, defaultBg ? 'thead-default' : false);
      return React.createElement(
        'thead',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return Thead;
}(React.Component);
Thead.propTypes = {
  className: PropTypes.string,
  inverse: PropTypes.bool,
  defaultBg: PropTypes.bool,
  children: PropTypes.node
};

var Tfoot = styled.tfoot.withConfig({
  displayName: 'Tfoot'
})(['']);

var Tr = function (_React$Component) {
  inherits(Tr, _React$Component);
  function Tr() {
    classCallCheck$1(this, Tr);
    return possibleConstructorReturn(this, (Tr.__proto__ || Object.getPrototypeOf(Tr)).apply(this, arguments));
  }
  createClass$1(Tr, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          color = _props.color,
          children = _props.children,
          attributes = objectWithoutProperties(_props, ['className', 'color', 'children']);
      var classes = classnames$1(className, color ? 'table-' + color : false);
      return React.createElement(
        'tr',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return Tr;
}(React.Component);
Tr.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node
};

var Th = function (_React$Component) {
  inherits(Th, _React$Component);
  function Th() {
    classCallCheck$1(this, Th);
    return possibleConstructorReturn(this, (Th.__proto__ || Object.getPrototypeOf(Th)).apply(this, arguments));
  }
  createClass$1(Th, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          color = _props.color,
          children = _props.children,
          attributes = objectWithoutProperties(_props, ['className', 'color', 'children']);
      var classes = classnames$1(className, color ? 'table-' + color : false);
      return React.createElement(
        'th',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return Th;
}(React.Component);
Th.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node
};

var Td = function (_React$Component) {
  inherits(Td, _React$Component);
  function Td() {
    classCallCheck$1(this, Td);
    return possibleConstructorReturn(this, (Td.__proto__ || Object.getPrototypeOf(Td)).apply(this, arguments));
  }
  createClass$1(Td, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          color = _props.color,
          children = _props.children,
          attributes = objectWithoutProperties(_props, ['className', 'color', 'children']);
      var classes = classnames$1(className, color ? 'table-' + color : false);
      return React.createElement(
        'td',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return Td;
}(React.Component);
Td.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.node
};

var defaultProps$104 = {
  theme: bsTheme,
  color: 'default',
  pill: false,
  tag: 'span'
};
var BadgeUnstyled = function (_React$Component) {
  inherits(BadgeUnstyled, _React$Component);
  function BadgeUnstyled() {
    classCallCheck$1(this, BadgeUnstyled);
    return possibleConstructorReturn(this, (BadgeUnstyled.__proto__ || Object.getPrototypeOf(BadgeUnstyled)).apply(this, arguments));
  }
  createClass$1(BadgeUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          color = _omit.color,
          pill = _omit.pill,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'color', 'pill', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames$1(className, 'badge', defineProperty({
          pill: pill
        }, 'badge-' + color, color)), cssModule)
      }, attributes));
    }
  }]);
  return BadgeUnstyled;
}(React.Component);
BadgeUnstyled.propTypes = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  theme: PropTypes.object
};
var Badge = styled(BadgeUnstyled).withConfig({
  displayName: 'Badge'
})(['', ''], function (props) {
  return '\n    \n    /* Base class */\n    /* Requires one of the contextual, color modifier classes for \'color\' and */\n    /* \'background-color\'. */\n    \n    &.badge {\n      display: inline-block;\n      padding: ' + props.theme['$badge-padding-y'] + ' ' + props.theme['$badge-padding-x'] + ';\n      font-size: ' + props.theme['$badge-font-size'] + ';\n      font-weight: ' + props.theme['$badge-font-weight'] + ';\n      line-height: 1;\n      color: ' + props.theme['$badge-color'] + ';\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: baseline;\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$border-radius']) + '\n    \n      /* Empty tags collapse automatically */\n      &:empty {\n        display: none;\n      }\n    }\n    \n    \n    /* scss-lint:disable QualifyingElement */\n    /* Add hover effects, but only for links */\n    &a {\n      ' + hoverFocus(props.theme['$enable-hover-media-query'], '\n        color: ' + props.theme['$badge-link-hover-color'] + ';\n        text-decoration: none;\n        cursor: pointer;\n      ') + '\n    }\n    /* scss-lint:enable QualifyingElement */\n    \n    /* Pill tags */\n    /* Make them extra rounded with a modifier to replace v3s badges. */\n    \n    &.badge-pill {\n      padding-right: ' + props.theme['$badge-pill-padding-x'] + ';\n      padding-left: ' + props.theme['$badge-pill-padding-x'] + ';\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$badge-pill-border-radius']) + '\n    }\n    \n    /* Colors */\n    /* Contextual variations (linked tags get darker on :hover). */\n    \n    &.badge-default {\n      ' + badgeVariant(props.theme['$enable-hover-media-query'], props.theme['$badge-default-bg']) + '\n    }     \n    \n    &.badge-primary {\n      ' + badgeVariant(props.theme['$enable-hover-media-query'], props.theme['$badge-primary-bg']) + '\n    }\n    \n    &.badge-success {\n      ' + badgeVariant(props.theme['$enable-hover-media-query'], props.theme['$badge-success-bg']) + '\n    }\n    \n    &.badge-info {\n      ' + badgeVariant(props.theme['$enable-hover-media-query'], props.theme['$badge-info-bg']) + '\n    }\n    \n    &.badge-warning {\n      ' + badgeVariant(props.theme['$enable-hover-media-query'], props.theme['$badge-warning-bg']) + '\n    }\n    \n    &.badge-danger {\n      ' + badgeVariant(props.theme['$enable-hover-media-query'], props.theme['$badge-danger-bg']) + '\n    }\n  ';
});
Badge.defaultProps = defaultProps$104;

var Textarea = styled.textarea.withConfig({
  displayName: 'Textarea'
})(['touch-action:manipulation;line-height:inherit;resize:vertical;']);

var DEFAULT_DELAYS = {
  shape: 0,
  hide: 250
};
var defaultProps$105 = {
  isOpen: false,
  placement: 'bottom',
  delay: DEFAULT_DELAYS,
  autohide: true,
  toggle: function toggle() {}
};
var defaultTetherConfig$1 = {
  classPrefix: 'bs-tether',
  classes: {
    element: false,
    enabled: 'show'
  },
  constraints: [{ to: 'scrollParent', attachment: 'together none' }, { to: 'window', attachment: 'together none' }]
};
var propTypes$7 = {
  placement: PropTypes.oneOf(tetherAttachements),
  target: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  isOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  tether: PropTypes.object,
  tetherRef: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  toggle: PropTypes.func,
  autohide: PropTypes.bool,
  delay: PropTypes.oneOfType([PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }), PropTypes.number])
};
var TooltipUnstyled = function (_React$Component) {
  inherits(TooltipUnstyled, _React$Component);
  function TooltipUnstyled() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck$1(this, TooltipUnstyled);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = TooltipUnstyled.__proto__ || Object.getPrototypeOf(TooltipUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focus: false
    }, _this.componentDidMount = function () {
      _this.target = _this.getTarget();
      _this.addTargetEvents();
    }, _this.componentWillUnmount = function () {
      _this.removeTargetEvents();
    }, _this.onMouseOverTooltip = function () {
      if (_this.hideTimeout) {
        _this.clearHideTimeout();
      }
      _this.showTimeout = setTimeout(_this.show, _this.getDelay('show'));
    }, _this.onMouseLeaveTooltip = function () {
      if (_this.showTimeout) {
        _this.clearShowTimeout();
      }
      _this.hideTimeout = setTimeout(_this.hide, _this.getDelay('hide'));
    }, _this.onMouseOverTooltipContent = function () {
      if (_this.props.autohide) {
        return;
      }
      if (_this.hideTimeout) {
        _this.clearHideTimeout();
      }
    }, _this.onMouseLeaveTooltipContent = function () {
      if (_this.props.autohide) {
        return;
      }
      if (_this.showTimeout) {
        _this.clearShowTimeout();
      }
      _this.hideTimeout = setTimeout(_this.hide, _this.getDelay('hide'));
    }, _this.getDelay = function (key) {
      var delay = _this.props.delay;
      if ((typeof delay === 'undefined' ? 'undefined' : _typeof(delay)) === 'object') {
        return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
      }
      return delay;
    }, _this.getTarget = function () {
      var target = _this.props.target;
      if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object') {
        return target;
      }
      return document.getElementById(target);
    }, _this.getTetherConfig = function () {
      var attachments = getTetherAttachments(_this.props.placement);
      return _extends({}, defaultTetherConfig$1, attachments, {
        target: _this.getTarget
      }, _this.props.tether);
    }, _this.show = function () {
      if (!_this.props.isOpen) {
        _this.clearShowTimeout();
        _this.toggle();
      }
    }, _this.hide = function () {
      if (_this.props.isOpen) {
        _this.clearHideTimeout();
        _this.toggle();
      }
    }, _this.clearShowTimeout = function () {
      clearTimeout(_this.showTimeout);
      _this.showTimeout = undefined;
    }, _this.clearHideTimeout = function () {
      clearTimeout(_this.hideTimeout);
      _this.hideTimeout = undefined;
    }, _this.handleDocumentClick = function (e) {
      if (e.target === _this.target || _this.target.contains(e.target)) {
        if (_this.hideTimeout) {
          _this.clearHideTimeout();
        }
        if (!_this.props.isOpen) {
          _this.toggle();
        }
      }
    }, _this.addTargetEvents = function () {
      if (_this.target) {
        _this.target.addEventListener('mouseover', _this.onMouseOverTooltip, true);
        _this.target.addEventListener('mouseout', _this.onMouseLeaveTooltip, true);
        document.addEventListener('click', _this.handleDocumentClick, true);
      }
    }, _this.removeTargetEvents = function () {
      if (_this.target) {
        _this.target.removeEventListener('mouseover', _this.onMouseOverTooltip, true);
        _this.target.removeEventListener('mouseout', _this.onMouseLeaveTooltip, true);
        document.removeEventListener('click', _this.handleDocumentClick, true);
      }
    }, _this.toggle = function (e) {
      if (_this.props.disabled) {
        return e && e.preventDefault();
      }
      return _this.props.toggle();
    }, _this.handleFocus = function () {
      _this.setState({
        focus: true
      });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  createClass$1(TooltipUnstyled, [{
    key: 'render',
    value: function render() {
      if (!this.props.isOpen) {
        return null;
      }
      var attributes = lodash_omit$1(this.props, Object.keys(propTypes$7));
      var classes = mapToCssModules(classnames$1('tooltip', this.props.className), this.props.cssModule);
      var tetherConfig = this.getTetherConfig();
      var optional = {};
      if (this.state.focus === true) {
        optional.onFocus = this.handleFocus;
      }
      return React.createElement(
        TetherContent,
        {
          className: classes,
          tether: tetherConfig,
          tetherRef: this.props.tetherRef,
          isOpen: this.props.isOpen,
          toggle: this.toggle
        },
        React.createElement('div', _extends({}, attributes, {
          className: 'tooltip-inner',
          onMouseOver: this.onMouseOverTooltipContent,
          onMouseLeave: this.onMouseLeaveTooltipContent,
          onFocus: this.handleFocus
        }, optional))
      );
    }
  }]);
  return TooltipUnstyled;
}(React.Component);
TooltipUnstyled.propTypes = propTypes$7;
var Tooltip = styled(TooltipUnstyled).withConfig({
  displayName: 'Tooltip'
})(['', ''], function (props) {
  return '\n    &.tooltip {\n      position: absolute;\n      z-index: ' + props.theme['$zindex-tooltip'] + ';\n      display: block;\n      font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;\n      font-style: normal;\n      font-weight: 400;\n      letter-spacing: normal;\n      line-break: auto;\n      line-height: 1.5;\n      text-align: left;\n      text-align: start;\n      text-decoration: none;\n      text-shadow: none;\n      text-transform: none;\n      white-space: normal;\n      word-break: normal;\n      word-spacing: normal;\n      font-size: .875rem;\n      word-wrap: break-word;\n      opacity: 0\n    }\n    \n    &.tooltip.show {\n      opacity: ' + props.theme['$tooltip-opacity'] + '\n    }\n    \n    &.tooltip.bs-tether-element-attached-bottom,\n    &.tooltip.tooltip-top {\n      padding: 5px 0;\n      margin-top: -3px\n    }\n    \n    &.tooltip.bs-tether-element-attached-bottom .tooltip-inner:before,\n    &.tooltip.tooltip-top .tooltip-inner:before {\n      bottom: 0;\n      left: 50%;\n      margin-left: -5px;\n      content: "";\n      border-width: 5px 5px 0;\n      border-top-color: #000\n    }\n    \n    &.tooltip.bs-tether-element-attached-left,\n    &.tooltip.tooltip-right {\n      padding: 0 5px;\n      margin-left: 3px\n    }\n    \n    &.tooltip.bs-tether-element-attached-left .tooltip-inner:before,\n    &.tooltip.tooltip-right .tooltip-inner:before {\n      top: 50%;\n      left: 0;\n      margin-top: -5px;\n      content: "";\n      border-width: 5px 5px 5px 0;\n      border-right-color: #000\n    }\n    \n    &.tooltip.bs-tether-element-attached-top,\n    &.tooltip.tooltip-bottom {\n      padding: 5px 0;\n      margin-top: 3px\n    }\n    \n    &.tooltip.bs-tether-element-attached-top .tooltip-inner:before,\n    &.tooltip.tooltip-bottom .tooltip-inner:before {\n      top: 0;\n      left: 50%;\n      margin-left: -5px;\n      content: "";\n      border-width: 0 5px 5px;\n      border-bottom-color: #000\n    }\n    \n    &.tooltip.bs-tether-element-attached-right,\n    &.tooltip.tooltip-left {\n      padding: 0 5px;\n      margin-left: -3px\n    }\n    \n    &.tooltip.bs-tether-element-attached-right .tooltip-inner:before,\n    &.tooltip.tooltip-left .tooltip-inner:before {\n      top: 50%;\n      right: 0;\n      margin-top: -5px;\n      content: "";\n      border-width: 5px 0 5px 5px;\n      border-left-color: #000\n    }\n    \n    & .tooltip-inner {\n      max-width: ' + props.theme['$tooltip-max-width'] + ';\n      padding: ' + props.theme['$tooltip-padding-y'] + ' ' + props.theme['$tooltip-padding-x'] + ';\n      color: ' + props.theme['$tooltip-color'] + ';\n      text-align: center;\n      background-color: ' + props.theme['$tooltip-bg'] + ';\n      border-radius: .25rem\n    }\n    \n    & .tooltip-inner:before {\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-color: transparent;\n      border-style: solid\n    }\n  ';
});
Tooltip.defaultProps = defaultProps$105;

function makeBlur(_ref) {
  var distance = _ref.distance;
  return {
    '0%': {
      filter: 'blur(0px)'
    },
    '100%': {
      filter: 'blur(' + distance + ')'
    }
  };
}
function makeOpacity(_ref2) {
  var amplification = _ref2.amplification;
  return {
    '0%': {
      filter: 'opacity(0%)'
    },
    '100%': {
      filter: 'opacity(' + amplification * 100 + '%)'
    }
  };
}
function makeContrast(_ref3) {
  var amplification = _ref3.amplification;
  return {
    '0%': {
      filter: 'contrast(0%)'
    },
    '100%': {
      filter: 'contrast(' + amplification * 100 + '%)'
    }
  };
}
function makeBrightness(_ref4) {
  var amplification = _ref4.amplification;
  return {
    '0%': {
      filter: 'brightness(0%)'
    },
    '100%': {
      filter: 'brightness(' + amplification * 100 + '%)'
    }
  };
}
function makeGrayscale(_ref5) {
  var amplification = _ref5.amplification;
  return {
    '0%': {
      filter: 'grayscale(0%)'
    },
    '100%': {
      filter: 'grayscale(' + amplification * 100 + '%)'
    }
  };
}
function makeHueRotate(_ref6) {
  var rotation = _ref6.rotation;
  return {
    '0%': {
      filter: 'hue-rotate(0deg)'
    },
    '100%': {
      filter: 'hue-rotate(' + rotation + ')'
    }
  };
}
function makeInvert(_ref7) {
  var amplification = _ref7.amplification;
  return {
    '0%': {
      filter: 'invert(0%)'
    },
    '100%': {
      filter: 'invert(' + amplification * 100 + '%)'
    }
  };
}
function makeSaturate(_ref8) {
  var amplification = _ref8.amplification;
  return {
    '0%': {
      filter: 'saturate(0%)'
    },
    '100%': {
      filter: 'saturate(' + amplification * 8 + '%)'
    }
  };
}
function makeSepia(_ref9) {
  var amplification = _ref9.amplification;
  return {
    '0%': {
      filter: 'sepia(0%)'
    },
    '100%': {
      filter: 'sepia(' + amplification * 100 + '%)'
    }
  };
}
function makeDropshadow(_ref10) {
  var amplification = _ref10.amplification;
  return {
    '0%': {
      filter: 'drop-shadow(0px 0px 0px #000)'
    },
    '100%': {
      filter: 'drop-shadow(' + amplification * 5 + 'px ' + amplification * 5 + 'px ' + amplification * 5 + 'px #000)'
    }
  };
}

var TYPE_ROTATE = 'TYPE_ROTATE';

var keyframeRefList = [];
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
function makeKeyframe(make, options) {
  var userKeyframes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var MAX_KEYFRAMES = 50;
  var merge = make(options);
  Object.keys(userKeyframes).forEach(function (key) {
    merge[key] = Object.assign({}, merge[key], userKeyframes[key]);
  });
  var hashCode = toHashCode(JSON.stringify(merge));
  var filtered = keyframeRefList.filter(function (keyframeRef) {
    return keyframeRef.hashCode === hashCode;
  });
  if (filtered.length) {
    return filtered[0].name;
  }
  var keyframeStr = toKeyframeString(merge);
  var name = keyframes(['', ''], keyframeStr);
  keyframeRefList.push({
    name: name,
    hashCode: hashCode
  });
  if (keyframeRefList.length > MAX_KEYFRAMES) {
    console.warn('You might have done a mistake because of current keyframes injection count. You currently have ' + keyframeRefList.length + ' keyframes in your page.');
  }
  return name;
}

function composeAnimation(makeAnimation) {
  var HOC = function (_React$Component) {
    inherits(HOC, _React$Component);
    function HOC() {
      var _ref;
      var _temp, _this, _ret;
      classCallCheck$1(this, HOC);
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = HOC.__proto__ || Object.getPrototypeOf(HOC)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        defaults: {},
        styles: {}
      }, _this.componentWillMount = function () {
        _this.updateDefaultsFromTheme(_this.updateAnimationStyles);
      }, _this.updateDefaultsFromTheme = function (cb) {
        var theme = _this.props.theme;
        _this.setState({
          defaults: {
            duration: theme['$motion-duration']['md'],
            timingFunction: theme['$motion-timing-function']['ease'],
            delay: theme['$motion-delay']['xs'],
            direction: theme['$motion-direction']['normal'],
            iterations: theme['$motion-iterations']['xs'],
            fillMode: theme['$motion-fill-mode']['none'],
            playState: theme['$motion-play-state']['running'],
            distance: theme['$motion-distance']['md'],
            rotation: theme['$motion-degree']['md'],
            perspective: theme['$motion-perspective']['xs'],
            backfaceVisibility: theme['$motion-backface-visibility']['hidden'],
            amplification: theme['$motion-amplification']['md']
          }
        }, cb);
      }, _this.updateAnimationStyles = function () {
        var props = _this.props;
        var defaults$$1 = _this.state.defaults;
        var duration = props.duration || defaults$$1.duration;
        var timingFunction = props.timingFunction || defaults$$1.timingFunction;
        var delay = props.delay || defaults$$1.delay;
        var direction = props.direction || defaults$$1.direction;
        var iterations = props.iterations || defaults$$1.iterations;
        var fillMode = props.fillMode || defaults$$1.fillMode;
        var playState = props.playState || defaults$$1.playState;
        var distance = props.distance || defaults$$1.distance;
        var rotation = props.degree || defaults$$1.rotation;
        var perspective = props.perspective || defaults$$1.perspective;
        var backfaceVisibility = props.backfaceVisibility || defaults$$1.backfaceVisibility;
        var amplification = props.amplification || defaults$$1.amplification;
        var keyframeName = makeKeyframe(_this.makeAnimation, { distance: distance, rotation: rotation, perspective: perspective, amplification: amplification }, props.keyframes);
        var styles = {};
        styles.animation = keyframeName + ' ' + duration + ' ' + timingFunction + ' ' + delay + ' ' + iterations + ' ' + direction + ' ' + fillMode + ' ' + playState;
        if (TYPE_ROTATE === _this.makeAnimation.type) {
          styles.backfaceVisibility = backfaceVisibility;
        }
        _this.setState({
          styles: styles
        });
      }, _this.makeAnimation = makeAnimation, _temp), possibleConstructorReturn(_this, _ret);
    }
    createClass$1(HOC, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(newProps) {
        if (toHashCode(newProps.theme) !== toHashCode(this.props.theme)) {
          this.updateDefaultsFromTheme(this.updateAnimationStyles);
        } else {
          this.updateAnimationStyles();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _omit = lodash_omit$1(this.props, ['theme', 'duration', 'timingFunction', 'delay', 'iterations', 'direction', 'fillMode', 'playState', 'keyframes', 'distance', 'degree', 'perspective', 'backfaceVisibility', 'amplification', 'rotation', 'innerRef']),
            className = _omit.className,
            children = _omit.children,
            rest = objectWithoutProperties(_omit, ['className', 'children']);
        return React.createElement(
          'span',
          _extends({
            style: this.state.styles,
            className: classnames$1('d-inline-block', className)
          }, rest),
          children
        );
      }
    }]);
    return HOC;
  }(React.Component);
  HOC.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    theme: PropTypes.object.isRequired,
    duration: PropTypes.string,
    timingFunction: PropTypes.string,
    delay: PropTypes.string,
    direction: PropTypes.string,
    iterations: PropTypes.string,
    fillMode: PropTypes.string,
    playState: PropTypes.string,
    keyframes: PropTypes.object,
    distance: PropTypes.string,
    degree: PropTypes.string,
    perspective: PropTypes.string,
    backfaceVisibility: PropTypes.string,
    amplification: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };
  return withTheme(HOC);
}

function composeAmplification(AbstractAnim, variableName) {
  var Amplification = function Amplification(props) {
    var amplification = props.amplification,
        theme = props.theme,
        rest = objectWithoutProperties(props, ['amplification', 'theme']);
    return React.createElement(AbstractAnim, _extends({
      amplification: amplification || theme[variableName]
    }, rest));
  };
  Amplification.propTypes = {
    theme: PropTypes.object,
    amplification: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  };
  return withTheme(Amplification);
}

function composeRotation(AbstractAnim, variableName) {
  var Rotation = function Rotation(props) {
    var rotation = props.rotation,
        theme = props.theme,
        rest = objectWithoutProperties(props, ['rotation', 'theme']);
    var degree = rotation || theme[variableName];
    if (!isNaN(rotation) || degree.indexOf('deg') === -1) {
      degree = parseInt(degree, 10).toString() + 'deg';
    }
    return React.createElement(AbstractAnim, _extends({
      rotation: degree
    }, rest));
  };
  Rotation.propTypes = {
    theme: PropTypes.object,
    rotation: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  };
  return withTheme(Rotation);
}

function composeDistance(AbstractAnim, variableName) {
  var Distance = function Distance(props) {
    var distance = props.distance,
        theme = props.theme,
        rest = objectWithoutProperties(props, ['distance', 'theme']);
    return React.createElement(AbstractAnim, _extends({
      distance: distance || theme[variableName]
    }, rest));
  };
  Distance.propTypes = {
    theme: PropTypes.object,
    distance: PropTypes.string
  };
  return withTheme(Distance);
}

var Blur = composeDistance(composeAnimation(makeBlur), '$motion-blur-distance');
var Contrast = composeAmplification(composeAnimation(makeContrast), '$motion-contrast-amplification');
var Brightness = composeAmplification(composeAnimation(makeBrightness), '$motion-brightness-amplification');
var Grayscale = composeAmplification(composeAnimation(makeGrayscale), '$motion-grayscale-amplification');
var HueRotate = composeRotation(composeAnimation(makeHueRotate), '$motion-hue-rotate-rotation');
var Invert = composeAmplification(composeAnimation(makeInvert), '$motion-invert-amplification');
var Opacity = composeAmplification(composeAnimation(makeOpacity), '$motion-opacity-amplification');
var Saturate = composeAmplification(composeAnimation(makeSaturate), '$motion-saturate-amplification');
var Sepia = composeAmplification(composeAnimation(makeSepia), '$motion-sepia-amplification');
var Dropshadow = composeAmplification(composeAnimation(makeDropshadow), '$motion-drop-shadow-amplification');

function makeBounce() {
  return {
    from: {
      'animation-timing-function': 'cubic-bezier(0.200, 0.620, 0.340, 1.000)'
    },
    '0%': {
      opacity: 0,
      transform: 'scale3d(.3, .3, .3)'
    },
    '20%': {
      transform: 'scale3d(1.1, 1.1, 1.1)'
    },
    '40%': {
      transform: 'scale3d(.9, .9, .9)'
    },
    '60%': {
      opacity: 1,
      transform: 'scale3d(1.1, 1.1, 1.1)'
    },
    '80%': {
      transform: 'scale3d(.97, .97, .97)'
    },
    to: {
      opacity: 1,
      transform: 'scale3d(1, 1, 1)'
    }
  };
}
function makeBounceDown(_ref) {
  var distance = _ref.distance;
  return {
    from: {
      'animation-timing-function': 'cubic-bezier(0.200, 0.620, 0.340, 1.000)'
    },
    '0%': {
      transform: 'translate3d(0, -' + distance + ', 0)'
    },
    '60%': {
      transform: 'translate3d(0, 25px, 0)'
    },
    '75%': {
      transform: 'translate3d(0, -15px, 0)'
    },
    '90%': {
      transform: 'translate3d(0, 5px, 0)'
    },
    to: {
      transform: 'translate3d(0, 0, 0)'
    }
  };
}
function makeBounceUp(_ref2) {
  var distance = _ref2.distance;
  return {
    from: {
      'animation-timing-function': 'cubic-bezier(0.200, 0.620, 0.340, 1.000)'
    },
    '0%': {
      transform: 'translate3d(0, ' + distance + ', 0)'
    },
    '60%': {
      transform: 'translate3d(0, -25px, 0)'
    },
    '75%': {
      transform: 'translate3d(0, 10px, 0)'
    },
    '90%': {
      transform: 'translate3d(0, -5px, 0)'
    },
    to: {
      transform: 'translate3d(0, 0, 0)'
    }
  };
}
function makeBounceLeft(_ref3) {
  var distance = _ref3.distance;
  return {
    'from, 60% 75% 90%, to': {
      'animation-timing-function': 'cubic-bezier(0.200, 0.620, 0.340, 1.000)'
    },
    '0%': {
      opacity: 0,
      transform: 'translate3d(-' + distance + ', 0, 0)'
    },
    '60%': {
      opacity: 1,
      transform: 'translate3d(25px, 0, 0)'
    },
    '75%': {
      transform: 'translate3d(-10px, 0, 0)'
    },
    '90%': {
      transform: 'translate3d(5px, 0, 0)'
    },
    to: {
      transform: 'none'
    }
  };
}
function makeBounceRight(_ref4) {
  var distance = _ref4.distance;
  return {
    'from, 60% 75% 90%, to': {
      'animation-timing-function': 'cubic-bezier(0.200, 0.620, 0.340, 1.000)'
    },
    '0%': {
      opacity: 0,
      transform: 'translate3d(' + distance + ', 0, 0)'
    },
    '60%': {
      opacity: 1,
      transform: 'translate3d(-25px, 0, 0)'
    },
    '75%': {
      transform: 'translate3d(10px, 0, 0)'
    },
    '90%': {
      transform: 'translate3d(-5px, 0, 0)'
    },
    to: {
      transform: 'none'
    }
  };
}

var Bounce = composeAmplification(composeAnimation(makeBounce), '$motion-bounce-amplification');
var BounceDown = composeDistance(composeAnimation(makeBounceDown), '$motion-bounce-down-distance');
var BounceUp = composeDistance(composeAnimation(makeBounceUp), '$motion-bounce-up-distance');
var BounceLeft = composeDistance(composeAnimation(makeBounceLeft), '$motion-bounce-left-distance');
var BounceRight = composeDistance(composeAnimation(makeBounceRight), '$motion-bounce-right-distance');

function makeFadeIn() {
  return {
    '0%': {
      opacity: 0
    },
    '100%': {
      opacity: 1
    }
  };
}
function makeFadeLeft(_ref) {
  var distance = _ref.distance;
  return {
    from: {
      opacity: 0,
      transform: 'translate3d(-' + distance + ', 0, 0)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  };
}
function makeFadeRight(_ref2) {
  var distance = _ref2.distance;
  return {
    from: {
      opacity: 0,
      transform: 'translate3d(' + distance + ', 0, 0)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  };
}
function makeFadeDown(_ref3) {
  var distance = _ref3.distance;
  return {
    from: {
      opacity: 0,
      transform: 'translate3d(0, -' + distance + ', 0)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  };
}
function makeFadeUp(_ref4) {
  var distance = _ref4.distance;
  return {
    from: {
      opacity: 0,
      transform: 'translate3d(0, ' + distance + ', 0)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  };
}

var FadeIn = composeAnimation(makeFadeIn);
var FadeInDown = composeDistance(composeAnimation(makeFadeDown), '$motion-fade-in-down-distance');
var FadeInUp = composeDistance(composeAnimation(makeFadeUp), '$motion-fade-in-up-distance');
var FadeInLeft = composeDistance(composeAnimation(makeFadeLeft), '$motion-fade-in-left-distance');
var FadeInRight = composeDistance(composeAnimation(makeFadeRight), '$motion-fade-in-right-distance');

function makeFlip(_ref) {
  var perspective = _ref.perspective;
  return {
    from: {
      transform: 'perspective(' + perspective + ') rotate3d(0, 1, 0, -360deg)',
      'animation-timing-function': 'ease-out'
    },
    '40%': {
      transform: 'perspective(' + perspective + ') translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
      'animation-timing-function': 'ease-out'
    },
    '50%': {
      transform: 'perspective(' + perspective + ') translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170px)',
      'animation-timing-function': 'ease-in'
    },
    '80%': {
      transform: 'perspective(' + perspective + ') scale3d(.90, .90, .90)',
      'animation-timing-function': 'ease-in'
    },
    to: {
      transform: 'perspective(' + perspective + ')',
      'animation-timing-function': 'ease-in'
    }
  };
}
makeFlip.type = TYPE_ROTATE;
function makeFlipX(_ref2) {
  var perspective = _ref2.perspective;
  return {
    from: {
      transform: 'perspective(' + perspective + ') rotate3d(1, 0, 0, 90deg)',
      'animation-timing-function': 'ease-in',
      opacity: 0
    },
    '40%': {
      transform: 'perspective(' + perspective + ') rotate3d(1, 0, 0, -20deg)',
      'animation-timing-function': 'ease-in'
    },
    '60%': {
      transform: 'perspective(' + perspective + ') rotate3d(1, 0, 0, 10deg)',
      opacity: 1
    },
    '80%': {
      transform: 'perspective(' + perspective + ') rotate3d(1, 0, 0, -5deg)'
    },
    to: {
      transform: 'perspective(' + perspective + ')'
    }
  };
}
makeFlipX.type = TYPE_ROTATE;
function makeFlipY(_ref3) {
  var perspective = _ref3.perspective;
  return {
    from: {
      transform: 'perspective(' + perspective + ') rotate3d(0, 1, 0, 90deg)',
      'animation-timing-function': 'ease-in',
      opacity: 0
    },
    '40%': {
      transform: 'perspective(' + perspective + ') rotate3d(0, 1, 0, -20deg)',
      'animation-timing-function': 'ease-in'
    },
    '60%': {
      transform: 'perspective(' + perspective + ') rotate3d(0, 1, 0, 10deg)',
      opacity: 1
    },
    '80%': {
      transform: 'perspective(' + perspective + ') rotate3d(0, 1, 0, -5deg)'
    },
    to: {
      transform: 'perspective(' + perspective + ')'
    }
  };
}
makeFlipY.type = TYPE_ROTATE;

function composePerspective(AbstractAnim, variableName) {
  var Perspective = function Perspective(props) {
    var perspective = props.perspective,
        theme = props.theme,
        rest = objectWithoutProperties(props, ['perspective', 'theme']);
    return React.createElement(AbstractAnim, _extends({
      perspective: perspective || theme[variableName]
    }, rest));
  };
  Perspective.propTypes = {
    theme: PropTypes.object,
    perspective: PropTypes.string
  };
  return withTheme(Perspective);
}

var Flip = composePerspective(composeAnimation(makeFlip), '$motion-flip-perspective');
var FlipX = composePerspective(composeAnimation(makeFlipX), '$motion-flip-perspective');
var FlipY = composePerspective(composeAnimation(makeFlipY), '$motion-flip-perspective');

function makeLightIn(_ref) {
  var distance = _ref.distance,
      rotation = _ref.rotation;
  return {
    from: {
      transform: 'translate3d(' + distance + ', 0, 0) skew(-' + rotation + ')',
      opacity: 0
    },
    '40%': {
      transform: 'skew(20deg)',
      opacity: 1
    },
    '80%': {
      transform: 'skew(-5deg)',
      opacity: 1
    },
    to: {
      transform: 'none',
      opacity: 1
    }
  };
}
function makeLightOut(_ref2) {
  var distance = _ref2.distance,
      rotation = _ref2.rotation;
  return {
    from: {
      opacity: 1
    },
    '40%': {
      transform: 'skew(20deg)',
      opacity: 1
    },
    '80%': {
      transform: 'skew(-5deg)',
      opacity: 1
    },
    to: {
      transform: 'translate3d(-' + distance + ', 0, 0) skew(' + rotation + ')',
      opacity: 0
    }
  };
}

var LightIn = composeRotation(composeDistance(composeAnimation(makeLightIn), '$motion-light-in-distance'), '$motion-light-in-rotation');
var LightOut = composeRotation(composeDistance(composeAnimation(makeLightOut), '$motion-light-out-distance'), '$motion-light-out-rotation');

function makeRotateIn(_ref) {
  var rotation = _ref.rotation;
  return {
    from: {
      'transform-origin': 'center',
      transform: 'rotate3d(0, 0, 1, -' + rotation + ')',
      opacity: 0
    },
    to: {
      transform: 'none',
      opacity: 1
    }
  };
}
makeRotateIn.type = TYPE_ROTATE;
function makeRotateLeft(_ref2) {
  var rotation = _ref2.rotation;
  return {
    from: {
      'transform-origin': 'left bottom',
      transform: 'rotate3d(0, 0, 1, -' + rotation + ')',
      opacity: 0
    },
    to: {
      'transform-origin': 'left bottom',
      transform: 'none',
      opacity: 1
    }
  };
}
makeRotateLeft.type = TYPE_ROTATE;
function makeRotateRight(_ref3) {
  var rotation = _ref3.rotation;
  return {
    from: {
      'transform-origin': 'right bottom',
      transform: 'rotate3d(0, 0, 1, ' + rotation + ')',
      opacity: 0
    },
    to: {
      'transform-origin': 'right bottom',
      transform: 'none',
      opacity: 1
    }
  };
}
makeRotateRight.type = TYPE_ROTATE;
function makeRotateUpLeft(_ref4) {
  var rotation = _ref4.rotation;
  return {
    from: {
      'transform-origin': 'left bottom',
      transform: 'rotate3d(0, 0, 1, ' + rotation + ')',
      opacity: 0
    },
    to: {
      'transform-origin': 'left bottom',
      transform: 'none',
      opacity: 1
    }
  };
}
makeRotateUpLeft.type = TYPE_ROTATE;
function makeRotateUpRight(_ref5) {
  var rotation = _ref5.rotation;
  return {
    from: {
      'transform-origin': 'right bottom',
      transform: 'rotate3d(0, 0, 1, -' + rotation + ')',
      opacity: 0
    },
    to: {
      'transform-origin': 'right bottom',
      transform: 'none',
      opacity: 1
    }
  };
}
makeRotateUpRight.type = TYPE_ROTATE;

var RotateIn = composeRotation(composeAnimation(makeRotateIn), '$motion-rotate-in-rotation');
var RotateLeft = composeRotation(composeAnimation(makeRotateLeft), '$motion-rotate-left-rotation');
var RotateRight = composeRotation(composeAnimation(makeRotateRight), '$motion-rotate-right-rotation');
var RotateUpLeft = composeRotation(composeAnimation(makeRotateUpRight), '$motion-rotate-up-left-rotation');
var RotateUpRight = composeRotation(composeAnimation(makeRotateUpLeft), '$motion-rotate-up-right-rotation');

function makeSlideDown(_ref) {
  var distance = _ref.distance;
  return {
    from: {
      transform: 'translate3d(0, -' + distance + ', 0)'
    },
    to: {
      transform: 'translate3d(0, 0, 0)'
    }
  };
}
function makeSlideUp(_ref2) {
  var distance = _ref2.distance;
  return {
    from: {
      transform: 'translate3d(0, ' + distance + ', 0)'
    },
    to: {
      transform: 'translate3d(0, 0, 0)'
    }
  };
}
function makeSlideLeft(_ref3) {
  var distance = _ref3.distance;
  return {
    from: {
      transform: 'translate3d(-' + distance + ', 0, 0)'
    },
    to: {
      transform: 'translate3d(0, 0, 0)'
    }
  };
}
function makeSlideRight(_ref4) {
  var distance = _ref4.distance;
  return {
    from: {
      transform: 'translate3d(' + distance + ', 0, 0)'
    },
    to: {
      transform: 'translate3d(0, 0, 0)'
    }
  };
}
function makeSlideRightLeft(_ref5) {
  var distance = _ref5.distance;
  return {
    from: {
      transform: 'translate3d(0, 0, 0)'
    },
    '50%': {
      transform: 'translate3d(' + distance + ', 0, 0)'
    },
    to: {
      transform: 'translate3d(0, 0, 0)'
    }
  };
}

var SlideUp = composeDistance(composeAnimation(makeSlideDown), '$motion-slide-up-distance');
var SlideDown = composeDistance(composeAnimation(makeSlideUp), '$motion-slide-down-distance');
var SlideRight = composeDistance(composeAnimation(makeSlideRight), '$motion-slide-right-distance');
var SlideLeft = composeDistance(composeAnimation(makeSlideLeft), '$motion-slide-left-distance');
var SlideRightLeft = composeDistance(composeAnimation(makeSlideRightLeft), '$motion-slide-right-left-distance');

function makeFlash() {
  return {
    from: {
      opacity: 1
    },
    '25%': {
      opacity: 0
    },
    '50%': {
      opacity: 1
    },
    '75%': {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  };
}
function makeRollIn(_ref) {
  var distance = _ref.distance,
      amplification = _ref.amplification;
  return {
    from: {
      transform: 'translate3d(-' + distance + ', 0, 0) rotate3d(0, 0, 1, -' + amplification * 120 + 'deg)',
      opacity: 0
    },
    to: {
      transform: 'none',
      opacity: 1
    }
  };
}
makeRollIn.type = TYPE_ROTATE;
function makeRollOut(_ref2) {
  var distance = _ref2.distance,
      amplification = _ref2.amplification;
  return {
    from: {
      opacity: 1
    },
    to: {
      transform: 'translate3d(' + distance + ', 0, 0) rotate3d(0, 0, 1, ' + amplification * 120 + 'deg)',
      opacity: 0
    }
  };
}
makeRollOut.type = TYPE_ROTATE;
function makeRubber(_ref3) {
  var amplification = _ref3.amplification;
  return {
    from: {
      transform: 'scale3d(1, 1, 1)'
    },
    '30%': {
      transform: 'scale3d(' + amplification * 1.25 + ', ' + amplification * 0.75 + ', ' + amplification * 1 + ')'
    },
    '40%': {
      transform: 'scale3d(' + amplification * 0.75 + ', ' + amplification * 1.25 + ', ' + amplification * 1 + ')'
    },
    '50%': {
      transform: 'scale3d(' + amplification * 1.15 + ', ' + amplification * 0.85 + ', ' + amplification * 1 + ')'
    },
    '65%': {
      transform: 'scale3d(' + amplification * 0.95 + ', ' + amplification * 1.05 + ', ' + amplification * 1 + ')'
    },
    '75%': {
      transform: 'scale3d(' + amplification * 1.05 + ', ' + amplification * 0.95 + ', ' + amplification * 1 + ')'
    },
    to: {
      transform: 'scale3d(1, 1, 1)'
    }
  };
}
function makeSwing(_ref4) {
  var amplification = _ref4.amplification;
  return {
    '20%': {
      transform: 'rotate3d(0, 0, 1, ' + amplification * 15 + 'deg)'
    },
    '40%': {
      transform: 'rotate3d(0, 0, 1, -' + amplification * 10 + 'deg)'
    },
    '60%': {
      transform: 'rotate3d(0, 0, 1, ' + amplification * 5 + 'deg)'
    },
    '80%': {
      transform: 'rotate3d(0, 0, 1, -' + amplification * 5 + 'deg)'
    },
    to: {
      transform: 'rotate3d(0, 0, 1, 0deg)'
    }
  };
}
makeSwing.type = TYPE_ROTATE;
function makeZoom(_ref5) {
  var amplification = _ref5.amplification;
  return {
    from: {
      opacity: 0,
      transform: 'scale3d(' + amplification * 0.4 + ', ' + amplification * 0.4 + ', ' + amplification * 0.4 + ')'
    },
    to: {
      opacity: 1
    }
  };
}
function makeHinge(_ref6) {
  var amplification = _ref6.amplification;
  return {
    from: {
      'transform-origin': 'top-left',
      'animation-timing-function': 'ease-in-out',
      opacity: 1
    },
    '20%, 40%': {
      'transform-origin': 'top-left',
      transform: 'rotate(0, 0, 1, ' + amplification * 80 + 'deg)',
      'animation-timing-function': 'ease-in-out',
      opacity: 1
    },
    '60%, 80%': {
      'transform-origin': 'top-left',
      transform: 'rotate(0, 0, 1, ' + amplification * 20 + 'deg)',
      'animation-timing-function': 'ease-in-out',
      opacity: 1
    },
    to: {
      transform: 'translate3d(0, ' + amplification * 700 + 'px, 0)',
      opacity: 0
    }
  };
}
function makePulse(_ref7) {
  var amplification = _ref7.amplification;
  return {
    from: {
      transform: 'scale3d(1, 1, 1)'
    },
    '50%': {
      transform: 'scale3d(' + amplification * 1.4 + ', ' + amplification * 1.4 + ', ' + amplification * 1.4 + ')'
    },
    to: {
      transform: 'scale3d(1, 1, 1)'
    }
  };
}
function makeExpandUp(_ref8) {
  var amplification = _ref8.amplification;
  return {
    '0%': {
      transform: 'translateY(100%) scale(' + amplification * 0.6 + ') scaleY(' + amplification * 0.5 + ')'
    },
    '60%': {
      transform: 'translateY(-' + amplification * 7 + '%) scaleY(' + amplification * 1.12 + ')'
    },
    '75%': {
      transform: 'translateY(' + amplification * 3 + '%)'
    },
    '100%': {
      transform: 'translateY(0%) scale(' + amplification * 1 + ') scaleY(' + amplification * 1 + ')'
    }
  };
}
function makeEntrance(_ref9) {
  var amplification = _ref9.amplification;
  return {
    '0%': {
      transform: 'scale(' + amplification * 0.3 + ') rotate(' + amplification * 6 + 'deg) translateX(-' + amplification * 30 + '%) translateY(' + amplification * 30 + '%)',
      opacity: 0.1
    },
    '30%': {
      transform: 'scale(' + amplification * 1.03 + ') rotate(-' + amplification * 2 + 'deg) translateX(' + amplification * 2 + '%) translateY(-' + amplification * 2 + '%)',
      opacity: 1
    },
    '45%': {
      transform: 'scale(' + amplification * 0.98 + ')',
      opacity: 1
    },
    '60%': {
      transform: 'scale(' + amplification * 1.01 + ')',
      opacity: 1
    },
    '75%': {
      transform: 'scale(' + amplification * 0.99 + ')',
      opacity: 1
    },
    '90%': {
      transform: 'scale(' + amplification * 1.01 + ')',
      opacity: 1
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 1
    }
  };
}
function makeHatch(_ref10) {
  var amplification = _ref10.amplification;
  return {
    '0%': {
      transform: 'scaleY(0.6)'
    },
    '20%': {
      transform: 'rotate(-' + amplification * 2 + 'deg) scaleY(' + amplification * 1.05 + ')'
    },
    '35%': {
      transform: 'rotate(' + amplification * 2 + 'deg) scaleY(' + amplification + ')'
    },
    '50%': {
      transform: 'rotate(-' + amplification + 'deg)'
    },
    '65%': {
      transform: 'rotate(' + amplification + 'deg)'
    },
    '80%': {
      transform: 'rotate(-' + amplification + 'deg)'
    },
    '100%': {
      transform: 'none'
    }
  };
}

var Flash = composeAnimation(makeFlash);
var RollOut = composeDistance(composeAmplification(composeAnimation(makeRollOut), '$motion-roll-out-amplification'), '$motion-roll-out-distance');
var RollIn = composeDistance(composeAmplification(composeAnimation(makeRollIn), '$motion-roll-in-amplification'), '$motion-roll-in-distance');
var Rubber = composeAmplification(composeAnimation(makeRubber), '$motion-rubber-amplification');
var Swing = composeAmplification(composeAnimation(makeSwing), '$motion-swing-amplification');
var Zoom = composeAmplification(composeAnimation(makeZoom), '$motion-zoom-amplification');
var Hinge = composeAmplification(composeAnimation(makeHinge), '$motion-hinge-amplification');
var Pulse = composeAmplification(composeAnimation(makePulse), '$motion-pulse-amplification');
var ExpandUp = composeAmplification(composeAnimation(makeExpandUp), '$motion-expand-up-amplification');
var Entrance = composeAmplification(composeAnimation(makeEntrance), '$motion-entrance-amplification');
var Hatch = composeAmplification(composeAnimation(makeHatch), '$motion-hatch-amplification');

var defaultProps$106 = {
  theme: bsTheme,
  tag: 'div'
};
var CardUnstyled = function (_React$Component) {
  inherits(CardUnstyled, _React$Component);
  function CardUnstyled() {
    classCallCheck$1(this, CardUnstyled);
    return possibleConstructorReturn(this, (CardUnstyled.__proto__ || Object.getPrototypeOf(CardUnstyled)).apply(this, arguments));
  }
  createClass$1(CardUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme', 'backgroundColor', 'borderColor', 'width']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          color = _omit.color,
          block = _omit.block,
          inverse = _omit.inverse,
          outline = _omit.outline,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'color', 'block', 'inverse', 'outline', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames$1(className, 'card', {
          inverse: inverse,
          block: block
        }, 'card' + (outline ? '-outline' : '') + '-' + color), cssModule)
      }, attributes));
    }
  }]);
  return CardUnstyled;
}(React.Component);
CardUnstyled.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.object,
  cssModule: PropTypes.object,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
  color: PropTypes.string,
  block: PropTypes.bool,
  outline: PropTypes.bool,
  width: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string
};
var Card = styled(CardUnstyled).withConfig({
  displayName: 'Card'
})(['', ''], function (props) {
  return '\n    \n    /*\n    Base styles\n    */\n    &.card {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      background-color: ' + props.theme['$card-bg'] + ';\n      border: ' + props.theme['$card-border-width'] + ' solid ' + props.theme['$card-border-color'] + ';\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$card-border-radius']) + '\n      \n      ' + ifThen(props.width, 'width: ' + props.width + ';') + '\n      ' + ifThen(props.backgroundColor, 'background-color: ' + props.backgroundColor + ';') + '\n      ' + ifThen(props.borderColor, 'border-color: ' + props.borderColor + ';') + '\n    }\n    \n    &.card-block,\n    & .card-block {\n      flex: 1 1 auto;\n      padding: ' + props.theme['$card-spacer-x'] + ';\n    }\n    \n    & .card-title {\n      margin-bottom: ' + props.theme['$card-spacer-y'] + ';\n    }\n    \n    & .card-subtitle {\n      margin-top: -' + props.theme['$card-margin-y-halved'] + ';\n      margin-bottom: 0;\n    }\n    \n    & .card-text:last-child {\n      margin-bottom: 0;\n    }\n   \n    & .card-link {\n      ' + hover('\n        text-decoration: none;\n      ') + '\n    \n      + .card-link {\n        margin-left: ' + props.theme['$card-spacer-x'] + ';\n      }\n    }\n    \n    &.card {\n      > .list-group:first-child {\n        .list-group-item:first-child {\n          ' + borderTopRadius(props.theme['$enable-rounded'], props.theme['$card-border-radius']) + '\n        }\n      }\n    \n      > .list-group:last-child {\n        .list-group-item:last-child {\n          ' + borderBottomRadius(props.theme['$enable-rounded'], props.theme['$card-border-radius']) + '\n        }\n      }\n    }\n    \n    \n    /*\n     Optional textual caps\n    */\n    \n    & .card-header {\n      padding: ' + props.theme['$card-spacer-y'] + ' ' + props.theme['$card-spacer-x'] + ';\n      margin-bottom: 0; /* Removes the default margin-bottom of <hN> */\n      background-color: ' + props.theme['$card-cap-bg'] + ';\n      border-bottom: ' + props.theme['$card-border-width'] + ' solid ' + props.theme['$card-border-color'] + ';\n    \n      &:first-child {\n        ' + borderRadius(props.theme['$enable-rounded'], props.theme['$card-border-radius-inner'], props.theme['$card-border-radius-inner'], '0', '0') + '\n      }\n    }\n    \n    & .card-footer {\n      padding: ' + props.theme['$card-spacer-y'] + ' ' + props.theme['$card-spacer-x'] + ';\n      background-color: ' + props.theme['$card-cap-bg'] + ';\n      border-top: ' + props.theme['$card-border-width'] + ' solid ' + props.theme['$card-border-color'] + ';\n    \n      &:last-child {\n        ' + borderRadius(props.theme['$enable-rounded'], '0', '0', props.theme['$card-border-radius-inner'], props.theme['$card-border-radius-inner']) + '\n      }\n    }\n    \n    \n    /*\n     Header navs\n    */\n    \n    & .card-header-tabs {\n      margin-right: -' + props.theme['$card-margin-x-halved'] + ';\n      margin-bottom: -' + props.theme['$card-spacer-y'] + ';\n      margin-left: -' + props.theme['$card-margin-x-halved'] + ';\n      border-bottom: 0;\n    }\n    \n    & .card-header-pills {\n      margin-right: -' + props.theme['$card-margin-x-halved'] + ';\n      margin-left: -' + props.theme['$card-margin-x-halved'] + ';\n    }\n    \n    \n    /*\n     Background variations\n    */\n    \n    &.card-primary {\n      ' + cardVariant(props.theme['$brand-primary'], props.theme['$brand-primary']) + '\n    }\n    &.card-success {\n      ' + cardVariant(props.theme['$brand-success'], props.theme['$brand-success']) + '\n    }\n    &.card-info {\n      ' + cardVariant(props.theme['$brand-info'], props.theme['$brand-info']) + '\n    }\n    &.card-warning {\n      ' + cardVariant(props.theme['$brand-warning'], props.theme['$brand-warning']) + '\n    }\n    &.card-danger {\n      ' + cardVariant(props.theme['$brand-danger'], props.theme['$brand-danger']) + '\n    }\n    \n    /* Remove all backgrounds */\n    &.card-outline-primary {\n      ' + cardOutlineVariant(props.theme['$btn-primary-bg']) + '\n    }\n    &.card-outline-secondary {\n      ' + cardOutlineVariant(props.theme['$btn-secondary-border']) + '\n    }\n    &.card-outline-info {\n      ' + cardOutlineVariant(props.theme['$btn-info-bg']) + '\n    }\n    &.card-outline-success {\n      ' + cardOutlineVariant(props.theme['$btn-success-bg']) + '\n    }\n    &.card-outline-warning {\n      ' + cardOutlineVariant(props.theme['$btn-warning-bg']) + '\n    }\n    &.card-outline-danger {\n      ' + cardOutlineVariant(props.theme['$btn-danger-bg']) + '\n    }\n    \n    /*\n     Inverse text within a card for use with dark backgrounds\n    */\n    \n    &.card-inverse {\n      ' + cardInverse(props.theme['$enable-hover-media-query'], props.theme['$card-link-hover-color']) + '\n    }\n    \n    /*\n     Blockquote\n    */\n    \n    & .card-blockquote {\n      padding: 0;\n      margin-bottom: 0;\n      border-left: 0;\n    }\n    \n    /* Card image */\n    & .card-img {\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$card-border-radius-inner']) + '\n    }\n    \n    & .card-img-overlay {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      padding: ' + props.theme['$card-img-overlay-padding'] + ';\n    }\n    \n    \n    \n    /* Card image caps */\n    & .card-img-top {\n      ' + borderTopRadius(props.theme['$enable-rounded'], props.theme['$card-border-radius-inner']) + '\n    }\n    \n    & .card-img-bottom {\n      ' + borderBottomRadius(props.theme['$enable-rounded'], props.theme['$card-border-radius-inner']) + '\n    }\n  ';
});
Card.defaultProps = defaultProps$106;

var defaultProps$107 = {
  theme: bsTheme,
  tag: 'div'
};
var CardColumnsUnstyled = function (_React$Component) {
  inherits(CardColumnsUnstyled, _React$Component);
  function CardColumnsUnstyled() {
    classCallCheck$1(this, CardColumnsUnstyled);
    return possibleConstructorReturn(this, (CardColumnsUnstyled.__proto__ || Object.getPrototypeOf(CardColumnsUnstyled)).apply(this, arguments));
  }
  createClass$1(CardColumnsUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames$1(className, 'card-columns'), cssModule)
      }, attributes));
    }
  }]);
  return CardColumnsUnstyled;
}(React.Component);
CardColumnsUnstyled.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  theme: PropTypes.object,
  cssModule: PropTypes.object
};
var CardColumns = styled(CardColumnsUnstyled).withConfig({
  displayName: 'CardColumns'
})(['', ''], function (props) {
  return '\n    ' + card(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$card-spacer-y'], props.theme['$card-spacer-x'], props.theme['$card-bg'], props.theme['$card-border-width'], props.theme['$card-border-color'], props.theme['$card-border-radius'], props.theme['$card-margin-y-halved'], props.theme['$card-margin-x-halved'], props.theme['$card-cap-bg'], props.theme['$card-border-radius-inner'], props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$btn-primary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-bg'], props.theme['$btn-success-bg'], props.theme['$btn-warning-bg'], props.theme['$btn-danger-bg'], props.theme['$card-link-hover-color'], props.theme['$card-img-overlay-padding'], props.theme['$card-inverse-bg-color'], props.theme['$card-inverse-border-color']) + '\n    ' + mediaBreakpointUp('sm', props.theme['$grid-breakpoints'], '\n        &.card-columns {\n          column-count: ' + props.theme['$card-columns-count'] + ';\n          column-gap: ' + props.theme['$card-columns-gap'] + ';\n      \n          .card {\n            display: inline-block; /* Don\'t let them vertically span multiple columns */\n            width: 100%; /* Don\'t let them exceed the column width */\n            margin-bottom: ' + props.theme['$card-columns-margin'] + ';\n          }\n        }\n      ') + '\n  ';
});
CardColumns.defaultProps = defaultProps$107;

var defaultProps$108 = {
  theme: bsTheme,
  tag: 'div'
};
var CardDeckUnstyled = function (_React$Component) {
  inherits(CardDeckUnstyled, _React$Component);
  function CardDeckUnstyled() {
    classCallCheck$1(this, CardDeckUnstyled);
    return possibleConstructorReturn(this, (CardDeckUnstyled.__proto__ || Object.getPrototypeOf(CardDeckUnstyled)).apply(this, arguments));
  }
  createClass$1(CardDeckUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames$1(className, 'card-deck'), cssModule)
      }, attributes));
    }
  }]);
  return CardDeckUnstyled;
}(React.Component);
CardDeckUnstyled.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  theme: PropTypes.object,
  cssModule: PropTypes.object
};
var CardDeck = styled(CardDeckUnstyled).withConfig({
  displayName: 'CardDeck'
})(['', ''], function (props) {
  return '\n    ' + card(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$card-spacer-y'], props.theme['$card-spacer-x'], props.theme['$card-bg'], props.theme['$card-border-width'], props.theme['$card-border-color'], props.theme['$card-border-radius'], props.theme['$card-margin-y-halved'], props.theme['$card-margin-x-halved'], props.theme['$card-cap-bg'], props.theme['$card-border-radius-inner'], props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$btn-primary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-bg'], props.theme['$btn-success-bg'], props.theme['$btn-warning-bg'], props.theme['$btn-danger-bg'], props.theme['$card-link-hover-color'], props.theme['$card-img-overlay-padding'], props.theme['$card-inverse-bg-color'], props.theme['$card-inverse-border-color']) + '\n    ' + mediaBreakpointUp('sm', props.theme['$grid-breakpoints'], '\n        &.card-deck {\n          display: flex;\n          flex-flow: row wrap;\n        \n          .card {\n            display: flex;\n            flex: 1 0 0;\n            flex-direction: column;  \n            &:not(:first-child) { margin-left: ' + props.theme['$card-deck-margin'] + '; }\n            &:not(:last-child) { margin-right: ' + props.theme['$card-deck-margin'] + '; }\n          }\n        }\n      ') + '\n  ';
});
CardDeck.defaultProps = defaultProps$108;

var defaultProps$109 = {
  theme: bsTheme,
  tag: 'div'
};
var CardGroupUnstyled = function (_React$Component) {
  inherits(CardGroupUnstyled, _React$Component);
  function CardGroupUnstyled() {
    classCallCheck$1(this, CardGroupUnstyled);
    return possibleConstructorReturn(this, (CardGroupUnstyled.__proto__ || Object.getPrototypeOf(CardGroupUnstyled)).apply(this, arguments));
  }
  createClass$1(CardGroupUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames$1(className, 'card-group'), cssModule)
      }, attributes));
    }
  }]);
  return CardGroupUnstyled;
}(React.Component);
CardGroupUnstyled.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  theme: PropTypes.object,
  cssModule: PropTypes.object
};
var CardGroup = styled(CardGroupUnstyled).withConfig({
  displayName: 'CardGroup'
})(['', ''], function (props) {
  return '\n    ' + card(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$card-spacer-y'], props.theme['$card-spacer-x'], props.theme['$card-bg'], props.theme['$card-border-width'], props.theme['$card-border-color'], props.theme['$card-border-radius'], props.theme['$card-margin-y-halved'], props.theme['$card-margin-x-halved'], props.theme['$card-cap-bg'], props.theme['$card-border-radius-inner'], props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$btn-primary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-bg'], props.theme['$btn-success-bg'], props.theme['$btn-warning-bg'], props.theme['$btn-danger-bg'], props.theme['$card-link-hover-color'], props.theme['$card-img-overlay-padding'], props.theme['$card-inverse-bg-color'], props.theme['$card-inverse-border-color']) + '\n    /*\n      Card group\n    */\n      ' + mediaBreakpointUp('sm', props.theme['$grid-breakpoints'], '\n          &.card-group {\n            display: flex;\n            flex-flow: row wrap;\n        \n            .card {\n              flex: 1 0 0;\n        \n              + .card {\n                margin-left: 0;\n                border-left: 0;\n              }\n        \n            ' + ifThen(props.theme['$enable-rounded'], '\n                &:first-child {\n                  ' + borderRightRadius(props.theme['$enable-rounded'], '0') + '\n                  .card-img-top {\n                    border-top-right-radius: 0;\n                  }\n                  \n                  .card-img-bottom {\n                    border-bottom-right-radius: 0;\n                  }\n                }\n              \n                &:last-child {\n                  ' + borderLeftRadius(props.theme['$enable-rounded'], '0') + '\n                  \n                  .card-img-top {\n                    border-top-left-radius: 0;\n                  }\n                  \n                  .card-img-bottom {\n                    border-bottom-left-radius: 0;\n                  }\n                }\n                \n                &:not(:first-child):not(:last-child) {\n                  border-radius: 0;\n        \n                  .card-img-top,\n                  .card-img-bottom {\n                    border-radius: 0;\n                  }\n                }\n              ') + '  \n          }\n        }\n      ') + '\n  ';
});
CardGroup.defaultProps = defaultProps$109;

var defaultProps$110 = {
  tag: 'div'
};
var CardBlock = function (_React$Component) {
  inherits(CardBlock, _React$Component);
  function CardBlock() {
    classCallCheck$1(this, CardBlock);
    return possibleConstructorReturn(this, (CardBlock.__proto__ || Object.getPrototypeOf(CardBlock)).apply(this, arguments));
  }
  createClass$1(CardBlock, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames$1(className, 'card-block'), cssModule)
      }, attributes));
    }
  }]);
  return CardBlock;
}(React.Component);
CardBlock.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};
CardBlock.defaultProps = defaultProps$110;

var defaultProps$111 = {
  tag: 'div'
};
var CardFooter = function (_React$Component) {
  inherits(CardFooter, _React$Component);
  function CardFooter() {
    classCallCheck$1(this, CardFooter);
    return possibleConstructorReturn(this, (CardFooter.__proto__ || Object.getPrototypeOf(CardFooter)).apply(this, arguments));
  }
  createClass$1(CardFooter, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames$1(className, 'card-footer'), cssModule)
      }, attributes));
    }
  }]);
  return CardFooter;
}(React.Component);
CardFooter.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};
CardFooter.defaultProps = defaultProps$111;

var defaultProps$112 = {
  tag: 'div'
};
var CardHeader = function (_React$Component) {
  inherits(CardHeader, _React$Component);
  function CardHeader() {
    classCallCheck$1(this, CardHeader);
    return possibleConstructorReturn(this, (CardHeader.__proto__ || Object.getPrototypeOf(CardHeader)).apply(this, arguments));
  }
  createClass$1(CardHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames$1(className, 'card-header'), cssModule)
      }, attributes));
    }
  }]);
  return CardHeader;
}(React.Component);
CardHeader.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};
CardHeader.defaultProps = defaultProps$112;

var defaultProps$113 = {
  tag: 'img'
};
var CardImg = function (_React$Component) {
  inherits(CardImg, _React$Component);
  function CardImg() {
    classCallCheck$1(this, CardImg);
    return possibleConstructorReturn(this, (CardImg.__proto__ || Object.getPrototypeOf(CardImg)).apply(this, arguments));
  }
  createClass$1(CardImg, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          top = _props.top,
          bottom = _props.bottom,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'tag', 'top', 'bottom']);
      var cardImgClassName = 'card-img';
      if (top) {
        cardImgClassName = 'card-img-top';
      } else if (bottom) {
        cardImgClassName = 'card-img-bottom';
      }
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames$1(className, cardImgClassName), cssModule)
      }, attributes));
    }
  }]);
  return CardImg;
}(React.Component);
CardImg.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  top: PropTypes.bool,
  bottom: PropTypes.bool
};
CardImg.defaultProps = defaultProps$113;

var defaultProps$114 = {
  tag: 'div'
};
var CardImgOverlay = function (_React$Component) {
  inherits(CardImgOverlay, _React$Component);
  function CardImgOverlay() {
    classCallCheck$1(this, CardImgOverlay);
    return possibleConstructorReturn(this, (CardImgOverlay.__proto__ || Object.getPrototypeOf(CardImgOverlay)).apply(this, arguments));
  }
  createClass$1(CardImgOverlay, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames$1(className, 'card-img-overlay'), cssModule)
      }, attributes));
    }
  }]);
  return CardImgOverlay;
}(React.Component);
CardImgOverlay.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};
CardImgOverlay.defaultProps = defaultProps$114;

var defaultProps$115 = {
  tag: A
};
var CardLink = function (_React$Component) {
  inherits(CardLink, _React$Component);
  function CardLink() {
    classCallCheck$1(this, CardLink);
    return possibleConstructorReturn(this, (CardLink.__proto__ || Object.getPrototypeOf(CardLink)).apply(this, arguments));
  }
  createClass$1(CardLink, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          getRef = _props.getRef,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'tag', 'getRef']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames$1(className, 'card-link'), cssModule),
        ref: getRef
      }, attributes));
    }
  }]);
  return CardLink;
}(React.Component);
CardLink.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
CardLink.defaultProps = defaultProps$115;

var defaultProps$116 = {
  tag: H6
};
var CardSubtitle = function (_React$Component) {
  inherits(CardSubtitle, _React$Component);
  function CardSubtitle() {
    classCallCheck$1(this, CardSubtitle);
    return possibleConstructorReturn(this, (CardSubtitle.__proto__ || Object.getPrototypeOf(CardSubtitle)).apply(this, arguments));
  }
  createClass$1(CardSubtitle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames$1(className, 'card-subtitle'), cssModule)
      }, attributes));
    }
  }]);
  return CardSubtitle;
}(React.Component);
CardSubtitle.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};
CardSubtitle.defaultProps = defaultProps$116;

var defaultProps$117 = {
  tag: 'p'
};
var CardText = function (_React$Component) {
  inherits(CardText, _React$Component);
  function CardText() {
    classCallCheck$1(this, CardText);
    return possibleConstructorReturn(this, (CardText.__proto__ || Object.getPrototypeOf(CardText)).apply(this, arguments));
  }
  createClass$1(CardText, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames$1(className, 'card-text'), cssModule)
      }, attributes));
    }
  }]);
  return CardText;
}(React.Component);
CardText.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};
CardText.defaultProps = defaultProps$117;

var defaultProps$118 = {
  tag: H4
};
var CardTitle = function (_React$Component) {
  inherits(CardTitle, _React$Component);
  function CardTitle() {
    classCallCheck$1(this, CardTitle);
    return possibleConstructorReturn(this, (CardTitle.__proto__ || Object.getPrototypeOf(CardTitle)).apply(this, arguments));
  }
  createClass$1(CardTitle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames$1(className, 'card-title'), cssModule)
      }, attributes));
    }
  }]);
  return CardTitle;
}(React.Component);
CardTitle.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};
CardTitle.defaultProps = defaultProps$118;

var defaultProps$119 = {
  tag: Blockquote
};
var CardBlockquote = function (_React$Component) {
  inherits(CardBlockquote, _React$Component);
  function CardBlockquote() {
    classCallCheck$1(this, CardBlockquote);
    return possibleConstructorReturn(this, (CardBlockquote.__proto__ || Object.getPrototypeOf(CardBlockquote)).apply(this, arguments));
  }
  createClass$1(CardBlockquote, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames$1(className, 'card-blockquote'), cssModule)
      }, attributes));
    }
  }]);
  return CardBlockquote;
}(React.Component);
CardBlockquote.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};
CardBlockquote.defaultProps = defaultProps$119;

var defaultProps$120 = {
  tag: Card
};
var Accordion = function (_React$Component) {
  inherits(Accordion, _React$Component);
  function Accordion() {
    classCallCheck$1(this, Accordion);
    return possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).apply(this, arguments));
  }
  createClass$1(Accordion, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          name = _props.name,
          children = _props.children,
          heading = _props.heading,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'name', 'children', 'heading', 'tag']);
      var _context$accordionGro = this.context.accordionGroup,
          activeAccordionName = _context$accordionGro.activeAccordionName,
          onClick = _context$accordionGro.onClick,
          HeadingComponent = _context$accordionGro['heading-component'];
      var optional = {
        isOpened: false
      };
      if (typeof onClick === 'function') {
        optional.onClick = function () {
          return onClick(name);
        };
      }
      if (activeAccordionName === name) {
        optional.isOpened = true;
      }
      var accordionHeading = HeadingComponent ? React.createElement(
        HeadingComponent,
        { onClick: optional.onClick },
        heading
      )
      : React.createElement(
        CardHeader,
        { onClick: optional.onClick },
        React.createElement(
          H5,
          null,
          heading
        )
      );
      return React.createElement(
        Tag,
        _extends({ className: className }, attributes),
        accordionHeading,
        React.createElement(
          Collapse,
          { isOpen: optional.isOpened },
          children
        )
      );
    }
  }]);
  return Accordion;
}(React.Component);
Accordion.propTypes = {
  className: PropTypes.string,
  heading: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
Accordion.contextTypes = {
  accordionGroup: PropTypes.object
};
Accordion.defaultProps = defaultProps$120;

var AccordionGroup = function (_React$Component) {
  inherits(AccordionGroup, _React$Component);
  function AccordionGroup() {
    classCallCheck$1(this, AccordionGroup);
    return possibleConstructorReturn(this, (AccordionGroup.__proto__ || Object.getPrototypeOf(AccordionGroup)).apply(this, arguments));
  }
  createClass$1(AccordionGroup, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _props = this.props,
          activeAccordionName = _props.activeAccordionName,
          onChange = _props.onChange,
          headingComponent = _props['heading-component'];
      return {
        accordionGroup: {
          activeAccordionName: activeAccordionName,
          onClick: onChange,
          'heading-component': headingComponent
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var attributes = objectWithoutProperties(this.props, []);
      var _omit = lodash_omit$1(attributes, ['activeAccordionName', 'onClick', 'headingComponent']),
          restAfterChildContext = objectWithoutProperties(_omit, []);
      return React.createElement('div', restAfterChildContext);
    }
  }]);
  return AccordionGroup;
}(React.Component);
AccordionGroup.propTypes = {
  activeAccordionName: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  onChange: PropTypes.func,
  'heading-component': PropTypes.bool
};
AccordionGroup.childContextTypes = {
  accordionGroup: PropTypes.object
};

var defaultProps$121 = {
  theme: bsTheme,
  tag: 'form'
};
var selectBorderWidth = index$1.math.multiply(bsTheme['$border-width'], 2);
var FormUnstyled = function (_React$Component) {
  inherits(FormUnstyled, _React$Component);
  function FormUnstyled() {
    classCallCheck$1(this, FormUnstyled);
    return possibleConstructorReturn(this, (FormUnstyled.__proto__ || Object.getPrototypeOf(FormUnstyled)).apply(this, arguments));
  }
  createClass$1(FormUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          inline = _omit.inline,
          Tag = _omit.tag,
          getRef = _omit.getRef,
          rest = objectWithoutProperties(_omit, ['className', 'cssModule', 'inline', 'tag', 'getRef']);
      var classes = mapToCssModules(classnames$1(className, inline ? 'form-inline' : false), cssModule);
      return React.createElement(Tag, _extends({ ref: getRef, className: classes }, rest));
    }
  }]);
  return FormUnstyled;
}(React.Component);
FormUnstyled.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.object,
  inline: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var Form = styled(FormUnstyled).withConfig({
  displayName: 'Form'
})(['  ', ''], function (props) {
  return '\n    /*\n     Textual form controls\n    */\n\n    ' + formControl(props.theme['$enable-rounded'], props.theme['$enable-transitions'], props.theme['$enable-shadows'], props.theme['$input-height'], props.theme['$input-padding-y'], props.theme['$input-padding-x'], props.theme['$font-size-base'], props.theme['$input-line-height'], props.theme['$input-color'], props.theme['$input-bg'], props.theme['$input-border-radius'], props.theme['$input-btn-border-width'], props.theme['$input-border-color'], props.theme['$input-transition'], props.theme['$input-box-shadow'], props.theme['$input-color-focus'], props.theme['$input-bg-focus'], props.theme['$input-border-focus'], props.theme['$input-box-shadow-focus'], props.theme['$input-color-placeholder'], props.theme['$input-bg-disabled'], props.theme['$cursor-disabled']) + '\n    \n    select.form-control {\n      &:not([size]):not([multiple]) {\n        height: calc(' + props.theme['$input-height'] + ' + ' + selectBorderWidth + ');\n      }\n\n      &:focus::-ms-value {\n        /* Suppress the nested default white text on blue background highlight given to\n         the selected option text when the (still closed) <select> receives focus\n         in IE and (under certain conditions) Edge, as it looks bad and cannot be made to\n         match the appearance of the native widget.\n         See https://github.com/twbs/bootstrap/issues/19398.\n         */\n        color: ' + props.theme['$input-color'] + ';\n        background-color: ' + props.theme['$input-bg'] + ';\n      }\n    }\n\n    /* Make file inputs better match text inputs by forcing them to new lines. */\n    & .form-control-file,\n    .form-control-range {\n      display: block;\n    }\n\n    /*\n     Labels\n    */\n\n    /* For use with horizontal and inline forms, when you need the label text to */\n    /* align with the form controls. */\n    & .col-form-label {\n      padding-top: calc(' + props.theme['$input-padding-y'] + ' - ' + props.theme['$input-btn-border-width'] + ' *2);\n      padding-bottom: calc(' + props.theme['$input-padding-y'] + ' - ' + props.theme['$input-btn-border-width'] + ' *2);\n      margin-bottom: 0; /* Override the \'<label>\' default */\n    }\n\n    & .col-form-label-lg {\n      padding-top: calc(' + props.theme['$input-padding-y-lg'] + ' - ' + props.theme['$input-btn-border-width'] + ' *2);\n      padding-bottom: calc(' + props.theme['$input-padding-y-lg'] + ' - ' + props.theme['$input-btn-border-width'] + ' *2);\n      font-size: ' + props.theme['$font-size-lg'] + ';\n    }\n\n    & .col-form-label-sm {\n      padding-top: calc(' + props.theme['$input-padding-y-sm'] + ' - ' + props.theme['$input-btn-border-width'] + ' *2);\n      padding-bottom: calc(' + props.theme['$input-padding-y-sm'] + ' - ' + props.theme['$input-btn-border-width'] + ' *2);\n      font-size: ' + props.theme['$font-size-sm'] + ';\n    }\n\n    /*\n     Legends\n    */\n\n    /* For use with horizontal and inline forms, when you need the legend text to */\n    /* be the same size as regular labels, and to align with the form controls. */\n    & .col-form-legend {\n      padding-top: ' + props.theme['$input-padding-y'] + ';\n      padding-bottom: ' + props.theme['$input-padding-y'] + ';\n      margin-bottom: 0;\n      font-size: ' + props.theme['$font-size-base'] + ';\n    }\n\n\n    /* Static form control text\n\n     Apply class to an element to make any string of text align with labels in a\n     horizontal form layout.\n    */\n\n    & .form-control-static {\n      padding-top: ' + props.theme['$input-padding-y'] + ';\n      padding-bottom: ' + props.theme['$input-padding-y'] + ';\n      margin-bottom: 0; /* match inputs if this class comes on inputs with default margins */\n      line-height: ' + props.theme['$input-line-height'] + ';\n      border: solid transparent;\n      border-width: ' + props.theme['$input-btn-border-width'] + ' 0;\n\n      &.form-control-sm,\n      &.form-control-lg {\n        padding-right: 0;\n        padding-left: 0;\n      }\n    }\n\n\n    /* Form control sizing\n\n     Build on .form-control with modifier classes to decrease or increase the\n     height and font-size of form controls.\n\n     The .form-group-* form-control variations are sadly duplicated to avoid the\n     issue documented in https://github.com/twbs/bootstrap/issues/15074.\n    */\n\n    & .form-control-sm {\n      padding: ' + props.theme['$input-padding-y-sm'] + ' ' + props.theme['$input-padding-x-sm'] + ';\n      font-size: ' + props.theme['$font-size-sm'] + ';\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$input-border-radius-sm']) + '\n    }\n\n    select.form-control-sm {\n      &:not([size]):not([multiple]) {\n        height: ' + props.theme['$input-height-sm'] + ';\n      }\n    }\n\n    & .form-control-lg {\n      padding: ' + props.theme['$input-padding-y-lg'] + ' ' + props.theme['$input-padding-x-lg'] + ';\n      font-size: ' + props.theme['$font-size-lg'] + ';\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$input-border-radius-lg']) + '\n    }\n\n    select.form-control-lg {\n      &:not([size]):not([multiple]) {\n        height: ' + props.theme['$input-height-lg'] + ';\n      }\n    }\n\n\n    /* Form groups Designed to help with the organization and spacing of vertical forms. For horizontal forms, use the predefined grid classes. */\n\n    &.form-group,\n     & .form-group {\n      margin-bottom: ' + props.theme['$form-group-margin-bottom'] + ';\n    }\n\n    & .form-text {\n      display: block;\n      margin-top: ' + props.theme['$form-text-margin-top'] + '\n    }\n\n\n    /* Checkboxes and radios Indent the labels to position radios/checkboxes as hanging controls. */\n\n    & .form-check {\n      position: relative;\n      display: block;\n      margin-bottom: ' + props.theme['$form-check-margin-bottom'] + ';\n\n      &.disabled {\n        .form-check-label {\n          color: ' + props.theme['$text-muted'] + ';\n          cursor: ' + props.theme['$cursor-disabled'] + ';\n        }\n      }\n    }\n\n    & .form-check-label {\n      padding-left: ' + props.theme['$form-check-input-gutter'] + ';\n      margin-bottom: 0; /* Override default <label> bottom margin */\n      cursor: pointer;\n    }\n\n    & .form-check-input {\n      position: absolute;\n      margin-top: ' + props.theme['$form-check-input-margin-y'] + ';\n      margin-left: -' + props.theme['$form-check-input-gutter'] + ';\n\n      &:only-child {\n        position: static;\n      }\n    }\n\n    /* Radios and checkboxes on same line */\n    & .form-check-inline {\n      display: inline-block;\n      .form-check-label {\n        vertical-align: middle;\n      }\n\n      + .form-check-inline {\n        margin-left: ' + props.theme['$form-check-inline-margin-x'] + ';\n      }\n\n      &.disabled {\n        color: ' + props.theme['$text-muted'] + ';\n        cursor: ' + props.theme['$cursor-disabled'] + ';\n      }\n    }\n\n\n    /* Form control feedback states Apply contextual and semantic states to individual form controls. */\n    & .form-control-feedback {\n      margin-top: ' + props.theme['$form-feedback-margin-top'] + ';\n    }\n\n    & .form-control-success,\n    & .form-control-warning,\n    & .form-control-danger {\n      padding-right: ' + index$1.math.multiply(props.theme['$input-padding-x'], 3) + ';\n      background-repeat: no-repeat;\n      background-position: center right ' + index$1.math.divide(props.theme['$input-height'], 4) + ';\n      background-size: ' + index$1.math.divide(props.theme['$input-height'], 2) + ' ' + index$1.math.divide(props.theme['$input-height'], 2) + ';\n    }\n\n    /* Form validation states */\n    & .has-success {\n      ' + formControlValidation(props.theme['$enable-shadows'], props.theme['$brand-success'], props.theme['$box-shadow']) + '\n\n      .form-control-success {\n        background-image: ' + props.theme['$form-icon-success'] + ';\n      }\n    }\n\n    & .has-warning {\n      ' + formControlValidation(props.theme['$enable-shadows'], props.theme['$brand-warning'], props.theme['$box-shadow']) + '\n\n      .form-control-warning {\n        background-image: ' + props.theme['$form-icon-warning'] + ';\n      }\n    }\n\n    & .has-danger {\n      ' + formControlValidation(props.theme['$enable-shadows'], props.theme['$brand-danger'], props.theme['$box-shadow']) + '\n\n      .form-control-danger {\n        background-image: ' + props.theme['$form-icon-danger'] + ';\n      }\n    }\n\n\n    /* Inline forms\n\n     Make forms appear inline(-block) by adding the .form-inline class. Inline\n     forms begin stacked on extra small (mobile) devices and then go inline when\n     viewports reach <768px.\n\n     Requires wrapping inputs and labels with .form-group for proper display of\n     default HTML form controls and our custom form controls (e.g., input groups).\n    */\n\n    &.form-inline {\n      display: flex;\n      flex-flow: row wrap;\n      align-items: center; /* Prevent shorter elements from growing to same height as others (e.g., small buttons growing to normal sized button height) */\n\n      & .form-check {\n         width: 100%;\n      }\n\n      /* Kick in the inline */\n      ' + mediaBreakpointUp('sm', props.theme['$grid-breakpoints'], '\n          label {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            margin-bottom: 0;\n          }\n          \n          /* Inline-block all the things for inline */\n          & .form-group {\n            display: flex;\n            flex: 0 0 auto;\n            flex-flow: row wrap;\n            margin-bottom: 0;\n          }\n      \n          /* Allow folks to *not* use .form-group */\n          & .form-control {\n            display: inline-block;\n            width: auto; /* Prevent labels from stacking above inputs in .form-group */\n            vertical-align: middle;\n          }\n      \n          /* Make static controls behave like regular ones */\n          & .form-control-static {\n            display: inline-block;\n          }\n      \n          & .input-group {\n            width: auto;\n          }\n          \n          & .form-control-label {\n             margin-bottom: 0;\n            vertical-align: middle;\n          }\n      \n          /* Remove default margin on radios/checkboxes that were used for stacking, and */\n          /*  then undo the floating of radios and checkboxes to match. */\n          & .form-check {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: auto;\n            margin-top: 0;\n            margin-bottom: 0;\n          }\n          & .form-check-label {\n            padding-left: 0;\n          }\n          & .form-check-input {\n            position: relative;\n            margin-left: 0;\n            margin-top: 0;\n            margin-right: ' + props.theme['$form-check-input-margin-x'] + ';\n          }\n          \n          /* Custom form controls */\n          & .custom-control {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            padding-left: 0;\n          }\n          \n          & .custom-control-indicator {\n            position: static;\n            display: inline-block;\n            margin-right: ' + props.theme['$form-check-input-margin-x'] + '; /* Flexbox alignment means we lose our HTML space here, so we compensate. */\n            vertical-align: text-bottom;\n          }\n          \n          /* Re-override the feedback icon. */\n          & .has-feedback .form-control-feedback {\n            top: 0;\n          }\n        ') + '\n    }\n    ' + customForms(props.theme['$enable-rounded'], props.theme['$enable-shadows'], props.theme['$custom-control-checked-indicator-box-shadow'], props.theme['$custom-control-active-indicator-box-shadow'], props.theme['$custom-control-indicator-box-shadow'], props.theme['$custom-checkbox-indeterminate-box-shadow'], props.theme['$custom-select-focus-box-shadow'], props.theme['$custom-file-focus-box-shadow'], props.theme['$custom-file-box-shadow'], props.theme['$custom-select-border-radius'], props.theme['$custom-file-border-radius'], props.theme['$custom-checkbox-radius'], props.theme['$input-bg'], props.theme['$custom-select-line-height'], props.theme['$line-height-base'], props.theme['$custom-control-gutter'], props.theme['$custom-control-spacer-x'], props.theme['$custom-control-checked-indicator-color'], props.theme['$custom-control-checked-indicator-bg'], props.theme['$custom-control-focus-indicator-box-shadow'], props.theme['$custom-control-active-indicator-color'], props.theme['$custom-control-active-indicator-bg'], props.theme['$custom-control-disabled-cursor'], props.theme['$custom-control-disabled-indicator-bg'], props.theme['$custom-control-disabled-description-color'], props.theme['$custom-control-indicator-size'], props.theme['$custom-control-indicator-bg'], props.theme['$custom-control-indicator-bg-size'], props.theme['$custom-checkbox-checked-icon'], props.theme['$custom-checkbox-indeterminate-bg'], props.theme['$custom-checkbox-indeterminate-icon'], props.theme['$custom-radio-radius'], props.theme['$custom-radio-checked-icon'], props.theme['$custom-control-spacer-y'], props.theme['$border-width'], props.theme['$input-height'], props.theme['$custom-select-padding-y'], props.theme['$custom-select-padding-x'], props.theme['$custom-select-indicator-padding'], props.theme['$custom-select-color'], props.theme['$custom-select-bg'], props.theme['$custom-select-indicator'], props.theme['$custom-select-bg-size'], props.theme['$custom-select-border-width'], props.theme['$custom-select-border-color'], props.theme['$custom-select-focus-border-color'], props.theme['$input-color'], props.theme['$custom-select-disabled-color'], props.theme['$cursor-disabled'], props.theme['$custom-select-disabled-bg'], props.theme['$custom-select-sm-font-size'], props.theme['$custom-file-width'], props.theme['$custom-file-height'], props.theme['$custom-file-padding-x'], props.theme['$custom-file-padding-y'], props.theme['$custom-file-line-height'], props.theme['$custom-file-color'], props.theme['$custom-file-bg'], props.theme['$custom-file-border-width'], props.theme['$custom-file-border-color'], props.theme['$custom-file-button-color'], props.theme['$custom-file-button-bg'], props.theme['$custom-file-text']) + '\n    & .row {\n      ' + makeRow(props.theme['$enable-grid-classes'], props.theme['$grid-gutter-widths']) + '\n    }\n  ';
});
Form.defaultProps = defaultProps$121;

var defaultProps$122 = {
  tag: 'div'
};
var FormGroup = function (_React$Component) {
  inherits(FormGroup, _React$Component);
  function FormGroup() {
    classCallCheck$1(this, FormGroup);
    return possibleConstructorReturn(this, (FormGroup.__proto__ || Object.getPrototypeOf(FormGroup)).apply(this, arguments));
  }
  createClass$1(FormGroup, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          row = _props.row,
          disabled = _props.disabled,
          inline = _props.inline,
          color = _props.color,
          check = _props.check,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'row', 'disabled', 'inline', 'color', 'check', 'tag']);
      var classes = mapToCssModules(classnames$1(className, color ? 'has-' + color : false, row ? 'row' : false, check ? 'form-check' : 'form-group', check && disabled ? 'disabled' : false, inline ? 'form-check-inline' : false), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return FormGroup;
}(React.Component);
FormGroup.propTypes = {
  inline: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  check: PropTypes.bool,
  color: PropTypes.string,
  row: PropTypes.bool
};
FormGroup.defaultProps = defaultProps$122;

var defaultProps$123 = {
  tag: 'small'
};
var FormText = function (_React$Component) {
  inherits(FormText, _React$Component);
  function FormText() {
    classCallCheck$1(this, FormText);
    return possibleConstructorReturn(this, (FormText.__proto__ || Object.getPrototypeOf(FormText)).apply(this, arguments));
  }
  createClass$1(FormText, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          inline = _props.inline,
          color = _props.color,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'inline', 'color', 'tag']);
      var classes = mapToCssModules(classnames$1(className, !inline ? 'form-text' : false, color ? 'text-' + color : false), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return FormText;
}(React.Component);
FormText.propTypes = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  tag: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
FormText.defaultProps = defaultProps$123;

var defaultProps$124 = {
  tag: 'div'
};
var FormFeedback = function (_React$Component) {
  inherits(FormFeedback, _React$Component);
  function FormFeedback() {
    classCallCheck$1(this, FormFeedback);
    return possibleConstructorReturn(this, (FormFeedback.__proto__ || Object.getPrototypeOf(FormFeedback)).apply(this, arguments));
  }
  createClass$1(FormFeedback, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'tag']);
      var classes = mapToCssModules(classnames$1(className, 'form-control-feedback'), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return FormFeedback;
}(React.Component);
FormFeedback.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
FormFeedback.defaultProps = defaultProps$124;

var FormCustom = function (_React$Component) {
  inherits(FormCustom, _React$Component);
  function FormCustom() {
    classCallCheck$1(this, FormCustom);
    return possibleConstructorReturn(this, (FormCustom.__proto__ || Object.getPrototypeOf(FormCustom)).apply(this, arguments));
  }
  createClass$1(FormCustom, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          radio = _props.radio,
          children = _props.children,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'radio', 'children']);
      var classes = mapToCssModules(classnames$1(className, 'custom-control', radio ? 'custom-radio' : 'custom-checkbox'), cssModule);
      var CustomInput = radio ? React.createElement(Input, { type: 'radio', id: radio.id, name: radio.name, className: 'custom-control-input' }) : React.createElement(Input, { type: 'checkbox', className: 'custom-control-input' });
      return React.createElement(
        Label,
        _extends({ className: classes }, attributes),
        CustomInput,
        React.createElement('span', { className: 'custom-control-indicator' }),
        React.createElement(
          'span',
          { className: 'custom-control-description' },
          children
        )
      );
    }
  }]);
  return FormCustom;
}(React.Component);
FormCustom.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  radio: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })
};

var defaultProps$125 = {
  tag: 'nav',
  role: 'navigation',
  toggleable: false,
  theme: bsTheme
};
var getToggleableClass = function getToggleableClass(toggleable) {
  if (toggleable === false) {
    return false;
  } else if (toggleable === true || toggleable === 'xs') {
    return 'navbar-toggleable';
  }
  return 'navbar-toggleable-' + toggleable;
};
var NavbarUnstyled = function (_React$Component) {
  inherits(NavbarUnstyled, _React$Component);
  function NavbarUnstyled() {
    classCallCheck$1(this, NavbarUnstyled);
    return possibleConstructorReturn(this, (NavbarUnstyled.__proto__ || Object.getPrototypeOf(NavbarUnstyled)).apply(this, arguments));
  }
  createClass$1(NavbarUnstyled, [{
    key: 'render',
    value: function render() {
      var _cn;
      var _omit = lodash_omit$1(this.props, ['theme']),
          toggleable = _omit.toggleable,
          className = _omit.className,
          cssModule = _omit.cssModule,
          light = _omit.light,
          inverse = _omit.inverse,
          full = _omit.full,
          fixed = _omit.fixed,
          sticky = _omit.sticky,
          color = _omit.color,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['toggleable', 'className', 'cssModule', 'light', 'inverse', 'full', 'fixed', 'sticky', 'color', 'tag']);
      var classes = mapToCssModules(classnames$1(className, 'navbar', getToggleableClass(toggleable), (_cn = {
        'navbar-light': light,
        'navbar-inverse': inverse
      }, defineProperty(_cn, 'bg-' + color, color), defineProperty(_cn, 'navbar-full', full), defineProperty(_cn, 'fixed-' + fixed, fixed), defineProperty(_cn, 'sticky-' + sticky, sticky), _cn)), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return NavbarUnstyled;
}(React.Component);
NavbarUnstyled.propTypes = {
  light: PropTypes.bool,
  inverse: PropTypes.bool,
  full: PropTypes.bool,
  fixed: PropTypes.string,
  sticky: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  toggleable: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  theme: PropTypes.object
};

var Navbar = styled(NavbarUnstyled).withConfig({
  displayName: 'Navbar'
})(['', ''], function (props) {
  return '\n    ' + navbar(props.theme['$grid-breakpoints'], props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$navbar-padding-y'], props.theme['$navbar-padding-x'], props.theme['$zindex-navbar'], props.theme['$zindex-navbar-fixed'], props.theme['$zindex-navbar-sticky'], props.theme['$navbar-brand-padding-y'], props.theme['$font-size-lg'], props.theme['$navbar-divider-padding-y'], props.theme['$navbar-toggler-padding-y'], props.theme['$navbar-toggler-padding-x'], props.theme['$navbar-toggler-font-size'], props.theme['$border-width'], props.theme['$navbar-toggler-border-radius'], props.theme['$navbar-light-active-color'], props.theme['$navbar-light-color'], props.theme['$navbar-light-hover-color'], props.theme['$navbar-light-toggler-border'], props.theme['$navbar-light-disabled-color'], props.theme['$navbar-light-toggler-bg'], props.theme['$navbar-inverse-active-color'], props.theme['$navbar-inverse-color'], props.theme['$navbar-inverse-hover-color'], props.theme['$navbar-inverse-toggler-border'], props.theme['$navbar-inverse-toggler-bg'], props.theme['$navbar-inverse-disabled-color']) + '\n    ' + nav(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$nav-link-padding'], props.theme['$nav-disabled-link-color'], props.theme['$cursor-disabled'], props.theme['$nav-tabs-border-width'], props.theme['$nav-tabs-border-color'], props.theme['$nav-tabs-border-radius'], props.theme['$nav-tabs-link-hover-border-color'], props.theme['$nav-tabs-active-link-hover-color'], props.theme['$nav-tabs-active-link-hover-bg'], props.theme['$nav-tabs-active-link-hover-border-color'], props.theme['$nav-pills-border-radius'], props.theme['$nav-pills-active-link-color'], props.theme['$nav-pills-active-link-bg']) + '\n  ';
});
Navbar.defaultProps = defaultProps$125;

var propTypes$8 = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var defaultProps$126 = {
  tag: 'a'
};
var NavbarBrand = function NavbarBrand(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  var classes = mapToCssModules(classnames$1(className, 'navbar-brand'), cssModule);
  return React.createElement(Tag, _extends({}, attributes, { className: classes }));
};
NavbarBrand.propTypes = propTypes$8;
NavbarBrand.defaultProps = defaultProps$126;

var propTypes$9 = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  right: PropTypes.bool,
  left: PropTypes.bool
};
var defaultProps$127 = {
  tag: 'button',
  type: 'button'
};
var navbarToggleIcon = React.createElement('span', { className: 'navbar-toggler-icon' });
var NavbarToggler = function NavbarToggler(props) {
  var className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      right = props.right,
      left = props.left,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'children', 'right', 'left', 'tag']);
  var classes = mapToCssModules(classnames$1(className, 'navbar-toggler', right && 'navbar-toggler-right', left && 'navbar-toggler-left'), cssModule);
  return React.createElement(
    Tag,
    _extends({}, attributes, { className: classes }),
    children || navbarToggleIcon
  );
};
NavbarToggler.propTypes = propTypes$9;
NavbarToggler.defaultProps = defaultProps$127;

var propTypes$10 = {
  children: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};
var defaultProps$128 = {
  tag: 'li'
};
var NavDropdown = function NavDropdown(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  var classes = mapToCssModules(classnames$1(className, 'nav-item'), cssModule);
  return React.createElement(Dropdown, _extends({}, attributes, { tag: Tag, className: classes }));
};
NavDropdown.propTypes = propTypes$10;
NavDropdown.defaultProps = defaultProps$128;

var defaultProps$129 = {
  theme: bsTheme
};
var ContainerUnstyled = function (_React$Component) {
  inherits(ContainerUnstyled, _React$Component);
  function ContainerUnstyled() {
    classCallCheck$1(this, ContainerUnstyled);
    return possibleConstructorReturn(this, (ContainerUnstyled.__proto__ || Object.getPrototypeOf(ContainerUnstyled)).apply(this, arguments));
  }
  createClass$1(ContainerUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          attributes = objectWithoutProperties(_omit, ['className']);
      return React.createElement('div', _extends({ className: classnames$1(className, 'container') }, attributes));
    }
  }]);
  return ContainerUnstyled;
}(React.Component);
ContainerUnstyled.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.object
};
var Container = styled(ContainerUnstyled).withConfig({
  displayName: 'Container'
})(['', ''], function (props) {
  return '\n    ' + makeContainer(props.theme['$enable-grid-classes'], props.theme['$grid-gutter-widths']) + '\n    \n    ' + makeContainerMaxWidths(props.theme['$enable-grid-classes'], props.theme['$container-max-widths'], props.theme['$grid-breakpoints']) + '\n  ';
});
Container.defaultProps = defaultProps$129;

var defaultProps$130 = {
  theme: bsTheme
};
var ContainerFluidUnstyled = function (_React$Component) {
  inherits(ContainerFluidUnstyled, _React$Component);
  function ContainerFluidUnstyled() {
    classCallCheck$1(this, ContainerFluidUnstyled);
    return possibleConstructorReturn(this, (ContainerFluidUnstyled.__proto__ || Object.getPrototypeOf(ContainerFluidUnstyled)).apply(this, arguments));
  }
  createClass$1(ContainerFluidUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          attributes = objectWithoutProperties(_omit, ['className']);
      return React.createElement('div', _extends({ className: classnames$1(className, 'container-fluid') }, attributes));
    }
  }]);
  return ContainerFluidUnstyled;
}(React.Component);
ContainerFluidUnstyled.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.object
};
var ContainerFluid = styled(ContainerFluidUnstyled).withConfig({
  displayName: 'ContainerFluid'
})(['', ''], function (props) {
  return '\n    ' + makeContainer(props.theme['$enable-grid-classes'], props.theme['$grid-gutter-widths']) + '\n  ';
});
ContainerFluid.defaultProps = defaultProps$130;

'use strict';

'use strict';
var ReactCurrentOwner = {
  current: null
};
var ReactCurrentOwner_1 = ReactCurrentOwner;

'use strict';
var validateFormat = function validateFormat(format) {};
{
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}
function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);
  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }
    error.framesToPop = 1;
    throw error;
  }
}
var invariant_1 = invariant;

'use strict';
function checkMask(value, bitmask) {
  return (value & bitmask) === bitmask;
}
var DOMPropertyInjection = {
  MUST_USE_PROPERTY: 0x1,
  HAS_BOOLEAN_VALUE: 0x4,
  HAS_NUMERIC_VALUE: 0x8,
  HAS_POSITIVE_NUMERIC_VALUE: 0x10 | 0x8,
  HAS_OVERLOADED_BOOLEAN_VALUE: 0x20,
  injectDOMPropertyConfig: function (domPropertyConfig) {
    var Injection = DOMPropertyInjection;
    var Properties = domPropertyConfig.Properties || {};
    var DOMAttributeNamespaces = domPropertyConfig.DOMAttributeNamespaces || {};
    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
    var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};
    if (domPropertyConfig.isCustomAttribute) {
      DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);
    }
    for (var propName in Properties) {
      !!DOMProperty.properties.hasOwnProperty(propName) ? invariant_1(false, 'injectDOMPropertyConfig(...): You\'re trying to inject DOM property \'%s\' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.', propName) : void 0;
      var lowerCased = propName.toLowerCase();
      var propConfig = Properties[propName];
      var propertyInfo = {
        attributeName: lowerCased,
        attributeNamespace: null,
        propertyName: propName,
        mutationMethod: null,
        mustUseProperty: checkMask(propConfig, Injection.MUST_USE_PROPERTY),
        hasBooleanValue: checkMask(propConfig, Injection.HAS_BOOLEAN_VALUE),
        hasNumericValue: checkMask(propConfig, Injection.HAS_NUMERIC_VALUE),
        hasPositiveNumericValue: checkMask(propConfig, Injection.HAS_POSITIVE_NUMERIC_VALUE),
        hasOverloadedBooleanValue: checkMask(propConfig, Injection.HAS_OVERLOADED_BOOLEAN_VALUE)
      };
      !(propertyInfo.hasBooleanValue + propertyInfo.hasNumericValue + propertyInfo.hasOverloadedBooleanValue <= 1) ? invariant_1(false, 'DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s', propName) : void 0;
      {
        DOMProperty.getPossibleStandardName[lowerCased] = propName;
      }
      if (DOMAttributeNames.hasOwnProperty(propName)) {
        var attributeName = DOMAttributeNames[propName];
        propertyInfo.attributeName = attributeName;
        {
          DOMProperty.getPossibleStandardName[attributeName] = propName;
        }
      }
      if (DOMAttributeNamespaces.hasOwnProperty(propName)) {
        propertyInfo.attributeNamespace = DOMAttributeNamespaces[propName];
      }
      if (DOMPropertyNames.hasOwnProperty(propName)) {
        propertyInfo.propertyName = DOMPropertyNames[propName];
      }
      if (DOMMutationMethods.hasOwnProperty(propName)) {
        propertyInfo.mutationMethod = DOMMutationMethods[propName];
      }
      DOMProperty.properties[propName] = propertyInfo;
    }
  }
};
var ATTRIBUTE_NAME_START_CHAR = ':A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
var DOMProperty = {
  ID_ATTRIBUTE_NAME: 'data-reactid',
  ROOT_ATTRIBUTE_NAME: 'data-reactroot',
  ATTRIBUTE_NAME_START_CHAR: ATTRIBUTE_NAME_START_CHAR,
  ATTRIBUTE_NAME_CHAR: ATTRIBUTE_NAME_START_CHAR + '\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040',
  properties: {},
  getPossibleStandardName: { autofocus: 'autoFocus' },
  _isCustomAttributeFunctions: [],
  isCustomAttribute: function (attributeName) {
    for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
      var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
      if (isCustomAttributeFn(attributeName)) {
        return true;
      }
    }
    return false;
  },
  injection: DOMPropertyInjection
};
var DOMProperty_1 = DOMProperty;

'use strict';
var ReactDOMComponentFlags = {
  hasCachedChildNodes: 1 << 0
};
var ReactDOMComponentFlags_1 = ReactDOMComponentFlags;

'use strict';
var ATTR_NAME = DOMProperty_1.ID_ATTRIBUTE_NAME;
var Flags = ReactDOMComponentFlags_1;
var internalInstanceKey = '__reactInternalInstance$' + Math.random().toString(36).slice(2);
function shouldPrecacheNode(node, nodeID) {
  return node.nodeType === 1 && node.getAttribute(ATTR_NAME) === String(nodeID) || node.nodeType === 8 && node.nodeValue === ' react-text: ' + nodeID + ' ' || node.nodeType === 8 && node.nodeValue === ' react-empty: ' + nodeID + ' ';
}
function getRenderedHostOrTextFromComponent(component) {
  var rendered;
  while (rendered = component._renderedComponent) {
    component = rendered;
  }
  return component;
}
function precacheNode(inst, node) {
  var hostInst = getRenderedHostOrTextFromComponent(inst);
  hostInst._hostNode = node;
  node[internalInstanceKey] = hostInst;
}
function uncacheNode(inst) {
  var node = inst._hostNode;
  if (node) {
    delete node[internalInstanceKey];
    inst._hostNode = null;
  }
}
function precacheChildNodes(inst, node) {
  if (inst._flags & Flags.hasCachedChildNodes) {
    return;
  }
  var children = inst._renderedChildren;
  var childNode = node.firstChild;
  outer: for (var name in children) {
    if (!children.hasOwnProperty(name)) {
      continue;
    }
    var childInst = children[name];
    var childID = getRenderedHostOrTextFromComponent(childInst)._domID;
    if (childID === 0) {
      continue;
    }
    for (; childNode !== null; childNode = childNode.nextSibling) {
      if (shouldPrecacheNode(childNode, childID)) {
        precacheNode(childInst, childNode);
        continue outer;
      }
    }
    invariant_1(false, 'Unable to find element with ID %s.', childID);
  }
  inst._flags |= Flags.hasCachedChildNodes;
}
function getClosestInstanceFromNode(node) {
  if (node[internalInstanceKey]) {
    return node[internalInstanceKey];
  }
  var parents = [];
  while (!node[internalInstanceKey]) {
    parents.push(node);
    if (node.parentNode) {
      node = node.parentNode;
    } else {
      return null;
    }
  }
  var closest;
  var inst;
  for (; node && (inst = node[internalInstanceKey]); node = parents.pop()) {
    closest = inst;
    if (parents.length) {
      precacheChildNodes(inst, node);
    }
  }
  return closest;
}
function getInstanceFromNode(node) {
  var inst = getClosestInstanceFromNode(node);
  if (inst != null && inst._hostNode === node) {
    return inst;
  } else {
    return null;
  }
}
function getNodeFromInstance(inst) {
  !(inst._hostNode !== undefined) ? invariant_1(false, 'getNodeFromInstance: Invalid argument.') : void 0;
  if (inst._hostNode) {
    return inst._hostNode;
  }
  var parents = [];
  while (!inst._hostNode) {
    parents.push(inst);
    !inst._hostParent ? invariant_1(false, 'React DOM tree root should always have a node reference.') : void 0;
    inst = inst._hostParent;
  }
  for (; parents.length; inst = parents.pop()) {
    precacheChildNodes(inst, inst._hostNode);
  }
  return inst._hostNode;
}
var ReactDOMComponentTree = {
  getClosestInstanceFromNode: getClosestInstanceFromNode,
  getInstanceFromNode: getInstanceFromNode,
  getNodeFromInstance: getNodeFromInstance,
  precacheChildNodes: precacheChildNodes,
  precacheNode: precacheNode,
  uncacheNode: uncacheNode
};
var ReactDOMComponentTree_1 = ReactDOMComponentTree;

'use strict';
var ReactInstanceMap = {
  remove: function (key) {
    key._reactInternalInstance = undefined;
  },
  get: function (key) {
    return key._reactInternalInstance;
  },
  has: function (key) {
    return key._reactInternalInstance !== undefined;
  },
  set: function (key, value) {
    key._reactInternalInstance = value;
  }
};
var ReactInstanceMap_1 = ReactInstanceMap;

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
'use strict';
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}
	return Object(val);
}
function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}
		var test1 = new String('abc');
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}
		return true;
	} catch (err) {
		return false;
	}
}
var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;
	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);
		for (var key in from) {
			if (hasOwnProperty$1.call(from, key)) {
				to[key] = from[key];
			}
		}
		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}
	return to;
};

'use strict';

"use strict";
function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}
var emptyFunction = function emptyFunction() {};
emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};
var emptyFunction_1 = emptyFunction;

'use strict';
var warning = emptyFunction_1;
{
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      throw new Error(message);
    } catch (x) {}
  };
  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (format.indexOf('Failed Composite propType: ') === 0) {
      return;
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }
      printWarning.apply(undefined, [format].concat(args));
    }
  };
}
var warning_1 = warning;

'use strict';
function warnNoop(publicInstance, callerName) {
  {
    var constructor = publicInstance.constructor;
    warning_1(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass');
  }
}
var ReactNoopUpdateQueue = {
  isMounted: function (publicInstance) {
    return false;
  },
  enqueueCallback: function (publicInstance, callback) {},
  enqueueForceUpdate: function (publicInstance) {
    warnNoop(publicInstance, 'forceUpdate');
  },
  enqueueReplaceState: function (publicInstance, completeState) {
    warnNoop(publicInstance, 'replaceState');
  },
  enqueueSetState: function (publicInstance, partialState) {
    warnNoop(publicInstance, 'setState');
  }
};
var ReactNoopUpdateQueue_1 = ReactNoopUpdateQueue;

'use strict';
var canDefineProperty$1 = false;
{
  try {
    Object.defineProperty({}, 'x', { get: function () {} });
    canDefineProperty$1 = true;
  } catch (x) {
  }
}
var canDefineProperty_1 = canDefineProperty$1;

'use strict';
var emptyObject = {};
{
  Object.freeze(emptyObject);
}
var emptyObject_1 = emptyObject;

'use strict';
var lowPriorityWarning$1 = function () {};
{
  var printWarning$1 = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      throw new Error(message);
    } catch (x) {}
  };
  lowPriorityWarning$1 = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }
      printWarning$1.apply(undefined, [format].concat(args));
    }
  };
}
var lowPriorityWarning_1 = lowPriorityWarning$1;

'use strict';
function ReactComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject_1;
  this.updater = updater || ReactNoopUpdateQueue_1;
}
ReactComponent.prototype.isReactComponent = {};
ReactComponent.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? invariant_1(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
  this.updater.enqueueSetState(this, partialState);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'setState');
  }
};
ReactComponent.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'forceUpdate');
  }
};
{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    if (canDefineProperty_1) {
      Object.defineProperty(ReactComponent.prototype, methodName, {
        get: function () {
          lowPriorityWarning_1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
          return undefined;
        }
      });
    }
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}
function ReactPureComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject_1;
  this.updater = updater || ReactNoopUpdateQueue_1;
}
function ComponentDummy() {}
ComponentDummy.prototype = ReactComponent.prototype;
ReactPureComponent.prototype = new ComponentDummy();
ReactPureComponent.prototype.constructor = ReactPureComponent;
objectAssign(ReactPureComponent.prototype, ReactComponent.prototype);
ReactPureComponent.prototype.isPureReactComponent = true;
var ReactBaseClasses = {
  Component: ReactComponent,
  PureComponent: ReactPureComponent
};

'use strict';
var oneArgumentPooler = function (copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};
var twoArgumentPooler$1 = function (a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};
var threeArgumentPooler = function (a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};
var fourArgumentPooler$1 = function (a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};
var standardReleaser = function (instance) {
  var Klass = this;
  !(instance instanceof Klass) ? invariant_1(false, 'Trying to release an instance into a pool of a different type.') : void 0;
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};
var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;
var addPoolingTo = function (CopyConstructor, pooler) {
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};
var PooledClass = {
  addPoolingTo: addPoolingTo,
  oneArgumentPooler: oneArgumentPooler,
  twoArgumentPooler: twoArgumentPooler$1,
  threeArgumentPooler: threeArgumentPooler,
  fourArgumentPooler: fourArgumentPooler$1
};
var PooledClass_1 = PooledClass;

'use strict';
var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;
var ReactElementSymbol = REACT_ELEMENT_TYPE;

'use strict';
var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
function hasValidRef(config) {
  {
    if (hasOwnProperty$2.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}
function hasValidKey(config) {
  {
    if (hasOwnProperty$2.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}
function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      warning_1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}
function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      warning_1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    $$typeof: ReactElementSymbol,
    type: type,
    key: key,
    ref: ref,
    props: props,
    _owner: owner
  };
  {
    element._store = {};
    if (canDefineProperty_1) {
      Object.defineProperty(element._store, 'validated', {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      });
      Object.defineProperty(element, '_self', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: self
      });
      Object.defineProperty(element, '_source', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: source
      });
    } else {
      element._store.validated = false;
      element._self = self;
      element._source = source;
    }
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }
  return element;
};
ReactElement.createElement = function (type, config, children) {
  var propName;
  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;
  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }
    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    for (propName in config) {
      if (hasOwnProperty$2.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== ReactElementSymbol) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner_1.current, props);
};
ReactElement.createFactory = function (type) {
  var factory = ReactElement.createElement.bind(null, type);
  factory.type = type;
  return factory;
};
ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
};
ReactElement.cloneElement = function (element, config, children) {
  var propName;
  var props = objectAssign({}, element.props);
  var key = element.key;
  var ref = element.ref;
  var self = element._self;
  var source = element._source;
  var owner = element._owner;
  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
      owner = ReactCurrentOwner_1.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }
    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty$2.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }
  return ReactElement(element.type, key, ref, self, source, owner, props);
};
ReactElement.isValidElement = function (object) {
  return typeof object === 'object' && object !== null && object.$$typeof === ReactElementSymbol;
};
var ReactElement_1 = ReactElement;

'use strict';
var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}
var getIteratorFn_1 = getIteratorFn;

'use strict';
function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
function unescape(key) {
  var unescapeRegex = /(=0|=2)/g;
  var unescaperLookup = {
    '=0': '=',
    '=2': ':'
  };
  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);
  return ('' + keySubstring).replace(unescapeRegex, function (match) {
    return unescaperLookup[match];
  });
}
var KeyEscapeUtils = {
  escape: escape,
  unescape: unescape
};
var KeyEscapeUtils_1 = KeyEscapeUtils;

'use strict';
var SEPARATOR = '.';
var SUBSEPARATOR = ':';
var didWarnAboutMaps = false;
function getComponentKey(component, index) {
  if (component && typeof component === 'object' && component.key != null) {
    return KeyEscapeUtils_1.escape(component.key);
  }
  return index.toString(36);
}
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;
  if (type === 'undefined' || type === 'boolean') {
    children = null;
  }
  if (children === null || type === 'string' || type === 'number' ||
  type === 'object' && children.$$typeof === ReactElementSymbol) {
    callback(traverseContext, children,
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }
  var child;
  var nextName;
  var subtreeCount = 0;
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn_1(children);
    if (iteratorFn) {
      var iterator = iteratorFn.call(children);
      var step;
      if (iteratorFn !== children.entries) {
        var ii = 0;
        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = nextNamePrefix + getComponentKey(child, ii++);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        {
          var mapsAsChildrenAddendum = '';
          if (ReactCurrentOwner_1.current) {
            var mapsAsChildrenOwnerName = ReactCurrentOwner_1.current.getName();
            if (mapsAsChildrenOwnerName) {
              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
            }
          }
          warning_1(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum);
          didWarnAboutMaps = true;
        }
        while (!(step = iterator.next()).done) {
          var entry = step.value;
          if (entry) {
            child = entry[1];
            nextName = nextNamePrefix + KeyEscapeUtils_1.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        }
      }
    } else if (type === 'object') {
      var addendum = '';
      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
        if (children._isReactElement) {
          addendum = " It looks like you're using an element created by a different " + 'version of React. Make sure to use only one copy of React.';
        }
        if (ReactCurrentOwner_1.current) {
          var name = ReactCurrentOwner_1.current.getName();
          if (name) {
            addendum += ' Check the render method of `' + name + '`.';
          }
        }
      }
      var childrenString = String(children);
      invariant_1(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }
  return subtreeCount;
}
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }
  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
var traverseAllChildren_1 = traverseAllChildren;

'use strict';
var twoArgumentPooler = PooledClass_1.twoArgumentPooler;
var fourArgumentPooler = PooledClass_1.fourArgumentPooler;
var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}
function ForEachBookKeeping(forEachFunction, forEachContext) {
  this.func = forEachFunction;
  this.context = forEachContext;
  this.count = 0;
}
ForEachBookKeeping.prototype.destructor = function () {
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass_1.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);
function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
  traverseAllChildren_1(children, forEachSingleChild, traverseContext);
  ForEachBookKeeping.release(traverseContext);
}
function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
  this.result = mapResult;
  this.keyPrefix = keyPrefix;
  this.func = mapFunction;
  this.context = mapContext;
  this.count = 0;
}
MapBookKeeping.prototype.destructor = function () {
  this.result = null;
  this.keyPrefix = null;
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass_1.addPoolingTo(MapBookKeeping, fourArgumentPooler);
function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction_1.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (ReactElement_1.isValidElement(mappedChild)) {
      mappedChild = ReactElement_1.cloneAndReplaceKey(mappedChild,
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}
function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
  traverseAllChildren_1(children, mapSingleChildIntoContext, traverseContext);
  MapBookKeeping.release(traverseContext);
}
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
function forEachSingleChildDummy(traverseContext, child, name) {
  return null;
}
function countChildren(children, context) {
  return traverseAllChildren_1(children, forEachSingleChildDummy, null);
}
function toArray$1(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction_1.thatReturnsArgument);
  return result;
}
var ReactChildren = {
  forEach: forEachChildren,
  map: mapChildren,
  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
  count: countChildren,
  toArray: toArray$1
};
var ReactChildren_1 = ReactChildren;

'use strict';
function isNative(fn) {
  var funcToString = Function.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var reIsNative = RegExp('^' + funcToString
  .call(hasOwnProperty
  ).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&'
  ).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  try {
    var source = funcToString.call(fn);
    return reIsNative.test(source);
  } catch (err) {
    return false;
  }
}
var canUseCollections =
typeof Array.from === 'function' &&
typeof Map === 'function' && isNative(Map) &&
Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
typeof Set === 'function' && isNative(Set) &&
Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);
var setItem;
var getItem;
var removeItem;
var getItemIDs;
var addRoot;
var removeRoot;
var getRootIDs;
if (canUseCollections) {
  var itemMap = new Map();
  var rootIDSet = new Set();
  setItem = function (id, item) {
    itemMap.set(id, item);
  };
  getItem = function (id) {
    return itemMap.get(id);
  };
  removeItem = function (id) {
    itemMap['delete'](id);
  };
  getItemIDs = function () {
    return Array.from(itemMap.keys());
  };
  addRoot = function (id) {
    rootIDSet.add(id);
  };
  removeRoot = function (id) {
    rootIDSet['delete'](id);
  };
  getRootIDs = function () {
    return Array.from(rootIDSet.keys());
  };
} else {
  var itemByKey = {};
  var rootByKey = {};
  var getKeyFromID = function (id) {
    return '.' + id;
  };
  var getIDFromKey = function (key) {
    return parseInt(key.substr(1), 10);
  };
  setItem = function (id, item) {
    var key = getKeyFromID(id);
    itemByKey[key] = item;
  };
  getItem = function (id) {
    var key = getKeyFromID(id);
    return itemByKey[key];
  };
  removeItem = function (id) {
    var key = getKeyFromID(id);
    delete itemByKey[key];
  };
  getItemIDs = function () {
    return Object.keys(itemByKey).map(getIDFromKey);
  };
  addRoot = function (id) {
    var key = getKeyFromID(id);
    rootByKey[key] = true;
  };
  removeRoot = function (id) {
    var key = getKeyFromID(id);
    delete rootByKey[key];
  };
  getRootIDs = function () {
    return Object.keys(rootByKey).map(getIDFromKey);
  };
}
var unmountedIDs = [];
function purgeDeep(id) {
  var item = getItem(id);
  if (item) {
    var childIDs = item.childIDs;
    removeItem(id);
    childIDs.forEach(purgeDeep);
  }
}
function describeComponentFrame(name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
}
function getDisplayName(element) {
  if (element == null) {
    return '#empty';
  } else if (typeof element === 'string' || typeof element === 'number') {
    return '#text';
  } else if (typeof element.type === 'string') {
    return element.type;
  } else {
    return element.type.displayName || element.type.name || 'Unknown';
  }
}
function describeID(id) {
  var name = ReactComponentTreeHook.getDisplayName(id);
  var element = ReactComponentTreeHook.getElement(id);
  var ownerID = ReactComponentTreeHook.getOwnerID(id);
  var ownerName;
  if (ownerID) {
    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
  }
  warning_1(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id);
  return describeComponentFrame(name, element && element._source, ownerName);
}
var ReactComponentTreeHook = {
  onSetChildren: function (id, nextChildIDs) {
    var item = getItem(id);
    !item ? invariant_1(false, 'Item must have been set') : void 0;
    item.childIDs = nextChildIDs;
    for (var i = 0; i < nextChildIDs.length; i++) {
      var nextChildID = nextChildIDs[i];
      var nextChild = getItem(nextChildID);
      !nextChild ? invariant_1(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : void 0;
      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? invariant_1(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : void 0;
      !nextChild.isMounted ? invariant_1(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : void 0;
      if (nextChild.parentID == null) {
        nextChild.parentID = id;
      }
      !(nextChild.parentID === id) ? invariant_1(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : void 0;
    }
  },
  onBeforeMountComponent: function (id, element, parentID) {
    var item = {
      element: element,
      parentID: parentID,
      text: null,
      childIDs: [],
      isMounted: false,
      updateCount: 0
    };
    setItem(id, item);
  },
  onBeforeUpdateComponent: function (id, element) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      return;
    }
    item.element = element;
  },
  onMountComponent: function (id) {
    var item = getItem(id);
    !item ? invariant_1(false, 'Item must have been set') : void 0;
    item.isMounted = true;
    var isRoot = item.parentID === 0;
    if (isRoot) {
      addRoot(id);
    }
  },
  onUpdateComponent: function (id) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      return;
    }
    item.updateCount++;
  },
  onUnmountComponent: function (id) {
    var item = getItem(id);
    if (item) {
      item.isMounted = false;
      var isRoot = item.parentID === 0;
      if (isRoot) {
        removeRoot(id);
      }
    }
    unmountedIDs.push(id);
  },
  purgeUnmountedComponents: function () {
    if (ReactComponentTreeHook._preventPurging) {
      return;
    }
    for (var i = 0; i < unmountedIDs.length; i++) {
      var id = unmountedIDs[i];
      purgeDeep(id);
    }
    unmountedIDs.length = 0;
  },
  isMounted: function (id) {
    var item = getItem(id);
    return item ? item.isMounted : false;
  },
  getCurrentStackAddendum: function (topElement) {
    var info = '';
    if (topElement) {
      var name = getDisplayName(topElement);
      var owner = topElement._owner;
      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
    }
    var currentOwner = ReactCurrentOwner_1.current;
    var id = currentOwner && currentOwner._debugID;
    info += ReactComponentTreeHook.getStackAddendumByID(id);
    return info;
  },
  getStackAddendumByID: function (id) {
    var info = '';
    while (id) {
      info += describeID(id);
      id = ReactComponentTreeHook.getParentID(id);
    }
    return info;
  },
  getChildIDs: function (id) {
    var item = getItem(id);
    return item ? item.childIDs : [];
  },
  getDisplayName: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element) {
      return null;
    }
    return getDisplayName(element);
  },
  getElement: function (id) {
    var item = getItem(id);
    return item ? item.element : null;
  },
  getOwnerID: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element || !element._owner) {
      return null;
    }
    return element._owner._debugID;
  },
  getParentID: function (id) {
    var item = getItem(id);
    return item ? item.parentID : null;
  },
  getSource: function (id) {
    var item = getItem(id);
    var element = item ? item.element : null;
    var source = element != null ? element._source : null;
    return source;
  },
  getText: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (typeof element === 'string') {
      return element;
    } else if (typeof element === 'number') {
      return '' + element;
    } else {
      return null;
    }
  },
  getUpdateCount: function (id) {
    var item = getItem(id);
    return item ? item.updateCount : 0;
  },
  getRootIDs: getRootIDs,
  getRegisteredIDs: getItemIDs,
  pushNonStandardWarningStack: function (isCreatingElement, currentSource) {
    if (typeof console.reactStack !== 'function') {
      return;
    }
    var stack = [];
    var currentOwner = ReactCurrentOwner_1.current;
    var id = currentOwner && currentOwner._debugID;
    try {
      if (isCreatingElement) {
        stack.push({
          name: id ? ReactComponentTreeHook.getDisplayName(id) : null,
          fileName: currentSource ? currentSource.fileName : null,
          lineNumber: currentSource ? currentSource.lineNumber : null
        });
      }
      while (id) {
        var element = ReactComponentTreeHook.getElement(id);
        var parentID = ReactComponentTreeHook.getParentID(id);
        var ownerID = ReactComponentTreeHook.getOwnerID(id);
        var ownerName = ownerID ? ReactComponentTreeHook.getDisplayName(ownerID) : null;
        var source = element && element._source;
        stack.push({
          name: ownerName,
          fileName: source ? source.fileName : null,
          lineNumber: source ? source.lineNumber : null
        });
        id = parentID;
      }
    } catch (err) {
    }
    console.reactStack(stack);
  },
  popNonStandardWarningStack: function () {
    if (typeof console.reactStackEnd !== 'function') {
      return;
    }
    console.reactStackEnd();
  }
};
var ReactComponentTreeHook_1 = ReactComponentTreeHook;

'use strict';
var ReactPropTypeLocationNames = {};
{
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
}
var ReactPropTypeLocationNames_1 = ReactPropTypeLocationNames;

'use strict';
var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret;

'use strict';
var ReactComponentTreeHook$1;
if (typeof process !== 'undefined' && process.env && "development" === 'test') {
  ReactComponentTreeHook$1 = ReactComponentTreeHook_1;
}
var loggedTypeFailures = {};
function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
  for (var typeSpecName in typeSpecs) {
    if (typeSpecs.hasOwnProperty(typeSpecName)) {
      var error;
      try {
        !(typeof typeSpecs[typeSpecName] === 'function') ? invariant_1(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames_1[location], typeSpecName) : void 0;
        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret_1);
      } catch (ex) {
        error = ex;
      }
      warning_1(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames_1[location], typeSpecName, typeof error);
      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
        loggedTypeFailures[error.message] = true;
        var componentStackInfo = '';
        {
          if (!ReactComponentTreeHook$1) {
            ReactComponentTreeHook$1 = ReactComponentTreeHook_1;
          }
          if (debugID !== null) {
            componentStackInfo = ReactComponentTreeHook$1.getStackAddendumByID(debugID);
          } else if (element !== null) {
            componentStackInfo = ReactComponentTreeHook$1.getCurrentStackAddendum(element);
          }
        }
        warning_1(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo);
      }
    }
  }
}
var checkReactTypeSpec_1 = checkReactTypeSpec;

'use strict';
function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner_1.current) {
    var name = ReactCurrentOwner_1.current.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}
function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return ' Check your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}
var ownerHasKeyUseWarning = {};
function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();
  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = ' Check the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;
  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (memoizer[currentComponentErrorInfo]) {
    return;
  }
  memoizer[currentComponentErrorInfo] = true;
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner_1.current) {
    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
  }
  warning_1(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook_1.getCurrentStackAddendum(element));
}
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (ReactElement_1.isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (ReactElement_1.isValidElement(node)) {
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn_1(node);
    if (iteratorFn) {
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (ReactElement_1.isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  if (componentClass.propTypes) {
    checkReactTypeSpec_1(componentClass.propTypes, element.props, 'prop', name, element, null);
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    warning_1(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
  }
}
var ReactElementValidator$2 = {
  createElement: function (type, props, children) {
    var validType = typeof type === 'string' || typeof type === 'function';
    if (!validType) {
      if (typeof type !== 'function' && typeof type !== 'string') {
        var info = '';
        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in.";
        }
        var sourceInfo = getSourceInfoErrorAddendum(props);
        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += getDeclarationErrorAddendum();
        }
        info += ReactComponentTreeHook_1.getCurrentStackAddendum();
        var currentSource = props !== null && props !== undefined && props.__source !== undefined ? props.__source : null;
        ReactComponentTreeHook_1.pushNonStandardWarningStack(true, currentSource);
        warning_1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info);
        ReactComponentTreeHook_1.popNonStandardWarningStack();
      }
    }
    var element = ReactElement_1.createElement.apply(this, arguments);
    if (element == null) {
      return element;
    }
    if (validType) {
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], type);
      }
    }
    validatePropTypes(element);
    return element;
  },
  createFactory: function (type) {
    var validatedFactory = ReactElementValidator$2.createElement.bind(null, type);
    validatedFactory.type = type;
    {
      if (canDefineProperty_1) {
        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function () {
            lowPriorityWarning_1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }
    }
    return validatedFactory;
  },
  cloneElement: function (element, props, children) {
    var newElement = ReactElement_1.cloneElement.apply(this, arguments);
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], newElement.type);
    }
    validatePropTypes(newElement);
    return newElement;
  }
};
var ReactElementValidator_1 = ReactElementValidator$2;

'use strict';
var createDOMFactory = ReactElement_1.createFactory;
{
  var ReactElementValidator$1 = ReactElementValidator_1;
  createDOMFactory = ReactElementValidator$1.createFactory;
}
var ReactDOMFactories = {
  a: createDOMFactory('a'),
  abbr: createDOMFactory('abbr'),
  address: createDOMFactory('address'),
  area: createDOMFactory('area'),
  article: createDOMFactory('article'),
  aside: createDOMFactory('aside'),
  audio: createDOMFactory('audio'),
  b: createDOMFactory('b'),
  base: createDOMFactory('base'),
  bdi: createDOMFactory('bdi'),
  bdo: createDOMFactory('bdo'),
  big: createDOMFactory('big'),
  blockquote: createDOMFactory('blockquote'),
  body: createDOMFactory('body'),
  br: createDOMFactory('br'),
  button: createDOMFactory('button'),
  canvas: createDOMFactory('canvas'),
  caption: createDOMFactory('caption'),
  cite: createDOMFactory('cite'),
  code: createDOMFactory('code'),
  col: createDOMFactory('col'),
  colgroup: createDOMFactory('colgroup'),
  data: createDOMFactory('data'),
  datalist: createDOMFactory('datalist'),
  dd: createDOMFactory('dd'),
  del: createDOMFactory('del'),
  details: createDOMFactory('details'),
  dfn: createDOMFactory('dfn'),
  dialog: createDOMFactory('dialog'),
  div: createDOMFactory('div'),
  dl: createDOMFactory('dl'),
  dt: createDOMFactory('dt'),
  em: createDOMFactory('em'),
  embed: createDOMFactory('embed'),
  fieldset: createDOMFactory('fieldset'),
  figcaption: createDOMFactory('figcaption'),
  figure: createDOMFactory('figure'),
  footer: createDOMFactory('footer'),
  form: createDOMFactory('form'),
  h1: createDOMFactory('h1'),
  h2: createDOMFactory('h2'),
  h3: createDOMFactory('h3'),
  h4: createDOMFactory('h4'),
  h5: createDOMFactory('h5'),
  h6: createDOMFactory('h6'),
  head: createDOMFactory('head'),
  header: createDOMFactory('header'),
  hgroup: createDOMFactory('hgroup'),
  hr: createDOMFactory('hr'),
  html: createDOMFactory('html'),
  i: createDOMFactory('i'),
  iframe: createDOMFactory('iframe'),
  img: createDOMFactory('img'),
  input: createDOMFactory('input'),
  ins: createDOMFactory('ins'),
  kbd: createDOMFactory('kbd'),
  keygen: createDOMFactory('keygen'),
  label: createDOMFactory('label'),
  legend: createDOMFactory('legend'),
  li: createDOMFactory('li'),
  link: createDOMFactory('link'),
  main: createDOMFactory('main'),
  map: createDOMFactory('map'),
  mark: createDOMFactory('mark'),
  menu: createDOMFactory('menu'),
  menuitem: createDOMFactory('menuitem'),
  meta: createDOMFactory('meta'),
  meter: createDOMFactory('meter'),
  nav: createDOMFactory('nav'),
  noscript: createDOMFactory('noscript'),
  object: createDOMFactory('object'),
  ol: createDOMFactory('ol'),
  optgroup: createDOMFactory('optgroup'),
  option: createDOMFactory('option'),
  output: createDOMFactory('output'),
  p: createDOMFactory('p'),
  param: createDOMFactory('param'),
  picture: createDOMFactory('picture'),
  pre: createDOMFactory('pre'),
  progress: createDOMFactory('progress'),
  q: createDOMFactory('q'),
  rp: createDOMFactory('rp'),
  rt: createDOMFactory('rt'),
  ruby: createDOMFactory('ruby'),
  s: createDOMFactory('s'),
  samp: createDOMFactory('samp'),
  script: createDOMFactory('script'),
  section: createDOMFactory('section'),
  select: createDOMFactory('select'),
  small: createDOMFactory('small'),
  source: createDOMFactory('source'),
  span: createDOMFactory('span'),
  strong: createDOMFactory('strong'),
  style: createDOMFactory('style'),
  sub: createDOMFactory('sub'),
  summary: createDOMFactory('summary'),
  sup: createDOMFactory('sup'),
  table: createDOMFactory('table'),
  tbody: createDOMFactory('tbody'),
  td: createDOMFactory('td'),
  textarea: createDOMFactory('textarea'),
  tfoot: createDOMFactory('tfoot'),
  th: createDOMFactory('th'),
  thead: createDOMFactory('thead'),
  time: createDOMFactory('time'),
  title: createDOMFactory('title'),
  tr: createDOMFactory('tr'),
  track: createDOMFactory('track'),
  u: createDOMFactory('u'),
  ul: createDOMFactory('ul'),
  'var': createDOMFactory('var'),
  video: createDOMFactory('video'),
  wbr: createDOMFactory('wbr'),
  circle: createDOMFactory('circle'),
  clipPath: createDOMFactory('clipPath'),
  defs: createDOMFactory('defs'),
  ellipse: createDOMFactory('ellipse'),
  g: createDOMFactory('g'),
  image: createDOMFactory('image'),
  line: createDOMFactory('line'),
  linearGradient: createDOMFactory('linearGradient'),
  mask: createDOMFactory('mask'),
  path: createDOMFactory('path'),
  pattern: createDOMFactory('pattern'),
  polygon: createDOMFactory('polygon'),
  polyline: createDOMFactory('polyline'),
  radialGradient: createDOMFactory('radialGradient'),
  rect: createDOMFactory('rect'),
  stop: createDOMFactory('stop'),
  svg: createDOMFactory('svg'),
  text: createDOMFactory('text'),
  tspan: createDOMFactory('tspan')
};
var ReactDOMFactories_1 = ReactDOMFactories;

'use strict';
var ReactPropTypesSecret$2 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1$2 = ReactPropTypesSecret$2;

'use strict';
{
  var invariant$2 = invariant_1;
  var warning$1 = warning_1;
  var ReactPropTypesSecret$3 = ReactPropTypesSecret_1$2;
  var loggedTypeFailures$1 = {};
}
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        try {
          invariant$2(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$3);
        } catch (ex) {
          error = ex;
        }
        warning$1(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures$1)) {
          loggedTypeFailures$1[error.message] = true;
          var stack = getStack ? getStack() : '';
          warning$1(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}
var checkPropTypes_1 = checkPropTypes;

'use strict';
var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }
  var ANONYMOUS = '<<anonymous>>';
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };
  function is(x, y) {
    if (x === y) {
      return x !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  PropTypeError.prototype = Error.prototype;
  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;
      if (secret !== ReactPropTypesSecret_1$2) {
        if (throwOnDirectAccess) {
          invariant_1(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            manualPropTypeWarningCount < 3
          ) {
            warning_1(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }
  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction_1.thatReturnsNull);
  }
  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1$2);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      warning_1(false, 'Invalid argument supplied to oneOf, expected an instance of array.');
      return emptyFunction_1.thatReturnsNull;
    }
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }
      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }
  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1$2);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      warning_1(false, 'Invalid argument supplied to oneOfType, expected an instance of array.');
      return emptyFunction_1.thatReturnsNull;
    }
    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning_1(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction_1.thatReturnsNull;
      }
    }
    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1$2) == null) {
          return null;
        }
      }
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }
  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1$2);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }
        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }
        return true;
      default:
        return false;
    }
  }
  function isSymbol(propType, propValue) {
    if (propType === 'symbol') {
      return true;
    }
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }
    return false;
  }
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }
  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

'use strict';
var factory_1 = function(isValidElement) {
  var throwOnDirectAccess = false;
  return factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
};

'use strict';
var isValidElement = ReactElement_1.isValidElement;
var ReactPropTypes = factory_1(isValidElement);

'use strict';
var ReactVersion = '15.6.1';

'use strict';
{
  var warning$2 = warning_1;
}
var MIXINS_KEY = 'mixins';
function identity(fn) {
  return fn;
}
var ReactPropTypeLocationNames$2;
{
  ReactPropTypeLocationNames$2 = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
}
function factory$2(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  var injectedMixins = [];
  var ReactClassInterface = {
    mixins: 'DEFINE_MANY',
    statics: 'DEFINE_MANY',
    propTypes: 'DEFINE_MANY',
    contextTypes: 'DEFINE_MANY',
    childContextTypes: 'DEFINE_MANY',
    getDefaultProps: 'DEFINE_MANY_MERGED',
    getInitialState: 'DEFINE_MANY_MERGED',
    getChildContext: 'DEFINE_MANY_MERGED',
    render: 'DEFINE_ONCE',
    componentWillMount: 'DEFINE_MANY',
    componentDidMount: 'DEFINE_MANY',
    componentWillReceiveProps: 'DEFINE_MANY',
    shouldComponentUpdate: 'DEFINE_ONCE',
    componentWillUpdate: 'DEFINE_MANY',
    componentDidUpdate: 'DEFINE_MANY',
    componentWillUnmount: 'DEFINE_MANY',
    updateComponent: 'OVERRIDE_BASE'
  };
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      {
        validateTypeDef(Constructor, childContextTypes, 'childContext');
      }
      Constructor.childContextTypes = objectAssign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      {
        validateTypeDef(Constructor, contextTypes, 'context');
      }
      Constructor.contextTypes = objectAssign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      {
        validateTypeDef(Constructor, propTypes, 'prop');
      }
      Constructor.propTypes = objectAssign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };
  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        {
          warning$2(
            typeof typeDef[propName] === 'function',
            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
              'React.PropTypes.',
            Constructor.displayName || 'ReactClass',
            ReactPropTypeLocationNames$2[location],
            propName
          );
        }
      }
    }
  }
  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;
    if (ReactClassMixin.hasOwnProperty(name)) {
      invariant_1(
        specPolicy === 'OVERRIDE_BASE',
        'ReactClassInterface: You are attempting to override ' +
          '`%s` from your class specification. Ensure that your method names ' +
          'do not overlap with React methods.',
        name
      );
    }
    if (isAlreadyDefined) {
      invariant_1(
        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
        'ReactClassInterface: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be due ' +
          'to a mixin.',
        name
      );
    }
  }
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      {
        var typeofSpec = typeof spec;
        var isMixinValid = typeofSpec === 'object' && spec !== null;
        {
          warning$2(
            isMixinValid,
            "%s: You're attempting to include a mixin that is either null " +
              'or not an object. Check the mixins included by the component, ' +
              'as well as any mixins they include themselves. ' +
              'Expected object but got %s.',
            Constructor.displayName || 'ReactClass',
            spec === null ? null : typeofSpec
          );
        }
      }
      return;
    }
    invariant_1(
      typeof spec !== 'function',
      "ReactClass: You're attempting to " +
        'use a component class or function as a mixin. Instead, just use a ' +
        'regular object.'
    );
    invariant_1(
      !isValidElement(spec),
      "ReactClass: You're attempting to " +
        'use a component as a mixin. Instead, just use a regular object.'
    );
    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }
    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }
      if (name === MIXINS_KEY) {
        continue;
      }
      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);
      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;
        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];
            invariant_1(
              isReactClassMethod &&
                (specPolicy === 'DEFINE_MANY_MERGED' ||
                  specPolicy === 'DEFINE_MANY'),
              'ReactClass: Unexpected spec policy %s for key %s ' +
                'when mixing in component specs.',
              specPolicy,
              name
            );
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            {
              if (typeof property === 'function' && spec.displayName) {
                proto[name].displayName = spec.displayName + '_' + name;
              }
            }
          }
        }
      }
    }
  }
  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }
    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }
      var isReserved = name in RESERVED_SPEC_KEYS;
      invariant_1(
        !isReserved,
        'ReactClass: You are attempting to define a reserved ' +
          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
          'as an instance property instead; it will still be accessible on the ' +
          'constructor.',
        name
      );
      var isInherited = name in Constructor;
      invariant_1(
        !isInherited,
        'ReactClass: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be ' +
          'due to a mixin.',
        name
      );
      Constructor[name] = property;
    }
  }
  function mergeIntoWithNoDuplicateKeys(one, two) {
    invariant_1(
      one && two && typeof one === 'object' && typeof two === 'object',
      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    );
    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        invariant_1(
          one[key] === undefined,
          'mergeIntoWithNoDuplicateKeys(): ' +
            'Tried to merge two objects with the same key: `%s`. This conflict ' +
            'may be due to a mixin; in particular, this may be caused by two ' +
            'getInitialState() or getDefaultProps() methods returning objects ' +
            'with clashing keys.',
          key
        );
        one[key] = two[key];
      }
    }
    return one;
  }
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;
      boundMethod.bind = function(newThis) {
        for (
          var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }
        if (newThis !== component && newThis !== null) {
          {
            warning$2(
              false,
              'bind(): React component methods may only be bound to the ' +
                'component instance. See %s',
              componentName
            );
          }
        } else if (!args.length) {
          {
            warning$2(
              false,
              'bind(): You are binding a component method to the component. ' +
                'React does this for you automatically in a high-performance ' +
                'way, so you can safely remove this call. See %s',
              componentName
            );
          }
          return boundMethod;
        }
        var reboundMethod = _bind.apply(boundMethod, arguments);
        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }
    return boundMethod;
  }
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }
  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };
  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };
  var ReactClassMixin = {
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },
    isMounted: function() {
      {
        warning$2(
          this.__didWarnIsMounted,
          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
            'subscriptions and pending requests in componentWillUnmount to ' +
            'prevent memory leaks.',
          (this.constructor && this.constructor.displayName) ||
            this.name ||
            'Component'
        );
        this.__didWarnIsMounted = true;
      }
      return !!this.__isMounted;
    }
  };
  var ReactClassComponent = function() {};
  objectAssign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );
  function createClass(spec) {
    var Constructor = identity(function(props, context, updater) {
      {
        warning$2(
          this instanceof Constructor,
          'Something is calling a React component directly. Use a factory or ' +
            'JSX instead. See: https://fb.me/react-legacyfactory'
        );
      }
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }
      this.props = props;
      this.context = context;
      this.refs = emptyObject_1;
      this.updater = updater || ReactNoopUpdateQueue;
      this.state = null;
      var initialState = this.getInitialState ? this.getInitialState() : null;
      {
        if (
          initialState === undefined &&
          this.getInitialState._isMockFunction
        ) {
          initialState = null;
        }
      }
      invariant_1(
        typeof initialState === 'object' && !Array.isArray(initialState),
        '%s.getInitialState(): must return an object or null',
        Constructor.displayName || 'ReactCompositeComponent'
      );
      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];
    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }
    {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }
    invariant_1(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    );
    {
      warning$2(
        !Constructor.prototype.componentShouldUpdate,
        '%s has a method called ' +
          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
          'The name is phrased as a question because the function is ' +
          'expected to return a value.',
        spec.displayName || 'A component'
      );
      warning$2(
        !Constructor.prototype.componentWillRecieveProps,
        '%s has a method called ' +
          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
    }
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }
    return Constructor;
  }
  return createClass;
}
var factory_1$2 = factory$2;

'use strict';
var Component$1 = ReactBaseClasses.Component;
var isValidElement$1 = ReactElement_1.isValidElement;
var createClass$2 = factory_1$2(Component$1, isValidElement$1, ReactNoopUpdateQueue_1);

'use strict';
function onlyChild(children) {
  !ReactElement_1.isValidElement(children) ? invariant_1(false, 'React.Children.only expected to receive a single React element child.') : void 0;
  return children;
}
var onlyChild_1 = onlyChild;

'use strict';
var createElement = ReactElement_1.createElement;
var createFactory = ReactElement_1.createFactory;
var cloneElement = ReactElement_1.cloneElement;
{
  var lowPriorityWarning = lowPriorityWarning_1;
  var canDefineProperty = canDefineProperty_1;
  var ReactElementValidator = ReactElementValidator_1;
  var didWarnPropTypesDeprecated = false;
  createElement = ReactElementValidator.createElement;
  createFactory = ReactElementValidator.createFactory;
  cloneElement = ReactElementValidator.cloneElement;
}
var __spread = objectAssign;
var createMixin = function (mixin) {
  return mixin;
};
{
  var warnedForSpread = false;
  var warnedForCreateMixin = false;
  __spread = function () {
    lowPriorityWarning(warnedForSpread, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.');
    warnedForSpread = true;
    return objectAssign.apply(null, arguments);
  };
  createMixin = function (mixin) {
    lowPriorityWarning(warnedForCreateMixin, 'React.createMixin is deprecated and should not be used. ' + 'In React v16.0, it will be removed. ' + 'You can use this mixin directly instead. ' + 'See https://fb.me/createmixin-was-never-implemented for more info.');
    warnedForCreateMixin = true;
    return mixin;
  };
}
var React$1 = {
  Children: {
    map: ReactChildren_1.map,
    forEach: ReactChildren_1.forEach,
    count: ReactChildren_1.count,
    toArray: ReactChildren_1.toArray,
    only: onlyChild_1
  },
  Component: ReactBaseClasses.Component,
  PureComponent: ReactBaseClasses.PureComponent,
  createElement: createElement,
  cloneElement: cloneElement,
  isValidElement: ReactElement_1.isValidElement,
  PropTypes: ReactPropTypes,
  createClass: createClass$2,
  createFactory: createFactory,
  createMixin: createMixin,
  DOM: ReactDOMFactories_1,
  version: ReactVersion,
  __spread: __spread
};
{
  var warnedForCreateClass = false;
  if (canDefineProperty) {
    Object.defineProperty(React$1, 'PropTypes', {
      get: function () {
        lowPriorityWarning(didWarnPropTypesDeprecated, 'Accessing PropTypes via the main React package is deprecated,' + ' and will be removed in  React v16.0.' + ' Use the latest available v15.* prop-types package from npm instead.' + ' For info on usage, compatibility, migration and more, see ' + 'https://fb.me/prop-types-docs');
        didWarnPropTypesDeprecated = true;
        return ReactPropTypes;
      }
    });
    Object.defineProperty(React$1, 'createClass', {
      get: function () {
        lowPriorityWarning(warnedForCreateClass, 'Accessing createClass via the main React package is deprecated,' + ' and will be removed in React v16.0.' + " Use a plain JavaScript class instead. If you're not yet " + 'ready to migrate, create-react-class v15.* is available ' + 'on npm as a temporary, drop-in replacement. ' + 'For more info see https://fb.me/react-create-class');
        warnedForCreateClass = true;
        return createClass$2;
      }
    });
  }
  React$1.DOM = {};
  var warnedForFactories = false;
  Object.keys(ReactDOMFactories_1).forEach(function (factory) {
    React$1.DOM[factory] = function () {
      if (!warnedForFactories) {
        lowPriorityWarning(false, 'Accessing factories like React.DOM.%s has been deprecated ' + 'and will be removed in v16.0+. Use the ' + 'react-dom-factories package instead. ' + ' Version 1.0 provides a drop-in replacement.' + ' For more info, see https://fb.me/react-dom-factories', factory);
        warnedForFactories = true;
      }
      return ReactDOMFactories_1[factory].apply(ReactDOMFactories_1, arguments);
    };
  });
}
var React_1 = React$1;

'use strict';
var ReactNodeTypes = {
  HOST: 0,
  COMPOSITE: 1,
  EMPTY: 2,
  getType: function (node) {
    if (node === null || node === false) {
      return ReactNodeTypes.EMPTY;
    } else if (React_1.isValidElement(node)) {
      if (typeof node.type === 'function') {
        return ReactNodeTypes.COMPOSITE;
      } else {
        return ReactNodeTypes.HOST;
      }
    }
    invariant_1(false, 'Unexpected node: %s', node);
  }
};
var ReactNodeTypes_1 = ReactNodeTypes;

'use strict';
function getHostComponentFromComposite(inst) {
  var type;
  while ((type = inst._renderedNodeType) === ReactNodeTypes_1.COMPOSITE) {
    inst = inst._renderedComponent;
  }
  if (type === ReactNodeTypes_1.HOST) {
    return inst._renderedComponent;
  } else if (type === ReactNodeTypes_1.EMPTY) {
    return null;
  }
}
var getHostComponentFromComposite_1 = getHostComponentFromComposite;

'use strict';
function findDOMNode(componentOrElement) {
  {
    var owner = ReactCurrentOwner_1.current;
    if (owner !== null) {
      warning_1(owner._warnedAboutRefsInRender, '%s is accessing findDOMNode inside its render(). ' + 'render() should be a pure function of props and state. It should ' + 'never access something that requires stale data from the previous ' + 'render, such as refs. Move this logic to componentDidMount and ' + 'componentDidUpdate instead.', owner.getName() || 'A component');
      owner._warnedAboutRefsInRender = true;
    }
  }
  if (componentOrElement == null) {
    return null;
  }
  if (componentOrElement.nodeType === 1) {
    return componentOrElement;
  }
  var inst = ReactInstanceMap_1.get(componentOrElement);
  if (inst) {
    inst = getHostComponentFromComposite_1(inst);
    return inst ? ReactDOMComponentTree_1.getNodeFromInstance(inst) : null;
  }
  if (typeof componentOrElement.render === 'function') {
    invariant_1(false, 'findDOMNode was called on an unmounted component.');
  } else {
    invariant_1(false, 'Element appears to be neither ReactComponent nor DOMNode (keys: %s)', Object.keys(componentOrElement));
  }
}
var findDOMNode_1$1 = findDOMNode;

var defaultProps$132 = {
  theme: bsTheme
};
var OffsetNavUnstyled = function (_React$Component) {
  inherits(OffsetNavUnstyled, _React$Component);
  function OffsetNavUnstyled() {
    classCallCheck$1(this, OffsetNavUnstyled);
    return possibleConstructorReturn(this, (OffsetNavUnstyled.__proto__ || Object.getPrototypeOf(OffsetNavUnstyled)).apply(this, arguments));
  }
  createClass$1(OffsetNavUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme', 'elementWidth', 'animation-push']),
          className = _omit.className,
          children = _omit.children,
          active = _omit.active,
          dismiss = _omit.dismiss,
          menuClose = _omit.menuClose,
          offsetColor = _omit.offsetColor,
          cssModule = _omit.cssModule,
          menuRight = _omit['menu-right'],
          attributes = objectWithoutProperties(_omit, ['className', 'children', 'active', 'dismiss', 'menuClose', 'offsetColor', 'cssModule', 'menu-right']);
      var menuDirectionClassNames = menuRight ? 'menu-right' : 'menu-left';
      var cssClasses = classnames$1(className, menuDirectionClassNames, defineProperty({}, 'bg-' + offsetColor, offsetColor));
      return React.createElement(
        'div',
        _extends({
          className: mapToCssModules(classnames$1(cssClasses, { active: active }), cssModule)
        }, attributes),
        menuClose && React.createElement(Close, { 'aria-label': 'Close', onDismiss: dismiss }),
        children
      );
    }
  }]);
  return OffsetNavUnstyled;
}(React.Component);
OffsetNavUnstyled.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool,
  dismiss: PropTypes.func,
  menuClose: PropTypes.bool,
  elementWidth: PropTypes.string,
  theme: PropTypes.object,
  offsetColor: PropTypes.string,
  'menu-right': PropTypes.bool,
  'animation-push': PropTypes.bool,
  cssModule: PropTypes.object
};
var OffsetNav = styled(OffsetNavUnstyled).withConfig({
  displayName: 'OffsetNav'
})(['', ''], function (props) {
  return '\n    width: ' + (props.elementWidth ? props.elementWidth : props.theme['$menu-push-width']) + ';\n    height: 100%;\n    background-color: white;\n    z-index: ' + props.theme['$zindex-menu-push'] + ';\n  ';
});
OffsetNav.defaultProps = defaultProps$132;

var OffsetNavPush = styled(OffsetNav).withConfig({
  displayName: 'OffsetNavPush'
})(['', ''], function (props) {
  return '\n    position: absolute;\n    top: 0;\n\n    ' + boxShadow(props.theme['$enable-shadows'], props.theme['$menu-offset-nav-box-shadow']) + '    \n\n    &.menu-left {\n      left: -' + props.theme['$menu-push-width'] + ';\n      ' + transition(props.theme['$enable-transitions'], props.theme['$menu-offset-nav-transition']) + '\n    }\n    \n    &.menu-right {\n      right: -' + props.theme['$menu-push-width'] + ';\n      ' + transition(props.theme['$enable-transitions'], props.theme['$menu-offset-nav-transition']) + '\n    }\n  ';
});

var OffsetNavSlide = styled(OffsetNav).withConfig({
  displayName: 'OffsetNavSlide'
})(['', ''], function (props) {
  return '\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    ' + transition(props.theme['$enable-transitions'], props.theme['$menu-offset-nav-transition']) + '\n    ' + boxShadow(props.theme['$enable-shadows'], props.theme['$menu-offset-nav-box-shadow']) + '  \n    &.menu-left {\n      left: 0;\n      transform: translateX(-100%);\n      &.active {\n        transform: translateX(0);\n      }\n    }\n    \n    &.menu-right {\n      right: 0;\n      transform: translateX(100%);\n      &.active {\n        transform: translateX(0);\n      }\n    }\n\n  ';
});

var defaultProps$133 = { theme: bsTheme };
var OverlayUnstyled = function (_React$Component) {
  inherits(OverlayUnstyled, _React$Component);
  function OverlayUnstyled() {
    classCallCheck$1(this, OverlayUnstyled);
    return possibleConstructorReturn(this, (OverlayUnstyled.__proto__ || Object.getPrototypeOf(OverlayUnstyled)).apply(this, arguments));
  }
  createClass$1(OverlayUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          active = _omit.active,
          attributes = objectWithoutProperties(_omit, ['className', 'active']);
      return React.createElement('div', _extends({
        className: classnames$1(className, 'fade', {
          show: active
        })
      }, attributes));
    }
  }]);
  return OverlayUnstyled;
}(React.Component);
OverlayUnstyled.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  theme: PropTypes.object
};
var Overlay = styled(OverlayUnstyled).withConfig({
  displayName: 'Overlay'
})(['', ''], function (props) {
  return '\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    z-index: 1990;\n    background: rgba(0, 0, 0, 0.3);\n    transform: translate3d(100%, 0, 0);\n    ' + fade(props.theme['$enable-transitions'], props.theme['$transition-fade']) + '\n    &.show {\n      transform: translate3d(0, 0, 0);\n    }\n  ';
});
Overlay.defaultProps = defaultProps$133;

var defaultProps$131 = {
  button: {
    component: Button
  },
  alwaysShow: false,
  theme: bsTheme,
  noOverlay: false,
  belowHeader: false,
  menuClose: false
};
var HeaderNavBar = function (_React$Component) {
  inherits(HeaderNavBar, _React$Component);
  function HeaderNavBar() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck$1(this, HeaderNavBar);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = HeaderNavBar.__proto__ || Object.getPrototypeOf(HeaderNavBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      show: false
    }, _this.handleClick = function (e) {
      var _this$props = _this.props,
          onClick = _this$props.onClick,
          animationPush = _this$props['animation-push'],
          menuRight = _this$props['menu-right'];
      var show = _this.state.show;
      if (onClick) {
        onClick(e);
      }
      _this.setState({ show: !show });
      document.body.classList.toggle('overflow');
      if (animationPush) {
        menuRight ?
        document.getElementById('wrapper').classList.toggle('right') : document.getElementById('wrapper').classList.toggle('left');
      }
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  createClass$1(HeaderNavBar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var alwaysShow = this.props.alwaysShow;
      if (alwaysShow) {
        this.setState({ show: true });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var componentAsANodeReact = findDOMNode_1$1(this);
      var node = componentAsANodeReact.querySelector('.navbar.justify-content-between');
      var nodeHeight = node.clientHeight;
      var offsetNav = componentAsANodeReact.querySelector('.offset-nav-margin-top');
      this.props.belowHeader ? offsetNav.style.marginTop = nodeHeight + 'px' : null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _cn,
          _this2 = this;
      var _omit = lodash_omit$1(this.props, ['theme', 'belowHeader']),
          className = _omit.className,
          children = _omit.children,
          cssModule = _omit.cssModule,
          button = _omit.button,
          noOverlay = _omit.noOverlay,
          menuClose = _omit.menuClose,
          offsetNavWidth = _omit.offsetNavWidth,
          navTop = _omit['nav-top'],
          menuRight = _omit['menu-right'],
          animationPush = _omit['animation-push'],
          light = _omit.light,
          inverse = _omit.inverse,
          fixed = _omit.fixed,
          sticky = _omit.sticky,
          color = _omit.color,
          offsetColor = _omit.offsetColor,
          alwaysShow = _omit.alwaysShow,
          shadowHeader = _omit.shadowHeader,
          attributesTemp = objectWithoutProperties(_omit, ['className', 'children', 'cssModule', 'button', 'noOverlay', 'menuClose', 'offsetNavWidth', 'nav-top', 'menu-right', 'animation-push', 'light', 'inverse', 'fixed', 'sticky', 'color', 'offsetColor', 'alwaysShow', 'shadowHeader']);
      var _omit2 = lodash_omit$1(attributesTemp, ['onClick']),
          attributes = objectWithoutProperties(_omit2, []);
      var ButtonToggle = button.component,
          classNameButton = button.className,
          restButton = objectWithoutProperties(button, ['component', 'className']);
      var cssClasses = classnames$1('navbar', 'justify-content-between', className, (_cn = {
        'flex-row': !alwaysShow,
        'navbar-light': light,
        'navbar-inverse': inverse
      }, defineProperty(_cn, 'bg-' + color, color), defineProperty(_cn, 'fixed-' + fixed, fixed), defineProperty(_cn, 'sticky-' + sticky, sticky), _cn));
      var buttonMenuRight = menuRight ? 'flex-last' : '';
      var buttonClasses = classnames$1(buttonMenuRight, classNameButton, {
        'navbar-toggler-icon p-3 my-auto cursor-pointer': !classNameButton
      });
      var OffsetMenuAnimated = animationPush ? React.createElement(
        OffsetNavPush,
        {
          className: 'offset-nav-margin-top',
          elementWidth: offsetNavWidth,
          active: this.state.show,
          offsetColor: offsetColor,
          'menu-right': menuRight,
          'animation-push': animationPush,
          menuClose: menuClose,
          dismiss: this.handleClick
        },
        children
      ) : React.createElement(
        OffsetNavSlide,
        {
          className: 'offset-nav-margin-top',
          elementWidth: offsetNavWidth,
          active: this.state.show,
          offsetColor: offsetColor,
          'menu-right': menuRight,
          'animation-push': animationPush,
          menuClose: menuClose,
          dismiss: this.handleClick
        },
        children
      );
      return React.createElement(
        'div',
        null,
        !noOverlay && React.createElement(Overlay, { active: this.state.show, onClick: this.handleClick }),
        React.createElement(
          Header,
          _extends({ className: mapToCssModules(classnames$1(cssClasses), cssModule), shadowHeader: shadowHeader }, attributes, { innerRef: function innerRef(header) {
              _this2.header = header;
            } }),
          !alwaysShow && React.createElement(ButtonToggle, _extends({ className: buttonClasses, onClick: this.handleClick }, restButton)),
          navTop && React.createElement(
            'div',
            null,
            navTop
          )
        ),
        OffsetMenuAnimated
      );
    }
  }]);
  return HeaderNavBar;
}(React.Component);
HeaderNavBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  theme: PropTypes.object,
  alwaysShow: PropTypes.bool,
  onClick: PropTypes.func,
  belowHeader: PropTypes.bool,
  shadowHeader: PropTypes.bool,
  offsetNavWidth: PropTypes.string,
  noOverlay: PropTypes.bool,
  menuClose: PropTypes.bool,
  cssModule: PropTypes.object,
  dismiss: PropTypes.func,
  button: PropTypes.shape({
    component: PropTypes.component,
    className: PropTypes.string
  }),
  'nav-top': PropTypes.node,
  light: PropTypes.bool,
  inverse: PropTypes.bool,
  full: PropTypes.bool,
  fixed: PropTypes.string,
  sticky: PropTypes.string,
  color: PropTypes.string,
  offsetColor: PropTypes.string,
  'menu-right': PropTypes.bool,
  'animation-push': PropTypes.bool
};
HeaderNavBar.defaultProps = defaultProps$131;

var defaultProps$134 = { theme: bsTheme };
var PageWrapperUnstyled = function (_React$Component) {
  inherits(PageWrapperUnstyled, _React$Component);
  function PageWrapperUnstyled() {
    classCallCheck$1(this, PageWrapperUnstyled);
    return possibleConstructorReturn(this, (PageWrapperUnstyled.__proto__ || Object.getPrototypeOf(PageWrapperUnstyled)).apply(this, arguments));
  }
  createClass$1(PageWrapperUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit$1(this.props, ['theme']),
          className = _omit.className,
          children = _omit.children;
      return React.createElement(
        'div',
        {
          className: className,
          id: 'wrapper'
        },
        children
      );
    }
  }]);
  return PageWrapperUnstyled;
}(React.Component);
PageWrapperUnstyled.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  theme: PropTypes.object
};
var PageWrapper = styled(PageWrapperUnstyled).withConfig({
  displayName: 'PageWrapper'
})(['', ''], function (props) {
  return '\n    height: 100%;\n    transition: ' + props.theme['$menu-offset-nav-transition'] + ';\n    &.left { transform: translateX(220px); }\n    &.right { transform: translateX(-220px); }\n  ';
});
PageWrapper.defaultProps = defaultProps$134;

export { borderRadius$1 as radius, boxShadow, breakpoints as bp, ifThen, ifElse, gradients as gradient, hover, srOnly, srOnlyFocusable, size, index$1 as unitMixins, transition, alignUtils, backgroundUtils, bordersUtils, clearfixUtils, cursorUtils, displayUtils, flexUtils, floatUtils, positionUtils, rebootUtils, screenreadersUtils, sizingUtils, spacingUtils, transitionUtils, textUtils, visibilityUtils, tetherAttachements, bsTheme as theme, makeTheme$$1 as makeTheme, A, composeLink, Abbr, Address, index$1$1 as Alert, Area, Article, Blockquote, BootstrapProvider, Breadcrumb, BreadcrumbItem, Button, ButtonDropdown, ButtonGroup, ButtonToolbar, Caption, Close, Code, Col, Collapse, Dd, Dfn, Details, Dl, Dt, Fade$1 as Fade, Fa, FaStacked, Fieldset, Footer, H1, H2, H3, H4, H5, H6, Header, Hr, Img, Figure, FigCaption, Input, InputGroup, InputGroupAddon, InputGroupButton, IssueIcon, Kbd, Jumbotron, Label, Legend, Li, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemHeading$2 as ListGroupItemText, Map$2 as Map, Mark, Media, Modal, ModalBody, ModalFooter, ModalHeader, Nav, NavLink, NavItem, Ol, Option, Output, P, Pagination, PaginationItem, PaginationLink, Pre, Progress, ProgressBar, Row, Samp, Section, Select, Small, Strong, Summary, Sub, Sup, Table, Tbody, Tfoot, Thead, Td, Th, Tr, Badge, Textarea, Tooltip, Ul, Blur, Contrast, Brightness, Grayscale, HueRotate, Invert, Opacity, Sepia, Saturate, Bounce, BounceDown, BounceUp, BounceLeft, BounceRight, Flash, RollOut, RollIn, Rubber, Swing, Zoom, Hinge, Pulse, ExpandUp, Entrance, Hatch, SlideUp, SlideDown, SlideRight, SlideLeft, SlideRightLeft, FadeIn, FadeInDown, FadeInUp, FadeInLeft, FadeInRight, RotateIn, RotateLeft, RotateRight, RotateUpLeft, RotateUpRight, LightIn, LightOut, Flip, FlipX, FlipY, Dropshadow, Card, CardBlock, CardFooter, CardHeader, CardImg, CardImgOverlay, CardLink, CardSubtitle, CardText, CardTitle, CardColumns, CardDeck, CardGroup, CardBlockquote, Accordion, AccordionGroup, Form, FormGroup, FormText, FormFeedback, FormCustom, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Navbar, NavbarToggler, NavbarBrand, NavDropdown, Container, ContainerFluid, HeaderNavBar, PageWrapper, OffsetNavPush, OffsetNavSlide };
//# sourceMappingURL=bootstrap-styled.es.js.map
