import styled from 'styled-components';
import theme from 'theme';
var defaultProps = { theme: theme };

var Fieldset = styled.fieldset.withConfig({
    displayName: 'Fieldset__Fieldset',
    componentId: 'Fieldset__Fieldset-pwjfgn'
})(['min-width: 0;padding: 0;margin: 0;border: 0;']);

Fieldset.defaultProps = defaultProps;

export default Fieldset;