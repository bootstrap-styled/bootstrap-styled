var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * Footer Component
 *
 *
 */

import styled from 'styled-components';
import theme from 'theme';

var defaultProps = { theme: theme };

var Footer = styled.footer(_templateObject, function (props) {
  return '\n    height: ' + props.theme['$footer-height'] + ';\n    background: ' + props.theme['$footer-background'] + ';\n    width: 100%;\n    position: static;\n    left: 0px;\n    bottom: 0px;\n    text-align: center;\n    color: ' + props.theme['$footer-color'] + ';\n  ';
});

Footer.defaultProps = defaultProps;

export default Footer;