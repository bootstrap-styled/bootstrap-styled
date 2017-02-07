var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Tag (Text Format) */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import theme from '../../config';
import { hoverFocus } from '../../styled/mixins/hover';
import { borderRadius } from '../../styled/mixins/border-radius';
import { tagVariant } from '../../styled/mixins/tag';

var defaultProps = { theme: theme };

var Tag = function (_React$Component) {
  _inherits(Tag, _React$Component);

  function Tag() {
    _classCallCheck(this, Tag);

    return _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).apply(this, arguments));
  }

  _createClass(Tag, [{
    key: 'render',
    value: function render() {
      return _jsx('span', {
        className: cn(this.props.className, 'tag')
      }, void 0, this.props.children);
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Tag;
}(React.Component);

// eslint-disable-next-line no-class-assign


Tag = styled(Tag)(_templateObject, function (props) {
  return '\n    \n    /* Base class */\n    /* Requires one of the contextual, color modifier classes for \'color\' and */\n    /* \'background-color\'. */\n    \n    &.tag {\n      display: inline-block;\n      padding: ' + props.theme['$tag-padding-y'] + ' ' + props.theme['$tag-padding-x'] + ';\n      font-size: ' + props.theme['$tag-font-size'] + ';\n      font-weight: ' + props.theme['$tag-font-weight'] + ';\n      line-height: 1;\n      color: ' + props.theme['$tag-color'] + ';\n      text-align: center;\n      white-space: nowrap;\n      vertical-align: baseline;\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$border-radius']) + '\n    \n      /* Empty tags collapse automatically */\n      &:empty {\n        display: none;\n      }\n    }\n    \n    \n    /* scss-lint:disable QualifyingElement */\n    /* Add hover effects, but only for links */\n    &a {\n      ' + hoverFocus(props.theme['$enable-hover-media-query'], '\n        color: ' + props.theme['$tag-link-hover-color'] + ';\n        text-decoration: none;\n        cursor: pointer;\n      ') + '\n    }\n    /* scss-lint:enable QualifyingElement */\n    \n    /* Pill tags */\n    /* Make them extra rounded with a modifier to replace v3\'s badges. */\n    \n    &.tag-pill {\n      padding-right: ' + props.theme['$tag-pill-padding-x'] + ';\n      padding-left: ' + props.theme['$tag-pill-padding-x'] + ';\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$tag-pill-border-radius']) + '\n    }\n    \n    /* Colors */\n    /* Contextual variations (linked tags get darker on :hover). */\n    \n    &.tag-default {\n      ' + tagVariant(props.theme['$enable-hover-media-query'], props.theme['$tag-default-bg']) + '\n    }     \n    \n    &.tag-primary {\n      ' + tagVariant(props.theme['$enable-hover-media-query'], props.theme['$tag-primary-bg']) + '\n    }\n    \n    &.tag-success {\n      ' + tagVariant(props.theme['$enable-hover-media-query'], props.theme['$tag-success-bg']) + '\n    }\n    \n    &.tag-info {\n      ' + tagVariant(props.theme['$enable-hover-media-query'], props.theme['$tag-info-bg']) + '\n    }\n    \n    &.tag-warning {\n      ' + tagVariant(props.theme['$enable-hover-media-query'], props.theme['$tag-warning-bg']) + '\n    }\n    \n    &.tag-danger {\n      ' + tagVariant(props.theme['$enable-hover-media-query'], props.theme['$tag-danger-bg']) + '\n    }\n  ';
});

Tag.defaultProps = defaultProps;

export default Tag;