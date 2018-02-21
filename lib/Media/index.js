'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _mapToCssModules = require('map-to-css-modules');

var _mapToCssModules2 = _interopRequireDefault(_mapToCssModules);

var _media = require('bootstrap-styled-mixins/lib/media');

var _A = require('../A');

var _A2 = _interopRequireDefault(_A);

var _Img = require('../Img');

var _Img2 = _interopRequireDefault(_Img);

var _Ul = require('../Ul');

var _Ul2 = _interopRequireDefault(_Ul);

var _H = require('../H4');

var _H2 = _interopRequireDefault(_H);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * Media component
 */

var MediaUnstyled = function (_React$Component) {
  _inherits(MediaUnstyled, _React$Component);

  function MediaUnstyled() {
    _classCallCheck(this, MediaUnstyled);

    return _possibleConstructorReturn(this, (MediaUnstyled.__proto__ || Object.getPrototypeOf(MediaUnstyled)).apply(this, arguments));
  }

  _createClass(MediaUnstyled, [{
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
          attributes = _objectWithoutProperties(_props, ['body', 'bottom', 'className', 'cssModule', 'heading', 'left', 'list', 'middle', 'object', 'right', 'tag', 'top']);

      var defaultTag = void 0;
      if (heading) {
        defaultTag = _H2.default;
      } else if (left || right) {
        defaultTag = _A2.default;
      } else if (object) {
        defaultTag = _Img2.default;
      } else if (list) {
        defaultTag = _Ul2.default;
      } else {
        defaultTag = 'div';
      }
      var Tag = tag || defaultTag;

      var classes = (0, _mapToCssModules2.default)((0, _classnames2.default)(className, {
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

      return _react2.default.createElement(Tag, _extends({}, attributes, { className: classes }));
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return MediaUnstyled;
}(_react2.default.Component);

MediaUnstyled.propTypes = {
  /* eslint-disable react/no-unused-prop-types */
  body: _propTypes2.default.bool,
  bottom: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  heading: _propTypes2.default.bool,
  left: _propTypes2.default.bool,
  list: _propTypes2.default.bool,
  middle: _propTypes2.default.bool,
  object: _propTypes2.default.bool,
  right: _propTypes2.default.bool,
  tag: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string]),
  top: _propTypes2.default.bool
  /* eslint-enable react/no-unused-prop-types */
};


var Media = (0, _styledComponents2.default)(MediaUnstyled).withConfig({
  displayName: 'Media'
})(['&.media,& .media{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;}& .media-body{-webkit-box-flex:1;-ms-flex:1 1 0%;flex:1 1 0%}', ''], (0, _media.media)());

/** @component */
exports.default = Media;
module.exports = exports['default'];