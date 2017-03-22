'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _tools = require('../../styled/utilities/tools');

var _media = require('../../styled/mixins/media');

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

var defaultProps = {
  theme: _theme2.default
};

var Media = function (_React$Component) {
  _inherits(Media, _React$Component);

  function Media() {
    _classCallCheck(this, Media);

    return _possibleConstructorReturn(this, (Media.__proto__ || Object.getPrototypeOf(Media)).apply(this, arguments));
  }

  _createClass(Media, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
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
          attributes = _objectWithoutProperties(_props, ['theme', 'body', 'bottom', 'className', 'cssModule', 'heading', 'left', 'list', 'middle', 'object', 'right', 'tag', 'top']);

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

      var classes = (0, _tools.mapToCssModules)((0, _classnames2.default)(className, {
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

  return Media;
}(_react2.default.Component);

// eslint-disable-next-line no-class-assign


Media = (0, _styledComponents2.default)(Media).withConfig({
  displayName: 'Media__Media',
  componentId: 'Media__Media-16143t5'
})(['&.media,& .media {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-align: start;-ms-flex-align: start;align-items: flex-start;}& .media-body {-webkit-box-flex: 1;-ms-flex: 1 1 0%;flex: 1 1 0%}', ''], (0, _media.media)());

Media.defaultProps = defaultProps;

exports.default = Media;