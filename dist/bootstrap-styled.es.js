import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal, keyframes } from 'styled-components';
import ReactDOM from 'react-dom';

function makeOriginal() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  return Object.assign({}, u, v);
}

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
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

function buildGraph() {
	var graph = {};
	var models = Object.keys(conversions);
	for (var len = models.length, i = 0; i < len; i++) {
		graph[models[i]] = {
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

function allowFalseValue(userValue, defaultValue) {
  return userValue === false ? userValue : userValue || defaultValue;
}

var makeTheme$1 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-hover-media-query'] = allowFalseValue(u['$enable-hover-media-query'], false);
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$blue'] = u['$blue'] || '#0275d8';
  v['$brand-primary'] = u['$brand-primary'] || v['$blue'];
  v['$link-color'] = u['$link-color'] || v['$brand-primary'];
  v['$link-decoration'] = u['$link-decoration'] || 'none';
  v['$link-hover-color'] = u['$link-hover-color'] || color(v['$link-color']).darken(0.35).toString();
  v['$link-hover-decoration'] = u['$link-hover-decoration'] || 'underline';
  return Object.assign({}, u, v);
};
makeTheme$1();

var makeTheme$2 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$spacer'] = u['$spacer'] || '1rem';
  v['$spacer-y'] = u['$spacer-y'] || v['$spacer'];
  v['$border-width'] = u['$border-width'] || '1px';
  v['$border-radius'] = u['$border-radius'] || '.25rem';
  v['$font-weight-bold'] = u['$font-weight-bold'] || 'bold';
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
  return Object.assign({}, u, v);
};
makeTheme$2();

var makeTheme$3 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$enable-hover-media-query'] = allowFalseValue(u['$enable-hover-media-query'], false);
  v['$white'] = u['$white'] || '#fff';
  v['$blue'] = u['$blue'] || '#0275d8';
  v['$green'] = u['$green'] || '#5cb85c';
  v['$teal'] = u['$teal'] || '#5bc0de';
  v['$orange'] = u['$orange'] || '#f0ad4e';
  v['$red'] = u['$red'] || '#d9534f';
  v['$gray-light'] = u['$gray-light'] || '#636c72';
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$brand-primary'] = u['$brand-primary'] || v['$blue'];
  v['$brand-success'] = u['$brand-success'] || v['$green'];
  v['$brand-info'] = u['$brand-info'] || v['$teal'];
  v['$brand-warning'] = u['$brand-warning'] || v['$orange'];
  v['$brand-danger'] = u['$brand-danger'] || v['$red'];
  v['$brand-inverse'] = u['$brand-inverse'] || v['$gray-dark'];
  v['$border-radius'] = u['$border-radius'] || '.25rem';
  v['$font-weight-bold'] = u['$font-weight-bold'] || 'bold';
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
  return Object.assign({}, u, v);
};
makeTheme$3();

var unitUtils = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var UnitUtils = function UnitUtils() {
  var _this = this;
  _classCallCheck(this, UnitUtils);
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
exports.default = new UnitUtils();
module.exports = exports['default'];
});
var unitUtils$1 = unwrapExports(unitUtils);

var rmUnit = unitUtils$1.rmUnit;
var UNIT = unitUtils$1.UNIT;
var makeTheme$4 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$gray-light'] = u['$gray-light'] || '#636c72';
  v['$gray-lighter'] = u['$gray-lighter'] || '#eceeef';
  v['$spacer'] = u['$spacer'] || '1rem';
  v['$spacer-halved'] = u['$spacer-halved'] || rmUnit(v['$spacer'], UNIT.REM) / 2 + UNIT.REM;
  v['$font-size-base'] = u['$font-size-base'] || '1rem';
  v['$blockquote-small-color'] = u['$blockquote-small-color'] || v['$gray-light'];
  v['$blockquote-font-size'] = u['$blockquote-font-size'] || rmUnit(v['$font-size-base'], UNIT.REM) * 1.25 + UNIT.REM;
  v['$blockquote-border-color'] = u['$blockquote-border-color'] || v['$gray-lighter'];
  v['$blockquote-border-width'] = u['$blockquote-border-width'] || '.25rem';
  return Object.assign({}, u, v);
};
makeTheme$4();

var makeTheme$5 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$gray-light'] = u['$gray-light'] || '#636c72';
  v['$gray-lighter'] = u['$gray-lighter'] || '#eceeef';
  v['$border-radius'] = u['$border-radius'] || '.25rem';
  v['$spacer'] = u['$spacer'] || '1rem';
  v['$spacer-x'] = u['$spacer-x'] || v['$spacer'];
  v['$spacer-y'] = u['$spacer-y'] || v['$spacer'];
  v['$breadcrumb-padding-y'] = u['$breadcrumb-padding-y'] || '.75rem';
  v['$breadcrumb-padding-x'] = u['$breadcrumb-padding-x'] || '1rem';
  v['$breadcrumb-item-padding'] = u['$breadcrumb-item-padding'] || '.5rem';
  v['$breadcrumb-bg'] = u['$breadcrumb-bg'] || v['$gray-lighter'];
  v['$breadcrumb-divider-color'] = u['$breadcrumb-divider-color'] || v['$gray-light'];
  v['$breadcrumb-active-color'] = u['$breadcrumb-active-color'] || v['$gray-light'];
  v['$breadcrumb-divider'] = u['$breadcrumb-divider'] || '"/"';
  return Object.assign({}, u, v);
};
makeTheme$5();

var makeTheme$6 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$enable-shadows'] = allowFalseValue(u['$enable-shadows'], false);
  v['$enable-hover-media-query'] = allowFalseValue(u['$enable-hover-media-query'], true);
  v['$enable-transitions'] = allowFalseValue(u['$enable-transitions'], true);
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';
  v['$blue'] = u['$blue'] || '#0275d8';
  v['$green'] = u['$green'] || '#5cb85c';
  v['$teal'] = u['$teal'] || '#5bc0de';
  v['$orange'] = u['$orange'] || '#f0ad4e';
  v['$red'] = u['$red'] || '#d9534f';
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$gray-light'] = u['$gray-light'] || '#636c72';
  v['$brand-primary'] = u['$brand-primary'] || v['$blue'];
  v['$brand-success'] = u['$brand-success'] || v['$green'];
  v['$brand-info'] = u['$brand-info'] || v['$teal'];
  v['$brand-warning'] = u['$brand-warning'] || v['$orange'];
  v['$brand-danger'] = u['$brand-danger'] || v['$red'];
  v['$border-radius'] = u['$border-radius'] || '.25rem';
  v['$border-radius-lg'] = u['$border-radius-lg'] || '.3rem';
  v['$border-radius-sm'] = u['$border-radius-sm'] || '.2rem';
  v['$font-weight-normal'] = u['$font-weight-normal'] || 'normal';
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
  return Object.assign({}, u, v);
};
makeTheme$6();

var makeTheme$7 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$enable-shadows'] = allowFalseValue(u['$enable-shadows'], true);
  v['$black'] = u['$black'] || '#000';
  v['$border-radius-lg'] = u['$border-radius-lg'] || '.3rem';
  v['$border-radius-sm'] = u['$border-radius-sm'] || '.2rem';
  v['$font-size-lg'] = u['$font-size-lg'] || '1.25rem';
  v['$font-size-sm'] = u['$font-size-sm'] || '.875rem';
  v['$border-width'] = u['$border-width'] || '1px';
  v['$input-btn-border-width'] = u['$input-btn-border-width'] || v['$border-width'];
  v['$btn-padding-x'] = u['$btn-padding-x'] || '1rem';
  v['$btn-active-box-shadow'] = u['$btn-active-box-shadow'] || 'inset 0 3px 5px ' + color(v['$black']).alpha(0.125).toString();
  v['$btn-padding-x-lg'] = u['$btn-padding-x-lg'] || '1.5rem';
  v['$btn-padding-y-lg'] = u['$btn-padding-y-lg'] || '.75rem';
  v['$btn-padding-x-sm'] = u['$btn-padding-x-sm'] || '.5rem';
  v['$btn-padding-y-sm'] = u['$btn-padding-y-sm'] || '.25rem';
  v['$btn-border-radius-lg'] = u['$btn-border-radius-lg'] || v['$border-radius-lg'];
  v['$btn-border-radius-sm'] = u['$btn-border-radius-sm'] || v['$border-radius-sm'];
  return Object.assign({}, u, v);
};
makeTheme$7();

var makeTheme$8 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$gray-light'] = u['$gray-light'] || '#636c72';
  v['$table-cell-padding'] = u['$table-cell-padding'] || '.75rem';
  v['$text-muted'] = u['$text-muted'] || v['$gray-light'];
  return Object.assign({}, u, v);
};
makeTheme$8();

var process = { argv: [], env: {} };

var variables = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertAscending = assertAscending;
exports.assertStartAtZero = assertStartAtZero;
exports.comparable = comparable;
var _unitUtils2 = _interopRequireDefault(unitUtils);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function assertAscending(map, mapName) {
  var prevKey = void 0;
  var prevNum = void 0;
  var asserted = true;
  Object.keys(map).forEach(function (key) {
    var num = map[key];
    if (prevNum == null) {
    } else if (!comparable(_unitUtils2.default.rmUnit(prevNum), _unitUtils2.default.rmUnit(num))) {
      if (process.env.NODE !== 'test') {
        console.warn('Potentially invalid value for ' + mapName + ': This map must be in ascending order, but key \'' + key + '\' has value ' + num + ' whose unit makes it incomparable to ' + prevNum + ', the value of the previous key \'' + prevKey + '\' !');
      }
      asserted = false;
    } else if (_unitUtils2.default.rmUnit(prevNum) >= _unitUtils2.default.rmUnit(num)) {
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
  var firstValue = _unitUtils2.default.rmUnit(values[0]);
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
exports.default = {
  assertAscending: assertAscending,
  assertStartAtZero: assertStartAtZero,
  comparable: comparable
};
});
unwrapExports(variables);
var variables_1 = variables.assertAscending;
var variables_2 = variables.assertStartAtZero;

var detectUnit = unitUtils$1.detectUnit;
var rmUnit$1 = unitUtils$1.rmUnit;
var UNIT$1 = unitUtils$1.UNIT;
var makeTheme$9 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$enable-hover-media-query'] = allowFalseValue(u['$enable-hover-media-query'], false);
  v['$grid-breakpoints'] = u['$grid-breakpoints'] || {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  };
  variables_1(v['$grid-breakpoints'], '$grid-breakpoints');
  variables_2(v['$grid-breakpoints']);
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';
  v['$blue'] = u['$blue'] || '#0275d8';
  v['$green'] = u['$green'] || '#5cb85c';
  v['$teal'] = u['$teal'] || '#5bc0de';
  v['$orange'] = u['$orange'] || '#f0ad4e';
  v['$red'] = u['$red'] || '#d9534f';
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$gray-lightest'] = u['$gray-lightest'] || '#f7f7f9';
  v['$brand-primary'] = u['$brand-primary'] || v['$blue'];
  v['$brand-success'] = u['$brand-success'] || v['$green'];
  v['$brand-info'] = u['$brand-info'] || v['$teal'];
  v['$brand-warning'] = u['$brand-warning'] || v['$orange'];
  v['$brand-danger'] = u['$brand-danger'] || v['$red'];
  v['$brand-inverse'] = u['$brand-inverse'] || v['$gray-dark'];
  v['$border-radius'] = u['$border-radius'] || '.25rem';
  v['$grid-gutter-width-base'] = u['$grid-gutter-width-base'] || '30px';
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
  v['$btn-primary-bg'] = u['$btn-primary-bg'] || v['$brand-primary'];
  v['$btn-secondary-border'] = u['$btn-secondary-border'] || '#ccc';
  v['$btn-info-bg'] = u['$btn-info-bg'] || v['$brand-info'];
  v['$btn-success-bg'] = u['$btn-success-bg'] || v['$brand-success'];
  v['$btn-warning-bg'] = u['$btn-warning-bg'] || v['$brand-warning'];
  v['$btn-danger-bg'] = u['$btn-danger-bg'] || v['$brand-danger'];
  v['$card-margin-y-halved'] = u['$card-margin-y-halved'] || rmUnit$1(v['$card-spacer-y'], UNIT$1.REM) / 2 + UNIT$1.REM;
  v['$card-margin-x-halved'] = u['$card-margin-x-halved'] || rmUnit$1(v['$card-spacer-x'], UNIT$1.REM) / 2 + UNIT$1.REM;
  v['$card-columns-count-md'] = u['$card-columns-count-md'] || '2';
  v['$card-columns-gap-md'] = u['$card-columns-gap-md'] || '1rem';
  v['$card-columns-margin-md'] = u['$card-columns-margin-md'] || v['$card-spacer-y'];
  v['$card-columns-count-lg'] = u['$card-columns-count-lg'] || '2';
  v['$card-columns-gap-lg'] = u['$card-columns-gap-lg'] || '1.15rem';
  v['$card-columns-margin-lg'] = u['$card-columns-margin-lg'] || v['$card-spacer-y'];
  v['$card-columns-count-xl'] = u['$card-columns-count-xl'] || '3';
  v['$card-columns-gap-xl'] = u['$card-columns-gap-xl'] || '1.25rem';
  v['$card-columns-margin-xl'] = u['$card-columns-margin-xl'] || v['$card-spacer-y'];
  v['$card-columns-count-xxl'] = u['$card-columns-count-xxl'] || '4';
  v['$card-columns-gap-xxl'] = u['$card-columns-gap-xxl'] || '1.25rem';
  v['$card-columns-margin-xxl'] = u['$card-columns-margin-xxl'] || v['$card-spacer-y'];
  var detectedUnit = detectUnit(v['$grid-gutter-width-base']);
  v['$card-deck-margin'] = u['$card-deck-margin'] || rmUnit$1(v['$grid-gutter-width-base'], detectedUnit) / 2 + detectedUnit;
  return Object.assign({}, u, v);
};
makeTheme$9();

var detectUnit$1 = unitUtils$1.detectUnit;
var rmUnit$2 = unitUtils$1.rmUnit;
var makeTheme$10 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-hover-media-query'] = allowFalseValue(u['$enable-hover-media-query'], false);
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';
  v['$font-size-base'] = u['$font-size-base'] || '1rem';
  v['$font-weight-bold'] = u['$font-weight-bold'] || 'bold';
  v['$close-font-size'] = u['$close-font-size'] || rmUnit$2(v['$font-size-base']) * 1.5 + detectUnit$1(v['$font-size-base']);
  v['$close-font-weight'] = u['$close-font-weight'] || v['$font-weight-bold'];
  v['$close-color'] = u['$close-color'] || v['$black'];
  v['$close-text-shadow'] = u['$close-text-shadow'] || '0 1px 0 ' + v['$white'];
  return Object.assign({}, u, v);
};
makeTheme$10();

var makeTheme$11 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$border-radius'] = u['$border-radius'] || '.25rem';
  v['$font-family-monospace'] = u['$font-family-monospace'] || 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
  v['$pink'] = u['$pink'] || '#ff5b77';
  v['$gray-lightest'] = u['$gray-lightest'] || '#f7f7f9';
  v['$code-font-size'] = u['$code-font-size'] || '90%';
  v['$code-padding-x'] = u['$code-padding-x'] || '.4rem';
  v['$code-padding-y'] = u['$code-padding-y'] || '.2rem';
  v['$code-color'] = u['$code-color'] || v['$pink'];
  v['$code-bg'] = u['$code-bg'] || v['$gray-lightest'];
  return Object.assign({}, u, v);
};
makeTheme$11();

var makeTheme$12 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-grid-classes'] = allowFalseValue(u['$enable-grid-classes'], true);
  v['$grid-breakpoints'] = u['$grid-breakpoints'] || {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  };
  variables_1(v['$grid-breakpoints'], '$grid-breakpoints');
  variables_2(v['$grid-breakpoints']);
  v['$grid-columns'] = u['$grid-columns'] || '12';
  v['$grid-gutter-width-base'] = u['$grid-gutter-width-base'] || '30px';
  v['$grid-gutter-widths'] = u['$grid-gutter-widths'] || {
    xs: v['$grid-gutter-width-base'],
    sm: v['$grid-gutter-width-base'],
    md: v['$grid-gutter-width-base'],
    lg: v['$grid-gutter-width-base'],
    xl: v['$grid-gutter-width-base']
  };
  return Object.assign({}, u, v);
};
makeTheme$12();

var makeTheme$13 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$transition-collapse'] = u['$transition-collapse'] || 'height .35s ease';
  return Object.assign({}, u, v);
};
makeTheme$13();

var makeTheme$14 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-grid-classes'] = allowFalseValue(u['$enable-grid-classes'], true);
  v['$grid-gutter-width-base'] = u['$grid-gutter-width-base'] || '30px';
  v['$grid-gutter-widths'] = u['$grid-gutter-widths'] || {
    xs: v['$grid-gutter-width-base'],
    sm: v['$grid-gutter-width-base'],
    md: v['$grid-gutter-width-base'],
    lg: v['$grid-gutter-width-base'],
    xl: v['$grid-gutter-width-base']
  };
  v['$container-max-widths'] = u['$container-max-widths'] || {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px'
  };
  variables_1(v['$container-max-widths'], '$container-max-widths');
  return Object.assign({}, u, v);
};
makeTheme$14();

var makeTheme$15 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-grid-classes'] = allowFalseValue(u['$enable-grid-classes'], true);
  v['$grid-gutter-width-base'] = u['$grid-gutter-width-base'] || '30px';
  v['$grid-gutter-widths'] = u['$grid-gutter-widths'] || {
    xs: v['$grid-gutter-width-base'],
    sm: v['$grid-gutter-width-base'],
    md: v['$grid-gutter-width-base'],
    lg: v['$grid-gutter-width-base'],
    xl: v['$grid-gutter-width-base']
  };
  return Object.assign({}, u, v);
};
makeTheme$15();

var makeTheme$16 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-grid-classes'] = allowFalseValue(u['$enable-grid-classes'], true);
  v['$grid-columns'] = u['$grid-columns'] || '12';
  v['$grid-gutter-width-base'] = u['$grid-gutter-width-base'] || '30px';
  v['$grid-gutter-widths'] = u['$grid-gutter-widths'] || {
    xs: v['$grid-gutter-width-base'],
    sm: v['$grid-gutter-width-base'],
    md: v['$grid-gutter-width-base'],
    lg: v['$grid-gutter-width-base'],
    xl: v['$grid-gutter-width-base']
  };
  v['$grid-breakpoints'] = u['$grid-breakpoints'] || {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  };
  variables_1(v['$grid-breakpoints'], '$grid-breakpoints');
  variables_2(v['$grid-breakpoints']);
  return Object.assign({}, u, v);
};
makeTheme$16();

var makeTheme$17 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-grid-classes'] = allowFalseValue(u['$enable-grid-classes'], true);
  v['$grid-gutter-width-base'] = u['$grid-gutter-width-base'] || '30px';
  v['$grid-gutter-widths'] = u['$grid-gutter-widths'] || {
    xs: v['$grid-gutter-width-base'],
    sm: v['$grid-gutter-width-base'],
    md: v['$grid-gutter-width-base'],
    lg: v['$grid-gutter-width-base'],
    xl: v['$grid-gutter-width-base']
  };
  return Object.assign({}, u, v);
};
makeTheme$17();

var makeTheme$18 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-rounded'] = u['$enable-rounded'] || true;
  v['$enable-shadows'] = u['$enable-shadows'] || true;
  v['$white'] = u['$white'] || '#fff';
  v['$drawer-bg'] = u['$drawer-bg'] || v['$white'];
  v['$drawer-transition'] = u['$drawer-transition'] || 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms';
  v['$drawer-box-shadow'] = u['$drawer-box-shadow'] || 'rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px';
  v['$drawer-border-radius'] = u['$drawer-border-radius'] || '0px';
  v['$drawer-zindex'] = u['$drawer-zindex'] || '1030';
  v['$drawer-docked-width'] = u['$drawer-docked-width'] || '55px';
  return Object.assign({}, u, v);
};
makeTheme$18();

var rmUnit$3 = unitUtils$1.rmUnit;
var UNIT$2 = unitUtils$1.UNIT;
var makeTheme$19 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$enable-shadows'] = allowFalseValue(u['$enable-shadows'], false);
  v['$enable-gradients'] = allowFalseValue(u['$enable-gradients'], false);
  v['$enable-hover-media-query'] = allowFalseValue(u['$enable-hover-media-query'], false);
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';
  v['$blue'] = u['$blue'] || '#0275d8';
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$gray-light'] = u['$gray-light'] || '#636c72';
  v['$gray-lighter'] = u['$gray-lighter'] || '#eceeef';
  v['$gray-lightest'] = u['$gray-lightest'] || '#f7f7f9';
  v['$brand-primary'] = u['$brand-primary'] || v['$blue'];
  v['$spacer'] = u['$spacer'] || '1rem';
  v['$spacer-y'] = u['$spacer-y'] || v['$spacer'];
  v['$border-width'] = u['$border-width'] || '1px';
  v['$font-size-sm'] = u['$font-size-sm'] || '.875rem';
  v['$font-weight-normal'] = u['$font-weight-normal'] || 'normal';
  v['$font-size-base'] = u['$font-size-base'] || '1rem';
  v['$font-size-lg'] = u['$font-size-lg'] || '1.25rem';
  v['$zindex-dropdown-backdrop'] = u['$zindex-dropdown-backdrop'] || '990';
  v['$zindex-dropdown'] = u['$zindex-dropdown'] || '1000';
  v['$component-active-color'] = u['$component-active-color'] || v['$white'];
  v['$component-active-bg'] = u['$component-active-bg'] || v['$brand-primary'];
  v['$caret-width'] = u['$caret-width'] || '.3em';
  v['$line-height-lg'] = u['$line-height-lg'] || '1.6';
  v['$border-radius-lg'] = u['$border-radius-lg'] || '.3rem';
  v['$border-radius-sm'] = u['$border-radius-sm'] || '.2rem';
  v['$input-padding-y-lg'] = u['$input-padding-y-lg'] || '.75rem';
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
  v['$input-btn-border-width'] = u['$input-btn-border-width'] || v['$border-width'];
  v['$cursor-disabled'] = u['$cursor-disabled'] || 'not-allowed';
  v['$btn-padding-x'] = u['$btn-padding-x'] || '1rem';
  v['$btn-active-box-shadow'] = u['$btn-active-box-shadow'] || 'inset 0 3px 5px ' + color(v['$black']).alpha(0.125).toString();
  v['$btn-padding-x-lg'] = u['$btn-padding-x-lg'] || '1.5rem';
  v['$btn-padding-y-lg'] = u['$btn-padding-y-lg'] || '.75rem';
  v['$btn-border-radius-lg'] = u['$btn-border-radius-lg'] || v['$border-radius-lg'];
  v['$btn-border-radius-sm'] = u['$btn-border-radius-sm'] || v['$border-radius-sm'];
  v['$btn-padding-x-sm'] = u['$btn-padding-x-sm'] || '.5rem';
  v['$btn-padding-y-sm'] = u['$btn-padding-y-sm'] || '.25rem';
  v['$input-height-lg'] = u['$input-height-lg'] || rmUnit$3(v['$font-size-lg'], UNIT$2.REM) * v['$line-height-lg'] + rmUnit$3(v['$input-padding-y-lg'], UNIT$2.REM) * 2 + UNIT$2.REM;
  return Object.assign({}, u, v);
};
makeTheme$19();

var makeTheme$20 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-grid-classes'] = allowFalseValue(u['$enable-grid-classes'], true);
  v['$grid-breakpoints'] = u['$grid-breakpoints'] || {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  };
  variables_1(v['$grid-breakpoints'], '$grid-breakpoints');
  variables_2(v['$grid-breakpoints']);
  v['$grid-columns'] = u['$grid-columns'] || '12';
  v['$grid-gutter-width-base'] = u['$grid-gutter-width-base'] || '30px';
  v['$grid-gutter-widths'] = u['$grid-gutter-widths'] || {
    xs: v['$grid-gutter-width-base'],
    sm: v['$grid-gutter-width-base'],
    md: v['$grid-gutter-width-base'],
    lg: v['$grid-gutter-width-base'],
    xl: v['$grid-gutter-width-base']
  };
  v['$font-weight-bold'] = u['$font-weight-bold'] || 'bold';
  v['$dt-font-weight'] = u['$dt-font-weight'] || v['$font-weight-bold'];
  return Object.assign({}, u, v);
};
makeTheme$20();

var makeTheme$21 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-grid-classes'] = allowFalseValue(u['$enable-grid-classes'], true);
  v['$grid-gutter-width-base'] = u['$grid-gutter-width-base'] || '30px';
  v['$grid-gutter-widths'] = u['$grid-gutter-widths'] || {
    xs: v['$grid-gutter-width-base'],
    sm: v['$grid-gutter-width-base'],
    md: v['$grid-gutter-width-base'],
    lg: v['$grid-gutter-width-base'],
    xl: v['$grid-gutter-width-base']
  };
  return Object.assign({}, u, v);
};
makeTheme$21();

var rmUnit$4 = unitUtils$1.rmUnit;
var UNIT$3 = unitUtils$1.UNIT;
var makeTheme$22 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$enable-transitions'] = allowFalseValue(u['$enable-transitions'], true);
  v['$enable-shadows'] = allowFalseValue(u['$enable-shadows'], false);
  v['$enable-grid-classes'] = allowFalseValue(u['$enable-grid-classes'], true);
  v['$white'] = u['$white'] || '#fff';
  v['$red'] = u['$red'] || '#d9534f';
  v['$orange'] = u['$orange'] || '#f0ad4e';
  v['$green'] = u['$green'] || '#5cb85c';
  v['$blue'] = u['$blue'] || '#0275d8';
  v['$teal'] = u['$teal'] || '#5bc0de';
  v['$black'] = u['$black'] || '#000';
  v['$brand-primary'] = u['$brand-primary'] || v['$blue'];
  v['$brand-success'] = u['$brand-success'] || v['$green'];
  v['$brand-info'] = u['$brand-info'] || v['$teal'];
  v['$brand-warning'] = u['$brand-warning'] || v['$orange'];
  v['$brand-danger'] = u['$brand-danger'] || v['$red'];
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$gray'] = u['$gray'] || '#464a4c';
  v['$gray-light'] = u['$gray-light'] || '#636c72';
  v['$gray-lighter'] = u['$gray-lighter'] || '#eceeef';
  v['$gray-lightest'] = u['$gray-lightest'] || '#f7f7f9';
  v['$border-width'] = u['$border-width'] || '1px';
  v['$spacer'] = u['$spacer'] || '1rem';
  v['$spacer-y'] = u['$spacer-y'] || v['$spacer'];
  v['$grid-breakpoints'] = u['$grid-breakpoints'] || {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  };
  variables_1(v['$grid-breakpoints'], '$grid-breakpoints');
  variables_2(v['$grid-breakpoints']);
  v['$grid-gutter-width-base'] = u['$grid-gutter-width-base'] || '30px';
  v['$grid-gutter-widths'] = u['$grid-gutter-widths'] || {
    xs: v['$grid-gutter-width-base'],
    sm: v['$grid-gutter-width-base'],
    md: v['$grid-gutter-width-base'],
    lg: v['$grid-gutter-width-base'],
    xl: v['$grid-gutter-width-base']
  };
  v['$font-size-base'] = u['$font-size-base'] || '1rem';
  v['$font-size-lg'] = u['$font-size-lg'] || '1.25rem';
  v['$font-size-sm'] = u['$font-size-sm'] || '.875rem';
  v['$font-size-xs'] = u['$font-size-xs'] || '.75rem';
  v['$text-muted'] = u['$text-muted'] || v['$gray-light'];
  v['$line-height-base'] = u['$line-height-base'] || '1.5';
  v['$line-height-lg'] = u['$line-height-lg'] || '1.6';
  v['$line-height-sm'] = u['$line-height-sm'] || '1.3';
  v['$body-bg'] = u['$body-bg'] || v['$white'];
  v['$border-radius'] = u['$border-radius'] || '.25rem';
  v['$border-radius-lg'] = u['$border-radius-lg'] || '.3rem';
  v['$border-radius-sm'] = u['$border-radius-sm'] || '.2rem';
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
  v['$input-height'] = u['$input-height'] || rmUnit$4(v['$font-size-base'], UNIT$3.REM) * v['$line-height-base'] + rmUnit$4(v['$input-padding-y'], UNIT$3.REM) * 2 + UNIT$3.REM;
  v['$input-height-sm'] = u['$input-height-sm'] || rmUnit$4(v['$font-size-sm'], UNIT$3.REM) * v['$line-height-sm'] + rmUnit$4(v['$input-padding-y-sm'], UNIT$3.REM) * 2 + UNIT$3.REM;
  v['$input-height-lg'] = u['$input-height-lg'] || rmUnit$4(v['$font-size-lg'], UNIT$3.REM) * v['$line-height-lg'] + rmUnit$4(v['$input-padding-y-lg'], UNIT$3.REM) * 2 + UNIT$3.REM;
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
  return Object.assign({}, u, v);
};
makeTheme$22();

var rmUnit$5 = unitUtils$1.rmUnit;
var UNIT$4 = unitUtils$1.UNIT;
var makeTheme$23 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$body-color'] = u['$body-color'] || v['$gray-dark'];
  v['$spacer'] = u['$spacer'] || '1rem';
  v['$font-size-h1'] = u['$font-size-h1'] || '2.5rem';
  v['$headings-margin-bottom'] = u['$headings-margin-bottom'] || rmUnit$5(v['$spacer'], UNIT$4.REM) / 2 + UNIT$4.REM;
  v['$headings-font-family'] = u['$headings-font-family'] || 'inherit';
  v['$headings-font-weight'] = u['$headings-font-weight'] || '500';
  v['$headings-line-height'] = u['$headings-line-height'] || '1.1';
  v['$headings-color'] = u['$headings-color'] || 'inherit';
  v['$display1-size'] = u['$display1-size'] || '6rem';
  v['$display2-size'] = u['$display2-size'] || '5.5rem';
  v['$display3-size'] = u['$display3-size'] || '4.5rem';
  v['$display4-size'] = u['$display4-size'] || '3.5rem';
  v['$display1-weight'] = u['$display1-weight'] || '300';
  v['$display2-weight'] = u['$display2-weight'] || '300';
  v['$display3-weight'] = u['$display3-weight'] || '300';
  v['$display4-weight'] = u['$display4-weight'] || '300';
  v['$lead-font-size'] = u['$lead-font-size'] || '1.25rem';
  v['$lead-font-weight'] = u['$lead-font-weight'] || '300';
  return Object.assign({}, u, v);
};
makeTheme$23();

var rmUnit$6 = unitUtils$1.rmUnit;
var UNIT$5 = unitUtils$1.UNIT;
var makeTheme$24 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$body-color'] = u['$body-color'] || v['$gray-dark'];
  v['$spacer'] = u['$spacer'] || '1rem';
  v['$font-size-h2'] = u['$font-size-h2'] || '2rem';
  v['$headings-margin-bottom'] = u['$headings-margin-bottom'] || rmUnit$6(v['$spacer'], UNIT$5.REM) / 2 + UNIT$5.REM;
  v['$headings-font-family'] = u['$headings-font-family'] || 'inherit';
  v['$headings-font-weight'] = u['$headings-font-weight'] || '500';
  v['$headings-line-height'] = u['$headings-line-height'] || '1.1';
  v['$headings-color'] = u['$headings-color'] || 'inherit';
  v['$display1-size'] = u['$display1-size'] || '6rem';
  v['$display2-size'] = u['$display2-size'] || '5.5rem';
  v['$display3-size'] = u['$display3-size'] || '4.5rem';
  v['$display4-size'] = u['$display4-size'] || '3.5rem';
  v['$display1-weight'] = u['$display1-weight'] || '300';
  v['$display2-weight'] = u['$display2-weight'] || '300';
  v['$display3-weight'] = u['$display3-weight'] || '300';
  v['$display4-weight'] = u['$display4-weight'] || '300';
  v['$lead-font-size'] = u['$lead-font-size'] || '1.25rem';
  v['$lead-font-weight'] = u['$lead-font-weight'] || '300';
  return Object.assign({}, u, v);
};
makeTheme$24();

var rmUnit$7 = unitUtils$1.rmUnit;
var UNIT$6 = unitUtils$1.UNIT;
var makeTheme$25 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$body-color'] = u['$body-color'] || v['$gray-dark'];
  v['$spacer'] = u['$spacer'] || '1rem';
  v['$font-size-h3'] = u['$font-size-h3'] || '1.75rem';
  v['$headings-margin-bottom'] = u['$headings-margin-bottom'] || rmUnit$7(v['$spacer'], UNIT$6.REM) / 2 + UNIT$6.REM;
  v['$headings-font-family'] = u['$headings-font-family'] || 'inherit';
  v['$headings-font-weight'] = u['$headings-font-weight'] || '500';
  v['$headings-line-height'] = u['$headings-line-height'] || '1.1';
  v['$headings-color'] = u['$headings-color'] || 'inherit';
  v['$display1-size'] = u['$display1-size'] || '6rem';
  v['$display2-size'] = u['$display2-size'] || '5.5rem';
  v['$display3-size'] = u['$display3-size'] || '4.5rem';
  v['$display4-size'] = u['$display4-size'] || '3.5rem';
  v['$display1-weight'] = u['$display1-weight'] || '300';
  v['$display2-weight'] = u['$display2-weight'] || '300';
  v['$display3-weight'] = u['$display3-weight'] || '300';
  v['$display4-weight'] = u['$display4-weight'] || '300';
  v['$lead-font-size'] = u['$lead-font-size'] || '1.25rem';
  v['$lead-font-weight'] = u['$lead-font-weight'] || '300';
  return Object.assign({}, u, v);
};
makeTheme$25();

var rmUnit$8 = unitUtils$1.rmUnit;
var UNIT$7 = unitUtils$1.UNIT;
var makeTheme$26 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$body-color'] = u['$body-color'] || v['$gray-dark'];
  v['$spacer'] = u['$spacer'] || '1rem';
  v['$font-size-h4'] = u['$font-size-h4'] || '1.5rem';
  v['$headings-margin-bottom'] = u['$headings-margin-bottom'] || rmUnit$8(v['$spacer'], UNIT$7.REM) / 2 + UNIT$7.REM;
  v['$headings-font-family'] = u['$headings-font-family'] || 'inherit';
  v['$headings-font-weight'] = u['$headings-font-weight'] || '500';
  v['$headings-line-height'] = u['$headings-line-height'] || '1.1';
  v['$headings-color'] = u['$headings-color'] || 'inherit';
  v['$display1-size'] = u['$display1-size'] || '6rem';
  v['$display2-size'] = u['$display2-size'] || '5.5rem';
  v['$display3-size'] = u['$display3-size'] || '4.5rem';
  v['$display4-size'] = u['$display4-size'] || '3.5rem';
  v['$display1-weight'] = u['$display1-weight'] || '300';
  v['$display2-weight'] = u['$display2-weight'] || '300';
  v['$display3-weight'] = u['$display3-weight'] || '300';
  v['$display4-weight'] = u['$display4-weight'] || '300';
  v['$lead-font-size'] = u['$lead-font-size'] || '1.25rem';
  v['$lead-font-weight'] = u['$lead-font-weight'] || '300';
  return Object.assign({}, u, v);
};
makeTheme$26();

var rmUnit$9 = unitUtils$1.rmUnit;
var UNIT$8 = unitUtils$1.UNIT;
var makeTheme$27 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$body-color'] = u['$body-color'] || v['$gray-dark'];
  v['$spacer'] = u['$spacer'] || '1rem';
  v['$font-size-h5'] = u['$font-size-h5'] || '1.25rem';
  v['$headings-margin-bottom'] = u['$headings-margin-bottom'] || rmUnit$9(v['$spacer'], UNIT$8.REM) / 2 + UNIT$8.REM;
  v['$headings-font-family'] = u['$headings-font-family'] || 'inherit';
  v['$headings-font-weight'] = u['$headings-font-weight'] || '500';
  v['$headings-line-height'] = u['$headings-line-height'] || '1.1';
  v['$headings-color'] = u['$headings-color'] || 'inherit';
  v['$display1-size'] = u['$display1-size'] || '6rem';
  v['$display2-size'] = u['$display2-size'] || '5.5rem';
  v['$display3-size'] = u['$display3-size'] || '4.5rem';
  v['$display4-size'] = u['$display4-size'] || '3.5rem';
  v['$display1-weight'] = u['$display1-weight'] || '300';
  v['$display2-weight'] = u['$display2-weight'] || '300';
  v['$display3-weight'] = u['$display3-weight'] || '300';
  v['$display4-weight'] = u['$display4-weight'] || '300';
  v['$lead-font-size'] = u['$lead-font-size'] || '1.25rem';
  v['$lead-font-weight'] = u['$lead-font-weight'] || '300';
  return Object.assign({}, u, v);
};
makeTheme$27();

var rmUnit$10 = unitUtils$1.rmUnit;
var UNIT$9 = unitUtils$1.UNIT;
var makeTheme$28 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$body-color'] = u['$body-color'] || v['$gray-dark'];
  v['$spacer'] = u['$spacer'] || '1rem';
  v['$font-size-h6'] = u['$font-size-h6'] || '1rem';
  v['$headings-margin-bottom'] = u['$headings-margin-bottom'] || rmUnit$10(v['$spacer'], UNIT$9.REM) / 2 + UNIT$9.REM;
  v['$headings-font-family'] = u['$headings-font-family'] || 'inherit';
  v['$headings-font-weight'] = u['$headings-font-weight'] || '500';
  v['$headings-line-height'] = u['$headings-line-height'] || '1.1';
  v['$headings-color'] = u['$headings-color'] || 'inherit';
  v['$display1-size'] = u['$display1-size'] || '6rem';
  v['$display2-size'] = u['$display2-size'] || '5.5rem';
  v['$display3-size'] = u['$display3-size'] || '4.5rem';
  v['$display4-size'] = u['$display4-size'] || '3.5rem';
  v['$display1-weight'] = u['$display1-weight'] || '300';
  v['$display2-weight'] = u['$display2-weight'] || '300';
  v['$display3-weight'] = u['$display3-weight'] || '300';
  v['$display4-weight'] = u['$display4-weight'] || '300';
  v['$lead-font-size'] = u['$lead-font-size'] || '1.25rem';
  v['$lead-font-weight'] = u['$lead-font-weight'] || '300';
  return Object.assign({}, u, v);
};
makeTheme$28();

var rmUnit$11 = unitUtils$1.rmUnit;
var UNIT$10 = unitUtils$1.UNIT;
var makeTheme$29 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$enable-hover-media-query'] = allowFalseValue(u['$enable-hover-media-query'], false);
  v['$grid-breakpoints'] = u['$grid-breakpoints'] || {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  };
  variables_1(v['$grid-breakpoints'], '$grid-breakpoints');
  variables_2(v['$grid-breakpoints']);
  v['$border-width'] = u['$border-width'] || '1px';
  v['$spacer'] = u['$spacer'] || '1rem';
  v['$spacer-halved'] = u['$spacer-halved'] || rmUnit$11(v['$spacer'], UNIT$10.REM) / 2 + UNIT$10.REM;
  v['$font-size-lg'] = u['$font-size-lg'] || '1.25rem';
  v['$border-radius'] = u['$border-radius'] || '.25rem';
  v['$navbar-padding-x'] = u['$navbar-padding-x'] || v['$spacer'];
  v['$navbar-padding-y'] = u['$navbar-padding-y'] || v['$spacer-halved'];
  v['$zindex-navbar'] = u['$zindex-navbar'] || '1000';
  v['$zindex-navbar-fixed'] = u['$zindex-navbar-fixed'] || '1030';
  v['$zindex-navbar-sticky'] = u['$zindex-navbar-sticky'] || '1030';
  v['$navbar-brand-padding-y'] = u['$navbar-brand-padding-y'] || '.25rem';
  v['$navbar-divider-padding-y'] = u['$navbar-brand-padding-y'] || '.425rem';
  v['$navbar-toggler-padding-y'] = u['$navbar-toggler-padding-y'] || '.25rem';
  v['$navbar-toggler-padding-x'] = u['$navbar-toggler-padding-x'] || '.75rem';
  v['$navbar-toggler-font-size'] = u['$navbar-toggler-font-size'] || '1.25rem';
  v['$navbar-toggler-border-radius'] = u['$navbar-toggler-border-radius'] || '.25rem';
  v['$navbar-light-active-color'] = u['$navbar-light-active-color'] || 'rgba(0, 0, 0, 0.9)';
  v['$navbar-light-color'] = u['$navbar-light-color'] || 'rgba(0, 0, 0, 0.5)';
  v['$navbar-light-hover-color'] = u['$navbar-light-hover-color'] || 'rgba(0, 0, 0, 0.7)';
  v['$navbar-light-toggler-border'] = u['$navbar-light-toggler-border'] || 'rgba(0, 0, 0, 0.1)';
  v['$navbar-light-disabled-color'] = u['$navbar-light-disabled-color'] || 'rgba(0, 0, 0, 0.3)';
  v['$navbar-light-toggler-bg'] = u['$navbar-light-toggler-bg'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(0, 0, 0, 0.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')';
  v['$navbar-inverse-active-color'] = u['$navbar-inverse-active-color'] || 'rgb(255, 255, 255)';
  v['$navbar-inverse-color'] = u['$navbar-inverse-color'] || 'rgba(255, 255, 255, 0.5)';
  v['$navbar-inverse-hover-color'] = u['$navbar-inverse-hover-color'] || 'rgba(255, 255, 255, 0.75)';
  v['$navbar-inverse-toggler-border'] = u['$navbar-inverse-toggler-border'] || 'rgba(255, 255, 255, 0.1)';
  v['$navbar-inverse-toggler-bg'] = u['$navbar-inverse-toggler-bg'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(255, 255, 255, 0.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')';
  v['$navbar-inverse-disabled-color'] = u['$navbar-inverse-disabled-color'] || 'rgba(255, 255, 255, 0.25)';
  return Object.assign({}, u, v);
};
makeTheme$29();

var makeTheme$30 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$black'] = u['$black'] || '#000';
  v['$spacer'] = u['$spacer'] || '1rem';
  v['$spacer-y'] = u['$spacer-y'] || v['$spacer'];
  v['$border-width'] = u['$border-width'] || '1px';
  v['$hr-border-width'] = u['$hr-border-width'] || v['$border-width'];
  v['$hr-border-color'] = u['$hr-border-color'] || color(v['$black']).alpha(0.1).toString();
  return Object.assign({}, u, v);
};
makeTheme$30();

var rmUnit$12 = unitUtils$1.rmUnit;
var UNIT$11 = unitUtils$1.UNIT;
var makeTheme$31 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$enable-transitions'] = allowFalseValue(u['$enable-transitions'], true);
  v['$enable-shadows'] = allowFalseValue(u['$enable-shadows'], false);
  v['$white'] = u['$white'] || '#fff';
  v['$gray-light'] = u['$gray-light'] || '#636c72';
  v['$body-bg'] = u['$body-bg'] || v['$white'];
  v['$spacer'] = u['$spacer'] || '1rem';
  v['$spacer-halved'] = u['$spacer-halved'] || rmUnit$12(v['$spacer'], UNIT$11.REM) / 2 + UNIT$11.REM;
  v['$border-width'] = u['$border-width'] || '1px';
  v['$border-radius'] = u['$border-radius'] || '.25rem';
  v['$thumbnail-padding'] = u['$thumbnail-padding'] || '.25rem';
  v['$thumbnail-bg'] = u['$thumbnail-bg'] || v['$body-bg'];
  v['$thumbnail-border-width'] = u['$thumbnail-border-width'] || v['$border-width'];
  v['$thumbnail-border-color'] = u['$thumbnail-border-color'] || '#ddd';
  v['$thumbnail-border-radius'] = u['$thumbnail-border-radius'] || v['$border-radius'];
  v['$thumbnail-box-shadow'] = u['$thumbnail-box-shadow'] || '0 1px 2px ' + color(v['$black']).alpha(0.75).toString();
  v['$thumbnail-transition'] = u['$thumbnail-transition'] || 'all .2s ease-in-out';
  v['$figure-caption-font-size'] = u['$figure-caption-font-size'] || '90%';
  v['$figure-caption-color'] = u['$figure-caption-color'] || v['$gray-light'];
  return Object.assign({}, u, v);
};
makeTheme$31();

var makeTheme$32 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$enable-shadows'] = allowFalseValue(u['$enable-shadows'], false);
  v['$enable-hover-media-query'] = allowFalseValue(u['$enable-hover-media-query'], false);
  v['$enable-transitions'] = allowFalseValue(u['$enable-transitions'], true);
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';
  v['$blue'] = u['$blue'] || '#0275d8';
  v['$green'] = u['$green'] || '#5cb85c';
  v['$teal'] = u['$teal'] || '#5bc0de';
  v['$orange'] = u['$orange'] || '#f0ad4e';
  v['$red'] = u['$red'] || '#d9534f';
  v['$brand-primary'] = u['$brand-primary'] || v['$blue'];
  v['$brand-success'] = u['$brand-success'] || v['$green'];
  v['$brand-info'] = u['$brand-info'] || v['$teal'];
  v['$brand-warning'] = u['$brand-warning'] || v['$orange'];
  v['$brand-danger'] = u['$brand-danger'] || v['$red'];
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$gray-light'] = u['$gray-light'] || '#636c72';
  v['$border-width'] = u['$border-width'] || '1px';
  v['$border-radius'] = u['$border-radius'] || '.25rem';
  v['$font-weight-normal'] = u['$font-weight-normal'] || 'normal';
  v['$font-size-base'] = u['$font-size-base'] || '1rem';
  v['$font-size-lg'] = u['$font-size-lg'] || '1.25rem';
  v['$font-size-sm'] = u['$font-size-sm'] || '.875rem';
  v['$font-size-xs'] = u['$font-size-xs'] || '.75rem';
  v['$btn-padding-x'] = u['$btn-padding-x'] || '1rem';
  v['$btn-padding-y'] = u['$btn-padding-y'] || '.5rem';
  v['$btn-line-height'] = u['$btn-line-height'] || '1.25';
  v['$btn-font-weight'] = u['$btn-font-weight'] || v['$font-weight-normal'];
  v['$btn-transition'] = u['$btn-transition'] || 'all .2s ease-in-out';
  v['$btn-box-shadow'] = u['$btn-box-shadow'] || 'inset 0 1px 0 ' + color(v['$white']).alpha(0.15).toString() + ', 0 1px 1px ' + color(v['$black']).alpha(0.075).toString();
  v['$btn-block-spacing-y'] = u['$btn-block-spacing-y'] || '.5rem';
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
  v['$btn-padding-x-lg'] = u['$btn-padding-x-lg'] || '1.5rem';
  v['$btn-padding-y-lg'] = u['$btn-padding-y-lg'] || '.75rem';
  v['$btn-padding-x-sm'] = u['$btn-padding-x-sm'] || '.5rem';
  v['$btn-padding-y-sm'] = u['$btn-padding-y-sm'] || '.25rem';
  v['$btn-border-radius'] = u['$btn-border-radius'] || v['$border-radius'];
  v['$btn-border-radius-lg'] = u['$btn-border-radius-lg'] || v['$border-radius-lg'];
  v['$btn-border-radius-sm'] = u['$btn-border-radius-sm'] || v['$border-radius-sm'];
  v['$input-btn-border-width'] = u['$input-btn-border-width'] || v['$border-width'];
  v['$link-color'] = u['$link-color'] || v['$brand-primary'];
  v['$link-hover-color'] = u['$link-hover-color'] || color(v['$link-color']).darken(0.35).toString();
  v['$link-hover-decoration'] = u['$link-hover-decoration'] || 'underline';
  v['$cursor-disabled'] = u['$cursor-disabled'] || 'not-allowed';
  return Object.assign({}, u, v);
};
makeTheme$32();

var rmUnit$13 = unitUtils$1.rmUnit;
var UNIT$12 = unitUtils$1.UNIT;
var makeTheme$33 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$enable-hover-media-query'] = allowFalseValue(u['$enable-hover-media-query'], false);
  v['$enable-transitions'] = allowFalseValue(u['$enable-transitions'], true);
  v['$enable-shadows'] = allowFalseValue(u['$enable-shadows'], false);
  v['$border-width'] = u['$border-width'] || '1px';
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';
  v['$blue'] = u['$blue'] || '#0275d8';
  v['$gray'] = u['$gray'] || '#464a4c';
  v['$gray-light'] = u['$gray-light'] || '#636c72';
  v['$gray-lighter'] = u['$gray-lighter'] || '#eceeef';
  v['$brand-primary'] = u['$brand-primary'] || v['$blue'];
  v['$font-size-base'] = u['$font-size-base'] || '1rem';
  v['$font-size-lg'] = u['$font-size-lg'] || '1.25rem';
  v['$font-size-sm'] = u['$font-size-sm'] || '.875rem';
  v['$font-size-xs'] = u['$font-size-xs'] || '.75rem';
  v['$line-height-base'] = u['$line-height-base'] || '1.5';
  v['$border-radius'] = u['$border-radius'] || '.25rem';
  v['$border-radius-lg'] = u['$border-radius-lg'] || '.3rem';
  v['$border-radius-sm'] = u['$border-radius-sm'] || '.2rem';
  v['$input-padding-x'] = u['$input-padding-x'] || '.75rem';
  v['$input-padding-y'] = u['$input-padding-y'] || '.5rem';
  v['$input-bg'] = u['$input-bg'] || v['$white'];
  v['$input-bg-disabled'] = u['$input-bg-disabled'] || v['$gray-lighter'];
  v['$input-padding-x-lg'] = u['$input-padding-x-lg'] || '1.5rem';
  v['$input-padding-y-lg'] = u['$input-padding-y-lg'] || '.75rem';
  v['$input-line-height'] = u['$input-line-height'] || '1.25';
  v['$input-height'] = u['$input-height'] || rmUnit$13(v['$font-size-base'], UNIT$12.REM) * v['$line-height-base'] + rmUnit$13(v['$input-padding-y'], UNIT$12.REM) * 2 + UNIT$12.REM;
  v['$input-box-shadow'] = u['$input-box-shadow'] || 'inset 0 1px 1px ' + color(v['$black']).alpha(0.075).toString();
  v['$input-btn-border-width'] = u['$input-btn-border-width'] || v['$border-width'];
  v['$input-group-addon-bg'] = u['$input-group-addon-bg'] || v['$gray-lighter'];
  v['$input-border-color'] = u['$input-border-color'] || color(v['$black']).alpha(0.15).toString();
  v['$input-border-focus'] = u['$input-border-focus'] || color(v['$brand-primary']).lighten(0.25).toString();
  v['$input-box-shadow-focus'] = u['$input-box-shadow-focus'] || v['$input-box-shadow'] + ', 0 0 8px rgba(' + v['$input-border-focus'] + ',.6)';
  v['$input-color'] = u['$input-color'] || v['$gray'];
  v['$input-group-addon-border-color'] = u['$input-group-addon-border-color'] || v['$input-border-color'];
  v['$input-padding-x-sm'] = u['$input-padding-x-sm'] || '.5rem';
  v['$input-padding-y-sm'] = u['$input-padding-y-sm'] || '.25rem';
  v['$input-color-placeholder'] = u['$input-color-placeholder'] || v['$gray-light'];
  v['$input-border-radius-lg'] = u['$input-border-radius-lg'] || v['$border-radius-lg'];
  v['$input-border-radius-sm'] = u['$input-border-radius-sm'] || v['$border-radius-sm'];
  v['$input-border-radius'] = u['$input-border-radius'] || v['$border-radius'];
  v['$input-transition'] = u['$input-transition'] || 'border-color ease-in-out .15s, box-shadow ease-in-out .15s';
  v['$input-color-focus'] = u['$input-color-focus'] || v['$input-color'];
  v['$input-bg-focus'] = u['$input-bg-focus'] || v['$input-bg'];
  v['$cursor-disabled'] = u['$cursor-disabled'] || 'not-allowed';
  return Object.assign({}, u, v);
};
makeTheme$33();

var makeTheme$34 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$gray-lighter'] = u['$gray-lighter'] || '#eceeef';
  v['$grid-breakpoints'] = u['$grid-breakpoints'] || {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  };
  variables_1(v['$grid-breakpoints'], '$grid-breakpoints');
  variables_2(v['$grid-breakpoints']);
  v['$border-radius-lg'] = u['$border-radius-lg'] || '.3rem';
  v['$jumbotron-padding'] = u['$jumbotron-padding'] || '2rem';
  v['$jumbotron-bg'] = u['$jumbotron-bg'] || v['$gray-lighter'];
  return Object.assign({}, u, v);
};
makeTheme$34();

var makeTheme$35 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$enable-shadows'] = allowFalseValue(u['$enable-shadows'], false);
  v['$black'] = u['$black'] || '#000';
  v['$white'] = u['$white'] || '#fff';
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$font-family-monospace'] = u['$font-family-monospace'] || 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
  v['$font-weight-bold'] = u['$font-weight-bold'] || 'bold';
  v['$border-radius-sm'] = u['$border-radius-sm'] || '.2rem';
  v['$code-font-size'] = u['$code-font-size'] || '90%';
  v['$code-padding-x'] = u['$code-padding-x'] || '.4rem';
  v['$code-padding-y'] = u['$code-padding-y'] || '.2rem';
  v['$kbd-color'] = u['$kbd-color'] || v['$white'];
  v['$kbd-bg'] = u['$kbd-bg'] || v['$gray-dark'];
  v['$kbd-box-shadow'] = u['$kbd-box-shadow'] || 'inset 0 -.1rem 0 ' + color(v['$black']).alpha(0.25).toString();
  v['$nested-kbd-font-weight'] = u['$nested-kbd-font-weight'] || v['$font-weight-bold'];
  return Object.assign({}, u, v);
};
makeTheme$35();

var makeTheme$36 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$enable-shadows'] = allowFalseValue(u['$enable-shadows'], false);
  v['$enable-hover-media-query'] = allowFalseValue(u['$enable-hover-media-query'], false);
  v['$enable-transitions'] = allowFalseValue(u['$enable-transitions'], true);
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';
  v['$blue'] = u['$blue'] || '#0275d8';
  v['$green'] = u['$green'] || '#5cb85c';
  v['$teal'] = u['$teal'] || '#5bc0de';
  v['$orange'] = u['$orange'] || '#f0ad4e';
  v['$red'] = u['$red'] || '#d9534f';
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$gray-light'] = u['$gray-light'] || '#636c72';
  v['$brand-primary'] = u['$brand-primary'] || v['$blue'];
  v['$brand-success'] = u['$brand-success'] || v['$green'];
  v['$brand-info'] = u['$brand-info'] || v['$teal'];
  v['$brand-warning'] = u['$brand-warning'] || v['$orange'];
  v['$brand-danger'] = u['$brand-danger'] || v['$red'];
  v['$border-width'] = u['$border-width'] || '1px';
  v['$font-size-base'] = u['$font-size-base'] || '1rem';
  v['$font-size-lg'] = u['$font-size-lg'] || '1.25rem';
  v['$font-size-sm'] = u['$font-size-sm'] || '.875rem';
  v['$font-size-xs'] = u['$font-size-xs'] || '.75rem';
  v['$font-weight-normal'] = u['$font-weight-normal'] || 'normal';
  v['$border-radius'] = u['$border-radius'] || '.25rem';
  v['$border-radius-lg'] = u['$border-radius-lg'] || '.3rem';
  v['$border-radius-sm'] = u['$border-radius-sm'] || '.2rem';
  v['$link-color'] = u['$link-color'] || v['$brand-primary'];
  v['$link-hover-color'] = u['$link-hover-color'] || color(v['$link-color']).darken(0.35).toString();
  v['$link-hover-decoration'] = u['$link-hover-decoration'] || 'underline';
  v['$input-btn-border-width'] = u['$input-btn-border-width'] || v['$border-width'];
  v['$cursor-disabled'] = u['$cursor-disabled'] || 'not-allowed';
  v['$btn-padding-x'] = u['$btn-padding-x'] || '1rem';
  v['$btn-padding-y'] = u['$btn-padding-y'] || '.5rem';
  v['$btn-padding-x-lg'] = u['$btn-padding-x-lg'] || '1.5rem';
  v['$btn-padding-y-lg'] = u['$btn-padding-y-lg'] || '.75rem';
  v['$btn-padding-x-sm'] = u['$btn-padding-x-sm'] || '.5rem';
  v['$btn-padding-y-sm'] = u['$btn-padding-y-sm'] || '.25rem';
  v['$btn-line-height'] = u['$btn-line-height'] || '1.25';
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
  v['$btn-font-weight'] = u['$btn-font-weight'] || v['$font-weight-normal'];
  v['$btn-transition'] = u['$btn-transition'] || 'all .2s ease-in-out';
  v['$btn-border-radius-lg'] = u['$btn-border-radius-lg'] || v['$border-radius-lg'];
  v['$btn-border-radius-sm'] = u['$btn-border-radius-sm'] || v['$border-radius-sm'];
  v['$btn-border-radius'] = u['$btn-border-radius'] || v['$border-radius'];
  v['$btn-box-shadow'] = u['$btn-box-shadow'] || 'inset 0 1px 0 ' + color(v['$white']).alpha(0.15).toString() + ', 0 1px 1px ' + color(v['$black']).alpha(0.075).toString();
  v['$btn-focus-box-shadow'] = u['$btn-focus-box-shadow'] || '0 0 0 2px ' + color(v['$brand-primary']).alpha(0.25).toString();
  v['$btn-active-box-shadow'] = u['$btn-active-box-shadow'] || 'inset 0 3px 5px ' + color(v['$black']).alpha(0.125).toString();
  v['$btn-link-disabled-color'] = u['$btn-link-disabled-color'] || v['$gray-light'];
  v['$btn-block-spacing-y'] = u['$btn-block-spacing-y'] || '.5rem';
  return Object.assign({}, u, v);
};
makeTheme$36();

var makeTheme$37 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$list-inline-padding'] = u['$list-inline-padding'] || '5px';
  return Object.assign({}, u, v);
};
makeTheme$37();

var makeTheme$38 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$enable-hover-media-query'] = allowFalseValue(u['$enable-hover-media-query'], false);
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';
  v['$blue'] = u['$blue'] || '#0275d8';
  v['$gray'] = u['$gray'] || '#464a4c';
  v['$gray-light'] = u['$gray-light'] || '#636c72';
  v['$gray-lighter'] = u['$gray-lighter'] || '#eceeef';
  v['$gray-lightest'] = u['$gray-lightest'] || '#f7f7f9';
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$brand-primary'] = u['$brand-primary'] || v['$blue'];
  v['$body-color'] = u['$body-color'] || v['$gray-dark'];
  v['$border-width'] = u['$border-width'] || '1px';
  v['$border-radius'] = u['$border-radius'] || '.25rem';
  v['$component-active-color'] = u['$component-active-color'] || v['$white'];
  v['$component-active-bg'] = u['$component-active-bg'] || v['$brand-primary'];
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
  v['$cursor-disabled'] = u['$cursor-disabled'] || 'not-allowed';
  v['$state-success-text'] = u['$state-success-text'] || '#3c763d';
  v['$state-success-bg'] = u['$state-success-bg'] || '#dff0d8';
  v['$state-info-text'] = u['$state-info-text'] || '#31708f';
  v['$state-info-bg'] = u['$state-info-bg'] || '#d9edf7';
  v['$state-warning-text'] = u['$state-warning-text'] || '#8a6d3b';
  v['$state-warning-bg'] = u['$state-warning-bg'] || '#fcf8e3';
  v['$state-danger-text'] = u['$state-danger-text'] || '#a94442';
  v['$state-danger-bg'] = u['$state-danger-bg'] || '#f2dede';
  return Object.assign({}, u, v);
};
makeTheme$38();

var makeTheme$39 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$state-warning-bg'] = u['$state-warning-bg'] || '#fcf8e3';
  v['$mark-padding'] = u['$mark-padding'] || '.2em';
  v['$mark-bg'] = u['$mark-bg'] || v['$state-warning-bg'];
  return Object.assign({}, u, v);
};
makeTheme$39();

var makeTheme$40 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$enable-shadows'] = allowFalseValue(u['$enable-shadows'], false);
  v['$enable-transitions'] = allowFalseValue(u['$enable-transitions'], true);
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$gray-lighter'] = u['$gray-lighter'] || '#eceeef';
  v['$grid-breakpoints'] = u['$grid-breakpoints'] || {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  };
  variables_1(v['$grid-breakpoints'], '$grid-breakpoints');
  variables_2(v['$grid-breakpoints']);
  v['$border-width'] = u['$border-width'] || '1px';
  v['$body-bg'] = u['$body-bg'] || v['$white'];
  v['$body-color'] = u['$body-color'] || v['$gray-dark'];
  v['$font-family-sans-serif'] = u['$font-family-sans-serif'] || '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
  v['$font-family-base'] = u['$font-family-base'] || v['$font-family-sans-serif'];
  v['$font-size-base'] = u['$font-size-base'] || '1rem';
  v['$font-weight-normal'] = u['$font-weight-normal'] || 'normal';
  v['$font-weight-base'] = u['$font-weight-base'] || v['$font-weight-normal'];
  v['$line-height-base'] = u['$line-height-base'] || '1.5';
  v['$zindex-modal'] = u['$zindex-modal'] || '2050';
  v['$zindex-modal-backdrop'] = u['$zindex-modal-backdrop'] || '2040';
  v['$transition-fade'] = u['$transition-fade'] || 'opacity .15s linear';
  v['$border-radius-lg'] = u['$border-radius-lg'] || '.3rem';
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
  return Object.assign({}, u, v);
};
makeTheme$40();

var rmUnit$14 = unitUtils$1.rmUnit;
var UNIT$13 = unitUtils$1.UNIT;
var makeTheme$41 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$enable-hover-media-query'] = allowFalseValue(u['$enable-hover-media-query'], false);
  v['$grid-breakpoints'] = u['$grid-breakpoints'] || {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  };
  variables_1(v['$grid-breakpoints'], '$grid-breakpoints');
  variables_2(v['$grid-breakpoints']);
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';
  v['$blue'] = u['$blue'] || '#0275d8';
  v['$gray'] = u['$gray'] || '#464a4c';
  v['$gray-light'] = u['$gray-light'] || '#636c72';
  v['$gray-lighter'] = u['$gray-lighter'] || '#eceeef';
  v['$brand-primary'] = u['$brand-primary'] || v['$blue'];
  v['$spacer'] = u['$spacer'] || '1rem';
  v['$spacer-halved'] = u['$spacer-halved'] || rmUnit$14(v['$spacer'], UNIT$13.REM) / 2 + UNIT$13.REM;
  v['$border-width'] = u['$border-width'] || '1px';
  v['$font-size-lg'] = u['$font-size-lg'] || '1.25rem';
  v['$body-bg'] = u['$body-bg'] || v['$white'];
  v['$component-active-bg'] = u['$component-active-bg'] || v['$brand-primary'];
  v['$component-active-color'] = u['$component-active-color'] || v['$white'];
  v['$border-radius'] = u['$border-radius'] || '.25rem';
  v['$navbar-padding-x'] = u['$navbar-padding-x'] || v['$spacer'];
  v['$navbar-padding-y'] = u['$navbar-padding-y'] || v['$spacer-halved'];
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
  v['$cursor-disabled'] = u['$cursor-disabled'] || 'not-allowed';
  v['$zindex-navbar'] = u['$zindex-navbar'] || '1000';
  v['$zindex-navbar-fixed'] = u['$zindex-navbar-fixed'] || '1030';
  v['$zindex-navbar-sticky'] = u['$zindex-navbar-sticky'] || '1030';
  v['$navbar-brand-padding-y'] = u['$navbar-brand-padding-y'] || '.25rem';
  v['$navbar-divider-padding-y'] = u['$navbar-brand-padding-y'] || '.425rem';
  v['$navbar-toggler-padding-y'] = u['$navbar-toggler-padding-y'] || '.25rem';
  v['$navbar-toggler-padding-x'] = u['$navbar-toggler-padding-x'] || '.75rem';
  v['$navbar-toggler-font-size'] = u['$navbar-toggler-font-size'] || '1.25rem';
  v['$navbar-toggler-border-radius'] = u['$navbar-toggler-border-radius'] || '.25rem';
  v['$navbar-light-active-color'] = u['$navbar-light-active-color'] || 'rgba(0, 0, 0, 0.9)';
  v['$navbar-light-color'] = u['$navbar-light-color'] || 'rgba(0, 0, 0, 0.5)';
  v['$navbar-light-hover-color'] = u['$navbar-light-hover-color'] || 'rgba(0, 0, 0, 0.7)';
  v['$navbar-light-toggler-border'] = u['$navbar-light-toggler-border'] || 'rgba(0, 0, 0, 0.1)';
  v['$navbar-light-disabled-color'] = u['$navbar-light-disabled-color'] || 'rgba(0, 0, 0, 0.3)';
  v['$navbar-light-toggler-bg'] = u['$navbar-light-toggler-bg'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(0, 0, 0, 0.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')';
  v['$navbar-inverse-active-color'] = u['$navbar-inverse-active-color'] || 'rgb(255, 255, 255)';
  v['$navbar-inverse-color'] = u['$navbar-inverse-color'] || 'rgba(255, 255, 255, 0.5)';
  v['$navbar-inverse-hover-color'] = u['$navbar-inverse-hover-color'] || 'rgba(255, 255, 255, 0.75)';
  v['$navbar-inverse-toggler-border'] = u['$navbar-inverse-toggler-border'] || 'rgba(255, 255, 255, 0.1)';
  v['$navbar-inverse-toggler-bg'] = u['$navbar-inverse-toggler-bg'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(255, 255, 255, 0.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')';
  v['$navbar-inverse-disabled-color'] = u['$navbar-inverse-disabled-color'] || 'rgba(255, 255, 255, 0.25)';
  return Object.assign({}, u, v);
};
makeTheme$41();

var rmUnit$15 = unitUtils$1.rmUnit;
var UNIT$14 = unitUtils$1.UNIT;
var makeTheme$42 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$enable-hover-media-query'] = allowFalseValue(u['$enable-hover-media-query'], false);
  v['$grid-breakpoints'] = u['$grid-breakpoints'] || {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  };
  variables_1(v['$grid-breakpoints'], '$grid-breakpoints');
  variables_2(v['$grid-breakpoints']);
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';
  v['$blue'] = u['$blue'] || '#0275d8';
  v['$gray'] = u['$gray'] || '#464a4c';
  v['$gray-light'] = u['$gray-light'] || '#636c72';
  v['$gray-lighter'] = u['$gray-lighter'] || '#eceeef';
  v['$brand-primary'] = u['$brand-primary'] || v['$blue'];
  v['$headings-line-height'] = u['$headings-line-height'] || '1.1';
  v['$spacer'] = u['$spacer'] || '1rem';
  v['$spacer-halved'] = u['$spacer-halved'] || rmUnit$15(v['$spacer'], UNIT$14.REM) / 2 + UNIT$14.REM;
  v['$border-width'] = u['$border-width'] || '1px';
  v['$font-size-lg'] = u['$font-size-lg'] || '1.25rem';
  v['$body-bg'] = u['$body-bg'] || v['$white'];
  v['$component-active-bg'] = u['$component-active-bg'] || v['$brand-primary'];
  v['$component-active-color'] = u['$component-active-color'] || v['$white'];
  v['$border-radius'] = u['$border-radius'] || '.25rem';
  v['$navbar-padding-x'] = u['$navbar-padding-x'] || v['$spacer'];
  v['$navbar-padding-y'] = u['$navbar-padding-y'] || v['$spacer-halved'];
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
  v['$cursor-disabled'] = u['$cursor-disabled'] || 'not-allowed';
  v['$zindex-navbar'] = u['$zindex-navbar'] || '1000';
  v['$zindex-navbar-fixed'] = u['$zindex-navbar-fixed'] || '1030';
  v['$zindex-navbar-sticky'] = u['$zindex-navbar-sticky'] || '1030';
  v['$navbar-brand-padding-y'] = u['$navbar-brand-padding-y'] || '.25rem';
  v['$navbar-divider-padding-y'] = u['$navbar-brand-padding-y'] || '.425rem';
  v['$navbar-toggler-padding-y'] = u['$navbar-toggler-padding-y'] || '.25rem';
  v['$navbar-toggler-padding-x'] = u['$navbar-toggler-padding-x'] || '.75rem';
  v['$navbar-toggler-font-size'] = u['$navbar-toggler-font-size'] || '1.25rem';
  v['$navbar-toggler-border-radius'] = u['$navbar-toggler-border-radius'] || '.25rem';
  v['$navbar-light-active-color'] = u['$navbar-light-active-color'] || 'rgba(0, 0, 0, 0.9)';
  v['$navbar-light-color'] = u['$navbar-light-color'] || 'rgba(0, 0, 0, 0.5)';
  v['$navbar-light-hover-color'] = u['$navbar-light-hover-color'] || 'rgba(0, 0, 0, 0.7)';
  v['$navbar-light-toggler-border'] = u['$navbar-light-toggler-border'] || 'rgba(0, 0, 0, 0.1)';
  v['$navbar-light-disabled-color'] = u['$navbar-light-disabled-color'] || 'rgba(0, 0, 0, 0.3)';
  v['$navbar-light-toggler-bg'] = u['$navbar-light-toggler-bg'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(0, 0, 0, 0.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')';
  v['$navbar-inverse-active-color'] = u['$navbar-inverse-active-color'] || 'rgb(255, 255, 255)';
  v['$navbar-inverse-color'] = u['$navbar-inverse-color'] || 'rgba(255, 255, 255, 0.5)';
  v['$navbar-inverse-hover-color'] = u['$navbar-inverse-hover-color'] || 'rgba(255, 255, 255, .75)';
  v['$navbar-inverse-toggler-border'] = u['$navbar-inverse-toggler-border'] || 'rgba(255, 255, 255, 0.1)';
  v['$navbar-inverse-toggler-bg'] = u['$navbar-inverse-toggler-bg'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(255, 255, 255, 0.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')';
  v['$navbar-inverse-disabled-color'] = u['$navbar-inverse-disabled-color'] || 'rgba(255, 255, 255, 0.25)';
  return Object.assign({}, u, v);
};
makeTheme$42();

var makeTheme$43 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$list-inline-padding'] = u['$list-inline-padding'] || '5px';
  return Object.assign({}, u, v);
};
makeTheme$43();

var rmUnit$16 = unitUtils$1.rmUnit;
var UNIT$15 = unitUtils$1.UNIT;
var makeTheme$44 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$enable-hover-media-query'] = allowFalseValue(u['$enable-hover-media-query'], false);
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';
  v['$blue'] = u['$blue'] || '#0275d8';
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$gray'] = u['$gray'] || '#464a4c';
  v['$gray-light'] = u['$gray-light'] || '#636c72';
  v['$gray-lighter'] = u['$gray-lighter'] || '#eceeef';
  v['$gray-lightest'] = u['$gray-lightest'] || '#f7f7f9';
  v['$brand-primary'] = u['$brand-primary'] || v['$blue'];
  v['$spacer'] = u['$spacer'] || '1rem';
  v['$font-size-h1'] = u['$font-size-h1'] || '2.5rem';
  v['$font-size-h2'] = u['$font-size-h2'] || '2rem';
  v['$font-size-h3'] = u['$font-size-h3'] || '1.75rem';
  v['$font-size-h4'] = u['$font-size-h4'] || '1.5rem';
  v['$font-size-h5'] = u['$font-size-h5'] || '1.25rem';
  v['$font-size-h6'] = u['$font-size-h6'] || '1rem';
  v['$headings-margin-bottom'] = u['$headings-margin-bottom'] || rmUnit$16(v['$spacer'], UNIT$15.REM) / 2 + UNIT$15.REM;
  v['$headings-font-family'] = u['$headings-font-family'] || 'inherit';
  v['$headings-font-weight'] = u['$headings-font-weight'] || '500';
  v['$headings-line-height'] = u['$headings-line-height'] || '1.1';
  v['$headings-color'] = u['$headings-color'] || 'inherit';
  v['$display1-size'] = u['$display1-size'] || '6rem';
  v['$display2-size'] = u['$display2-size'] || '5.5rem';
  v['$display3-size'] = u['$display3-size'] || '4.5rem';
  v['$display4-size'] = u['$display4-size'] || '3.5rem';
  v['$display1-weight'] = u['$display1-weight'] || '300';
  v['$display2-weight'] = u['$display2-weight'] || '300';
  v['$display3-weight'] = u['$display3-weight'] || '300';
  v['$display4-weight'] = u['$display4-weight'] || '300';
  v['$display-line-height'] = u['$display-line-height'] || v['$headings-line-height'];
  v['$lead-font-size'] = u['$lead-font-size'] || '1.25rem';
  v['$lead-font-weight'] = u['$lead-font-weight'] || '300';
  return Object.assign({}, u, v);
};
makeTheme$44();

var makeTheme$45 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$enable-hover-media-query'] = allowFalseValue(u['$enable-hover-media-query'], false);
  v['$white'] = u['$white'] || '#fff';
  v['$blue'] = u['$blue'] || '#0275d8';
  v['$gray-light'] = u['$gray-light'] || '#636c72';
  v['$gray-lighter'] = u['$gray-lighter'] || '#eceeef';
  v['$brand-primary'] = u['$brand-primary'] || v['$blue'];
  v['$border-width'] = u['$border-width'] || '1px';
  v['$border-radius'] = u['$border-radius'] || '.25rem';
  v['$border-radius-lg'] = u['$border-radius-lg'] || '.3rem';
  v['$border-radius-sm'] = u['$border-radius-sm'] || '.2rem';
  v['$cursor-disabled'] = u['$cursor-disabled'] || 'not-allowed';
  v['$line-height-lg'] = u['$line-height-lg'] || '1.6';
  v['$line-height-sm'] = u['$line-height-sm'] || '1.3';
  v['$font-size-lg'] = u['$font-size-lg'] || '1.25rem';
  v['$font-size-sm'] = u['$font-size-sm'] || '.875rem';
  v['$link-color'] = u['$link-color'] || v['$brand-primary'];
  v['$link-hover-color'] = u['$link-hover-color'] || color(v['$link-color']).darken(0.35).toString();
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
  return Object.assign({}, u, v);
};
makeTheme$45();

var makeTheme$46 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$code-font-size'] = u['$code-font-size'] || '90%';
  v['$pre-color'] = u['$pre-color'] || v['$gray-dark'];
  v['$pre-scrollable-max-height'] = u['$pre-scrollable-max-height'] || '340px';
  v['$font-family-monospace'] = u['$font-family-monospace'] || 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';
  return Object.assign({}, u, v);
};
makeTheme$46();

var makeTheme$47 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$enable-hover-media-query'] = allowFalseValue(u['$enable-hover-media-query'], false);
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';
  v['$blue'] = u['$blue'] || '#0275d8';
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$gray-lighter'] = u['$gray-lighter'] || '#eceeef';
  v['$brand-primary'] = u['$brand-primary'] || v['$blue'];
  v['$border-radius'] = u['$border-radius'] || '.25rem';
  v['$progress-height'] = u['$progress-height'] || '1rem';
  v['$progress-font-size'] = u['$progress-font-size'] || '.75rem';
  v['$progress-bg'] = u['$progress-bg'] || v['$gray-lighter'];
  v['$progress-border-radius'] = u['$progress-border-radius'] || v['$border-radius'];
  v['$progress-box-shadow'] = u['$progress-box-shadow'] || 'inset 0 .1rem .1rem ' + color(v['$black']).alpha(0.1).toString();
  v['$progress-bar-color'] = u['$progress-bar-color'] || v['$white'];
  v['$progress-bar-bg'] = u['$progress-bar-bg'] || v['$brand-primary'];
  v['$progress-bar-animation-timing'] = u['$progress-bar-animation-timing'] || '1s linear infinite';
  return Object.assign({}, u, v);
};
makeTheme$47();

var makeTheme$48 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-grid-classes'] = allowFalseValue(u['$enable-grid-classes'], true);
  v['$grid-gutter-width-base'] = u['$grid-gutter-width-base'] || '30px';
  v['$grid-gutter-widths'] = u['$grid-gutter-widths'] || {
    xs: v['$grid-gutter-width-base'],
    sm: v['$grid-gutter-width-base'],
    md: v['$grid-gutter-width-base'],
    lg: v['$grid-gutter-width-base'],
    xl: v['$grid-gutter-width-base']
  };
  return Object.assign({}, u, v);
};
makeTheme$48();

var makeTheme$49 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$small-font-size'] = u['$small-font-size'] || '80%';
  return Object.assign({}, u, v);
};
makeTheme$49();

var makeTheme$50 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';
  v['$gray-dark'] = u['$gray-dark'] || '#292b2c';
  v['$gray'] = u['$gray'] || '#464a4c';
  v['$gray-lighter'] = u['$gray-lighter'] || '#eceeef';
  v['$spacer'] = u['$spacer'] || '1rem';
  v['$border-width'] = u['$border-width'] || '1px';
  v['$body-bg'] = u['$body-bg'] || v['$white'];
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
  v['$state-success-bg'] = u['$state-success-bg'] || '#dff0d8';
  v['$state-info-bg'] = u['$state-info-bg'] || '#d9edf7';
  v['$state-warning-bg'] = u['$state-warning-bg'] || '#fcf8e3';
  v['$state-danger-bg'] = u['$state-danger-bg'] || '#f2dede';
  return Object.assign({}, u, v);
};
makeTheme$50();

var makeTheme$51 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$enable-rounded'] = allowFalseValue(u['$enable-rounded'], true);
  v['$enable-hover-media-query'] = allowFalseValue(u['$enable-hover-media-query'], false);
  v['$grid-breakpoints'] = u['$grid-breakpoints'] || {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  };
  variables_1(v['$grid-breakpoints'], '$grid-breakpoints');
  variables_2(v['$grid-breakpoints']);
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';
  v['$blue'] = u['$blue'] || '#0275d8';
  v['$gray'] = u['$gray'] || '#464a4c';
  v['$gray-light'] = u['$gray-light'] || '#636c72';
  v['$gray-lighter'] = u['$gray-lighter'] || '#eceeef';
  v['$brand-primary'] = u['$brand-primary'] || v['$blue'];
  v['$border-width'] = u['$border-width'] || '1px';
  v['$font-size-lg'] = u['$font-size-lg'] || '1.25rem';
  v['$body-bg'] = u['$body-bg'] || v['$white'];
  v['$component-active-bg'] = u['$component-active-bg'] || v['$brand-primary'];
  v['$component-active-color'] = u['$component-active-color'] || v['$white'];
  v['$border-radius'] = u['$border-radius'] || '.25rem';
  v['$navbar-padding-x'] = u['$navbar-padding-x'] || v['$spacer'];
  v['$navbar-padding-y'] = u['$navbar-padding-y'] || v['$spacer-halved'];
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
  v['$cursor-disabled'] = u['$cursor-disabled'] || 'not-allowed';
  v['$zindex-navbar'] = u['$zindex-navbar'] || '1000';
  v['$zindex-navbar-fixed'] = u['$zindex-navbar-fixed'] || '1030';
  v['$zindex-navbar-sticky'] = u['$zindex-navbar-sticky'] || '1030';
  v['$navbar-brand-padding-y'] = u['$navbar-brand-padding-y'] || '.25rem';
  v['$navbar-divider-padding-y'] = u['$navbar-brand-padding-y'] || '.425rem';
  v['$navbar-toggler-padding-y'] = u['$navbar-toggler-padding-y'] || '.25rem';
  v['$navbar-toggler-padding-x'] = u['$navbar-toggler-padding-x'] || '.75rem';
  v['$navbar-toggler-font-size'] = u['$navbar-toggler-font-size'] || '1.25rem';
  v['$navbar-toggler-border-radius'] = u['$navbar-toggler-border-radius'] || '.25rem';
  v['$navbar-light-active-color'] = u['$navbar-light-active-color'] || 'rgba(0, 0, 0, 0.9)';
  v['$navbar-light-color'] = u['$navbar-light-color'] || 'rgba(0, 0, 0, 0.5)';
  v['$navbar-light-hover-color'] = u['$navbar-light-hover-color'] || 'rgba(0, 0, 0, 0.7)';
  v['$navbar-light-toggler-border'] = u['$navbar-light-toggler-border'] || 'rgba(0, 0, 0, 0.1)';
  v['$navbar-light-disabled-color'] = u['$navbar-light-disabled-color'] || 'rgba(0, 0, 0, 0.3)';
  v['$navbar-light-toggler-bg'] = u['$navbar-light-toggler-bg'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(0, 0, 0, 0.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')';
  v['$navbar-inverse-active-color'] = u['$navbar-inverse-active-color'] || 'rgb(255, 255, 255)';
  v['$navbar-inverse-color'] = u['$navbar-inverse-color'] || 'rgba(255, 255, 255, 0.5)';
  v['$navbar-inverse-hover-color'] = u['$navbar-inverse-hover-color'] || 'rgba(255, 255, 255, 0.75)';
  v['$navbar-inverse-toggler-border'] = u['$navbar-inverse-toggler-border'] || 'rgba(255, 255, 255, 0.1)';
  v['$navbar-inverse-toggler-bg'] = u['$navbar-inverse-toggler-bg'] || 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(255, 255, 255, 0.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')';
  v['$navbar-inverse-disabled-color'] = u['$navbar-inverse-disabled-color'] || 'rgba(255, 255, 255, 0.25)';
  return Object.assign({}, u, v);
};
makeTheme$51();

var makeTheme$52 = function makeTheme() {
  var userTheme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var v = {};
  var u = userTheme;
  v['_name'] = u['_name'] || 'bootstrap-styled';
  v['$white'] = u['$white'] || '#fff';
  v['$black'] = u['$black'] || '#000';
  v['$zindex-tooltip'] = u['$zindex-tooltip'] || '1070';
  v['$tooltip-max-width'] = u['$tooltip-max-width'] || '200px';
  v['$tooltip-color'] = u['$tooltip-color'] || v['$white'];
  v['$tooltip-bg'] = u['$tooltip-bg'] || v['$black'];
  v['$tooltip-opacity'] = u['$tooltip-opacity'] || '.9';
  v['$tooltip-padding-y'] = u['$tooltip-padding-y'] || '3px';
  v['$tooltip-padding-x'] = u['$tooltip-padding-x'] || '8px';
  v['$tooltip-margin'] = u['$tooltip-margin'] || '3px';
  v['$tooltip-arrow-width'] = u['$tooltip-arrow-width'] || '5px';
  v['$tooltip-arrow-color'] = u['$tooltip-arrow-color'] || v['$tooltip-bg'];
  return Object.assign({}, u, v);
};
makeTheme$52();

var makeThemeList = [makeOriginal, makeTheme$1, makeTheme$2, makeTheme$3, makeTheme$4, makeTheme$5, makeTheme$6, makeTheme$7, makeTheme$8, makeTheme$9, makeTheme$10, makeTheme$11, makeTheme$12, makeTheme$13, makeTheme$14, makeTheme$15, makeTheme$16, makeTheme$17, makeTheme$19, makeTheme$20, makeTheme$21, makeTheme$22, makeTheme$23, makeTheme$24, makeTheme$25, makeTheme$26, makeTheme$27, makeTheme$28, makeTheme$29, makeTheme$30, makeTheme$31, makeTheme$32, makeTheme$33, makeTheme$34, makeTheme$35, makeTheme$36, makeTheme$37, makeTheme$38, makeTheme$39, makeTheme$40, makeTheme$41, makeTheme$42, makeTheme$43, makeTheme$44, makeTheme$45, makeTheme$46, makeTheme$47, makeTheme$48, makeTheme$49, makeTheme$50, makeTheme$51, makeTheme$52, makeTheme$18];
function makeTheme$$1(list, theme) {
  if (!Array.isArray(list)) {
    theme = list;
    list = makeThemeList;
  }
  var all = [].concat(list);
  var t = theme;
  var mt = void 0;
  while (mt = all.shift()) {
    t = mt(t);
  }
  return t;
}
var theme = makeTheme$$1();

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

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
'use strict';
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
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
			if (hasOwnProperty.call(from, key)) {
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
var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret;

'use strict';
{
  var invariant$1 = invariant_1;
  var warning$1 = warning_1;
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
}
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        try {
          invariant$1(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        warning$1(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          loggedTypeFailures[error.message] = true;
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
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
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
      if (secret !== ReactPropTypesSecret_1) {
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
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
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
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
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
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
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
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
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
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
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

var propTypes$1 = createCommonjsModule(function (module) {
{
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;
  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
}
});

var classnames = createCommonjsModule(function (module) {
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
var hasOwnProperty$1 = objectProto.hasOwnProperty;
var objectToString = objectProto.toString;
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);
var Symbol$1 = root.Symbol;
var getPrototype = overArg(Object.getPrototypeOf, Object);
var propertyIsEnumerable = objectProto.propertyIsEnumerable;
var splice = arrayProto.splice;
var spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : undefined;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var nativeMax = Math.max;
var Map = getNative(root, 'Map');
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
  return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
}
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty$1.call(data, key);
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
    'map': new (Map || ListCache),
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
    if ((inherited || hasOwnProperty$1.call(value, key)) &&
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
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$1.call(object, key)))) {
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
  return isArrayLikeObject(value) && hasOwnProperty$1.call(value, 'callee') &&
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
var lodash_omit = omit;

function mapToCssModules(className, cssModule) {
  if (!cssModule) return className;
  return className.split(' ').map(function (c) {
    return cssModule[c] || c;
  }).join(' ');
}

var tabFocus_1 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabFocus = tabFocus;
function tabFocus() {
  return "\n    /* WebKit-specific. Other browsers will keep their default outline style. */\n    /* (Initially tried to also force default via 'outline: initial', */\n    /* but that seems to erroneously remove the outline in Firefox altogether.) */\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px;\n  ";
}
exports.default = {
  tabFocus: tabFocus
};
});
unwrapExports(tabFocus_1);

var hover_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hover = hover;
exports.hoverFocus = hoverFocus;
exports.plainHoverFocus = plainHoverFocus;
exports.hoverFocusActive = hoverFocusActive;
var defaultProps = exports.defaultProps = {
  '$enable-hover-media-query': false
};
function hover(content) {
  return '\n    &:hover { ' + content + ' }\n  ';
}
function hoverFocus() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-media-query'];
  var content = arguments[1];
  if (enableHoverMediaQuery) {
    return ' \n      &:focus { ' + content + ' }\n      ' + hover(content) + '\n    ';
  }
  return '\n    &:focus,\n    &:hover {\n      ' + content + '\n    }\n  ';
}
function plainHoverFocus() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-media-query'];
  var content = arguments[1];
  if (enableHoverMediaQuery) {
    return '\n      &, &:focus {\n        ' + content + '\n      }\n      ' + hover(content) + '\n    ';
  }
  return ' \n    &, &:focus, &:hover {\n      ' + content + '\n    }\n  ';
}
function hoverFocusActive() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-media-query'];
  var content = arguments[1];
  if (enableHoverMediaQuery) {
    return '\n      &:focus,\n      &:active {\n        ' + content + '\n      }\n      ' + hover(content) + '\n    ';
  }
  return '\n    &:focus, &:active, &:hover {\n     ' + content + '\n    }\n  ';
}
hover.focus = hoverFocus;
hover.plainFocus = plainHoverFocus;
hover.activeFocus = hoverFocusActive;
exports.default = {
  defaultProps: defaultProps,
  hover: hover,
  hoverFocus: hoverFocus,
  plainHoverFocus: plainHoverFocus,
  hoverFocusActive: hoverFocusActive
};
});
unwrapExports(hover_1);
var hover_2 = hover_1.hover;
var hover_3 = hover_1.hoverFocus;
var hover_5 = hover_1.hoverFocusActive;

var a_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.a = a;
var defaultProps = exports.defaultProps = {
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
  return '\n    color: ' + $linkColor + ';\n    text-decoration: ' + $linkDecoration + ';\n    background-color: transparent;\n    -webkit-text-decoration-skip: objects;\n  \n    ' + (_hover.hoverFocus)($enableHoverMediaQuery, '\n      color: ' + $linkHoverColor + ';\n      text-decoration: ' + $linkHoverDecoration + ';\n    ') + '\n    \n    &:focus {\n      ' + (_tabFocus.tabFocus)() + '\n    }\n\n    a:not([href]):not([tabindex]) {\n      color: inherit;\n      text-decoration: none;\n      \n      ' + (_hover.hoverFocus)($enableHoverMediaQuery, '\n        color: inherit;\n        text-decoration: none;\n      ') + '\n\n      &:focus {\n        outline: 0;\n      }\n    }\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  a: a
};
});
unwrapExports(a_1);
var a_3 = a_1.a;

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









var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};

var defaultProps = {
  tag: 'a',
  theme: {
    '$link-color': '#0275d8',
    '$link-decoration': 'none',
    '$link-hover-color': '#014C8D',
    '$link-hover-decoration': 'underline',
    '$enable-hover-media-query': false
  }
};
var propTypes = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element]),
  theme: propTypes$1.shape({
    '$link-color': propTypes$1.string,
    '$link-decoration': propTypes$1.string,
    '$link-hover-color': propTypes$1.string,
    '$link-hover-decoration': propTypes$1.string,
    '$enable-hover-media-query': propTypes$1.bool
  }),
  color: propTypes$1.oneOf(['white', 'muted', 'gray-dark', 'primary', 'success', 'info', 'warning', 'danger']),
  cssModule: propTypes$1.object
};
var AUnstyled = function (_React$Component) {
  inherits(AUnstyled, _React$Component);
  function AUnstyled() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck(this, AUnstyled);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = AUnstyled.__proto__ || Object.getPrototypeOf(AUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      focus: false
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }
  createClass(AUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          color = _omit.color,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'color', 'tag']);
      var focus = this.state.focus;
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames(className, defineProperty({
          focus: focus
        }, 'text-' + color, color)), cssModule)
      }, attributes));
    }
  }]);
  return AUnstyled;
}(React.Component);
AUnstyled.defaultProps = defaultProps;
AUnstyled.propTypes = propTypes;
var A = styled(AUnstyled).withConfig({
  displayName: 'A'
})(['', ''], function (props) {
  return '\n    ' + a_3(props.theme['$link-color'], props.theme['$link-decoration'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$enable-hover-media-query']) + '\n  ';
});
A.defaultProps = defaultProps;
A.propTypes = propTypes;

var defaultProps$1 = {
  theme: theme
};
function composeLink(RouterLink) {
  var Link = function (_React$Component) {
    inherits(Link, _React$Component);
    function Link() {
      classCallCheck(this, Link);
      return possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).apply(this, arguments));
    }
    createClass(Link, [{
      key: 'render',
      value: function render() {
        var _omit = lodash_omit(this.props, ['theme']),
            className = _omit.className,
            to = _omit.to,
            attributes = objectWithoutProperties(_omit, ['className', 'to']);
        return React.createElement(RouterLink, _extends({ className: className, to: to }, attributes));
      }
    }]);
    return Link;
  }(React.Component);
  Link.propTypes = {
    className: propTypes$1.string,
    to: propTypes$1.string.isRequired,
    theme: propTypes$1.object
  };
  Link = styled(Link).withConfig({
    displayName: 'composeLink__Link'
  })(['', ''], function (props) {
    return '\n      ' + a_3(props.theme['$link-color'], props.theme['$link-decoration'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$enable-hover-media-query']) + '\n    ';
  });
  Link.defaultProps = defaultProps$1;
  return Link;
}

var defaultProps$2 = {
  tag: 'abbr',
  initialism: false
};
var propTypes$2 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element]),
  title: propTypes$1.string.isRequired,
  initialism: propTypes$1.bool,
  cssModule: propTypes$1.object
};
var AbbrUnstyled = function (_React$Component) {
  inherits(AbbrUnstyled, _React$Component);
  function AbbrUnstyled() {
    classCallCheck(this, AbbrUnstyled);
    return possibleConstructorReturn(this, (AbbrUnstyled.__proto__ || Object.getPrototypeOf(AbbrUnstyled)).apply(this, arguments));
  }
  createClass(AbbrUnstyled, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          initialism = _props.initialism,
          title = _props.title,
          Tag = _props.tag,
          cssModule = _props.cssModule,
          attributes = objectWithoutProperties(_props, ['className', 'initialism', 'title', 'tag', 'cssModule']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames(className, {
          initialism: initialism
        }), cssModule),
        title: title
      }, attributes));
    }
  }]);
  return AbbrUnstyled;
}(React.Component);
AbbrUnstyled.defaultProps = defaultProps$2;
AbbrUnstyled.propTypes = propTypes$2;
var Abbr = styled(AbbrUnstyled).withConfig({
  displayName: 'Abbr'
})(['&[title]{text-decoration:underline;text-decoration:underline dotted;cursor:help;border-bottom:0;}&.initialism{font-size:90%;text-transform:uppercase;}']);
Abbr.defaultProps = defaultProps$2;
Abbr.propTypes = propTypes$2;

var Address = styled.address.withConfig({
  displayName: 'Address'
})(['margin-bottom:1rem;font-style:normal;line-height:inherit;']);

var alert = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alertVariant = alertVariant;
var _color2 = _interopRequireDefault(color);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function alertVariant(background, border, bodyColor) {
  return '\n    background-color: ' + background + ';\n    border-color: ' + border + ';\n    color: ' + bodyColor + ';\n  \n    hr {\n      border-top-color: ' + (_color2.default)(border).darken(0.5).toString() + ';\n    }\n    .alert-link {\n      color: ' + (_color2.default)(bodyColor).darken(0.1).toString() + ';\n    }\n  ';
}
exports.default = {
  alertVariant: alertVariant
};
});
unwrapExports(alert);
var alert_1 = alert.alertVariant;

var borderRadius_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.borderRadius = borderRadius;
exports.borderTopRadius = borderTopRadius;
exports.borderRightRadius = borderRightRadius;
exports.borderBottomRadius = borderBottomRadius;
exports.borderLeftRadius = borderLeftRadius;
var defaultProps = exports.defaultProps = {
  '$border-radius': '.25rem',
  '$enable-rounded': true
};
function borderRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];
  if (enableRounded) {
    return '\n      border-radius: ' + radius + ';\n    ';
  }
  return '';
}
function borderTopRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];
  if (enableRounded) {
    return '\n      border-top-right-radius: ' + radius + ';\n      border-top-left-radius: ' + radius + ';\n    ';
  }
  return '';
}
function borderRightRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];
  if (enableRounded) {
    return '\n      border-bottom-right-radius: ' + radius + ';\n      border-top-right-radius: ' + radius + ';\n    ';
  }
  return '';
}
function borderBottomRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];
  if (enableRounded) {
    return '\n      border-bottom-right-radius: ' + radius + ';\n      border-bottom-left-radius: ' + radius + ';\n    ';
  }
  return '';
}
function borderLeftRadius() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];
  if (enableRounded) {
    return '\n      border-bottom-left-radius: ' + radius + ';\n      border-top-left-radius: ' + radius + ';\n    ';
  }
  return '';
}
exports.default = {
  defaultProps: defaultProps,
  all: borderRadius,
  top: borderTopRadius,
  right: borderRightRadius,
  bottom: borderBottomRadius,
  left: borderLeftRadius
};
});
unwrapExports(borderRadius_1);
var borderRadius_2 = borderRadius_1.borderRadius;
var borderRadius_3 = borderRadius_1.borderTopRadius;
var borderRadius_4 = borderRadius_1.borderRightRadius;
var borderRadius_5 = borderRadius_1.borderBottomRadius;
var borderRadius_6 = borderRadius_1.borderLeftRadius;

function createChainedFunction() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  return funcs.filter(function (func) {
    return func != null;
  }).reduce(function (acc, func) {
    return function chainedFunction() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, function () {});
}
function pick(obj, keys) {
  var pickKeys = Array.isArray(keys) ? keys : [keys];
  var length = pickKeys.length;
  var key = void 0;
  var result = {};
  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }
  return result;
}
var parseTransition = function parseTransition(transitions) {
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
};
var asyncGenerator$1 = function () {
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
var UnitUtils = function UnitUtils() {
  var _this = this;
  classCallCheck$1(this, UnitUtils);
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
var index = new UnitUtils();

var PropTypes$1 = createCommonjsModule(function (module, exports) {
'use strict';
exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = undefined;
exports.transitionTimeout = transitionTimeout;
var _propTypes2 = _interopRequireDefault(propTypes$1);
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
  enterDone: _propTypes2.default.string,
  enterActive: _propTypes2.default.string,
  exit: _propTypes2.default.string,
  exitDone: _propTypes2.default.string,
  exitActive: _propTypes2.default.string
})]);
});
unwrapExports(PropTypes$1);

var Transition_1 = createCommonjsModule(function (module, exports) {
'use strict';
exports.__esModule = true;
exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;
var PropTypes = _interopRequireWildcard(propTypes$1);
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
    var _ref = this.pendingState || this.state,
        status = _ref.status;
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
    var nextStatus = this.nextStatus;
    if (nextStatus !== null) {
      this.nextStatus = null;
      this.cancelNextCallback();
      var node = _reactDom2.default.findDOMNode(this);
      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
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
    var _this4 = this;
    this.pendingState = nextState;
    callback = this.setNextCallback(callback);
    this.setState(nextState, function () {
      _this4.pendingState = null;
      callback();
    });
  };
  Transition.prototype.setNextCallback = function setNextCallback(callback) {
    var _this5 = this;
    var active = true;
    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this5.nextCallback = null;
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
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,
  in: PropTypes.bool,
  mountOnEnter: PropTypes.bool,
  unmountOnExit: PropTypes.bool,
  appear: PropTypes.bool,
  enter: PropTypes.bool,
  exit: PropTypes.bool,
  timeout: function timeout(props) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    var pt = PropTypes$1.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;
    return pt.apply(undefined, [props].concat(args));
  },
  addEndListener: PropTypes.func,
  onEnter: PropTypes.func,
  onEntering: PropTypes.func,
  onEntered: PropTypes.func,
  onExit: PropTypes.func,
  onExiting: PropTypes.func,
  onExited: PropTypes.func
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
var Transition = unwrapExports(Transition_1);

var propTypes$4 = _extends({}, Transition.propTypes, {
  children: propTypes$1.oneOfType([propTypes$1.arrayOf(propTypes$1.node), propTypes$1.node]),
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.func]),
  baseClass: propTypes$1.string,
  baseClassActive: propTypes$1.string,
  className: propTypes$1.string,
  cssModule: propTypes$1.object
});
var defaultProps$4 = _extends({}, Transition.defaultProps, {
  tag: 'div',
  baseClass: 'fade',
  baseClassActive: 'show',
  timeout: 150,
  appear: true,
  enter: true,
  exit: true,
  in: true
});
function Fade(props) {
  var Tag = props.tag,
      baseClass = props.baseClass,
      baseClassActive = props.baseClassActive,
      className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      otherProps = objectWithoutProperties(props, ['tag', 'baseClass', 'baseClassActive', 'className', 'cssModule', 'children']);
  var TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];
  var transitionProps = pick(otherProps, TransitionPropTypeKeys);
  var childProps = lodash_omit(otherProps, TransitionPropTypeKeys, 'innerRef');
  return React.createElement(
    Transition,
    transitionProps,
    function (status) {
      var isActive = status === 'entered';
      return React.createElement(
        Tag,
        _extends({
          className: mapToCssModules(classnames(className, baseClass, isActive && baseClassActive), cssModule)
        }, childProps),
        children
      );
    }
  );
}
Fade.propTypes = propTypes$4;
Fade.defaultProps = defaultProps$4;

var defaultProps$5 = {
  theme: {
    '$close-color': '#000',
    '$close-font-size': '1.5rem',
    '$close-font-weight': '#bold',
    '$close-text-shadow': '0 1px 0 #fff',
    '$enable-hover-media-query': false
  }
};
var propTypes$5 = {
  className: propTypes$1.string,
  theme: propTypes$1.shape({
    '$enable-rounded': propTypes$1.bool,
    '$enable-hover-media-query': propTypes$1.bool
  }),
  closeLabel: propTypes$1.string,
  onDismiss: propTypes$1.func.isRequired,
  'sr-only': propTypes$1.bool,
  cssModule: propTypes$1.object
};
var CloseUnstyled = function (_React$Component) {
  inherits(CloseUnstyled, _React$Component);
  function CloseUnstyled() {
    classCallCheck(this, CloseUnstyled);
    return possibleConstructorReturn(this, (CloseUnstyled.__proto__ || Object.getPrototypeOf(CloseUnstyled)).apply(this, arguments));
  }
  createClass(CloseUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          srOnly = _omit['sr-only'],
          onDismiss = _omit.onDismiss,
          closeLabel = _omit.closeLabel,
          cssModule = _omit.cssModule,
          attributes = objectWithoutProperties(_omit, ['className', 'sr-only', 'onDismiss', 'closeLabel', 'cssModule']);
      return React.createElement(
        'button',
        _extends({
          className: mapToCssModules(classnames(className, 'close', {
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
CloseUnstyled.defaultProps = defaultProps$5;
CloseUnstyled.propTypes = propTypes$5;
var Close = styled(CloseUnstyled).withConfig({
  displayName: 'Close'
})(['', ''], function (props) {
  return '\n    float: right;\n    font-size: ' + props.theme['$close-font-size'] + ';\n    font-weight: ' + props.theme['$close-font-weight'] + ';\n    line-height: 1;\n    color: ' + props.theme['$close-color'] + ';\n    text-shadow: ' + props.theme['$close-text-shadow'] + ';\n    opacity: .2;\n    \n    &:focus {outline:0;}\n    \n    ' + hover_3(props.theme['$enable-hover-media-query'], '\n        color: ' + props.theme['$close-color'] + ';\n        text-decoration: none;\n        cursor: pointer;\n        opacity: .5;\n      ') + '\n    \n    /* Additional properties for button version\n     iOS requires the button element instead of an anchor tag.\n     If you want the anchor version, it requires \'href="#"\'.\n     See https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile\n     */\n    \n    /* scss-lint:disable QualifyingElement */\n    &.close {\n      padding: 0;\n      cursor: pointer;\n      background: transparent;\n      border: 0;\n      -webkit-appearance: none;\n    }\n    /* scss-lint:enable QualifyingElement */\n  ';
});
Close.defaultProps = defaultProps$5;
Close.propTypes = propTypes$5;

var defaultProps$3 = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  theme: {
    '$alert-padding-x': '1.25rem',
    '$alert-padding-y': '.75rem',
    '$alert-margin-bottom': '1rem',
    '$alert-border-radius': '.25rem',
    '$alert-link-font-weight': 'bold',
    '$alert-border-width': '1px',
    '$alert-success-bg': '#dff0d8',
    '$alert-success-text': '#3c763d',
    '$alert-success-border': '#3c763d',
    '$alert-info-bg': '#d9edf7',
    '$alert-info-text': '#31708f',
    '$alert-info-border': '#31708f',
    '$alert-warning-bg': '#fcf8e3',
    '$alert-warning-text': '#8a6d3b',
    '$alert-warning-border': '#8a6d3b',
    '$alert-danger-bg': '#f2dede',
    '$alert-danger-text': '#a94442',
    '$alert-danger-border': '#a94442',
    '$enable-rounded': true
  },
  uncontrolled: false,
  autoHideDuration: null,
  transition: _extends({}, defaultProps$4, {
    unmountOnExit: true
  })
};
var propTypes$3 = {
  className: propTypes$1.string,
  children: propTypes$1.node,
  color: propTypes$1.oneOf(['success', 'info', 'warning', 'danger']),
  isOpen: propTypes$1.bool,
  toggle: propTypes$1.func,
  onClick: propTypes$1.func,
  initializeIsOpen: propTypes$1.func,
  tag: propTypes$1.oneOfType([propTypes$1.func, propTypes$1.string]),
  transition: propTypes$1.shape({
    FadeProptypes: propTypes$1.object,
    unmountOnExit: propTypes$1.bool
  }),
  autoHideDuration: propTypes$1.number,
  theme: propTypes$1.shape({
    '$alert-padding-x': propTypes$1.string,
    '$alert-padding-y': propTypes$1.string,
    '$alert-margin-bottom': propTypes$1.string,
    '$alert-border-radius': propTypes$1.string,
    '$alert-link-font-weight': propTypes$1.string,
    '$alert-border-width': propTypes$1.string,
    '$alert-success-bg': propTypes$1.string,
    '$alert-success-text': propTypes$1.string,
    '$alert-success-border': propTypes$1.string,
    '$alert-info-bg': propTypes$1.string,
    '$alert-info-text': propTypes$1.string,
    '$alert-info-border': propTypes$1.string,
    '$alert-warning-bg': propTypes$1.string,
    '$alert-warning-text': propTypes$1.string,
    '$alert-warning-border': propTypes$1.string,
    '$alert-danger-bg': propTypes$1.string,
    '$alert-danger-text': propTypes$1.string,
    '$alert-danger-border': propTypes$1.string,
    '$enable-rounded': propTypes$1.bool
  }),
  uncontrolled: propTypes$1.bool,
  cssModule: propTypes$1.object
};
var AlertUnstyled = function (_React$Component) {
  inherits(AlertUnstyled, _React$Component);
  function AlertUnstyled() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck(this, AlertUnstyled);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = AlertUnstyled.__proto__ || Object.getPrototypeOf(AlertUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      uncontrolledOpen: true,
      exited: false
    }, _this.setAutoHideTimer = function (autoHideDuration) {
      if (!_this.props.autoHideDuration) {
        return;
      }
      clearTimeout(_this.timerAutoHide);
      _this.timerAutoHide = setTimeout(function () {
        if (_this.props.autoHideDuration) {
          _this.toggle();
        }
      }, autoHideDuration || _this.props.autoHideDuration);
    }, _this.timerAutoHide = null, _this.initializeIsOpen = function (props) {
      return _this.setState({ uncontrolledOpen: props.isOpen });
    }, _this.toggle = function (e) {
      if (_this.props.onClick) {
        _this.props.onClick(e);
      } else {
        _this.setState({ uncontrolledOpen: false });
      }
    }, _this.handleExited = function () {
      _this.setState({ exited: true });
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }
  createClass(AlertUnstyled, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.initializeIsOpen(this.props);
      if (this.props.uncontrolled) {
        if (this.state.uncontrolledOpen) {
          this.setState({ exited: true });
        }
        return;
      }
      if (!this.props.isOpen) {
        this.setState({ exited: true });
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoHideDuration) {
        if (this.props.onClick) {
          console.warn('You cannot make an Alert auto-hide when using an onClick function. Use the auto-hide props with the uncontrolled props!');
          return;
        }
        this.setAutoHideTimer();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isOpen) {
        this.setState({ exited: false });
      }
      if (nextProps.isOpen !== this.props.isOpen) {
        this.initializeIsOpen(nextProps);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.isOpen !== this.props.isOpen) {
        if (this.props.isOpen) {
          this.setAutoHideTimer();
        } else {
          clearTimeout(this.timerAutoHide);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timerAutoHide);
    }
  }, {
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme', 'autoHideDuration', 'toggle']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          color = _omit.color,
          isOpen = _omit.isOpen,
          onClick = _omit.onClick,
          children = _omit.children,
          onExited = _omit.onExited,
          transition = _omit.transition,
          uncontrolled = _omit.uncontrolled,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'tag', 'color', 'isOpen', 'onClick', 'children', 'onExited', 'transition', 'uncontrolled']);
      var classes = mapToCssModules(classnames(className, 'alert', 'alert-' + color, { 'alert-dismissible': uncontrolled || onClick }), cssModule);
      if (!isOpen && this.state.exited) {
        return null;
      }
      var transitionProps = {
        in: uncontrolled ? this.state.uncontrolledOpen : isOpen,
        appear: true,
        onExited: createChainedFunction(this.handleExited, onExited)
      };
      return React.createElement(
        Fade,
        _extends({
          tag: Tag,
          className: classes,
          'in': uncontrolled ? this.state.uncontrolledOpen : isOpen,
          role: 'alert'
        }, attributes, transition, transitionProps),
        (uncontrolled || onClick) && React.createElement(Close, { onDismiss: this.toggle }),
        children
      );
    }
  }]);
  return AlertUnstyled;
}(React.Component);
AlertUnstyled.defaultProps = defaultProps$3;
AlertUnstyled.propTypes = propTypes$3;
var Alert = styled(AlertUnstyled).withConfig({
  displayName: 'Alert'
})(['', ''], function (props) {
  return '\n    /*\n    Base styles\n    */\n    \n    &.alert {\n      padding: ' + props.theme['$alert-padding-y'] + ' ' + props.theme['$alert-padding-x'] + ';\n      margin-bottom: ' + props.theme['$alert-margin-bottom'] + ';\n      border: ' + props.theme['$alert-border-width'] + ' solid transparent;\n      ' + borderRadius_2(props.theme['$enable-rounded'], props.theme['$alert-border-radius']) + '\n    }\n    \n    /* Headings for larger alerts */\n    &.alert-heading {\n      /* Specified to prevent conflicts of changing $headings-color */\n      color: inherit;\n    }\n    \n    /* Provide class for links that match alerts */\n    & .alert-link { \n      font-weight: ' + props.theme['$alert-link-font-weight'] + ';\n    }\n    \n    /* Dismissible alerts Expand the right padding and account for the close buttons positioning. */\n    \n    &.alert-dismissible {    \n      /* Adjust close link position */\n      & .close {\n        position: relative;\n        top: -' + props.theme['$alert-padding-y'] + ';\n        right: -' + props.theme['$alert-padding-x'] + ';\n        padding: ' + props.theme['$alert-padding-y'] + ' ' + props.theme['$alert-padding-x'] + ';\n        color: inherit;\n      }\n    }\n    /* Alternate styles Generate contextual modifier classes for colorizing the alert. */\n\n    &.alert-success {\n      ' + alert_1(props.theme['$alert-success-bg'], props.theme['$alert-success-border'], props.theme['$alert-success-text']) + '    \n    }\n    &.alert-info {\n      ' + alert_1(props.theme['$alert-info-bg'], props.theme['$alert-info-border'], props.theme['$alert-info-text']) + '\n    } \n    &.alert-warning {\n      ' + alert_1(props.theme['$alert-warning-bg'], props.theme['$alert-warning-border'], props.theme['$alert-warning-text']) + ' \n    }\n    &.alert-danger {\n      ' + alert_1(props.theme['$alert-danger-bg'], props.theme['$alert-danger-border'], props.theme['$alert-danger-text']) + ' \n    }\n  ';
});
Alert.propTypes = propTypes$3;
Alert.defaultProps = defaultProps$3;

var Area = styled.area.withConfig({
  displayName: 'Area'
})(['display:inline;cursor:pointer;']);

var Article = styled.article.withConfig({
  displayName: 'Article'
})(['']);

var defaultProps$6 = {
  tag: 'blockquote',
  theme: {
    '$blockquote-small-color': '#636c72',
    '$blockquote-font-size': '1.25rem',
    '$blockquote-border-color': '#eceeef',
    '$blockquote-border-width': '.25rem'
  }
};
var propTypes$6 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element]),
  theme: propTypes$1.shape({
    '$blockquote-small-color': propTypes$1.string,
    '$blockquote-font-size': propTypes$1.string,
    '$blockquote-border-color': propTypes$1.string,
    '$blockquote-border-width': propTypes$1.string
  }),
  reverse: propTypes$1.bool,
  cssModule: propTypes$1.object
};
var BlockquoteUnstyled = function (_React$Component) {
  inherits(BlockquoteUnstyled, _React$Component);
  function BlockquoteUnstyled() {
    classCallCheck(this, BlockquoteUnstyled);
    return possibleConstructorReturn(this, (BlockquoteUnstyled.__proto__ || Object.getPrototypeOf(BlockquoteUnstyled)).apply(this, arguments));
  }
  createClass(BlockquoteUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          reverse = _omit.reverse,
          Tag = _omit.tag,
          cssModule = _omit.cssModule,
          attributes = objectWithoutProperties(_omit, ['className', 'reverse', 'tag', 'cssModule']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames(className, 'blockquote', {
          'blockquote-reverse': reverse
        }), cssModule)
      }, attributes));
    }
  }]);
  return BlockquoteUnstyled;
}(React.Component);
BlockquoteUnstyled.defaultProps = defaultProps$6;
BlockquoteUnstyled.propTypes = propTypes$6;
var Blockquote = styled(BlockquoteUnstyled).withConfig({
  displayName: 'Blockquote'
})(['  ', ' '], function (props) {
  return '\n    &.blockquote {\n      padding: ' + props.theme['$spacer-halved'] + ' ' + props.theme['$spacer'] + ';\n      margin-bottom: ' + props.theme['$spacer'] + ';\n      font-size: ' + props.theme['$blockquote-font-size'] + ';\n      border-left: ' + props.theme['$blockquote-border-width'] + ' solid ' + props.theme['$blockquote-border-color'] + ';\n      \n      .blockquote-footer {\n        display: block;\n        font-size: 80%; \n        color: ' + props.theme['$blockquote-small-color'] + ';\n        &::before {\n          content: \'\\2014 \\00A0\';\n        }\n      }\n    }\n\n    &.blockquote-reverse {\n      padding-right: ' + props.theme['$spacer'] + ';\n      padding-left: 0;\n      text-align: right;\n      border-right: ' + props.theme['$blockquote-border-width'] + ' solid ' + props.theme['$blockquote-border-color'] + ';\n      border-left: 0;\n      \n      .blockquote-footer {\n        display: block;\n        font-size: 80%; \n        color: ' + props.theme['$blockquote-small-color'] + ';\n        &::before {\n          content: "";\n        }\n        &::after {\n          content: \'\\00A0 \\2014\';\n        }\n      }\n    }\n    \n    /* Reboot from bootstrap v4 */\n    margin: 0 0 1rem;\n ';
});
Blockquote.defaultProps = defaultProps$6;
Blockquote.propTypes = propTypes$6;

var reboot = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGlobalStyles = getGlobalStyles;
exports.getGlobalStyleNoBootstrapProvider = getGlobalStyleNoBootstrapProvider;
exports.html = html;
exports.boxSizing = boxSizing;
exports.ie10FixViewport = ie10FixViewport;
exports.body = body;
exports.bodyUtils = bodyUtils;
exports.tabIndex = tabIndex;
exports.svg = svg;
exports.ie10FixHidden = ie10FixHidden;
exports.webkitFileUploadButton = webkitFileUploadButton;
var defaultProps = exports.defaultProps = {
  '$font-family-base': '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  '$font-size-base': '1rem',
  '$font-weight-base': '1.5',
  '$line-height-base': '1.5',
  '$body-color': '#292b2c',
  '$body-bg': '#fff'
};
function getGlobalStyles() {
  return '\n    html {\n      ' + html() + '\n    }\n    *,\n    *::before,\n    *::after {\n      ' + boxSizing() + '\n    }\n    @-ms-viewport { \n      ' + ie10FixViewport() + ' \n    }\n    body {\n      ' + bodyUtils() + '\n    }\n  ';
}
function getGlobalStyleNoBootstrapProvider() {
  var fontFamilyBase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$font-family-base'];
  var fontSizeBase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$font-size-base'];
  var fontWeightBase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$font-weight-base'];
  var lineHeightBase = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$line-height-base'];
  var bodyColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$body-color'];
  var bodyBg = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$body-bg'];
  return '\n  ' + getGlobalStyles() + '\n  body {\n  ' + body(fontFamilyBase, fontSizeBase, fontWeightBase, lineHeightBase, bodyColor, bodyBg) + ' \n}';
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
  var fontFamilyBase = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$font-family-base'];
  var fontSizeBase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$font-size-base'];
  var fontWeightBase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$font-weight-base'];
  var lineHeightBase = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$line-height-base'];
  var bodyColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$body-color'];
  var bodyBg = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$body-bg'];
  return '\n    margin: 0;\n    font-family: ' + fontFamilyBase + ';\n    font-size: ' + fontSizeBase + ';\n    font-weight: ' + fontWeightBase + ';\n    line-height: ' + lineHeightBase + ';\n    color: ' + bodyColor + ';\n    background-color: ' + bodyBg + ';\n    \n    ' + bodyUtils() + '\n    \n    [tabindex="-1"]:focus {\n      ' + tabIndex() + '\n    }\n    svg:not(:root) {\n      ' + svg() + '\n    }\n    [hidden] {\n      ' + ie10FixHidden() + '\n    }\n    ::-webkit-file-upload-button {\n      ' + webkitFileUploadButton() + '\n    }\n  ';
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
exports.default = {
  html: html,
  boxSizing: boxSizing,
  ie10FixViewport: ie10FixViewport,
  body: body,
  bodyUtils: bodyUtils,
  tabIndex: tabIndex,
  svg: svg,
  ie10FixHidden: ie10FixHidden,
  getGlobalStyles: getGlobalStyles,
  getGlobalStyleNoBootstrapProvider: getGlobalStyleNoBootstrapProvider,
  webkitFileUploadButton: webkitFileUploadButton
};
});
var rebootUtils = unwrapExports(reboot);
var reboot_1 = reboot.getGlobalStyles;
var reboot_2 = reboot.getGlobalStyleNoBootstrapProvider;

var conditional = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ifThen = ifThen;
exports.ifElse = ifElse;
function ifThen(conditions, returnTrue) {
  return ifElse(conditions, returnTrue, '');
}
function ifElse(conditions, returnTrue, returnFalse) {
  return conditions ? returnTrue : returnFalse;
}
exports.default = {
  ifThen: ifThen,
  ifElse: ifElse
};
});
unwrapExports(conditional);
var conditional_1 = conditional.ifThen;

var align = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlignUtilities = getAlignUtilities;
exports.alignBaseline = alignBaseline;
exports.alignTop = alignTop;
exports.alignMiddle = alignMiddle;
exports.alignBottom = alignBottom;
exports.alignTextBottom = alignTextBottom;
exports.alignTextTop = alignTextTop;
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
exports.default = {
  getAlignUtilities: getAlignUtilities,
  alignBaseline: alignBaseline,
  alignTop: alignTop,
  alignMiddle: alignMiddle,
  alignBottom: alignBottom,
  alignTextBottom: alignTextBottom,
  alignTextTop: alignTextTop
};
});
var alignUtils = unwrapExports(align);

var backgroundVariant = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.bgVariant = bgVariant;
var _color2 = _interopRequireDefault(color);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultProps = exports.defaultProps = {
  '$enable-hover-media-query': false
};
function bgVariant() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-media-query'];
  var selector = arguments[1];
  var bgColor = arguments[2];
  return '\n    ' + selector + ' {\n      background-color: ' + bgColor + ' !important;\n    }\n    a' + selector + ' {\n      ' + (_hover.hoverFocus)(enableHoverMediaQuery, 'background-color: ' + (_color2.default)(bgColor).darken(0.2).rgb() + ' !important;') + '\n    }\n  ';
}
exports.default = {
  bgVariant: bgVariant
};
});
unwrapExports(backgroundVariant);

var background = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bgFaded = exports.bgInverse = exports.bgDanger = exports.bgWarning = exports.bgInfo = exports.bgSuccess = exports.bgPrimary = exports.defaultProps = undefined;
exports.getBackgroundUtilities = getBackgroundUtilities;
var defaultProps = exports.defaultProps = {
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
  var $enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-media-query'];
  var $brandPrimary = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$brand-primary'];
  var $brandSuccess = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$brand-success'];
  var $brandInfo = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$brand-info'];
  var $brandWarning = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$brand-warning'];
  var $brandDanger = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$brand-danger'];
  var $brandInverse = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$brand-inverse'];
  var $grayLightest = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$gray-lightest'];
  return '\n    ' + (_backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-primary', $brandPrimary) + '\n    ' + (_backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-success', $brandSuccess) + '\n    ' + (_backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-info', $brandInfo) + '\n    ' + (_backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-warning', $brandWarning) + '\n    ' + (_backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-danger', $brandDanger) + '\n    ' + (_backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-inverse', $brandInverse) + '\n    ' + (_backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-faded', $grayLightest) + '\n  ';
}
var bgPrimary = exports.bgPrimary = function bgPrimary($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$brand-primary'];
  return (_backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-primary', bgColor);
};
var bgSuccess = exports.bgSuccess = function bgSuccess($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$brand-success'];
  return (_backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-success', bgColor);
};
var bgInfo = exports.bgInfo = function bgInfo($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$brand-info'];
  return (_backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-info', bgColor);
};
var bgWarning = exports.bgWarning = function bgWarning($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$brand-warning'];
  return (_backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-warning', bgColor);
};
var bgDanger = exports.bgDanger = function bgDanger($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$brand-danger'];
  return (_backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-danger', bgColor);
};
var bgInverse = exports.bgInverse = function bgInverse($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$brand-inverse'];
  return (_backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-inverse', bgColor);
};
var bgFaded = exports.bgFaded = function bgFaded($enableHoverMediaQuery) {
  var bgColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$gray-lightest'];
  return (_backgroundVariant.bgVariant)($enableHoverMediaQuery, '.bg-faded', bgColor);
};
exports.default = {
  defaultProps: defaultProps,
  getBackgroundUtilities: getBackgroundUtilities,
  bgFaded: bgFaded,
  bgPrimary: bgPrimary,
  bgSuccess: bgSuccess,
  bgInfo: bgInfo,
  bgWarning: bgWarning,
  bgDanger: bgDanger,
  bgInverse: bgInverse
};
});
var backgroundUtils = unwrapExports(background);
var background_9 = background.getBackgroundUtilities;

var borders = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.getBordersUtilities = getBordersUtilities;
exports.rounded = rounded;
exports.roundedTop = roundedTop;
exports.roundedRight = roundedRight;
exports.roundedBottom = roundedBottom;
exports.roundedLeft = roundedLeft;
exports.roundedCircle = roundedCircle;
exports.resetBorder = resetBorder;
exports.resetBorderTop = resetBorderTop;
exports.resetBorderRight = resetBorderRight;
exports.resetBorderBottom = resetBorderBottom;
exports.resetBorderLeft = resetBorderLeft;
exports.resetRounded = resetRounded;
exports.resetRoundedTop = resetRoundedTop;
exports.resetRoundedBottom = resetRoundedBottom;
exports.resetRoundedLeft = resetRoundedLeft;
exports.resetRoundedRight = resetRoundedRight;
var defaultProps = exports.defaultProps = {
  '$border-radius': '.25rem',
  '$enable-rounded': true
};
function getBordersUtilities() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];
  return '\n    ' + rounded(enableRounded, radius) + '\n    ' + roundedTop(enableRounded, radius) + '\n    ' + roundedRight(enableRounded, radius) + '\n    ' + roundedBottom(enableRounded, radius) + '\n    ' + roundedLeft(enableRounded, radius) + '\n    ' + roundedCircle() + '\n    ' + resetRounded() + '\n    ' + resetRoundedTop() + '\n    ' + resetRoundedRight() + '\n    ' + resetRoundedLeft() + '\n    ' + resetRoundedBottom() + '\n    ' + resetBorder() + '\n    ' + resetBorderTop() + '\n    ' + resetBorderRight() + '\n    ' + resetBorderLeft() + '\n    ' + resetBorderBottom() + '\n  ';
}
function rounded() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];
  return '\n    .rounded {\n      ' + (_borderRadius.borderRadius)(enableRounded, radius) + '\n    }\n  ';
}
function roundedTop() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];
  return '\n    .rounded-top {\n      ' + (_borderRadius.borderTopRadius)(enableRounded, radius) + '\n    }\n  ';
}
function roundedRight() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];
  return '\n    .rounded-right {\n      ' + (_borderRadius.borderRightRadius)(enableRounded, radius) + '\n    }\n  ';
}
function roundedBottom() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];
  return '\n    .rounded-bottom {\n      ' + (_borderRadius.borderBottomRadius)(enableRounded, radius) + '\n    }\n  ';
}
function roundedLeft() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$border-radius'];
  return '\n    .rounded-left {\n      ' + (_borderRadius.borderLeftRadius)(enableRounded, radius) + '\n    }\n  ';
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
exports.default = {
  defaultProps: defaultProps,
  getBordersUtilities: getBordersUtilities,
  rounded: rounded,
  roundedTop: roundedTop,
  roundedRight: roundedRight,
  roundedBottom: roundedBottom,
  roundedLeft: roundedLeft,
  roundedCircle: roundedCircle
};
});
var bordersUtils = unwrapExports(borders);

var clearfix_1$1 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearfix = clearfix;
function clearfix() {
  return "\n    &::after {\n      content: \"\";\n      display: table;\n      clear: both;\n    }\n  ";
}
exports.default = {
  clearfix: clearfix
};
});
unwrapExports(clearfix_1$1);
var clearfix_2$1 = clearfix_1$1.clearfix;

var clearfix = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClearfixUtilities = getClearfixUtilities;
exports.getClearfix = getClearfix;
function getClearfixUtilities() {
  return '\n   ' + getClearfix() + '\n  ';
}
function getClearfix() {
  return '\n    .clearfix {\n      ' + (_clearfix.clearfix)() + '\n    }\n  ';
}
exports.default = {
  getClearfixUtilities: getClearfixUtilities,
  getClearfix: getClearfix
};
});
var clearfixUtils = unwrapExports(clearfix);

var cursor = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCursorUtilities = getCursorUtilities;
function getCursorUtilities() {
  return "\n    .cursor-alias {\n      cursor: alias;\n    }\n    \n    .cursor-all-scroll {\n      cursor: all-scroll;\n    }\n    \n    .cursor-auto {\n      cursor: auto;\n    }\n    \n    .cursor-cell {\n      cursor: cell;\n    }\n    \n    .cursor-context-menu {\n      cursor: context-menu;\n    }\n    \n    .cursor-col-resize {\n      cursor: col-resize;\n    }\n    \n    .cursor-copy {\n      cursor: copy;\n    }\n    \n    .cursor-crosshair {\n      cursor: crosshair;\n    }\n    \n    .cursor-default {\n      cursor: default;\n    }\n    \n    .cursor-e-resize {\n      cursor: e-resize;\n    }\n    \n    .cursor-ew-resize {\n      cursor: ew-resize;\n    }\n    \n    .cursor-grab {\n      cursor: grab;\n    }\n    \n    .cursor-grabbing {\n      cursor: grabbing;\n    }\n    \n    .cursor-help {\n      cursor: help;\n    }\n    \n    .cursor-move {\n      cursor: move;\n    }\n    \n    .cursor-n-resize {\n      cursor: n-resize;\n    }\n    \n    .cursor-ne-resize {\n      cursor: ne-resize;\n    }\n    \n    .cursor-nesw-resize {\n      cursor: nesw-resize;\n    }\n    \n    .cursor-ns-resize {\n      cursor: ns-resize;\n    }\n    \n    .cursor-nw-resize {\n      cursor: nw-resize;\n    }\n    \n    .cursor-nwse-resize {\n      cursor: nwse-resize;\n    }\n    \n    .cursor-no-drop {\n      cursor: no-drop;\n    }\n    \n    .cursor-none {\n      cursor: none;\n    }\n    \n    .cursor-not-allowed {\n      cursor: not-allowed;\n    }\n    \n    .cursor-pointer {\n      cursor: pointer;\n    }\n    \n    .cursor-progress {\n      cursor: progress;\n    }\n    \n    .cursor-row-resize {\n      cursor: row-resize;\n    }\n    \n    .cursor-s-resize {\n      cursor: s-resize;\n    }\n    \n    .cursor-se-resize {\n      cursor: se-resize;\n    }\n    \n    .cursor-sw-resize {\n      cursor: sw-resize;\n    }\n    \n    .cursor-text {\n      cursor: text;\n    }\n    \n    .cursor-vertical-text {\n      cursor: vertical-text;\n    }\n    \n    .cursor-w-resize {\n      cursor: w-resize;\n    }\n    \n    .cursor-wait {\n      cursor: wait;\n    }\n    \n    .cursor-zoom-in {\n      cursor: zoom-in;\n    }\n    \n    .cursor-zoom-out {\n      cursor: zoom-out;\n    }\n    \n    .cursor-initial {\n      cursor: initial;\n    }\n  ";
}
exports.default = {
  getCursorUtilities: getCursorUtilities
};
});
var cursorUtils = unwrapExports(cursor);

var breakpoints = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.breakpointNext = breakpointNext;
exports.breakpointMin = breakpointMin;
exports.breakpointMax = breakpointMax;
exports.breakpointInfix = breakpointInfix;
exports.mediaBreakpointUp = mediaBreakpointUp;
exports.mediaBreakpointDown = mediaBreakpointDown;
exports.mediaBreakpointBetween = mediaBreakpointBetween;
exports.mediaBreakpointOnly = mediaBreakpointOnly;
var _unitUtils2 = _interopRequireDefault(unitUtils);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultProps = exports.defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};
function breakpointNext(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var breakpointNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Object.keys(breakpoints);
  var n = breakpointNames.indexOf(name);
  if (n !== -1 && n + 1 < breakpointNames.length) {
    return breakpointNames[n + 1];
  }
  return null;
}
function breakpointMin(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var min = breakpoints[name];
  return min !== '0' ? min : null;
}
function breakpointMax(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var next = breakpointNext(name, breakpoints);
  if (next) {
    var min = _unitUtils2.default.rmUnit(breakpointMin(next, breakpoints), _unitUtils2.default.UNIT.PX);
    return (min - 1).toString() + _unitUtils2.default.UNIT.PX;
  }
  return null;
}
function breakpointInfix(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  return breakpointMin(name, breakpoints) == null ? '' : '-' + name;
}
function mediaBreakpointUp(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var content = arguments[2];
  var min = breakpointMin(name, breakpoints);
  if (min) {
    return '\n      @media (min-width: ' + min + ') {\n        ' + content + '\n      }\n    ';
  }
  return '\n    ' + content + '\n  ';
}
function mediaBreakpointDown(name) {
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var content = arguments[2];
  var max = breakpointMax(name, breakpoints);
  if (max) {
    return '\n      @media (max-width: ' + max + ') {\n        ' + content + '\n      }\n    ';
  }
  return '\n    ' + content + '\n  ';
}
function mediaBreakpointBetween(lower, upper) {
  var breakpoints = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$grid-breakpoints'];
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
  var breakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var content = arguments[2];
  return mediaBreakpointBetween(name, name, breakpoints, content);
}
exports.default = {
  defaultProps: defaultProps,
  up: mediaBreakpointUp,
  down: mediaBreakpointDown,
  between: mediaBreakpointBetween,
  only: mediaBreakpointOnly
};
});
unwrapExports(breakpoints);
var breakpoints_6 = breakpoints.mediaBreakpointUp;

var display = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.getDisplayUtilities = getDisplayUtilities;
var defaultProps = exports.defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};
function getDisplayUtilities() {
  var gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-breakpoints'];
  var utilityList = [];
  Object.keys(gridBreakpoints).forEach(function (breakpoint) {
    var infix = (_breakpoints.breakpointInfix)(breakpoint, gridBreakpoints);
    utilityList.push('\n      ' + (_breakpoints.mediaBreakpointUp)(breakpoint, gridBreakpoints, '\n        .d' + infix + '-none { display: none !important; }\n        .d' + infix + '-inline { display: inline !important; }\n        .d' + infix + '-inline-block { display: inline-block !important; }\n        .d' + infix + '-block { display: block !important; }\n        .d' + infix + '-table { display: table !important; }\n        .d' + infix + '-table-cell { display: table-cell !important; }\n        .d' + infix + '-flex { display: flex !important; }\n        .d' + infix + '-inline-flex { display: inline-flex !important; }\n      ') + '\n    ');
  });
  utilityList.push('\n    .d-print-block {\n      display: none !important;\n    \n      @media print {\n        display: block !important;\n      }\n    }\n    \n    .d-print-inline {\n      display: none !important;\n    \n      @media print {\n        display: inline !important;\n      }\n    }\n    \n    .d-print-inline-block {\n      display: none !important;\n    \n      @media print {\n        display: inline-block !important;\n      }\n    }\n    \n    .d-print-none {\n      @media print {\n        display: none !important;\n      }\n    }\n  ');
  return utilityList.join('\n');
}
exports.default = {
  defaultProps: defaultProps,
  getDisplayUtilities: getDisplayUtilities
};
});
var displayUtils = unwrapExports(display);

var flex = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.getFlexUtilities = getFlexUtilities;
var defaultProps = exports.defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};
function getFlexUtilities() {
  var gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-breakpoints'];
  var flexUtilityList = [];
  Object.keys(gridBreakpoints).forEach(function (breakpoint) {
    var infix = (_breakpoints.breakpointInfix)(breakpoint, gridBreakpoints);
    flexUtilityList.push('\n      /* Flex column reordering */\n      ' + (_breakpoints.mediaBreakpointUp)(breakpoint, gridBreakpoints, '\n        .flex' + infix + '-first { order: -1; }\n        .flex' + infix + '-last { order: 1; }\n        .flex' + infix + '-unordered { order: 0; }\n      ') + '\n  \n      /* Flex direction */ \n      ' + (_breakpoints.mediaBreakpointUp)(breakpoint, gridBreakpoints, '\n        .flex' + infix + '-row            { flex-direction: row !important; }\n        .flex' + infix + '-column         { flex-direction: column !important; }\n        .flex' + infix + '-row-reverse    { flex-direction: row-reverse !important; }\n        .flex' + infix + '-column-reverse { flex-direction: column-reverse !important; }\n      ') + '\n      \n      /* Flex wrap */ \n      ' + (_breakpoints.mediaBreakpointUp)(breakpoint, gridBreakpoints, '\n        .flex' + infix + '-wrap         { flex-wrap: wrap !important; }\n        .flex' + infix + '-nowrap       { flex-wrap: nowrap !important; }\n        .flex' + infix + '-wrap-reverse { flex-wrap: wrap-reverse !important; }\n      ') + '\n      /* Flex justify-content */ \n      ' + (_breakpoints.mediaBreakpointUp)(breakpoint, gridBreakpoints, '\n        .justify-content' + infix + '-start   { justify-content: flex-start !important; }\n        .justify-content' + infix + '-end     { justify-content: flex-end !important; }\n        .justify-content' + infix + '-center  { justify-content: center !important; }\n        .justify-content' + infix + '-between { justify-content: space-between !important; }\n        .justify-content' + infix + '-around  { justify-content: space-around !important; }\n      ') + '\n      /* Flex align-items */ \n      ' + (_breakpoints.mediaBreakpointUp)(breakpoint, gridBreakpoints, '\n        .align-items' + infix + '-start    { align-items: flex-start !important; }\n        .align-items' + infix + '-end      { align-items: flex-end !important; }\n        .align-items' + infix + '-center   { align-items: center !important; }\n        .align-items' + infix + '-baseline { align-items: baseline !important; }\n        .align-items' + infix + '-stretch  { align-items: stretch !important; }\n      ') + '\n      /* Flex align-content */ \n      ' + (_breakpoints.mediaBreakpointUp)(breakpoint, gridBreakpoints, '\n        .align-content' + infix + '-start   { align-content: flex-start !important; }\n        .align-content' + infix + '-end     { align-content: flex-end !important; }\n        .align-content' + infix + '-center  { align-content: center !important; }\n        .align-content' + infix + '-between { align-content: space-between !important; }\n        .align-content' + infix + '-around  { align-content: space-around !important; }\n        .align-content' + infix + '-stretch { align-content: stretch !important; }\n      ') + '\n      /* Flex align-self */ \n      ' + (_breakpoints.mediaBreakpointUp)(breakpoint, gridBreakpoints, '\n        .align-self' + infix + '-auto     { align-self: auto !important; }\n        .align-self' + infix + '-start    { align-self: flex-start !important; }\n        .align-self' + infix + '-end      { align-self: flex-end !important; }\n        .align-self' + infix + '-center   { align-self: center !important; }\n        .align-self' + infix + '-baseline { align-self: baseline !important; }\n        .align-self' + infix + '-stretch  { align-self: stretch !important; }\n      ') + ' \n    ');
  });
  return flexUtilityList.join('\n');
}
exports.default = {
  defaultProps: defaultProps,
  getFlexUtilities: getFlexUtilities
};
});
var flexUtils = unwrapExports(flex);

var float_1$1 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.floatLeft = floatLeft;
exports.floatRight = floatRight;
exports.floatNone = floatNone;
function floatLeft() {
  return "\n    float: left !important;\n  ";
}
function floatRight() {
  return "\n    float: right !important;\n  ";
}
function floatNone() {
  return "\n    float: none !important;\n  ";
}
exports.default = {
  floatLeft: floatLeft,
  floatRight: floatRight,
  floatNone: floatNone
};
});
unwrapExports(float_1$1);

var float_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.getFloatUtilities = getFloatUtilities;
var defaultProps = exports.defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};
function getFloatUtilities() {
  var gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-breakpoints'];
  var floatUtilityList = [];
  Object.keys(gridBreakpoints).forEach(function (breakpoint) {
    var infix = (_breakpoints.breakpointInfix)(breakpoint, gridBreakpoints);
    var floatUtility = (_breakpoints.mediaBreakpointUp)(breakpoint, gridBreakpoints, '\n      .float' + infix + '-left {\n        ' + (_float.floatLeft)() + '\n      }\n      .float' + infix + '-right {\n        ' + (_float.floatRight)() + '\n      }\n      .float' + infix + '-none {\n        ' + (_float.floatNone)() + '\n      }\n    ');
    floatUtilityList.push(floatUtility);
  });
  return floatUtilityList.join('\n');
}
exports.default = {
  defaultProps: defaultProps,
  getFloatUtilities: getFloatUtilities
};
});
var floatUtils = unwrapExports(float_1);

var position = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPositionUtilities = getPositionUtilities;
exports.fixedTop = fixedTop;
exports.fixedBottom = fixedBottom;
exports.stickTop = stickTop;
var defaultProps = exports.defaultProps = {
  '$zindex-fixed': '1030',
  '$zindex-sticky': '1030'
};
function getPositionUtilities() {
  var zindexFixed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$zindex-fixed'];
  var zindexSticky = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$zindex-sticky'];
  return '\n    ' + fixedTop(zindexFixed) + '\n    ' + fixedBottom(zindexFixed) + '\n    ' + stickTop(zindexSticky) + '\n  ';
}
function fixedTop() {
  var zindexFixed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$zindex-fixed'];
  return '\n  .fixed-top {\n    position: fixed !important;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: ' + zindexFixed + ';\n  }\n  ';
}
function fixedBottom() {
  var zindexFixed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$zindex-fixed'];
  return '\n    .fixed-bottom {\n      position: fixed !important;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: ' + zindexFixed + ';\n    }\n  ';
}
function stickTop() {
  var zindexSticky = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$zindex-sticky'];
  return '\n    .sticky-top {\n      position: sticky !important;\n      top: 0;\n      z-index: ' + zindexSticky + ';\n    }\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  getPositionUtilities: getPositionUtilities,
  fixedTop: fixedTop,
  fixedBottom: fixedBottom,
  stickTop: stickTop
};
});
var positionUtils = unwrapExports(position);

var screenReader = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.srOnly = srOnly;
exports.srOnlyFocusable = srOnlyFocusable;
function srOnly() {
  return "\n    position: absolute !important;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0,0,0,0);\n    border: 0;\n  ";
}
function srOnlyFocusable() {
  return "\n    &:active,\n    &:focus {\n      position: static;\n      width: auto;\n      height: auto;\n      margin: 0;\n      overflow: visible;\n      clip: auto;\n    }\n  ";
}
exports.default = {
  srOnly: srOnly,
  srOnlyFocusable: srOnlyFocusable
};
});
unwrapExports(screenReader);

var screenreaders = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScreenReadersUtilities = getScreenReadersUtilities;
function getScreenReadersUtilities() {
  return '\n    .sr-only {\n      ' + (_screenReader.srOnly)() + '\n    }\n    \n    .sr-only-focusable {\n      ' + (_screenReader.srOnlyFocusable)() + '\n    }\n  ';
}
exports.default = {
  getScreenReadersUtilities: getScreenReadersUtilities
};
});
var screenreadersUtils = unwrapExports(screenreaders);

var sizing = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSizingUtilities = getSizingUtilities;
var defaultProps = exports.defaultProps = {
  $sizes: {
    25: '25%',
    50: '50%',
    75: '75%',
    100: '100%'
  }
};
function getSizingUtilities() {
  var sizes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$sizes'];
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
exports.default = {
  defaultProps: defaultProps,
  getSizingUtilities: getSizingUtilities
};
});
var sizingUtils = unwrapExports(sizing);

var spacing = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.getSpacingUtilities = getSpacingUtilities;
var defaultProps = exports.defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
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
  var gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-breakpoints'];
  var spacers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$spacers'];
  var abbrevs = {
    margin: 'm',
    padding: 'p'
  };
  var spacingUtilityList = [];
  var infixList = [];
  Object.keys(gridBreakpoints).forEach(function (breakpoint) {
    var infix = (_breakpoints.breakpointInfix)(breakpoint, gridBreakpoints);
    infixList.push(infix);
    Object.keys(abbrevs).forEach(function (prop) {
      var abbrev = abbrevs[prop];
      Object.keys(spacers).forEach(function (size) {
        var lengths = spacers[size];
        spacingUtilityList.push((_breakpoints.mediaBreakpointUp)(breakpoint, gridBreakpoints, '\n          .' + abbrev + infix + '-' + size + ' { ' + prop + ':        ' + lengths.y + ' ' + lengths.x + ' !important; } /* a = All sides */\n          .' + abbrev + 't' + infix + '-' + size + ' { ' + prop + '-top:    ' + lengths.y + ' !important; }\n          .' + abbrev + 'r' + infix + '-' + size + ' { ' + prop + '-right:  ' + lengths.x + ' !important; }\n          .' + abbrev + 'b' + infix + '-' + size + ' { ' + prop + '-bottom: ' + lengths.y + ' !important; }\n          .' + abbrev + 'l' + infix + '-' + size + ' { ' + prop + '-left:   ' + lengths.x + ' !important; }\n          .' + abbrev + 'x' + infix + '-' + size + ' {\n            ' + prop + '-right:  ' + lengths.x + ' !important;\n            ' + prop + '-left:   ' + lengths.x + ' !important;\n          }\n          .' + abbrev + 'y' + infix + '-' + size + ' {\n            ' + prop + '-top:    ' + lengths.y + ' !important;\n            ' + prop + '-bottom: ' + lengths.y + ' !important;\n          }\n        '));
      });
    });
  });
  var infixUtilityList = infixList.map(function (infix) {
    return '\n    .m' + infix + '-auto  { margin:        auto !important; }\n    .mt' + infix + '-auto { margin-top:    auto !important; }\n    .mr' + infix + '-auto { margin-right:  auto !important; }\n    .mb' + infix + '-auto { margin-bottom: auto !important; }\n    .ml' + infix + '-auto { margin-left:   auto !important; }\n    .mx' + infix + '-auto {\n      margin-right: auto !important;\n      margin-left:  auto !important;\n    }\n    .my' + infix + '-auto {\n      margin-top:    auto !important;\n      margin-bottom: auto !important;\n    }\n  ';
  });
  return '\n    ' + infixUtilityList.join('\n') + '\n    ' + spacingUtilityList.join('\n') + '\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  getSpacingUtilities: getSpacingUtilities
};
});
var spacingUtils = unwrapExports(spacing);

var textTruncate_1 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textTruncate = textTruncate;
function textTruncate() {
  return "\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  ";
}
exports.default = {
  textTruncate: textTruncate
};
});
unwrapExports(textTruncate_1);

var textHide_1 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textHide = textHide;
function textHide() {
  return "\n    font: 0/0 a;\n    color: transparent;\n    text-shadow: none;\n    background-color: transparent;\n    border: 0;\n  ";
}
exports.default = {
  textHide: textHide
};
});
unwrapExports(textHide_1);

var textEmphasis = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.textEmphasisVariant = textEmphasisVariant;
var _color2 = _interopRequireDefault(color);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultProps = exports.defaultProps = {
  '$enable-hover-media-query': false
};
function textEmphasisVariant() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-media-query'];
  var parent = arguments[1];
  var textColor = arguments[2];
  return '\n  ' + parent + ' {\n    color: ' + textColor + ' !important;\n  }\n  a' + parent + ' {\n  ' + (_hover.hoverFocus)(enableHoverMediaQuery, 'color: ' + (_color2.default)(textColor).darken(0.20).rgb() + ' !important;') + '\n  }\n';
}
exports.default = {
  defaultProps: defaultProps,
  textEmphasisVariant: textEmphasisVariant
};
});
unwrapExports(textEmphasis);

var text = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.getTextUtilities = getTextUtilities;
var defaultProps = exports.defaultProps = {
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
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-media-query'];
  var gridBreakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var fontWeightNormal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$font-weight-normal'];
  var fontWeightBold = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$font-weight-bold'];
  var textMuted = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$text-muted'];
  var brandPrimary = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$brand-primary'];
  var brandSuccess = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$brand-success'];
  var brandInfo = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$brand-info'];
  var brandWarning = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$brand-warning'];
  var brandDanger = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$brand-danger'];
  var grayDark = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$gray-dark'];
  var responseAlignmentList = [];
  Object.keys(gridBreakpoints).forEach(function (bp) {
    var infix = (_breakpoints.breakpointInfix)(bp, gridBreakpoints);
    var responsiveAlignement = (_breakpoints.mediaBreakpointUp)(bp, gridBreakpoints, '\n      .text' + infix + '-left { text-align: left !important; }\n      .text' + infix + '-right  { text-align: right !important; }\n      .text' + infix + '-center { text-align: center !important; }\n    ');
    responseAlignmentList.push(responsiveAlignement);
  });
  return '\n    /* Text */\n\n    /* Alignment */\n\n    .text-justify        { text-align: justify !important; }\n    .text-nowrap         { white-space: nowrap !important; }\n    .text-truncate       { ' + (_textTruncate.textTruncate)() + ' }\n\n    /* Responsive alignment */\n\n    ' + responseAlignmentList.join('\n') + '\n\n    /* Transformation */\n\n    .text-lowercase      { text-transform: lowercase !important; }\n    .text-uppercase      { text-transform: uppercase !important; }\n    .text-capitalize     { text-transform: capitalize !important; }\n\n    /* Weight and italics */\n\n    .font-weight-normal  { font-weight: ' + fontWeightNormal + '; }\n    .font-weight-bold    { font-weight: ' + fontWeightBold + '; }\n    .font-italic         { font-style: italic; }\n\n    /* Contextual colors */\n\n    .text-white {\n      color: #fff !important;\n    }\n\n    ' + (_textEmphasis.textEmphasisVariant)(enableHoverMediaQuery, '.text-muted', textMuted) + '\n\n    ' + (_textEmphasis.textEmphasisVariant)(enableHoverMediaQuery, '.text-primary', brandPrimary) + '\n\n    ' + (_textEmphasis.textEmphasisVariant)(enableHoverMediaQuery, '.text-success', brandSuccess) + '\n\n    ' + (_textEmphasis.textEmphasisVariant)(enableHoverMediaQuery, '.text-info', brandInfo) + '\n\n    ' + (_textEmphasis.textEmphasisVariant)(enableHoverMediaQuery, '.text-warning', brandWarning) + '\n\n    ' + (_textEmphasis.textEmphasisVariant)(enableHoverMediaQuery, '.text-danger', brandDanger) + '\n\n    /* Font color */\n\n    ' + (_textEmphasis.textEmphasisVariant)(enableHoverMediaQuery, '.text-gray-dark', grayDark) + '\n\n    /* Misc */\n\n    .text-hide {\n      ' + (_textHide.textHide)() + '\n    }\n\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  getTextUtilities: getTextUtilities
};
});
var textUtils = unwrapExports(text);

var parseTransition_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var parseTransition = function parseTransition(transitions) {
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
};
exports.default = parseTransition;
module.exports = exports['default'];
});
unwrapExports(parseTransition_1);

var transition_1$1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transition = transition;
var defaultProps = exports.defaultProps = {
  '$enable-transitions': true
};
function transition() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-transitions'];
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (enableTransitions && args.length) {
    return '\n      transition: ' + args.join(' ') + ';\n    ';
  }
  return '';
}
exports.default = {
  transition: transition
};
});
unwrapExports(transition_1$1);
var transition_2$1 = transition_1$1.transition;

var transition = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.getTransitionUtilities = getTransitionUtilities;
exports.fade = fade;
exports.collapse = collapse;
exports.getReactTransition = getReactTransition;
var _parseTransition2 = _interopRequireDefault(parseTransition_1);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultProps = exports.defaultProps = {
  '$enable-transitions': true,
  '$transition-fade': 'opacity .15s linear',
  '$transition-collapse': 'height .35s ease'
};
function getTransitionUtilities() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-transitions'];
  var transitionFade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$transition-fade'];
  var transitionCollapse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$transition-collapse'];
  return '\n    ' + fade(enableTransitions, transitionFade) + '\n    ' + collapse(enableTransitions, transitionCollapse) + '\n  ';
}
function fade() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-transitions'];
  var transitionFade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$transition-fade'];
  return '\n    .fade,\n     &.fade {\n      opacity: 0;\n      ' + (_transition.transition)(enableTransitions, transitionFade) + '\n    \n      &.show {\n        opacity: 1;\n      }\n    }\n  ';
}
function collapse() {
  var enableTransitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-transitions'];
  var transitionCollapse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$transition-collapse'];
  return '\n    .collapse {\n      display: none;\n      &.show {\n        display: block;\n      }\n    }\n    \n    tr {\n      &.collapse.show {\n        display: table-row;\n      }\n    }\n    \n    tbody {\n      &.collapse.show {\n        display: table-row-group;\n      }\n    }\n    \n    .collapsing {\n      position: relative;\n      height: 0;\n      overflow: hidden;\n      ' + (_transition.transition)(enableTransitions, transitionCollapse) + '\n    }\n  ';
}
function getReactTransition(enableTransition, transition) {
  var transitionList = (_parseTransition2.default)(transition);
  var _transitionList$ = transitionList[0],
      property = _transitionList$.property,
      duration = _transitionList$.duration,
      timingFunction = _transitionList$.timingFunction,
      delay = _transitionList$.delay;
  return (_transition.transition)(enableTransition, property + ' ' + duration + 'ms ' + timingFunction + ' ' + delay + 'ms');
}
exports.default = {
  defaultProps: defaultProps,
  getTransitionUtilities: getTransitionUtilities,
  getReactTransition: getReactTransition,
  fade: fade,
  collapse: collapse
};
});
var transitionUtils = unwrapExports(transition);
var transition_3 = transition.fade;

var visibility$1 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.invisible = invisible;
function invisible(visibility) {
  return "\n    visibility: " + visibility + " !important;\n  ";
}
exports.default = {
  invisible: invisible
};
});
unwrapExports(visibility$1);

var visibility = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVisibilityUtilities = getVisibilityUtilities;
function getVisibilityUtilities() {
  return '\n    .visible {\n      ' + (_visibility.invisible)('visible') + '\n    }\n    \n    .invisible {\n      ' + (_visibility.invisible)('hidden') + '\n    }\n   \n  ';
}
exports.default = {
  getVisibilityUtilities: getVisibilityUtilities
};
});
var visibilityUtils = unwrapExports(visibility);

var defaultProps$8 = {
  theme: theme,
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
var propTypes$8 = {
  children: propTypes$1.node,
  theme: propTypes$1.object,
  utils: propTypes$1.shape({
    align: propTypes$1.bool,
    background: propTypes$1.bool,
    a: propTypes$1.bool,
    border: propTypes$1.bool,
    clearfix: propTypes$1.bool,
    display: propTypes$1.bool,
    flex: propTypes$1.bool,
    float: propTypes$1.bool,
    position: propTypes$1.bool,
    screenreaders: propTypes$1.bool,
    sizing: propTypes$1.bool,
    spacing: propTypes$1.bool,
    text: propTypes$1.bool,
    transition: propTypes$1.bool,
    visibility: propTypes$1.bool
  })
};
var UtilityProvider = styled.div.withConfig({
  displayName: 'UtilityProvider'
})(['', ''], function (props) {
  return '\n    ' + rebootUtils.body(props.theme['$font-family-base'], props.theme['$font-size-base'], props.theme['$font-weight-base'], props.theme['$line-height-base'], props.theme['$body-color'], props.theme['$body-bg']) + '\n    ' + conditional_1(props.utils.align, alignUtils.getAlignUtilities()) + '\n    ' + conditional_1(props.utils.background, backgroundUtils.getBackgroundUtilities(props.theme['$enable-hover-media-query'], props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$brand-inverse'], props.theme['$gray-lightest'])) + '\n    ' + conditional_1(props.utils.border, bordersUtils.getBordersUtilities(props.theme['$enable-rounded'], props.theme['$border-radius'])) + '\n    ' + conditional_1(props.utils.clearfix, clearfixUtils.getClearfixUtilities()) + '\n    ' + conditional_1(props.utils.cursor, cursorUtils.getCursorUtilities()) + '\n    ' + conditional_1(props.utils.display, displayUtils.getDisplayUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + conditional_1(props.utils.flex, flexUtils.getFlexUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + conditional_1(props.utils.float, floatUtils.getFloatUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + conditional_1(props.utils.screenreaders, screenreadersUtils.getScreenReadersUtilities()) + '\n    ' + conditional_1(props.utils.spacing, spacingUtils.getSpacingUtilities(props.theme['$grid-breakpoints'], props.theme['$spacers']
  )) + '\n    ' + conditional_1(props.utils.text, textUtils.getTextUtilities(props.theme['$enable-hover-media-query'], props.theme['$grid-breakpoints'], props.theme['$font-weight-normal'], props.theme['$font-weight-bold'], props.theme['$text-muted'], props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$gray-dark'])) + '\n    ' + conditional_1(props.utils.transition, transitionUtils.getTransitionUtilities(props.theme['$enable-transitions'], props.theme['$transition-fade'], props.theme['$transition-collapse'])) + '\n    ' + conditional_1(props.utils.visibility, visibilityUtils.getVisibilityUtilities(props.theme['$grid-breakpoints'])) + '\n    ' + conditional_1(props.utils.position, positionUtils.getPositionUtilities(props.theme['$zindex-fixed'], props.theme['$zindex-sticky'])) + '\n    ' + conditional_1(props.utils.sizing, sizingUtils.getSizingUtilities(props.theme['$sizes']
  )) + '\n  ';
});
UtilityProvider.defaultProps = defaultProps$8;
UtilityProvider.propTypes = propTypes$8;

var _templateObject = taggedTemplateLiteral(['\n        ', '\n      '], ['\n        ', '\n      ']);
var defaultProps$7 = {
  theme: theme,
  injectGlobal: true,
  utils: defaultProps$8.utils
};
var propTypes$7 = {
  children: propTypes$1.node,
  injectGlobal: propTypes$1.bool,
  theme: propTypes$1.object,
  utils: propTypes$1.shape({
    align: propTypes$1.bool,
    background: propTypes$1.bool,
    a: propTypes$1.bool,
    border: propTypes$1.bool,
    clearfix: propTypes$1.bool,
    display: propTypes$1.bool,
    flex: propTypes$1.bool,
    float: propTypes$1.bool,
    position: propTypes$1.bool,
    screenreaders: propTypes$1.bool,
    sizing: propTypes$1.bool,
    spacing: propTypes$1.bool,
    text: propTypes$1.bool,
    transition: propTypes$1.bool,
    visibility: propTypes$1.bool
  })
};
var BootstrapProvider = function (_React$Component) {
  inherits(BootstrapProvider, _React$Component);
  function BootstrapProvider() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck(this, BootstrapProvider);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = BootstrapProvider.__proto__ || Object.getPrototypeOf(BootstrapProvider)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      theme: {},
      isWindowPhone8Fixed: null
    }, _this.setTheme = function (_ref2, cb) {
      var userTheme = _ref2.theme;
      var theme = _this.makeTheme({ theme: userTheme });
      _this.setState({ theme: theme }, cb);
    }, _this.makeTheme = function (_ref3) {
      var userTheme = _ref3.theme;
      var theme = makeThemeBs(userTheme);
      var metaKeyList = Object.keys(theme).filter(function (f) {
        return f[0] === '_';
      });
      metaKeyList.forEach(function (k) {
        delete theme[k];
      });
      return theme;
    }, _this.injectGlobal = function () {
      if (_this.props.injectGlobal) {
        injectGlobal(_templateObject, getGlobalStyleNoBootstrapProvider(_this.state.theme['$font-family-base'] || themeBs['$font-family-base'], _this.state.theme['$font-size-base'] || themeBs['$font-size-base'], _this.state.theme['$font-weight-base'] || themeBs['$font-weight-base'], _this.state.theme['$line-height-base'] || themeBs['$line-height-base'], _this.state.theme['$body-color'] || themeBs['$body-color'], _this.state.theme['$body-bg'] || themeBs['$body-bg']));
      }
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }
  createClass(BootstrapProvider, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setTheme(this.props, this.injectGlobal);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.windowPhone8Fix();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (JSON.stringify(this.makeTheme(this.props)) !== JSON.stringify(nextProps.theme)) {
        this.setTheme(nextProps);
      }
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
          utils = _props.utils;
      return React.createElement(
        ThemeProvider,
        { theme: this.state.theme },
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
BootstrapProvider.defaultProps = defaultProps$7;
BootstrapProvider.propTypes = propTypes$7;
BootstrapProvider.defaultProps = defaultProps$7;
BootstrapProvider.propTypes = propTypes$7;

var defaultProps$9 = {
  tag: 'ol',
  theme: {
    '$breadcrumb-padding-y': '.75rem',
    '$breadcrumb-padding-x': '1rem',
    '$breadcrumb-item-padding': '.5rem',
    '$breadcrumb-bg': '#eceeef',
    '$breadcrumb-divider-color': '#636c72',
    '$breadcrumb-active-color': '#636c72',
    '$breadcrumb-divider': '"/"',
    '$enable-rounded': false
  }
};
var propTypes$9 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element]),
  theme: propTypes$1.shape({
    '$breadcrumb-padding-y': propTypes$1.string,
    '$breadcrumb-padding-x': propTypes$1.string,
    '$breadcrumb-item-padding': propTypes$1.string,
    '$breadcrumb-bg': propTypes$1.string,
    '$breadcrumb-divider-color': propTypes$1.string,
    '$breadcrumb-active-color': propTypes$1.string,
    '$breadcrumb-divider': propTypes$1.string,
    '$enable-rounded': propTypes$1.bool
  }),
  cssModule: propTypes$1.object
};
var BreadcrumbUnstyled = function (_React$Component) {
  inherits(BreadcrumbUnstyled, _React$Component);
  function BreadcrumbUnstyled() {
    classCallCheck(this, BreadcrumbUnstyled);
    return possibleConstructorReturn(this, (BreadcrumbUnstyled.__proto__ || Object.getPrototypeOf(BreadcrumbUnstyled)).apply(this, arguments));
  }
  createClass(BreadcrumbUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames(className, 'breadcrumb'), cssModule)
      }, attributes));
    }
  }]);
  return BreadcrumbUnstyled;
}(React.Component);
BreadcrumbUnstyled.defaultProps = defaultProps$9;
BreadcrumbUnstyled.propTypes = propTypes$9;
var Breadcrumb = styled(BreadcrumbUnstyled).withConfig({
  displayName: 'Breadcrumb'
})(['', ''], function (props) {
  return '\n    &.breadcrumb {\n      padding: ' + props.theme['$breadcrumb-padding-y'] + ' ' + props.theme['$breadcrumb-padding-x'] + ';\n      margin-bottom: ' + props.theme['$spacer-y'] + ';\n      list-style: none;\n      background-color: ' + props.theme['$breadcrumb-bg'] + ';\n \n      ' + borderRadius_2(props.theme['$enable-rounded'], props.theme['$border-radius']) + '\n            \n      ' + clearfix_2$1() + '\n    }\n\n    & .breadcrumb-item {\n      float: left;\n    \n      /* The separator between breadcrumbs (by default, a forward-slash: "/") */\n      + .breadcrumb-item::before {\n        display: inline-block; /* Suppress underlining of the separator in modern browsers */\n        padding-right: ' + props.theme['$breadcrumb-item-padding'] + ';\n        padding-left: ' + props.theme['$breadcrumb-item-padding'] + ';\n        color: ' + props.theme['$breadcrumb-divider-color'] + ';\n        content: ' + props.theme['$breadcrumb-divider'] + ';\n      }\n  \n      /* IE9-11 hack to properly handle hyperlink underlines for breadcrumbs built\n       without \'ul\'s. The \'::before\' pseudo-element generates an element\n       *within* the .breadcrumb-item and thereby inherits the \'text-decoration\'.\n      \n       To trick IE into suppressing the underline, we give the pseudo-element an\n       underline and then immediately remove it.\n      */\n      \n      + .breadcrumb-item:hover::before {\n        text-decoration: underline;\n      }\n      + .breadcrumb-item:hover::before {\n        text-decoration: none;\n      }\n    \n      &.active {\n        color: ' + props.theme['$breadcrumb-active-color'] + ';\n      }\n    }\n  ';
});
Breadcrumb.defaultProps = defaultProps$9;
Breadcrumb.propTypes = propTypes$9;

var defaultProps$10 = {
  tag: 'li'
};
var propTypes$10 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  active: propTypes$1.bool,
  cssModule: propTypes$1.object
};
var BreadcrumbItem = function (_React$Component) {
  inherits(BreadcrumbItem, _React$Component);
  function BreadcrumbItem() {
    classCallCheck(this, BreadcrumbItem);
    return possibleConstructorReturn(this, (BreadcrumbItem.__proto__ || Object.getPrototypeOf(BreadcrumbItem)).apply(this, arguments));
  }
  createClass(BreadcrumbItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          active = _props.active,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'active', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames(className, 'breadcrumb-item', {
          active: active
        }), cssModule)
      }, attributes));
    }
  }]);
  return BreadcrumbItem;
}(React.Component);
BreadcrumbItem.defaultProps = defaultProps$10;
BreadcrumbItem.propTypes = propTypes$10;
BreadcrumbItem.defaultProps = defaultProps$10;
BreadcrumbItem.propTypes = propTypes$10;

var boxShadow_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.boxShadow = boxShadow;
var defaultProps = exports.defaultProps = {
  '$enable-shadows': false
};
function boxShadow() {
  var enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-shadows'];
  if (enableShadows) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return '\n      box-shadow: ' + args.join(' ') + ';\n    ';
  }
  return '';
}
exports.default = {
  defaultProps: defaultProps,
  boxShadow: boxShadow
};
});
unwrapExports(boxShadow_1);
var boxShadow_2 = boxShadow_1.boxShadow;

var buttons = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.buttonVariant = buttonVariant;
exports.buttonOutlineVariant = buttonOutlineVariant;
exports.buttonSize = buttonSize;
exports.button = button;
var _color2 = _interopRequireDefault(color);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultProps = exports.defaultProps = {
  '$enable-shadows': true,
  '$enable-hover-media-query': false,
  '$enable-transitions': true,
  '$enable-rounded': true,
  '$font-weight-normal': 'normal',
  '$btn-font-weight': 'normal',
  '$btn-line-height': '1.25',
  '$btn-transition': 'all .2s ease-in-out',
  '$input-btn-border-width': '1px',
  '$btn-padding-x': '1rem',
  '$btn-padding-y': '.5rem',
  '$font-size-base': '1rem',
  '$btn-border-radius': '.25rem',
  '$btn-box-shadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)',
  '$btn-focus-box-shadow': '0 0 0 2px rgba(2, 117, 216, 0.25)',
  '$btn-active-box-shadow': 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
  '$cursor-disabled': 'not-allowed',
  '$link-color': '#0275d8',
  '$link-hover-color': 'hsl(207.79999999999995, 98.2%, 27.8%)',
  '$link-hover-decoration': 'underline',
  '$btn-link-disabled-color': '#636c72',
  '$btn-padding-x-lg': '1.5rem',
  '$btn-padding-y-lg': '.75rem',
  '$font-size-lg': '1.25rem',
  '$btn-border-radius-lg': '.3rem',
  '$btn-padding-x-sm': '.5rem',
  '$btn-padding-y-sm': '.25rem',
  '$font-size-sm': '.875rem',
  '$btn-border-radius-sm': '.2rem',
  '$btn-block-spacing-y': '.5rem',
  '$btn-primary-color': '#fff',
  '$btn-primary-bg': '#0275d8',
  '$btn-primary-border': '#0275d8',
  '$btn-secondary-color': '#292b2c',
  '$btn-secondary-bg': '#fff',
  '$btn-secondary-border': '#ccc',
  '$btn-info-color': '#fff',
  '$btn-info-bg': '#5bc0de',
  '$btn-info-border': '#5bc0de',
  '$btn-success-color': '#fff',
  '$btn-success-bg': '#5cb85c',
  '$btn-success-border': '#5cb85c',
  '$btn-warning-color': '#fff',
  '$btn-warning-bg': '#f0ad4e',
  '$btn-warning-border': '#f0ad4e',
  '$btn-danger-color': '#fff',
  '$btn-danger-bg': '#d9534f',
  '$btn-danger-border': '#d9534f'
};
function buttonVariant() {
  var enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-shadows'];
  var buttonColor = arguments[1];
  var background = arguments[2];
  var border = arguments[3];
  var btnActiveBoxShadow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$btn-active-box-shadow'];
  var btnBoxShadow = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$btn-box-shadow'];
  var activeBackground = (_color2.default)(background).darken(0.2).toString();
  var activeBorder = (_color2.default)(border).darken(0.12).toString();
  return '\n    color: ' + buttonColor + ';\n    background-color: ' + background + ';\n    border-color: ' + border + ';\n    ' + (_boxShadow.boxShadow)(enableShadows, btnBoxShadow) + '\n  \n    ' + (_hover.hover)('\n      color: ' + buttonColor + ';\n      background-color: ' + activeBackground + ';\n      border-color: ' + activeBorder + ';\n    ') + '\n  \n    &:focus,\n    &.focus {\n      ' + (_conditional.ifElse)('\n        box-shadow: ' + btnBoxShadow + ', 0 0 0 2px ' + (_color2.default)(border).alpha(0.5).toString() + ';\n      ', '\n        box-shadow: 0 0 0 2px ' + (_color2.default)(border).alpha(0.5).toString() + ';\n      ') + '\n    }\n  \n    /* Disabled comes first so active can properly restyle */\n    &.disabled,\n    &:disabled {\n      background-color: ' + background + ';\n      border-color: ' + border + ';\n    }\n    \n    &:active,\n    &.active,\n    .show > &.dropdown-toggle {\n      color: ' + buttonColor + ';\n      background-color: ' + activeBackground + ';\n      background-image: none;\n      border-color: ' + activeBorder + ';\n      ' + (_boxShadow.boxShadow)(enableShadows, btnActiveBoxShadow) + '\n    }\n  ';
}
function buttonOutlineVariant(buttonColor) {
  var buttonColorHover = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#fff';
  return '\n    color: ' + buttonColor + ';\n    background-image: none;\n    background-color: transparent;\n    border-color: ' + buttonColor + ';\n  \n    ' + (_hover.hover)('\n      color: ' + buttonColorHover + ';\n      background-color: ' + buttonColor + ';\n      border-color: ' + buttonColor + ';\n    ') + '\n  \n    &:focus,\n    &.focus {\n      box-shadow: 0 0 0 2px ' + (_color2.default)(buttonColor).alpha(0.5).toString() + ';\n    }\n  \n    &.disabled,\n    &:disabled {\n      color: ' + buttonColor + ';\n      border-color: transparent;\n    }\n    \n    &:active,\n    &.active,\n    & .open > &.dropdown-toggle {\n      color: ' + buttonColorHover + ';\n      background-color: ' + buttonColor + ';\n      border-color: ' + buttonColor + ';\n    }\n  ';
}
function buttonSize() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var paddingY = arguments[1];
  var paddingX = arguments[2];
  var fontSize = arguments[3];
  var btnBorderRadius = arguments[4];
  return '\n    padding: ' + paddingY + ' ' + paddingX + ';\n    font-size: ' + fontSize + ';\n    ' + (_borderRadius.borderRadius)(enableRounded, btnBorderRadius) + '\n  ';
}
function button() {
  var $enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-shadows'];
  var $enableHoverMediaQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$enable-hover-media-query'];
  var $enableTransitions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$enable-transitions'];
  var $enableRounded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$enable-rounded'];
  var $fontWeightNormal = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$font-weight-normal'];
  var $btnFontWeight = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$btn-font-weight'];
  var $btnLineHeight = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$btn-line-height'];
  var $btnTransition = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$btn-transition'];
  var $inputBtnBorderWidth = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$input-btn-border-width'];
  var $btnPaddingX = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$btn-padding-x'];
  var $btnPaddingY = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$btn-padding-y'];
  var $fontSizeBase = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps['$font-size-base'];
  var $btnBorderRadius = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps['$btn-border-radius'];
  var $btnBoxShadow = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps['$btn-box-shadow'];
  var $btnFocusBoxShadow = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps['$btn-focus-box-shadow'];
  var $btnActiveBoxShadow = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps['$btn-active-box-shadow'];
  var $cursorDisabled = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps['$cursor-disabled'];
  var $linkColor = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps['$link-color'];
  var $linkHoverColor = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps['$link-hover-color'];
  var $linkHoverDecoration = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps['$link-hover-decoration'];
  var $btnLinkDisabledColor = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps['$btn-link-disabled-color'];
  var $btnPaddingXLg = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps['$btn-padding-x-lg'];
  var $btnPaddingYLg = arguments.length > 22 && arguments[22] !== undefined ? arguments[22] : defaultProps['$btn-padding-y-lg'];
  var $fontSizeLg = arguments.length > 23 && arguments[23] !== undefined ? arguments[23] : defaultProps['$font-size-lg'];
  var $btnBorderRadiusLg = arguments.length > 24 && arguments[24] !== undefined ? arguments[24] : defaultProps['$btn-border-radius-lg'];
  var $btnPaddingXSm = arguments.length > 25 && arguments[25] !== undefined ? arguments[25] : defaultProps['$btn-padding-x-sm'];
  var $btnPaddingYSm = arguments.length > 26 && arguments[26] !== undefined ? arguments[26] : defaultProps['$btn-padding-y-sm'];
  var $fontSizeSm = arguments.length > 27 && arguments[27] !== undefined ? arguments[27] : defaultProps['$font-size-sm'];
  var $btnBorderRadiusSm = arguments.length > 28 && arguments[28] !== undefined ? arguments[28] : defaultProps['$btn-border-radius-sm'];
  var $btnBlockSpacingY = arguments.length > 29 && arguments[29] !== undefined ? arguments[29] : defaultProps['$btn-block-spacing-y'];
  var $btnPrimaryColor = arguments.length > 30 && arguments[30] !== undefined ? arguments[30] : defaultProps['$btn-primary-color'];
  var $btnPrimaryBg = arguments.length > 31 && arguments[31] !== undefined ? arguments[31] : defaultProps['$btn-primary-bg'];
  var $btnPrimaryBorder = arguments.length > 32 && arguments[32] !== undefined ? arguments[32] : defaultProps['$btn-primary-border'];
  var $btnSecondaryColor = arguments.length > 33 && arguments[33] !== undefined ? arguments[33] : defaultProps['$btn-secondary-color'];
  var $btnSecondaryBg = arguments.length > 34 && arguments[34] !== undefined ? arguments[34] : defaultProps['$btn-secondary-bg'];
  var $btnSecondaryBorder = arguments.length > 35 && arguments[35] !== undefined ? arguments[35] : defaultProps['$btn-secondary-border'];
  var $btnInfoColor = arguments.length > 36 && arguments[36] !== undefined ? arguments[36] : defaultProps['$btn-info-color'];
  var $btnInfoBg = arguments.length > 37 && arguments[37] !== undefined ? arguments[37] : defaultProps['$btn-info-bg'];
  var $btnInfoBorder = arguments.length > 38 && arguments[38] !== undefined ? arguments[38] : defaultProps['$btn-info-border'];
  var $btnSuccessColor = arguments.length > 39 && arguments[39] !== undefined ? arguments[39] : defaultProps['$btn-success-color'];
  var $btnSuccessBg = arguments.length > 40 && arguments[40] !== undefined ? arguments[40] : defaultProps['$btn-success-bg'];
  var $btnSuccessBorder = arguments.length > 41 && arguments[41] !== undefined ? arguments[41] : defaultProps['$btn-success-border'];
  var $btnWarningColor = arguments.length > 42 && arguments[42] !== undefined ? arguments[42] : defaultProps['$btn-warning-color'];
  var $btnWarningBg = arguments.length > 43 && arguments[43] !== undefined ? arguments[43] : defaultProps['$btn-warning-bg'];
  var $btnWarningBorder = arguments.length > 44 && arguments[44] !== undefined ? arguments[44] : defaultProps['$btn-warning-border'];
  var $btnDangerColor = arguments.length > 45 && arguments[45] !== undefined ? arguments[45] : defaultProps['$btn-danger-color'];
  var $btnDangerBg = arguments.length > 46 && arguments[46] !== undefined ? arguments[46] : defaultProps['$btn-danger-bg'];
  var $btnDangerBorder = arguments.length > 47 && arguments[47] !== undefined ? arguments[47] : defaultProps['$btn-danger-border'];
  return '\n  \n    font-family: inherit;\n    \n    &.btn {\n      display: inline-block;\n      font-weight: ' + $btnFontWeight + ';\n      line-height: ' + $btnLineHeight + ';\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: middle;\n      user-select: none;\n      border: ' + $inputBtnBorderWidth + ' solid transparent;\n      ' + buttonSize($enableRounded, $btnPaddingY, $btnPaddingX, $fontSizeBase, $btnBorderRadius) + '\n      ' + (_transition.transition)($enableTransitions, $btnTransition) + '\n      ' + (_hover.hoverFocus)($enableHoverMediaQuery, 'text-decoration: none;') + '\n\n      &:focus,\n      &.focus {\n        outline: 0;\n        box-shadow: ' + $btnFocusBoxShadow + ';\n      }\n\n      &.disabled,\n      &:disabled {\n        cursor: ' + $cursorDisabled + ';\n        opacity: .65;\n        ' + (_boxShadow.boxShadow)($enableShadows, 'none') + '\n      }  \n\n      &:active,\n      &.active {\n        background-image: none;\n        ' + (_boxShadow.boxShadow)($enableShadows, $btnFocusBoxShadow, $btnActiveBoxShadow) + '\n      }\n    }\n    \n    a.btn.disabled,\n    fieldset[disabled] a.btn {\n      pointer-events: none;\n    }\n   \n   \n    /* Alternate buttons */\n   \n    &.btn-primary {\n      ' + buttonVariant($enableShadows, $btnPrimaryColor, $btnPrimaryBg, $btnPrimaryBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-secondary {\n      ' + buttonVariant($enableShadows, $btnSecondaryColor, $btnSecondaryBg, $btnSecondaryBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-info {\n      ' + buttonVariant($enableShadows, $btnInfoColor, $btnInfoBg, $btnInfoBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-success {\n      ' + buttonVariant($enableShadows, $btnSuccessColor, $btnSuccessBg, $btnSuccessBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-warning {\n      ' + buttonVariant($enableShadows, $btnWarningColor, $btnWarningBg, $btnWarningBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n    &.btn-danger {\n      ' + buttonVariant($enableShadows, $btnDangerColor, $btnDangerBg, $btnDangerBorder, $btnActiveBoxShadow, $btnBoxShadow) + '\n    }\n   \n    &.btn-outline-primary {\n      ' + buttonOutlineVariant($btnPrimaryBg, $btnPrimaryColor) + '\n    }    \n    &.btn-outline-secondary {\n      ' + buttonOutlineVariant($btnSecondaryBorder, $btnSecondaryColor) + '\n    }    \n    &.btn-outline-info {\n      ' + buttonOutlineVariant($btnInfoBg, $btnInfoColor) + '\n    }    \n    &.btn-outline-success {\n      ' + buttonOutlineVariant($btnSuccessBg, $btnSuccessColor) + '\n    }\n    &.btn-outline-warning {\n      ' + buttonOutlineVariant($btnWarningBg, $btnWarningColor) + '\n    }\n    &.btn-outline-danger {\n      ' + buttonOutlineVariant($btnDangerBg, $btnDangerColor) + '\n    }\n   \n    /*\n     Link buttons\n    */\n   \n    &.btn-link {\n      font-weight: ' + $fontWeightNormal + ';\n      color: ' + $linkColor + ';\n      border-radius: 0;\n   \n      &,\n      &:active,\n      &.active,\n      &:disabled {\n        background-color: transparent;\n        ' + (_boxShadow.boxShadow)($enableShadows, 'none') + '\n      }\n     \n      &,\n      &:focus,\n      &:active {\n        border-color: transparent;\n      }\n     \n      ' + (_hover.hover)('border-color: transparent;') + '\n     \n      ' + (_hover.hoverFocus)($enableHoverMediaQuery, '\n        color: ' + $linkHoverColor + ';\n        text-decoration: ' + $linkHoverDecoration + ';\n        background-color: transparent;\n      ') + '\n     \n      &:disabled {\n        color: ' + $btnLinkDisabledColor + ';\n        ' + (_hover.hoverFocus)($enableHoverMediaQuery, '\n          text-decoration: none;\n        ') + '\n      }\n    }\n  \n  \n    /*\n     Button Sizes\n    */\n   \n    &.btn-lg {\n      /* line-height: ensure even-numbered height of button next to large input */\n      ' + buttonSize($enableRounded, $btnPaddingYLg, $btnPaddingXLg, $fontSizeLg, $btnBorderRadiusLg) + '\n    }\n   \n    &.btn-sm {\n      /* line-height: ensure proper height of button next to small input */\n      ' + buttonSize($enableRounded, $btnPaddingYSm, $btnPaddingXSm, $fontSizeSm, $btnBorderRadiusSm) + '\n    }\n   \n   \n    /*\n     Block button\n    */\n   \n    &.btn-block {\n      display: block;\n      width: 100%;\n    }\n   \n    /* Vertically space out multiple block buttons */\n    &.btn-block + .btn-block {\n      margin-top: ' + $btnBlockSpacingY + ';\n    }\n   \n    /* Specificity overrides */\n    input[type="submit"],\n    input[type="reset"],\n    input[type="button"] {\n      &.btn-block {\n        width: 100%;\n      }\n    }\n   \n    /* Reboot Scss */\n    touch-action: manipulation;\n    line-height: inherit;\n    &:focus{\n      outline: 1px dotted;\n      outline: 5px auto -webkit-focus-ring-color;\n    }\n    \n    &[type="button"],\n    &[type="reset"],\n    &[type="submit"] {\n      -webkit-appearance: button;\n    }\n    \n    &::-moz-focus-inner,\n    &[type="button"]::-moz-focus-inner,\n    &[type="reset"]::-moz-focus-inner,\n    &[type="submit"]::-moz-focus-inner {\n      padding: 0;\n      border-style: none;\n    }\n\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  buttonVariant: buttonVariant,
  buttonOutlineVariant: buttonOutlineVariant,
  buttonSize: buttonSize,
  button: button
};
});
unwrapExports(buttons);
var buttons_5 = buttons.button;

var defaultProps$11 = {
  tag: 'button',
  color: 'primary',
  theme: {
    '$enable-rounded': true,
    '$enable-shadows': false,
    '$enable-hover-media-query': true,
    '$enable-transitions': true,
    '$btn-padding-x': '1rem',
    '$btn-padding-y': '.5rem',
    '$btn-line-height': '1.25',
    '$btn-font-weight': 'normal',
    '$btn-box-shadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)',
    '$btn-focus-box-shadow': '0 0 0 2px rgba(2, 117, 216, 0.25)',
    '$btn-active-box-shadow': 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
    '$btn-primary-color': '#fff',
    '$btn-primary-bg': '#0275d8',
    '$btn-primary-border': '#0275d8',
    '$btn-secondary-color': '#292b2c',
    '$btn-secondary-bg': '#fff',
    '$btn-secondary-border': '#ccc',
    '$btn-info-color': '#fff',
    '$btn-info-bg': '#5bc0de',
    '$btn-info-border': '#5bc0de',
    '$btn-success-color': '#fff',
    '$btn-success-bg': '#5cb85c',
    '$btn-success-border': '#5cb85c',
    '$btn-warning-color': '#fff',
    '$btn-warning-bg': '#f0ad4e',
    '$btn-warning-border': '#f0ad4e',
    '$btn-danger-color': '#fff',
    '$btn-danger-bg': '#d9534f',
    '$btn-danger-border': '#d9534f',
    '$btn-link-disabled-color': '#636c72',
    '$btn-padding-x-sm': '.5rem',
    '$btn-padding-y-sm': '.25rem',
    '$btn-padding-x-lg': '1.5rem',
    '$btn-padding-y-lg': '.75rem',
    '$btn-block-spacing-y': '.5rem',
    '$btn-border-radius': '.25rem',
    '$btn-border-radius-lg': '.3rem',
    '$btn-border-radius-sm': '.2rem',
    '$btn-transition': 'all .2s ease-in-out'
  }
};
var propTypes$11 = {
  active: propTypes$1.bool,
  block: propTypes$1.bool,
  disabled: propTypes$1.bool,
  outline: propTypes$1.bool,
  className: propTypes$1.string,
  color: propTypes$1.oneOf(['link', 'primary', 'secondary', 'success', 'info', 'warning', 'danger']),
  innerRef: propTypes$1.func,
  onClick: propTypes$1.func,
  size: propTypes$1.oneOf(['sm', 'lg']),
  dropup: propTypes$1.bool,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  theme: propTypes$1.shape({
    '$btn-padding-x': propTypes$1.string,
    '$btn-padding-y': propTypes$1.string,
    '$btn-line-height': propTypes$1.string,
    '$btn-font-weight': propTypes$1.string,
    '$btn-box-shadow': propTypes$1.string,
    '$btn-focus-box-shadow': propTypes$1.string,
    '$btn-active-box-shadow': propTypes$1.string,
    '$btn-primary-color': propTypes$1.string,
    '$btn-primary-bg': propTypes$1.string,
    '$btn-primary-border': propTypes$1.string,
    '$btn-secondary-color': propTypes$1.string,
    '$btn-secondary-bg': propTypes$1.string,
    '$btn-secondary-border': propTypes$1.string,
    '$btn-info-color': propTypes$1.string,
    '$btn-info-bg': propTypes$1.string,
    '$btn-info-border': propTypes$1.string,
    '$btn-success-color': propTypes$1.string,
    '$btn-success-bg': propTypes$1.string,
    '$btn-success-border': propTypes$1.string,
    '$btn-warning-color': propTypes$1.string,
    '$btn-warning-bg': propTypes$1.string,
    '$btn-warning-border': propTypes$1.string,
    '$btn-danger-color': propTypes$1.string,
    '$btn-danger-bg': propTypes$1.string,
    '$btn-danger-border': propTypes$1.string,
    '$btn-link-disabled-color': propTypes$1.string,
    '$btn-padding-x-sm': propTypes$1.string,
    '$btn-padding-y-sm': propTypes$1.string,
    '$btn-padding-x-lg': propTypes$1.string,
    '$btn-padding-y-lg': propTypes$1.string,
    '$btn-block-spacing-y': propTypes$1.string,
    '$btn-border-radius': propTypes$1.string,
    '$btn-border-radius-lg': propTypes$1.string,
    '$btn-border-radius-sm': propTypes$1.string,
    '$btn-transition': propTypes$1.string,
    '$link-hover-decoration': propTypes$1.string,
    '$enable-rounded': propTypes$1.bool,
    '$enable-shadows': propTypes$1.bool,
    '$enable-hover-media-query': propTypes$1.bool,
    '$enable-transitions': propTypes$1.bool
  }),
  cssModule: propTypes$1.object
};
var ButtonUnstyled = function (_React$Component) {
  inherits(ButtonUnstyled, _React$Component);
  function ButtonUnstyled() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck(this, ButtonUnstyled);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = ButtonUnstyled.__proto__ || Object.getPrototypeOf(ButtonUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
      if (_this.props.disabled) {
        e.preventDefault();
        return;
      }
      if (_this.props.onClick) {
        _this.props.onClick(e);
      }
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }
  createClass(ButtonUnstyled, [{
    key: 'render',
    value: function render() {
      var _cn;
      var _omit = lodash_omit(this.props, ['theme']),
          active = _omit.active,
          disabled = _omit.disabled,
          block = _omit.block,
          className = _omit.className,
          cssModule = _omit.cssModule,
          dropup = _omit.dropup,
          color = _omit.color,
          outline = _omit.outline,
          size = _omit.size,
          innerRef = _omit.innerRef,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['active', 'disabled', 'block', 'className', 'cssModule', 'dropup', 'color', 'outline', 'size', 'innerRef', 'tag']);
      var classes = mapToCssModules(classnames(className, 'btn', (_cn = {
        dropup: dropup,
        active: active,
        disabled: disabled
      }, babelHelpers.defineProperty(_cn, 'btn-' + size, size), babelHelpers.defineProperty(_cn, 'btn-block', block), _cn), 'btn' + (outline ? '-outline' : '') + '-' + color), cssModule);
      if (attributes.href && Tag === 'button') {
        Tag = 'a';
      }
      return React.createElement(Tag, _extends({
        type: Tag === 'button' && attributes.onClick ? 'button' : undefined,
        className: classes,
        ref: innerRef
      }, attributes, {
        onClick: this.onClick
      }));
    }
  }]);
  return ButtonUnstyled;
}(React.Component);
ButtonUnstyled.defaultProps = defaultProps$11;
ButtonUnstyled.propTypes = propTypes$11;
var Button = styled(ButtonUnstyled).withConfig({
  displayName: 'Button'
})(['', ' '], function (props) {
  return '\n    ' + buttons_5(props.theme['$enable-shadows'], props.theme['$enable-hover-media-query'], props.theme['$enable-transitions'], props.theme['$enable-rounded'], props.theme['$font-weight-normal'], props.theme['$btn-font-weight'], props.theme['$btn-line-height'], props.theme['$btn-transition'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-padding-y'], props.theme['$font-size-base'], props.theme['$btn-border-radius'], props.theme['$btn-box-shadow'], props.theme['$btn-focus-box-shadow'], props.theme['$btn-active-box-shadow'], props.theme['$cursor-disabled'], props.theme['$link-color'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$btn-link-disabled-color'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm'], props.theme['$btn-block-spacing-y'], props.theme['$btn-primary-color'], props.theme['$btn-primary-bg'], props.theme['$btn-primary-border'], props.theme['$btn-secondary-color'], props.theme['$btn-secondary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-color'], props.theme['$btn-info-bg'], props.theme['$btn-info-border'], props.theme['$btn-success-color'], props.theme['$btn-success-bg'], props.theme['$btn-success-border'], props.theme['$btn-warning-color'], props.theme['$btn-warning-bg'], props.theme['$btn-warning-border'], props.theme['$btn-danger-color'], props.theme['$btn-danger-bg'], props.theme['$btn-danger-border']) + '\n ';
});
Button.defaultProps = defaultProps$11;
Button.propTypes = propTypes$11;

var navDivider_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.navDivider = navDivider;
var _unitUtils2 = _interopRequireDefault(unitUtils);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultProps = exports.defaultProps = {
  '$spacer-y': '1rem'
};
function navDivider() {
  var spacerY = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$spacer-y'];
  var dividerColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#e5e5e5';
  var marginY = '' + _unitUtils2.default.rmUnit(spacerY, _unitUtils2.default.UNIT.REM) / 2 + _unitUtils2.default.UNIT.REM;
  return '\n    height: 1px;\n    margin: calc(' + marginY + ' / 2) 0;\n    overflow: hidden;\n    background-color: ' + dividerColor + ';\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  navDivider: navDivider
};
});
unwrapExports(navDivider_1);
var navDivider_3 = navDivider_1.navDivider;

var buttonGroup_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.buttonGroup = buttonGroup;
var _unitUtils2 = _interopRequireDefault(unitUtils);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultProps = exports.defaultProps = {
  '$enable-shadows': true,
  '$enable-rounded': true,
  '$input-btn-border-width': '1px',
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
  var $enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-shadows'];
  var $enableRounded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$enable-rounded'];
  var $inputBtnBorderWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$input-btn-border-width'];
  var $btnPaddingX = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$btn-padding-x'];
  var $btnActiveBoxShadow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$btn-active-box-shadow'];
  var $btnPaddingXLg = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$btn-padding-x-lg'];
  var $btnPaddingYLg = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$btn-padding-y-lg'];
  var $fontSizeLg = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$font-size-lg'];
  var $btnBorderRadiusLg = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$btn-border-radius-lg'];
  var $btnPaddingXSm = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$btn-padding-x-sm'];
  var $btnPaddingYSm = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$btn-padding-y-sm'];
  var $fontSizeSm = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps['$font-size-sm'];
  var $btnBorderRadiusSm = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps['$btn-border-radius-sm'];
  return ' \n    /*  Make the div behave like a button */\n    &.btn-group,\n    & .btn-group,\n    &.btn-group-vertical,\n    & .btn-group-vertical {\n      position: relative;\n      display: inline-flex;\n      vertical-align: middle; /* match .btn alignment given font-size hack above */\n    \n      > .btn {\n        position: relative;\n        flex: 0 1 auto;\n        margin-bottom: 0;\n    \n        /* Bring the "active" button to the front */\n        &:focus,\n        &:active,\n        &.active {\n          z-index: 2;\n        }\n        ' + (_hover.hover)('\n          z-index: 2;\n        ') + '\n      }\n    }\n    \n    /*  Prevent double borders when buttons are next to each other */\n    &.btn-group,\n    & .btn-group {\n      .btn + .btn,\n      .btn + .btn-group,\n      .btn-group + .btn,\n      .btn-group + .btn-group {\n        margin-left: -' + $inputBtnBorderWidth + ';\n      }\n    }\n    \n    /* Optional: Group multiple button groups together for a toolbar */\n    &.btn-toolbar,\n    & .btn-toolbar {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: flex-start;\n    \n      .input-group {\n        width: auto;\n      }\n    }\n     \n    &.btn-group,\n    & .btn-group {\n      > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n        border-radius: 0;\n      }\n    }\n    \n    /* Set corners individual because sometimes a single button can be in a .btn-group and we need :first-child and :last-child to both match */\n    &.btn-group,\n    & .btn-group {\n      > .btn:first-child {\n        margin-left: 0;\n    \n        &:not(:last-child):not(.dropdown-toggle) {\n          ' + (_borderRadius.borderRightRadius)($enableRounded, '0') + '\n        }\n      }\n    }\n    /* Need .dropdown-toggle since :last-child does not apply given a .dropdown-menu immediately after it */\n    &.btn-group > .btn:last-child:not(:first-child),\n    & .btn-group > .btn:last-child:not(:first-child),\n    &.btn-group > .dropdown-toggle:not(:first-child),\n    & .btn-group > .dropdown-toggle:not(:first-child) {\n      ' + (_borderRadius.borderLeftRadius)($enableRounded, '0') + '\n    }\n    \n    /* Custom edits for including btn-groups within btn-groups (useful for including dropdown buttons within a btn-group) */\n    &.btn-group > .btn-group,\n    & .btn-group > .btn-group {\n      float: left;\n    }\n    &.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn,\n    & .btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n      border-radius: 0;\n    }\n    &.btn-group > .btn-group:first-child:not(:last-child),\n    & .btn-group > .btn-group:first-child:not(:last-child) {\n      > .btn:last-child,\n      > .dropdown-toggle {\n        ' + (_borderRadius.borderRightRadius)($enableRounded, '0') + '\n      }\n    }\n    &.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child,\n    & .btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n      ' + (_borderRadius.borderLeftRadius)($enableRounded, '0') + '\n    }\n    \n    /* On active and open, do not show outline */\n    &.btn-group .dropdown-toggle:active,\n    & .btn-group .dropdown-toggle:active,\n    &.btn-group.open .dropdown-toggle,\n    & .btn-group.open .dropdown-toggle {\n      outline: 0;\n    }\n    \n    \n    /* \n    Sizing Remix the default button sizing classes into new ones for easier manipulation.\n    */\n    \n    &.btn-group-sm > .btn,\n    & .btn-group-sm > .btn { \n      ' + (_buttons.buttonSize)($enableRounded, $btnPaddingYSm, $btnPaddingXSm, $fontSizeSm, $btnBorderRadiusSm) + '\n    }\n    &.btn-group-lg > .btn,\n    & .btn-group-lg > .btn {\n      ' + (_buttons.buttonSize)($enableRounded, $btnPaddingYLg, $btnPaddingXLg, $fontSizeLg, $btnBorderRadiusLg) + '\n    }\n    \n    /*\n     Split button dropdowns\n    */\n    \n    & .btn + .dropdown-toggle-split {\n      padding-right: ' + _unitUtils2.default.math.multiply($btnPaddingX, 0.75) + ';\n      padding-left: ' + _unitUtils2.default.math.multiply($btnPaddingX, 0.75) + ';\n    \n      &::after {\n        margin-left: 0;\n      }\n    }\n    \n    & .btn-sm + .dropdown-toggle-split {\n      padding-right: ' + _unitUtils2.default.math.multiply($btnPaddingXSm, 0.75) + ';\n      padding-left: ' + _unitUtils2.default.math.multiply($btnPaddingXSm, 0.75) + ';\n    }\n    \n    & .btn-lg + .dropdown-toggle-split {\n      padding-right: ' + _unitUtils2.default.math.multiply($btnPaddingXLg, 0.75) + ';\n      padding-left: ' + _unitUtils2.default.math.multiply($btnPaddingXLg, 0.75) + ';\n    }\n    \n    \n    /* The clickable button for toggling the menu */\n    /* Remove the gradient and set the same inset shadow as the :active state */\n    &.btn-group.open .dropdown-toggle {\n      ' + (_boxShadow.boxShadow)($enableShadows, $btnActiveBoxShadow) + '\n    \n      /* Show no shadow for .btn-link since it has no other button styles. */\n      &.btn-link {\n        ' + (_boxShadow.boxShadow)($enableShadows, 'none') + '\n      }\n    }\n\n    /*\n     Vertical button groups\n    */\n    \n    &.btn-group-vertical,\n    & .btn-group-vertical {\n      display: inline-flex;\n      flex-direction: column;\n      align-items: flex-start;\n      justify-content: center;\n    \n      .btn,\n      .btn-group {\n        width: 100%;\n      }\n      \n      > .btn + .btn,\n      > .btn + .btn-group,\n      > .btn-group + .btn,\n      > .btn-group + .btn-group {\n        margin-top: -' + $inputBtnBorderWidth + ';\n        margin-left: 0;\n      }\n    }\n    \n    &.btn-group-vertical > .btn,\n    & .btn-group-vertical > .btn {\n      &:not(:first-child):not(:last-child) {\n        border-radius: 0;\n      }\n      &:first-child:not(:last-child) {\n        ' + (_borderRadius.borderBottomRadius)($enableRounded, '0') + '\n      }\n      &:last-child:not(:first-child) {\n        ' + (_borderRadius.borderTopRadius)($enableRounded, '0') + '\n      }\n    }\n    \n    &.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn,\n    & .btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n      border-radius: 0;\n    }\n    \n    &.btn-group-vertical > .btn-group:first-child:not(:last-child),\n    & .btn-group-vertical > .btn-group:first-child:not(:last-child) {\n      > .btn:last-child,\n      > .dropdown-toggle {\n        ' + (_borderRadius.borderBottomRadius)($enableRounded, '0') + '      \n      }\n    }\n    &.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child,\n    & .btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n      ' + (_borderRadius.borderTopRadius)($enableRounded, '0') + '\n    }\n    \n    &.btn-group {\n      > .btn,\n      > .btn-group > .btn {\n        input[type="radio"],\n        input[type="checkbox"] {\n          position: absolute;\n          clip: rect(0,0,0,0);\n          pointer-events: none;\n        }\n      }\n    }\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  buttonGroup: buttonGroup
};
});
unwrapExports(buttonGroup_1);
var buttonGroup_3 = buttonGroup_1.buttonGroup;

var defaultProps$13 = {
  tag: 'div'
};
var propTypes$14 = {
  children: propTypes$1.node.isRequired,
  className: propTypes$1.string,
  cssModule: propTypes$1.object,
  right: propTypes$1.bool,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func])
};
var contextTypes = {
  isOpen: propTypes$1.bool.isRequired
};
var DropdownMenu = function DropdownMenu(props, context) {
  var className = props.className,
      cssModule = props.cssModule,
      right = props.right,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'right', 'tag']);
  var classes = mapToCssModules(classnames(className, 'dropdown-menu', { 'dropdown-menu-right': right }), cssModule);
  return React.createElement(Tag, _extends({}, attributes, { tabIndex: '-1', 'aria-hidden': !context.isOpen, role: 'menu', className: classes }));
};
DropdownMenu.propTypes = propTypes$14;
DropdownMenu.defaultProps = defaultProps$13;
DropdownMenu.contextTypes = contextTypes;

var tether = createCommonjsModule(function (module, exports) {
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

var defaultProps$14 = {
  isOpen: false,
  tetherRef: null
};
var propTypes$15 = {
  className: propTypes$1.string,
  children: propTypes$1.node,
  isOpen: propTypes$1.bool,
  disabled: propTypes$1.bool,
  toggle: propTypes$1.func.isRequired,
  tether: propTypes$1.object.isRequired,
  tetherRef: propTypes$1.func,
  style: propTypes$1.node
};
var TetherContent = function (_React$Component) {
  inherits(TetherContent, _React$Component);
  function TetherContent() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck(this, TetherContent);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = TetherContent.__proto__ || Object.getPrototypeOf(TetherContent)).call.apply(_ref, [this].concat(args))), _this), _this.componentDidMount = function () {
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
      if (isFunction(target)) {
        return target();
      }
      return target;
    }, _this.getTetherConfig = function () {
      var config = babelHelpers.extends({}, _this.props.tether);
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
        if (_this.props.tetherRef) {
          _this.props.tetherRef(_this.tether);
        }
      }
    }, _this.show = function () {
      document.addEventListener('click', _this.handleDocumentClick, true);
      _this.element = document.createElement('div');
      _this.element.className = _this.props.className;
      document.body.appendChild(_this.element);
      _this.renderIntoSubtree();
      _this.tether = new Tether(_this.getTetherConfig());
      if (_this.props.tetherRef) {
        _this.props.tetherRef(_this.tether);
      }
      _this.tether.position();
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
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }
  createClass(TetherContent, [{
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return TetherContent;
}(React.Component);
TetherContent.defaultProps = defaultProps$14;
TetherContent.propTypes = propTypes$15;
TetherContent.defaultProps = defaultProps$14;
TetherContent.propTypes = propTypes$15;

var defaultTetherConfig = {
  classes: { element: 'dropdown', enabled: 'show' },
  classPrefix: 'bs-tether',
  constraints: [{ to: 'scrollParent', attachment: 'together none' }, { to: 'window', attachment: 'together none' }]
};
var defaultProps$12 = {
  isOpen: false,
  tag: 'div',
  theme: {
    '$enable-rounded': true,
    '$enable-shadows': false,
    '$enable-gradients': false,
    '$enable-hover-media-query': false,
    '$spacer-y': '1rem',
    '$border-width': '1px',
    '$font-size-sm': '.875rem',
    '$font-weight-normal': 'normal',
    '$font-size-base': '1rem',
    '$font-size-lg': '1.25rem',
    '$zindex-dropdown-backdrop': '990',
    '$zindex-dropdown': '1000',
    '$component-active-color': '#fff',
    '$component-active-bg': '#0275d8',
    '$caret-width': '.3em',
    '$line-height-lg': '1.6',
    '$border-radius-lg': '.3rem',
    '$border-radius-sm': '.2rem',
    '$input-padding-y-lg': '.75rem',
    '$dropdown-min-width': '10rem',
    '$dropdown-padding-y': '.5rem',
    '$dropdown-margin-top': '.125rem',
    '$dropdown-bg': '#fff',
    '$dropdown-border-color': 'rgba(0, 0, 0, 0.15)',
    '$dropdown-border-width': '1px',
    '$dropdown-divider-bg': '#eceeef',
    '$dropdown-box-shadow': '0 .5rem 1rem rgba(#000,.175)',
    '$dropdown-link-color': '#292b2c',
    '$dropdown-link-hover-color': 'hsl(200, 3.5%, 15.8%)',
    '$dropdown-link-hover-bg': '#f7f7f9',
    '$dropdown-link-active-color': 'hsl(200, 3.5%, 15.8%)',
    '$dropdown-link-active-bg': '#fff',
    '$dropdown-link-disabled-color': '#636c72',
    '$dropdown-item-padding-x': '1.5rem',
    '$dropdown-header-color': '#636c72',
    '$input-btn-border-width': '1px',
    '$cursor-disabled': 'not-allowed',
    '$btn-padding-x': '1rem',
    '$btn-active-box-shadow': 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
    '$btn-padding-x-lg': '1.5rem',
    '$btn-padding-y-lg': '.75rem',
    '$btn-border-radius-lg': '.3rem',
    '$btn-border-radius-sm': '.2rem',
    '$btn-padding-x-sm': '.5rem',
    '$btn-padding-y-sm': '.25rem',
    '$input-height-lg': '3.5rem'
  }
};
var propTypes$13 = {
  className: propTypes$1.string,
  children: propTypes$1.node,
  disabled: propTypes$1.bool,
  dropup: propTypes$1.bool,
  group: propTypes$1.bool,
  isOpen: propTypes$1.bool,
  size: propTypes$1.oneOf(['sm', 'lg', '']),
  tether: propTypes$1.oneOfType([propTypes$1.object, propTypes$1.bool]),
  toggle: propTypes$1.func,
  theme: propTypes$1.shape({
    '$enable-rounded': propTypes$1.bool,
    '$enable-shadows': propTypes$1.bool,
    '$enable-gradients': propTypes$1.bool,
    '$enable-hover-media-query': propTypes$1.bool,
    '$spacer-y': propTypes$1.string,
    '$border-width': propTypes$1.string,
    '$font-size-sm': propTypes$1.string,
    '$font-weight-normal': propTypes$1.string,
    '$font-size-base': propTypes$1.string,
    '$font-size-lg': propTypes$1.string,
    '$zindex-dropdown-backdrop': propTypes$1.string,
    '$zindex-dropdown': propTypes$1.string,
    '$component-active-color': propTypes$1.string,
    '$component-active-bg': propTypes$1.string,
    '$caret-width': propTypes$1.string,
    '$line-height-lg': propTypes$1.string,
    '$border-radius-lg': propTypes$1.string,
    '$border-radius-sm': propTypes$1.string,
    '$input-padding-y-lg': propTypes$1.string,
    '$dropdown-min-width': propTypes$1.string,
    '$dropdown-padding-y': propTypes$1.string,
    '$dropdown-margin-top': propTypes$1.string,
    '$dropdown-bg': propTypes$1.string,
    '$dropdown-border-color': propTypes$1.string,
    '$dropdown-border-width': propTypes$1.string,
    '$dropdown-divider-bg': propTypes$1.string,
    '$dropdown-box-shadow': propTypes$1.string,
    '$dropdown-link-color': propTypes$1.string,
    '$dropdown-link-hover-color': propTypes$1.string,
    '$dropdown-link-hover-bg': propTypes$1.string,
    '$dropdown-link-active-color': propTypes$1.string,
    '$dropdown-link-active-bg': propTypes$1.string,
    '$dropdown-link-disabled-color': propTypes$1.string,
    '$dropdown-item-padding-x': propTypes$1.string,
    '$dropdown-header-color': propTypes$1.string,
    '$input-btn-border-width': propTypes$1.string,
    '$cursor-disabled': propTypes$1.string,
    '$btn-padding-x': propTypes$1.string,
    '$btn-active-box-shadow': propTypes$1.string,
    '$btn-padding-x-lg': propTypes$1.string,
    '$btn-padding-y-lg': propTypes$1.string,
    '$btn-border-radius-lg': propTypes$1.string,
    '$btn-border-radius-sm': propTypes$1.string,
    '$btn-padding-x-sm': propTypes$1.string,
    '$btn-padding-y-sm': propTypes$1.string,
    '$input-height-lg': propTypes$1.string
  }),
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  cssModule: propTypes$1.object
};
var DropdownUnstyled = function (_React$Component) {
  inherits(DropdownUnstyled, _React$Component);
  function DropdownUnstyled() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck(this, DropdownUnstyled);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = DropdownUnstyled.__proto__ || Object.getPrototypeOf(DropdownUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.getTetherConfig = function (childProps) {
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
      return babelHelpers.extends({}, defaultTetherConfig, {
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
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }
  createClass(DropdownUnstyled, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        isOpen: this.props.isOpen,
        toggle: this.props.toggle
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
      var _omit = lodash_omit(this.props, ['toggle', 'tether', 'theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          dropup = _omit.dropup,
          group = _omit.group,
          size = _omit.size,
          Tag = _omit.tag,
          isOpen = _omit.isOpen,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'dropup', 'group', 'size', 'tag', 'isOpen']);
      var classes = mapToCssModules(classnames(className, (_cn = {
        'btn-group': group
      }, babelHelpers.defineProperty(_cn, 'btn-group-' + size, !!size), babelHelpers.defineProperty(_cn, 'dropdown', !group), babelHelpers.defineProperty(_cn, 'show', isOpen), babelHelpers.defineProperty(_cn, 'dropup', dropup), _cn)), cssModule);
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
DropdownUnstyled.defaultProps = defaultProps$12;
DropdownUnstyled.propTypes = propTypes$13;
DropdownUnstyled.childContextTypes = {
  isOpen: propTypes$1.bool.isRequired,
  toggle: propTypes$1.func.isRequired
};
var Dropdown = styled(DropdownUnstyled).withConfig({
  displayName: 'Dropdown'
})(['', ''], function (props) {
  return '\n    &.dropup,\n    &.dropdown {\n      position: relative;\n    }\n\n    & .dropdown-hide {\n      display: none;\n    }\n    \n    & .dropdown-toggle {\n      /* Generate the caret automatically */\n      &::after {\n        display: inline-block;\n        width: 0;\n        height: 0;\n        margin-left: ' + props.theme['$caret-width'] + ';\n        vertical-align: middle;\n        content: \'\';\n        border-top: ' + props.theme['$caret-width'] + ' solid;\n        border-right: ' + props.theme['$caret-width'] + ' solid transparent;\n        border-left: ' + props.theme['$caret-width'] + ' solid transparent;\n      }\n\n      /* Prevent the focus on the dropdown toggle when closing dropdowns */\n      &:focus {\n        outline: 0;\n      }\n    }\n\n    &.dropup {\n      .dropdown-toggle {\n        &::after {\n          border-top: 0;\n          border-bottom: ' + props.theme['$caret-width'] + ' solid;\n        }\n      }\n    }\n\n    & .dropdown-menu {\n      clear: left;\n      position: absolute;\n      top: 100%;\n      left: 0;\n      z-index: ' + props.theme['$zindex-dropdown'] + ';\n      display: none; // none by default, but block on "open" of the menu\n      float: left;\n      min-width: ' + props.theme['$dropdown-min-width'] + ';\n      padding: ' + props.theme['$dropdown-padding-y'] + ' 0;\n      margin: ' + props.theme['$dropdown-margin-top'] + ' 0; /* override default ul */\n      font-size: ' + props.theme['$font-size-base'] + ';\n      color: ' + props.theme['$body-color'] + ';\n      text-align: left; /* Ensures proper alignment if parent has it changed (e.g., modal footer) */\n      list-style: none;\n      background-color: ' + props.theme['$dropdown-bg'] + ';\n      background-clip: padding-box;\n      border: ' + props.theme['$dropdown-border-width'] + ' solid ' + props.theme['$dropdown-border-color'] + ';\n      ' + borderRadius_2(props.theme['$enable-rounded'], props.theme['$border-radius']) + '\n      ' + boxShadow_2(props.theme['$enable-shadows'], props.theme['$dropdown-box-shadow']) + '\n    }\n\n    /* mixin from bootstrap 4, see : scss/mixins/_nav-divider.css */\n    & .dropdown-divider {\n      ' + navDivider_3(props.theme['$spacer-y'], props.theme['$dropdown-divider-bg']) + '\n    }\n\n    & .dropdown-item {\n      display: block;\n      width: 100%; /* For <button>s */\n      padding: 3px ' + props.theme['$dropdown-item-padding-x'] + ';\n      clear: both;\n      font-weight: ' + props.theme['$font-weight-normal'] + ';\n      color: ' + props.theme['$dropdown-link-color'] + ';\n      text-align: inherit; /* For <button>s */\n      white-space: nowrap; /* prevent links from randomly breaking onto new lines */\n      background: none; /* For <button>s */\n      border: 0; /* For <button>s */\n\n      ' + hover_3(props.theme['$enable-hover-media-query'], '\n        color: ' + props.theme['$dropdown-link-hover-color'] + ';\n        text-decoration: none;\n        background-color: ' + props.theme['$dropdown-link-hover-bg'] + '\n      ') + '\n\n      &.active,\n      &:active {\n        color: ' + props.theme['$dropdown-link-active-color'] + ';\n        text-decoration: none;\n        background-color: ' + props.theme['$dropdown-link-active-bg'] + '\n      }\n\n      &.disabled,\n      &:disabled{\n        color: ' + props.theme['$dropdown-link-disabled-color'] + ';\n        cursor: ' + props.theme['$cursor-disabled'] + ';\n        background-color: transparent;\n        ' + conditional_1(props.theme['$enable-gradients'], 'background-image: none; /* Remove CSS gradient */') + '\n      }\n    }\n\n    &.show {\n      /* show the menu */\n      &>.dropdown-menu {\n        display: block;\n      }\n\n      & > a {\n        outline: 0;\n      }\n    }\n\n\n    /* Menu positioning */\n\n    /* Add extra class to .dropdown-menu to flip the alignment of the dropdown*\n    /* menu with the parent. */\n    & .dropdown-menu-right {\n      right: 0;\n      left: auto; /* Reset the default from .dropdown-menu */\n    }\n\n    & .dropdown-menu-left {\n      right: auto;\n      left: 0;\n    }\n\n    /* Dropdown section headers */\n    & .dropdown-header {\n      display: block;\n      padding: ' + props.theme['$dropdown-padding-y'] + ' ' + props.theme['$dropdown-item-padding-x'] + ';\n      margin-bottom: 0; /* for use with heading elements */\n      font-size: ' + props.theme['$font-size-sm'] + ';\n      color: ' + props.theme['$dropdown-header-color'] + ';\n      white-space: nowrap; /* as with > li > a */\n    }\n    /* Dropdown section footers */\n    & .dropdown-footer {\n      display: block;\n      padding: ' + props.theme['$dropdown-padding-y'] + ' ' + props.theme['$dropdown-item-padding-x'] + ';\n      margin-bottom: 0; /* for use with heading elements */\n      font-size: ' + props.theme['$font-size-sm'] + ';\n      color: ' + props.theme['$dropdown-header-color'] + ';\n      white-space: nowrap; /* as with > li > a */\n    }\n    \n\n    /* Backdrop to catch body clicks on mobile, etc. */\n    & .dropdown-backdrop {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: ' + props.theme['$zindex-dropdown-backdrop'] + ';\n    }\n\n    /* Allow for dropdowns to go bottom up (aka, dropup-menu) */\n\n    /* Just add .dropup after the standard .dropdown class and you\'re set. */\n    /* TODO: abstract this so that the navbar fixed styles are not placed here? */\n\n    &.dropup {\n      .dropdown-menu {\n        top: auto;\n        bottom: 100%;\n        margin-bottom: ' + props.theme['$dropdown-margin-top'] + ';\n      }\n    }\n        \n    /* Added Mixin boutonGroup to enable dropdown to beneficiate from buttonGroup classes */\n    ' + buttonGroup_3(props.theme['$enable-shadows'], props.theme['$enable-rounded'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-active-box-shadow'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm']) + '\n  ';
});
Dropdown.defaultProps = defaultProps$12;
Dropdown.propTypes = propTypes$13;

var propTypes$12 = {
  children: propTypes$1.node,
  isOpen: propTypes$1.bool.isRequired,
  toggle: propTypes$1.func.isRequired
};
var ButtonDropdown = function ButtonDropdown(props) {
  return React.createElement(Dropdown, _extends({}, props, { group: true }));
};
ButtonDropdown.propTypes = propTypes$12;

var defaultProps$15 = {
  tag: 'div',
  role: 'group',
  theme: {
    '$input-btn-border-width': '1px',
    '$btn-padding-x': '1rem',
    '$btn-active-box-shadow': 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
    '$btn-padding-x-lg': '1.5rem',
    '$btn-padding-y-lg': '.75rem',
    '$font-size-lg': '1.25rem',
    '$btn-padding-x-sm': '.5rem',
    '$btn-padding-y-sm': '.25rem',
    '$font-size-sm': '.875rem',
    '$btn-border-radius-lg': '.3rem',
    '$btn-border-radius-sm': '.2rem',
    '$enable-rounded': true,
    '$enable-shadows': true
  }
};
var propTypes$16 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element]),
  theme: propTypes$1.shape({
    '$input-btn-border-width': propTypes$1.string,
    '$btn-padding-x': propTypes$1.string,
    '$btn-active-box-shadow': propTypes$1.string,
    '$btn-padding-x-lg': propTypes$1.string,
    '$btn-padding-y-lg': propTypes$1.string,
    '$font-size-lg': propTypes$1.string,
    '$btn-padding-x-sm': propTypes$1.string,
    '$btn-padding-y-sm': propTypes$1.string,
    '$font-size-sm': propTypes$1.string,
    '$btn-border-radius-lg': propTypes$1.string,
    '$btn-border-radius-sm': propTypes$1.string,
    '$enable-rounded': propTypes$1.bool,
    '$enable-shadows': propTypes$1.bool
  }),
  size: propTypes$1.oneOf(['sm', 'lg']),
  vertical: propTypes$1.bool,
  cssModule: propTypes$1.object
};
var ButtonGroupUnstyled = function (_React$Component) {
  inherits(ButtonGroupUnstyled, _React$Component);
  function ButtonGroupUnstyled() {
    classCallCheck(this, ButtonGroupUnstyled);
    return possibleConstructorReturn(this, (ButtonGroupUnstyled.__proto__ || Object.getPrototypeOf(ButtonGroupUnstyled)).apply(this, arguments));
  }
  createClass(ButtonGroupUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          size = _omit.size,
          vertical = _omit.vertical,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'size', 'vertical', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames(className, vertical ? 'btn-group-vertical' : 'btn-group', defineProperty({}, 'btn-group-' + size, size)), cssModule)
      }, attributes));
    }
  }]);
  return ButtonGroupUnstyled;
}(React.Component);
ButtonGroupUnstyled.propTypes = {
  tag: propTypes$1.oneOfType([propTypes$1.func, propTypes$1.string]),
  className: propTypes$1.string,
  cssModule: propTypes$1.object,
  size: propTypes$1.string,
  vertical: propTypes$1.bool,
  theme: propTypes$1.object
};
var ButtonGroup = styled(ButtonGroupUnstyled).withConfig({
  displayName: 'ButtonGroup'
})(['', '  '], function (props) {
  return '\n    ' + buttonGroup_3(props.theme['$enable-shadows'], props.theme['$enable-rounded'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-active-box-shadow'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm']) + '\n  ';
});
ButtonGroup.defaultProps = defaultProps$15;
ButtonGroup.propTypes = propTypes$16;

var defaultProps$16 = {
  tag: 'div',
  role: 'toolbar',
  theme: {
    '$input-btn-border-width': '1px',
    '$btn-padding-x': '1rem',
    '$btn-active-box-shadow': 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
    '$btn-padding-x-lg': '1.5rem',
    '$btn-padding-y-lg': '.75rem',
    '$font-size-lg': '1.25rem',
    '$btn-padding-x-sm': '.5rem',
    '$btn-padding-y-sm': '.25rem',
    '$font-size-sm': '.875rem',
    '$btn-border-radius-lg': '.3rem',
    '$btn-border-radius-sm': '.2rem',
    '$enable-rounded': true,
    '$enable-shadows': true
  }
};
var propTypes$17 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element]),
  theme: propTypes$1.shape({
    '$input-btn-border-width': propTypes$1.string,
    '$btn-padding-x': propTypes$1.string,
    '$btn-active-box-shadow': propTypes$1.string,
    '$btn-padding-x-lg': propTypes$1.string,
    '$btn-padding-y-lg': propTypes$1.string,
    '$font-size-lg': propTypes$1.string,
    '$btn-padding-x-sm': propTypes$1.string,
    '$btn-padding-y-sm': propTypes$1.string,
    '$font-size-sm': propTypes$1.string,
    '$btn-border-radius-lg': propTypes$1.string,
    '$btn-border-radius-sm': propTypes$1.string,
    '$enable-rounded': propTypes$1.bool,
    '$enable-shadows': propTypes$1.bool
  }),
  cssModule: propTypes$1.object
};
var ButtonToolbarUnstyled = function (_React$Component) {
  inherits(ButtonToolbarUnstyled, _React$Component);
  function ButtonToolbarUnstyled() {
    classCallCheck(this, ButtonToolbarUnstyled);
    return possibleConstructorReturn(this, (ButtonToolbarUnstyled.__proto__ || Object.getPrototypeOf(ButtonToolbarUnstyled)).apply(this, arguments));
  }
  createClass(ButtonToolbarUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames(className, 'btn-toolbar'), cssModule)
      }, attributes));
    }
  }]);
  return ButtonToolbarUnstyled;
}(React.Component);
ButtonToolbarUnstyled.defaultProps = defaultProps$16;
ButtonToolbarUnstyled.propTypes = propTypes$17;
var ButtonToolbar = styled(ButtonToolbarUnstyled).withConfig({
  displayName: 'ButtonToolbar'
})(['', '  '], function (props) {
  return '\n    ' + buttonGroup_3(props.theme['$enable-shadows'], props.theme['$enable-rounded'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-active-box-shadow'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm']) + '\n  ';
});
ButtonToolbar.defaultProps = defaultProps$16;
ButtonToolbar.propTypes = propTypes$17;

var defaultProps$17 = {
  theme: {
    '$table-cell-padding': '.75rem',
    '$text-muted': '#636c72'
  }
};
var propTypes$18 = {
  theme: propTypes$1.shape({
    '$table-cell-padding': propTypes$1.string,
    '$text-muted': propTypes$1.string
  })
};
var Caption = styled.caption.withConfig({
  displayName: 'Caption'
})(['', ''], function (props) {
  return '\n    padding-top: ' + props.theme['$table-cell-padding'] + ';\n    padding-bottom: ' + props.theme['$table-cell-padding'] + ';\n    color: ' + props.theme['$text-muted'] + ';\n    text-align: left;\n    caption-side: top;\n  ';
});
Caption.defaultProps = defaultProps$17;
Caption.propTypes = propTypes$18;

var defaultProps$18 = {
  tag: 'a',
  theme: {
    '$code-font-size': '90%',
    '$code-padding-x': '.4rem',
    '$code-padding-y': '.2rem',
    '$code-color': '#bd4147',
    '$code-bg': '#f7f7f9',
    '$enable-rounded': false
  }
};
var propTypes$19 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element]),
  theme: propTypes$1.shape({
    '$code-font-size': propTypes$1.string,
    '$code-padding-x': propTypes$1.string,
    '$code-padding-y': propTypes$1.string,
    '$code-color': propTypes$1.string,
    '$code-bg': propTypes$1.string,
    '$enable-rounded': propTypes$1.bool
  })
};
var CodeUnstyled = function (_React$Component) {
  inherits(CodeUnstyled, _React$Component);
  function CodeUnstyled() {
    classCallCheck(this, CodeUnstyled);
    return possibleConstructorReturn(this, (CodeUnstyled.__proto__ || Object.getPrototypeOf(CodeUnstyled)).apply(this, arguments));
  }
  createClass(CodeUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
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
CodeUnstyled.defaultProps = defaultProps$18;
CodeUnstyled.propTypes = propTypes$19;
var Code = styled(CodeUnstyled).withConfig({
  displayName: 'Code'
})(['', ''], function (props) {
  return '\n    /* Inline code */\n    padding: ' + props.theme['$code-padding-y'] + ' ' + props.theme['$code-padding-x'] + ';\n    font-size: ' + props.theme['$code-font-size'] + ';\n    color: ' + props.theme['$code-color'] + ';\n    background-color: ' + props.theme['$code-bg'] + ';\n    ' + borderRadius_2(props.theme['$enable-rounded'], props.theme['$border-radius']) + ';\n    \n    /* Streamline the style when inside anchors to avoid broken underline and more */\n    a > & {\n      padding: 0;\n      color: inherit;\n      background-color: inherit;\n    }\n    \n    /* Bootstrap 4 does not place this css rule straight into Code tag see: bootstrap/scss/code.scss */\n    font-family: ' + props.theme['$font-family-monospace'] + ';\n  ';
});
Code.defaultProps = defaultProps$18;
Code.propTypes = propTypes$19;

var grid = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.makeContainer = makeContainer;
exports.makeContainerMaxWidths = makeContainerMaxWidths;
exports.makeGutters = makeGutters;
exports.makeRow = makeRow;
exports.makeColReady = makeColReady;
exports.makeCol = makeCol;
exports.makeColOffset = makeColOffset;
exports.makeColPush = makeColPush;
exports.makeColPull = makeColPull;
exports.makeColModifier = makeColModifier;
var _unitUtils2 = _interopRequireDefault(unitUtils);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultProps = exports.defaultProps = {
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
  var enableGridClasses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-grid-classes'];
  var gridGutterWidths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-gutter-widths'];
  if (enableGridClasses) {
    var columns = [];
    Object.keys(gridGutterWidths).forEach(function (breakpoint) {
      var gutter = gridGutterWidths[breakpoint];
      var column = (_breakpoints.mediaBreakpointUp)(breakpoint, gutter, '\n        padding-right: ' + _unitUtils2.default.rmUnit(gutter) / 2 + _unitUtils2.default.detectUnit(gutter) + ';\n        padding-left:  ' + _unitUtils2.default.rmUnit(gutter) / 2 + _unitUtils2.default.detectUnit(gutter) + ';\n      ');
      columns.push(column);
    });
    return '\n      position: relative;\n      margin-left: auto;\n      margin-right: auto;    \n      ' + columns.join('\n') + '\n    ';
  }
  return '';
}
function makeContainerMaxWidths() {
  var enableGridClasses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-grid-classes'];
  var containerMaxWidths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$container-max-widths'];
  var gridBreakpoints = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$grid-breakpoints'];
  if (enableGridClasses) {
    var maximumWidthList = [];
    Object.keys(containerMaxWidths).forEach(function (breakpoint) {
      var maximumWidth = (_breakpoints.mediaBreakpointUp)(breakpoint, gridBreakpoints, '\n        width: ' + containerMaxWidths[breakpoint] + ';\n        max-width: 100%;\n      ');
      maximumWidthList.push(maximumWidth);
    });
    return '\n      ' + maximumWidthList.join('\n') + '\n    ';
  }
  return '';
}
function makeGutters() {
  var gridGutterWidths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-gutter-widths'];
  var breakpoints$$2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var gutterList = [];
  Object.keys(gridGutterWidths).forEach(function (breakpoint) {
    var gutterValue = gridGutterWidths[breakpoint];
    gutterValue = '' + _unitUtils2.default.rmUnit(gutterValue) / 2 + _unitUtils2.default.detectUnit(gutterValue);
    var gutter = (_breakpoints.mediaBreakpointUp)(breakpoint, breakpoints$$2, '\n      padding-right: ' + gutterValue + ';\n      padding-left:  ' + gutterValue + ';\n    ');
    gutterList.push(gutter);
  });
  return '\n    ' + gutterList.join('\n') + '\n  ';
}
function makeRow() {
  var enableGridClasses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-grid-classes'];
  var gridGutterWidths = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-gutter-widths'];
  if (enableGridClasses) {
    var rowList = [];
    Object.keys(gridGutterWidths).forEach(function (breakpoint) {
      var gutter = gridGutterWidths[breakpoint];
      gutter = '' + _unitUtils2.default.rmUnit(gutter) / -2 + _unitUtils2.default.detectUnit(gutter);
      var row = '\n        margin-right: ' + gutter + ';\n        margin-left:  ' + gutter + ';\n      ';
      rowList.push(row);
    });
    return '\n      display: flex;\n      flex-wrap: wrap;\n      ' + rowList.join('\n') + '\n    ';
  }
  return '';
}
function makeColReady() {
  var gridGutterWidths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-gutter-widths'];
  var colReadyList = [];
  Object.keys(gridGutterWidths).forEach(function (breakpoint) {
    var gutter = gridGutterWidths[breakpoint];
    gutter = '' + _unitUtils2.default.rmUnit(gutter) / 2 + _unitUtils2.default.detectUnit(gutter);
    var colReady = (_breakpoints.mediaBreakpointUp)(breakpoint, gridGutterWidths, '\n      padding-right: ' + gutter + ';\n      padding-left:  ' + gutter + ';\n    ');
    colReadyList.push(colReady);
  });
  return '\n    position: relative;\n    /* Prevent columns from becoming too narrow when at smaller grid tiers by */\n    /* always setting \'width: 100%;\'. This works because we use \'flex\' values */\n    /* later on to override this initial width. */\n    min-height: 1px; /* Prevent collapsing */\n    width: 100%;\n    ' + colReadyList.join('\n') + '\n  ';
}
function makeCol(size) {
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-columns'];
  return '\n    flex: 0 0 ' + _unitUtils2.default.toPercent(size, columns) + ';\n    /* Add a \'max-width\' to ensure content within each column does not blow out */\n    /* the width of the column. Applies to IE10+ and Firefox. Chrome and Safari */\n    /* do not appear to require this. */\n    max-width: ' + _unitUtils2.default.toPercent(size, columns) + ';\n  ';
}
function makeColOffset($size) {
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-columns'];
  return '\n    margin-left: ' + _unitUtils2.default.toPercent($size, columns) + ';\n  ';
}
function makeColPush(size) {
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-columns'];
  return '\n    left: ' + (size > 0 ? _unitUtils2.default.toPercent(size, columns) : 'auto') + ';\n  ';
}
function makeColPull(size) {
  var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-columns'];
  return '\n    right: ' + (size > 0 ? _unitUtils2.default.toPercent(size, columns) : 'auto') + ';\n  ';
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
exports.default = {
  defaultProps: defaultProps,
  makeContainer: makeContainer,
  makeContainerMaxWidths: makeContainerMaxWidths,
  makeGutters: makeGutters,
  makeRow: makeRow,
  makeColReady: makeColReady,
  makeCol: makeCol,
  makeColOffset: makeColOffset,
  makeColPush: makeColPush,
  makeColPull: makeColPull,
  makeColModifier: makeColModifier
};
});
unwrapExports(grid);
var grid_2 = grid.makeContainer;
var grid_3 = grid.makeContainerMaxWidths;
var grid_5 = grid.makeRow;

var gridFramework = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.getGridColumn = getGridColumn;
exports.getColumnGridColumn = getColumnGridColumn;
exports.getMediaBreakpointUp = getMediaBreakpointUp;
exports.makeGridColumns = makeGridColumns;
var defaultProps = exports.defaultProps = {
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
  var gridGutterWidths = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-gutter-widths'];
  var breakpoints$$2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  return '\n    position: relative;\n    width: 100%;\n    min-height: 1px; /* Prevent columns from collapsing when empty */\n    ' + (_grid.makeGutters)(gridGutterWidths, breakpoints$$2) + '\n  ';
}
function getColumnGridColumn() {
  var gridColumns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-columns'];
  var gridBreakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var gridGutterWidths = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$grid-gutter-widths'];
  var breakpoint = arguments[3];
  var columnList = [];
  var infix = (_breakpoints.breakpointInfix)(breakpoint, gridBreakpoints);
  for (var i = 1; i <= gridColumns; i += 1) {
    var column = '\n      &.col' + infix + '-' + i + ',\n       & .col' + infix + '-' + i + '{\n        ' + getGridColumn(gridGutterWidths, gridBreakpoints) + '\n      }\n    ';
    columnList.push(column);
  }
  return '\n    /* Allow columns to stretch full width below their breakpoints */\n    &.col' + infix + ',\n     & .col' + infix + '{\n      ' + getGridColumn(gridGutterWidths, gridBreakpoints) + '\n    }\n\n    ' + columnList.join('\n') + '\n  ';
}
function getMediaBreakpointUp() {
  var gridColumns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-columns'];
  var gridBreakpoints = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-breakpoints'];
  var breakpoint = arguments[2];
  var infix = (_breakpoints.breakpointInfix)(breakpoint, gridBreakpoints);
  var basic = '\n    &.col' + infix + ',\n     & .col' + infix + '{\n      flex-basis: 0;\n      flex-grow: 1;\n      max-width: 100%;\n    }\n    &.col' + infix + '-auto,\n     & .col' + infix + '-auto{\n      flex: 0 0 auto;\n      width: auto;\n    }\n  ';
  var columnList = [];
  for (var i = 1; i <= gridColumns; i += 1) {
    var column = '\n      &.col' + infix + '-' + i + ',\n       & .col' + infix + '-' + i + '{\n        ' + (_grid.makeCol)(i, gridColumns) + '\n      }\n    ';
    columnList.push(column);
  }
  var modifierList = ['pull', 'push'];
  var columnModifierList = [];
  modifierList.forEach(function (modifier) {
    for (var _i = 0; _i <= gridColumns; _i += 1) {
      var columnModifier = '\n        &.' + modifier + infix + '-' + _i + ',\n         & .' + modifier + infix + '-' + _i + '{\n          ' + (_grid.makeColModifier)(modifier, _i, gridColumns) + '\n        }\n      ';
      columnModifierList.push(columnModifier);
    }
  });
  var offsetColumnList = [];
  for (var _i2 = 0; _i2 <= gridColumns - 1; _i2 += 1) {
    if (infix !== 1 || _i2 !== 0) {
      var offsetColumn = '\n        &.offset' + infix + '-' + _i2 + ',\n         & .offset' + infix + '-' + _i2 + '{\n          ' + (_grid.makeColModifier)('offset', _i2, gridColumns) + '\n        }\n      ';
      offsetColumnList.push(offsetColumn);
    }
  }
  return (_breakpoints.mediaBreakpointUp)(breakpoint, gridBreakpoints, '\n    ' + basic + '\n    ' + columnList.join('\n') + '\n    ' + columnModifierList.join('\n') + '\n    ' + offsetColumnList.join('\n') + '\n  ');
}
function makeGridColumns() {
  var enableGridClasses = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-grid-classes'];
  var gridColumns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$grid-columns'];
  var gridGutterWidths = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$grid-gutter-widths'];
  var gridBreakpoints = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$grid-breakpoints'];
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
exports.default = {
  defaultProps: defaultProps,
  getGridColumn: getGridColumn,
  getColumnGridColumn: getColumnGridColumn,
  getMediaBreakpointUp: getMediaBreakpointUp,
  makeGridColumns: makeGridColumns
};
});
unwrapExports(gridFramework);
var gridFramework_5 = gridFramework.makeGridColumns;

var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
var stringOrNumberProp = propTypes$1.oneOfType([propTypes$1.number, propTypes$1.string]);
var columnProps = propTypes$1.oneOfType([propTypes$1.bool, propTypes$1.number, propTypes$1.string, propTypes$1.shape({
  size: propTypes$1.oneOfType([propTypes$1.bool, propTypes$1.number, propTypes$1.string]),
  push: stringOrNumberProp,
  pull: stringOrNumberProp,
  offset: stringOrNumberProp
})]);
var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? '' : 'col-' + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : 'col-' + colWidth + '-auto';
  }
  return isXs ? 'col-' + colSize : 'col-' + colWidth + '-' + colSize;
};
var defaultProps$19 = {
  tag: 'div',
  widths: colWidths,
  theme: {
    '$enable-grid-classes': true,
    '$grid-breakpoints': {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    '$grid-columns': '12',
    '$grid-gutter-widths': {
      xs: '30px',
      sm: '30px',
      md: '30px',
      lg: '30px',
      xl: '30px'
    }
  }
};
var propTypes$20 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.func, propTypes$1.string]),
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  widths: propTypes$1.array,
  theme: propTypes$1.shape({}),
  cssModule: propTypes$1.object
};
var ColUnstyled = function (_React$Component) {
  inherits(ColUnstyled, _React$Component);
  function ColUnstyled() {
    classCallCheck(this, ColUnstyled);
    return possibleConstructorReturn(this, (ColUnstyled.__proto__ || Object.getPrototypeOf(ColUnstyled)).apply(this, arguments));
  }
  createClass(ColUnstyled, [{
    key: 'render',
    value: function render() {
      var _this2 = this;
      var _omit = lodash_omit(this.props, ['theme']),
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
          colClasses.push(mapToCssModules(classnames((_cn = {}, babelHelpers.defineProperty(_cn, colClass, columnProp.size || columnProp.size === ''), babelHelpers.defineProperty(_cn, 'push' + colSizeInterfix + columnProp.push, columnProp.push), babelHelpers.defineProperty(_cn, 'pull' + colSizeInterfix + columnProp.pull, columnProp.pull), babelHelpers.defineProperty(_cn, 'offset' + colSizeInterfix + columnProp.offset, columnProp.offset), _cn))), cssModule);
        } else {
          colClass = getColumnSizeClass(isXs, colWidth, columnProp);
          colClasses.push(colClass);
        }
      });
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames(className, colClasses), cssModule)
      }, attributes));
    }
  }]);
  return ColUnstyled;
}(React.Component);
ColUnstyled.defaultProps = defaultProps$19;
ColUnstyled.propTypes = propTypes$20;
var Col = styled(ColUnstyled).withConfig({
  displayName: 'Col'
})(['', ''], function (props) {
  return '\n    ' + gridFramework_5(props.theme['$enable-grid-classes'], props.theme['$grid-columns'], props.theme['$grid-gutter-widths'], props.theme['$grid-breakpoints']) + '\n  ';
});
Col.defaultProps = defaultProps$19;
Col.propTypes = propTypes$20;

var SHOW = 'SHOW';
var SHOWN = 'SHOWN';
var HIDE = 'HIDE';
var HIDDEN = 'HIDDEN';
var defaultProps$20 = {
  isOpen: false,
  theme: {
    '$transition-collapse': 'height .35s ease'
  },
  tag: 'div',
  delay: {
    show: 350,
    hide: 350
  },
  onOpened: null,
  onClosed: null
};
var propTypes$21 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  delay: propTypes$1.oneOfType([propTypes$1.shape({ show: propTypes$1.number, hide: propTypes$1.number }), propTypes$1.number]),
  isOpen: propTypes$1.bool,
  navbar: propTypes$1.bool,
  onOpened: propTypes$1.func,
  onClosed: propTypes$1.func,
  theme: propTypes$1.shape({
    '$transition-collapse': propTypes$1.string
  }),
  cssModule: propTypes$1.object
};
var Collapse = function (_Component) {
  inherits(Collapse, _Component);
  function Collapse() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck(this, Collapse);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      collapse: HIDDEN,
      height: null
    }, _this.element = null, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }
  createClass(Collapse, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.updateVisibility({ collapse: this.props.isOpen ? SHOWN : HIDDEN });
      this.updateTransition({ delay: this.props.delay, theme: this.props.theme });
    }
  }, {
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
      if (nextProps.theme['$transition-collapse'] !== this.props.theme['$transition-collapse'] || nextProps.delay.show !== this.props.delay.show || nextProps.delay.hide !== this.props.delay.hide) {
        this.updateTransition({ delay: nextProps.delay, theme: nextProps.theme });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.state.collapse === SHOWN && prevState && prevState.collapse !== SHOWN) {
        if (this.props.onOpened) {
          this.props.onOpened();
        }
      }
      if (this.state.collapse === HIDDEN && prevState && prevState.collapse !== HIDDEN) {
        if (this.props.onClosed) {
          this.props.onClosed();
        }
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
      var delay = this.state.delay;
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
    key: 'updateTransition',
    value: function updateTransition(_ref2) {
      var delay = _ref2.delay,
          theme = _ref2.theme;
      var transition = parseTransition(theme['$transition-collapse'])[0];
      var newDelay = {
        show: delay.show !== undefined ? delay.show : transition.duration,
        hide: delay.hide !== undefined ? delay.hide : transition.duration
      };
      if ((typeof delay === 'undefined' ? 'undefined' : _typeof(delay)) !== 'object' && delay !== undefined) {
        newDelay = {
          show: delay,
          hide: delay
        };
      }
      this.setState({ delay: newDelay });
    }
  }, {
    key: 'updateVisibility',
    value: function updateVisibility(_ref3) {
      var collapse = _ref3.collapse;
      this.setState({
        collapse: collapse
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;
      var _omit = lodash_omit(this.props, ['isOpen', 'theme', 'delay', 'onOpened', 'onClosed']),
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
      var classes = mapToCssModules(classnames(className, collapseClass, navbar && 'navbar-collapse'), cssModule);
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
Collapse.defaultProps = defaultProps$20;
Collapse.propTypes = propTypes$21;
Collapse.defaultProps = defaultProps$20;
Collapse.propTypes = propTypes$21;

var defaultProps$21 = {
  theme: {
    '$grid-columns': '12',
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
    '$enable-grid-classes': true
  }
};
var propTypes$22 = {
  className: propTypes$1.string,
  theme: propTypes$1.shape({
    '$grid-columns': propTypes$1.string,
    '$grid-gutter-widths': propTypes$1.object,
    '$grid-breakpoints': propTypes$1.object,
    '$enable-grid-classes': propTypes$1.bool
  })
};
var DdUnstyled = function (_React$Component) {
  inherits(DdUnstyled, _React$Component);
  function DdUnstyled() {
    classCallCheck(this, DdUnstyled);
    return possibleConstructorReturn(this, (DdUnstyled.__proto__ || Object.getPrototypeOf(DdUnstyled)).apply(this, arguments));
  }
  createClass(DdUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          attributes = objectWithoutProperties(_omit, ['className']);
      return React.createElement('dd', _extends({ className: className }, attributes));
    }
  }]);
  return DdUnstyled;
}(React.Component);
DdUnstyled.defaultProps = defaultProps$21;
DdUnstyled.propTypes = propTypes$22;
var Dd = styled(DdUnstyled).withConfig({
  displayName: 'Dd'
})(['  margin-bottom:.5rem;margin-left:0;', ''], function (props) {
  return '\n    ' + gridFramework_5(props.theme['$enable-grid-classes'], props.theme['$grid-columns'], props.theme['$grid-gutter-widths'], props.theme['$grid-breakpoints']) + '\n  ';
});
Dd.defaultProps = defaultProps$21;
Dd.propTypes = propTypes$22;

var propTypes$23 = {
  className: propTypes$1.string,
  children: propTypes$1.node.isRequired
};
var DfnUnstyled = function (_React$Component) {
  inherits(DfnUnstyled, _React$Component);
  function DfnUnstyled() {
    classCallCheck(this, DfnUnstyled);
    return possibleConstructorReturn(this, (DfnUnstyled.__proto__ || Object.getPrototypeOf(DfnUnstyled)).apply(this, arguments));
  }
  createClass(DfnUnstyled, [{
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
DfnUnstyled.propTypes = propTypes$23;
var Dfn = styled(DfnUnstyled).withConfig({
  displayName: 'Dfn'
})(['font-style:italic;']);
Dfn.propTypes = propTypes$23;

var propTypes$24 = {
  className: propTypes$1.string,
  children: propTypes$1.node.isRequired
};
var Details = function (_React$Component) {
  inherits(Details, _React$Component);
  function Details() {
    classCallCheck(this, Details);
    return possibleConstructorReturn(this, (Details.__proto__ || Object.getPrototypeOf(Details)).apply(this, arguments));
  }
  createClass(Details, [{
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
Details.propTypes = propTypes$24;
Details.propTypes = propTypes$24;

var defaultProps$22 = {
  theme: {
    '$grid-gutter-widths': {
      xs: '30px',
      sm: '30px',
      md: '30px',
      lg: '30px',
      xl: '30px'
    },
    '$enable-grid-classes': true
  }
};
var propTypes$25 = {
  className: propTypes$1.string,
  theme: propTypes$1.shape({
    '$grid-gutter-widths': propTypes$1.object,
    '$enable-grid-classes': propTypes$1.bool
  })
};
var DlUnstyled = function (_React$Component) {
  inherits(DlUnstyled, _React$Component);
  function DlUnstyled() {
    classCallCheck(this, DlUnstyled);
    return possibleConstructorReturn(this, (DlUnstyled.__proto__ || Object.getPrototypeOf(DlUnstyled)).apply(this, arguments));
  }
  createClass(DlUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          attributes = objectWithoutProperties(_omit, ['className']);
      return React.createElement('dl', _extends({ className: className }, attributes));
    }
  }]);
  return DlUnstyled;
}(React.Component);
DlUnstyled.defaultProps = defaultProps$22;
DlUnstyled.propTypes = propTypes$25;
var Dl = styled(DlUnstyled).withConfig({
  displayName: 'Dl'
})(['  margin-top:0;margin-bottom:1rem;', ''], function (props) {
  return '\n    ' + grid_5(props.theme['$enable-grid-classes'], props.theme['$grid-gutter-widths']) + '\n  ';
});
Dl.defaultProps = defaultProps$22;
Dl.propTypes = propTypes$25;

function createCommonjsModule$1(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}
'use strict';
var colorName$2 = {
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
var isArrayish$3 = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}
	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};
var simpleSwizzle$2 = createCommonjsModule$1(function (module) {
'use strict';
var concat = Array.prototype.concat;
var slice = Array.prototype.slice;
var swizzle = module.exports = function swizzle(args) {
	var results = [];
	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];
		if (isArrayish$3(arg)) {
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
var colorString$3 = createCommonjsModule$1(function (module) {
var reverseNames = {};
for (var name in colorName$2) {
	if (colorName$2.hasOwnProperty(name)) {
		reverseNames[colorName$2[name]] = name;
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
		rgb = colorName$2[match[1]];
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
	var rgba = simpleSwizzle$2(arguments);
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
	var rgba = simpleSwizzle$2(arguments);
	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};
cs.to.rgb.percent = function () {
	var rgba = simpleSwizzle$2(arguments);
	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);
	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};
cs.to.hsl = function () {
	var hsla = simpleSwizzle$2(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};
cs.to.hwb = function () {
	var hwba = simpleSwizzle$2(arguments);
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
var conversions$3 = createCommonjsModule$1(function (module) {
var reverseKeywords = {};
for (var key in colorName$2) {
	if (colorName$2.hasOwnProperty(key)) {
		reverseKeywords[colorName$2[key]] = key;
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
	for (var keyword in colorName$2) {
		if (colorName$2.hasOwnProperty(keyword)) {
			var value = colorName$2[keyword];
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
	return colorName$2[keyword];
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
var models$1 = Object.keys(conversions$3);
function buildGraph$1() {
	var graph = {};
	for (var len = models$1.length, i = 0; i < len; i++) {
		graph[models$1[i]] = {
			distance: -1,
			parent: null
		};
	}
	return graph;
}
function deriveBFS$1(fromModel) {
	var graph = buildGraph$1();
	var queue = [fromModel];
	graph[fromModel].distance = 0;
	while (queue.length) {
		var current = queue.pop();
		var adjacents = Object.keys(conversions$3[current]);
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
function link$1(from, to) {
	return function (args) {
		return to(from(args));
	};
}
function wrapConversion$1(toModel, graph) {
	var path = [graph[toModel].parent, toModel];
	var fn = conversions$3[graph[toModel].parent][toModel];
	var cur = graph[toModel].parent;
	while (graph[cur].parent) {
		path.unshift(graph[cur].parent);
		fn = link$1(conversions$3[graph[cur].parent][cur], fn);
		cur = graph[cur].parent;
	}
	fn.conversion = path;
	return fn;
}
var route$3 = function (fromModel) {
	var graph = deriveBFS$1(fromModel);
	var conversion = {};
	var models = Object.keys(graph);
	for (var len = models.length, i = 0; i < len; i++) {
		var toModel = models[i];
		var node = graph[toModel];
		if (node.parent === null) {
			continue;
		}
		conversion[toModel] = wrapConversion$1(toModel, graph);
	}
	return conversion;
};
var convert$2 = {};
var models$1$1 = Object.keys(conversions$3);
function wrapRaw$1(fn) {
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
function wrapRounded$1(fn) {
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
models$1$1.forEach(function (fromModel) {
	convert$2[fromModel] = {};
	Object.defineProperty(convert$2[fromModel], 'channels', {value: conversions$3[fromModel].channels});
	Object.defineProperty(convert$2[fromModel], 'labels', {value: conversions$3[fromModel].labels});
	var routes = route$3(fromModel);
	var routeModels = Object.keys(routes);
	routeModels.forEach(function (toModel) {
		var fn = routes[toModel];
		convert$2[fromModel][toModel] = wrapRounded$1(fn);
		convert$2[fromModel][toModel].raw = wrapRaw$1(fn);
	});
});
var colorConvert$2 = convert$2;
'use strict';
var _slice$1 = [].slice;
var skippedModels$1 = [
	'keyword',
	'gray',
	'hex'
];
var hashedModelKeys$1 = {};
Object.keys(colorConvert$2).forEach(function (model) {
	hashedModelKeys$1[_slice$1.call(colorConvert$2[model].labels).sort().join('')] = model;
});
var limiters$1 = {};
function Color$2(obj, model) {
	if (!(this instanceof Color$2)) {
		return new Color$2(obj, model);
	}
	if (model && model in skippedModels$1) {
		model = null;
	}
	if (model && !(model in colorConvert$2)) {
		throw new Error('Unknown model: ' + model);
	}
	var i;
	var channels;
	if (!obj) {
		this.model = 'rgb';
		this.color = [0, 0, 0];
		this.valpha = 1;
	} else if (obj instanceof Color$2) {
		this.model = obj.model;
		this.color = obj.color.slice();
		this.valpha = obj.valpha;
	} else if (typeof obj === 'string') {
		var result = colorString$3.get(obj);
		if (result === null) {
			throw new Error('Unable to parse color from string: ' + obj);
		}
		this.model = result.model;
		channels = colorConvert$2[this.model].channels;
		this.color = result.value.slice(0, channels);
		this.valpha = typeof result.value[channels] === 'number' ? result.value[channels] : 1;
	} else if (obj.length) {
		this.model = model || 'rgb';
		channels = colorConvert$2[this.model].channels;
		var newArr = _slice$1.call(obj, 0, channels);
		this.color = zeroArray$1(newArr, channels);
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
		if (!(hashedKeys in hashedModelKeys$1)) {
			throw new Error('Unable to parse color from object: ' + JSON.stringify(obj));
		}
		this.model = hashedModelKeys$1[hashedKeys];
		var labels = colorConvert$2[this.model].labels;
		var color = [];
		for (i = 0; i < labels.length; i++) {
			color.push(obj[labels[i]]);
		}
		this.color = zeroArray$1(color);
	}
	if (limiters$1[this.model]) {
		channels = colorConvert$2[this.model].channels;
		for (i = 0; i < channels; i++) {
			var limit = limiters$1[this.model][i];
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
Color$2.prototype = {
	toString: function () {
		return this.string();
	},
	toJSON: function () {
		return this[this.model]();
	},
	string: function (places) {
		var self = this.model in colorString$3.to ? this : this.rgb();
		self = self.round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString$3.to[self.model](args);
	},
	percentString: function (places) {
		var self = this.rgb().round(typeof places === 'number' ? places : 1);
		var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
		return colorString$3.to.rgb.percent(args);
	},
	array: function () {
		return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
	},
	object: function () {
		var result = {};
		var channels = colorConvert$2[this.model].channels;
		var labels = colorConvert$2[this.model].labels;
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
		return new Color$2(this.color.map(roundToPlace$1(places)).concat(this.valpha), this.model);
	},
	alpha: function (val) {
		if (arguments.length) {
			return new Color$2(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
		}
		return this.valpha;
	},
	red: getset$1('rgb', 0, maxfn$1(255)),
	green: getset$1('rgb', 1, maxfn$1(255)),
	blue: getset$1('rgb', 2, maxfn$1(255)),
	hue: getset$1(['hsl', 'hsv', 'hsl', 'hwb', 'hcg'], 0, function (val) { return ((val % 360) + 360) % 360; }),
	saturationl: getset$1('hsl', 1, maxfn$1(100)),
	lightness: getset$1('hsl', 2, maxfn$1(100)),
	saturationv: getset$1('hsv', 1, maxfn$1(100)),
	value: getset$1('hsv', 2, maxfn$1(100)),
	chroma: getset$1('hcg', 1, maxfn$1(100)),
	gray: getset$1('hcg', 2, maxfn$1(100)),
	white: getset$1('hwb', 1, maxfn$1(100)),
	wblack: getset$1('hwb', 2, maxfn$1(100)),
	cyan: getset$1('cmyk', 0, maxfn$1(100)),
	magenta: getset$1('cmyk', 1, maxfn$1(100)),
	yellow: getset$1('cmyk', 2, maxfn$1(100)),
	black: getset$1('cmyk', 3, maxfn$1(100)),
	x: getset$1('xyz', 0, maxfn$1(100)),
	y: getset$1('xyz', 1, maxfn$1(100)),
	z: getset$1('xyz', 2, maxfn$1(100)),
	l: getset$1('lab', 0, maxfn$1(100)),
	a: getset$1('lab', 1),
	b: getset$1('lab', 2),
	keyword: function (val) {
		if (arguments.length) {
			return new Color$2(val);
		}
		return colorConvert$2[this.model].keyword(this.color);
	},
	hex: function (val) {
		if (arguments.length) {
			return new Color$2(val);
		}
		return colorString$3.to.hex(this.rgb().round().color);
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
		return Color$2.rgb(val, val, val);
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
		return Color$2.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue(),
				color1.alpha() * p + color2.alpha() * (1 - p));
	}
};
Object.keys(colorConvert$2).forEach(function (model) {
	if (skippedModels$1.indexOf(model) !== -1) {
		return;
	}
	var channels = colorConvert$2[model].channels;
	Color$2.prototype[model] = function () {
		if (this.model === model) {
			return new Color$2(this);
		}
		if (arguments.length) {
			return new Color$2(arguments, model);
		}
		var newAlpha = typeof arguments[channels] === 'number' ? channels : this.valpha;
		return new Color$2(assertArray$1(colorConvert$2[this.model][model].raw(this.color)).concat(newAlpha), model);
	};
	Color$2[model] = function (color) {
		if (typeof color === 'number') {
			color = zeroArray$1(_slice$1.call(arguments), channels);
		}
		return new Color$2(color, model);
	};
});
function roundTo$1(num, places) {
	return Number(num.toFixed(places));
}
function roundToPlace$1(places) {
	return function (num) {
		return roundTo$1(num, places);
	};
}
function getset$1(model, channel, modifier) {
	model = Array.isArray(model) ? model : [model];
	model.forEach(function (m) {
		(limiters$1[m] || (limiters$1[m] = []))[channel] = modifier;
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
function maxfn$1(max) {
	return function (v) {
		return Math.max(0, Math.min(max, v));
	};
}
function assertArray$1(val) {
	return Array.isArray(val) ? val : [val];
}
function zeroArray$1(arr, length) {
	for (var i = 0; i < length; i++) {
		if (typeof arr[i] !== 'number') {
			arr[i] = 0;
		}
	}
	return arr;
}
var unitUtils$2 = createCommonjsModule$1(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var UnitUtils = function UnitUtils() {
  var _this = this;
  _classCallCheck(this, UnitUtils);
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
exports.default = new UnitUtils();
module.exports = exports['default'];
});
function ifThen(conditions, returnTrue) {
  return ifElse(conditions, returnTrue, '');
}
function ifElse(conditions, returnTrue, returnFalse) {
  return conditions ? returnTrue : returnFalse;
}
var parseTransition_1$1 = createCommonjsModule$1(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
var parseTransition = function parseTransition(transitions) {
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
};
exports.default = parseTransition;
module.exports = exports['default'];
});

var defaultProps$23 = {
  active: false,
  theme: {
    '$enable-rounded': true,
    '$enable-shadows': true,
    $white: '#fff',
    '$drawer-bg': '#fff',
    '$drawer-transition': 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    '$drawer-box-shadow': 'rgba(0, 0, 0, 0.16) 0px 3px 10px, rgba(0, 0, 0, 0.23) 0px 3px 10px',
    '$drawer-border-radius': '0px',
    '$drawer-zindex': '1030',
    '$drawer-docked-width': '55px'
  }
};
var propTypes$26 = {
  className: propTypes$1.string,
  active: propTypes$1.bool.isRequired,
  top: propTypes$1.string,
  right: propTypes$1.string,
  bottom: propTypes$1.string,
  left: propTypes$1.string,
  docked: propTypes$1.bool,
  theme: propTypes$1.shape({
    '$enable-rounded': propTypes$1.bool,
    '$enable-shadows': propTypes$1.bool,
    '$drawer-bg': propTypes$1.string,
    '$drawer-transition': propTypes$1.string,
    '$drawer-box-shadow': propTypes$1.string,
    '$drawer-border-radius': propTypes$1.string,
    '$drawer-zindex': propTypes$1.string,
    '$drawer-docked-width': propTypes$1.string
  }),
  cssModule: propTypes$1.object
};
var DrawerUnstyled = function (_React$Component) {
  inherits(DrawerUnstyled, _React$Component);
  function DrawerUnstyled() {
    classCallCheck(this, DrawerUnstyled);
    return possibleConstructorReturn(this, (DrawerUnstyled.__proto__ || Object.getPrototypeOf(DrawerUnstyled)).apply(this, arguments));
  }
  createClass(DrawerUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          active = _omit.active,
          top = _omit.top,
          right = _omit.right,
          bottom = _omit.bottom,
          left = _omit.left,
          docked = _omit.docked,
          cssModule = _omit.cssModule,
          props = objectWithoutProperties(_omit, ['className', 'active', 'top', 'right', 'bottom', 'left', 'docked', 'cssModule']);
      var classes = mapToCssModules(classnames(className, !docked ? 'drawer' : 'drawer-docked', {
        active: active,
        'drawer-top': top,
        'drawer-right': right,
        'drawer-bottom': bottom,
        'drawer-left': left
      }, cssModule));
      return React.createElement('div', _extends({ className: classes }, props));
    }
  }]);
  return DrawerUnstyled;
}(React.Component);
DrawerUnstyled.defaultProps = defaultProps$23;
DrawerUnstyled.propTypes = propTypes$26;
var Drawer = styled(DrawerUnstyled).withConfig({
  displayName: 'Drawer'
})(['', ''], function (props) {
<<<<<<< HEAD
  return '\n    &.drawer {\n      background-color: ' + props.theme['$drawer-bg'] + ';\n      transition: ' + props.theme['$drawer-transition'] + ';\n      position: fixed;\n      flex: 1 0 auto;\n      z-index: ' + props.theme['$drawer-zindex'] + ';\n      overflow-y: auto;\n      outline: none;\n      ' + borderRadius_2(props.theme['$enable-rounded'], props.theme['$drawer-border-radius']) + '\n      ' + boxShadow_2(props.theme['$enable-shadows'], props.theme['$drawer-box-shadow']) + '\n      &.drawer-top {\n        ' + ifThen(props.top, '\n            left: 0;\n            top: 0;\n            width: 100%;\n            height: ' + props.top + ';\n            transform: translate(0px, -' + (props.top && unitUtils$1.math.addition(props.top, 4)) + ');\n            &.active {\n              transform: translate(0px, 0px);\n            }\n          ') + '\n      }\n      &.drawer-right {\n        ' + ifThen(props.right, '\n            bottom: 0;\n            right: 0;\n            height: 100%;\n            width: ' + props.right + ';\n            transform: translate(' + (props.right && unitUtils$1.math.addition(props.right, 4)) + ', 0px);\n            &.active {\n              transform: translate(0px, 0px);\n            }\n          ') + '\n      }\n      &.drawer-bottom {\n        ' + ifThen(props.bottom, '\n            left: 0;\n            bottom: 0;\n            width: 100%;\n            height: ' + props.bottom + ';\n            transform: translate(0px, ' + (props.bottom && unitUtils$1.math.addition(props.bottom, 4)) + ');\n            &.active {\n              transform: translate(0px, 0px);\n            }\n          ') + '\n      }\n      &.drawer-left {\n        ' + ifThen(props.left, '\n            bottom: 0;\n            left: 0;\n            height: 100%;\n            width: ' + props.left + ';\n            transform: translate(-' + (props.left && unitUtils$1.math.addition(props.left, 4)) + ', 0px);\n            &.active {\n              transform: translate(0px, 0px);\n            }\n          ') + '\n      }\n    }\n    &.drawer-docked { \n      flex: 0 0 auto;\n      overflow: hidden;\n      &.drawer-left {\n        ' + ifThen(props.left, '\n          width: ' + props.theme['$drawer-docked-width'] + ';\n          transition: width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;\n          &.active {\n            width: ' + props.left + ';\n          }\n          ') + '\n      }\n    }\n  ';
=======
  return '\n    &.drawer {\n      background-color: ' + props.theme['$drawer-bg'] + ';\n      transition: ' + props.theme['$drawer-transition'] + ';\n      position: fixed;\n      flex: 1 0 auto;\n      z-index: ' + props.theme['$drawer-zindex'] + ';\n      overflow-y: auto;\n      outline: none;\n      ' + borderRadius_2(props.theme['$enable-rounded'], props.theme['$drawer-border-radius']) + '\n      ' + boxShadow_2(props.theme['$enable-shadows'], props.theme['$drawer-box-shadow']) + '\n      &.drawer-top {\n        ' + ifThen(props.top, '\n            left: 0;\n            top: 0;\n            width: 100%;\n            height: ' + props.top + ';\n            transform: translate(0px, -' + (props.top && unitUtils$1.math.addition(props.top, 4)) + ');\n            &.active {\n              transform: translate(0px, 0px);\n            }\n          ') + '\n      }\n      &.drawer-right {\n        ' + ifThen(props.right, '\n            bottom: 0;\n            right: 0;\n            height: 100%;\n            width: ' + props.right + ';\n            transform: translate(' + (props.right && unitUtils$1.math.addition(props.right, 4)) + ', 0px);\n            &.active {\n              transform: translate(0px, 0px);\n            }\n          ') + '\n      }\n      &.drawer-bottom {\n        ' + ifThen(props.bottom, '\n            left: 0;\n            bottom: 0;\n            width: 100%;\n            height: ' + props.bottom + ';\n            transform: translate(0px, ' + (props.bottom && unitUtils$1.math.addition(props.bottom, 4)) + ');\n            &.active {\n              transform: translate(0px, 0px);\n            }\n          ') + '\n      }\n      &.drawer-left {\n        ' + ifThen(props.left, '\n            bottom: 0;\n            left: 0;\n            height: 100%;\n            width: ' + props.left + ';\n            transform: translate(-' + (props.left && unitUtils$1.math.addition(props.left, 4)) + ', 0px);\n            &.active {\n              transform: translate(0px, 0px);\n            }\n          ') + '\n      }\n    }\n    &.drawer-docked { \n      flex: 0 0 auto;\n      overflow: hidden;\n        &.drawer-top {\n          border-bottom: 1px solid grey;\n        }\n        &.drawer-right {\n          border-left: 1px solid grey;\n        }\n        &.drawer-bottom {\n          border-top: 1px solid grey;\n        }\n        &.drawer-left {\n  \n          ' + ifThen(props.left, '\n            border-right: 1px solid grey;  \n            width: ' + props.theme['$drawer-docked-width'] + ';\n            transition: width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms;\n            &.active {\n              width: ' + props.left + ';\n            }\n            ') + '\n        }\n    }\n  ';
>>>>>>> 314d91a46620e2e48635e8760803d474be8ee533
});
Drawer.propTypes = propTypes$26;
Drawer.defaultProps = defaultProps$23;

var defaultProps$25$1 = {
  theme: {
    '$grid-columns': '12',
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
    '$enable-grid-classes': true
  }
};
var propTypes$27 = {
  className: propTypes$1.string,
  theme: propTypes$1.shape({
    '$grid-columns': propTypes$1.string,
    '$grid-gutter-widths': propTypes$1.object,
    '$grid-breakpoints': propTypes$1.object,
    '$enable-grid-classes': propTypes$1.bool
  })
};
var DtUnstyled = function (_React$Component) {
  inherits(DtUnstyled, _React$Component);
  function DtUnstyled() {
    classCallCheck(this, DtUnstyled);
    return possibleConstructorReturn(this, (DtUnstyled.__proto__ || Object.getPrototypeOf(DtUnstyled)).apply(this, arguments));
  }
  createClass(DtUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          attributes = objectWithoutProperties(_omit, ['className']);
      return React.createElement('dt', _extends({ className: className }, attributes));
    }
  }]);
  return DtUnstyled;
}(React.Component);
DtUnstyled.defaultProps = defaultProps$25$1;
DtUnstyled.propTypes = propTypes$27;
var Dt = styled(DtUnstyled).withConfig({
  displayName: 'Dt'
})(['  ', ''], function (props) {
  return '\n    /* Reboot Scss */\n    font-weight: ' + props.theme['$dt-font-weight'] + ';\n    ' + gridFramework_5(props.theme['$enable-grid-classes'], props.theme['$grid-columns'], props.theme['$grid-gutter-widths'], props.theme['$grid-breakpoints']) + '\n  ';
});
Dt.defaultProps = defaultProps$25$1;
Dt.propTypes = propTypes$27;

var propTypes$28 = {
  className: propTypes$1.string,
  size: propTypes$1.oneOf(['lg', '2x', '3x', '4x', '5x']),
  color: propTypes$1.oneOf(['success', 'info', 'warning', 'danger', 'white', 'gray-dark', 'primary', 'hide'])
};
var FaUnstyled = function (_React$Component) {
  inherits(FaUnstyled, _React$Component);
  function FaUnstyled() {
    classCallCheck(this, FaUnstyled);
    return possibleConstructorReturn(this, (FaUnstyled.__proto__ || Object.getPrototypeOf(FaUnstyled)).apply(this, arguments));
  }
  createClass(FaUnstyled, [{
    key: 'render',
    value: function render() {
      var _cn;
      var _props = this.props,
          className = _props.className,
          size = _props.size,
          color = _props.color,
          attributes = objectWithoutProperties(_props, ['className', 'size', 'color']);
      var classes = classnames(className, 'fa', (_cn = {}, babelHelpers.defineProperty(_cn, 'text-' + color, color), babelHelpers.defineProperty(_cn, 'fa-' + size, size), _cn));
      return React.createElement('i', {
        className: classnames(classes, Object.keys(attributes).map(function (key) {
          return 'fa-' + key;
        }))
      });
    }
  }]);
  return FaUnstyled;
}(React.Component);
FaUnstyled.propTypes = propTypes$28;
var Fa = styled(FaUnstyled).withConfig({
  displayName: 'Fa'
})(['&.fa-lg{vertical-align:-2%;}']);
Fa.propTypes = propTypes$28;

var propTypes$29 = {
  className: propTypes$1.string,
  size: propTypes$1.oneOf(['lg', '2x', '3x', '4x', '5x', ''])
};
var FaStacked = function (_React$Component) {
  inherits(FaStacked, _React$Component);
  function FaStacked() {
    classCallCheck(this, FaStacked);
    return possibleConstructorReturn(this, (FaStacked.__proto__ || Object.getPrototypeOf(FaStacked)).apply(this, arguments));
  }
  createClass(FaStacked, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          size = _props.size,
          attributes = objectWithoutProperties(_props, ['className', 'size']);
      return React.createElement('span', _extends({
        className: classnames(className, 'fa-stack', defineProperty({}, 'fa-' + size, size))
      }, attributes));
    }
  }]);
  return FaStacked;
}(React.Component);
FaStacked.propTypes = propTypes$29;
FaStacked.propTypes = propTypes$29;

var defaultProps$26$1 = {
  theme: {
    '$grid-gutter-widths': {
      xs: '30px',
      sm: '30px',
      md: '30px',
      lg: '30px',
      xl: '30px'
    },
    '$enable-grid-classes': true
  }
};
var propTypes$30 = {
  className: propTypes$1.string,
  children: propTypes$1.node.isRequired,
  theme: propTypes$1.shape({
    '$grid-gutter-widths': propTypes$1.object,
    '$enable-grid-classes': propTypes$1.bool
  })
};
var FieldsetUnstyled = function (_React$Component) {
  inherits(FieldsetUnstyled, _React$Component);
  function FieldsetUnstyled() {
    classCallCheck(this, FieldsetUnstyled);
    return possibleConstructorReturn(this, (FieldsetUnstyled.__proto__ || Object.getPrototypeOf(FieldsetUnstyled)).apply(this, arguments));
  }
  createClass(FieldsetUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
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
FieldsetUnstyled.defaultProps = defaultProps$26$1;
FieldsetUnstyled.propTypes = propTypes$30;
var Fieldset = styled(FieldsetUnstyled).withConfig({
  displayName: 'Fieldset'
})(['', ''], function (props) {
  return '\n    min-width: 0;\n    padding: 0;\n    margin: 0;\n    border: 0;\n\n    & .row {\n      ' + grid_5(props.theme['$enable-grid-classes'], props.theme['$grid-gutter-widths']) + '\n    }\n\n  ';
});
Fieldset.defaultProps = defaultProps$26$1;
Fieldset.propTypes = propTypes$30;

var Footer = styled.footer.withConfig({
  displayName: 'Footer'
})(['']);

var typography_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typography = typography;
var defaultProps = exports.defaultProps = {
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
  var $headingsMarginBottom = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$headings-margin-bottom'];
  var $headingsFontFamily = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$headings-font-family'];
  var $headingsFontWeight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$headings-font-weight'];
  var $headingsLineHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$headings-line-height'];
  var $headingsColor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$headings-color'];
  var $display1Size = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$display1-size'];
  var $display2Size = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$display2-size'];
  var $display3Size = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$display3-size'];
  var $display4Size = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$display4-size'];
  var $display1Weight = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$display1-weight'];
  var $display2Weight = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$display2-weight'];
  var $display3Weight = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps['$display3-weight'];
  var $display4Weight = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps['$display4-weight'];
  return '\n    margin-bottom: ' + $headingsMarginBottom + ';\n    font-family: ' + $headingsFontFamily + ';\n    font-weight: ' + $headingsFontWeight + ';\n    line-height: ' + $headingsLineHeight + ';\n    color: ' + $headingsColor + ';\n    \n    /* Type Scss */\n\n    &.display-1 {\n      font-size: ' + $display1Size + ';\n      font-weight: ' + $display1Weight + ';\n      line-height: ' + $headingsLineHeight + ';\n\n    }\n    \n    &.display-2 {\n      font-size: ' + $display2Size + ';\n      font-weight: ' + $display2Weight + ';\n      line-height: ' + $headingsLineHeight + ';\n    }\n    \n    &.display-3 {\n      font-size: ' + $display3Size + ';\n      font-weight: ' + $display3Weight + ';\n      line-height: ' + $headingsLineHeight + ';\n    }\n    \n    &.display-4 {\n      font-size: ' + $display4Size + ';\n      font-weight: ' + $display4Weight + ';\n        line-height: ' + $headingsLineHeight + ';\n    }\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  typography: typography
};
});
unwrapExports(typography_1);
var typography_2 = typography_1.typography;

var defaultProps$27$1 = {
  theme: {
    '$font-size-h1': '2.5rem',
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
    '$display4-weight': '300',
    '$lead-font-size': '1.25rem',
    '$lead-font-weight': '300'
  }
};
var propTypes$31 = {
  className: propTypes$1.string,
  theme: propTypes$1.shape({
    '$link-color': propTypes$1.string,
    '$font-size-h1': propTypes$1.string,
    '$headings-margin-bottom': propTypes$1.string,
    '$headings-font-family': propTypes$1.string,
    '$headings-font-weight': propTypes$1.string,
    '$headings-line-height': propTypes$1.string,
    '$headings-color': propTypes$1.string,
    '$display1-size': propTypes$1.string,
    '$display2-size': propTypes$1.string,
    '$display3-size': propTypes$1.string,
    '$display4-size': propTypes$1.string,
    '$display1-weight': propTypes$1.string,
    '$display2-weight': propTypes$1.string,
    '$display3-weight': propTypes$1.string,
    '$display4-weight': propTypes$1.string,
    '$lead-font-size': propTypes$1.string,
    '$lead-font-weight': propTypes$1.string
  }),
  color: propTypes$1.oneOf(['white', 'muted', 'gray-dark', 'primary', 'success', 'info', 'warning', 'danger']),
  lead: propTypes$1.bool,
  cssModule: propTypes$1.object
};
var H1Unstyled = function (_React$Component) {
  inherits(H1Unstyled, _React$Component);
  function H1Unstyled() {
    classCallCheck(this, H1Unstyled);
    return possibleConstructorReturn(this, (H1Unstyled.__proto__ || Object.getPrototypeOf(H1Unstyled)).apply(this, arguments));
  }
  createClass(H1Unstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          color = _omit.color,
          children = _omit.children,
          cssModule = _omit.cssModule,
          lead = _omit.lead,
          attributes = objectWithoutProperties(_omit, ['className', 'color', 'children', 'cssModule', 'lead']);
      var classes = mapToCssModules(classnames(className, lead ? 'lead' : false, color ? 'text-' + color : false), cssModule);
      return React.createElement(
        'h1',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return H1Unstyled;
}(React.Component);
H1Unstyled.defaultProps = defaultProps$27$1;
H1Unstyled.propTypes = propTypes$31;
var H1 = styled(H1Unstyled).withConfig({
  displayName: 'H1'
})(['', ''], function (props) {
  return '\n    font-size: ' + props.theme['$font-size-h1'] + ';\n    ' + typography_2(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n\n    &.lead {\n      font-size: ' + props.theme['$lead-font-size'] + ';\n      font-weight: ' + props.theme['$lead-font-weight'] + ';\n    }\n\n    /* Reboot Scss */\n    margin-top: 0;\n  ';
});
H1.defaultProps = defaultProps$27$1;
H1.propTypes = propTypes$31;

var defaultProps$28$1 = {
  theme: {
    '$font-size-h2': '2rem',
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
    '$display4-weight': '300',
    '$lead-font-size': '1.25rem',
    '$lead-font-weight': '300'
  }
};
var propTypes$32 = {
  className: propTypes$1.string,
  theme: propTypes$1.shape({
    '$link-color': propTypes$1.string,
    '$font-size-h2': propTypes$1.string,
    '$headings-margin-bottom': propTypes$1.string,
    '$headings-font-family': propTypes$1.string,
    '$headings-font-weight': propTypes$1.string,
    '$headings-line-height': propTypes$1.string,
    '$headings-color': propTypes$1.string,
    '$display1-size': propTypes$1.string,
    '$display2-size': propTypes$1.string,
    '$display3-size': propTypes$1.string,
    '$display4-size': propTypes$1.string,
    '$display1-weight': propTypes$1.string,
    '$display2-weight': propTypes$1.string,
    '$display3-weight': propTypes$1.string,
    '$display4-weight': propTypes$1.string,
    '$lead-font-size': propTypes$1.string,
    '$lead-font-weight': propTypes$1.string
  }),
  color: propTypes$1.oneOf(['white', 'muted', 'gray-dark', 'primary', 'success', 'info', 'warning', 'danger']),
  lead: propTypes$1.bool,
  cssModule: propTypes$1.object
};
var H2Unstyled = function (_React$Component) {
  inherits(H2Unstyled, _React$Component);
  function H2Unstyled() {
    classCallCheck(this, H2Unstyled);
    return possibleConstructorReturn(this, (H2Unstyled.__proto__ || Object.getPrototypeOf(H2Unstyled)).apply(this, arguments));
  }
  createClass(H2Unstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          color = _omit.color,
          children = _omit.children,
          cssModule = _omit.cssModule,
          lead = _omit.lead,
          attributes = objectWithoutProperties(_omit, ['className', 'color', 'children', 'cssModule', 'lead']);
      var classes = mapToCssModules(classnames(className, lead ? 'lead' : false, color ? 'text-' + color : false), cssModule);
      return React.createElement(
        'h2',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return H2Unstyled;
}(React.Component);
H2Unstyled.defaultProps = defaultProps$28$1;
H2Unstyled.propTypes = propTypes$32;
var H2 = styled(H2Unstyled).withConfig({
  displayName: 'H2'
})(['', ''], function (props) {
  return '\n\n    font-size: ' + props.theme['$font-size-h2'] + ';\n    ' + typography_2(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n\n    &.lead {\n      font-size: ' + props.theme['$lead-font-size'] + ';\n      font-weight: ' + props.theme['$lead-font-weight'] + ';\n    }\n\n    /* Reboot Scss */\n    margin-top: 0;\n  ';
});
H2.defaultProps = defaultProps$28$1;
H2.propTypes = propTypes$32;

var defaultProps$29$1 = {
  theme: {
    '$font-size-h3': '1.75rem',
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
    '$display4-weight': '300',
    '$lead-font-size': '1.25rem',
    '$lead-font-weight': '300'
  }
};
var propTypes$33 = {
  className: propTypes$1.string,
  theme: propTypes$1.shape({
    '$link-color': propTypes$1.string,
    '$font-size-h3': propTypes$1.string,
    '$headings-margin-bottom': propTypes$1.string,
    '$headings-font-family': propTypes$1.string,
    '$headings-font-weight': propTypes$1.string,
    '$headings-line-height': propTypes$1.string,
    '$headings-color': propTypes$1.string,
    '$display1-size': propTypes$1.string,
    '$display2-size': propTypes$1.string,
    '$display3-size': propTypes$1.string,
    '$display4-size': propTypes$1.string,
    '$display1-weight': propTypes$1.string,
    '$display2-weight': propTypes$1.string,
    '$display3-weight': propTypes$1.string,
    '$display4-weight': propTypes$1.string,
    '$lead-font-size': propTypes$1.string,
    '$lead-font-weight': propTypes$1.string
  }),
  color: propTypes$1.oneOf(['white', 'muted', 'gray-dark', 'primary', 'success', 'info', 'warning', 'danger']),
  lead: propTypes$1.bool,
  cssModule: propTypes$1.object
};
var H3Unstyled = function (_React$Component) {
  inherits(H3Unstyled, _React$Component);
  function H3Unstyled() {
    classCallCheck(this, H3Unstyled);
    return possibleConstructorReturn(this, (H3Unstyled.__proto__ || Object.getPrototypeOf(H3Unstyled)).apply(this, arguments));
  }
  createClass(H3Unstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          color = _omit.color,
          children = _omit.children,
          cssModule = _omit.cssModule,
          lead = _omit.lead,
          attributes = objectWithoutProperties(_omit, ['className', 'color', 'children', 'cssModule', 'lead']);
      var classes = mapToCssModules(classnames(className, lead ? 'lead' : false, color ? 'text-' + color : false), cssModule);
      return React.createElement(
        'h3',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return H3Unstyled;
}(React.Component);
H3Unstyled.defaultProps = defaultProps$29$1;
H3Unstyled.propTypes = propTypes$33;
var H3 = styled(H3Unstyled).withConfig({
  displayName: 'H3'
})(['', ''], function (props) {
  return '\n    font-size: ' + props.theme['$font-size-h3'] + ';\n    ' + typography_2(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n\n    &.lead {\n      font-size: ' + props.theme['$lead-font-size'] + ';\n      font-weight: ' + props.theme['$lead-font-weight'] + ';\n    }\n\n    /* Reboot Scss */\n    margin-top: 0;\n  ';
});
H3.defaultProps = defaultProps$29$1;
H3.propTypes = propTypes$33;

var defaultProps$30$1 = {
  theme: {
    '$font-size-h4': '1.5rem',
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
    '$display4-weight': '300',
    '$lead-font-size': '1.25rem',
    '$lead-font-weight': '300'
  }
};
var propTypes$34 = {
  className: propTypes$1.string,
  theme: propTypes$1.shape({
    '$link-color': propTypes$1.string,
    '$font-size-h4': propTypes$1.string,
    '$headings-margin-bottom': propTypes$1.string,
    '$headings-font-family': propTypes$1.string,
    '$headings-font-weight': propTypes$1.string,
    '$headings-line-height': propTypes$1.string,
    '$headings-color': propTypes$1.string,
    '$display1-size': propTypes$1.string,
    '$display2-size': propTypes$1.string,
    '$display3-size': propTypes$1.string,
    '$display4-size': propTypes$1.string,
    '$display1-weight': propTypes$1.string,
    '$display2-weight': propTypes$1.string,
    '$display3-weight': propTypes$1.string,
    '$display4-weight': propTypes$1.string,
    '$lead-font-size': propTypes$1.string,
    '$lead-font-weight': propTypes$1.string
  }),
  color: propTypes$1.oneOf(['white', 'muted', 'gray-dark', 'primary', 'success', 'info', 'warning', 'danger']),
  lead: propTypes$1.bool,
  cssModule: propTypes$1.object
};
var H4Unstyled = function (_React$Component) {
  inherits(H4Unstyled, _React$Component);
  function H4Unstyled() {
    classCallCheck(this, H4Unstyled);
    return possibleConstructorReturn(this, (H4Unstyled.__proto__ || Object.getPrototypeOf(H4Unstyled)).apply(this, arguments));
  }
  createClass(H4Unstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          color = _omit.color,
          children = _omit.children,
          cssModule = _omit.cssModule,
          lead = _omit.lead,
          attributes = objectWithoutProperties(_omit, ['className', 'color', 'children', 'cssModule', 'lead']);
      var classes = mapToCssModules(classnames(className, lead ? 'lead' : false, color ? 'text-' + color : false), cssModule);
      return React.createElement(
        'h4',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return H4Unstyled;
}(React.Component);
H4Unstyled.defaultProps = defaultProps$30$1;
H4Unstyled.propTypes = propTypes$34;
var H4 = styled(H4Unstyled).withConfig({
  displayName: 'H4'
})(['', ''], function (props) {
  return '\n    font-size: ' + props.theme['$font-size-h4'] + ';\n    ' + typography_2(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$dis$play4-weight']) + '\n\n    &.lead {\n      font-size: ' + props.theme['$lead-font-size'] + ';\n      font-weight: ' + props.theme['$lead-font-weight'] + ';\n    }\n\n    /* Reboot Scss */\n    margin-top: 0;\n  ';
});
H4.defaultProps = defaultProps$30$1;
H4.propTypes = propTypes$34;

var defaultProps$31$1 = {
  theme: {
    '$font-size-h5': '1.25rem',
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
    '$display4-weight': '300',
    '$lead-font-size': '1.25rem',
    '$lead-font-weight': '300'
  }
};
var propTypes$35 = {
  className: propTypes$1.string,
  theme: propTypes$1.shape({
    '$link-color': propTypes$1.string,
    '$font-size-h5': propTypes$1.string,
    '$headings-margin-bottom': propTypes$1.string,
    '$headings-font-family': propTypes$1.string,
    '$headings-font-weight': propTypes$1.string,
    '$headings-line-height': propTypes$1.string,
    '$headings-color': propTypes$1.string,
    '$display1-size': propTypes$1.string,
    '$display2-size': propTypes$1.string,
    '$display3-size': propTypes$1.string,
    '$display4-size': propTypes$1.string,
    '$display1-weight': propTypes$1.string,
    '$display2-weight': propTypes$1.string,
    '$display3-weight': propTypes$1.string,
    '$display4-weight': propTypes$1.string,
    '$lead-font-size': propTypes$1.string,
    '$lead-font-weight': propTypes$1.string
  }),
  color: propTypes$1.oneOf(['white', 'muted', 'gray-dark', 'primary', 'success', 'info', 'warning', 'danger']),
  lead: propTypes$1.bool,
  cssModule: propTypes$1.object
};
var H5Unstyled = function (_React$Component) {
  inherits(H5Unstyled, _React$Component);
  function H5Unstyled() {
    classCallCheck(this, H5Unstyled);
    return possibleConstructorReturn(this, (H5Unstyled.__proto__ || Object.getPrototypeOf(H5Unstyled)).apply(this, arguments));
  }
  createClass(H5Unstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          color = _omit.color,
          children = _omit.children,
          cssModule = _omit.cssModule,
          lead = _omit.lead,
          attributes = objectWithoutProperties(_omit, ['className', 'color', 'children', 'cssModule', 'lead']);
      var classes = mapToCssModules(classnames(className, lead ? 'lead' : false, color ? 'text-' + color : false), cssModule);
      return React.createElement(
        'h5',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return H5Unstyled;
}(React.Component);
H5Unstyled.defaultProps = defaultProps$31$1;
H5Unstyled.propTypes = propTypes$35;
var H5 = styled(H5Unstyled).withConfig({
  displayName: 'H5'
})(['', ''], function (props) {
  return '\n    font-size: ' + props.theme['$font-size-h5'] + ';\n    ' + typography_2(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n \n    &.lead {\n     font-size: ' + props.theme['$lead-font-size'] + ';\n     font-weight: ' + props.theme['$lead-font-weight'] + ';\n    }\n\n    /* Reboot Scss */\n    margin-top: 0;\n  ';
});
H5.defaultProps = defaultProps$31$1;
H5.propTypes = propTypes$35;

var defaultProps$32$1 = {
  theme: {
    '$font-size-h6': '1rem',
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
    '$display4-weight': '300',
    '$lead-font-size': '1.25rem',
    '$lead-font-weight': '300'
  }
};
var propTypes$36 = {
  className: propTypes$1.string,
  theme: propTypes$1.shape({
    '$link-color': propTypes$1.string,
    '$font-size-h6': propTypes$1.string,
    '$headings-margin-bottom': propTypes$1.string,
    '$headings-font-family': propTypes$1.string,
    '$headings-font-weight': propTypes$1.string,
    '$headings-line-height': propTypes$1.string,
    '$headings-color': propTypes$1.string,
    '$display1-size': propTypes$1.string,
    '$display2-size': propTypes$1.string,
    '$display3-size': propTypes$1.string,
    '$display4-size': propTypes$1.string,
    '$display1-weight': propTypes$1.string,
    '$display2-weight': propTypes$1.string,
    '$display3-weight': propTypes$1.string,
    '$display4-weight': propTypes$1.string,
    '$lead-font-size': propTypes$1.string,
    '$lead-font-weight': propTypes$1.string
  }),
  color: propTypes$1.oneOf(['white', 'muted', 'gray-dark', 'primary', 'success', 'info', 'warning', 'danger']),
  lead: propTypes$1.bool,
  cssModule: propTypes$1.object
};
var H6Unstyled = function (_React$Component) {
  inherits(H6Unstyled, _React$Component);
  function H6Unstyled() {
    classCallCheck(this, H6Unstyled);
    return possibleConstructorReturn(this, (H6Unstyled.__proto__ || Object.getPrototypeOf(H6Unstyled)).apply(this, arguments));
  }
  createClass(H6Unstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          color = _omit.color,
          children = _omit.children,
          cssModule = _omit.cssModule,
          lead = _omit.lead,
          attributes = objectWithoutProperties(_omit, ['className', 'color', 'children', 'cssModule', 'lead']);
      var classes = mapToCssModules(classnames(className, lead ? 'lead' : false, color ? 'text-' + color : false), cssModule);
      return React.createElement(
        'h6',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return H6Unstyled;
}(React.Component);
H6Unstyled.defaultProps = defaultProps$32$1;
H6Unstyled.propTypes = propTypes$36;
var H6 = styled(H6Unstyled).withConfig({
  displayName: 'H6'
})(['', ''], function (props) {
  return '\n    font-size: ' + props.theme['$font-size-h6'] + ';\n    ' + typography_2(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n    \n    &.lead {\n     font-size: ' + props.theme['$lead-font-size'] + ';\n     font-weight: ' + props.theme['$lead-font-weight'] + ';\n    }\n    \n    /* Reboot Scss */\n    margin-top: 0;\n  ';
});
H6.defaultProps = defaultProps$32$1;
H6.propTypes = propTypes$36;

var navbarToggleable_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.navbarToggleable = navbarToggleable;
var defaultProps = exports.defaultProps = {
  '$grid-breakpoints': {
    xs: '0',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  }
};
function navbarToggleable() {
  var gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-breakpoints'];
  var navbarBreakpointList = [];
  Object.keys(gridBreakpoints).forEach(function (breakpoint) {
    var next = (_breakpoints.breakpointNext)(breakpoint, gridBreakpoints);
    var infix = (_breakpoints.breakpointInfix)(breakpoint, gridBreakpoints);
    var navbarBreakpoint = '\n      &.navbar-toggleable' + infix + ' {\n        ' + (_breakpoints.mediaBreakpointDown)(breakpoint, gridBreakpoints, '\n          .navbar-nav {\n            .dropdown-menu {\n              position: static;\n              float: none;\n            }\n          }\n\n          > .container {\n            padding-right: 0;\n            padding-left: 0;\n          }\n        ') + '\n        ' + (_breakpoints.mediaBreakpointUp)(next, gridBreakpoints, '\n          flex-direction: row;\n          flex-wrap: nowrap;\n          align-items: center;\n  \n          .navbar-nav {\n            flex-direction: row;\n  \n            .nav-link {\n              padding-right: .5rem;\n              padding-left: .5rem;\n            }\n          }\n  \n          /* For nesting containers, have to redeclare for alignment purposes */\n          > .container {\n            display: flex;\n            flex-wrap: nowrap;\n            align-items: center;\n          }\n  \n          .navbar-collapse {\n            display: flex !important;\n            width: 100%;\n\n           }\n           \n          .navbar-toggler {\n            display: none;\n          }\n        ') + '\n      }\n    ';
    navbarBreakpointList.push(navbarBreakpoint);
  });
  return '\n    ' + navbarBreakpointList.join('\n') + '\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  navbarToggleable: navbarToggleable
};
});
unwrapExports(navbarToggleable_1);

var navbar_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.navbar = navbar;
var defaultProps = exports.defaultProps = {
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
  var $gridBreakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$grid-breakpoints'];
  var $enableRounded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$enable-rounded'];
  var $enableHoverMediaQuery = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$enable-hover-media-query'];
  var $navbarPaddingY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$navbar-padding-y'];
  var $navbarPaddingX = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$navbar-padding-x'];
  var $zindexNavbar = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$zindex-navbar'];
  var $zindexNavbarFixed = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$zindex-navbar-fixed'];
  var $zindexNavbarSticky = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$zindex-navbar-sticky'];
  var $navbarBrandPaddingY = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$navbar-brand-padding-y'];
  var $fontSizeLg = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$font-size-lg'];
  var $navbarDividerPaddingY = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$navbar-divider-padding-y'];
  var $navbarTogglerPaddingY = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps['$navbar-toggler-padding-y'];
  var $navbarTogglerPaddingX = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps['$navbar-toggler-padding-x'];
  var $navbarTogglerFontSize = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps['$navbar-toggler-font-size'];
  var $borderWidth = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps['$border-width'];
  var $navbarTogglerBorderRadius = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps['$navbar-toggler-border-radius'];
  var $navbarLightActiveColor = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps['$navbar-light-active-color'];
  var $navbarLightColor = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps['$navbar-light-color'];
  var $navbarLightHoverColor = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps['$navbar-light-hover-color'];
  var $navbarLightTogglerBorder = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps['$navbar-light-toggler-border'];
  var $navbarLightDisabledColor = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps['$navbar-light-disabled-color'];
  var $navbarLightTogglerBg = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps['$navbar-light-toggler-bg'];
  var $navbarInverseActiveColor = arguments.length > 22 && arguments[22] !== undefined ? arguments[22] : defaultProps['$navbar-inverse-active-color'];
  var $navbarInverseColor = arguments.length > 23 && arguments[23] !== undefined ? arguments[23] : defaultProps['$navbar-inverse-color'];
  var $navbarInverseHoverColor = arguments.length > 24 && arguments[24] !== undefined ? arguments[24] : defaultProps['$navbar-inverse-hover-color'];
  var $navbarInverseTogglerBorder = arguments.length > 25 && arguments[25] !== undefined ? arguments[25] : defaultProps['$navbar-inverse-toggler-border'];
  var $navbarInverseTogglerBg = arguments.length > 26 && arguments[26] !== undefined ? arguments[26] : defaultProps['$navbar-inverse-toggler-bg'];
  var $navbarInverseDisabledColor = arguments.length > 27 && arguments[27] !== undefined ? arguments[27] : defaultProps['$navbar-inverse-disabled-color'];
  return '\n    /* Wrapper and base class\n\n     Provide a static navbar from which we expand to create full-width, fixed, and\n     other navbar variations.\n    */\n\n    &.navbar {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      padding: ' + $navbarPaddingY + ' ' + $navbarPaddingX + ';\n    }\n    \n    /*\n     Brand/project name\n    */\n\n    & .navbar-brand {\n      display: inline-block;\n      padding-top: ' + $navbarBrandPaddingY + ';\n      padding-bottom: ' + $navbarBrandPaddingY + ';\n      margin-right: ' + $navbarPaddingX + ';\n      font-size: ' + $fontSizeLg + ';\n      line-height: inherit;\n      white-space: nowrap;\n      ' + (_hover.hoverFocus)($enableHoverMediaQuery, 'text-decoration: none;') + '\n    }\n    \n    /* Navigation\n\n     Custom navbar navigation built on the base .nav styles.\n    */\n\n    &.navbar-nav,\n    & .navbar-nav {\n      display: flex;\n      flex-direction: column; /* cannot use inherit to get the .navbars value */\n      padding-left: 0;\n      margin-bottom: 0;\n      list-style: none;\n    \n      .nav-link {\n        padding-right: 0;\n        padding-left: 0;\n      }\n    }\n    \n    /* Navbar text  */\n\n    & .navbar-text {\n      display: inline-block;\n      padding-top:    .425rem;\n      padding-bottom: .425rem;\n    }\n\n\n    /* Navbar toggle\n\n     Custom button for toggling the .navbar-collapse, powered by the collapse\n     Bootstrap JavaScript plugin.\n    */\n\n    & .navbar-toggler {\n      align-self: flex-start; \n      padding: ' + $navbarTogglerPaddingY + ' ' + $navbarTogglerPaddingX + ';\n      font-size: ' + $navbarTogglerFontSize + ';\n      line-height: 1;\n      background: transparent;\n      border: ' + $borderWidth + ' solid transparent;\n      ' + (_borderRadius.borderRadius)($enableRounded, $navbarTogglerBorderRadius) + '\n      ' + (_hover.hoverFocus)($enableHoverMediaQuery, 'text-decoration: none;') + '\n    }\n    \n    /* Keep as a separate element so folks can easily override it with another icon or image file as needed. */\n    & .navbar-toggler-icon {\n      display: inline-block;\n      width: 1.5em;\n      height: 1.5em;\n      vertical-align: middle;\n      content: "";\n      background: no-repeat center center;\n      background-size: 100% 100%;\n    }\n    \n    /* Use position on the toggler to prevent it from being auto placed as a flex item and allow easy placement. */\n    & .navbar-toggler-left {\n      position: absolute;\n      left: ' + $navbarPaddingX + ';\n    }\n    & .navbar-toggler-right {\n      position: absolute;\n      right: ' + $navbarPaddingX + ';\n    }\n\n    /* Dark links against a light background */\n    &.navbar-light {\n      .navbar-brand,\n      .navbar-toggler {\n        color: ' + $navbarLightActiveColor + ';\n\n        ' + (_hover.hoverFocus)($enableHoverMediaQuery, 'color: ' + $navbarLightActiveColor + ';') + '\n      }\n\n      .navbar-nav {\n        .nav-link {\n          color: ' + $navbarLightColor + ';\n          ' + (_hover.hoverFocus)($enableHoverMediaQuery, 'color: ' + $navbarLightHoverColor + ';') + '\n          &.disabled {\n            color: ' + $navbarLightDisabledColor + ';\n          }\n        }\n\n        .open > .nav-link,\n        .active > .nav-link,\n        .nav-link.open,\n        .nav-link.active {\n          color: ' + $navbarLightActiveColor + ';\n        }\n      }\n\n      .navbar-toggler {\n        border-color: ' + $navbarLightTogglerBorder + ';\n      }\n      .navbar-toggler-icon {\n        background-image: ' + $navbarLightTogglerBg + ';\n      }\n  \n      .navbar-text {\n        color: ' + $navbarLightColor + ';\n      }\n    }\n      \n\n    /* White links against a dark background */\n    &.navbar-inverse {\n      .navbar-brand,\n      .navbar-toggler {\n        color: ' + $navbarInverseActiveColor + ';\n        ' + (_hover.hoverFocus)($enableHoverMediaQuery, 'color: ' + $navbarInverseActiveColor + ';') + '\n      }\n\n      .navbar-nav {\n        .nav-link {\n          color: ' + $navbarInverseColor + ';\n          ' + (_hover.hoverFocus)($enableHoverMediaQuery, 'color: ' + $navbarInverseHoverColor + ';') + '\n          &.disabled {\n            color: ' + $navbarInverseDisabledColor + ';\n          }\n        }\n\n        .open > .nav-link,\n        .active > .nav-link,\n        .nav-link.open,\n        .nav-link.active {\n          color: ' + $navbarInverseActiveColor + ';\n        }\n      }\n\n      .navbar-toggler {\n        border-color: ' + $navbarInverseTogglerBorder + ';\n      }\n      \n      .navbar-toggler-icon {\n        background-image: ' + $navbarInverseTogglerBg + ';\n      }\n    \n      .navbar-text {\n        color: ' + $navbarInverseColor + ';\n      }\n    }\n    \n\n    ' + (_navbarToggleable.navbarToggleable)($gridBreakpoints) + '\n    \n    /* DELETED IN LATEST BOOTSTRAP VERSINO */\n    \n    /* Navbar alignment options\n\n     Display the navbar across the entirety of the page or fixed it to the top or\n     bottom of the page.\n    */\n\n    /* A static, full width modifier with no rounded corners. */\n    &.navbar-full {\n      z-index: ' + $zindexNavbar + ';\n      ' + (_breakpoints.mediaBreakpointUp)('sm', $gridBreakpoints, (_borderRadius.borderRadius)($enableRounded, '0')) + '\n    }\n\n      /* Fix the top/bottom navbars when screen real estate supports it */\n    &.navbar-fixed-top,\n    &.navbar-fixed-bottom {\n      position: fixed;\n      right: 0;\n      left: 0;\n      z-index: ' + $zindexNavbarFixed + ';\n      /*  Undo the rounded corners */\n      ' + (_breakpoints.mediaBreakpointUp)('sm', $gridBreakpoints, (_borderRadius.borderRadius)($enableRounded, '0')) + '\n    }\n\n    &.navbar-fixed-top {\n      top: 0;\n    }\n\n    &.navbar-fixed-bottom {\n      bottom: 0;\n    }\n\n    /* position sticky does not seem to be working AJT*/\n\n    &.navbar-sticky-top {\n      position: sticky;\n      top: 0;\n      z-index: ' + $zindexNavbarSticky + ';\n      width: 100%;\n\n        /*  Undo the rounded corners */\n      ' + (_breakpoints.mediaBreakpointUp)('sm', $gridBreakpoints, (_borderRadius.borderRadius)($enableRounded, '0')) + '\n    }\n\n    & .navbar-divider {\n      float: left;\n      width: ' + $borderWidth + ';\n      padding-top: ' + $navbarDividerPaddingY + ';\n      padding-bottom: ' + $navbarDividerPaddingY + ';\n      margin-right: ' + $navbarPaddingX + ';\n      margin-left:  ' + $navbarPaddingX + ';\n      overflow: hidden;\n\n      &::before {\n        content: \'\0a0\';\n      }\n    }\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  navbar: navbar
};
});
unwrapExports(navbar_1);
var navbar_3 = navbar_1.navbar;

var defaultProps$33$1 = {
  theme: {
    '$enable-rounded': true,
    '$enable-hover-media-query': false,
    '$border-width': '1px',
    '$font-size-lg': '1.25rem',
    '$border-radius': '.25rem',
    '$navbar-padding-x': '1rem',
    '$navbar-padding-y': '0.5rem',
    '$zindex-navbar': '1000',
    '$zindex-navbar-fixed': '1030',
    '$zindex-navbar-sticky': '1030',
    '$navbar-brand-padding-y': '.25rem',
    '$navbar-divider-padding-y': '.425rem',
    '$navbar-toggler-padding-y': '.5rem',
    '$navbar-toggler-padding-x': '.75rem',
    '$navbar-toggler-font-size': '1.25rem',
    '$navbar-toggler-border-radius': '.25rem',
    '$navbar-light-active-color': 'rgba(0,0,0,.9)',
    '$navbar-light-color': 'rgba(0,0,0,.5)',
    '$navbar-light-hover-color': 'rgba(0,0,0,.7)',
    '$navbar-light-toggler-border': 'rgba(0,0,0,.1)',
    '$navbar-light-disabled-color': 'rgba(0, 0, 0, 0.3)',
    '$navbar-light-toggler-bg': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(0,0,0,.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')',
    '$navbar-inverse-active-color': 'rgba(255,255,255,1)',
    '$navbar-inverse-color': 'rgba(255,255,255,.5)',
    '$navbar-inverse-hover-color': 'rgba(255,255,255,.75)',
    '$navbar-inverse-toggler-border': 'rgba(255,255,255,.1)',
    '$navbar-inverse-toggler-bg': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(255,255,255,.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')',
    '$navbar-inverse-disabled-color': 'rgba(255, 255, 255, 0.25)'
  }
};
var propTypes$37 = {
  shadowHeader: propTypes$1.bool,
  theme: propTypes$1.shape({
    '$enable-rounded': propTypes$1.bool,
    '$enable-hover-media-query': propTypes$1.bool,
    '$border-width': propTypes$1.string,
    '$font-size-lg': propTypes$1.string,
    '$border-radius': propTypes$1.string,
    '$navbar-padding-x': propTypes$1.string,
    '$navbar-padding-y': propTypes$1.string,
    '$zindex-navbar': propTypes$1.string,
    '$zindex-navbar-fixed': propTypes$1.string,
    '$zindex-navbar-sticky': propTypes$1.string,
    '$navbar-brand-padding-y': propTypes$1.string,
    '$navbar-divider-padding-y': propTypes$1.string,
    '$navbar-toggler-padding-y': propTypes$1.string,
    '$navbar-toggler-padding-x': propTypes$1.string,
    '$navbar-toggler-font-size': propTypes$1.string,
    '$navbar-toggler-border-radius': propTypes$1.string,
    '$navbar-light-active-color': propTypes$1.string,
    '$navbar-light-color': propTypes$1.string,
    '$navbar-light-hover-color': propTypes$1.string,
    '$navbar-light-toggler-border': propTypes$1.string,
    '$navbar-light-disabled-color': propTypes$1.string,
    '$navbar-light-toggler-bg': propTypes$1.string,
    '$navbar-inverse-active-color': propTypes$1.string,
    '$navbar-inverse-color': propTypes$1.string,
    '$navbar-inverse-hover-color': propTypes$1.string,
    '$navbar-inverse-toggler-border': propTypes$1.string,
    '$navbar-inverse-toggler-bg': propTypes$1.string,
    '$navbar-inverse-disabled-color': propTypes$1.string
  })
};
var Header = styled.header.withConfig({
  displayName: 'Header'
})(['', '  '], function (props) {
  return '\n    ' + navbar_3(props.theme['$grid-breakpoints'], props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$navbar-padding-y'], props.theme['$navbar-padding-x'], props.theme['$zindex-navbar'], props.theme['$zindex-navbar-fixed'], props.theme['$zindex-navbar-sticky'], props.theme['$navbar-brand-padding-y'], props.theme['$font-size-lg'], props.theme['$navbar-divider-padding-y'], props.theme['$navbar-toggler-padding-y'], props.theme['$navbar-toggler-padding-x'], props.theme['$navbar-toggler-font-size'], props.theme['$border-width'], props.theme['$navbar-toggler-border-radius'], props.theme['$navbar-light-active-color'], props.theme['$navbar-light-color'], props.theme['$navbar-light-hover-color'], props.theme['$navbar-light-toggler-border'], props.theme['$navbar-light-disabled-color'], props.theme['$navbar-light-toggler-bg'], props.theme['$navbar-inverse-active-color'], props.theme['$navbar-inverse-color'], props.theme['$navbar-inverse-hover-color'], props.theme['$navbar-inverse-toggler-border'], props.theme['$navbar-inverse-toggler-bg'], props.theme['$navbar-inverse-disabled-color']) + '\n    ' + conditional_1(props.shadowHeader, 'box-shadow: 0 1px 4px 0 rgba(0,0,0,.37);') + '\n  ';
});
Header.defaultProps = defaultProps$33$1;
Header.propTypes = propTypes$37;

var defaultProps$34$1 = {
  theme: {
    '$hr-border-width': '1px',
    '$hr-border-color': 'rgba(0, 0, 0, 0.1)'
  }
};
var propTypes$38 = {
  theme: propTypes$1.shape({
    '$hr-border-width': propTypes$1.string,
    '$hr-border-color': propTypes$1.string
  })
};
var Hr = styled.hr.withConfig({
  displayName: 'Hr'
})(['', ''], function (props) {
  return '\n    margin-top: ' + props.theme['$spacer-y'] + ';\n    margin-bottom: ' + props.theme['$spacer-y'] + ';\n    border: 0;\n    border-top: ' + props.theme['$hr-border-width'] + ' solid ' + props.theme['$hr-border-color'] + ';\n  ';
});
Hr.defaultProps = defaultProps$34$1;
Hr.propTypes = propTypes$38;

var image = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imgFluid = imgFluid;
exports.imgRetina = imgRetina;
function imgFluid() {
  return "\n    /* Part 1: Set a maximum relative to the parent */\n    max-width: 100%;\n    /* Part 2: Override the height to auto, otherwise images will be stretched */\n    /* when setting a width and height attribute on the img element. */\n    height: auto;\n  ";
}
function imgRetina(file1x, file2x, width1x, height1x) {
  return "\n    background-image: url(" + file1x + ");\n\n    /* Autoprefixer takes care of adding -webkit-min-device-pixel-ratio and -o-min-device-pixel-ratio, */\n    /* but doesn't convert dppx=>dpi. */\n    /* There's no such thing as unprefixed min-device-pixel-ratio since it's nonstandard. */\n    /* Compatibility info: http://caniuse.com/#feat=css-media-resolution */\n    @media only screen and (min-resolution: 192dpi), /* IE9-11 don't support dppx */\n      only screen and (min-resolution: 2dppx) { /* Standardized */\n        background-image: url(" + file2x + ");\n        background-size: " + width1x + " " + height1x + ";\n    }\n  ";
}
exports.default = {
  imgFluid: imgFluid,
  imgRetina: imgRetina
};
});
unwrapExports(image);
var image_1 = image.imgFluid;

var defaultProps$35$1 = {
  tag: 'img',
  theme: {
    '$enable-rounded': true,
    '$enable-transitions': true,
    '$enable-shadows': false,
    '$spacer-halved': '0.5rem',
    '$border-width': '1px',
    '$border-radius': '.25rem',
    '$thumbnail-padding': '.25rem',
    '$thumbnail-bg': '#fff',
    '$thumbnail-border-width': '1px',
    '$thumbnail-border-color': '#ddd',
    '$thumbnail-border-radius': '.25rem',
    '$thumbnail-box-shadow': '0 1px 2px rgba(0, 0, 0, 0.75)',
    '$thumbnail-transition': 'all .2s ease-in-out',
    '$figure-caption-font-size': '90%',
    '$figure-caption-color': '#636c72'
  }
};
var propTypes$39 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element]),
  fluid: propTypes$1.bool,
  figure: propTypes$1.bool,
  src: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.object]).isRequired,
  alt: propTypes$1.string.isRequired,
  theme: propTypes$1.shape({
    '$enable-rounded': propTypes$1.bool,
    '$enable-transitions': propTypes$1.bool,
    '$enable-shadows': propTypes$1.bool,
    '$spacer-halved': propTypes$1.string,
    '$border-width': propTypes$1.string,
    '$border-radius': propTypes$1.string,
    '$thumbnail-padding': propTypes$1.string,
    '$thumbnail-bg': propTypes$1.string,
    '$thumbnail-border-width': propTypes$1.string,
    '$thumbnail-border-color': propTypes$1.string,
    '$thumbnail-border-radius': propTypes$1.string,
    '$thumbnail-box-shadow': propTypes$1.string,
    '$thumbnail-transition': propTypes$1.string,
    '$figure-caption-font-size': propTypes$1.string,
    '$figure-caption-color': propTypes$1.string
  }),
  cssModule: propTypes$1.object
};
var ImgUnstyled = function (_React$Component) {
  inherits(ImgUnstyled, _React$Component);
  function ImgUnstyled() {
    classCallCheck(this, ImgUnstyled);
    return possibleConstructorReturn(this, (ImgUnstyled.__proto__ || Object.getPrototypeOf(ImgUnstyled)).apply(this, arguments));
  }
  createClass(ImgUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          src = _omit.src,
          alt = _omit.alt,
          fluid = _omit.fluid,
          figure = _omit.figure,
          thumbnail = _omit.thumbnail,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['className', 'src', 'alt', 'fluid', 'figure', 'thumbnail', 'cssModule', 'tag']);
      var classes = mapToCssModules(classnames(className, fluid ? 'img-fluid' : false, thumbnail ? 'img-thumbnail' : false, figure ? 'figure-img' : false), cssModule);
      return React.createElement(Tag, _extends({
        className: classes,
        src: src,
        alt: alt
      }, attributes));
    }
  }]);
  return ImgUnstyled;
}(React.Component);
ImgUnstyled.defaultProps = defaultProps$35$1;
ImgUnstyled.propTypes = propTypes$39;
var Img = styled(ImgUnstyled).withConfig({
  displayName: 'Img'
})(['', ''], function (props) {
  return '\n    \n    /* \n      Responsive images (ensure images does not scale beyond their parents)\n      This is purposefully opt-in via an explicit class rather than being the default for all <img>.\n      We previously tried the "images are responsive by default" approach in Bootstrap v2,\n      and abandoned it in Bootstrap v3 because it breaks lots of third-party widgets (including Google Maps)\n      which we are not expecting the images within themselves to be involuntarily resized.\n      See also https://github.com/twbs/bootstrap/issues/18178\n    */\n    \n    &.img-fluid {\n      ' + image_1() + '\n    }\n    \n    \n     /* Image thumbnails */ \n    &.img-thumbnail {\n      padding: ' + props.theme['$thumbnail-padding'] + ';\n      background-color: ' + props.theme['$thumbnail-bg'] + ';\n      border: ' + props.theme['$thumbnail-border-width'] + ' solid ' + props.theme['$thumbnail-border-color'] + ';\n      ' + borderRadius_2(props.theme['$enable-rounded'], props.theme['$thumbnail-border-radius']) + '\n      ' + transition_2$1(props.theme['$enable-transitions'], props.theme['$thumbnail-transition']) + '\n      ' + boxShadow_2(props.theme['$enable-shadows'], props.theme['$thumbnail-box-shadow']) + '\n      /* Keep them at most 100% wide */\n      ' + image_1() + '\n    }\n   \n    &.figure-img {\n      margin-bottom: ' + props.theme['$spacer-halved'] + ';\n      line-height: 1;\n    }\n    \n    /* Reboot Scss */\n    \n    /*\n     By default, <img> are inline-block. This assumes that, and vertically\n     centers them. This will not apply should you reset them to block level.\n    */\n    vertical-align: middle;\n    /*\n     Note: <img> are deliberately not made responsive by default.\n     For the rationale behind this, see the comments on the .img-fluid class.\n    */\n  ';
});
Img.defaultProps = defaultProps$35$1;
Img.propTypes = propTypes$39;

var FigureUnstyled = function (_React$Component) {
  inherits(FigureUnstyled, _React$Component);
  function FigureUnstyled() {
    classCallCheck(this, FigureUnstyled);
    return possibleConstructorReturn(this, (FigureUnstyled.__proto__ || Object.getPrototypeOf(FigureUnstyled)).apply(this, arguments));
  }
  createClass(FigureUnstyled, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          rest = objectWithoutProperties(_props, ['className', 'children']);
      return React.createElement(
        'figure',
        _extends({ className: classnames('figure', className) }, rest),
        children
      );
    }
  }]);
  return FigureUnstyled;
}(React.Component);
FigureUnstyled.propTypes = {
  children: propTypes$1.node.isRequired,
  className: propTypes$1.string
};
var Figure = styled(FigureUnstyled).withConfig({
  displayName: 'Figure'
})(['&.figure{display:inline-block;}margin:0 0 1rem;']);

var FigCaptionUnstyled = function (_React$Component) {
  inherits(FigCaptionUnstyled, _React$Component);
  function FigCaptionUnstyled() {
    classCallCheck(this, FigCaptionUnstyled);
    return possibleConstructorReturn(this, (FigCaptionUnstyled.__proto__ || Object.getPrototypeOf(FigCaptionUnstyled)).apply(this, arguments));
  }
  createClass(FigCaptionUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          children = _omit.children,
          right = _omit.right,
          rest = objectWithoutProperties(_omit, ['className', 'children', 'right']);
      var classes = classnames('figure-caption', className, right ? 'text-right' : null);
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
FigCaptionUnstyled.defaultProps = {
  theme: makeTheme$31()
};
FigCaptionUnstyled.propTypes = {
  children: propTypes$1.node,
  className: propTypes$1.string,
  right: propTypes$1.bool,
  theme: propTypes$1.object
};
var FigCaption = styled(FigCaptionUnstyled).withConfig({
  displayName: 'FigCaption'
})(['', ''], function (props) {
  return '\n    &.figure-caption {\n      font-size: ' + props.theme['$figure-caption-font-size'] + ';\n      color: ' + props.theme['$figure-caption-color'] + ';\n    }\n  ';
});

var defaultProps$36$1 = {
  tag: 'p',
  theme: {
    '$enable-rounded': true,
    '$enable-shadows': false,
    '$enable-hover-media-query': false,
    '$enable-transitions': true,
    '$font-weight-normal': 'normal',
    '$font-size-base': '1rem',
    '$font-size-lg': '1.25rem',
    '$font-size-sm': '.875rem',
    '$font-size-xs': '.75rem',
    '$btn-padding-x': '1rem',
    '$btn-padding-y': '.5rem',
    '$btn-line-height': '1.25',
    '$btn-font-weight': 'normal',
    '$btn-transition': 'all .2s ease-in-out',
    '$btn-box-shadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)',
    '$btn-block-spacing-y': '.5rem',
    '$btn-primary-color': '#fff',
    '$btn-primary-bg': '#0275d8',
    '$btn-primary-border': '#0275d8',
    '$btn-secondary-color': '#292b2c',
    '$btn-secondary-bg': '#fff',
    '$btn-secondary-border': '#ccc',
    '$btn-info-color': '#fff',
    '$btn-info-bg': '#5bc0de',
    '$btn-info-border': '#5bc0de',
    '$btn-success-color': '#fff',
    '$btn-success-bg': '#5cb85c',
    '$btn-success-border': '#5cb85c',
    '$btn-warning-color': '#fff',
    '$btn-warning-bg': '#f0ad4e',
    '$btn-warning-border': '#f0ad4e',
    '$btn-danger-color': '#fff',
    '$btn-danger-bg': '#d9534f',
    '$btn-danger-border': '#d9534f',
    '$btn-link-disabled-color': '#636c72',
    '$btn-padding-x-lg': '1.5rem',
    '$btn-padding-y-lg': '.75rem',
    '$btn-padding-x-sm': '.5rem',
    '$btn-padding-y-sm': '.25rem',
    '$btn-border-radius': '.25rem',
    '$btn-border-radius-lg': '1.25rem',
    '$btn-border-radius-sm': '.875rem',
    '$input-btn-border-width': '1px',
    '$link-color': '#0275d8',
    '$link-hover-color': 'hsl(207.79999999999995, 98.2%, 27.8%)',
    '$link-hover-decoration': 'underline',
    '$cursor-disabled': 'not-allowed'
  },
  type: 'text'
};
var propTypes$40 = {
  className: propTypes$1.string,
  children: propTypes$1.node,
  type: propTypes$1.oneOf(['button', 'checkbox', 'color', 'date', 'datetime', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'textarea', 'select', 'time', 'url', 'week']),
  size: propTypes$1.oneOf(['sm', 'lg']),
  state: propTypes$1.oneOf(['success', 'warning', 'danger']),
  innerRef: propTypes$1.func,
  static: propTypes$1.bool,
  addon: propTypes$1.bool,
  onChange: propTypes$1.func,
  indeterminate: propTypes$1.bool,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element]),
  theme: propTypes$1.shape({
    '$enable-rounded': propTypes$1.bool,
    '$enable-shadows': propTypes$1.bool,
    '$enable-hover-media-query': propTypes$1.bool,
    '$enable-transitions': propTypes$1.bool,
    '$font-weight-normal': propTypes$1.string,
    '$font-size-base': propTypes$1.string,
    '$font-size-lg': propTypes$1.string,
    '$font-size-sm': propTypes$1.string,
    '$font-size-xs': propTypes$1.string,
    '$btn-padding-x': propTypes$1.string,
    '$btn-padding-y': propTypes$1.string,
    '$btn-line-height': propTypes$1.string,
    '$btn-font-weight': propTypes$1.string,
    '$btn-transition': propTypes$1.string,
    '$btn-box-shadow': propTypes$1.string,
    '$btn-block-spacing-y': propTypes$1.string,
    '$btn-primary-color': propTypes$1.string,
    '$btn-primary-bg': propTypes$1.string,
    '$btn-primary-border': propTypes$1.string,
    '$btn-secondary-color': propTypes$1.string,
    '$btn-secondary-bg': propTypes$1.string,
    '$btn-secondary-border': propTypes$1.string,
    '$btn-info-color': propTypes$1.string,
    '$btn-info-bg': propTypes$1.string,
    '$btn-info-border': propTypes$1.string,
    '$btn-success-color': propTypes$1.string,
    '$btn-success-bg': propTypes$1.string,
    '$btn-success-border': propTypes$1.string,
    '$btn-warning-color': propTypes$1.string,
    '$btn-warning-bg': propTypes$1.string,
    '$btn-warning-border': propTypes$1.string,
    '$btn-danger-color': propTypes$1.string,
    '$btn-danger-bg': propTypes$1.string,
    '$btn-danger-border': propTypes$1.string,
    '$btn-link-disabled-color': propTypes$1.string,
    '$btn-padding-x-lg': propTypes$1.string,
    '$btn-padding-y-lg': propTypes$1.string,
    '$btn-padding-x-sm': propTypes$1.string,
    '$btn-padding-y-sm': propTypes$1.string,
    '$btn-border-radius': propTypes$1.string,
    '$btn-border-radius-lg': propTypes$1.string,
    '$btn-border-radius-sm': propTypes$1.string,
    '$input-btn-border-width': propTypes$1.string,
    '$link-color': propTypes$1.string,
    '$link-hover-color': propTypes$1.string,
    '$link-hover-decoration': propTypes$1.string,
    '$cursor-disabled': propTypes$1.string
  }),
  cssModule: propTypes$1.object
};
var InputUnstyled = function (_React$Component) {
  inherits(InputUnstyled, _React$Component);
  function InputUnstyled() {
    classCallCheck(this, InputUnstyled);
    return possibleConstructorReturn(this, (InputUnstyled.__proto__ || Object.getPrototypeOf(InputUnstyled)).apply(this, arguments));
  }
  createClass(InputUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          type = _omit.type,
          size = _omit.size,
          state = _omit.state,
          tag = _omit.tag,
          addon = _omit.addon,
          staticInput = _omit.static,
          innerRef = _omit.innerRef,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'type', 'size', 'state', 'tag', 'addon', 'static', 'innerRef']);
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
      var classes = mapToCssModules(classnames(className, state ? 'form-control-' + state : false, size ? 'form-control-' + size : false, formControlClass), cssModule);
      if (Tag === 'input') {
        attributes.type = type;
      }
      return React.createElement(Tag, _extends({}, attributes, { ref: innerRef, className: classes }));
    }
  }]);
  return InputUnstyled;
}(React.Component);
InputUnstyled.defaultProps = defaultProps$36$1;
InputUnstyled.propTypes = propTypes$40;
var Input = styled(InputUnstyled).withConfig({
  displayName: 'Input'
})(['', ''], function (props) {
  return '\n    /* Reboot Scss */\n    touch-action: manipulation;\n    \n    &[type="radio"],\n    &[type="checkbox"] {\n      box-sizing: border-box; /* 1. Add the correct box sizing in IE 10- */\n      padding: 0; /* 2. Remove the padding in IE 10- */\n      /*\n       Apply a disabled cursor for radios and checkboxes.\n       Note: Neither radios nor checkboxes can be readonly.\n      */\n   \n      &:disabled {\n        cursor: ' + props.theme['$cursor-disabled'] + ';\n      }\n    }\n    \n    /* Normalize includes font: inherit;, so font-family. font-size, etc are */\n    /* properly inherited. However, line-height is not inherited there. */\n    line-height: inherit;\n   \n    &.disabled {\n      cursor: ' + props.theme['$cursor-disabled'] + ';\n    }\n   \n    &[type="date"],\n    &[type="time"],\n    &[type="datetime-local"],\n    &[type="month"] {\n    /* Remove the default appearance of temporal inputs to avoid a Mobile Safari\n       bug where setting a custom line-height prevents text from being vertically\n       centered within the input.\n       Bug report: https://github.com/twbs/bootstrap/issues/11266\n     */\n      -webkit-appearance: listbox;\n    }\n      \n    /* Correct the cursor style of increment and decrement buttons in Chrome. */\n    &[type="number"]::-webkit-inner-spin-button,\n    &[type="number"]::-webkit-outer-spin-button {\n      height: auto;\n    }\n    \n    &[type="search"] {\n      /* This overrides the extra rounded corners on search inputs in iOS so that our\n      .form-control class can properly style them. Note that this cannot simply\n       be added to .form-control as it is not specific enough. For details, see\n       https://github.com/twbs/bootstrap/issues/11586.\n       */\n      outline-offset: -2px; /* 2. Correct the outline style in Safari. */\n      -webkit-appearance: none;\n    }\n    \n    /* Remove the inner padding and cancel buttons in Chrome and Safari on macOS. */\n    &[type="search"]::-webkit-search-cancel-button,\n    &[type="search"]::-webkit-search-decoration {\n      -webkit-appearance: none;\n    }\n    \n    ' + buttons_5(props.theme['$enable-shadows'], props.theme['$enable-hover-media-query'], props.theme['$enable-transitions'], props.theme['$enable-rounded'], props.theme['$font-weight-normal'], props.theme['$btn-font-weight'], props.theme['$btn-line-height'], props.theme['$btn-transition'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-padding-y'], props.theme['$font-size-base'], props.theme['$btn-border-radius'], props.theme['$btn-box-shadow'], props.theme['$btn-focus-box-shadow'], props.theme['$btn-active-box-shadow'], props.theme['$cursor-disabled'], props.theme['$link-color'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$btn-link-disabled-color'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm'], props.theme['$btn-block-spacing-y'], props.theme['$btn-primary-color'], props.theme['$btn-primary-bg'], props.theme['$btn-primary-border'], props.theme['$btn-secondary-color'], props.theme['$btn-secondary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-color'], props.theme['$btn-info-bg'], props.theme['$btn-info-border'], props.theme['$btn-success-color'], props.theme['$btn-success-bg'], props.theme['$btn-success-border'], props.theme['$btn-warning-color'], props.theme['$btn-warning-bg'], props.theme['$btn-warning-border'], props.theme['$btn-danger-color'], props.theme['$btn-danger-bg'], props.theme['$btn-danger-border']) + '\n ';
});
Input.defaultProps = defaultProps$36$1;
Input.propTypes = propTypes$40;

var forms$1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.formControl = formControl;
exports.formControlValidation = formControlValidation;
exports.formControlFocus = formControlFocus;
exports.inputSize = inputSize;
var _color2 = _interopRequireDefault(color);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultProps = exports.defaultProps = {
  '$enable-rounded': true,
  '$enable-transitions': true,
  '$enable-shadows': false,
  '$input-height': '2.5rem',
  '$input-padding-y': '.5rem',
  '$input-padding-x': '.75rem',
  '$font-size-base': '1rem',
  '$input-line-height': '1.25',
  '$input-color': '#464a4c',
  '$input-bg': '#fff',
  '$input-border-radius': '.25rem',
  '$input-btn-border-width': '1px',
  '$input-border-color': 'rgba(0, 0, 0, 0.15)',
  '$input-transition': 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
  '$input-box-shadow': 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
  '$input-color-focus': '#464a4c',
  '$input-bg-focus': '#fff',
  '$input-border-focus': 'hsl(207.79999999999995, 98.2%, 53.4%)',
  '$input-box-shadow-focus': 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(hsl(207.79999999999995, 98.2%, 53.4%),.6)',
  '$input-color-placeholder': '#636c72',
  '$input-bg-disabled': '#eceeef',
  '$cursor-disabled': 'not-allowed'
};
function formControl() {
  var $enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var $enableTransitions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$enable-transitions'];
  var $enableShadows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$enable-shadows'];
  var $inputHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$input-height'];
  var $inputPaddingY = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$input-padding-y'];
  var $inputPaddingX = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$input-padding-x'];
  var $fontSizeBase = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$font-size-base'];
  var $inputLineHeight = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$input-line-height'];
  var $inputColor = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$input-color'];
  var $inputBg = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$input-bg'];
  var $inputBorderRadius = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$input-border-radius'];
  var $inputBtnBorderWidth = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps['$input-btn-border-width'];
  var $inputBorderColor = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps['$input-border-color'];
  var $inputTransition = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps['$input-transition'];
  var $inputBoxShadow = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps['$input-box-shadow'];
  var $inputColorFocus = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps['$input-color-focus'];
  var $inputBgFocus = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps['$input-bg-focus'];
  var $inputBorderFocus = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps['$input-border-focus'];
  var $inputBoxShadowFocus = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps['$input-box-shadow-focus'];
  var $inputColorPlaceholder = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps['$input-color-placeholder'];
  var $inputBgDisabled = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps['$input-bg-disabled'];
  var $cursorDisabled = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps['$cursor-disabled'];
  return '\n      & .form-control {\n        display: block;\n        width: 100%;\n  \n        /* Make inputs at least the height of their button counterpart (base line-height + padding + border) */\n        /* height: ' + $inputHeight + '; */\n  \n        padding: ' + $inputPaddingY + ' ' + $inputPaddingX + ';\n        font-size: ' + $fontSizeBase + ';\n        line-height: ' + $inputLineHeight + ';\n        color: ' + $inputColor + ';\n        background-color: ' + $inputBg + ';\n  \n        /* Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214. */\n        background-image: none;\n        background-clip: padding-box;\n        /* Note: This has no effect on selects in some browsers, due to the limited stylability of selects in CSS. */\n        ' + ($enableRounded ? 'border-radius: ' + $inputBorderRadius + ';' : 'border-radius: 0;') + ' /* Manually use the if/else instead of the mixin to account for iOS override */\n        border: ' + $inputBtnBorderWidth + ' solid ' + $inputBorderColor + ';\n        ' + (_transition.transition)($enableTransitions, $inputTransition) + '\n        ' + (_boxShadow.boxShadow)($enableShadows, $inputBoxShadow) + '\n  \n        /* Unstyle the caret on selects in IE10+. */\n        &::-ms-expand {\n          background-color: transparent;\n          border: 0;\n        }\n  \n        /* Customize the :focus state to imitate native WebKit styles. */\n        ' + formControlFocus($enableShadows, $inputColorFocus, $inputBgFocus, $inputBorderFocus, $inputBoxShadowFocus) + '\n  \n        /* Placeholder */\n        &::placeholder {\n          color: ' + $inputColorPlaceholder + ';\n          /* Override Firefox unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526. */\n          opacity: 1;\n        }\n  \n        /* Disabled and read-only inputs\n         HTML5 says that controls under a fieldset > legend:first-child will not be\n         disabled if the fieldset is disabled. Due to implementation difficulty, we\n         do not honor that edge case; we style them as disabled anyway.\n         */\n  \n        &:disabled,\n        &[readonly] {\n          background-color:' + $inputBgDisabled + ';\n          /* iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655. */\n          opacity: 1;\n        }\n  \n        &:disabled {\n          cursor: ' + $cursorDisabled + ';\n        }\n      }\n  ';
}
function formControlValidation() {
  var enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-shadows'];
  var formColor = arguments[1];
  var inputBoxShadow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$input-box-shadow'];
  return '\n    /* Color the label and help text */\n    & .form-control-feedback,\n    & .form-control-label,\n    & .col-form-label,\n    & .form-check-label,\n    & .custom-control {\n      color: ' + formColor + ';\n    }\n  \n    /* Set the border and box shadow on specific inputs to match */\n      \n    & .form-control,\n    & .custom-select,\n    & .custom-file-control {\n      border-color: ' + formColor + ';\n  \n      &:focus {\n        ' + (_boxShadow.boxShadow)(enableShadows, inputBoxShadow + ', 0 0 6px ' + (_color2.default)(formColor).lighten(0.2).toString()) + '\n      }\n    }\n  \n    /* Set validation states also for addons */\n    .input-group-addon {\n      color: ' + formColor + ';\n      border-color: ' + formColor + ';\n      background-color: ' + (_color2.default)(formColor).lighten(0.40).toString() + ';\n    }\n  ';
}
function formControlFocus() {
  var enableShadows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-shadows'];
  var inputColorFocus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$input-color-focus'];
  var inputBgFocus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$input-bg-focus'];
  var inputBorderFocus = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$input-border-focus'];
  var inputBoxShadowFocus = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$input-box-shadow-focus'];
  return '\n    &:focus {\n      color: ' + inputColorFocus + ';\n      background-color: ' + inputBgFocus + ';\n      border-color: ' + inputBorderFocus + ';\n      outline: none;\n      ' + (_boxShadow.boxShadow)(enableShadows, inputBoxShadowFocus) + '\n    }\n  ';
}
function inputSize() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var parent = arguments[1];
  var inputHeight = arguments[2];
  var paddingY = arguments[3];
  var paddingX = arguments[4];
  var fontSize = arguments[5];
  var lineHeight = arguments[6];
  var inputBorderRadius = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$input-border-radius'];
  return '\n    ' + parent + ' {\n      height: ' + inputHeight + ';\n      padding: ' + paddingY + ' ' + paddingX + ';\n      font-size: ' + fontSize + ';\n      line-height: ' + lineHeight + ';\n      ' + (_borderRadius.borderRadius)(enableRounded, inputBorderRadius) + '\n    }\n  \n    select' + parent + ' {\n      height: ' + inputHeight + ';\n      line-height: ' + inputHeight + ';\n    }\n  \n    textarea' + parent + ',\n      select[multiple]' + parent + ' {\n      height: auto;\n    }\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  formControl: formControl,
  formControlValidation: formControlValidation,
  formControlFocus: formControlFocus,
  inputSize: inputSize
};
});
unwrapExports(forms$1);
var forms_2 = forms$1.formControl;
var forms_3 = forms$1.formControlValidation;

var defaultProps$37 = {
  tag: 'div',
  theme: {
    '$enable-rounded': true,
    '$enable-shadows': false,
    '$enable-hover-media-query': false,
    '$enable-transitions': true,
    '$font-size-base': '1rem',
    '$font-size-lg': '1.25rem',
    '$font-size-sm': '.875rem',
    '$font-size-xs': '.75rem',
    '$line-height-base': '1.5',
    '$border-radius': '.25rem',
    '$border-radius-lg': '.3rem',
    '$border-radius-sm': '.2rem',
    '$input-padding-x': '.75rem',
    '$input-padding-y': '.5rem',
    '$input-bg': '#fff',
    '$input-bg-disabled': '#eceeef',
    '$input-padding-x-lg': '1.5rem',
    '$input-padding-y-lg': '.75rem',
    '$input-line-height': '1.25',
    '$input-height': '2.5rem',
    '$input-box-shadow': 'inset 0 1px 1px rgba(0, 0, 0, 0.075)',
    '$input-btn-border-width': '1px',
    '$input-group-addon-bg': '#eceeef',
    '$input-border-color': 'rgba(0, 0, 0, 0.15)',
    '$input-border-focus': 'hsl(207.79999999999995, 98.2%, 53.4%)',
    '$input-box-shadow-focus': 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(hsl(207.79999999999995, 98.2%, 53.4%),.6)',
    '$input-color': '#464a4c',
    '$input-group-addon-border-color': 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
    '$input-padding-x-sm': '.5rem',
    '$input-padding-y-sm': '.25rem',
    '$input-color-placeholder': '#636c72',
    '$input-border-radius-lg': '.3rem',
    '$input-border-radius-sm': '.2rem',
    '$input-border-radius': '.25rem',
    '$input-transition': 'border-color ease-in-out .15s, box-shadow ease-in-out .15s',
    '$input-color-focus': '#464a4c',
    '$input-bg-focus': '#fff',
    '$cursor-disabled': 'not-allowed'
  }
};
var propTypes$41 = {
  className: propTypes$1.string,
  size: propTypes$1.oneOf(['sm', 'lg']),
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  theme: propTypes$1.shape({
    '$enable-rounded': propTypes$1.bool,
    '$enable-shadows': propTypes$1.bool,
    '$enable-hover-media-query': propTypes$1.bool,
    '$enable-transitions': propTypes$1.bool,
    '$font-size-base': propTypes$1.string,
    '$font-size-lg': propTypes$1.string,
    '$font-size-sm': propTypes$1.string,
    '$font-size-xs': propTypes$1.string,
    '$line-height-base': propTypes$1.string,
    '$border-radius': propTypes$1.string,
    '$border-radius-lg': propTypes$1.string,
    '$border-radius-sm': propTypes$1.string,
    '$input-padding-x': propTypes$1.string,
    '$input-padding-y': propTypes$1.string,
    '$input-bg': propTypes$1.string,
    '$input-bg-disabled': propTypes$1.string,
    '$input-padding-x-lg': propTypes$1.string,
    '$input-padding-y-lg': propTypes$1.string,
    '$input-line-height': propTypes$1.string,
    '$input-height': propTypes$1.string,
    '$input-box-shadow': propTypes$1.string,
    '$input-btn-border-width': propTypes$1.string,
    '$input-group-addon-bg': propTypes$1.string,
    '$input-border-color': propTypes$1.string,
    '$input-border-focus': propTypes$1.string,
    '$input-box-shadow-focus': propTypes$1.string,
    '$input-color': propTypes$1.string,
    '$input-group-addon-border-color': propTypes$1.string,
    '$input-padding-x-sm': propTypes$1.string,
    '$input-padding-y-sm': propTypes$1.string,
    '$input-color-placeholder': propTypes$1.string,
    '$input-border-radius-lg': propTypes$1.string,
    '$input-border-radius-sm': propTypes$1.string,
    '$input-border-radius': propTypes$1.string,
    '$input-transition': propTypes$1.string,
    '$input-color-focus': propTypes$1.string,
    '$input-bg-focus': propTypes$1.string,
    '$cursor-disabled': propTypes$1.string
  }),
  cssModule: propTypes$1.object
};
var InputGroupUnstyled = function (_React$Component) {
  inherits(InputGroupUnstyled, _React$Component);
  function InputGroupUnstyled() {
    classCallCheck(this, InputGroupUnstyled);
    return possibleConstructorReturn(this, (InputGroupUnstyled.__proto__ || Object.getPrototypeOf(InputGroupUnstyled)).apply(this, arguments));
  }
  createClass(InputGroupUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          size = _omit.size,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'tag', 'size']);
      var classes = mapToCssModules(classnames(className, 'input-group', size ? 'input-group-' + size : null), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return InputGroupUnstyled;
}(React.Component);
InputGroupUnstyled.defaultProps = defaultProps$37;
InputGroupUnstyled.propTypes = propTypes$41;
var InputGroup = styled(InputGroupUnstyled).withConfig({
  displayName: 'InputGroup'
})(['', ''], function (props) {
  return '\n    /*\n     Base styles\n    */\n   \n    &.input-group {\n      position: relative;\n      display: flex;\n      width: 100%;\n\n      .form-control {\n        /* \n          Ensure that the input is always above the *appended* addon button for\n          proper border colors.\n        */\n        \n        position: relative;\n        z-index: 2;\n        flex: 1 1 auto;\n        /* Add width 1% and flex-basis auto to ensure that button will not wrap out */\n        /* the column. Applies to IE Edge+ and Firefox. Chrome does not require this. */\n        width: 1%;\n        margin-bottom: 0;\n        \n        ' + hover_5(props.theme['$enable-hover-media-query'], 'z-index: 3;') + '\n      }\n    }\n    \n    & .input-group-addon,\n    & .input-group-btn,\n    &.input-group .form-control {\n      /* Vertically centers the content of the addons within the input group */\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n\n\n      &:not(:first-child):not(:last-child) {\n        ' + borderRadius_2(props.theme['$enable-rounded'], '0') + '\n      }\n    }\n   \n    & .input-group-addon,\n    & .input-group-btn {\n\n      white-space: nowrap;\n      vertical-align: middle; /* Match the inputs */\n    }\n   \n   \n    /* Sizing options\n    Remix the default form control sizing classes into new ones for easier\n    manipulation.\n    */\n   \n    &.input-group-lg > .form-control,\n    &.input-group-lg > .input-group-addon,\n    &.input-group-lg > .input-group-btn > .btn {\n      padding: ' + props.theme['$input-padding-y-lg'] + ' ' + props.theme['$input-padding-x-lg'] + ';\n      font-size: ' + props.theme['$font-size-lg'] + ';\n      ' + borderRadius_2(props.theme['$enable-rounded'], props.theme['$input-border-radius-lg']) + '\n    }\n    \n    &.input-group-sm > .form-control,\n    &.input-group-sm > .input-group-addon,\n    &.input-group-sm > .input-group-btn > .btn {\n      padding: ' + props.theme['$input-padding-y-sm'] + ' ' + props.theme['$input-padding-x-sm'] + ';\n      font-size: ' + props.theme['$font-size-sm'] + ';\n      ' + borderRadius_2(props.theme['$enable-rounded'], props.theme['$input-border-radius-sm']) + '\n    }\n   \n   \n    /*\n    Text input groups\n    */\n   \n    & .input-group-addon {\n      padding: ' + props.theme['$input-padding-y'] + ' ' + props.theme['$input-padding-x'] + ';\n      margin-bottom: 0; /* Allow use of <label> elements by overriding our default margin-bottom */\n      font-size: ' + props.theme['$font-size-base'] + ';\n      font-weight: normal;\n      line-height: ' + props.theme['$input-line-height'] + ';\n      color: ' + props.theme['$input-color'] + ';\n      text-align: center;\n      background-color: ' + props.theme['$input-group-addon-bg'] + ';\n      border: ' + props.theme['$input-btn-border-width'] + ' solid ' + props.theme['$input-group-addon-border-color'] + ';\n      ' + borderRadius_2(props.theme['$enable-rounded'], props.theme['$input-border-radius']) + '\n   \n      /* \n      Nuke default margins from checkboxes and radios to vertically center within.\n      */\n      input[type="radio"],\n      input[type="checkbox"] {\n        margin-top: 0;\n      }\n    }\n   \n   \n    /*\n     Reset rounded corners\n    */\n   \n    &.input-group .form-control:not(:last-child),\n    & .input-group-addon:not(:last-child),\n    & .input-group-btn:not(:last-child) > .btn,\n    & .input-group-btn:not(:last-child) > .btn-group > .btn,\n    & .input-group-btn:not(:last-child) > .dropdown-toggle,\n    & .input-group-btn:not(:first-child) > .btn:not(:last-child):not(.dropdown-toggle),\n    & .input-group-btn:not(:first-child) > .btn-group:not(:last-child) > .btn {\n      ' + borderRadius_4(props.theme['$enable-rounded'], '0') + '\n    }\n    & .input-group-addon:not(:last-child) {\n      border-right: 0;\n    }\n    &.input-group .form-control:not(:first-child),\n    & .input-group-addon:not(:first-child),\n    & .input-group-btn:not(:first-child) > .btn,\n    & .input-group-btn:not(:first-child) > .btn-group > .btn,\n    & .input-group-btn:not(:first-child) > .dropdown-toggle,\n    & .input-group-btn:not(:last-child) > .btn:not(:first-child),\n    & .input-group-btn:not(:last-child) > .btn-group:not(:first-child) > .btn {\n      ' + borderRadius_6(props.theme['$enable-rounded'], '0') + '\n    }\n    & .form-control + .input-group-addon:not(:first-child) {\n      border-left: 0;\n    }\n   \n    /*\n     Button input groups\n    */\n   \n    & .input-group-btn {\n      position: relative;\n      /* Jankily prevent input button groups from wrapping with white-space and\n      font-size in combination with inline-block on buttons.\n      */\n      font-size: 0;\n      white-space: nowrap;\n   \n      /* Negative margin for spacing, position for bringing hovered/focused/actived\n      element above the siblings.\n      */\n      > .btn {\n        position: relative;\n        /* Vertically stretch the button and center its content */\n        flex: 1;\n        \n        + .btn {\n          margin-left: -' + props.theme['$input-btn-border-width'] + ';\n        }\n        \n        /* Bring the active button to the front */\n        ' + hover_5(props.theme['$enable-hover-media-query'], 'z-index: 3;') + '\n      }\n   \n      /* Negative margin to only have a single, shared border between the two */\n      &:not(:last-child) {\n        > .btn,\n        > .btn-group {\n          margin-right: -' + props.theme['$input-btn-border-width'] + ';\n        }\n      }\n      &:not(:first-child) {\n        > .btn,\n        > .btn-group {\n          z-index: 2;\n          margin-left: -' + props.theme['$input-btn-border-width'] + ';\n          /* Because specificity */\n          ' + hover_5(props.theme['$enable-hover-media-query'], 'z-index: 3;') + '\n        }\n      }\n    }\n    \n   /* Added So that Inputs in InputGroup grab the same .form-control class as in Component Form Not Bs4 */\n   ' + forms_2(props.theme['$enable-rounded'], props.theme['$enable-transitions'], props.theme['$enable-shadows'], props.theme['$input-height'], props.theme['$input-padding-y'], props.theme['$input-padding-x'], props.theme['$font-size-base'], props.theme['$input-line-height'], props.theme['$input-color'], props.theme['$input-bg'], props.theme['$input-border-radius'], props.theme['$input-btn-border-width'], props.theme['$input-border-color'], props.theme['$input-transition'], props.theme['$input-box-shadow'], props.theme['$input-color-focus'], props.theme['$input-bg-focus'], props.theme['$input-border-focus'], props.theme['$input-box-shadow-focus'], props.theme['$input-color-placeholder'], props.theme['$input-bg-disabled'], props.theme['$cursor-disabled']) + '\n  ';
});
InputGroup.defaultProps = defaultProps$37;
InputGroup.propTypes = propTypes$41;

var defaultProps$38 = {
  tag: 'div'
};
var propTypes$42 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  cssModule: propTypes$1.object
};
var InputGroupAddon = function (_React$Component) {
  inherits(InputGroupAddon, _React$Component);
  function InputGroupAddon() {
    classCallCheck(this, InputGroupAddon);
    return possibleConstructorReturn(this, (InputGroupAddon.__proto__ || Object.getPrototypeOf(InputGroupAddon)).apply(this, arguments));
  }
  createClass(InputGroupAddon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'tag']);
      var classes = mapToCssModules(classnames(className, 'input-group-addon'), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return InputGroupAddon;
}(React.Component);
InputGroupAddon.defaultProps = defaultProps$38;
InputGroupAddon.propTypes = propTypes$42;
InputGroupAddon.defaultProps = defaultProps$38;
InputGroupAddon.propTypes = propTypes$42;

var defaultProps$39 = {
  tag: 'div'
};
var propTypes$43 = {
  className: propTypes$1.string,
  children: propTypes$1.node,
  groupClassName: propTypes$1.string,
  groupAttributes: propTypes$1.object,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  cssModule: propTypes$1.object
};
var InputGroupButton = function (_React$Component) {
  inherits(InputGroupButton, _React$Component);
  function InputGroupButton() {
    classCallCheck(this, InputGroupButton);
    return possibleConstructorReturn(this, (InputGroupButton.__proto__ || Object.getPrototypeOf(InputGroupButton)).apply(this, arguments));
  }
  createClass(InputGroupButton, [{
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
        var groupClasses = mapToCssModules(classnames(groupClassName, 'input-group-btn'), cssModule);
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
      var classes = mapToCssModules(classnames(className, 'input-group-btn'), cssModule);
      return React.createElement(
        Tag,
        _extends({}, attributes, { className: classes }),
        children
      );
    }
  }]);
  return InputGroupButton;
}(React.Component);
InputGroupButton.defaultProps = defaultProps$39;
InputGroupButton.propTypes = propTypes$43;
InputGroupButton.defaultProps = defaultProps$39;
InputGroupButton.propTypes = propTypes$43;

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
  className: propTypes$1.string
};

var defaultProps$40 = {
  theme: {
    '$enable-rounded': true,
    '$enable-shadows': false,
    '$font-family-monospace': 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    '$font-weight-bold': 'bold',
    '$border-radius-sm': '.2rem',
    '$code-font-size': '90%',
    '$code-padding-x': '.4rem',
    '$code-padding-y': '.2rem',
    '$kbd-color': '#fff',
    '$kbd-bg': '#292b2c',
    '$kbd-box-shadow': 'inset 0 -.1rem 0 rgba(0, 0, 0, 0.25)',
    '$nested-kbd-font-weight': 'bold'
  }
};
var propTypes$44 = {
  className: propTypes$1.string,
  children: propTypes$1.node.isRequired,
  theme: propTypes$1.shape({
    '$enable-rounded': propTypes$1.bool,
    '$enable-shadows': propTypes$1.bool,
    '$font-family-monospace': propTypes$1.string,
    '$font-weight-bold': propTypes$1.string,
    '$border-radius-sm': propTypes$1.string,
    '$code-font-size': propTypes$1.string,
    '$code-padding-x': propTypes$1.string,
    '$code-padding-y': propTypes$1.string,
    '$kbd-color': propTypes$1.string,
    '$kbd-bg': propTypes$1.string,
    '$kbd-box-shadow': propTypes$1.string,
    '$nested-kbd-font-weight': propTypes$1.string
  })
};
var KbdUnstyled = function (_React$Component) {
  inherits(KbdUnstyled, _React$Component);
  function KbdUnstyled() {
    classCallCheck(this, KbdUnstyled);
    return possibleConstructorReturn(this, (KbdUnstyled.__proto__ || Object.getPrototypeOf(KbdUnstyled)).apply(this, arguments));
  }
  createClass(KbdUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
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
KbdUnstyled.defaultProps = defaultProps$40;
KbdUnstyled.propTypes = propTypes$44;
var Kbd = styled(KbdUnstyled).withConfig({
  displayName: 'Kbd'
})(['', ''], function (props) {
  return '\n    /* User input typically entered via keyboard */\n    padding: ' + props.theme['$code-padding-y'] + ' ' + props.theme['$code-padding-x'] + ';\n    font-size: ' + props.theme['$code-font-size'] + ';\n    color: ' + props.theme['$kbd-color'] + ';\n    background-color: ' + props.theme['$kbd-bg'] + ';\n    ' + borderRadius_2(props.theme['$enable-rounded'], props.theme['$border-radius-sm']) + '\n    ' + boxShadow_2(props.theme['$enable-shadows'], props.theme['$kbd-box-shadow']) + '\n    \n    & kbd {\n      padding: 0;\n      font-size: 100%;\n      font-weight: ' + props.theme['$nested-kbd-font-weight'] + ';\n      ' + boxShadow_2(props.theme['$enable-shadows'], 'none') + '\n    }\n    \n    /* Bootstrap 4 does not place this css rule straight into Kbd tag see: bootstrap/scss/code.scss */\n    font-family: ' + props.theme['$font-family-monospace'] + ';\n  ';
});
Kbd.defaultProps = defaultProps$40;
Kbd.propTypes = propTypes$44;

var defaultProps$41 = {
  tag: 'div',
  theme: {
    '$enable-rounded': true,
    '$grid-breakpoints': {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    '$border-radius-lg': '.3rem',
    '$jumbotron-padding': '2rem',
    '$jumbotron-bg': '#eceeef'
  }
};
var propTypes$45 = {
  className: propTypes$1.string,
  fluid: propTypes$1.bool,
  theme: propTypes$1.shape({
    '$enable-rounded': propTypes$1.bool,
    '$grid-breakpoints': propTypes$1.object,
    '$border-radius-lg': propTypes$1.string,
    '$jumbotron-padding': propTypes$1.string,
    '$jumbotron-bg': propTypes$1.string
  }),
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  cssModule: propTypes$1.object
};
var JumbotronUnstyled = function (_React$Component) {
  inherits(JumbotronUnstyled, _React$Component);
  function JumbotronUnstyled() {
    classCallCheck(this, JumbotronUnstyled);
    return possibleConstructorReturn(this, (JumbotronUnstyled.__proto__ || Object.getPrototypeOf(JumbotronUnstyled)).apply(this, arguments));
  }
  createClass(JumbotronUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          fluid = _omit.fluid,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'tag', 'fluid']);
      var classes = mapToCssModules(classnames(className, 'jumbotron', fluid ? 'jumbotron-fluid' : false), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return JumbotronUnstyled;
}(React.Component);
JumbotronUnstyled.defaultProps = defaultProps$41;
JumbotronUnstyled.propTypes = propTypes$45;
var Jumbotron = styled(JumbotronUnstyled).withConfig({
  displayName: 'Jumbotron'
})(['', ''], function (props) {
  return '\n    &.jumbotron {\n      padding: ' + props.theme['$jumbotron-padding'] + ' calc(' + props.theme['$jumbotron-padding'] + ' / 2);\n      margin-bottom: ' + props.theme['$jumbotron-padding'] + ';\n      background-color: ' + props.theme['$jumbotron-bg'] + ';\n      ' + borderRadius_2(props.theme['$enable-rounded'], props.theme['$border-radius-lg']) + '\n    \n      ' + breakpoints_6('sm', props.theme['$grid-breakpoints'], 'padding: calc(' + props.theme['$jumbotron-padding'] + ' * 2) ' + props.theme['$jumbotron-padding'] + ';') + '  \n    }\n\n    & .jumbotron-hr {\n      border-top-color: ' + color(props.theme['$jumbotron-bg']).darken(0.1).toString() + ';\n    }\n    \n    &.jumbotron-fluid {\n      padding-right: 0;\n      padding-left: 0;\n      ' + borderRadius_2(props.theme['$enable-rounded'], '0') + '\n    }\n  ';
});
Jumbotron.defaultProps = defaultProps$41;
Jumbotron.propTypes = propTypes$45;

var colSizes = ['xs', 'sm', 'md', 'lg', 'xl'];
var stringOrNumberProp$1 = propTypes$1.oneOfType([propTypes$1.number, propTypes$1.string]);
var columnProps$1 = propTypes$1.oneOfType([propTypes$1.string, propTypes$1.number, propTypes$1.shape({
  size: stringOrNumberProp$1,
  push: stringOrNumberProp$1,
  pull: stringOrNumberProp$1,
  offset: stringOrNumberProp$1
})]);
var propTypes$46 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string]),
  theme: propTypes$1.shape({}),
  check: propTypes$1.bool,
  children: propTypes$1.node,
  disabled: propTypes$1.bool,
  for: propTypes$1.string,
  hidden: propTypes$1.bool,
  inline: propTypes$1.bool,
  size: propTypes$1.string,
  xs: columnProps$1,
  sm: columnProps$1,
  md: columnProps$1,
  lg: columnProps$1,
  xl: columnProps$1,
  cssModule: propTypes$1.object
};
var defaultProps$42 = {
  tag: 'label',
  theme: {
    '$enable-rounded': true,
    '$enable-shadows': false,
    '$enable-hover-media-query': false,
    '$enable-transitions': true,
    '$brand-primary': '#0275d8',
    '$brand-success': '#5cb85c',
    '$brand-info': '#5bc0de',
    '$brand-warning': '#f0ad4e',
    '$brand-danger': '#d9534f',
    '$border-width': '1px',
    '$font-size-base': '1rem',
    '$font-size-lg': '1.25rem',
    '$font-size-sm': '.875rem',
    '$font-size-xs': '.75rem',
    '$font-weight-normal': 'normal',
    '$border-radius': '.25rem',
    '$border-radius-lg': '.3rem',
    '$border-radius-sm': '.2rem',
    '$link-color': '#0275d8',
    '$link-hover-color': 'hsl(207.79999999999995, 98.2%, 27.8%)',
    '$link-hover-decoration': 'underline',
    '$input-btn-border-width': '1px',
    '$cursor-disabled': 'not-allowed',
    '$btn-padding-x': '1rem',
    '$btn-padding-y': '.5rem',
    '$btn-padding-x-lg': '1.5rem',
    '$btn-padding-y-lg': '.75rem',
    '$btn-padding-x-sm': '.5rem',
    '$btn-padding-y-sm': '.25rem',
    '$btn-line-height': '1.25',
    '$btn-primary-color': '#fff',
    '$btn-primary-bg': '#0275d8',
    '$btn-primary-border': '#0275d8',
    '$btn-secondary-color': '#292b2c',
    '$btn-secondary-bg': '#fff',
    '$btn-secondary-border': '#ccc',
    '$btn-info-color': '#fff',
    '$btn-info-bg': '#5bc0de',
    '$btn-info-border': '#5bc0de',
    '$btn-success-color': '#fff',
    '$btn-success-bg': '#5cb85c',
    '$btn-success-border': '#5cb85c',
    '$btn-warning-color': '#fff',
    '$btn-warning-bg': '#f0ad4e',
    '$btn-warning-border': '#f0ad4e',
    '$btn-danger-color': '#fff',
    '$btn-danger-bg': '#d9534f',
    '$btn-danger-border': '#d9534f',
    '$btn-font-weight': 'normal',
    '$btn-transition': 'all .2s ease-in-out',
    '$btn-border-radius-lg': '.3rem',
    '$btn-border-radius-sm': '.2rem',
    '$btn-border-radius': '.25rem',
    '$btn-box-shadow': 'inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075)',
    '$btn-focus-box-shadow': '0 0 0 2px rgba(2, 117, 216, 0.25)',
    '$btn-active-box-shadow': 'inset 0 3px 5px rgba(0, 0, 0, 0.125)',
    '$btn-link-disabled-color': '#636c72',
    '$btn-block-spacing-y': '.5rem'
  }
};
var LabelUnstyled = function LabelUnstyled(props) {
  var _omit = lodash_omit(props, ['theme']),
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
      colClasses.push(mapToCssModules(classnames((_cn = {}, babelHelpers.defineProperty(_cn, 'col-' + colSize + '-' + columnProp.size, columnProp.size), babelHelpers.defineProperty(_cn, 'push-' + colSize + '-' + columnProp.push, columnProp.push), babelHelpers.defineProperty(_cn, 'pull-' + colSize + '-' + columnProp.pull, columnProp.pull), babelHelpers.defineProperty(_cn, 'offset-' + colSize + '-' + columnProp.offset, columnProp.offset), _cn))), cssModule);
    } else if (columnProp) {
      colClasses.push('col-' + colSize + '-' + columnProp);
    }
  });
  var classes = mapToCssModules(classnames(className, hidden ? 'sr-only' : false, check ? 'form-check-' + (inline ? 'inline' : 'label') : false, check && inline && disabled ? 'disabled' : false, size ? 'col-form-label-' + size : false, colClasses, colClasses.length ? 'col-form-label' : false), cssModule);
  return React.createElement(Tag, _extends({ htmlFor: htmlFor }, attributes, { className: classes }));
};
var Label = styled(LabelUnstyled).withConfig({
  displayName: 'Label'
})(['', ''], function (props) {
  return '\n    /* Reboot Scss */\n    touch-action: manipulation;\n    /* Allow labels to use margin for spacing. */\n    display: inline-block;\n    margin-bottom: ' + props.theme['$label-margin-bottom'] + ';\n\n    ' + buttons_5(props.theme['$enable-shadows'], props.theme['$enable-hover-media-query'], props.theme['$enable-transitions'], props.theme['$enable-rounded'], props.theme['$font-weight-normal'], props.theme['$btn-font-weight'], props.theme['$btn-line-height'], props.theme['$btn-transition'], props.theme['$input-btn-border-width'], props.theme['$btn-padding-x'], props.theme['$btn-padding-y'], props.theme['$font-size-base'], props.theme['$btn-border-radius'], props.theme['$btn-box-shadow'], props.theme['$btn-focus-box-shadow'], props.theme['$btn-active-box-shadow'], props.theme['$cursor-disabled'], props.theme['$link-color'], props.theme['$link-hover-color'], props.theme['$link-hover-decoration'], props.theme['$btn-link-disabled-color'], props.theme['$btn-padding-x-lg'], props.theme['$btn-padding-y-lg'], props.theme['$font-size-lg'], props.theme['$btn-border-radius-lg'], props.theme['$btn-padding-x-sm'], props.theme['$btn-padding-y-sm'], props.theme['$font-size-sm'], props.theme['$btn-border-radius-sm'], props.theme['$btn-block-spacing-y'], props.theme['$btn-primary-color'], props.theme['$btn-primary-bg'], props.theme['$btn-primary-border'], props.theme['$btn-secondary-color'], props.theme['$btn-secondary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-color'], props.theme['$btn-info-bg'], props.theme['$btn-info-border'], props.theme['$btn-success-color'], props.theme['$btn-success-bg'], props.theme['$btn-success-border'], props.theme['$btn-warning-color'], props.theme['$btn-warning-bg'], props.theme['$btn-warning-border'], props.theme['$btn-danger-color'], props.theme['$btn-danger-bg'], props.theme['$btn-danger-border']) + '\n ';
});
Label.propTypes = propTypes$46;
Label.defaultProps = defaultProps$42;

var Legend = styled.legend.withConfig({
  displayName: 'Legend'
})(['display:block;width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;']);

var media_1 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.media = media;
function media() {
  return "\n   &.media {\n    display: flex;\n    align-items: flex-start;\n  }\n  \n  & .media-body {\n    flex: 1;\n  }\n  ";
}
exports.default = {
  media: media
};
});
unwrapExports(media_1);
var media_2 = media_1.media;

var defaultProps$43 = {
  theme: {
    '$list-inline-padding': '5px'
  }
};
var propTypes$47 = {
  className: propTypes$1.string,
  children: propTypes$1.node,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element]),
  theme: propTypes$1.shape({
    '$list-inline-padding': propTypes$1.string
  }),
  disabled: propTypes$1.bool,
  separator: propTypes$1.bool,
  active: propTypes$1.bool,
  inline: propTypes$1.bool,
  media: propTypes$1.bool,
  'dropdown-item': propTypes$1.bool,
  'dropdown-header': propTypes$1.bool,
  'dropdown-footer': propTypes$1.bool,
  cssModule: propTypes$1.object
};
var LiUnstyled = function (_React$Component) {
  inherits(LiUnstyled, _React$Component);
  function LiUnstyled() {
    classCallCheck(this, LiUnstyled);
    return possibleConstructorReturn(this, (LiUnstyled.__proto__ || Object.getPrototypeOf(LiUnstyled)).apply(this, arguments));
  }
  createClass(LiUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          children = _omit.children,
          inline = _omit.inline,
          separator = _omit.separator,
          media$$1 = _omit.media,
          dropdownItem = _omit['dropdown-item'],
          dropdownHeader = _omit['dropdown-header'],
          dropdownFooter = _omit['dropdown-footer'],
          attributes = objectWithoutProperties(_omit, ['className', 'children', 'inline', 'separator', 'media', 'dropdown-item', 'dropdown-header', 'dropdown-footer']);
      var classes = mapToCssModules(classnames(className, separator ? 'dropdown-divider' : false, dropdownItem ? 'dropdown-item' : false, dropdownItem ? 'dropdown-item' : false, dropdownHeader ? 'dropdown-header' : false, dropdownFooter ? 'dropdown-footer' : false, inline ? 'list-inline-item' : false, media$$1 ? 'media' : false));
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
LiUnstyled.defaultProps = defaultProps$43;
LiUnstyled.propTypes = propTypes$47;
var Li = styled(LiUnstyled).withConfig({
  displayName: 'Li'
})(['', ''], function (props) {
  return '\n    &.list-inline-item {\n      display: inline-block;\n    \n      &:not(:last-child) {\n        margin-right: ' + props.theme['$list-inline-padding'] + ';\n      }\n    }\n    \n    ' + media_2() + '\n  ';
});
Li.defaultProps = defaultProps$43;
Li.propTypes = propTypes$47;

var listGroup$1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.listGroupItemVariant = listGroupItemVariant;
var _color2 = _interopRequireDefault(color);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultProps = exports.defaultProps = {
  '$enable-hover-media-query': false
};
function listGroupItemVariant() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-media-query'];
  var state = arguments[1];
  var background = arguments[2];
  var listColor = arguments[3];
  return '\n    & .list-group-item-' + state + ' {\n      color: ' + listColor + ';\n      background-color: ' + background + ';\n    }\n  \n    & a.list-group-item-' + state + ',\n    button.list-group-item-' + state + ' {\n      color: ' + listColor + ';\n  \n      .list-group-item-heading {\n        color: inherit;\n      }\n  \n      ' + (_hover.hoverFocus)(enableHoverMediaQuery, '\n        color: ' + listColor + ';\n        background-color: ' + (_color2.default)(background).darken(0.05).toString() + ';\n      ') + '\n  \n      &.active {\n        ' + (_hover.plainHoverFocus)(enableHoverMediaQuery, '\n          color: #fff;\n          background-color: ' + listColor + ';\n          border-color: ' + listColor + ';\n        ') + '\n      }\n    }\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  listGroupItemVariant: listGroupItemVariant
};
});
unwrapExports(listGroup$1);
var listGroup_2 = listGroup$1.listGroupItemVariant;

var nav_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.nav = nav;
var defaultProps = exports.defaultProps = {
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
  var $enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var $enableHoverMediaQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$enable-hover-media-query'];
  var $navLinkPadding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$nav-link-padding'];
  var $navDisabledLinkColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$nav-disabled-link-color'];
  var $cursorDisabled = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$cursor-disabled'];
  var $navTabBorderWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$nav-tabs-border-width'];
  var $navTabsBorderColor = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$nav-tabs-border-color'];
  var $navTabsBorderRadius = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$nav-tabs-border-radius'];
  var $navTabsLinkHoverBorderColor = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$nav-tabs-link-hover-border-color'];
  var $navTabsActiveLinkHoverColor = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$nav-tabs-active-link-hover-color'];
  var $navTabsActiveLinkHoverBg = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$nav-tabs-active-link-hover-bg'];
  var $navTabsActiveLinkHoverBorderColor = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps['$nav-tabs-active-link-hover-border-color'];
  var $navPillsBorderRadius = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps['$nav-pills-border-radius'];
  var $navPillsActiveLinkColor = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps['$nav-pills-active-link-color'];
  var $navPillsActiveLinkBg = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps['$nav-pills-active-link-bg'];
  return '\n    &.nav {\n      display: flex;\n      padding-left: 0;\n      margin-bottom: 0;\n      list-style: none;\n    }\n    \n    & .nav-link {\n      display: block;\n      padding: ' + $navLinkPadding + ';\n      ' + (_hover.hoverFocus)($enableHoverMediaQuery, 'text-decoration: none;') + '\n      /* Disabled state lightens text and removes hover tab effects */\n      &.disabled {\n        color: ' + $navDisabledLinkColor + ';\n        cursor: ' + $cursorDisabled + '; \n      }\n    }\n        \n    /*\n     Tabs\n    */\n    \n    &.nav-tabs {\n      border-bottom: ' + $navTabBorderWidth + ' solid ' + $navTabsBorderColor + ';\n      & .nav-item {\n        margin-bottom: -' + $navTabBorderWidth + ';\n      }\n   \n      & .nav-link {\n        border: ' + $navTabBorderWidth + ' solid transparent;\n        ' + (_borderRadius.borderTopRadius)($enableRounded, $navTabsBorderRadius) + '\n        ' + (_hover.hoverFocus)($enableHoverMediaQuery, '\n          border-color: ' + $navTabsLinkHoverBorderColor + ' ' + $navTabsLinkHoverBorderColor + ' ' + $navTabsBorderColor + ';\n        ') + '\n      \n        &.disabled {\n          color: ' + $navDisabledLinkColor + ';\n          background-color: transparent;\n          border-color: transparent;\n        }\n      }\n      \n      & .nav-link.active,\n      .nav-item.open .nav-link {\n        color: ' + $navTabsActiveLinkHoverColor + ';\n        background-color: ' + $navTabsActiveLinkHoverBg + ';\n        border-color: ' + $navTabsActiveLinkHoverBorderColor + ' ' + $navTabsActiveLinkHoverBorderColor + ' transparent;\n      }\n      \n      & .dropdown-menu {\n        /* Make dropdown border overlap tab border */\n        margin-top: -' + $navTabBorderWidth + ';\n        /* Remove the top rounded corners here since there is a hard edge above the menu */\n        ' + (_borderRadius.borderTopRadius)($enableRounded, '0') + '\n      }\n    }\n    \n    /*\n     Pills\n    */\n    \n    &.nav-pills {\n      .nav-link {\n        ' + (_borderRadius.borderRadius)($enableRounded, $navPillsBorderRadius) + '\n      }\n\n      .nav-link.active,\n      .nav-item.show .nav-link {\n        color: ' + $navPillsActiveLinkColor + ';\n        background-color: ' + $navPillsActiveLinkBg + ';\n      }\n    }\n\n    /*\n      Justified variants\n    */\n    \n    &.nav-fill {\n      .nav-item {\n        flex: 1 1 auto;\n        text-align: center;\n      }\n    }\n    \n    &.nav-justified {\n      .nav-item {\n        flex: 1 1 100%;\n        text-align: center;\n      }\n    }\n    \n    /* Hide tabbable panes to start, show them when .active */\n    &.tab-content {\n      > .tab-pane {\n        display: none;\n      }\n      > .active {\n        display: block;\n      }\n    }\n  ';
}
exports.default = {
  nav: nav
};
});
unwrapExports(nav_1);
var nav_3 = nav_1.nav;

var lists$1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listUnstyled = listUnstyled;
exports.listInline = listInline;
exports.listInlineItem = listInlineItem;
var defaultProps = exports.defaultProps = {
  '$list-inline-padding': '5px'
};
function listUnstyled() {
  return '\n    padding-left: 0;\n    list-style: none;\n  ';
}
function listInline() {
  return listUnstyled();
}
function listInlineItem() {
  var listInlinePadding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$list-inline-padding'];
  return '\n    display: inline-block;\n  \n    &:not(:last-child) {\n      margin-right: ' + listInlinePadding + ';\n    }\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  listInline: listInline,
  listUnstyled: listUnstyled
};
});
unwrapExports(lists$1);
var lists_1 = lists$1.listUnstyled;
var lists_2 = lists$1.listInline;
var lists_3 = lists$1.listInlineItem;

var defaultProps$45 = {
  tag: 'nav',
  role: 'navigation',
  toggleable: 'false',
  theme: {
    '$grid-breakpoints': {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    '$enable-rounded': true,
    '$enable-hover-media-query': false,
    '$border-width': '1px',
    '$font-size-lg': '1.25rem',
    '$body-bg': '#fff',
    '$component-active-bg': '#0275d8',
    '$component-active-color': '#fff',
    '$border-radius': '.25rem',
    '$navbar-padding-x': '1rem',
    '$navbar-padding-y': '0.5rem',
    '$nav-link-padding': '.5em 1em',
    '$nav-disabled-link-color': '#636c72',
    '$nav-tabs-border-color': '#ddd',
    '$nav-tabs-border-width': '1px',
    '$nav-tabs-border-radius': '.5em 1em',
    '$nav-tabs-link-hover-border-color': '#eceeef',
    '$nav-tabs-active-link-hover-color': '#464a4c',
    '$nav-tabs-active-link-hover-bg': '#fff',
    '$nav-tabs-active-link-hover-border-color': '#ddd',
    '$nav-pills-border-radius': '.25rem',
    '$nav-pills-active-link-color': '#fff',
    '$nav-pills-active-link-bg': '#0275d8',
    '$cursor-disabled': 'not-allowed',
    '$zindex-navbar': '1000',
    '$zindex-navbar-fixed': '1030',
    '$zindex-navbar-sticky': '1030',
    '$navbar-brand-padding-y': '.25rem',
    '$navbar-divider-padding-y': '.425rem',
    '$navbar-toggler-padding-y': '.5rem',
    '$navbar-toggler-padding-x': '.75rem',
    '$navbar-toggler-font-size': '1.25rem',
    '$navbar-toggler-border-radius': '.25rem',
    '$navbar-light-active-color': 'rgba(0,0,0,.9)',
    '$navbar-light-color': 'rgba(0,0,0,.5)',
    '$navbar-light-hover-color': 'rgba(0,0,0,.7)',
    '$navbar-light-toggler-border': 'rgba(0,0,0,.1)',
    '$navbar-light-disabled-color': 'rgba(0, 0, 0, 0.3)',
    '$navbar-light-toggler-bg': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(0,0,0,.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')',
    '$navbar-inverse-active-color': 'rgba(255,255,255,1)',
    '$navbar-inverse-color': 'rgba(255,255,255,.5)',
    '$navbar-inverse-hover-color': 'rgba(255,255,255,.75)',
    '$navbar-inverse-toggler-border': 'rgba(255,255,255,.1)',
    '$navbar-inverse-toggler-bg': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(255,255,255,.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')',
    '$navbar-inverse-disabled-color': 'rgba(255, 255, 255, 0.25)'
  }
};
var propTypes$49 = {
  className: propTypes$1.string,
  children: propTypes$1.node.isRequired,
  inline: propTypes$1.bool,
  unstyled: propTypes$1.bool,
  toggleable: propTypes$1.string,
  theme: propTypes$1.shape({
    '$enable-rounded': propTypes$1.bool,
    '$enable-hover-media-query': propTypes$1.bool,
    '$grid-breakpoints': propTypes$1.object,
    '$border-width': propTypes$1.string,
    '$font-size-lg': propTypes$1.string,
    '$body-bg': propTypes$1.string,
    '$component-active-bg': propTypes$1.string,
    '$component-active-color': propTypes$1.string,
    '$border-radius': propTypes$1.string,
    '$navbar-padding-x': propTypes$1.string,
    '$navbar-padding-y': propTypes$1.string,
    '$nav-link-padding': propTypes$1.string,
    '$nav-disabled-link-color': propTypes$1.string,
    '$nav-tabs-border-color': propTypes$1.string,
    '$nav-tabs-border-width': propTypes$1.string,
    '$nav-tabs-border-radius': propTypes$1.string,
    '$nav-tabs-link-hover-border-color': propTypes$1.string,
    '$nav-tabs-active-link-hover-color': propTypes$1.string,
    '$nav-tabs-active-link-hover-bg': propTypes$1.string,
    '$nav-tabs-active-link-hover-border-color': propTypes$1.string,
    '$nav-pills-border-radius': propTypes$1.string,
    '$nav-pills-active-link-color': propTypes$1.string,
    '$nav-pills-active-link-bg': propTypes$1.string,
    '$cursor-disabled': propTypes$1.string,
    '$zindex-navbar': propTypes$1.string,
    '$zindex-navbar-fixed': propTypes$1.string,
    '$zindex-navbar-sticky': propTypes$1.string,
    '$navbar-brand-padding-y': propTypes$1.string,
    '$navbar-divider-padding-y': propTypes$1.string,
    '$navbar-toggler-padding-y': propTypes$1.string,
    '$navbar-toggler-padding-x': propTypes$1.string,
    '$navbar-toggler-font-size': propTypes$1.string,
    '$navbar-toggler-border-radius': propTypes$1.string,
    '$navbar-light-active-color': propTypes$1.string,
    '$navbar-light-color': propTypes$1.string,
    '$navbar-light-hover-color': propTypes$1.string,
    '$navbar-light-toggler-border': propTypes$1.string,
    '$navbar-light-disabled-color': propTypes$1.string,
    '$navbar-light-toggler-bg': propTypes$1.string,
    '$navbar-inverse-active-color': propTypes$1.string,
    '$navbar-inverse-color': propTypes$1.string,
    '$navbar-inverse-hover-color': propTypes$1.string,
    '$navbar-inverse-toggler-border': propTypes$1.string,
    '$navbar-inverse-toggler-bg': propTypes$1.string,
    '$navbar-inverse-disabled-color': propTypes$1.string
  })
};
var UlUnstyled = function (_React$Component) {
  inherits(UlUnstyled, _React$Component);
  function UlUnstyled() {
    classCallCheck(this, UlUnstyled);
    return possibleConstructorReturn(this, (UlUnstyled.__proto__ || Object.getPrototypeOf(UlUnstyled)).apply(this, arguments));
  }
  createClass(UlUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          inline = _omit.inline,
          unstyled = _omit.unstyled,
          children = _omit.children,
          rest = objectWithoutProperties(_omit, ['className', 'inline', 'unstyled', 'children']);
      var classes = classnames(className, inline ? 'list-inline' : false, unstyled ? 'list-unstyled' : false);
      return React.createElement(
        'ul',
        _extends({ className: classes }, rest),
        children
      );
    }
  }]);
  return UlUnstyled;
}(React.Component);
UlUnstyled.defaultProps = defaultProps$45;
UlUnstyled.propTypes = propTypes$49;
var Ul = styled(UlUnstyled).withConfig({
  displayName: 'Ul'
})(['', ''], function (props) {
  return '\n    ' + nav_3(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$nav-link-padding'], props.theme['$nav-disabled-link-color'], props.theme['$cursor-disabled'], props.theme['$nav-tabs-border-width'], props.theme['$nav-tabs-border-color'], props.theme['$nav-tabs-border-radius'], props.theme['$nav-tabs-link-hover-border-color'], props.theme['$nav-tabs-active-link-hover-color'], props.theme['$nav-tabs-active-link-hover-bg'], props.theme['$nav-tabs-active-link-hover-border-color'], props.theme['$nav-pills-border-radius'], props.theme['$nav-pills-active-link-color'], props.theme['$nav-pills-active-link-bg']) + '\n    ' + navbar_3(props.theme['$grid-breakpoints'], props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$font-size-lg'], props.theme['$border-width'], props.theme['$navbar-padding-y'], props.theme['$navbar-padding-x'], props.theme['$zindex-navbar'], props.theme['$zindex-navbar-fixed'], props.theme['$zindex-navbar-sticky'], props.theme['$navbar-brand-padding-y'], props.theme['$navbar-divider-padding-y'], props.theme['$navbar-toggler-padding-y'], props.theme['$navbar-toggler-padding-x'], props.theme['$navbar-toggler-font-size'], props.theme['$navbar-toggler-border-radius'], props.theme['$navbar-light-active-color'], props.theme['$navbar-light-color'], props.theme['$navbar-light-hover-color'], props.theme['$navbar-light-toggler-border'], props.theme['$navbar-light-disabled-color'], props.theme['$navbar-light-toggler-bg'], props.theme['$navbar-inverse-active-color'], props.theme['$navbar-inverse-color'], props.theme['$navbar-inverse-hover-color'], props.theme['$navbar-inverse-toggler-border'], props.theme['$navbar-inverse-toggler-bg'], props.theme['$navbar-inverse-disabled-color']) + '\n\n    /* Type Scss */\n    &.list-unstyled {\n      ' + lists_1() + '\n    }\n\n    &.list-inline {\n      ' + lists_2() + '\n    }\n    \n    /* Reboot Scss */\n    margin-top: 0;\n    margin-bottom: 1rem;\n  \n    & ol,\n    & ul {\n      margin-bottom: 0;\n    }\n  ';
});
Ul.defaultProps = defaultProps$45;
Ul.propTypes = propTypes$49;

var defaultProps$44 = {
  tag: Ul,
  toggleable: 'false',
  theme: {
    '$enable-rounded': true,
    '$enable-hover-media-query': false,
    '$component-active-color': '#fff',
    '$component-active-bg': '#0275d8',
    '$list-group-color': '#292b2c',
    '$list-group-bg': '#fff',
    '$list-group-border-color': 'rgba(0, 0, 0, 0.125)',
    '$list-group-border-width': '1px',
    '$list-group-border-radius': '.25rem',
    '$list-group-item-padding-x': '1.25rem',
    '$list-group-item-padding-y': '.75rem',
    '$list-group-hover-bg': '#f7f7f9',
    '$list-group-active-color': '#fff',
    '$list-group-active-bg': '#0275d8',
    '$list-group-active-border': '#0275d8',
    '$list-group-disabled-color': '#636c72',
    '$list-group-disabled-bg': '#fff',
    '$list-group-link-color': '#464a4c',
    '$list-group-link-hover-color': '#464a4c',
    '$list-group-link-active-color': '#292b2c',
    '$list-group-link-active-bg': '#eceeef',
    '$cursor-disabled': 'not-allowed',
    '$state-success-text': '#3c763d',
    '$state-success-bg': '#dff0d8',
    '$state-info-text': '#31708f',
    '$state-info-bg': '#d9edf7',
    '$state-warning-text': '#8a6d3b',
    '$state-warning-bg': '#fcf8e3',
    '$state-danger-text': '#a94442',
    '$state-danger-bg': '#f2dede'
  }
};
var propTypes$48 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  flush: propTypes$1.bool,
  toggleable: propTypes$1.string,
  theme: propTypes$1.shape({
    '$enable-rounded': propTypes$1.bool,
    '$enable-hover-media-query': propTypes$1.bool,
    '$component-active-color': propTypes$1.string,
    '$component-active-bg': propTypes$1.string,
    '$list-group-color': propTypes$1.string,
    '$list-group-bg': propTypes$1.string,
    '$list-group-border-color': propTypes$1.string,
    '$list-group-border-width': propTypes$1.string,
    '$list-group-border-radius': propTypes$1.string,
    '$list-group-item-padding-x': propTypes$1.string,
    '$list-group-item-padding-y': propTypes$1.string,
    '$list-group-hover-bg': propTypes$1.string,
    '$list-group-active-color': propTypes$1.string,
    '$list-group-active-bg': propTypes$1.string,
    '$list-group-active-border': propTypes$1.string,
    '$list-group-disabled-color': propTypes$1.string,
    '$list-group-disabled-bg': propTypes$1.string,
    '$list-group-link-color': propTypes$1.string,
    '$list-group-link-hover-color': propTypes$1.string,
    '$list-group-link-active-color': propTypes$1.string,
    '$list-group-link-active-bg': propTypes$1.string,
    '$cursor-disabled': propTypes$1.string,
    '$state-success-text': propTypes$1.string,
    '$state-success-bg': propTypes$1.string,
    '$state-info-text': propTypes$1.string,
    '$state-info-bg': propTypes$1.string,
    '$state-warning-text': propTypes$1.string,
    '$state-warning-bg': propTypes$1.string,
    '$state-danger-text': propTypes$1.string,
    '$state-danger-bg': propTypes$1.string
  }),
  cssModule: propTypes$1.object
};
var ListGroupUnstyled = function (_React$Component) {
  inherits(ListGroupUnstyled, _React$Component);
  function ListGroupUnstyled() {
    classCallCheck(this, ListGroupUnstyled);
    return possibleConstructorReturn(this, (ListGroupUnstyled.__proto__ || Object.getPrototypeOf(ListGroupUnstyled)).apply(this, arguments));
  }
  createClass(ListGroupUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          flush = _omit.flush,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'tag', 'flush']);
      var classes = mapToCssModules(classnames(className, 'list-group', flush ? 'list-group-flush' : false), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return ListGroupUnstyled;
}(React.Component);
ListGroupUnstyled.defaultProps = defaultProps$44;
ListGroupUnstyled.propTypes = propTypes$48;
var ListGroup = styled(ListGroupUnstyled).withConfig({
  displayName: 'ListGroup'
})(['', ''], function (props) {
  return '\n    /* \n      Base class\n      Easily usable on ul, ol, or div.\n    */\n    \n    &.list-group {\n      display: flex;\n      flex-direction: column;\n      /* No need to set list-style: none; since .list-group-item is block level */\n      padding-left: 0;  /* reset padding because ul and ol */\n      margin-bottom: 0;\n    }\n    \n    \n    /* \n      Interactive list items\n      Use anchor or button elements instead of \'li\'s or \'div\'s to create interactive\n      list items. Includes an extra \'.active\' modifier class for selected items.\n    */\n    \n    & .list-group-item-action {\n      width: 100%; /* For \'button\'s (anchors become 100% by default though) */\n      color: ' + props.theme['$list-group-link-color'] + ';\n      text-align: inherit; /* For \'button\'s (anchors inherit) */\n    \n      /* Hover state */\n      ' + hover_3(props.theme['$enable-hover-media-query'], '\n          color: ' + props.theme['$list-group-link-hover-color'] + ';\n          text-decoration: none;\n          background-color: ' + props.theme['$list-group-hover-bg'] + ';\n        ') + ';\n      \n      &:active {\n        color: ' + props.theme['$list-group-link-active-color'] + ';\n        background-color: ' + props.theme['$list-group-link-active-bg'] + ';\n      }\n    }\n    \n    /* \n      Individual list items\n      Use on \'li\'s or \'div\'s within the \'.list-group\' parent.\n    */\n    \n    & .list-group-item {\n      position: relative;\n      display: flex;\n      flex-flow: row wrap;\n      align-items: center;\n      padding: ' + props.theme['$list-group-item-padding-y'] + ' ' + props.theme['$list-group-item-padding-x'] + ';\n      /* Place the border on the list items and negative margin up for better styling */\n      margin-bottom: -' + props.theme['$list-group-border-width'] + ';\n      background-color: ' + props.theme['$list-group-bg'] + ';\n      border: ' + props.theme['$list-group-border-width'] + ' solid ' + props.theme['$list-group-border-color'] + ';\n    \n      &:first-child {\n        ' + borderRadius_3(props.theme['$enable-rounded'], props.theme['$list-group-border-radius']) + '\n      }\n\n      &:last-child {\n        margin-bottom: 0;\n        ' + borderRadius_5(props.theme['$enable-rounded'], props.theme['$list-group-border-radius']) + '\n      }\n      \n      ' + hover_3(props.theme['$enable-hover-media-query'], 'text-decoration: none;') + '\n        \n      &.disabled,\n      &:disabled {   \n        color: ' + props.theme['$list-group-disabled-color'] + ';\n        cursor: ' + props.theme['$cursor-disabled'] + ';\n        background-color: ' + props.theme['$list-group-disabled-bg'] + ';\n      }\n    \n    \n      &.active {\n        z-index: 2; /* Place active items above their siblings for proper border styling */\n        color: ' + props.theme['$list-group-active-color'] + ';\n        background-color: ' + props.theme['$list-group-active-bg'] + ';\n        border-color: ' + props.theme['$list-group-active-border'] + ';     \n      }\n    }\n    \n    /* \n      Flush list items\n      Remove borders and border-radius to keep list group items edge-to-edge. Most\n      useful within other components (e.g., cards).\n    */\n\n    &.list-group-flush {\n      .list-group-item {\n        border-right: 0;\n        border-left: 0;\n        border-radius: 0;\n      }\n      \n      &:first-child {\n        .list-group-item:first-child {\n          border-top: 0;\n        }\n      }\n\n      &:last-child {\n        .list-group-item:last-child {\n          border-bottom: 0;\n        }\n      }\n    }\n    \n    \n    \n    /* Contextual variants\n    \n     Add modifier classes to change text and background color on individual items.\n     Organizationally, this must come after the \':hover\' states.\n    */\n    \n    ' + listGroup_2(props.theme['$enable-hover-media-query'], 'success', props.theme['$state-success-bg'], props.theme['$state-success-text']) + '\n    ' + listGroup_2(props.theme['$enable-hover-media-query'], 'info', props.theme['$state-info-bg'], props.theme['$state-info-text']) + '\n    ' + listGroup_2(props.theme['$enable-hover-media-query'], 'warning', props.theme['$state-warning-bg'], props.theme['$state-warning-text']) + '\n    ' + listGroup_2(props.theme['$enable-hover-media-query'], 'danger', props.theme['$state-danger-bg'], props.theme['$state-danger-text']) + '\n  ';
});
ListGroup.defaultProps = defaultProps$44;
ListGroup.propTypes = propTypes$48;

var handleDisabledOnClick = function handleDisabledOnClick(e) {
  e.preventDefault();
};
var defaultProps$46 = {
  tag: 'li'
};
var propTypes$50 = {
  className: propTypes$1.string,
  action: propTypes$1.bool,
  active: propTypes$1.bool,
  disabled: propTypes$1.bool,
  color: propTypes$1.oneOf(['success', 'info', 'warning', 'danger', '']),
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  cssModule: propTypes$1.object
};
var ListGroupItem = function (_React$Component) {
  inherits(ListGroupItem, _React$Component);
  function ListGroupItem() {
    classCallCheck(this, ListGroupItem);
    return possibleConstructorReturn(this, (ListGroupItem.__proto__ || Object.getPrototypeOf(ListGroupItem)).apply(this, arguments));
  }
  createClass(ListGroupItem, [{
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
      var classes = classnames(className, active ? 'active' : false, disabled ? 'disabled' : false, action ? 'list-group-item-action' : false, color ? 'list-group-item-' + color : false, 'list-group-item');
      if (disabled) {
        attributes.onClick = handleDisabledOnClick;
      }
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return ListGroupItem;
}(React.Component);
ListGroupItem.defaultProps = defaultProps$46;
ListGroupItem.propTypes = propTypes$50;
ListGroupItem.defaultProps = defaultProps$46;
ListGroupItem.propTypes = propTypes$50;

var defaultProps$47 = {
  tag: H5
};
var propTypes$51 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func])
};
var ListGroupItemHeading = function (_React$Component) {
  inherits(ListGroupItemHeading, _React$Component);
  function ListGroupItemHeading() {
    classCallCheck(this, ListGroupItemHeading);
    return possibleConstructorReturn(this, (ListGroupItemHeading.__proto__ || Object.getPrototypeOf(ListGroupItemHeading)).apply(this, arguments));
  }
  createClass(ListGroupItemHeading, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'tag']);
      var classes = classnames(className, 'list-group-item-heading');
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return ListGroupItemHeading;
}(React.Component);
ListGroupItemHeading.defaultProps = defaultProps$47;
ListGroupItemHeading.propTypes = propTypes$51;
ListGroupItemHeading.defaultProps = defaultProps$47;
ListGroupItemHeading.propTypes = propTypes$51;

var defaultProps$48 = {
  tag: 'p'
};
var propTypes$52 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func])
};
var ListGroupItemText = function (_React$Component) {
  inherits(ListGroupItemText, _React$Component);
  function ListGroupItemText() {
    classCallCheck(this, ListGroupItemText);
    return possibleConstructorReturn(this, (ListGroupItemText.__proto__ || Object.getPrototypeOf(ListGroupItemText)).apply(this, arguments));
  }
  createClass(ListGroupItemText, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'tag']);
      var classes = classnames(className, 'list-group-item-text');
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return ListGroupItemText;
}(React.Component);
ListGroupItemText.defaultProps = defaultProps$48;
ListGroupItemText.propTypes = propTypes$52;
ListGroupItemText.defaultProps = defaultProps$48;
ListGroupItemText.propTypes = propTypes$52;

var Mapp = styled.map.withConfig({
  displayName: 'Map__Mapp'
})(['display:inline;']);

var defaultProps$49 = {
  theme: {
    '$mark-padding': '.2em',
    '$mark-bg': '#fcf8e3'
  }
};
var propTypes$53 = {
  theme: propTypes$1.shape({
    '$mark-padding': propTypes$1.string,
    '$mark-bg': propTypes$1.string
  })
};
var Mark = styled.mark.withConfig({
  displayName: 'Mark'
})(['', ''], function (props) {
  return '\n    /* Reboot Scss */\n    padding: ' + props.theme['$mark-padding'] + ';\n    background-color: ' + props.theme['$mark-bg'] + ';\n  ';
});
Mark.defaultProps = defaultProps$49;
Mark.propTypes = propTypes$53;

var propTypes$54 = {
  className: propTypes$1.string,
  children: propTypes$1.node,
  body: propTypes$1.bool,
  bottom: propTypes$1.bool,
  heading: propTypes$1.bool,
  left: propTypes$1.bool,
  list: propTypes$1.bool,
  middle: propTypes$1.bool,
  object: propTypes$1.bool,
  right: propTypes$1.bool,
  tag: propTypes$1.oneOfType([propTypes$1.func, propTypes$1.string]),
  top: propTypes$1.bool,
  cssModule: propTypes$1.object
};
var MediaUnstyled = function (_React$Component) {
  inherits(MediaUnstyled, _React$Component);
  function MediaUnstyled() {
    classCallCheck(this, MediaUnstyled);
    return possibleConstructorReturn(this, (MediaUnstyled.__proto__ || Object.getPrototypeOf(MediaUnstyled)).apply(this, arguments));
  }
  createClass(MediaUnstyled, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          body = _props.body,
          bottom = _props.bottom,
          className = _props.className,
          cssModule = _props.cssModule,
          heading = _props.heading,
          left = _props.left,
          list = _props.list,
          middle = _props.middle,
          object = _props.object,
          right = _props.right,
          tag = _props.tag,
          top = _props.top,
          attributes = objectWithoutProperties(_props, ['body', 'bottom', 'className', 'cssModule', 'heading', 'left', 'list', 'middle', 'object', 'right', 'tag', 'top']);
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
      var classes = mapToCssModules(classnames(className, {
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
MediaUnstyled.propTypes = propTypes$54;
var Media = styled(MediaUnstyled).withConfig({
  displayName: 'Media'
})(['&.media,& .media{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;}& .media-body{-webkit-box-flex:1;-ms-flex:1 1 0%;flex:1 1 0%}', ''], media_2());
Media.propTypes = propTypes$54;

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var Portal$2 = function (_React$Component) {
  _inherits(Portal, _React$Component);
  function Portal() {
    _classCallCheck(this, Portal);
    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }
  _createClass(Portal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
    }
  }, {
    key: 'render',
    value: function render() {
      if (!canUseDOM) {
        return null;
      }
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }
      return ReactDOM.createPortal(this.props.children, this.props.node || this.defaultNode);
    }
  }]);
  return Portal;
}(React.Component);
Portal$2.propTypes = {
  children: propTypes$1.node.isRequired,
  node: propTypes$1.any
};

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var Portal$3 = function (_React$Component) {
  _inherits$1(Portal, _React$Component);
  function Portal() {
    _classCallCheck$1(this, Portal);
    return _possibleConstructorReturn$1(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }
  _createClass$1(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderPortal();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(props) {
      this.renderPortal();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      ReactDOM.unmountComponentAtNode(this.defaultNode || this.props.node);
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
      this.portal = null;
    }
  }, {
    key: 'renderPortal',
    value: function renderPortal(props) {
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }
      var children = this.props.children;
      if (typeof this.props.children.type === 'function') {
        children = React.cloneElement(this.props.children);
      }
      this.portal = ReactDOM.unstable_renderSubtreeIntoContainer(this, children, this.props.node || this.defaultNode);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return Portal;
}(React.Component);
Portal$3.propTypes = {
  children: propTypes$1.node.isRequired,
  node: propTypes$1.any
};

var Portal = void 0;
if (ReactDOM.createPortal) {
  Portal = Portal$2;
} else {
  Portal = Portal$3;
}
var Portal$1 = Portal;

var _createClass$2 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _possibleConstructorReturn$2(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
function _inherits$2(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
var KEYCODES = {
  ESCAPE: 27
};
var PortalWithState = function (_React$Component) {
  _inherits$2(PortalWithState, _React$Component);
  function PortalWithState(props) {
    _classCallCheck$2(this, PortalWithState);
    var _this = _possibleConstructorReturn$2(this, (PortalWithState.__proto__ || Object.getPrototypeOf(PortalWithState)).call(this, props));
    _this.portalNode = null;
    _this.state = { active: !!props.defaultOpen };
    _this.openPortal = _this.openPortal.bind(_this);
    _this.closePortal = _this.closePortal.bind(_this);
    _this.wrapWithPortal = _this.wrapWithPortal.bind(_this);
    _this.handleOutsideMouseClick = _this.handleOutsideMouseClick.bind(_this);
    _this.handleKeydown = _this.handleKeydown.bind(_this);
    return _this;
  }
  _createClass$2(PortalWithState, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.closeOnEsc) {
        document.addEventListener('keydown', this.handleKeydown);
      }
      if (this.props.closeOnOutsideClick) {
        document.addEventListener('click', this.handleOutsideMouseClick);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.closeOnEsc) {
        document.removeEventListener('keydown', this.handleKeydown);
      }
      if (this.props.closeOnOutsideClick) {
        document.removeEventListener('click', this.handleOutsideMouseClick);
      }
    }
  }, {
    key: 'openPortal',
    value: function openPortal(e) {
      if (this.state.active) {
        return;
      }
      if (e && e.nativeEvent) {
        e.nativeEvent.stopImmediatePropagation();
      }
      this.setState({ active: true }, this.props.onOpen);
    }
  }, {
    key: 'closePortal',
    value: function closePortal() {
      if (!this.state.active) {
        return;
      }
      this.setState({ active: false }, this.props.onClose);
    }
  }, {
    key: 'wrapWithPortal',
    value: function wrapWithPortal(children) {
      var _this2 = this;
      if (!this.state.active) {
        return null;
      }
      return React.createElement(
        Portal$1,
        {
          node: this.props.node,
          key: 'react-portal',
          ref: function ref(portalNode) {
            return _this2.portalNode = portalNode;
          }
        },
        children
      );
    }
  }, {
    key: 'handleOutsideMouseClick',
    value: function handleOutsideMouseClick(e) {
      if (!this.state.active) {
        return;
      }
      var root = this.portalNode.props.node || this.portalNode.defaultNode;
      if (!root || root.contains(e.target) || e.button && e.button !== 0) {
        return;
      }
      this.closePortal();
    }
  }, {
    key: 'handleKeydown',
    value: function handleKeydown(e) {
      if (e.keyCode === KEYCODES.ESCAPE && this.state.active) {
        this.closePortal();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children({
        openPortal: this.openPortal,
        closePortal: this.closePortal,
        portal: this.wrapWithPortal,
        isOpen: this.state.active
      });
    }
  }]);
  return PortalWithState;
}(React.Component);
PortalWithState.propTypes = {
  children: propTypes$1.func.isRequired,
  defaultOpen: propTypes$1.bool,
  node: propTypes$1.any,
  openByClickOn: propTypes$1.element,
  closeOnEsc: propTypes$1.bool,
  closeOnOutsideClick: propTypes$1.bool,
  onOpen: propTypes$1.func,
  onClose: propTypes$1.func
};
PortalWithState.defaultProps = {
  onOpen: function onOpen() {},
  onClose: function onClose() {}
};

var tools = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTetherAttachments = getTetherAttachments;
exports.getScrollbarWidth = getScrollbarWidth;
exports.setScrollbarWidth = setScrollbarWidth;
exports.isBodyOverflowing = isBodyOverflowing;
exports.getOriginalBodyPadding = getOriginalBodyPadding;
exports.conditionallyUpdateScrollbar = conditionallyUpdateScrollbar;
exports.toHashCode = toHashCode;
exports.createChainedFunction = createChainedFunction;
exports.pick = pick;
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
var tetherAttachements = exports.tetherAttachements = ['top', 'bottom', 'left', 'right', 'top left', 'top center', 'top right', 'right top', 'right middle', 'right bottom', 'bottom right', 'bottom center', 'bottom left', 'left top', 'left middle', 'left bottom'];
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
function createChainedFunction() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  return funcs.filter(function (func) {
    return func != null;
  }).reduce(function (acc, func) {
    return function chainedFunction() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, function () {});
}
function pick(obj, keys) {
  var pickKeys = Array.isArray(keys) ? keys : [keys];
  var length = pickKeys.length;
  var key = void 0;
  var result = {};
  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }
  return result;
}
});
unwrapExports(tools);
var tools_1 = tools.getTetherAttachments;
var tools_3 = tools.setScrollbarWidth;
var tools_5 = tools.getOriginalBodyPadding;
var tools_6 = tools.conditionallyUpdateScrollbar;
var tools_10 = tools.tetherAttachements;

var FadePropTypes = propTypes$1.shape(propTypes$4);
var propTypes$55 = {
  className: propTypes$1.string,
  theme: propTypes$1.shape({}),
  isOpen: propTypes$1.bool,
  autoFocus: propTypes$1.bool,
  size: propTypes$1.oneOf(['sm', 'lg', '']),
  toggle: propTypes$1.func,
  keyboard: propTypes$1.bool,
  role: propTypes$1.string,
  labelledBy: propTypes$1.string,
  backdrop: propTypes$1.oneOfType([propTypes$1.bool, propTypes$1.oneOf(['static'])]),
  onEnter: propTypes$1.func,
  onExit: propTypes$1.func,
  onOpened: propTypes$1.func,
  onClosed: propTypes$1.func,
  children: propTypes$1.node,
  documentClassName: propTypes$1.string,
  modalClassName: propTypes$1.string,
  backdropClassName: propTypes$1.string,
  contentClassName: propTypes$1.string,
  fade: propTypes$1.bool,
  cssModule: propTypes$1.object,
  zIndex: propTypes$1.oneOfType([propTypes$1.number, propTypes$1.string]),
  backdropTransition: FadePropTypes,
  modalTransition: FadePropTypes
};
var defaultProps$50 = {
  isOpen: false,
  autoFocus: true,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 2000,
  theme: {
    '$enable-rounded': true,
    '$enable-shadows': false,
    '$enable-transitions': true,
    '$grid-breakpoints': {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    '$body-bg': '#fff',
    '$body-color': '#eceeef',
    '$font-family-base': '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    '$font-size-base': '1rem',
    '$font-weight-base': 'normal',
    '$line-height-base': '1.5',
    '$zindex-modal': '2050',
    '$zindex-modal-backdrop': '2040',
    '$transition-fade': 'opacity .15s linear',
    '$border-radius-lg': '.3rem',
    '$modal-inner-padding': '15px',
    '$modal-dialog-margin': '10px',
    '$modal-dialog-sm-up-margin-y': '30px',
    '$modal-title-line-height': '1.5',
    '$modal-content-bg': '#fff',
    '$modal-content-border-color': 'rgba(0, 0, 0, 0.2)',
    '$modal-content-border-width': '1px',
    '$modal-content-xs-box-shadow': '0 3px 9px rgba(0, 0, 0, 0.5)',
    '$modal-content-sm-up-box-shadow': '0 5px 15px rgba(0, 0, 0, 0.5)',
    '$modal-backdrop-bg': '#000',
    '$modal-backdrop-opacity': '.5',
    '$modal-header-border-color': '#eceeef',
    '$modal-footer-border-color': '#eceeef',
    '$modal-header-border-width': '1px',
    '$modal-footer-border-width': '1px',
    '$modal-header-padding': '15px',
    '$modal-lg': '800px',
    '$modal-md': '500px',
    '$modal-sm': '300px',
    '$modal-transition': 'transform .3s ease-out'
  },
  fade: true,
  onOpened: null,
  onClosed: null,
  modalTransition: {
    timeout: 300
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: 150
  }
};
var ModalUnstyled = function (_React$Component) {
  inherits(ModalUnstyled, _React$Component);
  function ModalUnstyled(props) {
    classCallCheck(this, ModalUnstyled);
    var _this = possibleConstructorReturn(this, (ModalUnstyled.__proto__ || Object.getPrototypeOf(ModalUnstyled)).call(this, props));
    _this.onOpened = function (node, isAppearing) {
      if (_this.props.onOpened) {
        _this.props.onOpened();
      }
      if (_this.props.modalTransition.onEntered) {
        _this.props.modalTransition.onEntered(node, isAppearing);
      }
    };
    _this.onClosed = function (node) {
      if (_this.props.onClosed) {
        _this.props.onClosed();
      }
      if (_this.props.modalTransition.onEntered) {
        _this.props.modalTransition.onExited(node);
      }
      _this.destroy();
      if (_this._isMounted) {
        _this.setState({ isOpen: false });
      }
    };
    _this.handleBackdropClick = function (e) {
      e.stopPropagation();
      if (!_this.props.isOpen || _this.props.backdrop !== true) return;
      var container = _this._dialog;
      if (e.target && !container.contains(e.target) && _this.props.toggle) {
        _this.props.toggle();
      }
    };
    _this.handleEscape = function (e) {
      if (_this.props.isOpen && _this.props.keyboard && e.keyCode === 27 && _this.props.toggle) {
        _this.props.toggle();
      }
    };
    _this.destroy = function () {
      document.body.removeChild(_this._element);
      _this._element = null;
      var classes = document.body.className.replace(/(^| )overflow( |$)/, ' ');
      document.body.className = mapToCssModules(classnames(classes).trim(), _this.props.cssModule);
      tools_3(_this.originalBodyPadding);
    };
    _this.originalBodyPadding = null;
    _this.state = {
      isOpen: props.isOpen
    };
    if (props.isOpen) {
      _this.init();
    }
    return _this;
  }
  createClass(ModalUnstyled, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.onEnter) {
        this.props.onEnter();
      }
      if (this.state.isOpen && this.props.autoFocus) {
        this.setFocus();
      }
      this._isMounted = true;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isOpen && !this.props.isOpen) {
        this.setState({ isOpen: nextProps.isOpen });
      }
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      if (nextState.isOpen && !this.state.isOpen) {
        this.init();
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
        this.setFocus();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.onExit) {
        this.props.onExit();
      }
      if (this.state.isOpen) {
        this.destroy();
      }
      this._isMounted = false;
    }
  }, {
    key: 'setFocus',
    value: function setFocus() {
      if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
        this._dialog.parentNode.focus();
      }
    }
  }, {
    key: 'init',
    value: function init() {
      var classes = document.body.className;
      this._element = document.createElement('div');
      this._element.setAttribute('tabindex', '-1');
      this._element.style.position = 'relative';
      this._element.style.zIndex = this.props.zIndex;
      this.originalBodyPadding = tools_5();
      tools_6();
      document.body.appendChild(this._element);
      document.body.className = mapToCssModules(classnames(classes, 'overflow'), this.props.cssModule);
    }
  }, {
    key: 'renderModalDialog',
    value: function renderModalDialog() {
      var _this2 = this;
      var attributes = lodash_omit(this.props, ['theme', 'isOpen', 'autoFocus', 'size', 'toggle', 'keyboard', 'role', 'labelledBy', 'backdrop', 'onEnter', 'onExit', 'onOpened', 'onClosed', 'children', 'className', 'documentClassName', 'modalClassName', 'backdropClassName', 'contentClassName', 'fade', 'cssModule', 'zIndex', 'backdropTransition', 'modalTransition']);
      return React.createElement(
        'div',
        _extends({
          className: mapToCssModules(classnames('modal-dialog', this.props.documentClassName, defineProperty({}, 'modal-' + this.props.size, this.props.size)), this.props.cssModule),
          role: 'document',
          ref: function ref(c) {
            _this2._dialog = c;
          }
        }, attributes),
        React.createElement(
          'div',
          {
            className: mapToCssModules(classnames('modal-content', this.props.contentClassName), this.props.cssModule)
          },
          this.props.children
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.isOpen) {
        var _props = this.props,
            modalClassName = _props.modalClassName,
            backdropClassName = _props.backdropClassName,
            cssModule = _props.cssModule,
            isOpen = _props.isOpen,
            backdrop = _props.backdrop,
            role = _props.role,
            labelledBy = _props.labelledBy;
        var modalAttributes = {
          onClick: this.handleBackdropClick,
          onKeyUp: this.handleEscape,
          style: { display: 'block' },
          'aria-labelledby': labelledBy,
          role: role,
          tabIndex: '-1'
        };
        var hasTransition = this.props.fade;
        var modalTransition = _extends({}, defaultProps$4, this.props.modalTransition, {
          baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
          timeout: hasTransition ? this.props.modalTransition.timeout : 0
        });
        var backdropTransition = _extends({}, defaultProps$4, this.props.backdropTransition, {
          baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
          timeout: hasTransition ? this.props.backdropTransition.timeout : 0
        });
        return React.createElement(
          Portal$1,
          { node: this._element },
          React.createElement(
            'div',
            { className: mapToCssModules(this.props.className) },
            React.createElement(
              Fade,
              _extends({}, modalAttributes, modalTransition, {
                'in': isOpen,
                onEntered: this.onOpened,
                onExited: this.onClosed,
                cssModule: cssModule,
                className: mapToCssModules(classnames('modal', modalClassName), cssModule)
              }),
              this.renderModalDialog()
            ),
            React.createElement(Fade, _extends({}, backdropTransition, {
              'in': isOpen && !!backdrop,
              cssModule: cssModule,
              className: mapToCssModules(classnames('modal-backdrop', backdropClassName), cssModule)
            }))
          )
        );
      }
      return null;
    }
  }]);
  return ModalUnstyled;
}(React.Component);
ModalUnstyled.defaultProps = defaultProps$50;
ModalUnstyled.propTypes = propTypes$55;
var Modal = styled(ModalUnstyled).withConfig({
  displayName: 'Modal'
})(['', ''], function (props) {
  return '\n    & .modal {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: ' + props.theme['$zindex-modal'] + ';\n      display: none;\n      outline: 0;\n      overflow-x: hidden;\n      overflow-y: auto;\n      \n      ' + transition_3(props.theme['$enable-transitions'], props.theme['$transition-fade']) + '\n      &.fade {\n        .modal-dialog {\n          ' + transition_2$1(props.theme['$enable-transitions'], props.theme['$modal-transition']) + '\n          transform: translate(0, -25%);\n        }\n      }\n      &.show {\n        .modal-dialog {\n          transform: translate(0, 0);\n        }\n      }\n    }\n    \n    & .modal-dialog {\n      position: relative;\n      width: auto;\n      margin: ' + props.theme['$modal-dialog-margin'] + ';\n      ' + rebootUtils.body(props.theme['$font-family-base'], props.theme['$font-size-base'], props.theme['$font-weight-base'], props.theme['$line-height-base'], props.theme['$body-color'], props.theme['$body-bg']) + '\n    }\n    \n    \n    & .modal-content {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      background-color: ' + props.theme['$modal-content-bg'] + ';\n      background-clip: padding-box;\n      border: ' + props.theme['$modal-content-border-width'] + ' solid ' + props.theme['$modal-content-border-color'] + ';\n      ' + borderRadius_2(props.theme['$enable-rounded'], props.theme['$border-radius-lg']) + '\n      ' + boxShadow_2(props.theme['$enable-shadows'], props.theme['$modal-content-xs-box-shadow']) + '\n      outline: 0;\n    }\n    \n    & .modal-backdrop {\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: ' + props.theme['$zindex-modal-backdrop'] + ';\n      background-color: ' + props.theme['$modal-backdrop-bg'] + ';\n      &.fade {\n        opacity: 0;\n        ' + transition_2$1(props.theme['$enable-transitions'], props.theme['$transition-fade']) + ';\n      }\n      &.show {\n        opacity: ' + props.theme['$modal-backdrop-opacity'] + ';\n      }\n    }\n      \n        \n    & .modal-header {\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: ' + props.theme['$modal-header-padding'] + ';\n      border-bottom: ' + props.theme['$modal-header-border-width'] + ' solid ' + props.theme['$modal-header-border-color'] + ';\n    }\n    \n    & .modal-title {\n      margin-bottom: 0;\n      line-height: ' + props.theme['$modal-title-line-height'] + ';\n    }\n    \n    & .modal-body {\n      position: relative;\n      flex: 1 1 auto;\n      padding: ' + props.theme['$modal-inner-padding'] + ';\n    }\n    \n    & .modal-footer {\n      display: flex;\n      align-items: center;\n      justify-content: flex-end;\n      padding: ' + props.theme['$modal-inner-padding'] + ';\n      border-top: ' + props.theme['$modal-footer-border-width'] + ' solid ' + props.theme['$modal-footer-border-color'] + ';\n      // Easily place margin between footer elements\n      > :not(:first-child) { margin-left: .25rem; }\n      > :not(:last-child) { margin-right: .25rem; }\n    }\n    \n\n  \n    // Scale up the modal\n    ' + breakpoints_6('sm', props.theme['$grid-breakpoints'], '\n        & .modal-dialog {\n          max-width: ' + props.theme['$modal-md'] + ';\n          margin: ' + props.theme['$modal-dialog-sm-up-margin-y'] + ' auto;\n        }\n      \n        & .modal-content {\n          ' + boxShadow_2(props.theme['$enable-shadows'], props.theme['$modal-content-sm-up-box-shadow']) + '\n        }\n      \n        & .modal-sm {\n          max-width: ' + props.theme['$modal-sm'] + ';\n        }\n      ') + '\n  \n\n    ' + breakpoints_6('lg', props.theme['$grid-breakpoints'], '\n        & .modal-lg {\n           max-width:  ' + props.theme['$modal-lg'] + '; \n         }\n      ') + '\n  ';
});
Modal.defaultProps = defaultProps$50;
Modal.propTypes = propTypes$55;

var defaultProps$51 = {
  tag: 'div'
};
var propTypes$56 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element]),
  cssModule: propTypes$1.object
};
var ModalBody = function ModalBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  return React.createElement(Tag, _extends({}, attributes, {
    className: mapToCssModules(classnames(className, 'modal-body'), cssModule)
  }));
};
ModalBody.propTypes = propTypes$56;
ModalBody.defaultProps = defaultProps$51;

var defaultProps$52 = {
  tag: 'div'
};
var propTypes$57 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element]),
  cssModule: propTypes$1.object
};
var ModalFooter = function ModalFooter(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  return React.createElement(Tag, _extends({}, attributes, {
    className: mapToCssModules(classnames(className, 'modal-footer'), cssModule)
  }));
};
ModalFooter.propTypes = propTypes$57;
ModalFooter.defaultProps = defaultProps$52;

var defaultProps$53 = {
  tag: H4,
  wrapTag: 'div'
};
var propTypes$58 = {
  className: propTypes$1.string,
  children: propTypes$1.node,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  wrapTag: propTypes$1.oneOfType([propTypes$1.func, propTypes$1.string]),
  toggle: propTypes$1.func,
  cssModule: propTypes$1.object
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
  var classes = mapToCssModules(classnames(className, 'modal-header'), cssModule);
  if (toggle) {
    closeButton = React.createElement(Close, { type: 'button', onDismiss: toggle, 'aria-label': 'Close' });
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
ModalHeader.propTypes = propTypes$58;
ModalHeader.defaultProps = defaultProps$53;

var defaultProps$54 = {
  tag: Ul,
  toggleable: 'false',
  theme: {
    '$enable-rounded': true,
    '$enable-hover-media-query': false,
    '$border-width': '1px',
    '$font-size-lg': '1.25rem',
    '$body-bg': '#fff',
    '$component-active-bg': '#0275d8',
    '$component-active-color': '#fff',
    '$border-radius': '.25rem',
    '$navbar-padding-x': '1rem',
    '$navbar-padding-y': '0.5rem',
    '$nav-link-padding': '.5em 1em',
    '$nav-disabled-link-color': '#636c72',
    '$nav-tabs-border-color': '#ddd',
    '$nav-tabs-border-width': '1px',
    '$nav-tabs-border-radius': '.5em 1em',
    '$nav-tabs-link-hover-border-color': '#eceeef',
    '$nav-tabs-active-link-hover-color': '#464a4c',
    '$nav-tabs-active-link-hover-bg': '#fff',
    '$nav-tabs-active-link-hover-border-color': '#ddd',
    '$nav-pills-border-radius': '.25rem',
    '$nav-pills-active-link-color': '#fff',
    '$nav-pills-active-link-bg': '#0275d8',
    '$cursor-disabled': 'not-allowed',
    '$zindex-navbar': '1000',
    '$zindex-navbar-fixed': '1030',
    '$zindex-navbar-sticky': '1030',
    '$navbar-brand-padding-y': '.25rem',
    '$navbar-divider-padding-y': '.425rem',
    '$navbar-toggler-padding-y': '.5rem',
    '$navbar-toggler-padding-x': '.75rem',
    '$navbar-toggler-font-size': '1.25rem',
    '$navbar-toggler-border-radius': '.25rem',
    '$navbar-light-active-color': 'rgba(0,0,0,.9)',
    '$navbar-light-color': 'rgba(0,0,0,.5)',
    '$navbar-light-hover-color': 'rgba(0,0,0,.7)',
    '$navbar-light-toggler-border': 'rgba(0,0,0,.1)',
    '$navbar-light-disabled-color': 'rgba(0, 0, 0, 0.3)',
    '$navbar-light-toggler-bg': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(0,0,0,.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')',
    '$navbar-inverse-active-color': 'rgba(255,255,255,1)',
    '$navbar-inverse-color': 'rgba(255,255,255,.5)',
    '$navbar-inverse-hover-color': 'rgba(255,255,255,.75)',
    '$navbar-inverse-toggler-border': 'rgba(255,255,255,.1)',
    '$navbar-inverse-toggler-bg': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(255,255,255,.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')',
    '$navbar-inverse-disabled-color': 'rgba(255, 255, 255, 0.25)'
  }
};
var propTypes$59 = {
  className: propTypes$1.string,
  toggleable: propTypes$1.string,
  inline: propTypes$1.bool,
  vertical: propTypes$1.bool,
  justified: propTypes$1.bool,
  fill: propTypes$1.bool,
  tabs: propTypes$1.bool,
  pills: propTypes$1.bool,
  stacked: propTypes$1.bool,
  navbar: propTypes$1.bool,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  theme: propTypes$1.shape({
    '$border-width': propTypes$1.string,
    '$font-size-lg': propTypes$1.string,
    '$body-bg': propTypes$1.string,
    '$component-active-bg': propTypes$1.string,
    '$component-active-color': propTypes$1.string,
    '$border-radius': propTypes$1.string,
    '$navbar-padding-x': propTypes$1.string,
    '$navbar-padding-y': propTypes$1.string,
    '$nav-link-padding': propTypes$1.string,
    '$nav-disabled-link-color': propTypes$1.string,
    '$nav-tabs-border-color': propTypes$1.string,
    '$nav-tabs-border-width': propTypes$1.string,
    '$nav-tabs-border-radius': propTypes$1.string,
    '$nav-tabs-link-hover-border-color': propTypes$1.string,
    '$nav-tabs-active-link-hover-color': propTypes$1.string,
    '$nav-tabs-active-link-hover-bg': propTypes$1.string,
    '$nav-tabs-active-link-hover-border-color': propTypes$1.string,
    '$nav-pills-border-radius': propTypes$1.string,
    '$nav-pills-active-link-color': propTypes$1.string,
    '$nav-pills-active-link-bg': propTypes$1.string,
    '$cursor-disabled': propTypes$1.string,
    '$zindex-navbar': propTypes$1.string,
    '$zindex-navbar-fixed': propTypes$1.string,
    '$zindex-navbar-sticky': propTypes$1.string,
    '$navbar-brand-padding-y': propTypes$1.string,
    '$navbar-divider-padding-y': propTypes$1.string,
    '$navbar-toggler-padding-y': propTypes$1.string,
    '$navbar-toggler-padding-x': propTypes$1.string,
    '$navbar-toggler-font-size': propTypes$1.string,
    '$navbar-toggler-border-radius': propTypes$1.string,
    '$navbar-light-active-color': propTypes$1.string,
    '$navbar-light-color': propTypes$1.string,
    '$navbar-light-hover-color': propTypes$1.string,
    '$navbar-light-toggler-border': propTypes$1.string,
    '$navbar-light-disabled-color': propTypes$1.string,
    '$navbar-light-toggler-bg': propTypes$1.string,
    '$navbar-inverse-active-color': propTypes$1.string,
    '$navbar-inverse-color': propTypes$1.string,
    '$navbar-inverse-hover-color': propTypes$1.string,
    '$navbar-inverse-toggler-border': propTypes$1.string,
    '$navbar-inverse-toggler-bg': propTypes$1.string,
    '$navbar-inverse-disabled-color': propTypes$1.string
  }),
  cssModule: propTypes$1.object
};
var NavUnstyled = function (_React$Component) {
  inherits(NavUnstyled, _React$Component);
  function NavUnstyled() {
    classCallCheck(this, NavUnstyled);
    return possibleConstructorReturn(this, (NavUnstyled.__proto__ || Object.getPrototypeOf(NavUnstyled)).apply(this, arguments));
  }
  createClass(NavUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
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
      var classes = mapToCssModules(classnames(className, navbar$$1 ? 'navbar-nav' : 'nav', {
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
NavUnstyled.defaultProps = defaultProps$54;
NavUnstyled.propTypes = propTypes$59;
var Nav = styled(NavUnstyled).withConfig({
  displayName: 'Nav'
})(['', ''], function (props) {
  return '\n    ' + nav_3(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$nav-link-padding'], props.theme['$nav-disabled-link-color'], props.theme['$cursor-disabled'], props.theme['$nav-tabs-border-width'], props.theme['$nav-tabs-border-color'], props.theme['$nav-tabs-border-radius'], props.theme['$nav-tabs-link-hover-border-color'], props.theme['$nav-tabs-active-link-hover-color'], props.theme['$nav-tabs-active-link-hover-bg'], props.theme['$nav-tabs-active-link-hover-border-color'], props.theme['$nav-pills-border-radius'], props.theme['$nav-pills-active-link-color'], props.theme['$nav-pills-active-link-bg']) + '\n    \n    ' + navbar_3(props.theme['$grid-breakpoints'], props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$navbar-padding-y'], props.theme['$navbar-padding-x'], props.theme['$zindex-navbar'], props.theme['$zindex-navbar-fixed'], props.theme['$zindex-navbar-sticky'], props.theme['$navbar-brand-padding-y'], props.theme['$font-size-lg'], props.theme['$navbar-divider-padding-y'], props.theme['$navbar-toggler-padding-y'], props.theme['$navbar-toggler-padding-x'], props.theme['$navbar-toggler-font-size'], props.theme['$border-width'], props.theme['$navbar-toggler-border-radius'], props.theme['$navbar-light-active-color'], props.theme['$navbar-light-color'], props.theme['$navbar-light-hover-color'], props.theme['$navbar-light-toggler-border'], props.theme['$navbar-light-disabled-color'], props.theme['$navbar-light-toggler-bg'], props.theme['$navbar-inverse-active-color'], props.theme['$navbar-inverse-color'], props.theme['$navbar-inverse-hover-color'], props.theme['$navbar-inverse-toggler-border'], props.theme['$navbar-inverse-toggler-bg'], props.theme['$navbar-inverse-disabled-color']) + '\n  ';
});
Nav.defaultProps = defaultProps$54;
Nav.propTypes = propTypes$59;

var defaultProps$55 = {
  tag: A
};
var propTypes$60 = {
  className: propTypes$1.string,
  innerRef: propTypes$1.func,
  disabled: propTypes$1.bool,
  active: propTypes$1.bool,
  onClick: propTypes$1.func,
  href: propTypes$1.any,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  cssModule: propTypes$1.object
};
var NavLink = function (_React$Component) {
  inherits(NavLink, _React$Component);
  function NavLink(props) {
    classCallCheck(this, NavLink);
    var _this = possibleConstructorReturn(this, (NavLink.__proto__ || Object.getPrototypeOf(NavLink)).call(this, props));
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }
  createClass(NavLink, [{
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
          innerRef = _props.innerRef,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'active', 'tag', 'innerRef']);
      var classes = mapToCssModules(classnames(className, 'nav-link', {
        disabled: attributes.disabled,
        active: active
      }), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { ref: innerRef, onClick: this.onClick, className: classes }));
    }
  }]);
  return NavLink;
}(React.Component);
NavLink.defaultProps = defaultProps$55;
NavLink.propTypes = propTypes$60;
NavLink.defaultProps = defaultProps$55;
NavLink.propTypes = propTypes$60;

var defaultProps$56 = {
  tag: 'li'
};
var propTypes$61 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  cssModule: propTypes$1.object
};
var NavItem = function (_React$Component) {
  inherits(NavItem, _React$Component);
  function NavItem() {
    classCallCheck(this, NavItem);
    return possibleConstructorReturn(this, (NavItem.__proto__ || Object.getPrototypeOf(NavItem)).apply(this, arguments));
  }
  createClass(NavItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'tag']);
      var classes = mapToCssModules(classnames(className, 'nav-item'), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return NavItem;
}(React.Component);
NavItem.defaultProps = defaultProps$56;
NavItem.propTypes = propTypes$61;
NavItem.defaultProps = defaultProps$56;
NavItem.propTypes = propTypes$61;

var defaultProps$57 = {
  theme: {
    '$list-inline-padding': '5px'
  }
};
var propTypes$62 = {
  theme: propTypes$1.shape({
    '$list-inline-padding': propTypes$1.string
  })
};
var Ol = styled.ol.withConfig({
  displayName: 'Ol'
})(['', ''], function (props) {
  return '\n    /* Type Scss */\n    &.list-unstyled {\n      ' + lists_1() + '\n    }\n\n    &.list-inline {\n      ' + lists_2() + '\n    }\n\n    &.list-inline-item {\n      ' + lists_3(props.theme['$list-inline-padding']) + '\n    }\n\n    /* Reboot Scss */\n    margin-top: 0;\n    margin-bottom: 1rem;\n\n    & ol,\n    & ul {\n      margin-bottom: 0;\n    }\n  ';
});
Ol.defaultProps = defaultProps$57;
Ol.propTypes = propTypes$62;

var Option = styled.option.withConfig({
  displayName: 'Option'
})(['']);

var OutputUnstyled = function (_React$Component) {
  inherits(OutputUnstyled, _React$Component);
  function OutputUnstyled() {
    classCallCheck(this, OutputUnstyled);
    return possibleConstructorReturn(this, (OutputUnstyled.__proto__ || Object.getPrototypeOf(OutputUnstyled)).apply(this, arguments));
  }
  createClass(OutputUnstyled, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          rest = objectWithoutProperties(_props, ['className']);
      return React.createElement('output', _extends({
        className: classnames(className, 'output')
      }, rest));
    }
  }]);
  return OutputUnstyled;
}(React.Component);
OutputUnstyled.propTypes = {
  className: propTypes$1.string
};
var Output = styled(OutputUnstyled).withConfig({
  displayName: 'Output'
})(['&.output{display:inline-block;}']);

var defaultProps$58 = {
  theme: {
    '$grid-breakpoints': {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    '$enable-rounded': true,
    '$enable-hover-media-query': false,
    '$font-size-h1': '2.5rem',
    '$font-size-h2': '2rem',
    '$font-size-h3': '1.75rem',
    '$font-size-h4': '1.5rem',
    '$font-size-h5': '1.25rem',
    '$font-size-h6': '1rem',
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
    '$display4-weight': '300',
    '$display-line-height': '1.1',
    '$lead-font-size': '1.25rem',
    '$lead-font-weight': '300'
  }
};
var propTypes$63 = {
  className: propTypes$1.string,
  children: propTypes$1.node,
  color: propTypes$1.oneOf(['white', 'muted', 'gray-dark', 'primary', 'success', 'info', 'warning', 'danger']),
  lead: propTypes$1.bool,
  theme: propTypes$1.shape({
    '$enable-rounded': propTypes$1.bool,
    '$enable-hover-media-query': propTypes$1.bool,
    '$grid-breakpoints': propTypes$1.object,
    '$font-size-h1': propTypes$1.string,
    '$font-size-h2': propTypes$1.string,
    '$font-size-h3': propTypes$1.string,
    '$font-size-h4': propTypes$1.string,
    '$font-size-h5': propTypes$1.string,
    '$font-size-h6': propTypes$1.string,
    '$headings-margin-bottom': propTypes$1.string,
    '$headings-font-family': propTypes$1.string,
    '$headings-font-weight': propTypes$1.string,
    '$headings-line-height': propTypes$1.string,
    '$headings-color': propTypes$1.string,
    '$display1-size': propTypes$1.string,
    '$display2-size': propTypes$1.string,
    '$display3-size': propTypes$1.string,
    '$display4-size': propTypes$1.string,
    '$display1-weight': propTypes$1.string,
    '$display2-weight': propTypes$1.string,
    '$display3-weight': propTypes$1.string,
    '$display4-weight': propTypes$1.string,
    '$display-line-height': propTypes$1.string,
    '$lead-font-size': propTypes$1.string,
    '$lead-font-weight': propTypes$1.string
  }),
  cssModule: propTypes$1.object
};
var PUnstyled = function (_React$Component) {
  inherits(PUnstyled, _React$Component);
  function PUnstyled() {
    classCallCheck(this, PUnstyled);
    return possibleConstructorReturn(this, (PUnstyled.__proto__ || Object.getPrototypeOf(PUnstyled)).apply(this, arguments));
  }
  createClass(PUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          color = _omit.color,
          children = _omit.children,
          cssModule = _omit.cssModule,
          lead = _omit.lead,
          attributes = objectWithoutProperties(_omit, ['className', 'color', 'children', 'cssModule', 'lead']);
      var classes = mapToCssModules(classnames(className, lead ? 'lead' : false, color ? 'text-' + color : false), cssModule);
      return React.createElement(
        'p',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return PUnstyled;
}(React.Component);
PUnstyled.defaultProps = defaultProps$58;
PUnstyled.propTypes = propTypes$63;
var P = styled(PUnstyled).withConfig({
  displayName: 'P'
})(['', ''], function (props) {
  return '\n    /* Type Scss */\n\n    &.lead {\n      font-size: ' + props.theme['$lead-font-size'] + ';\n      font-weight: ' + props.theme['$lead-font-weight'] + ';\n    }\n    \n    &.h1{\n      font-size: ' + props.theme['$font-size-h1'] + ';\n      ' + typography_2(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n    }\n    \n    &.h2{\n      font-size: ' + props.theme['$font-size-h2'] + ';\n      ' + typography_2(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n    }\n    \n    &.h3{\n      font-size: ' + props.theme['$font-size-h3'] + ';\n      ' + typography_2(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n    }\n    \n    &.h4{\n      font-size: ' + props.theme['$font-size-h4'] + ';\n      ' + typography_2(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n    }\n    \n    &.h5{\n      font-size: ' + props.theme['$font-size-h5'] + ';\n      ' + typography_2(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n    }\n    \n    &.h6{\n      font-size: ' + props.theme['$font-size-h6'] + ';\n      ' + typography_2(props.theme['$headings-margin-bottom'], props.theme['$headings-font-family'], props.theme['$headings-font-weight'], props.theme['$headings-line-height'], props.theme['$headings-color'], props.theme['$display1-size'], props.theme['$display2-size'], props.theme['$display3-size'], props.theme['$display4-size'], props.theme['$display1-weight'], props.theme['$display2-weight'], props.theme['$display3-weight'], props.theme['$display4-weight']) + '\n    }\n    \n    /* Reboot Scss */\n    margin-top: 0;   \n    margin-bottom: 1rem;\n  ';
});

var paginations$1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paginationSize = exports.defaultProps = undefined;
exports.pagination = pagination;
var defaultProps = exports.defaultProps = {
  '$enable-rounded': true,
  '$enable-hover-media-query': false,
  '$border-radius': '.25rem',
  '$pagination-active-color': '#fff',
  '$pagination-active-bg': '#0275d8',
  '$pagination-active-border': '#0275d8',
  '$pagination-disabled-color': '#636c72',
  '$cursor-disabled': 'not-allowed',
  '$pagination-disabled-bg': '#fff',
  '$pagination-disabled-border': '#ddd',
  '$pagination-padding-y': '.5rem',
  '$pagination-padding-x': '.75rem',
  '$pagination-line-height': '1.25',
  '$pagination-color': '#0275d8',
  '$pagination-bg': '#fff',
  '$pagination-border-width': '1px',
  '$pagination-border-color': '#ddd',
  '$pagination-hover-color': 'hsl(207.79999999999995, 98.2%, 27.8%)',
  '$pagination-hover-bg': '#eceeef',
  '$pagination-hover-border': '#ddd',
  '$pagination-padding-y-lg': '.75rem',
  '$pagination-padding-x-lg': '1.5rem',
  '$font-size-lg': '1.25rem',
  '$line-height-lg': '1.3',
  '$border-radius-lg': '.3rem',
  '$pagination-padding-y-sm': '.25rem',
  '$pagination-padding-x-sm': '.5rem',
  '$font-size-sm': '.875rem',
  '$line-height-sm': '1.5',
  '$border-radius-sm': '.2rem'
};
var paginationSize = exports.paginationSize = function paginationSize() {
  var enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var paddingY = arguments[1];
  var paddingX = arguments[2];
  var fontSize = arguments[3];
  var borderRadiusPagination = arguments[4];
  return '\n  .page-link {\n    padding: ' + paddingY + ' ' + paddingX + ';\n    font-size: ' + fontSize + ';\n  }\n\n  .page-item {\n    &:first-child {\n      .page-link {\n        ' + (_borderRadius.borderLeftRadius)(enableRounded, borderRadiusPagination) + '\n      }\n    }\n    &:last-child {\n      .page-link {\n        ' + (_borderRadius.borderRightRadius)(enableRounded, borderRadiusPagination) + '\n      }\n    }\n  }\n';
};
function pagination() {
  var $enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var $enableHoverMediaQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$enable-hover-media-query'];
  var $borderRadius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$border-radius'];
  var $paginationActiveColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$pagination-active-color'];
  var $paginationActiveBg = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$pagination-active-bg'];
  var $paginationActiveBorder = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$pagination-active-border'];
  var $paginationDisabledColor = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$pagination-disabled-color'];
  var $cursorDisabled = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$cursor-disabled'];
  var $paginationDisabledBg = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$pagination-disabled-bg'];
  var $paginationDisabledBorder = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$pagination-disabled-border'];
  var $paginationPaddingY = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$pagination-padding-y'];
  var $paginationPaddingX = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps['$pagination-padding-x'];
  var $paginationLineHeight = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps['$pagination-line-height'];
  var $paginationColor = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps['$pagination-color'];
  var $paginationBg = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps['$pagination-bg'];
  var $paginationBorderWidth = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps['$pagination-border-width'];
  var $paginationBorderColor = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps['$pagination-border-color'];
  var $paginationHoverColor = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps['$pagination-hover-color'];
  var $paginationHoverBg = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps['$pagination-hover-bg'];
  var $paginationHoverBorder = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps['$pagination-hover-border'];
  var $paginationPaddingYLg = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps['$pagination-padding-y-lg'];
  var $paginationPaddingXLg = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps['$pagination-padding-x-lg'];
  var $fontSizeLg = arguments.length > 22 && arguments[22] !== undefined ? arguments[22] : defaultProps['$font-size-lg'];
  var $lineHeightLg = arguments.length > 23 && arguments[23] !== undefined ? arguments[23] : defaultProps['$line-height-lg'];
  var $borderRadiusLg = arguments.length > 24 && arguments[24] !== undefined ? arguments[24] : defaultProps['$border-radius-lg'];
  var $paginationPaddingYSm = arguments.length > 25 && arguments[25] !== undefined ? arguments[25] : defaultProps['$pagination-padding-y-sm'];
  var $paginationPaddingXSm = arguments.length > 26 && arguments[26] !== undefined ? arguments[26] : defaultProps['$pagination-padding-x-sm'];
  var $fontSizeSm = arguments.length > 27 && arguments[27] !== undefined ? arguments[27] : defaultProps['$font-size-sm'];
  var $lineHeightSm = arguments.length > 28 && arguments[28] !== undefined ? arguments[28] : defaultProps['$line-height-sm'];
  var $borderRadiusSm = arguments.length > 29 && arguments[29] !== undefined ? arguments[29] : defaultProps['$border-radius-sm'];
  return '\n  &.pagination {\n    display: flex;\n    padding-left: 0;\n    list-style: none; \n    ' + (_borderRadius.borderRadius)($enableRounded) + '\n  }\n  \n  & .page-item {\n    &:first-child {\n      .page-link {\n        margin-left: 0;\n        ' + (_borderRadius.borderLeftRadius)($enableRounded, $borderRadius) + '\n      }\n    }\n    &:last-child {\n      .page-link {\n      ' + (_borderRadius.borderRightRadius)($enableRounded, $borderRadius) + '\n      }\n    }\n  \n    &.active .page-link {\n      z-index: 2;\n      color: ' + $paginationActiveColor + ';\n      background-color: ' + $paginationActiveBg + ';\n      border-color: ' + $paginationActiveBorder + ';\n    }\n  \n    &.disabled .page-link {\n      color: ' + $paginationDisabledColor + ';\n      pointer-events: none;\n      cursor: ' + $cursorDisabled + ';\n      background-color: ' + $paginationDisabledBg + ';\n      border-color: ' + $paginationDisabledBorder + ';\n    }\n  }\n  \n  & .page-link {\n    position: relative;\n    display: block;\n    padding: ' + $paginationPaddingY + ' ' + $paginationPaddingX + ';\n    margin-left: -1px;\n    line-height: ' + $paginationLineHeight + ';\n    color: ' + $paginationColor + ';\n    background-color: ' + $paginationBg + ';\n    border: ' + $paginationBorderWidth + ' solid ' + $paginationBorderColor + ';\n    \n    ' + (_hover.hoverFocus)($enableHoverMediaQuery, '\n      color: ' + $paginationHoverColor + ';\n      text-decoration: none;\n      background-color: ' + $paginationHoverBg + ';\n      border-color: ' + $paginationHoverBorder + ';\n    ') + '\n  }\n  \n  /* Sizing */\n  &.pagination-lg {\n  ' + paginationSize($enableRounded, $paginationPaddingYLg, $paginationPaddingXLg, $fontSizeLg, $lineHeightLg, $borderRadiusLg) + '\n  }\n  \n  &.pagination-sm {\n  ' + paginationSize($enableRounded, $paginationPaddingYSm, $paginationPaddingXSm, $fontSizeSm, $lineHeightSm, $borderRadiusSm) + '\n  }\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  paginationSize: paginationSize,
  pagination: pagination
};
});
unwrapExports(paginations$1);
var paginations_3 = paginations$1.pagination;

var defaultProps$59 = {
  tag: 'ul',
  theme: {
    '$enable-rounded': true,
    '$enable-hover-media-query': false,
    '$pagination-padding-x': '.75rem',
    '$pagination-padding-y': '.5rem',
    '$pagination-padding-x-sm': '.5rem',
    '$pagination-padding-y-sm': '.25rem',
    '$pagination-padding-x-lg': '1.5rem',
    '$pagination-padding-y-lg': '.75rem',
    '$pagination-line-height': '1.25',
    '$pagination-color': '#0275d8',
    '$pagination-bg': '#fff',
    '$pagination-border-width': '1px',
    '$pagination-border-color': '#ddd',
    '$pagination-hover-color': 'hsl(207.79999999999995, 98.2%, 27.8%)',
    '$pagination-hover-bg': '#eceeef',
    '$pagination-hover-border': '#ddd',
    '$pagination-active-color': '#fff',
    '$pagination-active-bg': '#0275d8',
    '$pagination-active-border': '#0275d8',
    '$pagination-disabled-color': '#636c72',
    '$pagination-disabled-bg': '#fff',
    '$pagination-disabled-border': '#ddd'
  }
};
var propTypes$64 = {
  className: propTypes$1.string,
  children: propTypes$1.node,
  size: propTypes$1.oneOf(['sm', 'lg']),
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  theme: propTypes$1.shape({
    '$enable-rounded': propTypes$1.bool,
    '$enable-hover-media-query': propTypes$1.bool,
    '$pagination-padding-x': propTypes$1.string,
    '$pagination-padding-y': propTypes$1.string,
    '$pagination-padding-x-sm': propTypes$1.string,
    '$pagination-padding-y-sm': propTypes$1.string,
    '$pagination-padding-x-lg': propTypes$1.string,
    '$pagination-padding-y-lg': propTypes$1.string,
    '$pagination-line-height': propTypes$1.string,
    '$pagination-color': propTypes$1.string,
    '$pagination-bg': propTypes$1.string,
    '$pagination-border-width': propTypes$1.string,
    '$pagination-border-color': propTypes$1.string,
    '$pagination-hover-color': propTypes$1.string,
    '$pagination-hover-bg': propTypes$1.string,
    '$pagination-hover-border': propTypes$1.string,
    '$pagination-active-color': propTypes$1.string,
    '$pagination-active-bg': propTypes$1.string,
    '$pagination-active-border': propTypes$1.string,
    '$pagination-disabled-color': propTypes$1.string,
    '$pagination-disabled-bg': propTypes$1.string,
    '$pagination-disabled-border': propTypes$1.string
  }),
  color: propTypes$1.oneOf(['white', 'muted', 'gray-dark', 'primary', 'success', 'info', 'warning', 'danger']),
  cssModule: propTypes$1.object
};
var PaginationUnstyled = function (_React$Component) {
  inherits(PaginationUnstyled, _React$Component);
  function PaginationUnstyled() {
    classCallCheck(this, PaginationUnstyled);
    return possibleConstructorReturn(this, (PaginationUnstyled.__proto__ || Object.getPrototypeOf(PaginationUnstyled)).apply(this, arguments));
  }
  createClass(PaginationUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          size = _omit.size,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'tag', 'size']);
      var classes = mapToCssModules(classnames(className, 'pagination', defineProperty({}, 'pagination-' + size, !!size)), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return PaginationUnstyled;
}(React.Component);
PaginationUnstyled.defaultProps = defaultProps$59;
PaginationUnstyled.propTypes = propTypes$64;
var Pagination = styled(PaginationUnstyled).withConfig({
  displayName: 'Pagination'
})(['', ''], function (props) {
  return '\n    ' + paginations_3(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$border-radius'], props.theme['$pagination-active-color'], props.theme['$pagination-active-bg'], props.theme['$pagination-active-border'], props.theme['$pagination-disabled-color'], props.theme['$cursor-disabled'], props.theme['$pagination-disabled-bg'], props.theme['$pagination-disabled-border'], props.theme['$pagination-padding-y'], props.theme['$pagination-padding-x'], props.theme['$pagination-line-height'], props.theme['$pagination-color'], props.theme['$pagination-bg'], props.theme['$pagination-border-width'], props.theme['$pagination-border-color'], props.theme['$pagination-hover-color'], props.theme['$pagination-hover-bg'], props.theme['$pagination-hover-border'], props.theme['$pagination-padding-y-lg'], props.theme['$pagination-padding-x-lg'], props.theme['$font-size-lg'], props.theme['$line-height-lg'], props.theme['$border-radius-lg'], props.theme['$pagination-padding-y-sm'], props.theme['$pagination-padding-x-sm'], props.theme['$font-size-sm'], props.theme['$line-height-sm'], props.theme['$border-radius-sm']) + '\n  ';
});
Pagination.defaultProps = defaultProps$59;
Pagination.propTypes = propTypes$64;

var PaginationItem = function (_React$Component) {
  inherits(PaginationItem, _React$Component);
  function PaginationItem() {
    classCallCheck(this, PaginationItem);
    return possibleConstructorReturn(this, (PaginationItem.__proto__ || Object.getPrototypeOf(PaginationItem)).apply(this, arguments));
  }
  createClass(PaginationItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          className = _props.className,
          cssModule = _props.cssModule,
          disabled = _props.disabled,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['active', 'className', 'cssModule', 'disabled', 'tag']);
      var classes = mapToCssModules(classnames(className, 'page-item', {
        active: active,
        disabled: disabled
      }), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return PaginationItem;
}(React.Component);
PaginationItem.defaultProps = {
  tag: 'li'
};
PaginationItem.propTypes = {
  active: propTypes$1.bool,
  className: propTypes$1.string,
  children: propTypes$1.node,
  cssModule: propTypes$1.object,
  disabled: propTypes$1.bool,
  tag: propTypes$1.oneOfType([propTypes$1.func, propTypes$1.string])
};

var PaginationLink = function (_React$Component) {
  inherits(PaginationLink, _React$Component);
  function PaginationLink() {
    classCallCheck(this, PaginationLink);
    return possibleConstructorReturn(this, (PaginationLink.__proto__ || Object.getPrototypeOf(PaginationLink)).apply(this, arguments));
  }
  createClass(PaginationLink, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          next = _props.next,
          previous = _props.previous,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'next', 'previous', 'tag']);
      var classes = mapToCssModules(classnames(className, 'page-link'), cssModule);
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
PaginationLink.defaultProps = {
  tag: A
};
PaginationLink.propTypes = {
  'aria-label': propTypes$1.string,
  className: propTypes$1.string,
  children: propTypes$1.node,
  cssModule: propTypes$1.object,
  next: propTypes$1.bool,
  previous: propTypes$1.bool,
  tag: propTypes$1.oneOfType([propTypes$1.func, propTypes$1.string])
};

var defaultProps$60 = {
  theme: {
    '$code-font-size': '90%',
    '$pre-color': '#292b2c',
    '$pre-scrollable-max-height': '340px',
    '$font-family-monospace': 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  }
};
var propTypes$65 = {
  theme: propTypes$1.shape({
    '$code-font-size': propTypes$1.string,
    '$pre-color': propTypes$1.string,
    '$pre-scrollable-max-height': propTypes$1.string,
    '$font-family-monospace': propTypes$1.string
  })
};
var Pre = styled.pre.withConfig({
  displayName: 'Pre'
})(['', ''], function (props) {
  return '\n    /* Blocks of code */\n    display: block;\n    margin-top: 0;\n    margin-bottom: 1rem;\n    font-size: ' + props.theme['$code-font-size'] + ';\n    color: ' + props.theme['$pre-color'] + ';\n    \n    /* Enable scrollable blocks of code */\n    /* AJT This class was present in bootstrap/scss/code.scss  We must decide if this class should be a mixin or not! */\n    &.pre-scrollable {\n      max-height: ' + props.theme['$pre-scrollable-max-height'] + ';\n      overflow-y: scroll;\n    }\n\n  \n    /* Account for some code outputs that place code tags in pre tags */\n    code {\n      padding: 0;\n      font-size: inherit;\n      color: inherit;\n      background-color: transparent;\n      border-radius: 0;\n    }\n    \n    /* Reboot Scss */\n\n    /* Remove browser default top margin */\n    margin-top: 0;\n    /* Reset browser default of \'1em\' to use \'rem\'s */\n    margin-bottom: 1rem;\n    /* Normalize v4 removed this property, causing \'pre\' content to break out of wrapping code snippets */\n    overflow: auto;\n    \n    /* Bootstrap 4 does not place this css rule straight into Kbd tag see: bootstrap/scss/code.scss */\n    font-family: ' + props.theme['$font-family-monospace'] + ';\n  ';
});
Pre.defaultProps = defaultProps$60;
Pre.propTypes = propTypes$65;

var gradients$1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gradientX = gradientX;
exports.gradientY = gradientY;
exports.gradientDirectional = gradientDirectional;
exports.gradientXThreeColors = gradientXThreeColors;
exports.gradientYThreeColors = gradientYThreeColors;
exports.gradientRadial = gradientRadial;
exports.gradientStriped = gradientStriped;
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
exports.default = {
  x: gradientX,
  y: gradientY,
  directional: gradientDirectional,
  xThreeColors: gradientXThreeColors,
  yThreeColors: gradientYThreeColors,
  radial: gradientRadial,
  striped: gradientStriped
};
});
unwrapExports(gradients$1);
var gradients_7 = gradients$1.gradientStriped;

var defaultProps$61 = {
  theme: {
    '$enable-rounded': true,
    '$enable-hover-media-query': false,
    '$progress-height': '1rem',
    '$progress-font-size': '.75rem',
    '$progress-bg': '#eceeef',
    '$progress-border-radius': '.25rem',
    '$progress-box-shadow': 'inset 0 .1rem .1rem rgba(0, 0, 0, 0.1)',
    '$progress-bar-color': '#fff',
    '$progress-bar-bg': '#0275d8',
    '$progress-bar-animation-timing': '1s linear infinite'
  }
};
var propTypes$66 = {
  className: propTypes$1.string,
  children: propTypes$1.node,
  theme: propTypes$1.shape({
    '$enable-rounded': propTypes$1.bool,
    '$enable-hover-media-query': propTypes$1.bool,
    '$progress-height': propTypes$1.string,
    '$progress-font-size': propTypes$1.string,
    '$progress-bg': propTypes$1.string,
    '$progress-border-radius': propTypes$1.string,
    '$progress-box-shadow': propTypes$1.string,
    '$progress-bar-color': propTypes$1.string,
    '$progress-bar-bg': propTypes$1.string,
    '$progress-bar-animation-timing': propTypes$1.string
  })
};
var ProgressUnstyled = function (_React$Component) {
  inherits(ProgressUnstyled, _React$Component);
  function ProgressUnstyled() {
    classCallCheck(this, ProgressUnstyled);
    return possibleConstructorReturn(this, (ProgressUnstyled.__proto__ || Object.getPrototypeOf(ProgressUnstyled)).apply(this, arguments));
  }
  createClass(ProgressUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          children = _omit.children,
          className = _omit.className,
          rest = objectWithoutProperties(_omit, ['children', 'className']);
      return React.createElement(
        'div',
        _extends({ className: classnames('progress', className) }, rest),
        children
      );
    }
  }]);
  return ProgressUnstyled;
}(React.Component);
ProgressUnstyled.defaultProps = defaultProps$61;
ProgressUnstyled.propTypes = propTypes$66;
var backgroundPositionKeyFrame = function backgroundPositionKeyFrame(props) {
  return keyframes(['from{background-position:', ' 0;}to{background-position:0 0;}'], props.theme['$progress-height']);
};
var Progress = styled(ProgressUnstyled).withConfig({
  displayName: 'Progress'
})(['', ''], function (props) {
  return '\n    \n    &.progress {\n      display: flex;\n      overflow: hidden; // force rounded corners by cropping it\n      font-size: ' + props.theme['$progress-font-size'] + ';\n      line-height: ' + props.theme['$progress-height'] + ';\n      text-align: center;\n      background-color: ' + props.theme['$progress-bg'] + ';\n      ' + borderRadius_2(props.theme['$enable-rounded'], props.theme['$progress-border-radius']) + '\n      ' + background_9(props.theme['$enable-hover-media-query'], props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$brand-inverse'], props.theme['$gray-lightest']) + '\n    }\n    \n    .progress-bar {\n      height: ' + props.theme['$progress-height'] + ';\n      line-height: ' + props.theme['$progress-height'] + ';\n      color: ' + props.theme['$progress-bar-color'] + ';\n      background-color: ' + props.theme['$progress-bar-bg'] + ';\n    }\n    \n    .progress-bar-striped {\n      ' + gradients_7() + '\n      background-size: ' + props.theme['$progress-height'] + ' ' + props.theme['$progress-height'] + ';\n      background-repeat: repeat; /* Not present in bootstrap original but required to repeat the background */\n    }\n    \n    .progress-bar-animated {\n      animation: ' + backgroundPositionKeyFrame(props) + ' ' + props.theme['$progress-bar-animation-timing'] + ';\n    }\n\n  ';
});
Progress.defaultProps = defaultProps$61;
Progress.propTypes = propTypes$66;

var asyncGenerator$2 = function () {
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
var classCallCheck$2 = function (instance, Constructor) {
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
var RangeUtils = function () {
  function RangeUtils() {
    classCallCheck$2(this, RangeUtils);
  }
  createClass$1(RangeUtils, [{
    key: "mapBetween",
    value: function mapBetween(valueNow, valueMin, valueMax) {
      var rangeMin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var rangeMax = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 100;
      return (rangeMax - rangeMin) * (valueNow - valueMin) / (valueMax - valueMin) + rangeMin;
    }
  }]);
  return RangeUtils;
}();
var index$1 = new RangeUtils();

var defaultProps$62 = {
  valueMin: 0,
  valueMax: 100,
  valueNow: 0,
  striped: false,
  animated: false
};
var propTypes$67 = {
  className: propTypes$1.string,
  children: propTypes$1.node,
  valueMin: propTypes$1.number,
  valueNow: propTypes$1.number,
  valueMax: propTypes$1.number,
  height: propTypes$1.string,
  striped: propTypes$1.bool,
  animated: propTypes$1.bool,
  color: propTypes$1.oneOf(['success', 'info', 'warning', 'danger', '']),
  cssModule: propTypes$1.object
};
var ProgressBar = function (_React$Component) {
  inherits(ProgressBar, _React$Component);
  function ProgressBar() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck(this, ProgressBar);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      classNameProgress: '',
      classNameProgressBar: ''
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }
  createClass(ProgressBar, [{
    key: 'getWidth',
    value: function getWidth(valueNow, valueMin, valueMax) {
      return index$1.mapBetween(valueNow, valueMin, valueMax) + '%';
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
      var progressBarClasses = mapToCssModules(classnames(className, 'progress-bar', animated ? 'progress-bar-animated' : null, color ? 'bg-' + color : null, striped || animated ? 'progress-bar-striped' : null), cssModule);
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
ProgressBar.defaultProps = defaultProps$62;
ProgressBar.propTypes = propTypes$67;
ProgressBar.defaultProps = defaultProps$62;
ProgressBar.propTypes = propTypes$67;

var defaultProps$63 = {
  tag: 'div',
  theme: {
    '$grid-gutter-widths': {
      xs: '30px',
      sm: '30px',
      md: '30px',
      lg: '30px',
      xl: '30px'
    },
    '$enable-grid-classes': false
  }
};
var propTypes$68 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element]),
  noGutters: propTypes$1.bool,
  theme: propTypes$1.shape({
    '$grid-gutter-widths': propTypes$1.object,
    '$enable-grid-classes': propTypes$1.bool
  }),
  cssModule: propTypes$1.object
};
var RowUnstyled = function (_React$Component) {
  inherits(RowUnstyled, _React$Component);
  function RowUnstyled() {
    classCallCheck(this, RowUnstyled);
    return possibleConstructorReturn(this, (RowUnstyled.__proto__ || Object.getPrototypeOf(RowUnstyled)).apply(this, arguments));
  }
  createClass(RowUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          noGutters = _omit.noGutters,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'noGutters', 'tag']);
      var classes = mapToCssModules(classnames(className, noGutters ? 'no-gutters' : null, 'row'), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return RowUnstyled;
}(React.Component);
RowUnstyled.defaultProps = defaultProps$63;
RowUnstyled.propTypes = propTypes$68;
var Row = styled(RowUnstyled).withConfig({
  displayName: 'Row'
})(['', ''], function (props) {
  return '\n    &.row {\n      ' + grid_5(props.theme['$enable-grid-classes'], props.theme['$grid-gutter-widths']) + '\n    }\n    /*\n      Remove the negative margin from default .row, then the horizontal padding\n      from all immediate children columns (to prevent runaway style inheritance).\n    */\n\n    &.no-gutters {\n      margin-right: 0;\n      margin-left: 0;\n\n      > .col,\n      > [class*="col-"] {\n        padding-right: 0;\n        padding-left: 0;\n      }\n    }\n ';
});
Row.defaultProps = defaultProps$63;
Row.propTypes = propTypes$68;

var Samp = styled.samp.withConfig({
  displayName: 'Samp'
})(['font-family:monospace,monospace;font-size:1em;']);

var Section = styled.section.withConfig({
  displayName: 'Section'
})(['']);

var propTypes$69 = {
  className: propTypes$1.string,
  children: propTypes$1.node
};
var SelectUnstyled = function (_React$Component) {
  inherits(SelectUnstyled, _React$Component);
  function SelectUnstyled() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck(this, SelectUnstyled);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = SelectUnstyled.__proto__ || Object.getPrototypeOf(SelectUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      className: null
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }
  createClass(SelectUnstyled, [{
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
      var _omit = lodash_omit(this.props, ['className']),
          children = _omit.children,
          rest = objectWithoutProperties(_omit, ['children']);
      return React.createElement(
        'select',
        _extends({
          className: classnames(this.state.className, 'select')
        }, rest),
        children
      );
    }
  }]);
  return SelectUnstyled;
}(React.Component);
SelectUnstyled.propTypes = propTypes$69;
var Select = styled(SelectUnstyled).withConfig({
  displayName: 'Select'
})(['&.select{touch-action:manipulation;line-height:inherit;}&:disabled{color:graytext;}']);
Select.propTypes = propTypes$69;

var defaultProps$64 = {
  theme: {
    '$small-font-size': '80%'
  }
};
var propTypes$70 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element]),
  children: propTypes$1.node,
  theme: propTypes$1.shape({
    '$small-font-size': propTypes$1.string
  }),
  color: propTypes$1.oneOf(['white', 'muted', 'gray-dark', 'primary', 'success', 'info', 'warning', 'danger']),
  cssModule: propTypes$1.object
};
var SmallUnstyled = function (_React$Component) {
  inherits(SmallUnstyled, _React$Component);
  function SmallUnstyled() {
    classCallCheck(this, SmallUnstyled);
    return possibleConstructorReturn(this, (SmallUnstyled.__proto__ || Object.getPrototypeOf(SmallUnstyled)).apply(this, arguments));
  }
  createClass(SmallUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          color = _omit.color,
          children = _omit.children,
          cssModule = _omit.cssModule,
          attributes = objectWithoutProperties(_omit, ['className', 'color', 'children', 'cssModule']);
      var classes = mapToCssModules(classnames(className, color ? 'text-' + color : false), cssModule);
      return React.createElement(
        'small',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return SmallUnstyled;
}(React.Component);
SmallUnstyled.defaultProps = defaultProps$64;
SmallUnstyled.propTypes = propTypes$70;
var Small = styled(SmallUnstyled).withConfig({
  displayName: 'Small'
})(['', ''], function (props) {
  return '\n    /* Reboot Scss */\n    font-size: ' + props.theme['$small-font-size'] + ';\n    font-weight: normal;\n  ';
});
Small.defaultProps = defaultProps$64;
Small.propTypes = propTypes$70;

var propTypes$71 = {
  className: propTypes$1.string,
  children: propTypes$1.node,
  color: propTypes$1.oneOf(['white', 'muted', 'gray-dark', 'primary', 'success', 'info', 'warning', 'danger']),
  cssModule: propTypes$1.object
};
var StrongUnstyled = function (_React$Component) {
  inherits(StrongUnstyled, _React$Component);
  function StrongUnstyled() {
    classCallCheck(this, StrongUnstyled);
    return possibleConstructorReturn(this, (StrongUnstyled.__proto__ || Object.getPrototypeOf(StrongUnstyled)).apply(this, arguments));
  }
  createClass(StrongUnstyled, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          color = _props.color,
          children = _props.children,
          cssModule = _props.cssModule,
          attributes = objectWithoutProperties(_props, ['className', 'color', 'children', 'cssModule']);
      var classes = mapToCssModules(classnames(className, color ? 'text-' + color : false), cssModule);
      return React.createElement(
        'strong',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return StrongUnstyled;
}(React.Component);
StrongUnstyled.propTypes = propTypes$71;
var Strong = styled(StrongUnstyled).withConfig({
  displayName: 'Strong'
})(['font-weight:bolder;']);
Strong.propTypes = propTypes$71;

var Summary = styled.summary.withConfig({
  displayName: 'Summary'
})(['touch-action:manipulation;']);

var Sub = styled.sub.withConfig({
  displayName: 'Sub'
})(['position:relative;font-size:75%;line-height:0;vertical-align:baseline;bottom:-.25em;']);

var Sup = styled.sup.withConfig({
  displayName: 'Sup'
})(['position:relative;font-size:75%;line-height:0;vertical-align:baseline;top:-.5em;']);

var tableRow$1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableRowVariant = tableRowVariant;
var _color2 = _interopRequireDefault(color);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function tableRowVariant(state, background) {
  var hoverBackground = (_color2.default)(background).darken(0.05).toString();
  return '\n  /* Exact selectors below required to override \'.table-striped\' and prevent */\n  /* inheritance to nested tables. */\n  & .table-' + state + ' {\n    &,\n    > th,\n    > td {\n      background-color: ' + background + ';\n    }\n  }\n\n  /* Hover states for \'.table-hover\' */\n  /* Note: this is not available for cells or rows within \'thead\' or \'tfoot\'. */\n  &.table-hover {\n\n    .table-' + state + ' {\n      ' + (_hover.hover)('\n        background-color: ' + hoverBackground + ';\n\n        > td,\n        > th {\n          background-color: ' + hoverBackground + ';\n        }\n      ') + '\n    }\n  }\n  ';
}
exports.default = {
  tableRowVariant: tableRowVariant
};
});
unwrapExports(tableRow$1);
var tableRow_1 = tableRow$1.tableRowVariant;

var defaultProps$65 = {
  tag: 'table',
  responsiveTag: 'div',
  theme: {
    '$body-bg': '#fff',
    '$table-cell-padding': '.75rem',
    '$table-sm-cell-padding': '.3rem',
    '$table-bg': 'transparent',
    '$table-inverse-bg': '#292b2c',
    '$table-inverse-bg-accent': 'rgba(255, 255, 255, 0.05)',
    '$table-inverse-bg-hover': 'rgba(0, 0, 0, 0.075)',
    '$table-inverse-color': '#fff',
    '$table-inverse-border': 'hsl(200, 3.5%, 17.9%)',
    '$table-bg-accent': 'rgba(0, 0, 0, 0.05)',
    '$table-bg-hover': 'rgba(0, 0, 0, 0.075)',
    '$table-bg-active': 'rgba(0, 0, 0, 0.075)',
    '$table-head-bg': '#eceeef',
    '$table-head-color': '#464a4c',
    '$table-border-width': '1px',
    '$table-border-color': '#eceeef',
    '$state-success-bg': '#dff0d8',
    '$state-info-bg': '#d9edf7',
    '$state-warning-bg': '#fcf8e3',
    '$state-danger-bg': '#f2dede'
  }
};
var propTypes$72 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element]),
  size: propTypes$1.string,
  bordered: propTypes$1.bool,
  striped: propTypes$1.bool,
  inverse: propTypes$1.bool,
  hover: propTypes$1.bool,
  reflow: propTypes$1.bool,
  responsive: propTypes$1.bool,
  responsiveTag: propTypes$1.oneOfType([propTypes$1.func, propTypes$1.string]),
  theme: propTypes$1.shape({
    '$body-bg': propTypes$1.string,
    '$table-cell-padding': propTypes$1.string,
    '$table-sm-cell-padding': propTypes$1.string,
    '$table-bg': propTypes$1.string,
    '$table-inverse-bg': propTypes$1.string,
    '$table-inverse-bg-accent': propTypes$1.string,
    '$table-inverse-bg-hover': propTypes$1.string,
    '$table-inverse-color': propTypes$1.string,
    '$table-inverse-border': propTypes$1.string,
    '$table-bg-accent': propTypes$1.string,
    '$table-bg-hover': propTypes$1.string,
    '$table-bg-active': propTypes$1.string,
    '$table-head-bg': propTypes$1.string,
    '$table-head-color': propTypes$1.string,
    '$table-border-width': propTypes$1.string,
    '$table-border-color': propTypes$1.string,
    '$state-success-bg': propTypes$1.string,
    '$state-info-bg': propTypes$1.string,
    '$state-warning-bg': propTypes$1.string,
    '$state-danger-bg': propTypes$1.string
  }),
  cssModule: propTypes$1.object
};
var TableUnstyled = function (_React$Component) {
  inherits(TableUnstyled, _React$Component);
  function TableUnstyled() {
    classCallCheck(this, TableUnstyled);
    return possibleConstructorReturn(this, (TableUnstyled.__proto__ || Object.getPrototypeOf(TableUnstyled)).apply(this, arguments));
  }
  createClass(TableUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
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
      var classes = mapToCssModules(classnames(className, 'table', size ? 'table-' + size : false,
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
TableUnstyled.defaultProps = defaultProps$65;
TableUnstyled.propTypes = propTypes$72;
var Table = styled(TableUnstyled).withConfig({
  displayName: 'Table'
})(['', ''], function (props) {
  return '\n    /*\n     Basic Bootstrap table\n    */\n    &.table {\n      width: 100%;\n      max-width: 100%;\n      margin-bottom: ' + props.theme['$spacer'] + ';\n      background-color: ' + props.theme['$table-bg'] + ';\n\n      th,\n      td {\n        padding: ' + props.theme['$table-cell-padding'] + ';\n        vertical-align: top;\n        border-top: ' + props.theme['$table-border-width'] + ' solid ' + props.theme['$table-border-color'] + ';\n      }\n    \n      thead th {\n        vertical-align: bottom;\n        border-bottom: ' + unitUtils$1.math.multiply(props.theme['$table-border-width'], 2) + ' solid ' + props.theme['$table-border-color'] + ';\n      }\n    \n      tbody + tbody {\n        border-top: ' + unitUtils$1.math.multiply(props.theme['$table-border-width'], 2) + ' solid ' + props.theme['$table-border-color'] + ';\n      }\n    \n      .table {\n        background-color: ' + props.theme['$body-bg'] + ';\n      }\n    }\n    \n    \n    /*\n     Condensed table w/ half padding\n    */\n    \n    &.table-sm {\n      th,\n      td {\n        padding: ' + props.theme['$table-sm-cell-padding'] + ';\n      }\n    }\n    \n    \n    /* Bordered version\n     Add borders all around the table and between all the columns.\n    */\n    &.table-bordered {\n      border: ' + props.theme['$table-border-width'] + ' solid ' + props.theme['$table-border-color'] + ';\n    \n      th,\n      td {\n        border: ' + props.theme['$table-border-width'] + ' solid ' + props.theme['$table-border-color'] + ';\n      }\n    \n      thead {\n        th,\n        td {\n          border-bottom-width: ' + unitUtils$1.math.multiply(2, props.theme['$table-border-width']) + ';\n        }\n      }\n    }\n    \n    \n    /* Zebra-striping\n     Default zebra-stripe styles (alternating gray and transparent backgrounds)\n    */\n    \n    &.table-striped {\n      tbody tr:nth-of-type(odd) {\n        background-color: ' + props.theme['$table-bg-accent'] + ';\n      }\n    }\n    \n    \n    /* \n    Hover effect Placed here since it has to come after the potential zebra striping\n    */\n\n    \n    &.table-hover {\n      tbody tr {\n        ' + hover_2('\n          background-color: ' + props.theme['$table-bg-hover'] + ';\n        ') + '\n      }\n    }\n    \n    /* Table backgrounds\n    Exact selectors below required to override \'.table-striped\' and prevent\n    inheritance to nested tables.\n    */\n        \n    /* Generate the contextual variants */\n    ' + tableRow_1('active', props.theme['$table-bg-active']) + '\n    ' + tableRow_1('success', props.theme['$state-success-bg']) + '\n    ' + tableRow_1('info', props.theme['$state-info-bg']) + '\n    ' + tableRow_1('warning', props.theme['$state-warning-bg']) + '\n    ' + tableRow_1('danger', props.theme['$state-danger-bg']) + '\n     \n    \n    /* Inverse styles\n    Same table markup, but inverted color scheme: dark background and light text.\n    */ \n    \n    & thead.thead-inverse {\n      th {\n        color: ' + props.theme['$table-inverse-color'] + ';\n        background-color: ' + props.theme['$table-inverse-bg'] + ';\n      }\n    }\n    \n    \n    & thead.thead-default {\n      th {\n        color: ' + props.theme['$table-head-color'] + ';\n        background-color: ' + props.theme['$table-head-bg'] + ';\n      }\n    }\n    \n    &.table-inverse {\n      color: ' + props.theme['$table-inverse-color'] + ';\n      background-color: ' + props.theme['$table-inverse-bg'] + ';\n    \n      th,\n      td,\n      thead th {\n        border-color: ' + props.theme['$table-inverse-border'] + ';\n      }\n    \n      &.table-bordered {\n        border: 0;\n      }\n      \n      &.table-striped {\n        tbody tr:nth-of-type(odd) {\n        background-color: ' + props.theme['$table-inverse-bg-accent'] + ';\n        }\n      }\n      \n      &.table-hover {\n        tbody tr {\n          ' + hover_2('\n            background-color: ' + props.theme['$table-inverse-bg-hover'] + ';\n          ') + '\n        }\n      }\n    }\n    \n    /* Responsive tables\n     Wrap your tables in \'.table-responsive\' and we\'ll make them mobile friendly\n     by enabling horizontal scrolling. Only applies <768px. Everything above that\n     will display normally.\n     */\n    \n    &.table-responsive {\n      display: block;\n      width: 100%;\n      overflow-x: auto;\n      -ms-overflow-style: -ms-autohiding-scrollbar; /* See https://github.com/twbs/bootstrap/pull/10057 */\n      &.table-bordered {\n        border: 0;\n      }\n    }\n    \n    &.table-reflow {\n    \n      /* added bs4 missing tfoot rule */\n      thead, tfoot {\n        float: left;\n      }\n    \n      tbody {\n        display: block;\n        white-space: nowrap;\n      }\n    \n      th,\n      td {\n        border-top: ' + props.theme['$table-border-width'] + ' solid ' + props.theme['$table-border-color'] + ';\n        border-left: ' + props.theme['$table-border-width'] + ' solid ' + props.theme['$table-border-color'] + ';\n    \n        &:last-child {\n          border-right: ' + props.theme['$table-border-width'] + ' solid ' + props.theme['$table-border-color'] + ';\n        }\n      }\n    \n      thead,\n      tbody,\n      tfoot {\n        &:last-child {\n          tr:last-child th,\n          tr:last-child td {\n            border-bottom: ' + props.theme['$table-border-width'] + ' solid ' + props.theme['$table-border-color'] + ';\n          }\n        }\n      }\n    \n      tr {\n        float: left;\n    \n        th,\n        td {\n          display: block !important;\n          border: ' + props.theme['$table-border-width'] + ' solid ' + props.theme['$table-border-color'] + ';\n        }\n      }\n    }\n    \n    /* from reboot.scss */\n    th {\n      /* Centered by default, but left-align-ed to match the tds below. */\n      text-align: left;\n    }\n      \n    /* Reboot Scss */\n    /* No longer part of Normalize since v4 */\n    border-collapse: collapse;\n    /*  Reset for nesting within parents with \'background-color\'. */\n    background-color: ' + props.theme['$table-bg'] + ';    \n    \n  ';
});
Table.defaultProps = defaultProps$65;
Table.propTypes = propTypes$72;

var Tbody = styled.tbody.withConfig({
  displayName: 'Tbody'
})(['']);

var Tfoot = styled.tfoot.withConfig({
  displayName: 'Tfoot'
})(['']);

var propTypes$73 = {
  className: propTypes$1.string,
  children: propTypes$1.node,
  inverse: propTypes$1.bool,
  defaultBg: propTypes$1.bool
};
var Thead = function (_React$Component) {
  inherits(Thead, _React$Component);
  function Thead() {
    classCallCheck(this, Thead);
    return possibleConstructorReturn(this, (Thead.__proto__ || Object.getPrototypeOf(Thead)).apply(this, arguments));
  }
  createClass(Thead, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          inverse = _props.inverse,
          children = _props.children,
          defaultBg = _props.defaultBg,
          attributes = objectWithoutProperties(_props, ['className', 'inverse', 'children', 'defaultBg']);
      var classes = classnames(className, inverse ? 'thead-inverse' : false, defaultBg ? 'thead-default' : false);
      return React.createElement(
        'thead',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return Thead;
}(React.Component);
Thead.propTypes = propTypes$73;
Thead.propTypes = propTypes$73;

var propTypes$74 = {
  className: propTypes$1.string,
  children: propTypes$1.node,
  color: propTypes$1.oneOf(['active', 'success', 'info', 'warning', 'danger', ''])
};
var Td = function (_React$Component) {
  inherits(Td, _React$Component);
  function Td() {
    classCallCheck(this, Td);
    return possibleConstructorReturn(this, (Td.__proto__ || Object.getPrototypeOf(Td)).apply(this, arguments));
  }
  createClass(Td, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          color = _props.color,
          children = _props.children,
          attributes = objectWithoutProperties(_props, ['className', 'color', 'children']);
      var classes = classnames(className, color ? 'table-' + color : false);
      return React.createElement(
        'td',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return Td;
}(React.Component);
Td.propTypes = propTypes$74;
Td.propTypes = propTypes$74;

var propTypes$75 = {
  className: propTypes$1.string,
  children: propTypes$1.node,
  color: propTypes$1.oneOf(['active', 'success', 'info', 'warning', 'danger', ''])
};
var Th = function (_React$Component) {
  inherits(Th, _React$Component);
  function Th() {
    classCallCheck(this, Th);
    return possibleConstructorReturn(this, (Th.__proto__ || Object.getPrototypeOf(Th)).apply(this, arguments));
  }
  createClass(Th, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          color = _props.color,
          children = _props.children,
          attributes = objectWithoutProperties(_props, ['className', 'color', 'children']);
      var classes = classnames(className, color ? 'table-' + color : false);
      return React.createElement(
        'th',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return Th;
}(React.Component);
Th.propTypes = propTypes$75;
Th.propTypes = propTypes$75;

var propTypes$76 = {
  className: propTypes$1.string,
  children: propTypes$1.node,
  color: propTypes$1.oneOf(['active', 'success', 'info', 'warning', 'danger', ''])
};
var Tr = function (_React$Component) {
  inherits(Tr, _React$Component);
  function Tr() {
    classCallCheck(this, Tr);
    return possibleConstructorReturn(this, (Tr.__proto__ || Object.getPrototypeOf(Tr)).apply(this, arguments));
  }
  createClass(Tr, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          color = _props.color,
          children = _props.children,
          attributes = objectWithoutProperties(_props, ['className', 'color', 'children']);
      var classes = classnames(className, color ? 'table-' + color : false);
      return React.createElement(
        'tr',
        _extends({ className: classes }, attributes),
        children
      );
    }
  }]);
  return Tr;
}(React.Component);
Tr.propTypes = propTypes$76;
Tr.propTypes = propTypes$76;

var badge$1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.badgeVariant = badgeVariant;
var _color2 = _interopRequireDefault(color);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultProps = exports.defaultProps = {
  '$enable-hover-mediaQuery': false
};
function badgeVariant() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-mediaQuery'];
  var badgeColor = arguments[1];
  return '\n    background-color: ' + badgeColor + ';\n    \n    &[href] {\n      ' + (_hover.hoverFocus)(enableHoverMediaQuery, 'background-color: ' + (_color2.default)(badgeColor).darken(0.1).toString() + ';') + '\n    }\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  badgeVariant: badgeVariant
};
});
unwrapExports(badge$1);
var badge_2 = badge$1.badgeVariant;

var defaultProps$66 = {
  color: 'default',
  pill: false,
  tag: 'span',
  theme: {
    '$badge-default-bg': '#636c72',
    '$badge-primary-bg': '#0275d8',
    '$badge-success-bg': '#5cb85c',
    '$badge-info-bg': '#5bc0de',
    '$badge-warning-bg': '#f0ad4e',
    '$badge-danger-bg': '#d9534f',
    '$badge-color': '#fff',
    '$badge-link-hover-color': '#fff',
    '$badge-font-size': '75%',
    '$badge-font-weight': 'bold',
    '$badge-padding-x': '.4em',
    '$badge-padding-y': '.25em',
    '$badge-pill-padding-x': '.6em',
    '$badge-pill-border-radius': '10rem',
    '$enable-rounded': true,
    '$enable-hover-media-query': false
  }
};
var propTypes$77 = {
  className: propTypes$1.string,
  color: propTypes$1.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger']),
  pill: propTypes$1.bool,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  theme: propTypes$1.shape({
    '$badge-default-bg': propTypes$1.string,
    '$badge-primary-bg': propTypes$1.string,
    '$badge-success-bg': propTypes$1.string,
    '$badge-info-bg': propTypes$1.string,
    '$badge-warning-bg': propTypes$1.string,
    '$badge-danger-bg': propTypes$1.string,
    '$badge-color': propTypes$1.string,
    '$badge-link-hover-color': propTypes$1.string,
    '$badge-font-size': propTypes$1.string,
    '$badge-font-weight': propTypes$1.string,
    '$badge-padding-x': propTypes$1.string,
    '$badge-padding-y': propTypes$1.string,
    '$badge-pill-padding-x': propTypes$1.string,
    '$badge-pill-border-radius': propTypes$1.string,
    '$link-hover-decoration': propTypes$1.string,
    '$enable-rounded': propTypes$1.bool,
    '$enable-hover-media-query': propTypes$1.bool
  }),
  cssModule: propTypes$1.object
};
var BadgeUnstyled = function (_React$Component) {
  inherits(BadgeUnstyled, _React$Component);
  function BadgeUnstyled() {
    classCallCheck(this, BadgeUnstyled);
    return possibleConstructorReturn(this, (BadgeUnstyled.__proto__ || Object.getPrototypeOf(BadgeUnstyled)).apply(this, arguments));
  }
  createClass(BadgeUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          color = _omit.color,
          pill = _omit.pill,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'color', 'pill', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames(className, 'badge', defineProperty({
          'badge-pill': pill
        }, 'badge-' + color, color)), cssModule)
      }, attributes));
    }
  }]);
  return BadgeUnstyled;
}(React.Component);
BadgeUnstyled.defaultProps = defaultProps$66;
BadgeUnstyled.propTypes = propTypes$77;
var Badge = styled(BadgeUnstyled).withConfig({
  displayName: 'Badge'
})(['', ''], function (props) {
  return '\n    \n    /* Base class */\n    /* Requires one of the contextual, color modifier classes for \'color\' and */\n    /* \'background-color\'. */\n    \n    &.badge {\n      display: inline-block;\n      padding: ' + props.theme['$badge-padding-y'] + ' ' + props.theme['$badge-padding-x'] + ';\n      font-size: ' + props.theme['$badge-font-size'] + ';\n      font-weight: ' + props.theme['$badge-font-weight'] + ';\n      line-height: 1;\n      color: ' + props.theme['$badge-color'] + ';\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: baseline;\n      ' + borderRadius_2(props.theme['$enable-rounded'], props.theme['$border-radius']) + '\n    \n      /* Empty tags collapse automatically */\n      &:empty {\n        display: none;\n      }\n    }\n    \n    \n    /* scss-lint:disable QualifyingElement */\n    /* Add hover effects, but only for links */\n    &a {\n      ' + hover_3(props.theme['$enable-hover-media-query'], '\n        color: ' + props.theme['$badge-link-hover-color'] + ';\n        text-decoration: none;\n        cursor: pointer;\n      ') + '\n    }\n    /* scss-lint:enable QualifyingElement */\n    \n    /* Pill tags */\n    /* Make them extra rounded with a modifier to replace v3s badges. */\n    \n    &.badge-pill {\n      padding-right: ' + props.theme['$badge-pill-padding-x'] + ';\n      padding-left: ' + props.theme['$badge-pill-padding-x'] + ';\n      ' + borderRadius_2(props.theme['$enable-rounded'], props.theme['$badge-pill-border-radius']) + '\n    }\n    \n    /* Colors */\n    /* Contextual variations (linked tags get darker on :hover). */\n    \n    &.badge-default {\n      ' + badge_2(props.theme['$enable-hover-media-query'], props.theme['$badge-default-bg']) + '\n    }     \n    \n    &.badge-primary {\n      ' + badge_2(props.theme['$enable-hover-media-query'], props.theme['$badge-primary-bg']) + '\n    }\n    \n    &.badge-success {\n      ' + badge_2(props.theme['$enable-hover-media-query'], props.theme['$badge-success-bg']) + '\n    }\n    \n    &.badge-info {\n      ' + badge_2(props.theme['$enable-hover-media-query'], props.theme['$badge-info-bg']) + '\n    }\n    \n    &.badge-warning {\n      ' + badge_2(props.theme['$enable-hover-media-query'], props.theme['$badge-warning-bg']) + '\n    }\n    \n    &.badge-danger {\n      ' + badge_2(props.theme['$enable-hover-media-query'], props.theme['$badge-danger-bg']) + '\n    }\n  ';
});
Badge.defaultProps = defaultProps$66;
Badge.propTypes = propTypes$77;

var Textarea = styled.textarea.withConfig({
  displayName: 'Textarea'
})(['touch-action:manipulation;line-height:inherit;resize:vertical;']);

var DEFAULT_DELAYS = {
  shape: 0,
  hide: 250
};
var defaultTetherConfig$1 = {
  classPrefix: 'bs-tether',
  classes: {
    element: false,
    enabled: 'show'
  },
  constraints: [{ to: 'scrollParent', attachment: 'together none' }, { to: 'window', attachment: 'together none' }]
};
var propTypes$78 = {
  className: propTypes$1.string,
  placement: propTypes$1.oneOf(tools_10),
  target: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.object]).isRequired,
  isOpen: propTypes$1.bool,
  disabled: propTypes$1.bool,
  tether: propTypes$1.object,
  tetherRef: propTypes$1.func,
  toggle: propTypes$1.func,
  autohide: propTypes$1.bool,
  delay: propTypes$1.oneOfType([propTypes$1.shape({ show: propTypes$1.number, hide: propTypes$1.number }), propTypes$1.number]),
  theme: propTypes$1.shape({
    '$zindex-tooltip': propTypes$1.string,
    '$tooltip-max-width': propTypes$1.string,
    '$tooltip-color': propTypes$1.string,
    '$tooltip-bg': propTypes$1.string,
    '$tooltip-opacity': propTypes$1.string,
    '$tooltip-padding-y': propTypes$1.string,
    '$tooltip-padding-x': propTypes$1.string,
    '$tooltip-margin': propTypes$1.string,
    '$tooltip-arrow-width': propTypes$1.string,
    '$tooltip-arrow-color': propTypes$1.string,
    '$component-active-color': propTypes$1.string
  }),
  cssModule: propTypes$1.object
};
var defaultProps$67 = {
  isOpen: false,
  placement: 'bottom',
  delay: DEFAULT_DELAYS,
  autohide: true,
  toggle: null,
  theme: {
    '$zindex-tooltip': '1070',
    '$tooltip-max-width': '200px',
    '$tooltip-color': '#fff',
    '$tooltip-bg': '#000',
    '$tooltip-opacity': '.9',
    '$tooltip-padding-y': '3px',
    '$tooltip-padding-x': '8px',
    '$tooltip-margin': '3px',
    '$tooltip-arrow-width': '5px',
    '$tooltip-arrow-color': '#000'
  }
};
var TooltipUnstyled = function (_React$Component) {
  inherits(TooltipUnstyled, _React$Component);
  function TooltipUnstyled() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck(this, TooltipUnstyled);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = TooltipUnstyled.__proto__ || Object.getPrototypeOf(TooltipUnstyled)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
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
      if ((typeof delay === 'undefined' ? 'undefined' : babelHelpers.typeof(delay)) === 'object') {
        return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
      }
      return delay;
    }, _this.getTarget = function () {
      var target = _this.props.target;
      if ((typeof target === 'undefined' ? 'undefined' : babelHelpers.typeof(target)) === 'object') {
        return target;
      }
      return document.getElementById(target);
    }, _this.getTetherConfig = function () {
      var attachments = getTetherAttachments(_this.props.placement);
      return babelHelpers.extends({}, defaultTetherConfig, attachments, {
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
      if (_this.props.toggle) {
        return _this.props.toggle();
      }
      return null;
    }, _this.handleFocus = function () {
      _this.setState({
        focus: true
      });
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }
  createClass(TooltipUnstyled, [{
    key: 'render',
    value: function render() {
      if (!this.props.isOpen) {
        return null;
      }
      var attributes = lodash_omit(this.props, Object.keys(propTypes$78));
      var classes = mapToCssModules(classnames('tooltip', this.props.className), this.props.cssModule);
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
          onFocus: this.handleFocus,
          tabIndex: '-1'
        }, optional))
      );
    }
  }]);
  return TooltipUnstyled;
}(React.Component);
TooltipUnstyled.defaultProps = defaultProps$67;
TooltipUnstyled.propTypes = propTypes$78;
var Tooltip = styled(TooltipUnstyled).withConfig({
  displayName: 'Tooltip'
})(['', ''], function (props) {
  return '\n    &.tooltip {\n      position: absolute;\n      z-index: ' + props.theme['$zindex-tooltip'] + ';\n      display: block;\n      font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;\n      font-style: normal;\n      font-weight: 400;\n      letter-spacing: normal;\n      line-break: auto;\n      line-height: 1.5;\n      text-align: left;\n      text-align: start;\n      text-decoration: none;\n      text-shadow: none;\n      text-transform: none;\n      white-space: normal;\n      word-break: normal;\n      word-spacing: normal;\n      font-size: .875rem;\n      word-wrap: break-word;\n      opacity: 0\n    }\n    \n    &.tooltip.show {\n      opacity: ' + props.theme['$tooltip-opacity'] + '\n    }\n    \n    &.tooltip.bs-tether-element-attached-bottom,\n    &.tooltip.tooltip-top {\n      padding: 5px 0;\n      margin-top: -3px\n    }\n    \n    &.tooltip.bs-tether-element-attached-bottom .tooltip-inner:before,\n    &.tooltip.tooltip-top .tooltip-inner:before {\n      bottom: 0;\n      left: 50%;\n      margin-left: -5px;\n      content: "";\n      border-width: 5px 5px 0;\n      border-top-color: #000\n    }\n    \n    &.tooltip.bs-tether-element-attached-left,\n    &.tooltip.tooltip-right {\n      padding: 0 5px;\n      margin-left: 3px\n    }\n    \n    &.tooltip.bs-tether-element-attached-left .tooltip-inner:before,\n    &.tooltip.tooltip-right .tooltip-inner:before {\n      top: 50%;\n      left: 0;\n      margin-top: -5px;\n      content: "";\n      border-width: 5px 5px 5px 0;\n      border-right-color: #000\n    }\n    \n    &.tooltip.bs-tether-element-attached-top,\n    &.tooltip.tooltip-bottom {\n      padding: 5px 0;\n      margin-top: 3px\n    }\n    \n    &.tooltip.bs-tether-element-attached-top .tooltip-inner:before,\n    &.tooltip.tooltip-bottom .tooltip-inner:before {\n      top: 0;\n      left: 50%;\n      margin-left: -5px;\n      content: "";\n      border-width: 0 5px 5px;\n      border-bottom-color: #000\n    }\n    \n    &.tooltip.bs-tether-element-attached-right,\n    &.tooltip.tooltip-left {\n      padding: 0 5px;\n      margin-left: -3px\n    }\n    \n    &.tooltip.bs-tether-element-attached-right .tooltip-inner:before,\n    &.tooltip.tooltip-left .tooltip-inner:before {\n      top: 50%;\n      right: 0;\n      margin-top: -5px;\n      content: "";\n      border-width: 5px 0 5px 5px;\n      border-left-color: #000\n    }\n    \n    & .tooltip-inner {\n      max-width: ' + props.theme['$tooltip-max-width'] + ';\n      padding: ' + props.theme['$tooltip-padding-y'] + ' ' + props.theme['$tooltip-padding-x'] + ';\n      color: ' + props.theme['$tooltip-color'] + ';\n      text-align: center;\n      background-color: ' + props.theme['$tooltip-bg'] + ';\n      border-radius: .25rem\n    }\n    \n    & .tooltip-inner:before {\n      position: absolute;\n      width: 0;\n      height: 0;\n      border-color: transparent;\n      border-style: solid\n    }\n  ';
});
Tooltip.defaultProps = defaultProps$67;
Tooltip.propTypes = propTypes$78;

var cards$1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.cardVariant = cardVariant;
exports.cardOutlineVariant = cardOutlineVariant;
exports.cardInverse = cardInverse;
exports.card = card;
var defaultProps = exports.defaultProps = {
  '$enable-rounded': true,
  '$enable-hover-media-query': false,
  '$card-spacer-x': '1.25rem',
  '$card-spacer-y': '.75rem',
  '$card-bg': '#fff',
  '$card-border-width': '1px',
  '$card-border-color': 'rgba(0, 0, 0, 0.125)',
  '$card-border-radius': '.25rem',
  '$card-margin-y-halved': '0.375rem',
  '$card-margin-x-halved': '0.625rem',
  '$card-cap-bg': '#f7f7f9',
  '$card-border-radius-inner': 'calc(.25rem - 1px)',
  '$brand-primary': '#0275d8',
  '$brand-success': '#5cb85c',
  '$brand-info': '#5bc0de',
  '$brand-warning': '#f0ad4e',
  '$brand-danger': '#d9534f',
  '$btn-primary-bg': '#0275d8',
  '$btn-secondary-border': '#ccc',
  '$btn-info-bg': '#5bc0de',
  '$btn-success-bg': '#5cb85c',
  '$btn-warning-bg': '#f0ad4e',
  '$btn-danger-bg': '#d9534f',
  '$card-link-hover-color': '#fff',
  '$card-img-overlay-padding': '1.25rem'
};
function cardVariant(cardBackground, cardBorder) {
  return '\n    background-color: ' + cardBackground + ';\n    border-color: ' + cardBorder + ';\n  \n    & .card-header,\n    & .card-footer {\n      background-color: transparent;\n    }\n  ';
}
function cardOutlineVariant(cardColor) {
  return '\n    background-color: transparent;\n    border-color: ' + cardColor + ';\n  ';
}
function cardInverse() {
  var enableHoverMediaQuery = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-hover-media-query'];
  var cardLinkHoverColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$card-link-hover-color'];
  return '\n    color: rgba(255,255,255,.65);\n    & .card-header,\n    & .card-footer {\n      background-color: transparent;\n      border-color: rgba(255,255,255,.2);\n    }\n    & .card-header,\n    & .card-footer,\n    & .card-title,\n    & .card-blockquote {\n      color: #fff;\n    }\n    & .card-link,\n    & .card-text,\n    & .card-subtitle,\n    & .card-blockquote .blockquote-footer {\n      color: rgba(255,255,255,.65);\n    }\n    \n    & .card-link {\n      ' + (_hover.hoverFocus)(enableHoverMediaQuery, 'color: ' + cardLinkHoverColor + ';') + '\n    }\n  ';
}
function card() {
  var $enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var $enableHoverMediaQuery = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$enable-hover-media-query'];
  var $cardSpacerY = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$card-spacer-y'];
  var $cardSpacerX = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$card-spacer-x'];
  var $cardBg = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$card-bg'];
  var $cardBorderWidth = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$card-border-width'];
  var $cardBorderColor = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$card-border-color'];
  var $cardBorderRadius = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$card-border-radius'];
  var $cardMarginYHalved = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$card-margin-y-halved'];
  var $cardMarginXHalved = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$card-margin-x-halved'];
  var $cardCapBg = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$card-cap-bg'];
  var $cardBorderRadiusInner = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps['$card-border-radius-inner'];
  var $brandPrimary = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps['$brand-primary'];
  var $brandSuccess = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps['$brand-success'];
  var $brandInfo = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps['$brand-info'];
  var $brandWarning = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps['$brand-warning'];
  var $brandDanger = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps['$brand-danger'];
  var $btnPrimaryBg = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps['$btn-primary-bg'];
  var $btnSecondaryBorder = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps['$btn-secondary-border'];
  var $btnInfoBg = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps['$btn-info-bg'];
  var $btnSuccessBg = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps['$btn-success-bg'];
  var $btnWarningBg = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps['$btn-warning-bg'];
  var $btnDangerBg = arguments.length > 22 && arguments[22] !== undefined ? arguments[22] : defaultProps['$btn-danger-bg'];
  var $cardLinkHoverColor = arguments.length > 23 && arguments[23] !== undefined ? arguments[23] : defaultProps['$card-link-hover-color'];
  var $cardImgOverlayPadding = arguments.length > 24 && arguments[24] !== undefined ? arguments[24] : defaultProps['$card-img-overlay-padding'];
  return '\n    & .card {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      background-color: ' + $cardBg + ';\n      border: ' + $cardBorderWidth + ' solid ' + $cardBorderColor + ';\n      ' + (_borderRadius.borderRadius)($enableRounded, $cardBorderRadius) + '\n    }\n    \n    & .card-block {\n      flex: 1 1 auto;\n\n      padding: ' + $cardSpacerX + ';\n    }\n    \n    & .card-title {\n      margin-bottom: ' + $cardSpacerY + ';\n    }\n    \n    & .card-subtitle {\n      margin-top: -' + $cardMarginYHalved + ';\n      margin-bottom: 0;\n    }\n    \n    & .card-text:last-child {\n      margin-bottom: 0;\n    }\n   \n    & .card-link {\n      ' + (_hover.hover)('text-decoration: none;') + '\n    \n      + .card-link {\n        margin-left: ' + $cardSpacerX + ';\n      }\n    }\n    \n    & .card{\n      > .list-group:first-child {\n        .list-group-item:first-child {\n          ' + (_borderRadius.borderTopRadius)($enableRounded, $cardBorderRadius) + '\n        }\n      }\n    \n      > .list-group:last-child {\n        .list-group-item:last-child {\n          ' + (_borderRadius.borderBottomRadius)($enableRounded, $cardBorderRadius) + '\n        }\n      }\n    }\n    \n    & .card-header {\n      padding: ' + $cardSpacerY + ' ' + $cardSpacerX + ';\n      margin-bottom: 0;\n      background-color: ' + $cardCapBg + ';\n      border-bottom: ' + $cardBorderWidth + ' solid ' + $cardBorderColor + ';\n    \n      &:first-child {\n        ' + (_borderRadius.borderRadius)($enableRounded, $cardBorderRadiusInner, $cardBorderRadiusInner, '0', '0') + '\n      }\n    }\n    \n    & .card-footer {\n      padding: ' + $cardSpacerY + ' ' + $cardSpacerX + ';\n      background-color: ' + $cardCapBg + ';\n      border-top: ' + $cardBorderWidth + ' solid ' + $cardBorderColor + ';\n    \n      &:last-child {\n        ' + (_borderRadius.borderRadius)($enableRounded, '0', '0', $cardBorderRadiusInner, $cardBorderRadiusInner) + '\n      }\n    }\n\n    & .card-header-tabs {\n      margin-right: -' + $cardMarginXHalved + ';\n      margin-bottom: -' + $cardSpacerY + ';\n      margin-left: -' + $cardMarginXHalved + ';\n      border-bottom: 0;\n    }\n    \n    & .card-header-pills {\n      margin-right: -' + $cardMarginXHalved + ';\n      margin-left: -' + $cardMarginXHalved + ';\n    }\n    \n    & .card-primary {\n      ' + cardVariant($brandPrimary, $brandPrimary) + '\n    }\n    & .card-success {\n      ' + cardVariant($brandSuccess, $brandSuccess) + '\n    }\n    & .card-info {\n      ' + cardVariant($brandInfo, $brandInfo) + '\n    }\n    & .card-warning {\n      ' + cardVariant($brandWarning, $brandWarning) + '\n    }\n    & .card-danger {\n      ' + cardVariant($brandDanger, $brandDanger) + '\n    }\n    \n    & .card-outline-primary {\n      ' + cardOutlineVariant($btnPrimaryBg) + '\n    }\n    & .card-outline-secondary {\n      ' + cardOutlineVariant($btnSecondaryBorder) + '\n    }\n    & .card-outline-info {\n      ' + cardOutlineVariant($btnInfoBg) + '\n    }\n    & .card-outline-success {\n      ' + cardOutlineVariant($btnSuccessBg) + '\n    }\n    & .card-outline-warning {\n      ' + cardOutlineVariant($btnWarningBg) + '\n    }\n    & .card-outline-danger {\n      ' + cardOutlineVariant($btnDangerBg) + '\n    }\n        \n    & .card-inverse {\n      ' + cardInverse($enableHoverMediaQuery, $cardLinkHoverColor) + '\n    }\n\n    & .card-blockquote {\n      padding: 0;\n      margin-bottom: 0;\n      border-left: 0;\n    }\n    \n    & .card-img {\n      ' + (_borderRadius.borderRadius)($enableRounded, $cardBorderRadiusInner) + '\n    }\n    \n    & .card-img-overlay {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      padding: ' + $cardImgOverlayPadding + ';\n    }\n\n    & .card-img-top {\n      ' + (_borderRadius.borderTopRadius)($enableRounded, $cardBorderRadiusInner) + '\n    }\n    \n    & .card-img-bottom {\n      ' + (_borderRadius.borderBottomRadius)($enableRounded, $cardBorderRadiusInner) + '\n    }\n  ';
}
exports.default = {
  defaultProps: defaultProps,
  cardVariant: cardVariant,
  cardOutlineVariant: cardOutlineVariant,
  cardInverse: cardInverse,
  card: card
};
});
unwrapExports(cards$1);
var cards_2 = cards$1.cardVariant;
var cards_3 = cards$1.cardOutlineVariant;
var cards_4 = cards$1.cardInverse;
var cards_5 = cards$1.card;

var defaultProps$68 = {
  tag: 'div',
  theme: {
    '$brand-primary': '#0275d8',
    '$brand-success': '#5cb85c',
    '$brand-info': '#5bc0de',
    '$brand-warning': '#f0ad4e',
    '$brand-danger': '#d9534f',
    '$brand-inverse': '#292b2c',
    '$card-spacer-x': '1.25rem',
    '$card-spacer-y': '.75rem',
    '$card-border-width': '1px',
    '$card-border-radius': '.25rem',
    '$card-border-color': 'rgba(0, 0, 0, 0.125)',
    '$card-border-radius-inner': 'calc(.25rem - 1px)',
    '$card-cap-bg': '#f7f7f9',
    '$card-bg': '#fff',
    '$card-link-hover-color': '#fff',
    '$card-img-overlay-padding': '1.25rem',
    '$card-margin-y-halved': '0.375rem',
    '$card-margin-x-halved': '0.375rem',
    '$card-columns-count-md': '2',
    '$card-columns-gap-md': '1rem',
    '$card-columns-margin-md': '.75rem',
    '$card-columns-count-lg': '2',
    '$card-columns-gap-lg': '1.15rem',
    '$card-columns-margin-lg': '.75rem',
    '$card-columns-count-xl': '2',
    '$card-columns-gap-xl': '1.25rem',
    '$card-columns-margin-xl': '.75rem',
    '$card-columns-count-xxl': '3',
    '$card-columns-gap-xxl': '1.25rem',
    '$card-columns-margin-xxl': '.75rem',
    '$card-deck-margin': '15px',
    '$btn-primary-bg': '#0275d8',
    '$btn-secondary-border': '#ccc',
    '$btn-info-bg': '#5bc0de',
    '$btn-success-bg': '#5cb85c',
    '$btn-warning-bg': '#f0ad4e',
    '$btn-danger-bg': '#d9534f',
    '$enable-rounded': false,
    '$enable-hover-media-query': false
  }
};
var propTypes$79 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.node]),
  theme: propTypes$1.shape({
    '$brand-primary': propTypes$1.string,
    '$brand-success': propTypes$1.string,
    '$brand-info': propTypes$1.string,
    '$brand-warning': propTypes$1.string,
    '$brand-danger': propTypes$1.string,
    '$brand-inverse': propTypes$1.string,
    '$card-spacer-x': propTypes$1.string,
    '$card-spacer-y': propTypes$1.string,
    '$card-border-width': propTypes$1.string,
    '$card-border-radius': propTypes$1.string,
    '$card-border-color': propTypes$1.string,
    '$card-border-radius-inner': propTypes$1.string,
    '$card-cap-bg': propTypes$1.string,
    '$card-bg': propTypes$1.string,
    '$card-link-hover-color': propTypes$1.string,
    '$card-img-overlay-padding': propTypes$1.string,
    '$card-margin-y-halved': propTypes$1.string,
    '$card-margin-x-halved': propTypes$1.string,
    '$card-columns-count-md': propTypes$1.string,
    '$card-columns-gap-md': propTypes$1.string,
    '$card-columns-margin-md': propTypes$1.string,
    '$card-columns-count-lg': propTypes$1.string,
    '$card-columns-gap-lg': propTypes$1.string,
    '$card-columns-margin-lg': propTypes$1.string,
    '$card-columns-count-xl': propTypes$1.string,
    '$card-columns-gap-xl': propTypes$1.string,
    '$card-columns-margin-xl': propTypes$1.string,
    '$card-columns-count-xxl': propTypes$1.string,
    '$card-columns-gap-xxl': propTypes$1.string,
    '$card-columns-margin-xxl': propTypes$1.string,
    '$card-deck-margin': propTypes$1.string,
    '$btn-primary-bg': propTypes$1.string,
    '$btn-secondary-border': propTypes$1.string,
    '$btn-info-bg': propTypes$1.string,
    '$btn-success-bg': propTypes$1.string,
    '$btn-warning-bg': propTypes$1.string,
    '$btn-danger-bg': propTypes$1.string,
    '$link-color': propTypes$1.string,
    '$link-decoration': propTypes$1.string,
    '$link-hover-color': propTypes$1.string,
    '$link-hover-decoration': propTypes$1.string,
    '$enable-rounded': propTypes$1.bool,
    '$enable-hover-media-query': propTypes$1.bool
  }),
  color: propTypes$1.oneOf(['primary', 'success', 'info', 'warning', 'danger', 'white']),
  inverse: propTypes$1.bool,
  block: propTypes$1.bool,
  outline: propTypes$1.bool,
  width: propTypes$1.string,
  backgroundColor: propTypes$1.string,
  borderColor: propTypes$1.string,
  cssModule: propTypes$1.object
};
var CardUnstyled = function (_React$Component) {
  inherits(CardUnstyled, _React$Component);
  function CardUnstyled() {
    classCallCheck(this, CardUnstyled);
    return possibleConstructorReturn(this, (CardUnstyled.__proto__ || Object.getPrototypeOf(CardUnstyled)).apply(this, arguments));
  }
  createClass(CardUnstyled, [{
    key: 'render',
    value: function render() {
      var _cn;
      var _omit = lodash_omit(this.props, ['theme', 'backgroundColor', 'borderColor', 'width']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          color = _omit.color,
          block = _omit.block,
          inverse = _omit.inverse,
          outline = _omit.outline,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'color', 'block', 'inverse', 'outline', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames(className, 'card', (_cn = {
          inverse: inverse,
          'card-block': block
        }, babelHelpers.defineProperty(_cn, 'card-' + color, color), babelHelpers.defineProperty(_cn, 'card-' + (outline ? '-outline' : '') + '-' + color, outline), _cn)), cssModule)
      }, attributes));
    }
  }]);
  return CardUnstyled;
}(React.Component);
CardUnstyled.defaultProps = defaultProps$68;
CardUnstyled.propTypes = propTypes$79;
var Card = styled(CardUnstyled).withConfig({
  displayName: 'Card'
})(['', ''], function (props) {
  return '\n    \n    /*\n    Base styles\n    */\n    &.card {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      background-color: ' + props.theme['$card-bg'] + ';\n      border: ' + props.theme['$card-border-width'] + ' solid ' + props.theme['$card-border-color'] + ';\n      ' + borderRadius_2(props.theme['$enable-rounded'], props.theme['$card-border-radius']) + '\n      \n      ' + conditional_1(props.width, 'width: ' + props.width + ';') + '\n      ' + conditional_1(props.backgroundColor, 'background-color: ' + props.backgroundColor + ';') + '\n      ' + conditional_1(props.borderColor, 'border-color: ' + props.borderColor + ';') + '\n    }\n    \n    &.card-block,\n    & .card-block {\n      flex: 1 1 auto;\n      padding: ' + props.theme['$card-spacer-x'] + ';\n    }\n    \n    & .card-title {\n      margin-bottom: ' + props.theme['$card-spacer-y'] + ';\n    }\n    \n    & .card-subtitle {\n      margin-top: -' + props.theme['$card-margin-y-halved'] + ';\n      margin-bottom: 0;\n    }\n    \n    & .card-text:last-child {\n      margin-bottom: 0;\n    }\n   \n    & .card-link {\n      ' + hover_2('\n        text-decoration: none;\n      ') + '\n    \n      + .card-link {\n        margin-left: ' + props.theme['$card-spacer-x'] + ';\n      }\n    }\n    \n    &.card {\n      > .list-group:first-child {\n        .list-group-item:first-child {\n          ' + borderRadius_3(props.theme['$enable-rounded'], props.theme['$card-border-radius']) + '\n        }\n      }\n    \n      > .list-group:last-child {\n        .list-group-item:last-child {\n          ' + borderRadius_5(props.theme['$enable-rounded'], props.theme['$card-border-radius']) + '\n        }\n      }\n    }\n    \n    \n    /*\n     Optional textual caps\n    */\n    \n    & .card-header {\n      padding: ' + props.theme['$card-spacer-y'] + ' ' + props.theme['$card-spacer-x'] + ';\n      margin-bottom: 0; /* Removes the default margin-bottom of <hN> */\n      background-color: ' + props.theme['$card-cap-bg'] + ';\n      border-bottom: ' + props.theme['$card-border-width'] + ' solid ' + props.theme['$card-border-color'] + ';\n    \n      &:first-child {\n        ' + borderRadius_2(props.theme['$enable-rounded'], props.theme['$card-border-radius-inner'], props.theme['$card-border-radius-inner'], '0', '0') + '\n      }\n    }\n    \n    & .card-footer {\n      padding: ' + props.theme['$card-spacer-y'] + ' ' + props.theme['$card-spacer-x'] + ';\n      background-color: ' + props.theme['$card-cap-bg'] + ';\n      border-top: ' + props.theme['$card-border-width'] + ' solid ' + props.theme['$card-border-color'] + ';\n    \n      &:last-child {\n        ' + borderRadius_2(props.theme['$enable-rounded'], '0', '0', props.theme['$card-border-radius-inner'], props.theme['$card-border-radius-inner']) + '\n      }\n    }\n    \n    \n    /*\n     Header navs\n    */\n    \n    & .card-header-tabs {\n      margin-right: -' + props.theme['$card-margin-x-halved'] + ';\n      margin-bottom: -' + props.theme['$card-spacer-y'] + ';\n      margin-left: -' + props.theme['$card-margin-x-halved'] + ';\n      border-bottom: 0;\n    }\n    \n    & .card-header-pills {\n      margin-right: -' + props.theme['$card-margin-x-halved'] + ';\n      margin-left: -' + props.theme['$card-margin-x-halved'] + ';\n    }\n    \n    \n    /*\n     Background variations\n    */\n    \n    &.card-primary {\n      ' + cards_2(props.theme['$brand-primary'], props.theme['$brand-primary']) + '\n    }\n    &.card-success {\n      ' + cards_2(props.theme['$brand-success'], props.theme['$brand-success']) + '\n    }\n    &.card-info {\n      ' + cards_2(props.theme['$brand-info'], props.theme['$brand-info']) + '\n    }\n    &.card-warning {\n      ' + cards_2(props.theme['$brand-warning'], props.theme['$brand-warning']) + '\n    }\n    &.card-danger {\n      ' + cards_2(props.theme['$brand-danger'], props.theme['$brand-danger']) + '\n    }\n    \n    /* Remove all backgrounds */\n    &.card-outline-primary {\n      ' + cards_3(props.theme['$btn-primary-bg']) + '\n    }\n    &.card-outline-secondary {\n      ' + cards_3(props.theme['$btn-secondary-border']) + '\n    }\n    &.card-outline-info {\n      ' + cards_3(props.theme['$btn-info-bg']) + '\n    }\n    &.card-outline-success {\n      ' + cards_3(props.theme['$btn-success-bg']) + '\n    }\n    &.card-outline-warning {\n      ' + cards_3(props.theme['$btn-warning-bg']) + '\n    }\n    &.card-outline-danger {\n      ' + cards_3(props.theme['$btn-danger-bg']) + '\n    }\n    \n    /*\n     Inverse text within a card for use with dark backgrounds\n    */\n    \n    &.card-inverse {\n      ' + cards_4(props.theme['$enable-hover-media-query'], props.theme['$card-link-hover-color']) + '\n    }\n    \n    /*\n     Blockquote\n    */\n    \n    & .card-blockquote {\n      padding: 0;\n      margin-bottom: 0;\n      border-left: 0;\n    }\n    \n    /* Card image */\n    & .card-img {\n      ' + borderRadius_2(props.theme['$enable-rounded'], props.theme['$card-border-radius-inner']) + '\n    }\n    \n    & .card-img-overlay {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      padding: ' + props.theme['$card-img-overlay-padding'] + ';\n    }\n    \n    \n    \n    /* Card image caps */\n    & .card-img-top {\n      ' + borderRadius_3(props.theme['$enable-rounded'], props.theme['$card-border-radius-inner']) + '\n    }\n    \n    & .card-img-bottom {\n      ' + borderRadius_5(props.theme['$enable-rounded'], props.theme['$card-border-radius-inner']) + '\n    }\n  ';
});
Card.defaultProps = defaultProps$68;
Card.propTypes = propTypes$79;

var defaultProps$69 = {
  tag: 'div',
  theme: {
    '$brand-primary': '#0275d8',
    '$brand-success': '#5cb85c',
    '$brand-info': '#5bc0de',
    '$brand-warning': '#f0ad4e',
    '$brand-danger': '#d9534f',
    '$brand-inverse': '#292b2c',
    '$card-spacer-x': '1.25rem',
    '$card-spacer-y': '.75rem',
    '$card-border-width': '1px',
    '$card-border-radius': '.25rem',
    '$card-border-color': 'rgba(0, 0, 0, 0.125)',
    '$card-border-radius-inner': 'calc(.25rem - 1px)',
    '$card-cap-bg': '#f7f7f9',
    '$card-bg': '#fff',
    '$card-link-hover-color': '#fff',
    '$card-img-overlay-padding': '1.25rem',
    '$card-margin-y-halved': '0.375rem',
    '$card-margin-x-halved': '0.375rem',
    '$card-columns-count-md': '2',
    '$card-columns-gap-md': '1rem',
    '$card-columns-margin-md': '.75rem',
    '$card-columns-count-lg': '2',
    '$card-columns-gap-lg': '1.15rem',
    '$card-columns-margin-lg': '.75rem',
    '$card-columns-count-xl': '2',
    '$card-columns-gap-xl': '1.25rem',
    '$card-columns-margin-xl': '.75rem',
    '$card-columns-count-xxl': '3',
    '$card-columns-gap-xxl': '1.25rem',
    '$card-columns-margin-xxl': '.75rem',
    '$card-deck-margin': '15px',
    '$btn-primary-bg': '#0275d8',
    '$btn-secondary-border': '#ccc',
    '$btn-info-bg': '#5bc0de',
    '$btn-success-bg': '#5cb85c',
    '$btn-warning-bg': '#f0ad4e',
    '$btn-danger-bg': '#d9534f',
    '$enable-rounded': false,
    '$enable-hover-media-query': false
  }
};
var propTypes$80 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  theme: propTypes$1.shape({
    '$brand-primary': propTypes$1.string,
    '$brand-success': propTypes$1.string,
    '$brand-info': propTypes$1.string,
    '$brand-warning': propTypes$1.string,
    '$brand-danger': propTypes$1.string,
    '$brand-inverse': propTypes$1.string,
    '$card-spacer-x': propTypes$1.string,
    '$card-spacer-y': propTypes$1.string,
    '$card-border-width': propTypes$1.string,
    '$card-border-radius': propTypes$1.string,
    '$card-border-color': propTypes$1.string,
    '$card-border-radius-inner': propTypes$1.string,
    '$card-cap-bg': propTypes$1.string,
    '$card-bg': propTypes$1.string,
    '$card-link-hover-color': propTypes$1.string,
    '$card-img-overlay-padding': propTypes$1.string,
    '$card-margin-y-halved': propTypes$1.string,
    '$card-margin-x-halved': propTypes$1.string,
    '$card-columns-count-md': propTypes$1.string,
    '$card-columns-gap-md': propTypes$1.string,
    '$card-columns-margin-md': propTypes$1.string,
    '$card-columns-count-lg': propTypes$1.string,
    '$card-columns-gap-lg': propTypes$1.string,
    '$card-columns-margin-lg': propTypes$1.string,
    '$card-columns-count-xl': propTypes$1.string,
    '$card-columns-gap-xl': propTypes$1.string,
    '$card-columns-margin-xl': propTypes$1.string,
    '$card-columns-count-xxl': propTypes$1.string,
    '$card-columns-gap-xxl': propTypes$1.string,
    '$card-columns-margin-xxl': propTypes$1.string,
    '$card-deck-margin': propTypes$1.string,
    '$btn-primary-bg': propTypes$1.string,
    '$btn-secondary-border': propTypes$1.string,
    '$btn-info-bg': propTypes$1.string,
    '$btn-success-bg': propTypes$1.string,
    '$btn-warning-bg': propTypes$1.string,
    '$btn-danger-bg': propTypes$1.string,
    '$link-color': propTypes$1.string,
    '$link-decoration': propTypes$1.string,
    '$link-hover-color': propTypes$1.string,
    '$link-hover-decoration': propTypes$1.string,
    '$enable-rounded': propTypes$1.bool,
    '$enable-hover-media-query': propTypes$1.bool
  }),
  cssModule: propTypes$1.object
};
var CardColumnsUnstyled = function (_React$Component) {
  inherits(CardColumnsUnstyled, _React$Component);
  function CardColumnsUnstyled() {
    classCallCheck(this, CardColumnsUnstyled);
    return possibleConstructorReturn(this, (CardColumnsUnstyled.__proto__ || Object.getPrototypeOf(CardColumnsUnstyled)).apply(this, arguments));
  }
  createClass(CardColumnsUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames(className, 'card-columns'), cssModule)
      }, attributes));
    }
  }]);
  return CardColumnsUnstyled;
}(React.Component);
CardColumnsUnstyled.defaultProps = defaultProps$69;
CardColumnsUnstyled.propTypes = propTypes$80;
var CardColumns = styled(CardColumnsUnstyled).withConfig({
  displayName: 'CardColumns'
})(['', ''], function (props) {
  return '\n    ' + cards_5(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$card-spacer-y'], props.theme['$card-spacer-x'], props.theme['$card-bg'], props.theme['$card-border-width'], props.theme['$card-border-color'], props.theme['$card-border-radius'], props.theme['$card-margin-y-halved'], props.theme['$card-margin-x-halved'], props.theme['$card-cap-bg'], props.theme['$card-border-radius-inner'], props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$btn-primary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-bg'], props.theme['$btn-success-bg'], props.theme['$btn-warning-bg'], props.theme['$btn-danger-bg'], props.theme['$card-link-hover-color'], props.theme['$card-img-overlay-padding'], props.theme['$card-inverse-bg-color'], props.theme['$card-inverse-border-color']) + '\n    ' + breakpoints_6('md', props.theme['$grid-breakpoints'], '\n        &.card-columns {\n          column-count: ' + props.theme['$card-columns-count-md'] + ';\n          column-gap: ' + props.theme['$card-columns-gap-md'] + ';\n      \n          .card {\n            display: inline-block; /* Don\'t let them vertically span multiple columns */\n            width: 100%; /* Don\'t let them exceed the column width */\n            margin-bottom: ' + props.theme['$card-columns-margin-md'] + ';\n          }\n        }\n      ') + '\n    ' + breakpoints_6('lg', props.theme['$grid-breakpoints'], '\n        &.card-columns {\n          column-count: ' + props.theme['$card-columns-count-lg'] + ';\n          column-gap: ' + props.theme['$card-columns-gap-lg'] + ';\n      \n          .card {\n            display: inline-block; /* Don\'t let them vertically span multiple columns */\n            width: 100%; /* Don\'t let them exceed the column width */\n            margin-bottom: ' + props.theme['$card-columns-margin-lg'] + ';\n          }\n        }\n      ') + '\n    ' + breakpoints_6('xl', props.theme['$grid-breakpoints'], '\n        &.card-columns {\n          column-count: ' + props.theme['$card-columns-count-xl'] + ';\n          column-gap: ' + props.theme['$card-columns-gap-xl'] + ';\n      \n          .card {\n            display: inline-block; /* Don\'t let them vertically span multiple columns */\n            width: 100%; /* Don\'t let them exceed the column width */\n            margin-bottom: ' + props.theme['$card-columns-margin-xl'] + ';\n          }\n        }\n      ') + '\n    ' + breakpoints_6('xxl', props.theme['$grid-breakpoints'], '\n        &.card-columns {\n          column-count: ' + props.theme['$card-columns-count-xxl'] + ';\n          column-gap: ' + props.theme['$card-columns-gap-xxl'] + ';\n      \n          .card {\n            display: inline-block; /* Don\'t let them vertically span multiple columns */\n            width: 100%; /* Don\'t let them exceed the column width */\n            margin-bottom: ' + props.theme['$card-columns-margin-xxl'] + ';\n          }\n        }\n      ') + '\n  ';
});
CardColumns.defaultProps = defaultProps$69;
CardColumns.propTypes = propTypes$80;

var defaultProps$70 = {
  tag: 'div',
  theme: {
    '$brand-primary': '#0275d8',
    '$brand-success': '#5cb85c',
    '$brand-info': '#5bc0de',
    '$brand-warning': '#f0ad4e',
    '$brand-danger': '#d9534f',
    '$brand-inverse': '#292b2c',
    '$card-spacer-x': '1.25rem',
    '$card-spacer-y': '.75rem',
    '$card-border-width': '1px',
    '$card-border-radius': '.25rem',
    '$card-border-color': 'rgba(0, 0, 0, 0.125)',
    '$card-border-radius-inner': 'calc(.25rem - 1px)',
    '$card-cap-bg': '#f7f7f9',
    '$card-bg': '#fff',
    '$card-link-hover-color': '#fff',
    '$card-img-overlay-padding': '1.25rem',
    '$card-margin-y-halved': '0.375rem',
    '$card-margin-x-halved': '0.375rem',
    '$card-columns-count-md': '2',
    '$card-columns-gap-md': '1rem',
    '$card-columns-margin-md': '.75rem',
    '$card-columns-count-lg': '2',
    '$card-columns-gap-lg': '1.15rem',
    '$card-columns-margin-lg': '.75rem',
    '$card-columns-count-xl': '2',
    '$card-columns-gap-xl': '1.25rem',
    '$card-columns-margin-xl': '.75rem',
    '$card-columns-count-xxl': '3',
    '$card-columns-gap-xxl': '1.25rem',
    '$card-columns-margin-xxl': '.75rem',
    '$card-deck-margin': '15px',
    '$btn-primary-bg': '#0275d8',
    '$btn-secondary-border': '#ccc',
    '$btn-info-bg': '#5bc0de',
    '$btn-success-bg': '#5cb85c',
    '$btn-warning-bg': '#f0ad4e',
    '$btn-danger-bg': '#d9534f',
    '$enable-rounded': false,
    '$enable-hover-media-query': false
  }
};
var propTypes$81 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  theme: propTypes$1.shape({
    '$brand-primary': propTypes$1.string,
    '$brand-success': propTypes$1.string,
    '$brand-info': propTypes$1.string,
    '$brand-warning': propTypes$1.string,
    '$brand-danger': propTypes$1.string,
    '$brand-inverse': propTypes$1.string,
    '$card-spacer-x': propTypes$1.string,
    '$card-spacer-y': propTypes$1.string,
    '$card-border-width': propTypes$1.string,
    '$card-border-radius': propTypes$1.string,
    '$card-border-color': propTypes$1.string,
    '$card-border-radius-inner': propTypes$1.string,
    '$card-cap-bg': propTypes$1.string,
    '$card-bg': propTypes$1.string,
    '$card-link-hover-color': propTypes$1.string,
    '$card-img-overlay-padding': propTypes$1.string,
    '$card-margin-y-halved': propTypes$1.string,
    '$card-margin-x-halved': propTypes$1.string,
    '$card-columns-count-md': propTypes$1.string,
    '$card-columns-gap-md': propTypes$1.string,
    '$card-columns-margin-md': propTypes$1.string,
    '$card-columns-count-lg': propTypes$1.string,
    '$card-columns-gap-lg': propTypes$1.string,
    '$card-columns-margin-lg': propTypes$1.string,
    '$card-columns-count-xl': propTypes$1.string,
    '$card-columns-gap-xl': propTypes$1.string,
    '$card-columns-margin-xl': propTypes$1.string,
    '$card-columns-count-xxl': propTypes$1.string,
    '$card-columns-gap-xxl': propTypes$1.string,
    '$card-columns-margin-xxl': propTypes$1.string,
    '$card-deck-margin': propTypes$1.string,
    '$btn-primary-bg': propTypes$1.string,
    '$btn-secondary-border': propTypes$1.string,
    '$btn-info-bg': propTypes$1.string,
    '$btn-success-bg': propTypes$1.string,
    '$btn-warning-bg': propTypes$1.string,
    '$btn-danger-bg': propTypes$1.string,
    '$link-color': propTypes$1.string,
    '$link-decoration': propTypes$1.string,
    '$link-hover-color': propTypes$1.string,
    '$link-hover-decoration': propTypes$1.string,
    '$enable-rounded': propTypes$1.bool,
    '$enable-hover-media-query': propTypes$1.bool
  }),
  cssModule: propTypes$1.object
};
var CardDeckUnstyled = function (_React$Component) {
  inherits(CardDeckUnstyled, _React$Component);
  function CardDeckUnstyled() {
    classCallCheck(this, CardDeckUnstyled);
    return possibleConstructorReturn(this, (CardDeckUnstyled.__proto__ || Object.getPrototypeOf(CardDeckUnstyled)).apply(this, arguments));
  }
  createClass(CardDeckUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames(className, 'card-deck'), cssModule)
      }, attributes));
    }
  }]);
  return CardDeckUnstyled;
}(React.Component);
CardDeckUnstyled.defaultProps = defaultProps$70;
CardDeckUnstyled.propTypes = propTypes$81;
var CardDeck = styled(CardDeckUnstyled).withConfig({
  displayName: 'CardDeck'
})(['', ''], function (props) {
  return '\n    ' + cards_5(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$card-spacer-y'], props.theme['$card-spacer-x'], props.theme['$card-bg'], props.theme['$card-border-width'], props.theme['$card-border-color'], props.theme['$card-border-radius'], props.theme['$card-margin-y-halved'], props.theme['$card-margin-x-halved'], props.theme['$card-cap-bg'], props.theme['$card-border-radius-inner'], props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$btn-primary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-bg'], props.theme['$btn-success-bg'], props.theme['$btn-warning-bg'], props.theme['$btn-danger-bg'], props.theme['$card-link-hover-color'], props.theme['$card-img-overlay-padding'], props.theme['$card-inverse-bg-color'], props.theme['$card-inverse-border-color']) + '\n    ' + breakpoints_6('sm', props.theme['$grid-breakpoints'], '\n        &.card-deck {\n          display: flex;\n          flex-flow: row wrap;\n        \n          .card {\n            display: flex;\n            flex: 1 0 0;\n            flex-direction: column;  \n            &:not(:first-child) { margin-left: ' + props.theme['$card-deck-margin'] + '; }\n            &:not(:last-child) { margin-right: ' + props.theme['$card-deck-margin'] + '; }\n          }\n        }\n      ') + '\n  ';
});
CardDeck.defaultProps = defaultProps$70;
CardDeck.propTypes = propTypes$81;

var defaultProps$71 = {
  tag: 'div',
  theme: {
    '$brand-primary': '#0275d8',
    '$brand-success': '#5cb85c',
    '$brand-info': '#5bc0de',
    '$brand-warning': '#f0ad4e',
    '$brand-danger': '#d9534f',
    '$brand-inverse': '#292b2c',
    '$card-spacer-x': '1.25rem',
    '$card-spacer-y': '.75rem',
    '$card-border-width': '1px',
    '$card-border-radius': '.25rem',
    '$card-border-color': 'rgba(0, 0, 0, 0.125)',
    '$card-border-radius-inner': 'calc(.25rem - 1px)',
    '$card-cap-bg': '#f7f7f9',
    '$card-bg': '#fff',
    '$card-link-hover-color': '#fff',
    '$card-img-overlay-padding': '1.25rem',
    '$card-margin-y-halved': '0.375rem',
    '$card-margin-x-halved': '0.375rem',
    '$card-columns-count-md': '2',
    '$card-columns-gap-md': '1rem',
    '$card-columns-margin-md': '.75rem',
    '$card-columns-count-lg': '2',
    '$card-columns-gap-lg': '1.15rem',
    '$card-columns-margin-lg': '.75rem',
    '$card-columns-count-xl': '2',
    '$card-columns-gap-xl': '1.25rem',
    '$card-columns-margin-xl': '.75rem',
    '$card-columns-count-xxl': '3',
    '$card-columns-gap-xxl': '1.25rem',
    '$card-columns-margin-xxl': '.75rem',
    '$card-deck-margin': '15px',
    '$btn-primary-bg': '#0275d8',
    '$btn-secondary-border': '#ccc',
    '$btn-info-bg': '#5bc0de',
    '$btn-success-bg': '#5cb85c',
    '$btn-warning-bg': '#f0ad4e',
    '$btn-danger-bg': '#d9534f',
    '$enable-rounded': false,
    '$enable-hover-media-query': false
  }
};
var propTypes$82 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  theme: propTypes$1.shape({
    '$brand-primary': propTypes$1.string,
    '$brand-success': propTypes$1.string,
    '$brand-info': propTypes$1.string,
    '$brand-warning': propTypes$1.string,
    '$brand-danger': propTypes$1.string,
    '$brand-inverse': propTypes$1.string,
    '$card-spacer-x': propTypes$1.string,
    '$card-spacer-y': propTypes$1.string,
    '$card-border-width': propTypes$1.string,
    '$card-border-radius': propTypes$1.string,
    '$card-border-color': propTypes$1.string,
    '$card-border-radius-inner': propTypes$1.string,
    '$card-cap-bg': propTypes$1.string,
    '$card-bg': propTypes$1.string,
    '$card-link-hover-color': propTypes$1.string,
    '$card-img-overlay-padding': propTypes$1.string,
    '$card-margin-y-halved': propTypes$1.string,
    '$card-margin-x-halved': propTypes$1.string,
    '$card-columns-count-md': propTypes$1.string,
    '$card-columns-gap-md': propTypes$1.string,
    '$card-columns-margin-md': propTypes$1.string,
    '$card-columns-count-lg': propTypes$1.string,
    '$card-columns-gap-lg': propTypes$1.string,
    '$card-columns-margin-lg': propTypes$1.string,
    '$card-columns-count-xl': propTypes$1.string,
    '$card-columns-gap-xl': propTypes$1.string,
    '$card-columns-margin-xl': propTypes$1.string,
    '$card-columns-count-xxl': propTypes$1.string,
    '$card-columns-gap-xxl': propTypes$1.string,
    '$card-columns-margin-xxl': propTypes$1.string,
    '$card-deck-margin': propTypes$1.string,
    '$btn-primary-bg': propTypes$1.string,
    '$btn-secondary-border': propTypes$1.string,
    '$btn-info-bg': propTypes$1.string,
    '$btn-success-bg': propTypes$1.string,
    '$btn-warning-bg': propTypes$1.string,
    '$btn-danger-bg': propTypes$1.string,
    '$link-color': propTypes$1.string,
    '$link-decoration': propTypes$1.string,
    '$link-hover-color': propTypes$1.string,
    '$link-hover-decoration': propTypes$1.string,
    '$enable-rounded': propTypes$1.bool,
    '$enable-hover-media-query': propTypes$1.bool
  }),
  cssModule: propTypes$1.object
};
var CardGroupUnstyled = function (_React$Component) {
  inherits(CardGroupUnstyled, _React$Component);
  function CardGroupUnstyled() {
    classCallCheck(this, CardGroupUnstyled);
    return possibleConstructorReturn(this, (CardGroupUnstyled.__proto__ || Object.getPrototypeOf(CardGroupUnstyled)).apply(this, arguments));
  }
  createClass(CardGroupUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          attributes = objectWithoutProperties(_omit, ['className', 'cssModule', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames(className, 'card-group'), cssModule)
      }, attributes));
    }
  }]);
  return CardGroupUnstyled;
}(React.Component);
CardGroupUnstyled.defaultProps = defaultProps$71;
CardGroupUnstyled.propTypes = propTypes$82;
var CardGroup = styled(CardGroupUnstyled).withConfig({
  displayName: 'CardGroup'
})(['', ''], function (props) {
  return '\n    ' + cards_5(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$card-spacer-y'], props.theme['$card-spacer-x'], props.theme['$card-bg'], props.theme['$card-border-width'], props.theme['$card-border-color'], props.theme['$card-border-radius'], props.theme['$card-margin-y-halved'], props.theme['$card-margin-x-halved'], props.theme['$card-cap-bg'], props.theme['$card-border-radius-inner'], props.theme['$brand-primary'], props.theme['$brand-success'], props.theme['$brand-info'], props.theme['$brand-warning'], props.theme['$brand-danger'], props.theme['$btn-primary-bg'], props.theme['$btn-secondary-border'], props.theme['$btn-info-bg'], props.theme['$btn-success-bg'], props.theme['$btn-warning-bg'], props.theme['$btn-danger-bg'], props.theme['$card-link-hover-color'], props.theme['$card-img-overlay-padding'], props.theme['$card-inverse-bg-color'], props.theme['$card-inverse-border-color']) + '\n    /*\n      Card group\n    */\n      ' + breakpoints_6('sm', props.theme['$grid-breakpoints'], '\n          &.card-group {\n            display: flex;\n            flex-flow: row wrap;\n        \n            .card {\n              flex: 1 0 0;\n        \n              + .card {\n                margin-left: 0;\n                border-left: 0;\n              }\n        \n            ' + conditional_1(props.theme['$enable-rounded'], '\n                &:first-child {\n                  ' + borderRadius_4(props.theme['$enable-rounded'], '0') + '\n                  .card-img-top {\n                    border-top-right-radius: 0;\n                  }\n                  \n                  .card-img-bottom {\n                    border-bottom-right-radius: 0;\n                  }\n                }\n              \n                &:last-child {\n                  ' + borderRadius_6(props.theme['$enable-rounded'], '0') + '\n                  \n                  .card-img-top {\n                    border-top-left-radius: 0;\n                  }\n                  \n                  .card-img-bottom {\n                    border-bottom-left-radius: 0;\n                  }\n                }\n                \n                &:not(:first-child):not(:last-child) {\n                  border-radius: 0;\n        \n                  .card-img-top,\n                  .card-img-bottom {\n                    border-radius: 0;\n                  }\n                }\n              ') + '  \n          }\n        }\n      ') + '\n  ';
});
CardGroup.defaultProps = defaultProps$71;
CardGroup.propTypes = propTypes$82;

var defaultProps$72 = {
  tag: 'div'
};
var propTypes$83 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  cssModule: propTypes$1.object
};
var CardBlock = function (_React$Component) {
  inherits(CardBlock, _React$Component);
  function CardBlock() {
    classCallCheck(this, CardBlock);
    return possibleConstructorReturn(this, (CardBlock.__proto__ || Object.getPrototypeOf(CardBlock)).apply(this, arguments));
  }
  createClass(CardBlock, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames(className, 'card-block'), cssModule)
      }, attributes));
    }
  }]);
  return CardBlock;
}(React.Component);
CardBlock.defaultProps = defaultProps$72;
CardBlock.propTypes = propTypes$83;
CardBlock.defaultProps = defaultProps$72;
CardBlock.propTypes = propTypes$83;

var defaultProps$73 = {
  tag: 'div'
};
var propTypes$84 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  cssModule: propTypes$1.object
};
var CardFooter = function (_React$Component) {
  inherits(CardFooter, _React$Component);
  function CardFooter() {
    classCallCheck(this, CardFooter);
    return possibleConstructorReturn(this, (CardFooter.__proto__ || Object.getPrototypeOf(CardFooter)).apply(this, arguments));
  }
  createClass(CardFooter, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames(className, 'card-footer'), cssModule)
      }, attributes));
    }
  }]);
  return CardFooter;
}(React.Component);
CardFooter.defaultProps = defaultProps$73;
CardFooter.propTypes = propTypes$84;
CardFooter.defaultProps = defaultProps$73;
CardFooter.propTypes = propTypes$84;

var defaultProps$74 = {
  tag: 'div'
};
var propTypes$85 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  cssModule: propTypes$1.object
};
var CardHeader = function (_React$Component) {
  inherits(CardHeader, _React$Component);
  function CardHeader() {
    classCallCheck(this, CardHeader);
    return possibleConstructorReturn(this, (CardHeader.__proto__ || Object.getPrototypeOf(CardHeader)).apply(this, arguments));
  }
  createClass(CardHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames(className, 'card-header'), cssModule)
      }, attributes));
    }
  }]);
  return CardHeader;
}(React.Component);
CardHeader.defaultProps = defaultProps$74;
CardHeader.propTypes = propTypes$85;
CardHeader.defaultProps = defaultProps$74;
CardHeader.propTypes = propTypes$85;

var defaultProps$75 = {
  tag: 'img'
};
var propTypes$86 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  top: propTypes$1.bool,
  bottom: propTypes$1.bool,
  cssModule: propTypes$1.object
};
var CardImg = function (_React$Component) {
  inherits(CardImg, _React$Component);
  function CardImg() {
    classCallCheck(this, CardImg);
    return possibleConstructorReturn(this, (CardImg.__proto__ || Object.getPrototypeOf(CardImg)).apply(this, arguments));
  }
  createClass(CardImg, [{
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
        className: mapToCssModules(classnames(className, cardImgClassName), cssModule)
      }, attributes));
    }
  }]);
  return CardImg;
}(React.Component);
CardImg.defaultProps = defaultProps$75;
CardImg.propTypes = propTypes$86;
CardImg.defaultProps = defaultProps$75;
CardImg.propTypes = propTypes$86;

var defaultProps$76 = {
  tag: 'div'
};
var propTypes$87 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  cssModule: propTypes$1.object
};
var CardImgOverlay = function (_React$Component) {
  inherits(CardImgOverlay, _React$Component);
  function CardImgOverlay() {
    classCallCheck(this, CardImgOverlay);
    return possibleConstructorReturn(this, (CardImgOverlay.__proto__ || Object.getPrototypeOf(CardImgOverlay)).apply(this, arguments));
  }
  createClass(CardImgOverlay, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames(className, 'card-img-overlay'), cssModule)
      }, attributes));
    }
  }]);
  return CardImgOverlay;
}(React.Component);
CardImgOverlay.defaultProps = defaultProps$76;
CardImgOverlay.propTypes = propTypes$87;
CardImgOverlay.defaultProps = defaultProps$76;
CardImgOverlay.propTypes = propTypes$87;

var defaultProps$77 = {
  tag: A
};
var propTypes$88 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  innerRef: propTypes$1.func,
  cssModule: propTypes$1.object
};
var CardLink = function (_React$Component) {
  inherits(CardLink, _React$Component);
  function CardLink() {
    classCallCheck(this, CardLink);
    return possibleConstructorReturn(this, (CardLink.__proto__ || Object.getPrototypeOf(CardLink)).apply(this, arguments));
  }
  createClass(CardLink, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          innerRef = _props.innerRef,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'tag', 'innerRef']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames(className, 'card-link'), cssModule),
        ref: innerRef
      }, attributes));
    }
  }]);
  return CardLink;
}(React.Component);
CardLink.defaultProps = defaultProps$77;
CardLink.propTypes = propTypes$88;
CardLink.defaultProps = defaultProps$77;
CardLink.propTypes = propTypes$88;

var defaultProps$78 = {
  tag: H6
};
var propTypes$89 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  cssModule: propTypes$1.object
};
var CardSubtitle = function (_React$Component) {
  inherits(CardSubtitle, _React$Component);
  function CardSubtitle() {
    classCallCheck(this, CardSubtitle);
    return possibleConstructorReturn(this, (CardSubtitle.__proto__ || Object.getPrototypeOf(CardSubtitle)).apply(this, arguments));
  }
  createClass(CardSubtitle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames(className, 'card-subtitle'), cssModule)
      }, attributes));
    }
  }]);
  return CardSubtitle;
}(React.Component);
CardSubtitle.defaultProps = defaultProps$78;
CardSubtitle.propTypes = propTypes$89;
CardSubtitle.defaultProps = defaultProps$78;
CardSubtitle.propTypes = propTypes$89;

var defaultProps$79 = {
  tag: 'p'
};
var propTypes$90 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  cssModule: propTypes$1.object
};
var CardText = function (_React$Component) {
  inherits(CardText, _React$Component);
  function CardText() {
    classCallCheck(this, CardText);
    return possibleConstructorReturn(this, (CardText.__proto__ || Object.getPrototypeOf(CardText)).apply(this, arguments));
  }
  createClass(CardText, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames(className, 'card-text'), cssModule)
      }, attributes));
    }
  }]);
  return CardText;
}(React.Component);
CardText.defaultProps = defaultProps$79;
CardText.propTypes = propTypes$90;
CardText.defaultProps = defaultProps$79;
CardText.propTypes = propTypes$90;

var defaultProps$80 = {
  tag: H4
};
var propTypes$91 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  cssModule: propTypes$1.object
};
var CardTitle = function (_React$Component) {
  inherits(CardTitle, _React$Component);
  function CardTitle() {
    classCallCheck(this, CardTitle);
    return possibleConstructorReturn(this, (CardTitle.__proto__ || Object.getPrototypeOf(CardTitle)).apply(this, arguments));
  }
  createClass(CardTitle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames(className, 'card-title'), cssModule)
      }, attributes));
    }
  }]);
  return CardTitle;
}(React.Component);
CardTitle.defaultProps = defaultProps$80;
CardTitle.propTypes = propTypes$91;
CardTitle.defaultProps = defaultProps$80;
CardTitle.propTypes = propTypes$91;

var defaultProps$81 = {
  tag: Blockquote
};
var propTypes$92 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  cssModule: propTypes$1.object
};
var CardBlockquote = function (_React$Component) {
  inherits(CardBlockquote, _React$Component);
  function CardBlockquote() {
    classCallCheck(this, CardBlockquote);
    return possibleConstructorReturn(this, (CardBlockquote.__proto__ || Object.getPrototypeOf(CardBlockquote)).apply(this, arguments));
  }
  createClass(CardBlockquote, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'tag']);
      return React.createElement(Tag, _extends({
        className: mapToCssModules(classnames(className, 'card-blockquote'), cssModule)
      }, attributes));
    }
  }]);
  return CardBlockquote;
}(React.Component);
CardBlockquote.defaultProps = defaultProps$81;
CardBlockquote.propTypes = propTypes$92;
CardBlockquote.defaultProps = defaultProps$81;
CardBlockquote.propTypes = propTypes$92;

var defaultProps$82 = {
  tag: Card,
  delay: 350
};
var propTypes$93 = {
  className: propTypes$1.string,
  children: propTypes$1.node,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  delay: propTypes$1.oneOfType([propTypes$1.shape({ show: propTypes$1.number, hide: propTypes$1.number }), propTypes$1.number]),
  heading: propTypes$1.oneOfType([propTypes$1.node, propTypes$1.string]),
  name: propTypes$1.string
};
var Accordion = function (_React$Component) {
  inherits(Accordion, _React$Component);
  function Accordion() {
    classCallCheck(this, Accordion);
    return possibleConstructorReturn(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).apply(this, arguments));
  }
  createClass(Accordion, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          name = _props.name,
          children = _props.children,
          heading = _props.heading,
          Tag = _props.tag,
          delay = _props.delay,
          attributes = objectWithoutProperties(_props, ['className', 'name', 'children', 'heading', 'tag', 'delay']);
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
          { delay: delay, isOpen: optional.isOpened },
          children
        )
      );
    }
  }]);
  return Accordion;
}(React.Component);
Accordion.defaultProps = defaultProps$82;
Accordion.propTypes = propTypes$93;
Accordion.contextTypes = {
  accordionGroup: propTypes$1.object
};
Accordion.defaultProps = defaultProps$82;
Accordion.propTypes = propTypes$93;

var propTypes$94 = {
  activeAccordionName: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.number, propTypes$1.bool]),
  onChange: propTypes$1.func,
  'heading-component': propTypes$1.bool
};
var AccordionGroup = function (_React$Component) {
  inherits(AccordionGroup, _React$Component);
  function AccordionGroup() {
    classCallCheck(this, AccordionGroup);
    return possibleConstructorReturn(this, (AccordionGroup.__proto__ || Object.getPrototypeOf(AccordionGroup)).apply(this, arguments));
  }
  createClass(AccordionGroup, [{
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
      var _omit = lodash_omit(attributes, ['activeAccordionName', 'onClick', 'headingComponent']),
          restAfterChildContext = objectWithoutProperties(_omit, []);
      return React.createElement('div', restAfterChildContext);
    }
  }]);
  return AccordionGroup;
}(React.Component);
AccordionGroup.propTypes = propTypes$94;
AccordionGroup.childContextTypes = {
  accordionGroup: propTypes$1.object
};
AccordionGroup.propTypes = propTypes$94;

var customForms_1 = createCommonjsModule(function (module, exports) {
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = undefined;
exports.customForms = customForms;
var _unitUtils2 = _interopRequireDefault(unitUtils);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var defaultProps = exports.defaultProps = {
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
  var $enableRounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps['$enable-rounded'];
  var $enableShadows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultProps['$enable-shadows'];
  var $customControlCheckedIndicatorBoxShadow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultProps['$custom-control-checked-indicator-box-shadow'];
  var $customControlActiveIndicatorBoxShadow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultProps['$custom-control-active-indicator-box-shadow'];
  var $customControlIndicatorBoxShadow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : defaultProps['$custom-control-indicator-box-shadow'];
  var $customCheckboxIndeterminateBoxShadow = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : defaultProps['$custom-checkbox-indeterminate-box-shadow'];
  var $customSelectFocusBoxShadow = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : defaultProps['$custom-select-focus-box-shadow'];
  var $customFileFocusBoxShadow = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : defaultProps['$custom-file-focus-box-shadow'];
  var $customFileBoxShadow = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : defaultProps['$custom-file-box-shadow'];
  var $customSelectBorderRadius = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : defaultProps['$custom-select-border-radius'];
  var $customFileBorderRadius = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : defaultProps['$custom-file-border-radius'];
  var $customCheckboxRadius = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : defaultProps['$custom-checkbox-radius'];
  var $inputBg = arguments.length > 12 && arguments[12] !== undefined ? arguments[12] : defaultProps['$input-bg'];
  var $customSelectLineHeight = arguments.length > 13 && arguments[13] !== undefined ? arguments[13] : defaultProps['$custom-select-line-height'];
  var $lineHeightBase = arguments.length > 14 && arguments[14] !== undefined ? arguments[14] : defaultProps['$line-height-base'];
  var $customControlGutter = arguments.length > 15 && arguments[15] !== undefined ? arguments[15] : defaultProps['$custom-control-gutter'];
  var $customControlSpacerX = arguments.length > 16 && arguments[16] !== undefined ? arguments[16] : defaultProps['$custom-control-spacer-x'];
  var $customControlCheckedIndicatorColor = arguments.length > 17 && arguments[17] !== undefined ? arguments[17] : defaultProps['$custom-control-checked-indicator-color'];
  var $customControlCheckedIndicatorBg = arguments.length > 18 && arguments[18] !== undefined ? arguments[18] : defaultProps['$custom-control-checked-indicator-bg'];
  var $customControlFocusIndicatorBoxShadow = arguments.length > 19 && arguments[19] !== undefined ? arguments[19] : defaultProps['$custom-control-focus-indicator-box-shadow'];
  var $customControlActiveIndicatorColor = arguments.length > 20 && arguments[20] !== undefined ? arguments[20] : defaultProps['$custom-control-active-indicator-color'];
  var $customControlActiveIndicatorBg = arguments.length > 21 && arguments[21] !== undefined ? arguments[21] : defaultProps['$custom-control-active-indicator-bg'];
  var $customControlDisabledCursor = arguments.length > 22 && arguments[22] !== undefined ? arguments[22] : defaultProps['$custom-control-disabled-cursor'];
  var $customControlDisabledIndicatorBg = arguments.length > 23 && arguments[23] !== undefined ? arguments[23] : defaultProps['$custom-control-disabled-indicator-bg'];
  var $customControlDisabledDescriptionColor = arguments.length > 24 && arguments[24] !== undefined ? arguments[24] : defaultProps['$custom-control-disabled-description-color'];
  var $customControlIndicatorSize = arguments.length > 25 && arguments[25] !== undefined ? arguments[25] : defaultProps['$custom-control-indicator-size'];
  var $customControlIndicatorBg = arguments.length > 26 && arguments[26] !== undefined ? arguments[26] : defaultProps['$custom-control-indicator-bg'];
  var $customControlIndicatorBgSize = arguments.length > 27 && arguments[27] !== undefined ? arguments[27] : defaultProps['$custom-control-indicator-bg-size'];
  var $customCheckboxCheckedIcon = arguments.length > 28 && arguments[28] !== undefined ? arguments[28] : defaultProps['$custom-checkbox-checked-icon'];
  var $customCheckboxIndeterminateBg = arguments.length > 29 && arguments[29] !== undefined ? arguments[29] : defaultProps['$custom-checkbox-indeterminate-bg'];
  var $customCheckboxIndeterminateIcon = arguments.length > 30 && arguments[30] !== undefined ? arguments[30] : defaultProps['$custom-checkbox-indeterminate-icon'];
  var $customRadioRadius = arguments.length > 31 && arguments[31] !== undefined ? arguments[31] : defaultProps['$custom-radio-radius'];
  var $customRadioCheckedIcon = arguments.length > 32 && arguments[32] !== undefined ? arguments[32] : defaultProps['$custom-radio-checked-icon'];
  var $customControlSpacerY = arguments.length > 33 && arguments[33] !== undefined ? arguments[33] : defaultProps['$custom-control-spacer-y'];
  var $borderWidth = arguments.length > 34 && arguments[34] !== undefined ? arguments[34] : defaultProps['$border-width'];
  var $inputHeight = arguments.length > 35 && arguments[35] !== undefined ? arguments[35] : defaultProps['$input-height'];
  var $customSelectPaddingY = arguments.length > 36 && arguments[36] !== undefined ? arguments[36] : defaultProps['$custom-select-padding-y'];
  var $customSelectPaddingX = arguments.length > 37 && arguments[37] !== undefined ? arguments[37] : defaultProps['$custom-select-padding-x'];
  var $customSelectIndicatorPadding = arguments.length > 38 && arguments[38] !== undefined ? arguments[38] : defaultProps['$custom-select-indicator-padding'];
  var $customSelectColor = arguments.length > 39 && arguments[39] !== undefined ? arguments[39] : defaultProps['$custom-select-color'];
  var $customSelectBg = arguments.length > 40 && arguments[40] !== undefined ? arguments[40] : defaultProps['$custom-select-bg'];
  var $customSelectIndicator = arguments.length > 41 && arguments[41] !== undefined ? arguments[41] : defaultProps['$custom-select-indicator'];
  var $customSelectBgSize = arguments.length > 42 && arguments[42] !== undefined ? arguments[42] : defaultProps['$custom-select-bg-size'];
  var $customSelectBorderWidth = arguments.length > 43 && arguments[43] !== undefined ? arguments[43] : defaultProps['$custom-select-border-width'];
  var $customSelectBorderColor = arguments.length > 44 && arguments[44] !== undefined ? arguments[44] : defaultProps['$custom-select-border-color'];
  var $customSelectFocusBorderColor = arguments.length > 45 && arguments[45] !== undefined ? arguments[45] : defaultProps['$custom-select-focus-border-color'];
  var $inputColor = arguments.length > 46 && arguments[46] !== undefined ? arguments[46] : defaultProps['$input-color'];
  var $customSelectDisabledColor = arguments.length > 47 && arguments[47] !== undefined ? arguments[47] : defaultProps['$custom-select-disabled-color'];
  var $cursorDisabled = arguments.length > 48 && arguments[48] !== undefined ? arguments[48] : defaultProps['$cursor-disabled'];
  var $customSelectDisabledBg = arguments.length > 49 && arguments[49] !== undefined ? arguments[49] : defaultProps['$custom-select-disabled-bg'];
  var $customSelectSmFontSize = arguments.length > 50 && arguments[50] !== undefined ? arguments[50] : defaultProps['$custom-select-sm-font-size'];
  var $customFileWidth = arguments.length > 51 && arguments[51] !== undefined ? arguments[51] : defaultProps['$custom-file-width'];
  var $customFileHeight = arguments.length > 52 && arguments[52] !== undefined ? arguments[52] : defaultProps['$custom-file-height'];
  var $customFilePaddingX = arguments.length > 53 && arguments[53] !== undefined ? arguments[53] : defaultProps['$custom-file-padding-x'];
  var $customFilePaddingY = arguments.length > 54 && arguments[54] !== undefined ? arguments[54] : defaultProps['$custom-file-padding-y'];
  var $customFileLineHeight = arguments.length > 55 && arguments[55] !== undefined ? arguments[55] : defaultProps['$custom-file-line-height'];
  var $customFileColor = arguments.length > 56 && arguments[56] !== undefined ? arguments[56] : defaultProps['$custom-file-color'];
  var $customFileBg = arguments.length > 57 && arguments[57] !== undefined ? arguments[57] : defaultProps['$custom-file-bg'];
  var $customFileBorderWidth = arguments.length > 58 && arguments[58] !== undefined ? arguments[58] : defaultProps['$custom-file-border-width'];
  var $customFileBorderColor = arguments.length > 59 && arguments[59] !== undefined ? arguments[59] : defaultProps['$custom-file-border-color'];
  var $customFileButtonColor = arguments.length > 60 && arguments[60] !== undefined ? arguments[60] : defaultProps['$custom-file-button-color'];
  var $customFileButtonBg = arguments.length > 61 && arguments[61] !== undefined ? arguments[61] : defaultProps['$custom-file-button-bg'];
  var $customFileText = arguments.length > 62 && arguments[62] !== undefined ? arguments[62] : defaultProps['$custom-file-text'];
  var customFileControlBeforeList = [];
  Object.keys($customFileText.placeholder).forEach(function ($lang) {
    customFileControlBeforeList.push('\n      &:lang(' + $lang + ')::after {\n        content: "' + $customFileText.placeholder[$lang] + '";\n      }   \n    ');
  });
  var customFileControlAfterList = [];
  Object.keys($customFileText['button-label']).forEach(function ($lang) {
    customFileControlAfterList.push('\n      &:lang(' + $lang + ')::before {\n        content: "' + $customFileText['button-label'][$lang] + '";\n      }\n    ');
  });
  var selectBorderWidth = _unitUtils2.default.math.multiply($borderWidth, 2);
  var customSelectPaddingRight = _unitUtils2.default.math.addition($customSelectPaddingY, $customSelectIndicatorPadding);
  var lineHeightBaseMinusCustomControlIndicatorSize = _unitUtils2.default.math.subtract($lineHeightBase, $customControlIndicatorSize);
  return '\n    /* Embedded icons from Open Iconic. */\n    /* Released under MIT and copyright 2014 Waybury. */\n    /* https://useiconic.com/open */\n    \n    \n    /* Checkboxes and radios */\n    /* Base class takes care of all the key behavioral aspects. */\n    \n    & .custom-control {\n      position: relative;\n      display: inline-flex;\n      min-height: calc(1rem * ' + $lineHeightBase + ');\n      padding-left: ' + $customControlGutter + ';\n      margin-right: ' + $customControlSpacerX + ';\n    }\n    \n    & .custom-control-input {\n      position: absolute;\n      z-index: -1; /* Put the input behind the label so it does not overlay text */\n      opacity: 0;\n    \n      &:checked ~ .custom-control-indicator {\n        color: ' + $customControlCheckedIndicatorColor + ';\n        background-color: ' + $customControlCheckedIndicatorBg + ';\n        ' + (_boxShadow.boxShadow)($enableShadows, $customControlCheckedIndicatorBoxShadow) + '\n      }\n    \n      &:focus ~ .custom-control-indicator {\n        /* the mixin is not used here to make sure there is feedback */\n        box-shadow: ' + $customControlFocusIndicatorBoxShadow + ';\n      }\n    \n      &:active ~ .custom-control-indicator {\n        color: ' + $customControlActiveIndicatorColor + ';\n        background-color: ' + $customControlActiveIndicatorBg + ';\n        ' + (_boxShadow.boxShadow)($enableShadows, $customControlActiveIndicatorBoxShadow) + '\n      }\n    \n      &:disabled {\n        ~ .custom-control-indicator {\n          cursor: ' + $customControlDisabledCursor + ';\n          background-color: ' + $customControlDisabledIndicatorBg + ';\n        }\n    \n        ~ .custom-control-description {\n          color: ' + $customControlDisabledDescriptionColor + ';\n          cursor: ' + $customControlDisabledCursor + ';\n        }\n      }\n    }\n    \n    /* Custom indicator */\n    /* Generates a shadow element to create our makeshift checkbox/radio background. */\n    \n    & .custom-control-indicator {\n      position: absolute;\n      top: calc(' + lineHeightBaseMinusCustomControlIndicatorSize + ' / 2);\n      left: 0;\n      display: block;\n      width: ' + $customControlIndicatorSize + ';\n      height: ' + $customControlIndicatorSize + ';\n      pointer-events: none;\n      user-select: none;\n      background-color: ' + $customControlIndicatorBg + ';\n      background-repeat: no-repeat;\n      background-position: center center;\n      background-size: ' + $customControlIndicatorBgSize + ';\n      ' + (_boxShadow.boxShadow)($enableShadows, $customControlIndicatorBoxShadow) + '\n    }\n    \n    /* Checkboxes */\n    /* Tweak just a few things for checkboxes.  */\n    \n    & .custom-checkbox {\n      & .custom-control-indicator {\n        ' + (_borderRadius.borderRadius)($enableRounded, $customCheckboxRadius) + '\n      }\n    \n      & .custom-control-input:checked ~ .custom-control-indicator {\n        background-image: ' + $customCheckboxCheckedIcon + ';\n      }\n    \n      & .custom-control-input.indeterminate ~ .custom-control-indicator {\n        background-color: ' + $customCheckboxIndeterminateBg + ';\n        background-image: ' + $customCheckboxIndeterminateIcon + ';\n        ' + (_boxShadow.boxShadow)($enableShadows, $customCheckboxIndeterminateBoxShadow) + '\n      }\n    }\n    \n    /* Radios */\n    /* Tweak just a few things for radios. */\n    \n    & .custom-radio {\n      & .custom-control-indicator {\n        border-radius: ' + $customRadioRadius + ';\n      }\n    \n      & .custom-control-input:checked ~ .custom-control-indicator {\n        background-image: ' + $customRadioCheckedIcon + ';\n      }\n    }\n    \n    \n    /* Layout options */\n    /* By default radios and checkboxes are inline-block with no additional spacing */\n    /* set. Use these optional classes to tweak the layout. */\n    \n    & .custom-controls-stacked {\n      display: flex;\n      flex-direction: column;\n    \n      & .custom-control {\n        margin-bottom: ' + $customControlSpacerY + ';\n    \n        + & .custom-control {\n          margin-left: 0;\n        }\n      }\n    }\n    \n    \n    /* Select */\n    /* Replaces the browser default select with a custom one, mostly pulled from */\n    /* http://primercss.io. */\n    \n    & .custom-select {\n      display: inline-block;\n      max-width: 100%;\n      height: calc(' + $inputHeight + ' + ' + selectBorderWidth + ');\n      padding: ' + $customSelectPaddingY + ' ' + customSelectPaddingRight + ' ' + $customSelectPaddingY + ' ' + $customSelectPaddingX + ';\n      line-height: ' + $customSelectLineHeight + ';\n      color: ' + $customSelectColor + ';\n      vertical-align: middle;\n      background: ' + $customSelectBg + ' ' + $customSelectIndicator + ' no-repeat right ' + $customSelectPaddingX + ' center;\n      background-size: ' + $customSelectBgSize + ';\n      border: ' + $customSelectBorderWidth + ' solid ' + $customSelectBorderColor + ';\n      ' + (_borderRadius.borderRadius)($enableRounded, $customSelectBorderRadius) + '\n      /* Use vendor prefixes as appearance is not part of the CSS spec.  */\n      -moz-appearance: none;\n      -webkit-appearance: none;\n    \n      &:focus {\n        border-color: ' + $customSelectFocusBorderColor + ';\n        outline: none;\n        ' + (_boxShadow.boxShadow)($enableShadows, $customSelectFocusBoxShadow) + '\n    \n        ::-ms-value {\n          /* For visual consistency with other platforms/browsers, */\n          /* supress the default white text on blue background highlight given to */\n          /* the selected option text when the (still closed) <select> receives focus */\n          /* in IE and (under certain conditions) Edge. */\n          /* See https://github.com/twbs/bootstrap/issues/19398. */\n          color: ' + $inputColor + ';\n          background-color: ' + $inputBg + ';\n        }\n      }\n    \n      &:disabled {\n        color: ' + $customSelectDisabledColor + ';\n        cursor: ' + $cursorDisabled + ';\n        background-color: ' + $customSelectDisabledBg + ';\n      }\n    \n      /* Hides the default caret in IE11 */\n      ::-ms-expand {\n        opacity: 0;\n      }\n    }\n    \n    & .custom-select-sm {\n      padding-top: ' + $customSelectPaddingY + ';\n      padding-bottom: ' + $customSelectPaddingY + ';\n      font-size: ' + $customSelectSmFontSize + ';\n    \n      /* &:not([multiple]) { */\n      /*   height: 26px; */\n      /*   min-height: 26px; */\n      /* } */\n    }\n    \n    \n    /* File */\n    /* Custom file input. */\n    \n    & .custom-file {\n      position: relative;\n      display: inline-block;\n      max-width: 100%;\n      height: ' + $customFileHeight + ';\n      margin-bottom: 0;\n    }\n    \n    & .custom-file-input {\n      min-width: ' + $customFileWidth + ';\n      max-width: 100%;\n      height: ' + $customFileHeight + ';\n      margin: 0;\n      opacity: 0;\n    \n      &:focus ~ .custom-file-control {\n        ' + (_boxShadow.boxShadow)($enableShadows, $customFileFocusBoxShadow) + '\n      }\n    }\n    \n    & .custom-file-control {\n      position: absolute;\n      top: 0;\n      right: 0;\n      left: 0;\n      z-index: 5;\n      height: ' + $customFileHeight + ';\n      padding: ' + $customFilePaddingX + ' ' + $customFilePaddingY + ';\n      line-height: ' + $customFileLineHeight + ';\n      color: ' + $customFileColor + ';\n      pointer-events: none;\n      user-select: none;\n      background-color: ' + $customFileBg + ';\n      border: ' + $customFileBorderWidth + ' solid ' + $customFileBorderColor + ';\n      ' + (_borderRadius.borderRadius)($enableRounded, $customFileBorderRadius) + '\n      ' + (_boxShadow.boxShadow)($enableShadows, $customFileBoxShadow) + '\n      \n      ' + customFileControlBeforeList.join('\n') + '\n    \n      &::before {\n        position: absolute;\n        top: ' + $customFileBorderWidth + ';\n        right: ' + $customFileBorderWidth + ';\n        bottom: ' + $customFileBorderWidth + ';\n        z-index: 6;\n        display: block;\n        height: ' + $customFileHeight + ';\n        padding: ' + $customFilePaddingX + ' ' + $customFilePaddingY + ';\n        line-height: ' + $customFileLineHeight + ';\n        color: ' + $customFileButtonColor + ';\n        background-color: ' + $customFileButtonBg + ';\n        border: ' + $customFileBorderWidth + ' solid ' + $customFileBorderColor + ';\n        ' + (_borderRadius.borderRadius)(0, $enableRounded, $customFileBorderRadius, $customFileBorderRadius, 0) + '\n      }\n\n      ' + customFileControlAfterList.join('\n') + '\n    }\n  ';
}
exports.default = {
  customForms: customForms
};
});
unwrapExports(customForms_1);
var customForms_3 = customForms_1.customForms;

var defaultProps$83 = {
  tag: 'form',
  theme: {
    '$brand-primary': '#0275d8',
    '$brand-success': '#5cb85c',
    '$brand-info': '#5bc0de',
    '$brand-warning': '#f0ad4e',
    '$brand-danger': '#d9534f',
    '$gray-dark': '#292b2c',
    '$gray': '#464a4c',
    '$gray-light': '#636c72',
    '$gray-lighter': '#eceeef',
    '$gray-lightest': '#f7f7f9',
    '$border-width': '1px',
    '$spacer': '1rem',
    '$spacer-y': '1rem',
    '$grid-breakpoints': {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    '$grid-gutter-width-base': '30px',
    '$grid-gutter-widths': {
      xs: '30px',
      sm: '30px',
      md: '30px',
      lg: '30px',
      xl: '30px'
    },
    '$font-size-base': '1rem',
    '$font-size-lg': '1.25rem',
    '$font-size-sm': '.875rem',
    '$font-size-xs': '.75rem',
    '$text-muted': '#636c72',
    '$line-height-base': '1.5',
    '$line-height-lg': '1.6',
    '$line-height-sm': '1.3',
    '$border-radius': '.25rem',
    '$border-radius-lg': '.3rem',
    '$border-radius-sm': '.2rem',
    '$input-padding-x': '.75rem',
    '$input-padding-y': '.5rem',
    '$input-line-height': '1.25',
    '$input-bg': '#fff',
    '$input-bg-disabled': '#eceeef',
    '$input-color': '#464a4c',
    '$input-border-color': 'rgba(0, 0, 0, 0.15)',
    '$input-btn-border-width': '1px',
    '$input-box-shadow': 'rgba(0, 0, 0, 0.15)',
    '$input-border-radius': '.25rem',
    '$input-border-radius-lg': '.3rem',
    '$input-border-radius-sm': '.2rem',
    '$input-bg-focus': '#fff',
    '$input-border-focus': 'hsl(207.79999999999995, 98.2%, 53.4%)',
    '$input-box-shadow-focus': 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(undefined,.6)',
    '$input-color-focus': '#464a4c',
    '$input-color-placeholder': '#636c72',
    '$input-padding-x-sm': '.5rem',
    '$input-padding-y-sm': '.25rem',
    '$input-padding-x-lg': '1.5rem',
    '$input-padding-y-lg': '.75rem',
    '$input-height': '2.5rem',
    '$input-height-sm': '1.6375rem',
    '$input-height-lg': '3.5rem',
    '$input-transition': '.15s',
    '$form-text-margin-top': '.25rem',
    '$form-feedback-margin-top': '.25rem',
    '$form-check-margin-bottom': '.5rem',
    '$form-check-input-gutter': '1.25rem',
    '$form-check-input-margin-y': '.25rem',
    '$form-check-input-margin-x': '.25rem',
    '$form-check-inline-margin-x': '.75rem',
    '$form-group-margin-bottom': '1rem',
    '$input-group-addon-bg': '#eceeef',
    '$input-group-addon-border-color': 'rgba(0, 0, 0, 0.15)',
    '$cursor-disabled': 'not-allowed',
    '$custom-control-gutter': '1.5rem',
    '$custom-control-spacer-x': '1rem',
    '$custom-control-spacer-y': '.25rem',
    '$custom-control-indicator-size': '1rem',
    '$custom-control-indicator-bg': '#ddd',
    '$custom-control-indicator-bg-size': '50%',
    '$custom-control-indicator-box-shadow': 'inset 0 .25rem .25rem rgba(0, 0, 0, 0.1)',
    '$custom-control-disabled-cursor': 'not-allowed',
    '$custom-control-disabled-indicator-bg': '#eceeef',
    '$custom-control-disabled-description-color': '#636c72',
    '$custom-control-checked-indicator-color': '#fff',
    '$custom-control-checked-indicator-bg': '#0275d8',
    '$custom-control-checked-indicator-box-shadow': 'none',
    '$custom-control-focus-indicator-box-shadow': '0 0 0 1px #fff, 0 0 0 3px #0275d8',
    '$custom-control-active-indicator-color': '#fff',
    '$custom-control-active-indicator-bg': 'hsl(207.79999999999995, 98.2%, 57.7%)',
    '$custom-control-active-indicator-box-shadow': 'none',
    '$custom-checkbox-radius': '.25rem',
    '$custom-checkbox-checked-icon': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="#fff" d="M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z"/%3E%3C/svg%3E\')',
    '$custom-checkbox-indeterminate-bg': '#0275d8',
    '$custom-checkbox-indeterminate-indicator-color': '#fff',
    '$custom-checkbox-indeterminate-icon': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 4"%3E%3Cpath stroke="undefined" d="M0 2h4"/%3E%3C/svg%3E\')',
    '$custom-checkbox-indeterminate-box-shadow': 'none',
    '$custom-radio-radius': '50%',
    '$custom-radio-checked-icon': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -4 8 8"%3E%3Ccircle r="3" fill="#fff"/%3E%3C/svg%3E\')',
    '$custom-select-padding-x': '.75rem',
    '$custom-select-padding-y': '.375rem',
    '$custom-select-indicator-padding': '1rem',
    '$custom-select-line-height': '1.25',
    '$custom-select-color': '#464a4c',
    '$custom-select-disabled-color': '#636c72',
    '$custom-select-bg': '#fff',
    '$custom-select-disabled-bg': '#eceeef',
    '$custom-select-bg-size': '8px 10px',
    '$custom-select-indicator-color': '#333',
    '$custom-select-indicator': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"%3E%3Cpath fill="#333" d="M2 0L0 2h4zm0 5L0 3h4z"/%3E%3C/svg%3E\')',
    '$custom-select-border-width': '1px',
    '$custom-select-border-color': 'rgba(0, 0, 0, 0.15)',
    '$custom-select-border-radius': '.25rem',
    '$custom-select-focus-border-color': 'hsl(207.79999999999995, 98.2%, 53.4%)',
    '$custom-select-focus-box-shadow': 'inset 0 1px 2px rgba(0, 0, 0, 0.75), 0 0 5px rgba(hsl(207.79999999999995, 98.2%, 53.4%), .5) ',
    '$custom-select-sm-font-size': '75%',
    '$custom-file-height': '2.5rem',
    '$custom-file-width': '14rem',
    '$custom-file-focus-box-shadow': '0 0 0 .075rem #fff, 0 0 0 .2rem #0275d8',
    '$custom-file-padding-x': '.5rem',
    '$custom-file-padding-y': '1rem',
    '$custom-file-line-height': '1.5',
    '$custom-file-color': '#464a4c',
    '$custom-file-bg': '#fff',
    '$custom-file-border-width': '1px',
    '$custom-file-border-color': 'rgba(0, 0, 0, 0.15)',
    '$custom-file-border-radius': '.25rem',
    '$custom-file-box-shadow': 'inset 0 .2rem .4rem rgba(0, 0, 0, 0.05)',
    '$custom-file-button-color': '#464a4c',
    '$custom-file-button-bg': '#eceeef',
    '$custom-file-text': {
      placeholder: {
        en: 'Choose file...'
      },
      'button-label': {
        en: 'Browse'
      }
    },
    '$form-icon-success-color': '#5cb85c',
    '$form-icon-success': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="undefined" d="M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z"/%3E%3C/svg%3E\')',
    '$form-icon-warning-color': '#f0ad4e',
    '$form-icon-warning': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8"%3E%3Cpath fill="undefined" d="M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z"/%3E%3C/svg%3E\')',
    '$form-icon-danger-color': '#d9534f',
    '$form-icon-danger': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="undefined" viewBox="-2 -2 7 7"%3E%3Cpath stroke="%23d9534f" d="M0 0l3 3m0-3L0 3"/%3E%3Ccircle r=".5"/%3E%3Ccircle cx="3" r=".5"/%3E%3Ccircle cy="3" r=".5"/%3E%3Ccircle cx="3" cy="3" r=".5"/%3E%3C/svg%3E\')'
  }
};
var propTypes$95 = {
  className: propTypes$1.string,
  theme: propTypes$1.shape({
    '$brand-primary': propTypes$1.string,
    '$brand-success': propTypes$1.string,
    '$brand-info': propTypes$1.string,
    '$brand-warning': propTypes$1.string,
    '$brand-danger': propTypes$1.string,
    '$gray-dark': propTypes$1.string,
    '$gray': propTypes$1.string,
    '$gray-light': propTypes$1.string,
    '$gray-lighter': propTypes$1.string,
    '$gray-lightest': propTypes$1.string,
    '$border-width': propTypes$1.string,
    '$spacer': propTypes$1.string,
    '$spacer-y': propTypes$1.string,
    '$grid-breakpoints': propTypes$1.shape({
      'xs': propTypes$1.string,
      'sm': propTypes$1.string,
      'md': propTypes$1.string,
      'lg': propTypes$1.string,
      'xl': propTypes$1.string
    }),
    '$grid-gutter-width-base': propTypes$1.string,
    '$grid-gutter-widths': propTypes$1.shape({
      'xs': propTypes$1.string,
      'sm': propTypes$1.string,
      'md': propTypes$1.string,
      'lg': propTypes$1.string,
      'xl': propTypes$1.string
    }),
    '$font-size-base': propTypes$1.string,
    '$font-size-lg': propTypes$1.string,
    '$font-size-sm': propTypes$1.string,
    '$font-size-xs': propTypes$1.string,
    '$text-muted': propTypes$1.string,
    '$line-height-base': propTypes$1.string,
    '$line-height-lg': propTypes$1.string,
    '$line-height-sm': propTypes$1.string,
    '$border-radius': propTypes$1.string,
    '$border-radius-lg': propTypes$1.string,
    '$border-radius-sm': propTypes$1.string,
    '$input-padding-x': propTypes$1.string,
    '$input-padding-y': propTypes$1.string,
    '$input-line-height': propTypes$1.string,
    '$input-bg': propTypes$1.string,
    '$input-bg-disabled': propTypes$1.string,
    '$input-color': propTypes$1.string,
    '$input-border-color': propTypes$1.string,
    '$input-btn-border-width': propTypes$1.string,
    '$input-box-shadow': propTypes$1.string,
    '$input-border-radius': propTypes$1.string,
    '$input-border-radius-lg': propTypes$1.string,
    '$input-border-radius-sm': propTypes$1.string,
    '$input-bg-focus': propTypes$1.string,
    '$input-border-focus': propTypes$1.string,
    '$input-box-shadow-focus': propTypes$1.string,
    '$input-color-focus': propTypes$1.string,
    '$input-color-placeholder': propTypes$1.string,
    '$input-padding-x-sm': propTypes$1.string,
    '$input-padding-y-sm': propTypes$1.string,
    '$input-padding-x-lg': propTypes$1.string,
    '$input-padding-y-lg': propTypes$1.string,
    '$input-height': propTypes$1.string,
    '$input-height-sm': propTypes$1.string,
    '$input-height-lg': propTypes$1.string,
    '$input-transition': propTypes$1.string,
    '$form-text-margin-top': propTypes$1.string,
    '$form-feedback-margin-top': propTypes$1.string,
    '$form-check-margin-bottom': propTypes$1.string,
    '$form-check-input-gutter': propTypes$1.string,
    '$form-check-input-margin-y': propTypes$1.string,
    '$form-check-input-margin-x': propTypes$1.string,
    '$form-check-inline-margin-x': propTypes$1.string,
    '$form-group-margin-bottom': propTypes$1.string,
    '$input-group-addon-bg': propTypes$1.string,
    '$input-group-addon-border-color': propTypes$1.string,
    '$cursor-disabled': propTypes$1.string,
    '$custom-control-gutter': propTypes$1.string,
    '$custom-control-spacer-x': propTypes$1.string,
    '$custom-control-spacer-y': propTypes$1.string,
    '$custom-control-indicator-size': propTypes$1.string,
    '$custom-control-indicator-bg': propTypes$1.string,
    '$custom-control-indicator-bg-size': propTypes$1.string,
    '$custom-control-indicator-box-shadow': propTypes$1.string,
    '$custom-control-disabled-cursor': propTypes$1.string,
    '$custom-control-disabled-indicator-bg': propTypes$1.string,
    '$custom-control-disabled-description-color': propTypes$1.string,
    '$custom-control-checked-indicator-color': propTypes$1.string,
    '$custom-control-checked-indicator-bg': propTypes$1.string,
    '$custom-control-checked-indicator-box-shadow': propTypes$1.string,
    '$custom-control-focus-indicator-box-shadow': propTypes$1.string,
    '$custom-control-active-indicator-color': propTypes$1.string,
    '$custom-control-active-indicator-bg': propTypes$1.string,
    '$custom-control-active-indicator-box-shadow': propTypes$1.string,
    '$custom-checkbox-radius': propTypes$1.string,
    '$custom-checkbox-checked-icon': propTypes$1.string,
    '$custom-checkbox-indeterminate-bg': propTypes$1.string,
    '$custom-checkbox-indeterminate-indicator-color': propTypes$1.string,
    '$custom-checkbox-indeterminate-icon': propTypes$1.string,
    '$custom-checkbox-indeterminate-box-shadow': propTypes$1.string,
    '$custom-radio-radius': propTypes$1.string,
    '$custom-radio-checked-icon': propTypes$1.string,
    '$custom-select-padding-x': propTypes$1.string,
    '$custom-select-padding-y': propTypes$1.string,
    '$custom-select-indicator-padding': propTypes$1.string,
    '$custom-select-line-height': propTypes$1.string,
    '$custom-select-color': propTypes$1.string,
    '$custom-select-disabled-color': propTypes$1.string,
    '$custom-select-bg': propTypes$1.string,
    '$custom-select-disabled-bg': propTypes$1.string,
    '$custom-select-bg-size': propTypes$1.string,
    '$custom-select-indicator-color': propTypes$1.string,
    '$custom-select-indicator': propTypes$1.string,
    '$custom-select-border-width': propTypes$1.string,
    '$custom-select-border-color': propTypes$1.string,
    '$custom-select-border-radius': propTypes$1.string,
    '$custom-select-focus-border-color': propTypes$1.string,
    '$custom-select-focus-box-shadow': propTypes$1.string,
    '$custom-select-sm-font-size': propTypes$1.string,
    '$custom-file-height': propTypes$1.string,
    '$custom-file-width': propTypes$1.string,
    '$custom-file-focus-box-shadow': propTypes$1.string,
    '$custom-file-padding-x': propTypes$1.string,
    '$custom-file-padding-y': propTypes$1.string,
    '$custom-file-line-height': propTypes$1.string,
    '$custom-file-color': propTypes$1.string,
    '$custom-file-bg': propTypes$1.string,
    '$custom-file-border-width': propTypes$1.string,
    '$custom-file-border-color': propTypes$1.string,
    '$custom-file-border-radius': propTypes$1.string,
    '$custom-file-box-shadow': propTypes$1.string,
    '$custom-file-button-color': propTypes$1.string,
    '$custom-file-button-bg': propTypes$1.string,
    '$custom-file-text': propTypes$1.object,
    '$form-icon-success-color': propTypes$1.string,
    '$form-icon-success': propTypes$1.string,
    '$form-icon-warning-color': propTypes$1.string,
    '$form-icon-warning': propTypes$1.string,
    '$form-icon-danger-color': propTypes$1.string,
    '$form-icon-danger': propTypes$1.string
  }),
  inline: propTypes$1.bool,
  innerRef: propTypes$1.func,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  cssModule: propTypes$1.object
};
var FormUnstyled = function (_React$Component) {
  inherits(FormUnstyled, _React$Component);
  function FormUnstyled() {
    classCallCheck(this, FormUnstyled);
    return possibleConstructorReturn(this, (FormUnstyled.__proto__ || Object.getPrototypeOf(FormUnstyled)).apply(this, arguments));
  }
  createClass(FormUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          inline = _omit.inline,
          Tag = _omit.tag,
          innerRef = _omit.innerRef,
          rest = objectWithoutProperties(_omit, ['className', 'cssModule', 'inline', 'tag', 'innerRef']);
      var classes = mapToCssModules(classnames(className, inline ? 'form-inline' : false), cssModule);
      return React.createElement(Tag, _extends({ ref: innerRef, className: classes }, rest));
    }
  }]);
  return FormUnstyled;
}(React.Component);
FormUnstyled.defaultProps = defaultProps$83;
FormUnstyled.propTypes = propTypes$95;
var Form = styled(FormUnstyled).withConfig({
  displayName: 'Form'
})(['  ', ''], function (props) {
  return '\n    /*\n     Textual form controls\n    */\n\n    ' + forms_2(props.theme['$enable-rounded'], props.theme['$enable-transitions'], props.theme['$enable-shadows'], props.theme['$input-height'], props.theme['$input-padding-y'], props.theme['$input-padding-x'], props.theme['$font-size-base'], props.theme['$input-line-height'], props.theme['$input-color'], props.theme['$input-bg'], props.theme['$input-border-radius'], props.theme['$input-btn-border-width'], props.theme['$input-border-color'], props.theme['$input-transition'], props.theme['$input-box-shadow'], props.theme['$input-color-focus'], props.theme['$input-bg-focus'], props.theme['$input-border-focus'], props.theme['$input-box-shadow-focus'], props.theme['$input-color-placeholder'], props.theme['$input-bg-disabled'], props.theme['$cursor-disabled']) + '\n    \n    select.form-control {\n      &:focus::-ms-value {\n        /* Suppress the nested default white text on blue background highlight given to\n         the selected option text when the (still closed) <select> receives focus\n         in IE and (under certain conditions) Edge, as it looks bad and cannot be made to\n         match the appearance of the native widget.\n         See https://github.com/twbs/bootstrap/issues/19398.\n         */\n        color: ' + props.theme['$input-color'] + ';\n        background-color: ' + props.theme['$input-bg'] + ';\n      }\n    }\n\n    /* Make file inputs better match text inputs by forcing them to new lines. */\n    & .form-control-file,\n    .form-control-range {\n      display: block;\n    }\n\n    /*\n     Labels\n    */\n\n    /* For use with horizontal and inline forms, when you need the label text to */\n    /* align with the form controls. */\n    & .col-form-label {\n      padding-top: calc(' + props.theme['$input-padding-y'] + ' - ' + props.theme['$input-btn-border-width'] + ' *2);\n      padding-bottom: calc(' + props.theme['$input-padding-y'] + ' - ' + props.theme['$input-btn-border-width'] + ' *2);\n      margin-bottom: 0; /* Override the \'<label>\' default */\n    }\n\n    & .col-form-label-lg {\n      padding-top: calc(' + props.theme['$input-padding-y-lg'] + ' - ' + props.theme['$input-btn-border-width'] + ' *2);\n      padding-bottom: calc(' + props.theme['$input-padding-y-lg'] + ' - ' + props.theme['$input-btn-border-width'] + ' *2);\n      font-size: ' + props.theme['$font-size-lg'] + ';\n    }\n\n    & .col-form-label-sm {\n      padding-top: calc(' + props.theme['$input-padding-y-sm'] + ' - ' + props.theme['$input-btn-border-width'] + ' *2);\n      padding-bottom: calc(' + props.theme['$input-padding-y-sm'] + ' - ' + props.theme['$input-btn-border-width'] + ' *2);\n      font-size: ' + props.theme['$font-size-sm'] + ';\n    }\n\n    /*\n     Legends\n    */\n\n    /* For use with horizontal and inline forms, when you need the legend text to */\n    /* be the same size as regular labels, and to align with the form controls. */\n    & .col-form-legend {\n      padding-top: ' + props.theme['$input-padding-y'] + ';\n      padding-bottom: ' + props.theme['$input-padding-y'] + ';\n      margin-bottom: 0;\n      font-size: ' + props.theme['$font-size-base'] + ';\n    }\n\n\n    /* Static form control text\n\n     Apply class to an element to make any string of text align with labels in a\n     horizontal form layout.\n    */\n\n    & .form-control-static {\n      padding-top: ' + props.theme['$input-padding-y'] + ';\n      padding-bottom: ' + props.theme['$input-padding-y'] + ';\n      margin-bottom: 0; /* match inputs if this class comes on inputs with default margins */\n      line-height: ' + props.theme['$input-line-height'] + ';\n      border: solid transparent;\n      border-width: ' + props.theme['$input-btn-border-width'] + ' 0;\n\n      &.form-control-sm,\n      &.form-control-lg {\n        padding-right: 0;\n        padding-left: 0;\n      }\n    }\n\n\n    /* Form control sizing\n\n     Build on .form-control with modifier classes to decrease or increase the\n     height and font-size of form controls.\n\n     The .form-group-* form-control variations are sadly duplicated to avoid the\n     issue documented in https://github.com/twbs/bootstrap/issues/15074.\n    */\n\n    & .form-control-sm {\n      padding: ' + props.theme['$input-padding-y-sm'] + ' ' + props.theme['$input-padding-x-sm'] + ';\n      font-size: ' + props.theme['$font-size-sm'] + ';\n      ' + borderRadius_2(props.theme['$enable-rounded'], props.theme['$input-border-radius-sm']) + '\n    }\n\n    select.form-control-sm {\n      &:not([size]):not([multiple]) {\n        height: ' + props.theme['$input-height-sm'] + ';\n      }\n    }\n\n    & .form-control-lg {\n      padding: ' + props.theme['$input-padding-y-lg'] + ' ' + props.theme['$input-padding-x-lg'] + ';\n      font-size: ' + props.theme['$font-size-lg'] + ';\n      ' + borderRadius_2(props.theme['$enable-rounded'], props.theme['$input-border-radius-lg']) + '\n    }\n\n    select.form-control-lg {\n      &:not([size]):not([multiple]) {\n        height: ' + props.theme['$input-height-lg'] + ';\n      }\n    }\n\n\n    /* Form groups Designed to help with the organization and spacing of vertical forms. For horizontal forms, use the predefined grid classes. */\n\n    &.form-group,\n     & .form-group {\n      margin-bottom: ' + props.theme['$form-group-margin-bottom'] + ';\n    }\n\n    & .form-text {\n      display: block;\n      margin-top: ' + props.theme['$form-text-margin-top'] + '\n    }\n\n\n    /* Checkboxes and radios Indent the labels to position radios/checkboxes as hanging controls. */\n\n    & .form-check {\n      position: relative;\n      display: block;\n      margin-bottom: ' + props.theme['$form-check-margin-bottom'] + ';\n\n      &.disabled {\n        .form-check-label {\n          color: ' + props.theme['$text-muted'] + ';\n          cursor: ' + props.theme['$cursor-disabled'] + ';\n        }\n      }\n    }\n\n    & .form-check-label {\n      padding-left: ' + props.theme['$form-check-input-gutter'] + ';\n      margin-bottom: 0; /* Override default <label> bottom margin */\n      cursor: pointer;\n    }\n\n    & .form-check-input {\n      position: absolute;\n      margin-top: ' + props.theme['$form-check-input-margin-y'] + ';\n      margin-left: -' + props.theme['$form-check-input-gutter'] + ';\n\n      &:only-child {\n        position: static;\n      }\n    }\n\n    /* Radios and checkboxes on same line */\n    & .form-check-inline {\n      display: inline-block;\n      .form-check-label {\n        vertical-align: middle;\n      }\n\n      + .form-check-inline {\n        margin-left: ' + props.theme['$form-check-inline-margin-x'] + ';\n      }\n\n      &.disabled {\n        color: ' + props.theme['$text-muted'] + ';\n        cursor: ' + props.theme['$cursor-disabled'] + ';\n      }\n    }\n\n\n    /* Form control feedback states Apply contextual and semantic states to individual form controls. */\n    & .form-control-feedback {\n      margin-top: ' + props.theme['$form-feedback-margin-top'] + ';\n    }\n\n    & .form-control-success,\n    & .form-control-warning,\n    & .form-control-danger {\n      padding-right: ' + unitUtils$1.math.multiply(props.theme['$input-padding-x'], 3) + ';\n      background-repeat: no-repeat;\n      background-position: center right ' + unitUtils$1.math.divide(props.theme['$input-height'], 4) + ';\n      background-size: ' + unitUtils$1.math.divide(props.theme['$input-height'], 2) + ' ' + unitUtils$1.math.divide(props.theme['$input-height'], 2) + ';\n    }\n\n    /* Form validation states */\n    & .has-success {\n      ' + forms_3(props.theme['$enable-shadows'], props.theme['$brand-success'], props.theme['$box-shadow']) + '\n\n      .form-control-success {\n        background-image: ' + props.theme['$form-icon-success'] + ';\n      }\n    }\n\n    & .has-warning {\n      ' + forms_3(props.theme['$enable-shadows'], props.theme['$brand-warning'], props.theme['$box-shadow']) + '\n\n      .form-control-warning {\n        background-image: ' + props.theme['$form-icon-warning'] + ';\n      }\n    }\n\n    & .has-danger {\n      ' + forms_3(props.theme['$enable-shadows'], props.theme['$brand-danger'], props.theme['$box-shadow']) + '\n\n      .form-control-danger {\n        background-image: ' + props.theme['$form-icon-danger'] + ';\n      }\n    }\n\n\n    /* Inline forms\n\n     Make forms appear inline(-block) by adding the .form-inline class. Inline\n     forms begin stacked on extra small (mobile) devices and then go inline when\n     viewports reach <768px.\n\n     Requires wrapping inputs and labels with .form-group for proper display of\n     default HTML form controls and our custom form controls (e.g., input groups).\n    */\n\n    &.form-inline {\n      display: flex;\n      flex-flow: row wrap;\n      align-items: center; /* Prevent shorter elements from growing to same height as others (e.g., small buttons growing to normal sized button height) */\n\n      & .form-check {\n         width: 100%;\n      }\n\n      /* Kick in the inline */\n      ' + breakpoints_6('sm', props.theme['$grid-breakpoints'], '\n          label {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            margin-bottom: 0;\n          }\n          \n          /* Inline-block all the things for inline */\n          & .form-group {\n            display: flex;\n            flex: 0 0 auto;\n            flex-flow: row wrap;\n            margin-bottom: 0;\n          }\n      \n          /* Allow folks to *not* use .form-group */\n          & .form-control {\n            display: inline-block;\n            width: auto; /* Prevent labels from stacking above inputs in .form-group */\n            vertical-align: middle;\n          }\n      \n          /* Make static controls behave like regular ones */\n          & .form-control-static {\n            display: inline-block;\n          }\n      \n          & .input-group {\n            width: auto;\n          }\n          \n          & .form-control-label {\n             margin-bottom: 0;\n            vertical-align: middle;\n          }\n      \n          /* Remove default margin on radios/checkboxes that were used for stacking, and */\n          /*  then undo the floating of radios and checkboxes to match. */\n          & .form-check {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: auto;\n            margin-top: 0;\n            margin-bottom: 0;\n          }\n          & .form-check-label {\n            padding-left: 0;\n          }\n          & .form-check-input {\n            position: relative;\n            margin-left: 0;\n            margin-top: 0;\n            margin-right: ' + props.theme['$form-check-input-margin-x'] + ';\n          }\n          \n          /* Custom form controls */\n          & .custom-control {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            padding-left: 0;\n          }\n          \n          & .custom-control-indicator {\n            position: static;\n            display: inline-block;\n            margin-right: ' + props.theme['$form-check-input-margin-x'] + '; /* Flexbox alignment means we lose our HTML space here, so we compensate. */\n            vertical-align: text-bottom;\n          }\n          \n          /* Re-override the feedback icon. */\n          & .has-feedback .form-control-feedback {\n            top: 0;\n          }\n        ') + '\n    }\n    ' + customForms_3(props.theme['$enable-rounded'], props.theme['$enable-shadows'], props.theme['$custom-control-checked-indicator-box-shadow'], props.theme['$custom-control-active-indicator-box-shadow'], props.theme['$custom-control-indicator-box-shadow'], props.theme['$custom-checkbox-indeterminate-box-shadow'], props.theme['$custom-select-focus-box-shadow'], props.theme['$custom-file-focus-box-shadow'], props.theme['$custom-file-box-shadow'], props.theme['$custom-select-border-radius'], props.theme['$custom-file-border-radius'], props.theme['$custom-checkbox-radius'], props.theme['$input-bg'], props.theme['$custom-select-line-height'], props.theme['$line-height-base'], props.theme['$custom-control-gutter'], props.theme['$custom-control-spacer-x'], props.theme['$custom-control-checked-indicator-color'], props.theme['$custom-control-checked-indicator-bg'], props.theme['$custom-control-focus-indicator-box-shadow'], props.theme['$custom-control-active-indicator-color'], props.theme['$custom-control-active-indicator-bg'], props.theme['$custom-control-disabled-cursor'], props.theme['$custom-control-disabled-indicator-bg'], props.theme['$custom-control-disabled-description-color'], props.theme['$custom-control-indicator-size'], props.theme['$custom-control-indicator-bg'], props.theme['$custom-control-indicator-bg-size'], props.theme['$custom-checkbox-checked-icon'], props.theme['$custom-checkbox-indeterminate-bg'], props.theme['$custom-checkbox-indeterminate-icon'], props.theme['$custom-radio-radius'], props.theme['$custom-radio-checked-icon'], props.theme['$custom-control-spacer-y'], props.theme['$border-width'], props.theme['$input-height'], props.theme['$custom-select-padding-y'], props.theme['$custom-select-padding-x'], props.theme['$custom-select-indicator-padding'], props.theme['$custom-select-color'], props.theme['$custom-select-bg'], props.theme['$custom-select-indicator'], props.theme['$custom-select-bg-size'], props.theme['$custom-select-border-width'], props.theme['$custom-select-border-color'], props.theme['$custom-select-focus-border-color'], props.theme['$input-color'], props.theme['$custom-select-disabled-color'], props.theme['$cursor-disabled'], props.theme['$custom-select-disabled-bg'], props.theme['$custom-select-sm-font-size'], props.theme['$custom-file-width'], props.theme['$custom-file-height'], props.theme['$custom-file-padding-x'], props.theme['$custom-file-padding-y'], props.theme['$custom-file-line-height'], props.theme['$custom-file-color'], props.theme['$custom-file-bg'], props.theme['$custom-file-border-width'], props.theme['$custom-file-border-color'], props.theme['$custom-file-button-color'], props.theme['$custom-file-button-bg'], props.theme['$custom-file-text']) + '\n    & .row {\n      ' + grid_5(props.theme['$enable-grid-classes'], props.theme['$grid-gutter-widths']) + '\n    }\n  ';
});
Form.defaultProps = defaultProps$83;
Form.propTypes = propTypes$95;

var defaultProps$84 = {
  tag: 'div'
};
var propTypes$96 = {
  className: propTypes$1.string,
  children: propTypes$1.node,
  check: propTypes$1.bool,
  color: propTypes$1.oneOf(['success', 'warning', 'danger', '']),
  disabled: propTypes$1.bool,
  innerRef: propTypes$1.func,
  inline: propTypes$1.bool,
  row: propTypes$1.bool,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  cssModule: propTypes$1.object
};
var FormGroup = function (_React$Component) {
  inherits(FormGroup, _React$Component);
  function FormGroup() {
    classCallCheck(this, FormGroup);
    return possibleConstructorReturn(this, (FormGroup.__proto__ || Object.getPrototypeOf(FormGroup)).apply(this, arguments));
  }
  createClass(FormGroup, [{
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
      var classes = mapToCssModules(classnames(className, color ? 'has-' + color : false, row ? 'row' : false, check ? 'form-check' : 'form-group', check && disabled ? 'disabled' : false, inline ? 'form-check-inline' : false), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return FormGroup;
}(React.Component);
FormGroup.defaultProps = defaultProps$84;
FormGroup.propTypes = propTypes$96;
FormGroup.defaultProps = defaultProps$84;
FormGroup.propTypes = propTypes$96;

var defaultProps$85 = {
  tag: 'small'
};
var propTypes$97 = {
  className: propTypes$1.string,
  children: propTypes$1.node,
  color: propTypes$1.oneOf(['success', 'warning', 'danger', 'muted', '']),
  inline: propTypes$1.bool,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  cssModule: propTypes$1.object
};
var FormText = function (_React$Component) {
  inherits(FormText, _React$Component);
  function FormText() {
    classCallCheck(this, FormText);
    return possibleConstructorReturn(this, (FormText.__proto__ || Object.getPrototypeOf(FormText)).apply(this, arguments));
  }
  createClass(FormText, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          inline = _props.inline,
          color = _props.color,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'inline', 'color', 'tag']);
      var classes = mapToCssModules(classnames(className, !inline ? 'form-text' : false, color ? 'text-' + color : false), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return FormText;
}(React.Component);
FormText.defaultProps = defaultProps$85;
FormText.propTypes = propTypes$97;
FormText.defaultProps = defaultProps$85;
FormText.propTypes = propTypes$97;

var defaultProps$86 = {
  tag: 'div'
};
var propTypes$98 = {
  className: propTypes$1.string,
  children: propTypes$1.node,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  cssModule: propTypes$1.object
};
var FormFeedback = function (_React$Component) {
  inherits(FormFeedback, _React$Component);
  function FormFeedback() {
    classCallCheck(this, FormFeedback);
    return possibleConstructorReturn(this, (FormFeedback.__proto__ || Object.getPrototypeOf(FormFeedback)).apply(this, arguments));
  }
  createClass(FormFeedback, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          Tag = _props.tag,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'tag']);
      var classes = mapToCssModules(classnames(className, 'form-control-feedback'), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return FormFeedback;
}(React.Component);
FormFeedback.defaultProps = defaultProps$86;
FormFeedback.propTypes = propTypes$98;
FormFeedback.defaultProps = defaultProps$86;
FormFeedback.propTypes = propTypes$98;

var propTypes$99 = {
  className: propTypes$1.string,
  children: propTypes$1.node,
  radio: propTypes$1.shape({
    id: propTypes$1.string,
    name: propTypes$1.string
  }),
  defaultChecked: propTypes$1.bool,
  checked: propTypes$1.bool,
  cssModule: propTypes$1.object
};
var FormCustom = function (_React$Component) {
  inherits(FormCustom, _React$Component);
  function FormCustom() {
    classCallCheck(this, FormCustom);
    return possibleConstructorReturn(this, (FormCustom.__proto__ || Object.getPrototypeOf(FormCustom)).apply(this, arguments));
  }
  createClass(FormCustom, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          cssModule = _props.cssModule,
          radio = _props.radio,
          children = _props.children,
          checked = _props.checked,
          defaultChecked = _props.defaultChecked,
          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'radio', 'children', 'checked', 'defaultChecked']);
      var classes = mapToCssModules(classnames(className, 'custom-control', radio ? 'custom-radio' : 'custom-checkbox'), cssModule);
      var CustomInput = radio ? React.createElement(Input, { defaultChecked: defaultChecked, checked: checked, type: 'radio', id: radio.id, name: radio.name, className: 'custom-control-input' }) : React.createElement(Input, { defaultChecked: defaultChecked, checked: checked, type: 'checkbox', className: 'custom-control-input' });
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
FormCustom.propTypes = propTypes$99;
FormCustom.propTypes = propTypes$99;

var defaultProps$87 = {
  tag: 'button'
};
var propTypes$100 = {
  className: propTypes$1.string,
  children: propTypes$1.node,
  disabled: propTypes$1.bool,
  divider: propTypes$1.bool,
  header: propTypes$1.bool,
  onClick: propTypes$1.func,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  cssModule: propTypes$1.object
};
var DropdownItem = function (_React$Component) {
  inherits(DropdownItem, _React$Component);
  function DropdownItem() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck(this, DropdownItem);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
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
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }
  createClass(DropdownItem, [{
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
      var classes = mapToCssModules(classnames(className, {
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
DropdownItem.defaultProps = defaultProps$87;
DropdownItem.propTypes = propTypes$100;
DropdownItem.contextTypes = {
  toggle: propTypes$1.func
};
DropdownItem.defaultProps = defaultProps$87;
DropdownItem.propTypes = propTypes$100;

var defaultProps$88 = {
  'aria-haspopup': true,
  'data-toggle': 'dropdown',
  color: 'primary'
};
var propTypes$101 = {
  className: propTypes$1.string,
  children: propTypes$1.node,
  'aria-haspopup': propTypes$1.bool,
  caret: propTypes$1.bool,
  'data-toggle': propTypes$1.string,
  disabled: propTypes$1.bool,
  onClick: propTypes$1.func,
  nav: propTypes$1.bool,
  split: propTypes$1.bool,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  cssModule: propTypes$1.object
};
var DropdownToggle = function (_React$Component) {
  inherits(DropdownToggle, _React$Component);
  function DropdownToggle() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck(this, DropdownToggle);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = DropdownToggle.__proto__ || Object.getPrototypeOf(DropdownToggle)).call.apply(_ref, [this].concat(args))), _this), _this.onClick = function (e) {
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
    }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
  }
  createClass(DropdownToggle, [{
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
      var classes = mapToCssModules(classnames(className, {
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
DropdownToggle.defaultProps = defaultProps$88;
DropdownToggle.propTypes = propTypes$101;
DropdownToggle.contextTypes = {
  isOpen: propTypes$1.bool.isRequired,
  toggle: propTypes$1.func.isRequired
};
DropdownToggle.defaultProps = defaultProps$88;
DropdownToggle.propTypes = propTypes$101;

var getToggleableClass = function getToggleableClass(toggleable) {
  if (toggleable === false) {
    return '';
  } else if (toggleable === true || toggleable === 'xs') {
    return 'navbar-toggleable';
  }
  return 'navbar-toggleable-' + toggleable;
};
var defaultProps$89 = {
  tag: 'nav',
  role: 'navigation',
  toggleable: false,
  theme: {
    '$grid-breakpoints': {
      xs: '0',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    '$enable-rounded': true,
    '$enable-hover-media-query': false,
    '$border-width': '1px',
    '$font-size-lg': '1.25rem',
    '$body-bg': '#fff',
    '$component-active-bg': '#0275d8',
    '$component-active-color': '#fff',
    '$border-radius': '.25rem',
    '$navbar-padding-x': '1rem',
    '$navbar-padding-y': '0.5rem',
    '$nav-link-padding': '.5em 1em',
    '$nav-disabled-link-color': '#636c72',
    '$nav-tabs-border-color': '#ddd',
    '$nav-tabs-border-width': '1px',
    '$nav-tabs-border-radius': '.5em 1em',
    '$nav-tabs-link-hover-border-color': '#eceeef',
    '$nav-tabs-active-link-hover-color': '#464a4c',
    '$nav-tabs-active-link-hover-bg': '#fff',
    '$nav-tabs-active-link-hover-border-color': '#ddd',
    '$nav-pills-border-radius': '.25rem',
    '$nav-pills-active-link-color': '#fff',
    '$nav-pills-active-link-bg': '#0275d8',
    '$cursor-disabled': 'not-allowed',
    '$zindex-navbar': '1000',
    '$zindex-navbar-fixed': '1030',
    '$zindex-navbar-sticky': '1030',
    '$navbar-brand-padding-y': '.25rem',
    '$navbar-divider-padding-y': '.425rem',
    '$navbar-toggler-padding-y': '.5rem',
    '$navbar-toggler-padding-x': '.75rem',
    '$navbar-toggler-font-size': '1.25rem',
    '$navbar-toggler-border-radius': '.25rem',
    '$navbar-light-active-color': 'rgba(0,0,0,.9)',
    '$navbar-light-color': 'rgba(0,0,0,.5)',
    '$navbar-light-hover-color': 'rgba(0,0,0,.7)',
    '$navbar-light-toggler-border': 'rgba(0,0,0,.1)',
    '$navbar-light-disabled-color': 'rgba(0, 0, 0, 0.3)',
    '$navbar-light-toggler-bg': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(0,0,0,.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')',
    '$navbar-inverse-active-color': 'rgba(255,255,255,1)',
    '$navbar-inverse-color': 'rgba(255,255,255,.5)',
    '$navbar-inverse-hover-color': 'rgba(255,255,255,.75)',
    '$navbar-inverse-toggler-border': 'rgba(255,255,255,.1)',
    '$navbar-inverse-toggler-bg': 'url(\'data:image/svg+xml;charset=utf8,%3Csvg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath stroke="rgba(255,255,255,.5)" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"/%3E%3C/svg%3E\')',
    '$navbar-inverse-disabled-color': 'rgba(255, 255, 255, 0.25)'
  }
};
var propTypes$102 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  light: propTypes$1.bool,
  inverse: propTypes$1.bool,
  full: propTypes$1.bool,
  fixed: propTypes$1.string,
  sticky: propTypes$1.string,
  color: propTypes$1.oneOf(['primary', 'success', 'info', 'warning', 'danger', 'inverse', 'faded']),
  role: propTypes$1.string,
  toggleable: propTypes$1.oneOfType([propTypes$1.bool, propTypes$1.string]),
  theme: propTypes$1.shape({
    '$enable-rounded': propTypes$1.bool,
    '$enable-hover-media-query': propTypes$1.bool,
    '$grid-breakpoints': propTypes$1.object,
    '$border-width': propTypes$1.string,
    '$font-size-lg': propTypes$1.string,
    '$body-bg': propTypes$1.string,
    '$component-active-bg': propTypes$1.string,
    '$component-active-color': propTypes$1.string,
    '$border-radius': propTypes$1.string,
    '$navbar-padding-x': propTypes$1.string,
    '$navbar-padding-y': propTypes$1.string,
    '$nav-link-padding': propTypes$1.string,
    '$nav-disabled-link-color': propTypes$1.string,
    '$nav-tabs-border-color': propTypes$1.string,
    '$nav-tabs-border-width': propTypes$1.string,
    '$nav-tabs-border-radius': propTypes$1.string,
    '$nav-tabs-link-hover-border-color': propTypes$1.string,
    '$nav-tabs-active-link-hover-color': propTypes$1.string,
    '$nav-tabs-active-link-hover-bg': propTypes$1.string,
    '$nav-tabs-active-link-hover-border-color': propTypes$1.string,
    '$nav-pills-border-radius': propTypes$1.string,
    '$nav-pills-active-link-color': propTypes$1.string,
    '$nav-pills-active-link-bg': propTypes$1.string,
    '$cursor-disabled': propTypes$1.string,
    '$zindex-navbar': propTypes$1.string,
    '$zindex-navbar-fixed': propTypes$1.string,
    '$zindex-navbar-sticky': propTypes$1.string,
    '$navbar-brand-padding-y': propTypes$1.string,
    '$navbar-divider-padding-y': propTypes$1.string,
    '$navbar-toggler-padding-y': propTypes$1.string,
    '$navbar-toggler-padding-x': propTypes$1.string,
    '$navbar-toggler-font-size': propTypes$1.string,
    '$navbar-toggler-border-radius': propTypes$1.string,
    '$navbar-light-active-color': propTypes$1.string,
    '$navbar-light-color': propTypes$1.string,
    '$navbar-light-hover-color': propTypes$1.string,
    '$navbar-light-toggler-border': propTypes$1.string,
    '$navbar-light-disabled-color': propTypes$1.string,
    '$navbar-light-toggler-bg': propTypes$1.string,
    '$navbar-inverse-active-color': propTypes$1.string,
    '$navbar-inverse-color': propTypes$1.string,
    '$navbar-inverse-hover-color': propTypes$1.string,
    '$navbar-inverse-toggler-border': propTypes$1.string,
    '$navbar-inverse-toggler-bg': propTypes$1.string,
    '$navbar-inverse-disabled-color': propTypes$1.string
  }),
  cssModule: propTypes$1.object
};
var NavbarUnstyled = function (_React$Component) {
  inherits(NavbarUnstyled, _React$Component);
  function NavbarUnstyled() {
    classCallCheck(this, NavbarUnstyled);
    return possibleConstructorReturn(this, (NavbarUnstyled.__proto__ || Object.getPrototypeOf(NavbarUnstyled)).apply(this, arguments));
  }
  createClass(NavbarUnstyled, [{
    key: 'render',
    value: function render() {
      var _cn;
      var _omit = lodash_omit(this.props, ['theme']),
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
      var classes = mapToCssModules(classnames(className, 'navbar', getToggleableClass(toggleable), (_cn = {
        'navbar-light': light,
        'navbar-inverse': inverse
      }, babelHelpers.defineProperty(_cn, 'bg-' + color, color), babelHelpers.defineProperty(_cn, 'navbar-full', full), babelHelpers.defineProperty(_cn, 'fixed-' + fixed, fixed), babelHelpers.defineProperty(_cn, 'sticky-' + sticky, sticky), _cn)), cssModule);
      return React.createElement(Tag, _extends({}, attributes, { className: classes }));
    }
  }]);
  return NavbarUnstyled;
}(React.Component);
NavbarUnstyled.defaultProps = defaultProps$89;
NavbarUnstyled.propTypes = propTypes$102;

var Navbar = styled(NavbarUnstyled).withConfig({
  displayName: 'Navbar'
})(['', ''], function (props) {
  return '\n    ' + navbar_3(props.theme['$grid-breakpoints'], props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$navbar-padding-y'], props.theme['$navbar-padding-x'], props.theme['$zindex-navbar'], props.theme['$zindex-navbar-fixed'], props.theme['$zindex-navbar-sticky'], props.theme['$navbar-brand-padding-y'], props.theme['$font-size-lg'], props.theme['$navbar-divider-padding-y'], props.theme['$navbar-toggler-padding-y'], props.theme['$navbar-toggler-padding-x'], props.theme['$navbar-toggler-font-size'], props.theme['$border-width'], props.theme['$navbar-toggler-border-radius'], props.theme['$navbar-light-active-color'], props.theme['$navbar-light-color'], props.theme['$navbar-light-hover-color'], props.theme['$navbar-light-toggler-border'], props.theme['$navbar-light-disabled-color'], props.theme['$navbar-light-toggler-bg'], props.theme['$navbar-inverse-active-color'], props.theme['$navbar-inverse-color'], props.theme['$navbar-inverse-hover-color'], props.theme['$navbar-inverse-toggler-border'], props.theme['$navbar-inverse-toggler-bg'], props.theme['$navbar-inverse-disabled-color']) + '\n    ' + nav_3(props.theme['$enable-rounded'], props.theme['$enable-hover-media-query'], props.theme['$nav-link-padding'], props.theme['$nav-disabled-link-color'], props.theme['$cursor-disabled'], props.theme['$nav-tabs-border-width'], props.theme['$nav-tabs-border-color'], props.theme['$nav-tabs-border-radius'], props.theme['$nav-tabs-link-hover-border-color'], props.theme['$nav-tabs-active-link-hover-color'], props.theme['$nav-tabs-active-link-hover-bg'], props.theme['$nav-tabs-active-link-hover-border-color'], props.theme['$nav-pills-border-radius'], props.theme['$nav-pills-active-link-color'], props.theme['$nav-pills-active-link-bg']) + '\n  ';
});
Navbar.defaultProps = defaultProps$89;
Navbar.propTypes = propTypes$102;

var defaultProps$90 = {
  tag: 'button',
  type: 'button'
};
var propTypes$103 = {
  className: propTypes$1.string,
  children: propTypes$1.node,
  type: propTypes$1.string,
  right: propTypes$1.bool,
  left: propTypes$1.bool,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  cssModule: propTypes$1.object
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
  var classes = mapToCssModules(classnames(className, 'navbar-toggler', right && 'navbar-toggler-right', left && 'navbar-toggler-left'), cssModule);
  return React.createElement(
    Tag,
    _extends({}, attributes, { className: classes }),
    children || navbarToggleIcon
  );
};
NavbarToggler.propTypes = propTypes$103;
NavbarToggler.defaultProps = defaultProps$90;

var defaultProps$91 = {
  tag: 'a'
};
var propTypes$104 = {
  className: propTypes$1.string,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  cssModule: propTypes$1.object
};
var NavbarBrand = function NavbarBrand(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  var classes = mapToCssModules(classnames(className, 'navbar-brand'), cssModule);
  return React.createElement(Tag, _extends({}, attributes, { className: classes }));
};
NavbarBrand.propTypes = propTypes$104;
NavbarBrand.defaultProps = defaultProps$91;

var propTypes$105 = {
  className: propTypes$1.string,
  children: propTypes$1.node,
  toggle: propTypes$1.func.isRequired,
  isOpen: propTypes$1.bool.isRequired,
  tag: propTypes$1.oneOfType([propTypes$1.string, propTypes$1.element, propTypes$1.func]),
  cssModule: propTypes$1.object
};
var defaultProps$92 = {
  tag: 'li'
};
var NavDropdown = function NavDropdown(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
  var classes = mapToCssModules(classnames(className, 'nav-item'), cssModule);
  return React.createElement(Dropdown, _extends({}, attributes, { tag: Tag, className: classes }));
};
NavDropdown.propTypes = propTypes$105;
NavDropdown.defaultProps = defaultProps$92;

var defaultProps$93 = {
  theme: {
    '$grid-gutter-width-base': '30px',
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
    '$enable-grid-classes': true
  }
};
var propTypes$106 = {
  className: propTypes$1.string,
  theme: propTypes$1.shape({
    '$grid-gutter-width-base': propTypes$1.string,
    '$grid-gutter-widths': propTypes$1.object,
    '$container-max-widths': propTypes$1.object,
    '$enable-grid-classes': propTypes$1.bool
  })
};
var ContainerUnstyled = function (_React$Component) {
  inherits(ContainerUnstyled, _React$Component);
  function ContainerUnstyled() {
    classCallCheck(this, ContainerUnstyled);
    return possibleConstructorReturn(this, (ContainerUnstyled.__proto__ || Object.getPrototypeOf(ContainerUnstyled)).apply(this, arguments));
  }
  createClass(ContainerUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          attributes = objectWithoutProperties(_omit, ['className']);
      return React.createElement('div', _extends({ className: classnames(className, 'container') }, attributes));
    }
  }]);
  return ContainerUnstyled;
}(React.Component);
ContainerUnstyled.defaultProps = defaultProps$93;
ContainerUnstyled.propTypes = propTypes$106;
var Container = styled(ContainerUnstyled).withConfig({
  displayName: 'Container'
})(['', ''], function (props) {
  return '\n    ' + grid_2(props.theme['$enable-grid-classes'], props.theme['$grid-gutter-widths']) + '\n    \n    ' + grid_3(props.theme['$enable-grid-classes'], props.theme['$container-max-widths'], props.theme['$grid-breakpoints']) + '\n  ';
});
Container.defaultProps = defaultProps$93;
Container.propTypes = propTypes$106;

var defaultProps$94 = {
  theme: {
    '$grid-gutter-width-base': '30px',
    '$grid-gutter-widths': {
      xs: '30px',
      sm: '30px',
      md: '30px',
      lg: '30px',
      xl: '30px'
    },
    '$enable-grid-classes': true
  }
};
var propTypes$107 = {
  className: propTypes$1.string,
  theme: propTypes$1.shape({
    '$grid-gutter-width-base': propTypes$1.string,
    '$grid-gutter-widths': propTypes$1.object,
    '$enable-grid-classes': propTypes$1.bool
  })
};
var ContainerFluidUnstyled = function (_React$Component) {
  inherits(ContainerFluidUnstyled, _React$Component);
  function ContainerFluidUnstyled() {
    classCallCheck(this, ContainerFluidUnstyled);
    return possibleConstructorReturn(this, (ContainerFluidUnstyled.__proto__ || Object.getPrototypeOf(ContainerFluidUnstyled)).apply(this, arguments));
  }
  createClass(ContainerFluidUnstyled, [{
    key: 'render',
    value: function render() {
      var _omit = lodash_omit(this.props, ['theme']),
          className = _omit.className,
          attributes = objectWithoutProperties(_omit, ['className']);
      return React.createElement('div', _extends({ className: classnames(className, 'container-fluid') }, attributes));
    }
  }]);
  return ContainerFluidUnstyled;
}(React.Component);
ContainerFluidUnstyled.defaultProps = defaultProps$94;
ContainerFluidUnstyled.propTypes = propTypes$107;
var ContainerFluid = styled(ContainerFluidUnstyled).withConfig({
  displayName: 'ContainerFluid'
})(['', ''], function (props) {
  return '\n    ' + grid_2(props.theme['$enable-grid-classes'], props.theme['$grid-gutter-widths']) + '\n  ';
});
ContainerFluid.defaultProps = defaultProps$94;
ContainerFluid.propTypes = propTypes$107;

export { theme, makeTheme$$1 as makeTheme, A, composeLink, Abbr, Address, Alert, Area, Article, Blockquote, BootstrapProvider, Breadcrumb, BreadcrumbItem, Button, ButtonDropdown, ButtonGroup, ButtonToolbar, Caption, Close, Code, Col, Collapse, Dd, Dfn, Details, Dl, Drawer, Dt, Fa, FaStacked, Fieldset, Footer, H1, H2, H3, H4, H5, H6, Header, Hr, Img, Figure, FigCaption, Input, InputGroup, InputGroupAddon, InputGroupButton, IssueIcon, Kbd, Jumbotron, Label, Legend, Li, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Mapp as Map, Mark, Media, Modal, ModalBody, ModalFooter, ModalHeader, Nav, NavLink, NavItem, Ol, Option, Output, P, Pagination, PaginationItem, PaginationLink, Pre, Progress, ProgressBar, Row, Samp, Section, Select, Small, Strong, Summary, Sub, Sup, Table, Tbody, Tfoot, Thead, Td, Th, Tr, Badge, Textarea, Tooltip, Ul, Card, CardBlock, CardFooter, CardHeader, CardImg, CardImgOverlay, CardLink, CardSubtitle, CardText, CardTitle, CardColumns, CardDeck, CardGroup, CardBlockquote, Accordion, AccordionGroup, Form, FormGroup, FormText, FormFeedback, FormCustom, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, Navbar, NavbarToggler, NavbarBrand, NavDropdown, Container, ContainerFluid, reboot_1 as getGlobalStyles, reboot_2 as getGlobalStyleNoBootstrapProvider };
//# sourceMappingURL=bootstrap-styled.es.js.map
