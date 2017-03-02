/**
 * Pre component
 */

import styled from 'styled-components';
import bsTheme from 'theme';

var defaultProps = { theme: bsTheme };

var Pre = styled.pre.withConfig({
  displayName: 'Pre__Pre',
  componentId: 'Pre__Pre-170a07j'
})(['', ''], function (props) {
  return '\n    /* Blocks of code */\n    display: block;\n    margin-top: 0;\n    margin-bottom: 1rem;\n    font-size: ' + props.theme['$code-font-size'] + ';\n    color: ' + props.theme['$pre-color'] + ';\n    \n    /* Enable scrollable blocks of code */\n    /* AJT This class was present in bootstrap/scss/code.scss  We must decide if this class should be a mixin or not! */\n    &.pre-scrollable {\n      max-height: ' + props.theme['$pre-scrollable-max-height'] + ';\n      overflow-y: scroll;\n    }\n\n  \n    /* Account for some code outputs that place code tags in pre tags */\n    code {\n      padding: 0;\n      font-size: inherit;\n      color: inherit;\n      background-color: transparent;\n      border-radius: 0;\n    }\n    \n    /* Reboot Scss */\n\n    /* Remove browser default top margin */\n    margin-top: 0;\n    /* Reset browser default of \'1em\' to use \'rem\'s */\n    margin-bottom: 1rem;\n    /* Normalize v4 removed this property, causing \'pre\' content to break out of wrapping code snippets */\n    overflow: auto;\n    \n    /* Bootstrap 4 does not place this css rule straight into Kbd tag see: bootstrap/scss/code.scss */\n    font-family: ' + props.theme['$font-family-monospace'] + ';\n  ';
});

Pre.defaultProps = defaultProps;

export default Pre;