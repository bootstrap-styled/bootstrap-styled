import styled from 'styled-components';
import theme from 'theme';

var defaultProps = { theme: theme };

var Hr = styled.hr.withConfig({
  displayName: 'Hr__Hr',
  componentId: 'Hr__Hr-7619xe'
})(['', ''], function (props) {
  return '\n    margin-top: ' + props.theme['$spacer-y'] + ';\n    margin-bottom: ' + props.theme['$spacer-y'] + ';\n    border: 0;\n    border-top: ' + props.theme['$hr-border-width'] + ' solid ' + props.theme['$hr-border-color'] + ';\n  ';
});

Hr.defaultProps = defaultProps;

export default Hr;