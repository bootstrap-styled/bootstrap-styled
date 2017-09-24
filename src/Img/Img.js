/**
 *
 * Img.react.js
 *
 * Renders an image, enforcing the usage of the alt='' tag
 */

import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import omit from 'lodash.omit';
import bsTheme from '../theme';
import { mapToCssModules } from '../utils/tools';
import { imgFluid } from '../styled/mixins/image';
import { boxShadow } from '../styled/mixins/box-shadow';
import { borderRadius } from '../styled/mixins/border-radius';
import { transition } from '../styled/mixins/transition';

const defaultProps = {
  theme: bsTheme,
  tag: 'img',
};
class ImgUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    src: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]).isRequired,
    alt: PropTypes.string.isRequired,
    fluid: PropTypes.bool,
    figure: PropTypes.bool,
    thumbnail: PropTypes.bool,
    className: PropTypes.string,
    theme: PropTypes.object,
    cssModule: PropTypes.object,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    /* eslint-enable react/no-unused-prop-types */
  }

  render() {
    const {
      className,
      src,
      alt,
      fluid,
      figure,
      thumbnail,
      cssModule,
      tag: Tag,
      ...attributes
    } = omit(this.props, ['theme']);

    const classes = mapToCssModules(cn(
      className,
      fluid ? 'img-fluid' : false,
      thumbnail ? 'img-thumbnail' : false,
      figure ? 'figure-img' : false,
  ), cssModule);

    return (
      <Tag
        className={classes}
        src={src}
        alt={alt}
        {...attributes}
      />
    );
  }
}

const Img = styled(ImgUnstyled)`
  ${(props) => `
    
    /* 
      Responsive images (ensure images does not scale beyond their parents)
      This is purposefully opt-in via an explicit class rather than being the default for all <img>.
      We previously tried the "images are responsive by default" approach in Bootstrap v2,
      and abandoned it in Bootstrap v3 because it breaks lots of third-party widgets (including Google Maps)
      which we are not expecting the images within themselves to be involuntarily resized.
      See also https://github.com/twbs/bootstrap/issues/18178
    */
    
    &.img-fluid {
      ${imgFluid()}
    }
    
    
     /* Image thumbnails */ 
    &.img-thumbnail {
      padding: ${props.theme['$thumbnail-padding']};
      background-color: ${props.theme['$thumbnail-bg']};
      border: ${props.theme['$thumbnail-border-width']} solid ${props.theme['$thumbnail-border-color']};
      ${borderRadius(
  props.theme['$enable-rounded'],
  props.theme['$thumbnail-border-radius']
)}
      ${transition(
  props.theme['$enable-transitions'],
  props.theme['$thumbnail-transition']
)}
      ${boxShadow(
  props.theme['$enable-shadows'],
  props.theme['$thumbnail-box-shadow']
)}
      /* Keep them at most 100% wide */
      ${imgFluid()}
    }
   
    &.figure-img {
      margin-bottom: ${props.theme['$spacer-halved']};
      line-height: 1;
    }
    
    /* Reboot Scss */
    
    /*
     By default, <img> are inline-block. This assumes that, and vertically
     centers them. This will not apply should you reset them to block level.
    */
    vertical-align: middle;
    /*
     Note: <img> are deliberately not made responsive by default.
     For the rationale behind this, see the comments on the .img-fluid class.
    */
  `}
`;

Img.defaultProps = defaultProps;

export default Img;
