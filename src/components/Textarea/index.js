/* A Textarea (Box) */

/**
 * A Textarea tag
 */
import styled from 'styled-components';

const Textarea = styled.textarea`
  touch-action: manipulation;
  line-height: inherit;
  /* Textareas should really only resize vertically so they don't break their (horizontal) containers. */
  resize: vertical;
`;

export default Textarea;
