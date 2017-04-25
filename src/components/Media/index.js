
/**
 * Media component
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import bsTheme from 'theme';
import { mapToCssModules } from 'utils/tools';
import { media } from '../../styled/mixins/media';
import A from '../A';
import Img from '../Img';
import Ul from '../Ul';
import H4 from '../H4';
const defaultProps = {
  theme: bsTheme,
};

class Media extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    theme: PropTypes.object,
    body: PropTypes.bool,
    bottom: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    heading: PropTypes.bool,
    left: PropTypes.bool,
    list: PropTypes.bool,
    middle: PropTypes.bool,
    object: PropTypes.bool,
    right: PropTypes.bool,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    top: PropTypes.bool,
  }

  render() {
    const {
      theme, // eslint-disable-line no-unused-vars
      body,
      bottom,
      className,
      cssModule,
      heading,
      left,
      list,
      middle,
      object,
      right,
      tag,
      top,
      ...attributes
    } = this.props;

    let defaultTag;
    if (heading) {
      defaultTag = H4;
    } else if (left || right) {
      defaultTag = A;
    } else if (object) {
      defaultTag = Img;
    } else if (list) {
      defaultTag = Ul;
    } else {
      defaultTag = 'div';
    }
    const Tag = tag || defaultTag;

    const classes = mapToCssModules(cn(
      className,
      {
        'media-body': body,
        'media-heading': heading,
        'media-left': left,
        'media-right': right,
        'media-top': top,
        'media-bottom': bottom,
        'media-middle': middle,
        'media-object': object,
        'media-list': list,
        media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list,
      }
    ), cssModule);

    return (
      <Tag {...attributes} className={classes} />
    );
  }
}

// eslint-disable-next-line no-class-assign
Media = styled(Media)`
  &.media,
   & .media {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
  }
  
  & .media-body {
      -webkit-box-flex: 1;
      -ms-flex: 1 1 0%;
      flex: 1 1 0%
  }
  ${media()}
`;

Media.defaultProps = defaultProps;

export default Media;
