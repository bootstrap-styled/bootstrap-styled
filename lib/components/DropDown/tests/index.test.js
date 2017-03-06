'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Testing our DropDown component
                                                                                                                                                                                                                                                                   */


var _styledComponents = require('styled-components');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('theme');

var _theme2 = _interopRequireDefault(_theme);

var _enzyme = require('enzyme');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _Button = require('../../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Ul = require('../../Ul');

var _Ul2 = _interopRequireDefault(_Ul);

var _Li = require('../../Li');

var _Li2 = _interopRequireDefault(_Li);

var _A = require('../../A');

var _A2 = _interopRequireDefault(_A);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx(_Ul2.default, {}, void 0, _jsx(_Li2.default, {}, void 0, _jsx(_A2.default, {
  'dropdown-item': true,
  href: '#'
}, void 0, 'Item 1')), _jsx(_Li2.default, {
  separator: true
}), _jsx(_Li2.default, {}, void 0, _jsx(_A2.default, {
  'dropdown-item': true,
  disabled: true,
  href: '#'
}, void 0, 'Item disabled')), _jsx(_Li2.default, {}, void 0, _jsx(_A2.default, {
  'dropdown-item': true,
  href: '#'
}, void 0, 'Item last')));

var renderComponent = function renderComponent() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.shallow)(_react2.default.createElement(
    _index2.default,
    _extends({ className: 'dropdown' }, props),
    _ref
  ));
};

var _ref2 = _jsx(_Ul2.default, {}, void 0, _jsx(_Li2.default, {}, void 0, _jsx(_A2.default, {
  'dropdown-item': true,
  href: '#'
}, void 0, 'Item 1')), _jsx(_Li2.default, {
  separator: true
}), _jsx(_Li2.default, {}, void 0, _jsx(_A2.default, {
  'dropdown-item': true,
  disabled: true,
  href: '#'
}, void 0, 'Item disabled')), _jsx(_Li2.default, {}, void 0, _jsx(_A2.default, {
  'dropdown-item': true,
  href: '#'
}, void 0, 'Item last')));

var renderComponentUsingTheme = function renderComponentUsingTheme() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _enzyme.mount)(_jsx(_styledComponents.ThemeProvider, {
    theme: _theme2.default
  }, void 0, _react2.default.createElement(
    _index2.default,
    _extends({ className: 'dropdown' }, props),
    _ref2
  )));
};

describe('<DropDown />', function () {
  it('should render an <DropDown> tag with a theme', function () {
    var renderedComponent = renderComponentUsingTheme({
      toggler: {
        component: _Button2.default,
        text: 'Dropdown',
        className: 'btn btn-secondary'
      }
    });
    expect(renderedComponent.find('DropDown').length).toBe(1);
    expect(renderedComponent.find('div').length).toBe(2);
  });
  it('should toggle the state on click <DropDown>', function () {
    var renderedComponent = renderComponentUsingTheme({
      toggler: {
        component: _Button2.default,
        text: 'Dropdown',
        className: 'btn btn-secondary'
      }
    });
    renderedComponent.find('button').simulate('click');
    expect(renderedComponent.find('DropDown').length).toBe(1);
  });
  it('should render an <DropDown> tag without a theme', function () {
    var renderedComponent = renderComponent({
      toggler: {
        component: _Button2.default,
        text: 'Dropdown',
        className: 'btn btn-secondary'
      }
    });
    expect(renderedComponent.find('OnClickOutside(DropDown)').length).toBe(1);
  });
  it('should render a <DropDown> with a <A> button', function () {
    var renderedComponent = renderComponentUsingTheme({
      toggler: {
        component: _A2.default,
        text: 'Dropdown',
        href: 'http://toto',
        className: 'btn btn-secondary'
      }
    });
    renderedComponent.find('a[href="http://toto"]').simulate('click');
    expect(renderedComponent.find('DropDown').length).toBe(1);
  });
  it('should render a <DropDown> with a dropdown-split', function () {
    var renderedComponent = renderComponentUsingTheme({
      toggler: {
        component: _Button2.default,
        text: 'Dropdown',
        className: 'btn btn-secondary'
      },
      'dropdown-split': true
    });
    expect(renderedComponent.find('DropDown').length).toBe(1);
  });
  // it('should have a class .dropdown-toggle by default with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme();
  //   console.log(renderedComponent.debug());
  //   expect(renderedComponent.find('Button').hasClass('dropdown-toggle')).toBe(true);
  // });
  // it('should have an attribute .dropdown-toggle-split with a theme', () => {
  //   const renderedComponent = renderComponentUsingTheme({
  //     'dropdown-split': true,
  //   });
  //   console.log(renderedComponent.debug());
  //   expect(renderedComponent.find('Button').hasClass('dropdown-toggle-split')).toBe(true);
  // });
});