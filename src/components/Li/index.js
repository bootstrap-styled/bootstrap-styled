/**
 * A list item.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';
import omit from 'lodash.omit';
import { mapToCssModules } from 'utils/tools';

import { media as mediaCss } from '../../styled/mixins/media';

const defaultProps = {
  tag: 'li',
  theme: bsTheme,
};

class Li extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    inline: PropTypes.bool,
    media: PropTypes.bool,
    tag: PropTypes.string,
    theme: PropTypes.object,
    cssModule: PropTypes.object,
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      inline,
      cssModule,
      tag: Tag,
      ...attributes
    } = omit(this.props, ['theme']);
    return (
      <Tag
        className={mapToCssModules(cn(className, {
          'list-inline-item': inline,
        }), cssModule)}
        {...attributes}
      />
    );
  }
}

// eslint-disable-next-line no-class-assign
Li = styled(Li)`
  ${(props) => `
    &.list-inline-item {
      display: inline-block;
    
      &:not(:last-child) {
        margin-right: ${props.theme['$list-inline-padding']};
      }
    }
    
    ${mediaCss()}
  `}
`;

Li.defaultProps = defaultProps;

export default Li;
