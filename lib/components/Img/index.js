var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *
 * Img.react.js
 *
 * Renders an image, enforcing the usage of the alt='' tag
 */

import styled from 'styled-components';
import React, { PropTypes } from 'react';
import bsTheme from 'theme';
import { imgFluid } from '../../styled/mixins/image';
import { boxShadow } from '../../styled/mixins/box-shadow';
import { borderRadius } from '../../styled/mixins/border-radius';
import { transition } from '../../styled/mixins/transition';

var defaultProps = { theme: bsTheme };

var Img = function (_React$Component) {
  _inherits(Img, _React$Component);

  function Img() {
    _classCallCheck(this, Img);

    return _possibleConstructorReturn(this, (Img.__proto__ || Object.getPrototypeOf(Img)).apply(this, arguments));
  }

  _createClass(Img, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          className = _props.className,
          src = _props.src,
          alt = _props.alt,
          width = _props.width,
          height = _props.height,
          useMap = _props.useMap,
          rest = _objectWithoutProperties(_props, ['theme', 'className', 'src', 'alt', 'width', 'height', 'useMap']); // eslint-disable-line no-unused-vars

      return React.createElement('img', _extends({
        className: className,
        src: src,
        alt: alt,
        width: width,
        height: height,
        useMap: useMap
      }, rest));
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Img;
}(React.Component);

// eslint-disable-next-line no-class-assign


Img = styled(Img)(_templateObject, function (props) {
  return '\n    \n    /* \n      Responsive images (ensure images don\'t scale beyond their parents)\n      This is purposefully opt-in via an explicit class rather than being the default for all \'img\'s.\n      We previously tried the "images are responsive by default" approach in Bootstrap v2,\n      and abandoned it in Bootstrap v3 because it breaks lots of third-party widgets (including Google Maps)\n      which weren\'t expecting the images within themselves to be involuntarily resized.\n      See also https://github.com/twbs/bootstrap/issues/18178\n    */\n    \n    &.img-fluid {\n      ' + imgFluid() + '\n    }\n    \n    \n     /* Image thumbnails */ \n    &.img-thumbnail {\n      padding: ' + props.theme['$thumbnail-padding'] + ';\n      background-color: ' + props.theme['$thumbnail-bg'] + ';\n      border: ' + props.theme['$thumbnail-border-width'] + ' solid ' + props.theme['$thumbnail-border-color'] + ';\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$thumbnail-border-radius']) + '\n      ' + transition(props.theme['$enable-transitions'], props.theme['$thumbnail-transition']) + '\n      ' + boxShadow(props.theme['$enable-shadows'], props.theme['$thumbnail-box-shadow']) + '\n      /* Keep them at most 100% wide */\n      ' + imgFluid() + '\n    }\n    \n    &.figure-img {\n      margin-bottom: ' + props.theme['$spacer-halved'] + ';\n      line-height: 1;\n    }\n    \n    /* Reboot Scss */\n    \n    /*\n     By default, \'img\'s are \'inline-block\'. This assumes that, and vertically\n     centers them. This won\'t apply should you reset them to \'block\' level.\n    */\n    vertical-align: middle;\n    /*\n     Note: \'img\'s are deliberately not made responsive by default.\n     For the rationale behind this, see the comments on the \'.img-fluid\' class.\n    */\n  ';
});

Img.defaultProps = defaultProps;

export default Img;