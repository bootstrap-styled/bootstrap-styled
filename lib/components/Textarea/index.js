/* A Textarea (Box) */

/**
 * A Textarea tag
 */
import styled from 'styled-components';

var Textarea = styled.textarea.withConfig({
  displayName: 'Textarea__Textarea',
  componentId: 'Textarea__Textarea-7mdquk'
})(['touch-action: manipulation;line-height: inherit;/* Textareas should really only resize vertically so they don\'t break their (horizontal) containers. */resize: vertical;']);

export default Textarea;