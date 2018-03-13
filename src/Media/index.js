
/**
 * Media component
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules';
import { media } from 'bootstrap-styled-mixins/lib/media';
import A from '../A';
import Img from '../Img';
import Ul from '../Ul';
import H4 from '../H4';

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Specified node element will be passed as children of `<Media />` component. */
  children: PropTypes.node,
  /** Toggles body CSS style. */
  body: PropTypes.bool,
  /** Toggles body CSS style. */
  bottom: PropTypes.bool,
  /** Toggles heading CSS style. */
  heading: PropTypes.bool,
  /** Toggles left CSS display. */
  left: PropTypes.bool,
  /** Toggles list CSS style. */
  list: PropTypes.bool,
  /** Toggles middle CSS style. */
  middle: PropTypes.bool,
  /** Toggles object CSS style. */
  object: PropTypes.bool,
  /** Toggles right CSS style. */
  right: PropTypes.bool,
  /** . */
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /** Toggles top CSS style. */
  top: PropTypes.bool,
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};
/**
 * A classic `<Media />` component.
 * The media object helps build complex and repetitive components where some media is positioned alongside content that doesn’t wrap around said media. Plus, it does this with only two required classes thanks to flexbox.
 * Use Nesting with Media objects can be infinitely nested, though we suggest you stop at some point. Place nested Media within the .media-body of a parent media object.
 * Or alignment Media in a media object can be aligned with flexbox utilities to the top (default), middle, or end of your .media-body content.
 */
class MediaUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const {
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

const Media = styled(MediaUnstyled)`
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

Media.propTypes = propTypes;

/** @component */
export default Media;
