'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports.defaultProps = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash.omit');

var _lodash2 = _interopRequireDefault(_lodash);

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

var _image = require('bootstrap-styled-mixins/lib/image');

var _boxShadow = require('bootstrap-styled-mixins/lib/box-shadow');

var _borderRadius = require('bootstrap-styled-mixins/lib/border-radius');

var _transition = require('bootstrap-styled-mixins/lib/transition');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Img.react.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Renders an image, enforcing the usage of the alt='' tag
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var defaultProps = exports.defaultProps = {
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
var propTypes = exports.propTypes = {
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  /** Toggles fluid responsive CSS display. */
  fluid: _propTypes2.default.bool,
  /** Toggles figure CSS style. */
  figure: _propTypes2.default.bool,
  /** Image source. */
  src: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
  /** Image alt description. */
  alt: _propTypes2.default.string.isRequired,
  /** Theme variables. Can be: */
  theme: _propTypes2.default.shape({
    '$enable-rounded': _propTypes2.default.bool,
    '$enable-transitions': _propTypes2.default.bool,
    '$enable-shadows': _propTypes2.default.bool,
    '$spacer-halved': _propTypes2.default.string,
    '$border-width': _propTypes2.default.string,
    '$border-radius': _propTypes2.default.string,
    '$thumbnail-padding': _propTypes2.default.string,
    '$thumbnail-bg': _propTypes2.default.string,
    '$thumbnail-border-width': _propTypes2.default.string,
    '$thumbnail-border-color': _propTypes2.default.string,
    '$thumbnail-border-radius': _propTypes2.default.string,
    '$thumbnail-box-shadow': _propTypes2.default.string,
    '$thumbnail-transition': _propTypes2.default.string,
    '$figure-caption-font-size': _propTypes2.default.string,
    '$figure-caption-color': _propTypes2.default.string
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: _propTypes2.default.object
};

var ImgUnstyled = function (_React$Component) {
  _inherits(ImgUnstyled, _React$Component);

  function ImgUnstyled() {
    _classCallCheck(this, ImgUnstyled);

    return _possibleConstructorReturn(this, (ImgUnstyled.__proto__ || Object.getPrototypeOf(ImgUnstyled)).apply(this, arguments));
  }

  _createClass(ImgUnstyled, [{
    key: 'render',

    /* eslint-enable react/no-unused-prop-types */

    // eslint-disable-line react/prefer-stateless-function

    value: function render() {
      var _omit = (0, _lodash2.default)(this.props, ['theme']),
          className = _omit.className,
          src = _omit.src,
          alt = _omit.alt,
          fluid = _omit.fluid,
          figure = _omit.figure,
          thumbnail = _omit.thumbnail,
          cssModule = _omit.cssModule,
          Tag = _omit.tag,
          attributes = _objectWithoutProperties(_omit, ['className', 'src', 'alt', 'fluid', 'figure', 'thumbnail', 'cssModule', 'tag']);

      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, fluid ? 'img-fluid' : false, thumbnail ? 'img-thumbnail' : false, figure ? 'figure-img' : false), cssModule);

      return _react2.default.createElement(Tag, _extends({
        className: classes,
        src: src,
        alt: alt
      }, attributes));
    }

    /* eslint-disable react/no-unused-prop-types */

  }]);

  return ImgUnstyled;
}(_react2.default.Component);

/**
 * Use our `<Image />` component, to emphasize part of your pages.
 * You can also use `thumbnails` attribute, **aligning images** and add `<Figure />` components.
 */

ImgUnstyled.defaultProps = defaultProps;
ImgUnstyled.propTypes = propTypes;
var Img = (0, _styledComponents2.default)(ImgUnstyled).withConfig({
  displayName: 'Img'
})(['', ''], function (props) {
  return '\n    \n    /* \n      Responsive images (ensure images does not scale beyond their parents)\n      This is purposefully opt-in via an explicit class rather than being the default for all <img>.\n      We previously tried the "images are responsive by default" approach in Bootstrap v2,\n      and abandoned it in Bootstrap v3 because it breaks lots of third-party widgets (including Google Maps)\n      which we are not expecting the images within themselves to be involuntarily resized.\n      See also https://github.com/twbs/bootstrap/issues/18178\n    */\n    \n    &.img-fluid {\n      ' + (0, _image.imgFluid)() + '\n    }\n    \n    \n     /* Image thumbnails */ \n    &.img-thumbnail {\n      padding: ' + props.theme['$thumbnail-padding'] + ';\n      background-color: ' + props.theme['$thumbnail-bg'] + ';\n      border: ' + props.theme['$thumbnail-border-width'] + ' solid ' + props.theme['$thumbnail-border-color'] + ';\n      ' + (0, _borderRadius.borderRadius)(props.theme['$enable-rounded'], props.theme['$thumbnail-border-radius']) + '\n      ' + (0, _transition.transition)(props.theme['$enable-transitions'], props.theme['$thumbnail-transition']) + '\n      ' + (0, _boxShadow.boxShadow)(props.theme['$enable-shadows'], props.theme['$thumbnail-box-shadow']) + '\n      /* Keep them at most 100% wide */\n      ' + (0, _image.imgFluid)() + '\n    }\n   \n    &.figure-img {\n      margin-bottom: ' + props.theme['$spacer-halved'] + ';\n      line-height: 1;\n    }\n    \n    /* Reboot Scss */\n    \n    /*\n     By default, <img> are inline-block. This assumes that, and vertically\n     centers them. This will not apply should you reset them to block level.\n    */\n    vertical-align: middle;\n    /*\n     Note: <img> are deliberately not made responsive by default.\n     For the rationale behind this, see the comments on the .img-fluid class.\n    */\n  ';
});

Img.defaultProps = defaultProps;
Img.propTypes = propTypes;

/** @component */
exports.default = Img;