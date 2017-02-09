var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Alert component
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import theme from 'theme';
import Close from '../Close';
import { alertVariant } from '../../styled/mixins/alert';
import { borderRadius } from '../../styled/mixins/border-radius';
import { srOnly } from '../../styled/mixins/screen-reader';

var defaultProps = {
  closeLabel: 'Close',
  theme: theme
};

var Alert = function (_React$Component) {
  _inherits(Alert, _React$Component);

  function Alert() {
    _classCallCheck(this, Alert);

    return _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).apply(this, arguments));
  }

  _createClass(Alert, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          onDismiss = _props.onDismiss,
          children = _props.children,
          closeLabel = _props.closeLabel;


      return _jsx('div', {
        className: cn(className, 'alert', {
          'alert-dismissible': !!onDismiss
        })
      }, void 0, !!onDismiss && _jsx(Close, {
        onDismiss: onDismiss
      }), children, !!onDismiss && _jsx(Close, {
        'sr-only': true,
        onDismiss: onDismiss,
        closeLabel: closeLabel
      }));
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Alert;
}(React.Component);

// eslint-disable-next-line no-class-assign


Alert = styled(Alert)(_templateObject, function (props) {
  return '\n    /*\n    Base styles\n    */\n    \n    &.alert{\n      padding: ' + props.theme['$alert-padding-y'] + ' ' + props.theme['$alert-padding-x'] + ';\n      margin-bottom: ' + props.theme['$alert-margin-bottom'] + ';\n      border: ' + props.theme['$alert-border-width'] + ' solid transparent;\n      ' + borderRadius(props.theme['$enable-rounded'], props.theme['$alert-border-radius']) + ';\n    }\n    \n    /* Headings for larger alerts */\n    &.alert-heading {\n      /* Specified to prevent conflicts of changing $headings-color */\n      color: inherit;\n    }\n    \n    /* Provide class for links that match alerts */\n    & .alert-link { \n      font-weight: ' + props.theme['$alert-link-font-weight'] + ' \n    }\n    \n    /* Dismissible alerts\n    Expand the right padding and account for the close button\'s positioning. */\n    \n    &.alert-dismissible {\n      padding-right: ' + props.theme['$alert-dismissible-padding-x'] + ';\n    \n      /* Adjust close link position*/\n      & .close {\n        position: relative;\n        top: -.125rem;\n        right: -' + props.theme['$alert-padding-x'] + ';\n        color: inherit;\n      }\n      \n      & .sr-only {\n        ' + srOnly + '\n      }\n    }\n    /* Alternate styles\n    Generate contextual modifier classes for colorizing the alert. */\n\n    &.alert-success{\n      ' + alertVariant(props.theme['$alert-success-bg'], props.theme['$alert-success-border'], props.theme['$alert-success-text']) + '    \n    }\n    &.alert-info{\n      ' + alertVariant(props.theme['$alert-info-bg'], props.theme['$alert-info-border'], props.theme['$alert-info-text']) + '\n    } \n    &.alert-warning{\n      ' + alertVariant(props.theme['$alert-warning-bg'], props.theme['$alert-warning-border'], props.theme['$alert-warning-text']) + ' \n    }\n    &.alert-danger{\n      ' + alertVariant(props.theme['$alert-danger-bg'], props.theme['$alert-danger-border'], props.theme['$alert-danger-text']) + ' \n    }\n  ';
});

Alert.defaultProps = defaultProps;

export default Alert;