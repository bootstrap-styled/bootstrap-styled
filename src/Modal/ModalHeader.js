import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import mapToCssModules from 'map-to-css-modules';
import H4 from '../H4';
import Close from '../Close';

export const defaultProps = {
  tag: H4,
  wrapTag: 'div',
};

export const propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /** Specified node element will be passed as children of `<ModalHeader />` component. */
  children: PropTypes.node,
  /**
   * Replace the default component tag by the one specified. Can be:
   */
  tag: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
  /** Wrapped tag variables. Can be: */
  wrapTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  /** Call specified function when on toggle action is triggered. */
  toggle: PropTypes.func,
  /**
   * Replace or remove a className from the component.
   * See example <a href="https://www.npmjs.com/package/map-to-css-modules" target="_blank">here</a>.
   */
  cssModule: PropTypes.object,

};

const ModalHeader = (props) => {
  let closeButton;
  const {
    className,
    cssModule,
    children,
    toggle,
    tag: Tag,
    wrapTag: WrapTag,
    ...attributes
  } = props;

  const classes = mapToCssModules(cn(
    className,
    'modal-header'
  ), cssModule);

  if (toggle) {
    closeButton = (
      <Close type="button" onDismiss={toggle} aria-label="Close" />
    );
  }

  return (
    <WrapTag {...attributes} className={classes}>
      <Tag className={mapToCssModules('modal-title', cssModule)}>
        {children}
      </Tag>
      {closeButton}
    </WrapTag>
  );
};

ModalHeader.propTypes = propTypes;
ModalHeader.defaultProps = defaultProps;

export default ModalHeader;
