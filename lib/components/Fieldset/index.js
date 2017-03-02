var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* A Fieldset (Box) */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import bsTheme from 'theme';
import { makeRow } from '../../styled/mixins/grid';

var defaultProps = { theme: bsTheme };

var Fieldset = function (_React$Component) {
  _inherits(Fieldset, _React$Component);

  function Fieldset() {
    _classCallCheck(this, Fieldset);

    return _possibleConstructorReturn(this, (Fieldset.__proto__ || Object.getPrototypeOf(Fieldset)).apply(this, arguments));
  }

  _createClass(Fieldset, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          theme = _props.theme,
          className = _props.className,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ['theme', 'className', 'children']); // eslint-disable-line


      return React.createElement(
        'fieldset',
        _extends({
          className: className
        }, rest),
        children
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return Fieldset;
}(React.Component);

// eslint-disable-next-line no-class-assign


Fieldset = styled(Fieldset).withConfig({
  displayName: 'Fieldset__Fieldset',
  componentId: 'Fieldset__Fieldset-543p67'
})(['', ''], function (props) {
  return '\n    min-width: 0;\n    padding: 0;\n    margin: 0;\n    border: 0;\n\n    & .row {\n      ' + makeRow(props.theme['$enable-grid-classes'], props.theme['$grid-gutter-widths']) + '\n    }\n\n  ';
});

Fieldset.defaultProps = defaultProps;

export default Fieldset;