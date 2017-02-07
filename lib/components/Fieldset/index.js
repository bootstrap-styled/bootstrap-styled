var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    &.fieldset {\n      /* Chrome and Firefox set a \'min-width: min-content;\' on fieldsets, */\n      /* so we reset that to ensure it behaves more like a standard block element. */\n      /* See https://github.com/twbs/bootstrap/issues/12359. */\n      min-width: 0;\n      /* Reset the default outline behavior of fieldsets so they don\'t affect page layout. */\n      padding: 0;\n      margin: 0;\n      border: 0;\n    }\n'], ['\n    &.fieldset {\n      /* Chrome and Firefox set a \'min-width: min-content;\' on fieldsets, */\n      /* so we reset that to ensure it behaves more like a standard block element. */\n      /* See https://github.com/twbs/bootstrap/issues/12359. */\n      min-width: 0;\n      /* Reset the default outline behavior of fieldsets so they don\'t affect page layout. */\n      padding: 0;\n      margin: 0;\n      border: 0;\n    }\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* A Fieldset (Box) */

import React, { PropTypes } from 'react';
import cn from 'classnames';
import styled from 'styled-components';

var Fieldset = function (_React$Component) {
  _inherits(Fieldset, _React$Component);

  function Fieldset() {
    _classCallCheck(this, Fieldset);

    return _possibleConstructorReturn(this, (Fieldset.__proto__ || Object.getPrototypeOf(Fieldset)).apply(this, arguments));
  }

  _createClass(Fieldset, [{
    key: 'render',
    value: function render() {
      var classList = ['fieldset'];
      return _jsx('fieldset', {
        disabled: this.props.disabled,
        form: this.props.form,
        name: this.props.name,
        className: cn(this.props.className, classList)
      }, void 0, this.props.children);
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Fieldset;
}(React.Component);

// eslint-disable-next-line no-class-assign


Fieldset = styled(Fieldset)(_templateObject);

export default Fieldset;