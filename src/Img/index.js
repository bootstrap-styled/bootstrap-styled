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
import mapToCssModules from 'map-to-css-modules';
import { imgFluid } from 'bootstrap-styled-mixins/lib/image';
import { boxShadow } from 'bootstrap-styled-mixins/lib/box-shadow';
import { borderRadius } from 'bootstrap-styled-mixins/lib/border-radius';
import { transition } from 'bootstrap-styled-mixins/lib/transition';


export const defaultProps = {
  tag: 'img',
  theme: {
    '$enable-rounded': true,
    '$enable-transitions': true,
    '$enable-shadows': false,
    '$spacer-halved': '0.5rem',
    '$border-width': '1px',
    '$border-radius': '.25rem',
    '$thumbnail-padding': '.25rem',
    '$thumbnail-bg': '#fff',
    '$thumbnail-border-width': '1px',
    '$thumbnail-border-color': '#ddd',
    '$thumbnail-border-radius': '.25rem',
    '$thumbnail-box-shadow': '0 1px 2px rgba(0, 0, 0, 0.75)',
    '$thumbnail-transition': 'all .2s ease-in-out',
    '$figure-caption-font-size': '90%',
    '$figure-caption-color': '#636c72',
  },
};
export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  /** Toggles fluid responsive CSS display. */
  fluid: PropTypes.bool,
  /** Toggles figure CSS style. */
  figure: PropTypes.bool,
  /** Image source. */
  src: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  /** Image alt description. */
  alt: PropTypes.string.isRequired,
  /** Theme variables. Can be: */
  theme: PropTypes.shape({
    '$enable-rounded': PropTypes.bool,
    '$enable-transitions': PropTypes.bool,
    '$enable-shadows': PropTypes.bool,
    '$spacer-halved': PropTypes.string,
    '$border-width': PropTypes.string,
    '$border-radius': PropTypes.string,
    '$thumbnail-padding': PropTypes.string,
    '$thumbnail-bg': PropTypes.string,
    '$thumbnail-border-width': PropTypes.string,
    '$thumbnail-border-color': PropTypes.string,
    '$thumbnail-border-radius': PropTypes.string,
    '$thumbnail-box-shadow': PropTypes.string,
    '$thumbnail-transition': PropTypes.string,
    '$figure-caption-font-size': PropTypes.string,
    '$figure-caption-color': PropTypes.string,
  }),
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};
class ImgUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

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

/**
 * Use our `<Image />` component, to emphasize part of your pages.
 * You can also use `thumbnails` attribute, **aligning images** and add `<Figure />` components.
 */

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
Img.propTypes = propTypes;

/** @component */
export default Img;
