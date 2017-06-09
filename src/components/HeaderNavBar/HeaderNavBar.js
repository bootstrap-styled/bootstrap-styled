import React from 'react';
import PropTypes from 'prop-types';
import findDOMNode from 'react-dom/lib/findDOMNode';
import cn from 'classnames';
import bsTheme from 'theme';
import omit from 'lodash.omit';
import Button from '../Button';
import Header from '../Header';
import OffsetNavPush from './OffsetNavPush';
import OffsetNavSlide from './OffsetNavSlide';
import Overlay from './Overlay';

const defaultProps = {
  button: {
    component: Button,
  },
  alwaysShow: false,
  theme: bsTheme,
  noOverlay: false,
  belowNav: false,
  menuClose: false,
};

class HeaderNavBar extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    /* eslint-disable react/no-unused-prop-types */
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    theme: PropTypes.object,
    alwaysShow: PropTypes.bool,
    onClick: PropTypes.func,
    belowHeader: PropTypes.bool,
    offsetNavWidth: PropTypes.string,
    noOverlay: PropTypes.bool,
    menuClose: PropTypes.bool,
    cssModule: PropTypes.object,
    dismiss: PropTypes.func,
    button: PropTypes.shape({
      component: PropTypes.component,
      className: PropTypes.string,
    }),
    'nav-top': PropTypes.node,
    light: PropTypes.bool,
    inverse: PropTypes.bool,
    full: PropTypes.bool,
    fixed: PropTypes.string,
    sticky: PropTypes.string,
    color: PropTypes.string,
    'menu-right': PropTypes.bool,
    'animation-push': PropTypes.bool,
    /* eslint-enable react/no-unused-prop-types */
  }

  state = {
    show: false,
  };

  componentWillMount() {
    const { alwaysShow } = this.props;
    if (alwaysShow) {
      this.setState({ show: true });
    }
  }

  componentDidMount() {
    const componentAsANodeReact = findDOMNode(this);
    const node = componentAsANodeReact.querySelector('.navbar.justify-content-between');
    const nodeHeight = node.clientHeight;
    const offsetNav = componentAsANodeReact.querySelector('.offset-nav-margin-top');
    this.props.belowHeader ? (offsetNav.style.marginTop = `${nodeHeight}px`) : null; // eslint-disable-line no-unused-expressions
  }

  handleClick = (e) => {
    const { onClick, 'animation-push': animationPush, 'menu-right': menuRight } = this.props;
    const { show } = this.state;
    if (onClick) {
      onClick(e);
    }
    this.setState({ show: !show });

    // add .overflow class to body when triggered
    document.body.classList.toggle('overflow');

    //  menu-push animation
    if (animationPush) {
      menuRight ? ( // eslint-disable-line no-unused-expressions
        document.getElementById('wrapper').classList.toggle('right')
      ) : (
        document.getElementById('wrapper').classList.toggle('left')
      );
    }
  };

  render() {
    const {
      className,
      children,
      button,
      noOverlay,
      menuClose,
      offsetNavWidth,
      'nav-top': navTop,
      'menu-right': menuRight,
      'animation-push': animationPush,
      light,
      inverse,
      fixed,
      sticky,
      color,
      ...attributesTemp
    } = omit(this.props, ['theme', 'belowHeader', 'alwaysShow']);

    const {
      ...attributes
    } = omit(attributesTemp, ['onClick']);

    const {
      component: ButtonToggle,
      className: classNameButton,
      ...restButton
    } = button;

    const cssClasses = cn('navbar', 'justify-content-between', 'flex-row', className, {
      'navbar-light': light,
      'navbar-inverse': inverse,
      [`bg-${color}`]: color,
      [`fixed-${fixed}`]: fixed,
      [`sticky-${sticky}`]: sticky,
    });

    const buttonMenuRight = menuRight ? 'flex-last' : '';

    const buttonClasses = cn(buttonMenuRight, classNameButton, {
      'navbar-toggler-icon p-3 my-auto cursor-pointer': !classNameButton,
    });

    const OffsetMenuAnimated = animationPush ? (
      <OffsetNavPush
        className="offset-nav-margin-top"
        elementWidth={offsetNavWidth}
        active={this.state.show}
        menu-right={menuRight}
        animation-push={animationPush}
        menuClose={menuClose}
        dismiss={this.handleClick}
      >
        {children}
      </OffsetNavPush>
    ) : (
      <OffsetNavSlide
        className="offset-nav-margin-top"
        elementWidth={offsetNavWidth}
        active={this.state.show}
        menu-right={menuRight}
        animation-push={animationPush}
        menuClose={menuClose}
        dismiss={this.handleClick}
      >
        {children}
      </OffsetNavSlide>
    );

    return (
      <div>
        {!noOverlay && (<Overlay active={this.state.show} onClick={this.handleClick} />)}
        <Header className={cn(cssClasses)} {...attributes} innerRef={(header) => { this.header = header; }}>
          <ButtonToggle className={buttonClasses} onClick={this.handleClick} {...restButton} />
          {navTop && (<div>{navTop}</div>)}
        </Header>
        {OffsetMenuAnimated}
      </div>
    );
  }
}


HeaderNavBar.defaultProps = defaultProps;
export default HeaderNavBar;

