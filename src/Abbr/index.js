import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules';


export const defaultProps = {
  tag: 'abbr',
  initialism: false,
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
  /**
   * Title used to display abbreviation text.
   */
  title: PropTypes.string.isRequired,
  /**
   * Toggles original Bootstrap CSS
   */
  initialism: PropTypes.bool,
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,
};

class AbbrUnstyled extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static defaultProps = defaultProps;

  /* eslint-disable react/no-unused-prop-types */
  static propTypes = propTypes;
  /* eslint-enable react/no-unused-prop-types */

  render() {
    const {
      className,
      initialism,
      title,
      tag: Tag,
      cssModule,
      ...attributes
    } = this.props;

    return (
      <Tag
        className={mapToCssModules(cn(className, {
          initialism,
        }), cssModule)}
        title={title}
        {...attributes}
      />
    );
  }
}
/**
 * An abbreviation tag component used to display abbreviated words and acronyms definition
 */
const Abbr = styled(AbbrUnstyled)`
  /* Reboot Scss */
  /* Abbreviations and acronyms */
  &[title] {
    text-decoration: underline;
    text-decoration: underline dotted;
    cursor: help;
    border-bottom: 0;
  }
  
  /* Type Scss */
  
  &.initialism {
    font-size: 90%;
    text-transform: uppercase;
  }
`;

Abbr.defaultProps = defaultProps;
Abbr.propTypes = propTypes;

/** @component */
export default Abbr;

