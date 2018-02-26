'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _enzyme = require('enzyme');

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

var _composeLink = require('../composeLink');

var _composeLink2 = _interopRequireDefault(_composeLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = (0, _composeLink2.default)(_index2.default); /**
                                                         * Testing our composeList HoC component constructor
                                                         */


var renderComponentUsingTheme = function renderComponentUsingTheme(props) {
  return (0, _enzyme.mount)(_react2.default.createElement(
    _styledComponents.ThemeProvider,
    { theme: {} },
    _react2.default.createElement(
      Link,
      props,
      'test'
    )
  ));
};

describe('composeLink', function () {
  it('should render a Link', function () {
    var renderedComponent = renderComponentUsingTheme({
      to: 'http://test.com'
    });
    expect(renderedComponent.find('Link').length).toBe(1);
  });
});