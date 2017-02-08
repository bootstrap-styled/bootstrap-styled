var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
import theme from 'theme';
import { imgFluid } from '../../styled/mixins/image';
import { boxShadow } from '../../styled/mixins/box-shadow';
import { borderRadius } from '../../styled/mixins/border-radius';

var defaultProps = { theme: theme };

var Img = function (_React$Component) {
  _inherits(Img, _React$Component);

  function Img() {
    _classCallCheck(this, Img);

    return _possibleConstructorReturn(this, (Img.__proto__ || Object.getPrototypeOf(Img)).apply(this, arguments));
  }

  _createClass(Img, [{
    key: 'render',
    value: function render() {
      return _jsx('img', {
        className: this.props.className,
        src: this.props.src,
        alt: this.props.alt,
        width: this.props.width,
        height: this.props.height,
        useMap: this.props.useMap
      });
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Img;
}(React.Component);

// eslint-disable-next-line no-class-assign


Img = styled(Img)(_templateObject, function (props) {
  return '\n    \n    /* \n      Responsive images (ensure images don\'t scale beyond their parents)\n      This is purposefully opt-in via an explicit class rather than being the default for all \'img\'s.\n      We previously tried the "images are responsive by default" approach in Bootstrap v2,\n      and abandoned it in Bootstrap v3 because it breaks lots of third-party widgets (including Google Maps)\n      which weren\'t expecting the images within themselves to be involuntarily resized.\n      See also https://github.com/twbs/bootstrap/issues/18178\n    */\n    \n    &.img-fluid {\n      ' + imgFluid() + '\n    }\n    \n    \n     /* Image thumbnails */ \n    &.img-thumbnail {\n      padding: ' + props.theme['$thumbnail-padding'] + ';\n      background-color: ' + props.theme['$thumbnail-bg'] + ';\n      border: ' + props.theme['$thumbnail-border-width'] + ' solid ' + props.theme['$thumbnail-border-color'] + ';\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$thumbnail-border-radius']) + '\n      transition: all .2s ease-in-out;\n      ' + boxShadow(props.theme['$enable-shadows'], props.theme['$thumbnail-box-shadow']) + '\n      /* Keep them at most 100% wide */\n      ' + imgFluid() + '\n    }\n    \n    /* Reboot Scss */\n    \n    /*\n     By default, \'img\'s are \'inline-block\'. This assumes that, and vertically\n     centers them. This won\'t apply should you reset them to \'block\' level.\n    */\n    vertical-align: middle;\n    /*\n     Note: \'img\'s are deliberately not made responsive by default.\n     For the rationale behind this, see the comments on the \'.img-fluid\' class.\n    */\n  ';
});

Img.defaultProps = defaultProps;

export default Img;